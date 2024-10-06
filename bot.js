require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');

// توکن بات تلگرام خود را در فایل .env قرار داده‌اید
const token = '7374433507:AAFB_DLMQOdZihX3cZzwPb0Q6lOFpThn4LU';
const bot = new TelegramBot(token, { polling: true });

// واکنش به دستور /start
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, "به صرافی بیتیوم خوش آمدید! برای خرید و فروش همستر و سایر ارز های دیجیتال دکمه شروع رو بزنید.", {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "باز کردن اپلیکیشن",
            web_app: { url: "https://bitiom.ir?chatId='"+chatId+"'"} // آدرس وب اپلیکیشن خود را وارد کنید
          }
        ]
      ]
    }
  });
});

// دریافت داده از وب اپلیکیشن (اختیاری)
bot.on('web_app_data', (msg) => {
  const chatId = msg.chat.id;
  const data = msg.web_app_data.data;
  bot.sendMessage(chatId, `داده دریافت شد: ${data}`);
});
