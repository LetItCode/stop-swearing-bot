require('dotenv').config()
const { Telegraf, groupChat } = require('telegraf')

const curseWords = ['пиздец', 'хуй', 'хуита', 'пидор', 'пидар', 'пи3дец']

const bot = new Telegraf(process.env.BOT_TOKEN)
bot.hears(curseWords, groupChat(ctx => ctx.deleteMessage()))
bot.catch(console.trace)
bot.launch()
