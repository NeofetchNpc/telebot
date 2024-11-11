const fs = require("fs");
const {
   indonesia
} = require("./language");

// Website Api (jgn di ganti biar gk eror)
global.APIs = {
   nstapi: 'https://api.neastooid.xyz', //apabila link api eror, segera laporkan ke owner
}

//language 
global.language = indonesia //change indonesia to english if you don't understand the language used by the bot

global.BOT_TOKEN = "YOUR_TELEGRAM_BOT_TOKEN" //create bot here https://t.me/BotFather and get the bot token
global.BOT_NAME = "LinucxMD Telegram Botz" //your bot name
global.OWNER_NAME = "NeofetchNpc" //your name
global.OWNER_NUMBER = "62887435047326" //your telegram number
global.OWNER = ["https://t.me/zeeoneofc"] // pastikan username sudah sesuai agar fitur khusus owner bisa di pakai
global.THUMBNAIL = "./image/lol.jpg" // ini lol.jpg adalah nama foto di folder image. untuk foto bot
global.DONASI = "./image/donasi.jpg" // foto donasi di folder image
global.lang = language //don't change
