/**
 * tittle : handle routes
 * description : handle routes
 * author :  ashaduzzaman akash
 * data : 29-10-23
 */

// dependencies
const { sampleHandler } = require('./handlers/routes/sampleHandler');

const routes = {
    sample: sampleHandler,
};

module.exports = routes;
