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
        subject: "New message from contact form",
        text: `
          Yay! We've got a new message.
          Имя: ${result.name}.
          Email: ${result.email}.
          Тема: ${result.subject}.
          Сообщение: ${result.message}.

          You can also check it out in Messages section of admin area.
        `
      })
    }
  }
};
