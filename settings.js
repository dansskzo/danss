/*
#LUBYZ
BUY NO ENC +62 821-8947-4878
*/

require("./all/module.js")
const { color } = require('./all/function')
const { version } = require("./package.json")
//========== Setting Owner ==========//
global.owner = "6281617692540"
global.owner2 = "GANTI NOMER KALIAN"
global.namaowner = "Lubyz"
global.botname = "Lubyz V1.5"
//======== Setting Bot & Link ========//
global.namabot = "Lubyz V1.5" 
global.namabot2 = "Lubyz V1.5"
global.foother = "© - Lubyz"
global.versibot = "1.0.5"
global.idsaluran = false
global.linkgc = 'https://whatsapp.com/channel/0029Vb3IiqTL7UVP9A9n0w1x'
global.linksaluran = "https://whatsapp.com/channel/0029Vb3IiqTL7UVP9A9n0w1x"
global.linkyt = 'https://youtube.com/@lubyz'
global.linktele = 'https://t.me/lubyz'
global.packname = "Lubyz V1.5"
global.author = "Lubyz"

//========== Setting Event ==========//
global.welcome = true
global.autoread = false
global.anticall = false
global.owneroff = false


//========== Setting Panel Server  1==========//
global.domain = ""
global.apikey = ""
global.capikey = ""
//======== egg & loc biasanya sama jadi gausah ========//
global.egg = "15"
global.loc = "1"

//========= Setting Message =========//
global.msg = {
"error": "Maaf terjadi kesalahan..",
"done": "Succesfully ✅", 
"wait": "Bot Sedang Memproses Tunggu Sebentar . . .", 
"group": "*• Group Only* Fitur Ini Hanya Untuk Di Dalam Grup!", 
"private": "*• Private Chat* Fitur Ini Hanya Untuk Didalam Private Chat!", 
"admin": "*• Admin Only* Fitur Ini Hanya Untuk Admin Grup!", 
"adminbot": "*• Bot Admin* Fitur Ini Dapat Digunakan Ketika Bot Menjadi Admin", 
"owner": "*• Owner Only* Fitur Ini Hanya Untuk Owner Bot!", 
"developer": "*• Developer Only* Fitur Ini Hanya Untuk Developer", 
"premium": "*• Premium Only* Fitur Ini Hanya Untuk user premium"

}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})