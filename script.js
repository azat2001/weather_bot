bot.command('start', (ctx) => {
    ctx.reply('Откройте погодный информер', {
        reply_markup: {
            inline_keyboard: [[{text: "Погода", web_app: {url: "https://ваш_адрес.github.io"}}]]
        }
    });
});
