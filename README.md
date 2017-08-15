# angular_example
A simple webpage for ordering food based on Angular and Webpack.

## install dependencies

first, we need to install node, npm, webpack. 

Then run the following:

`npm install`

Then we need to re-install webpack2.0.1-beta due to the issue [here](https://github.com/jantimon/html-webpack-plugin/issues/607)

`npm install webpack@2.0.1-beta`

(Tested enviroments: Mac OSX 10.12 and Ubuntu 16.04)

## build
`cd angular_example`

`gulp`

Then the compiled bundle.js and index.html (also the assets) are in `dist/` folder.

## See the webpage:

use http-server to host the page (npm install -g httpserver), or simply open dist/index.html using Firefox.


