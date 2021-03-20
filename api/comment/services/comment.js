'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-services)
 * to customize this service
 */

module.exports = {
  async create(ctx) {
    try {
      const comment = await strapi.query('comment').create({
        name: ctx.name,
        email: ctx.email,
        content: ctx.content,
        article: ctx.article,
        status: null,
        published_at: null
      })

      ctx.created(comment)
    } catch (err) {
      console.log(err.stack);
      ctx.status = 400;
      return {};
    }
  }
};
