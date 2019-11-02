
import dotenv from "dotenv";
import express from "express";
import compression from "compression";  // compresses requests
import session from "express-session";
import bodyParser from "body-parser";
import lusca from "lusca";
import path from "path";
import { Response, Request, NextFunction } from "express";
import { searchHealthController, searchController} from "./controller/search"
import { forbiddenController } from "./controller/error"

// initialize configuration
dotenv.config();

// port is now available to the Node.js runtime 
// as if it were an environment variable
const port = process.env.SERVER_PORT;
const app = express();
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "pug");
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let session_secret:string = process.env.SESSION_SECRET ? process.env.SESSION_SECRET: '';
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: session_secret
}));
app.use(lusca.xssProtection(true));

interface IUserRequest extends express.Request {
    session: any
}
function validateUser(req: Request, res: Response, next: express.NextFunction) {
    let req2:IUserRequest = <IUserRequest>req;
    if(req2.path == "/cv/forbidden" || 
        req2.path == "/cv/health" || 
        req2.path == "/api/health" ||
        req2.path == "/api/search/health"){
        //public path
        console.log("public")
        next();
    } else {
        if(!req2.session.user){
            console.log("private")
            //check user sso header and user authorization
            next()
        }else{
            console.log("user logged")
            next()
        }
    } 
}

// Error handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.log(err.stack);
    res.status(500).send({ "Error": err.stack });
});

// Public pages
app.get("/cv/forbidden", forbiddenController);
app.get("/api/health", (req:Request, res:Response) => { res.send(JSON.stringify({'status':'ok'})); });
app.get("/api/search/health", searchHealthController);

// Protected pages
app.use("/cv", validateUser, express.static(path.join(__dirname, "../build"), { maxAge: 60000000 }) ); // 60000000 == 1000 min
app.get("/api/search/:username", validateUser, searchController);

// start the express server
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});
