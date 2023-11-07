/**
 * tittle : not found  handler
 * description : 404  not found  handler
 * author :  ashaduzzaman akash
 * data : 29-10-23
 */

// dependencies

// module scaffolding
const handler = {};

handler.notFoundHandler = (requestProperties, callback) => {
    callback(404, {
        message: 'Your requested URL was not found!',
    });
};

module.exports = handler;
