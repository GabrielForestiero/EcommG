'use strict';
require('dotenv').config();
require('module-alias/register');
const app = require('../app');
const logger = require('@logger');
const scheduleRunner = require('@lib/utils/schedule-runner');
const createDefaultAdmin = require('./create-default-admin');

return app.connectMongoose()
    .then(() => {
        const application = app.initialize();
        application.listen(process.env.SERVER_PORT);
        logger.info(`Your server is listening on port ${process.env.SERVER_PORT}`);
        scheduleRunner();
        createDefaultAdmin();
    })
    .catch((error) => {
        logger.error('APP STOPPED');
        logger.error(error.stack);
        return process.exit(1);
    });
