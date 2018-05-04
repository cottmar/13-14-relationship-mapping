## AUTHOR
Cara Version 1.0.0

## 13- RELATIONSHIP MAPPING

Building a RESTful HTTP server using express.

## Architecture
* **.env** - contains env variables **(should be git ignored)**
* **.gitignore** - contains a [robust](http://gitignore.io) `.gitignore` file
* **.eslintrc.json** - contains the course linter configuration
* **.eslintignore** - contains the course linter ignore configuration
* **.travis.yml** 
* **package.json** - contains npm package config
  * create a `test` script for running tests
  * create `dbon` and `dboff` scripts for managing the mongo daemon
* **db/** - contains mongodb files **(should be git ignored)**
* **index.js** - entry-point of the application
* **src/** - contains the remaining code
  * **src/lib/** - contains module definitions
  * **src/model/** - contains module definitions
  * **src/route/** - contains module definitions
  * **src/\_\_test\_\_/** - contains test modules
  * **main.js** - starts the server

## Getting Started
Install MongoDB database management system
  npm run dbon
startServer and stopServer, afterAll functions
Familiarity with NoSQL database management system
Create a custom data model through the use of mongoose.js

## Change Log
5-3-18 - 4:00pm -- forked lab from repo and created custom schema model
5-3-18 - 5:00pm -- tested starter code, all tests passing
5-3-18 - 9:00pm -- added GET 404, PUT 400, 404, 409 and DELETE 404
5-3-18 - 10:00 -- tried to get apiURL to work to hopefully pass tests and kept running into errors

## Credits
Judy for awesome starter code. 

## Question
I don't understand why the apiURL is 'not defined' when it is defined globally at the top of the module and worked with the starter code using apiURL. 



