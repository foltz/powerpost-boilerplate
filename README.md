
###Project Structure:

* cfg-webpack - dev and production configuration for webpack
* cmds - example node scripts for build and deploy
* demo - express server for static html simulation
* dist - output directory for build step
* src - the code
  * html - index.html template for webpack-dev-server to render appLoader.js
  * mobx - mobx examples
  * react - react components
  * appLoader.js - root script for the react-app
  * vendorLibs.js - example script to separate vendor modules from the react-app (not in use)
     
 
 
###CLI Tasks:
 
* npm install - will install all of the node_modules
* npm start - starts webpack-dev-server on localhost:3000
* npm build - compiles index.html and appLoader.js into the /dist folder
* npm deploy - runs the node scripts for build and deploy
* npm demo - runs the express demo and webpack-dev-server
