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

global.help = {
menu(pushname, salam, upload, download, totalGb, usedGb, freeGb, ownerName, botName, jam, tanggal, runtime, prefix){
  return `${salam.slice(0,1).toUpperCase() + salam.slice(1)} ${pushname}

╭✄┈┈┈⟬ *INFO-BOT* ⟭
┃• Creator : ${ownerName}
┃• Bot Name : ${botName}
┃• Time : ${jam}
┃• Date : ${tanggal}
┃• Runtime : ${runtime}
╚━━━━━━━━━━━━━━━ •◇

╭✄┈┈┈⟬ *LEADERBOARD* ⟭
┆± .Toporder
┆± .Topdeposit
┆± .Topbalance
┆± .Toplayanan
╰──────────◇

╔━━━━『 *_Main Menu_* 』━━━
┃• .Simi ( Ngobrol Sama Simi )
┃• .Help ( Lihat Menu )
┃• .Sewa ( Info Untuk Join Grup )
┃• .Rules ( Rules Bot )
┃• .Depo ( Untuk Deposit )
┃• .Infome ( Untuk Lihat Info Anda )
┃• .Runtime ( Status Bot Aktif )
┃• .Leaderboard ( Peringkat Saldo )
╚━━━━━━━━━━━━━━━ • •

╔━━━━『 *_Store Menu_* 』━━━
┃• .Menu ( Lihat List Menu )
┃• .Cekid ( Info Layanan SMM)
┃• .Cekstatus  ( Status Order SMM )
┃• .Deposit ( Untuk Isi Ulang Saldo )
┃• .Panel_Bot  ( List Panel Bot )
┃• .Smm  ( Menampilkan Layanan SMM )
┃• .Topup  ( Info Status Premium )
┃• .Buyprem  ( Info Status Premium )
╚━━━━━━━━━━━━━━━ •

╔━━━━『 *_Fitur Premium_* 』━━━
┃• .Listgc
┃• .Listpc
┃• .Obfus
┃• .Kenon
┃• .Verif@
┃• .Openai
┃• .Retasgc
┃• .Cekprem 
┃• .Listprem
┃• .Spamcall
┃• .Spamsms
┃• .Broadcast
┃• .Jadianime
╚━━━━━━━━━━━━━━━ •

╭✄┈┈┈⟬ *DOWNLOADER* ⟭
┃•  .play
┃•  .ig
┃•  .igdl
┃•  .ttdl
┃•  .ttvn
┃•  .ttmp3
┃•  .ytmp4
┃•  .ytmp3
┃•  .xnxxdl
┃•  .aiimage
┃•  .pinterest
┃•  .mediafire
╚━━━━━━━━━━━━━━━ •◇

╭✄┈┈┈⟬ *SEARCHING* ⟭
┃•  .lirik
┃•  .xnxx
┃•  .stiker
┃•  .gimage
┃•  .katabijak
┃•  .searchgc
┃•  .playstore
┃•  .walppaper
╚━━━━━━━━━━━━━━━ •◇

╭✄┈┈┈⟬ *STALKER* ⟭
┃•  .stalktt
┃•  .stalkig
┃•  .stalkyt
┃•  .stalkff
┃•  .stalkcr
┃•  .stalkgi
┃•  .stalkgt
┃•  .stalkgs
┃•  .stalktw
┃•  .stalkml
┃•  .stalkgh
┃•  .stalkhdi
┃•  .stalkgw
┃•  .stalksm
┃•  .stalkcoc
┃•  .stalkcod
┃•  .stalkcoc
┃•  .stalkcod
┃•  .stalkbgmi
┃•  .stalkpubg
╚━━━━━━━━━━━━━━━ •◇

╭✄┈┈┈⟬ *GAMES* ⟭
┃•  .tekateki
┃•  .tebaklirik
┃•  .tebakkata
┃•  .tebakkota
┃•  .susunkata
┃•  .tebakkimia
┃•  .tebaksiapa
┃•  .caklontong
┃•  .tebakkalimat
┃•  .tebakgambar
┃•  .tebaktebakan
┃•  .tebakbendera
┃•  .tebakkabupaten
╚━━━━━━━━━━━━━━━ •◇

╭✄┈┈┈⟬ *RANDOM STICKER* ⟭
┃•  .tyni
┃•  .chat
┃•  .dbfly
┃•  .jisoo
┃•  .doge
┃•  .lonte
┃•  .meow
┃•  .kucing
┃•  .patrick
┃•  .popoci
┃•  .kr-robot
┃•  .nicholas
┃•  .awoawo
┃•  .benedict
┃•  .hope-boy
┃•  .sponsbob
┃•  .menjamet
┃•  .gojosatoru
┃•  .dino-kuning
┃•  .manusia-lidi
┃•  .kawan-sponsbob
╚━━━━━━━━━━━━━━━ •◇

╭✄┈┈┈⟬ *CONVERT* ⟭
┃•  .s
┃•  .qc
┃•  .ttp
┃•  .attp
┃•  .tourl
┃•  .toimg
┃•  .tomp4
┃•  .smeme
┃•  .foliokiri
┃•  .nuliskiri
┃•  .foliokanan
┃•  .nuliskanan
╚━━━━━━━━━━━━━━━ •◇

╭✄┈┈┈⟬ *GROUP* ⟭
┃•  .p
┃•  .d
┃•  .list
┃•  .add
┃•  .kick
┃•  .open
┃•  .leave
┃•  .close
┃•  .jadian
┃•  .dellist
┃•  .setleft
┃•  .revoke
┃•  .addlist
┃•  .antilink
┃•  .hidetag
┃•  .demote
┃•  .jodohku
┃•  .setppgc
┃•  .promote
┃•  .delsetleft
┃•  .antiwame
┃•  .updatelist
┃•  .changeleft
┃•  .setnamegc
┃•  .setwelcome
┃•  .delsetwelcome
┃•  .changewelcome
╚━━━━━━━━━━━━━━━ •◇

⟬OWNER menu⟭
cekakun
updateprofit
updatesmm
updatepasca
cekorang
addblnc
lessblnc
leave
addsewa
delsewa
listusr
listsrv
addusr
addsrv
kenon`
}
}