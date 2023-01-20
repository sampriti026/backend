'use strict';

/**
 * article-feedback service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::article-feedback.article-feedback');
