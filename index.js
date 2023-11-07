/**
 * tittle : uptime monitoring application
 * description :  a restful api to monitor up or down user defined links
 * author :  ashaduzzaman akash
 * data : 29-10-23
 */

// dependencies
const http = require('http');
const { handleReqRes } = require('./helpers/handleReqRes');
const environment = require( "./helpers/enviroment" );
const data = require( './lib/data' );


// app object - module scaffolding
const app = {};

// test file system
//todo: data 
data.create( 'test', 'newFile', { name: 'bangladesh', language: 'bangla' }, ( err ) => {
    console.log(`error was `,err);
})

// create server
// app.createServer = () => {
//     const server = http.createServer(app.handleReqRes);
//     server.listen(environment.port, () => {
//         console.log(`listening to port ${environment.port}`);
//     });
// };

// configuration
app.config = {
    port: 3000,
};

// create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, () => {
        console.log(`listening to port ${app.config.port}`);
    });
};

// handle Request Response
app.handleReqRes = handleReqRes;

// start the server
app.createServer();
