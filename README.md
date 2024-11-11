[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#table-of-contents)

<div align="center">
  <img src="https://raw.githubusercontent.com/NeofetchNpc/ArchiveTMP/refs/heads/main/img-mp4/neastooid.png" width="100%">
</div>

---

### `INFORMATION`
> Telebot adalah bot telegram yang memakai library [Telegraf](https://github.com/telegraf/telegraf). Bot ini hampir sama dengan bot WhatsApp pada umumnya. Namun, bot telegram tidak perlu melakukan scan qr dan pastinya anti banned.

## CARA PASANG APIKEY
1. Pastikan kamu sudah memiliki akun di website [Api Zeeoneofc](https://api.zeeoneofc.my.id/users/login)
2. Di bagian [Account Setting](https://api.zeeoneofc.my.id/account-settings) salin apikey kamu.
3. Ganti `Your Key` di file `settings.js` dengan apikey kamu.
```ts
// Api
global.APIs = {
	alfa: 'https://api.zeeoneofc.my.id',
}

// Apikey
global.APIKeys = {
	'https://api.zeeoneofc.my.id': 'Your Key',
}
```

> **Warning**: Jangan ganti link [https://api.zeeoneofc.my.id](https://api.zeeoneofc.my.id) karena itu adalah link apikey yang akan digunakan untuk fitur bot ini. 

--------

### `TELEGRAM TOKEN`

Untuk menggunakan [Telegram Bot API](https://core.telegram.org/bots/api),
Pertama kamu harus [Membuat Akun Bot](https://core.telegram.org/bots)
Melalui [BotFather](https://core.telegram.org/bots#6-botfather).

BotFather akan memberikan *bot token*, seperti ini `123456789:AbCdefGhIJKlmNoPQRsTUVwxyZ`.

Jika kamu sudah mendapatkan *bot token* silahkan ganti *bot token* pada file settings.

```js

global.BOT_TOKEN = "YOUR_TELEGRAM_BOT_TOKEN" //create bot here https://t.me/BotFather and get the bot token

```
