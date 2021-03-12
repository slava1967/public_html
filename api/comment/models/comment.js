'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
  lifecycles: {
    async afterCreate(result, data) {
      await strapi.plugins["email"].services.email.send({
        to: 'fx-slav@yandex.ru',
        from: "info@strapi.tovary-po-akcii.ru",
        subject: "New comment",
        text: `
          Yay! We've got a new comment.
          Имя: ${result.title}.
          Email: ${result.email}.
          Текст: ${result.content}.

          You can also check it out in Comments section of admin area.
        `
      })
    }
  }
};
