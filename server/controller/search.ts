
import { Response, Request, NextFunction } from "express";
import fetch from "node-fetch"
/**
 * GET /api/health
 */
export const searchHealthController = (req: Request, res: Response) => {
    // TODO: replace with solr health url
    let rsp = JSON.stringify({'status':'ok'})
    res.send(rsp);
};

/**
 * GET /api/search
 */
export const  searchController = async (req: Request, res: Response, next?: NextFunction) => {
    let user = await searchUser(req.params.username);
    res.json(user);
};

async function searchUser(username:string) {
    // read github user
    let githubResponse = await fetch(`https://api.github.com/users/${username}`);
    let githubUser = await githubResponse.json();
    return githubUser;
}   