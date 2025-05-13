'use strict';

/**
 * workspace-service service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::workspace-service.workspace-service');
