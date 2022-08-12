let handler = async (m, { conn, text, usedPrefix, command }) => {
let name = await conn.getName(m.sender)
  let wm = global.wm
hyzer = {
    key : {
  remoteJid: 'status@broadcast@ad',
  participant : '0@s.whatsapp.net'
    },
  message: { 
  "extendedTextMessage": {
  "text": '*my friends*',
  "title": wm,
  'jpegThumbnail': 'https://telegra.ph/file/d62276c3879ab7428dcf7.png',
        }
       } 
     }
conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/bf57d2f268b210786d3bc.jpg', hyzer, { packname: "sticker by", author: "hyzer" })
}

handler.customPrefix = /^(Terima Kasih|Thanks|tq)$/i
handler.command = new RegExp

module.exports = handler
