'use strict';

/**
 *  workspace-service controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::workspace-service.workspace-service');
