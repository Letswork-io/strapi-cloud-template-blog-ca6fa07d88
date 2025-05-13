'use strict';

/**
 * workspace-service router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::workspace-service.workspace-service');
