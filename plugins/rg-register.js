import { createHash } from 'crypto'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { text, usedPrefix, command }) {
	function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
	let namae = conn.getName(m.sender)
	const sections = [
	{
	title: "SELECCIONA AQUI TUA IDADE !",
	rows: [
	    {title: "Anos Random", rowId: '.reg ' + namae + '.' + pickRandom(['30','29','28','27','26','25','24','23','22','21','20','19','18','17','16','15','14','13','12','11','10','9'])}
	]
    },
    {
	title: "ADULTO",
	rows: [
	    {title: "30 Anos", rowId: '.reg ' + namae + '.30 '},
	    {title: "29 Anos", rowId: '.reg ' + namae + '.29 '},
	    {title: "28 Anos", rowId: '.reg ' + namae + '.28 '},
	{title: "27 Anos", rowId: '.reg ' + namae + '.27 '},
	{title: "26 Anos", rowId: '.reg ' + namae + '.26 '},
	{title: "25 Anos", rowId: '.reg ' + namae + '.25 '},
	{title: "24 Anos", rowId: '.reg ' + namae + '.24 '},
	{title: "23 Anos", rowId: '.reg ' + namae + '.23 '},
	{title: "22 Anos", rowId: '.reg ' + namae + '.22 '},
	{title: "21 Anos", rowId: '.reg ' + namae + '.21 '}
	]
    },
    {
	title: "JOVEM",
	rows: [
	    {title: "20 Anos", rowId: '.reg ' + namae + '.20 '},
	    {title: "19 Anos", rowId: '.reg ' + namae + '.19 '},
	    {title: "18 Anos", rowId: '.reg ' + namae + '.18 '},
	{title: "17 Anos", rowId: '.reg ' + namae + '.17 '},
	{title: "16 Anos", rowId: '.reg ' + namae + '.16 '},
	{title: "15 Anos", rowId: '.reg ' + namae + '.15 '},
	{title: "14 Anos", rowId: '.reg ' + namae + '.14 '},
	{title: "13 Anos", rowId: '.reg ' + namae + '.13 '},
	{title: "12 Anos", rowId: '.reg ' + namae + '.12 '},
	{title: "11 Anos", rowId: '.reg ' + namae + '.11 '},
	{title: "10 Anos", rowId: '.reg ' + namae + '.10 '},
	{title: "9 Anos", rowId: '.reg ' + namae + '.9 '}
	]
    },
]

const listMessage = {
  text: `┆Por favor selecione clicando no botao...\n┆SEU NOME: ${conn.getName(m.sender)}\n┆QUERES OUTRO NOME?\n┆ESCREVA *${usedPrefix + command} NOME.IDADE*\n╰──────•◈•───────╯`,
  footer: global.wm,
  title: "╭──────• ʀᴇɢɪsᴛʀᴏ •──────╮",
  buttonText: "Clique Aqui!",
  sections
}

  let user = global.db.data.users[m.sender]
  if (user.registered === true) throw `✳️ja ᴇsᴛᴀ ʀᴇɢɪsᴛʀᴀᴅᴏ(ᴀ)!!\nsɪ ǫᴜɪᴇʀᴇ ᴀɴᴜʟᴀʀ seu ʀᴇɢɪsᴛʀᴏ ᴜsᴇ ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ\n*${usedPrefix}unreg numero de serie*\nse ɴaᴏ recorda seᴜ ɴᴜᴍᴇʀᴏ ᴅᴇ sᴇʀɪᴇ ᴜsᴇ ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ\n*${usedPrefix}myns*`
  if (!Reg.test(text)) return conn.sendMessage(m.chat, listMessage, m)
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'O nome nao pode estar vazio'
  if (!age) throw 'A idade nao pode estar vazia (Numeros)'
  age = parseInt(age)
  if (age > 100) throw 'Que velho (。-`ω´-)'
  if (age < 5) throw '🚼  Infelizmente bebes nao se podem subscrever.✍️😳'
  if (name.length >= 30) throw '🐈 Foi baseado nisso, o nome é muito longo que quer uma ponte como nome😹' 
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.fromMe ? conn.user.jid : m.sender
global.db.data.users[m.sender].limit += 5
global.db.data.users[m.sender].exp += 400
  let caption = `┏──━∞ *ʀᴇɢɪsᴛʀᴀᴅᴏ* ∞─━─┓
┃ *NOME* 
┃➠ ${name}
┃• • • • • • • • • • • • • • • • • • •
┃ *IDADE*
┃➠ ${age} Anos
┃• • • • • • • • • • • • • • • • • • •
┃ *ɴᴜᴍᴇʀᴏ ᴅᴇ sᴇʀɪᴇ*
┃➠ ${sn}
┗─━─━─━∞◆∞━─━─━─┛`
//let author = global.author
await conn.sendButton(m.chat, caption, `ᴛeᴜ ɴᴜᴍᴇʀᴏ ᴅᴇ sᴇʀɪᴇ ᴛᴇ sᴇʀᴠɪʀᴀ ᴄᴀsᴏ ǫᴜɪᴇʀᴀ apagar seᴜ ʀᴇɢɪsᴛʀᴏ\nᴇxᴇᴍᴘʟᴏ ${usedPrefix}unreg ɴᴜᴍᴇʀᴏ ᴅᴇ sᴇʀɪᴇ\n${wm}`, [['ᴠᴇʀɪғᴀᴄᴀᴅᴏ(ᴀ)!! ✅', '/profile']], m)
await m.reply(`${sn}`) 
}
handler.help = ['daftar', 'register'].map(v => v + ' <nama>.<umur>')
handler.tags = ['rg']

handler.command = /^(verify|verificar|reg(ister)?)$/i

export default handler