const fs = require('fs')

//janji 100% no enc ygy 

// Api
global.APIs = {
	alfa: 'https://api.zeeoneofc.my.id',
}

// Apikey
global.APIKeys = {
	'https://api.zeeoneofc.my.id': 'virtualDimension', //pake apikey lu ambil di zeeone
}

global.namabot = "-"
global.namaowner = "-"
global.packname = namabot
global.author = namaowner
global.myweb = "https://chat.whatsapp.com/EGzRs1GR9m70z3btMLFXq7"
global.footer_text = "© " + namabot
global.pp_bot = fs.readFileSync("./db/foto.jpg")
global.qris = fs.readFileSync("./db/qris.jpg")
global.planet = fs.readFileSync("./db/planet.png")
global.owner = ['6281238996370'] //nomor owner
global.sessionName = 'session'
global.background = "https://telegra.ph/file/40342e0085d521cb8b907.jpg"
global.prefa = ['-_-']
global.mess = {
    done: 'Done ✅',
    wait: '_⌛ Sedang di proses_',
    admin: '_Fitur Khusus Admin Group_',
    botNotAdmin: '_Jadikan Bot Sebagai Admin Terlebih Dahulu_',
    owner: '_Fitur Khusus Owner Bot_',
    group: '_Fitur Khusus Dalam Group_',
    npc: '_Lanjut di Chat pribadi ya kak 💩_',
    error: 'Error, mungkin apikeynya',
}
global.butwel =  [{
   buttonId: '.menu',
   buttonText: {
      displayText: '⚡ Menu'
   },
   type: 1
}, {
   buttonId: '.owner',
   buttonText: {
      displayText: 'Owner 👤'
   },
   type: 1
}]

global.limite = {
	limitCount: 10,
    prem: 'Unlimited',
    user: 1,
	}
