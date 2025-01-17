/*

* TAKEN OVER BY PRINCE!!
* JOIN CH t.me/princehomemade
 
*/

global.owner = [
  "62882007138253", //ganti nomor owner
  "" //nomor owner kedua kalo ada
]
global.nomorbot = '62xxx'
global.urlfoto = 'https://'

let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})