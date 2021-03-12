'use strict';

const slugify = require('slugify');

module.exports = {
  /**
   * Triggered before user creation.
   */
  lifecycles: {
    async beforeCreate(data) {
      if (data.title) {
        data.slug = slugify(data.title, {lower: true});
      }
    },
    async beforeUpdate(params, data) {
      if (data.title) {
        data.slug = slugify(data.title, {lower: true});
      }
    },
    async afterCreate(result, data) {
      await strapi.plugins["email"].services.email.send({
        to: 'fx-slav@yandex.ru',
        from: "info@strapi.tovary-po-akcii.ru",
        subject: "New article",
        text: `
          Yay! We've got a new article.
          Имя: ${result.title}.
          Текст: ${result.content}.

          You can also check it out in Articles section of admin area.
        `
      })
    }
  }
};
