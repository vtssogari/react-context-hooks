## GitHub install
```
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/vtssogari/react-context-hooks.git
git push -u origin master
``` 
## react app with typescript support
```
npm install -g create-react-app
create-react-app react-context-hooks --scripts-version=react-scripts-ts
```
## bootstrap 
```
npm install --save bootstrap
```


## Dependecies for Node Server
```
npm install --save express session lusca dotenv express-session compression axios node-fetch
npm install --save-dev ts-node-dev shelljs fs-extra nodemon rimraf npm-run-all concurrently
npm install --save-dev @types/express @types/fs-extra @types/shelljs @types/dotenv @types/lusca @types/express-session @types/compression @types/node-fetch
```

|Module  |	Description|
| ------------- |:-------------:|
|ts-node |	Use to run TypeScript files directly.|
|shelljs |	Use to execute shell commands such as to copy files and remove directories.|
|fs-extra|	A module that extends the Node.js file system (fs) module with features such as reading and writing JSON files.|
|rimraf  |	Use to recursively remove folders.|
|npm-run-all|	Use to execute multiple npm scripts sequentially or in parallel.|
|nodemon |	A handy tool for running Node.js in a development environment. Nodemon watches files for changes and automatically restarts the Node.js application when changes are detected. No more stopping and restarting Node.js!|


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

### `yarn server`

Runs server.ts in the development mode. 
It watches on code changes and compiling automatically.

### `yarn start`

Runs the ui app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn dev`

Runs both Server and UI at the same time, and kills them togather when it is stoped.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
