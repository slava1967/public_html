'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-services)
 * to customize this service
 */

module.exports = {
  async create(ctx) {
    try {
      const article = await strapi.query('article').create({
        name: ctx.title,
        content: ctx.content,
        categories: [],
        status: null,
        published_at: null
      })

      ctx.created(article)
    } catch (err) {
      console.log(err.stack);
      ctx.status = 400;
      return {};
    }
  }
};
