/*
* JANGAN UBAH-UBAH INFO!!!
* "JANGAN MODAL NAMA DOANG BRO!!!"
* SCRIPT BY ARIS187 ID
* JANGAN MODAL NAMA DOANG BOSQ
* HARGAILAH YG MEMBUAT SCRIPT INI BOSQ
* JANGAN UBAH-UBAH INFO!!!
* ARIS187 ID
* BOLEH UBAH TAPI KECUALI INFO!!!
* CAPE CAPE BUAT SCRIPT EHH LU CUMAN MODAL NAMA CUK
* KASIH CREDITS LAH BOSQUE ARIS187ID
*/
const qrcode = require("qrcode-terminal") //ANAK ASU
const moment = require("moment-timezone") //TOBAT SU
const fs = require("fs") //SU
const vcard = 'BEGIN:VCARD\n' // ANAK ANJING MAU NGAPAIN?
            + 'VERSION:3.0\n' // NGAPAIN LAGI KALO GA MAU NUMPANG NAMA DOANG XIXIXIXI
            + 'FN:Aris🖤\n' // MENDING LU TOBAT SU!
            + 'ORG:Creator AR15BOT;\n' // KASIH CREDITS GUA SU!!!
            + 'TEL;type=CELL;type=VOICE;waid=6285722553839:+62 857-2255-3839\n' // JANGAN KEK BABI SU
            + 'END:VCARD' // ARIS187 ID

const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const arrayBulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']

const bulan = arrayBulan[moment().format('MM') - 1]

const config = {
    A187: '🔹>PudidiXBoT<🔹', // TOBAT SU ASU
    instagram: 'https://instagram.com/vec.m_', // INFO JANGAN DI UBAH
    nomer: 'wa.me/6285807107404', // INFO SU JNGAN DI UBAH
    youtube: 'https://youtube.com/channel/UCV9_aVlaGMoedyEn7YMnImQ', // KINTIL
    whatsapp: 'BelumAda', // BABI
    tanggal: `TANGGAL: ${moment().format('DD')} ${bulan} ${moment().format('YYYY')}`,
    waktu: time
}

const { tanggal, waktu, instagram, whatsapp, youtube, nomer, ontime } = config

const
{
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   mentionedJid,
   processTime,
} = require("@adiwajshing/baileys")

const {
    help,
    donate,
    info,
    aris1,
    beruang,
    laknat,
    love,
    rumah,
    aris2,
    pack1,
    pack2,
    pack3,
    pack4,
    pack5,
    pack6,
    pack7,
    pack8,
    pack9
} = require('./lib')

const { cowoPict, 
cewePict, 
animPict, 
waifu,
waifu2,
nsfwneko,
randomanime,
cooltext,
gltext,
hentai,
loli,
logogaming,
jokerlogo,
memecreate,
nulis,nekonime,
text3d,
pokemon,
randomcry,
randomkis,
wolflogo1,
wolflogo2,
lionlogo,
ttp,
ssweb,
texthunder,
ytmp3 } = require('./lib/aris2')

const { exec } = require("child_process")

const client = new WAConnection()

client.on('qr', qr => {
   qrcode.generate(qr, { small: true })
   console.log(`[ ${time} ] QR code is ready, subscribe Vectors Moe`)
})

client.on('credentials-updated', () => {
   const authInfo = client.base64EncodedAuthInfo()
   console.log(`credentials updated!`)

   fs.writeFileSync('./session.json', JSON.stringify(authInfo, null, '\t'))
})

fs.existsSync('./session.json') && client.loadAuthInfo('./session.json')

client.connect();

// client.on('user-presence-update', json => console.log(json.id + ' presence is => ' + json.type)) || console.log(`${time}: Bot by ig:@_sadboy.ig`)

client.on('message-status-update', json => {
   const participant = json.participant ? ' (' + json.participant + ')' : ''
   console.log(`[ ${time} ] => bot by ig:@vec.m_`)
})

client.on('message-new', async (m) => {
   const messageContent = m.message
   const text = m.message.conversation
   const messageType = Object.keys(messageContent)[0]

   const re = /[\#\!\@\/\?\%\$\.]/

   const value = text.split(' ').splice(1).join(' ')

   let id = m.key.remoteJid
   let imageMessage = m.message.imageMessage

   const prefix = messageType === 'imageMessage' ? imageMessage.caption.split(' ')[0].split(re)[1] : text.split(' ')[0].split(re)[1] // multiple prefix

   console.log(`[ ${time} ] => Nomor: [ ${id.split("@s.whatsapp.net")[0]} ] => ${text}`); 
 

    //A187 
   switch (prefix) {
       case 'help':
       case 'menu':
           client.sendMessage(id, help.help(id, tanggal),MessageType.text )
           break
      case 'donate':
      case 'donasi':
           client.sendMessage(id, donate.donate(id, tanggal, whatsapp, youtube, instagram, nomer),MessageType.text)
             break
      case 'info':
           client.sendMessage(id, info.info(id, tanggal, whatsapp, youtube, instagram, nomer),MessageType.text )
                break
                
       case 'roti':
client.sendPtt(id, './mp3/roti.wav', {quoted: m} )
                break
case 'salam':
client.sendPtt(id, './mp3/salam.mp3', {quoted: m} )
                break
case 'tariksis':
client.sendPtt(id, './mp3/tariksis.wav', {quoted: m} )
                break
case 'desah':
client.sendPtt(id, './mp3/desah.wav', {quoted: m} )
                break
case 'iri':
client.sendPtt(id, './mp3/iri.mp3', {quoted: m} )
                break

case 'baka':
client.sendPtt(id, './mp3/baka.wav', {quoted: m} )
                break
case 'goblok':
client.sendPtt(id, './mp3/goblok.wav', {quoted: m} )
                break
       case 'nulis':
          aris1('nulis', value)
               .then(data => {
                   client.sendMessage(id, '[❗] 𝐖𝐀𝐈𝐓 .....🖤, 𝐋𝐀𝐆𝐈 𝐏𝐑𝐎𝐒𝐄𝐒 ^_^',MessageType.text, { quoted: m} )
                   client.sendMessage(id, data ,MessageType.image, {caption: 'Jangan males nulis bosque🙉', quoted: m} )
               })
               .catch(err => {
                   console.log(err)
               })
           break
       case 'say':
           await client.sendMessage(id, value,MessageType.text)
           break
        case 'rumah':
           client.sendMessage(id, rumah.rumah(id), MessageType.text, { quoted: m} )
           break
       case 'beruang':
           client.sendMessage(id, beruang.beruang(id), MessageType.text, { quoted: m} )
           break
		case 'love':
           client.sendMessage(id, love.love(id), MessageType.text, { quoted: m} )
           break   
       case 'laknat':
           client.sendMessage(id, laknat.laknat(id), MessageType.text, { quoted: m} )
           break
            case 'pack1':
           client.sendMessage(id, pack1.pack1(id), MessageType.text, { quoted: m} )
           break
           case 'pack2':
           client.sendMessage(id, pack2.pack2(id), MessageType.text, { quoted: m} )
           break
           case 'pack3':
           client.sendMessage(id, pack3.pack3(id), MessageType.text, { quoted: m} )
           break
           case 'pack4':
           client.sendMessage(id, pack4.pack4(id), MessageType.text, { quoted: m} )
           break
           case 'pack5':
           client.sendMessage(id, pack5.pack5(id), MessageType.text, { quoted: m} )
           break
           case 'pack6':
           client.sendMessage(id, pack6.pack6(id), MessageType.text, { quoted: m} )
           break
           case 'pack7':
           client.sendMessage(id, pack7.pack7(id), MessageType.text, { quoted: m} )
           break
           case 'pack8':
           client.sendMessage(id, pack8.pack8(id), MessageType.text, { quoted: m} )
           break
           case 'pack9':
           client.sendMessage(id, pack9.pack9(id), MessageType.text, { quoted: m} )
           break
      case 'ping':
     case 'loading':
      client.sendMessage(id, '□□□□□0%',MessageType.text, { quoted: m} )
      client.sendMessage(id, '■□□□□20%',MessageType.text, { quoted: m} )
     client.sendMessage(id, '■■□□□40%',MessageType.text, { quoted: m} )
    client.sendMessage(id, '■■■□□60%',MessageType.text, { quoted: m} )
   client.sendMessage(id, '■■■■□80%',MessageType.text, { quoted: m} )
   client.sendMessage(id, '■■■■□90%',MessageType.text, { quoted: m} )
  client.sendMessage(id, '■■■■■100%',MessageType.text, { quoted: m} )
           break     
     
     
       case 'ytmp3':
           aris1('mp3', value)
               .then(data => {
                   const { title, filesize,result } = data
                   let hasil = `✅ Lagu Berhasil Di Download, silahkan klik link dan download hasilnya\nKlik link dibawah🗡️\n\nJudul: ${title}\n\nUkuran audio: ${filesize}\n\nLink: ${result}`
                   client.sendMessage(id, '[❗] 𝐖𝐀𝐈𝐓 .....🖤, 𝐋𝐀𝐆𝐈 𝐏𝐑𝐎𝐒𝐄𝐒 ^_^',MessageType.text, { quoted: m} )
                   client.sendMessage(id, hasil,MessageType.text, { quoted: m} )
               })
               .catch(err => {
                   console.log(err)
               })
           break
       case 'ytmp4':
           aris1('mp4', value)
               .then(data => {
                   const { title, filesize,result } = data
                   let hasil = `✅ Lagu Berhasil Di Download, silahkan klik link dan download hasilnya\nKlik link dibawah🗡️\n\nJudul: ${title}\n\nUkuran audio: ${filesize}\n\nLink: ${result}`
                   client.sendMessage(id, '[❗] 𝐖𝐀𝐈𝐓 .....🖤, 𝐋𝐀𝐆𝐈 𝐏𝐑𝐎𝐒𝐄𝐒 ^_^',MessageType.text, { quoted: m} )
                   client.sendMessage(id, hasil,MessageType.text, { quoted: m} )
               })
               .catch(err => {
                   console.log(err)
               })
           break
       case 'twt':
           aris1('twt', value)
               .then(data => {
                    const { size, hasil: link } = data
                    let hasil = `✅ Berhasil! silahkan klik link di bawah untuk mendownload hasilnya!\nKlik link dibawah🗡️\n\nSize: ${size}\n\nLink: ${link}`
                    client.sendMessage(id, '[❗] 𝐖𝐀𝐈𝐓 .....🖤, 𝐋𝐀𝐆𝐈 𝐏𝐑𝐎𝐒𝐄𝐒 ^_^',MessageType.text, { quoted: m} )
                    client.sendMessage(id, hasil ,MessageType.text, { quoted: m} )
               })
               .catch(err => {
                   console.log(err)
               })
           break
       case 'tiktok':
           aris1('tiktok', value)
               .then(data => {
                    const { url, nama, durasi, deskripsi } = data
                    let hasil = `✅ Berhasil!!! Silahkan klik link dibawah ini untuk mendownload hasilnya! \nKlik link dibawah🗡️\n\nJudul: ${deskripsi} \n\nDurasi: ${durasi}\n\nNama: ${nama}\n\nUrl: ${url}`;
                   client.sendMessage(id, '[❗] 𝐖𝐀𝐈𝐓 .....🖤, 𝐋𝐀𝐆𝐈 𝐏𝐑𝐎𝐒𝐄𝐒 ^_^',MessageType.text, { quoted: m} )
                     client.sendMessage(id, hasil,MessageType.text, { quoted: m} )
               })
               .catch(err => {
                   console.log(err)
               })
           break
       case 'wiki':
           aris1('wiki', value)
               .then(data => {
                    const { hasil: res } = data
                    let hasil = `📝Menurut Wikipedia:\n\n${res}`
                    client.sendMessage(id, '[❗] 𝐖𝐀𝐈𝐓 .....🖤, 𝐋𝐀𝐆𝐈 𝐏𝐑𝐎𝐒𝐄𝐒 ^_^',MessageType.text, { quoted: m} )
                    client.sendMessage(id, hasil,MessageType.text, { quoted: m} )
               })
               .catch(err => {
                   console.log(err)
               })
           break
       case 'sholat':
           aris1('jsholat', value)
               .then(data => {
                   const { Imsyak, Subuh, Dzuhur, Ashar, Maghrib, Isya, Dhuha } = data
                   let hasil = `Jadwal sholat di *${value}* hari ini adalah\n\n⚡Imsyak : ${Imsyak}\n⚡Subuh : ${Subuh} WIB\n⚡Dzuhur : ${Dzuhur}WIB\n⚡Ashar : ${Ashar} WIB\n⚡Maghrib : ${Maghrib}\n⚡Isya : ${Isya} WIB\n⚡Tengah malam : ${Dhuha} WIB`
                 client.sendMessage(id, '[❗] 𝐖𝐀𝐈𝐓 .....🖤, 𝐋𝐀𝐆𝐈 𝐏𝐑𝐎𝐒𝐄𝐒 ^_^',MessageType.text, { quoted: m} )
                     client.sendMessage(id, hasil,MessageType.text, { quoted: m} )
               })
               .catch(err => {
                   console.log(err)
               })
           break
       case 'quran':
           aris1('quran', value)
               .then(data => {
                   const re = /{(.*?)}/gi
                   const { acak, surat } = data

                   const keterangan = acak.id.ayat.replace(re, '')
                   const arText = acak.ar.teks
                   const idText = acak.id.teks
                   const surah= surat.nama

                   let hasil = `[${keterangan}]   ${arText}\n\n${idText}(QS.${surah}, Ayat ${keterangan})`;
                   client.sendMessage(id, '[❗] 𝐖𝐀𝐈𝐓 .....🖤, 𝐋𝐀𝐆𝐈 𝐏𝐑𝐎𝐒𝐄𝐒 ^_^',MessageType.text, { quoted: m} )
                   client.sendMessage(id, hasil,MessageType.text, { quoted: m} );
               })
               .catch(err => {
                   console.log(err)
               })
           break
       case 'pantun':
           aris1('pantun', value)
               .then(data => {
                   client.sendMessage(id, data,MessageType.text, { quoted: m} )
               })
               .catch(err => {
                   console.log(err)
               })
        
           

          case 'renungan':
           aris1('renungan', value)
               .then(data => {
                   client.sendMessage(id, data,MessageType.text, { quoted: m} )
               })
               .catch(err => {
                   console.log(err)
               })     
           break
       case 'covid':
           aris1('corona', value)
               .then(data => {
                   const { meninggal, sembuh, positif } = data
                   let hasil = `📌DATA WABAH COVID-19 TERBARU DI INDONESIA\n\n📍Positif ==> ${positif} \n📍Sembuh ==> ${sembuh} \n📍Meninggal ==> ${meninggal}`
                  client.sendMessage(id, '[❗] 𝐖𝐀𝐈𝐓 .....🖤, 𝐋𝐀𝐆𝐈 𝐏𝐑𝐎𝐒𝐄𝐒 ^_^',MessageType.text, { quoted: m} )
                    client.sendMessage(id, hasil,MessageType.text, { quoted: m} )
               })
               .catch(err => {
                   console.log(err)
               })
           break
       case 'quotes':
           aris1('quotes', value)
               .then(data => {
                   const { author, quotes } = data
                   let hasil = `_${quotes}_\n\n~${author}`
                   client.sendMessage(id, hasil,MessageType.text, { quoted: m} )
               })
               .catch(err => {
                   console.log(err)
               })
           break
       case 'nama':
           aris1('artinama', value)
               .then(data => {
                   const { result: arti } = data
                   let hasil = `\nArti nama mu adalah\n\n•--•--•--•--•--•--•--•--•--•--•--•--•--•--•--•--•\n\n       _${value}_ ${arti}\n\n•--•--•--•--•--•--•--•--•--•--•--•--•--•--•--•--•`
                 client.sendMessage(id, '[❗] 𝐖𝐀𝐈𝐓 .....🖤, 𝐋𝐀𝐆𝐈 𝐏𝐑𝐎𝐒𝐄𝐒 ^_^',MessageType.text, { quoted: m} )
                     client.sendMessage(id, hasil,MessageType.text, { quoted: m} )
               })
               .catch(err => {
                   console.log(err)
               })
           break
       case 'pasangan':
           aris1('pasangan', value)
               .then(data => {
                   const { positif, negatif } = data
                   const nama = value.split(/[\&\-\/\+]/)
                   let hasil = `\nKecocokan jodoh\n\n•--•--•--•--•--•--•--•--•--•--•--•--•--•--•--•--•\n\nPasangan 1: *${nama[0].trim(value)}*\nPasangan 2: *${nama[1].trim()}*\n\nsisi positif: ${positif}\nsisi negatif: ${negatif}\n\n•--•--•--•--•--•--•--•--•--•--•--•--•--•--•--•--•`
                   client.sendMessage(id, '[❗] 𝐖𝐀𝐈𝐓 .....🖤, 𝐋𝐀𝐆𝐈 𝐏𝐑𝐎𝐒𝐄𝐒 ^_^',MessageType.text, { quoted: m} )
                   client.sendMessage(id, hasil,MessageType.text, { quoted: m} )
               })
               .catch(err => {
                   console.log(err)
               })
           break
       case 'creator':
       case 'owner':
       client.sendMessage(id, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: m})
       client.sendMessage(id, 'Nieh nomer pacarku...Eeh maksudku nomer owner/creator,chat ajah terus di save, nanti di back kok kak ><',MessageType.text, { quoted: m} )
           break    
       case 'lirik':
           aris1('lirik', value)
               .then(data => {
                   const { hasil: lirik } = data
                   let hasil = `📍lirik lagu📍 *${value}* \n\n\n${lirik}`
                   client.sendMessage(id, '[❗] 𝐖𝐀𝐈𝐓 .....🖤, 𝐋𝐀𝐆𝐈 𝐏𝐑𝐎𝐒𝐄𝐒 ^_^',MessageType.text, { quoted: m} )
                   client.sendMessage(id, hasil,MessageType.text, { quoted: m} )
               })
               .catch(err => {
                   console.log(err)
               })
           break
   case 'fb':
           aris1('fb', value)
               .then(data => {
                   const { resultHD, resultSD } = data
                   let hasil = `Pilih resolusi nya sayang<3 \n\n\n HD ${resultHD} \n\n\n SD ${resultSD}`
                 client.sendMessage(id, '[❗] 𝐖𝐀𝐈𝐓 .....🖤, 𝐋𝐀𝐆𝐈 𝐏𝐑𝐎𝐒𝐄𝐒 ^_^',MessageType.text, { quoted: m} )
                     client.sendMessage(id, hasil,MessageType.text, { quoted: m} )
               })
               .catch(err => {
                   console.log(err)
               })
           break       
       case 'alay':
           aris1('alay', value)
               .then(data => {
                   const { hasil: alay } = data
                 client.sendMessage(id, '[❗] 𝐖𝐀𝐈𝐓 .....🖤, 𝐋𝐀𝐆𝐈 𝐏𝐑𝐎𝐒𝐄𝐒 ^_^',MessageType.text, { quoted: m} )
                     client.sendMessage(id, alay,MessageType.text, { quoted: m} )
               })
               .catch(err => {
                   console.log(err)
               })
           break
       case 'sticker':
       case 'stiker':
           const image = await client.downloadAndSaveMediaMessage(m)
           exec('cwebp -q 50 ' + image + ' -o temp/' + time + '.webp', (error, stdout, stderr) => {
               let result = fs.readFileSync('temp/' + time + '.webp')
               client.sendMessage(id, '[❗] 𝐖𝐀𝐈𝐓 .....🖤, 𝐋𝐀𝐆𝐈 𝐏𝐑𝐎𝐒𝐄𝐒 ^_^',MessageType.text, { quoted: m} )
               client.sendMessage(id, result, MessageType.sticker, { quoted: m} )
           })
           break
       case 'ocr':
           const media = await client.downloadAndSaveMediaMessage(m)
           readTextInImage(media)
               .then(data => {
                   client.sendMessage(id, `*Read Data Text in Image* \n\nHasil: \n\n${data}`,MessageType.text, { quoted: m} );
               })
               .catch(err => {
                   console.log(err)
               })
           break
       case 'igstalk':
           aris1('igstalk', value)
               .then(data => {
                   const { Username, Jumlah_Followers, Jumlah_Following, Name, Jumlah_Post } = data
                   client.sendMessage(id, '[WAIT] Stalking...⏳',MessageType.text, { quoted: m} )
                   let hasil = `✨Biodata Instagram _${value}_ \n\n 🧶 *Username* : ${Username}_ \n 🌀 *Nama* : _${Name}_ \n 🌟 *Jumlah Followers* : _${Jumlah_Followers}_ \n 🌠 *Jumlah_Following* : _${Jumlah_Following}_ \n ⭐ *Jumlah_Post* : _${Jumlah_Post}_ `
                   client.sendMessage(id, '[❗] 𝐖𝐀𝐈𝐓 .....🖤, 𝐋𝐀𝐆𝐈 𝐏𝐑𝐎𝐒𝐄𝐒 ^_^',MessageType.text, { quoted: m} )
                   client.sendMessage(id, hasil,MessageType.text, { quoted: m} )
               })
               .catch(err => {
                   client.sendMessage(id, err,MessageType.text, { quoted: m} )
               })
           break
           case 'cerpen':
           aris1('cerpen', value)
               .then(data => {
                   const { result } = data
                   let hasil = `_${result}_`
                   client.sendMessage(id, hasil,MessageType.text, { quoted: m} )
               })
               .catch(err => {
                   console.log(err)
               })
           break
           //A187
case 'puisi1':
           aris1('puisi1', value)
               .then(data => {
                   const { result} = data
                   let hasil = `_${result}_`
                   client.sendMessage(id, hasil,MessageType.text, { quoted: m} )
               })
               .catch(err => {
                   console.log(err)
               })
           break
case 'puisi2':
           aris1('puisi2', value)
               .then(data => {
                   const { result} = data
                   let hasil = `_${result}_`
                   client.sendMessage(id, hasil,MessageType.text, { quoted: m} )
               })
               .catch(err => {
                   console.log(err)
               })
           break
 case 'infogempa':
           aris1('infogempa', value)
               .then(data => {
                   const { lokasi, kedalaman, koordinat, magnitude, waktu } = data
                   let hasil = `*INFO GEMPA* \n\ *Lokasi* : _${lokasi}_ \n *Kedalaman* : _${kedalaman}_ \n *Koordinat* : _${koordinat}_ \n *Magnitude* : _${magnitude}_ \n *Waktu* : _${waktu}_`
                 client.sendMessage(id, '[❗] 𝐖𝐀𝐈𝐓 .....🖤, 𝐋𝐀𝐆𝐈 𝐏𝐑𝐎𝐒𝐄𝐒 ^_^',MessageType.text, { quoted: m} )
                     client.sendMessage(id, hasil,MessageType.text, { quoted: m} )
               })
               .catch(err => {
                   console.log(err)
               })
           break
   case 'chord':
           aris1('chord', value)
               .then(data => {
                   const { result } = data
                   let hasil = `Nih chord lagu *${value}* sayang ♥️\n\n  _${result}_ `
                 client.sendMessage(id, '[❗] 𝐖𝐀𝐈𝐓 .....🖤, 𝐋𝐀𝐆𝐈 𝐏𝐑𝐎𝐒𝐄𝐒 ^_^',MessageType.text, { quoted: m} )
                     client.sendMessage(id, hasil,MessageType.text, { quoted: m} )
               })
               .catch(err => {
                   console.log(err)
               })
   case 'kbbi':
           aris1('kbbi', value)
               .then(data => {
                   const { result } = data
                   let hasil = `*${value}* menurut KBBI ️\n\n  _${result}_ `
                  client.sendMessage(id, '[❗] 𝐖𝐀𝐈𝐓 .....🖤, 𝐋𝐀𝐆𝐈 𝐏𝐑𝐎𝐒𝐄𝐒 ^_^',MessageType.text, { quoted: m} )
                    client.sendMessage(id, hasil,MessageType.text, { quoted: m} )
               })
               .catch(err => {
                   console.log(err)
               })
           break        
           
           case 'zodiak':
 aris1('zodiak', value)
               .then(data => {
                   const { lahir, ultah, usia, zodiak } = data
                   let hasil = `*Lahir* : _${lahir}_ n\n *Ultah* : _${ultah}_ \n *Usia* : _${usia}_:\n *Zodiak* : _${zodiak}_ `
                client.sendMessage(id, '[❗] 𝐖𝐀𝐈𝐓 .....🖤, 𝐋𝐀𝐆𝐈 𝐏𝐑𝐎𝐒𝐄𝐒 ^_^',MessageType.text, { quoted: m} )
                      client.sendMessage(id, hasil,MessageType.text, { quoted: m} )
               })
               .catch(err => {
                   console.log(err)
               })
           break
  case 'simi':
            aris1('simi', value)
               .then(data => {
                   const { result } = data
                   let hasil = ` ${result} `
                   client.sendMessage(id, hasil,MessageType.text, { quoted: m} )
               })
               .catch(err => {
                   console.log(err)
               })
           break
 case 'wikien':
           aris1('wikien', value)
               .then(data => {
                   const { result } = data
                   let hasil = `*♻️According to Wikipedia🗿:* \n\n  _${result}_ `
                   client.sendMessage(id, '[❗] 𝐖𝐀𝐈𝐓 .....🖤, 𝐋𝐀𝐆𝐈 𝐏𝐑𝐎𝐒𝐄𝐒 ^_^',MessageType.text, { quoted: m} )
                   client.sendMessage(id, hasil,MessageType.text, { quoted: m} )
               })
               .catch(err => {
                   console.log(err)
               })
           break
case 'spamgmail':
           aris1('spamgmail', value)
               .then(data => {
                   const { logs } = data
                   let hasil = `_${logs}_`
                   client.sendMessage(id, '[❗] 𝐖𝐀𝐈𝐓 .....🖤, 𝐋𝐀𝐆𝐈 𝐏𝐑𝐎𝐒𝐄𝐒 ^_^',MessageType.text, { quoted: m} )
                   client.sendMessage(id, hasil,MessageType.text, { quoted: m} )
               })
               .catch(err => {
                   console.log(err)
               })
           break
		case 'setdesc':
    let desk = `${value}`;
    let idgrup = `${id.split("@s.whatsapp.net")[0]}`;
    conn.groupUpdateDescription(idgrup, desk)
conn.sendMessage(id, 'Succes Change Description Group' ,MessageType.text, {quoted: m} )
           
     break   
 case 'spamcall':
           aris1('spamcall', value)
               .then(data => {
                   const { logs } = data
                   let hasil = `_${logs}_`
                   client.sendMessage(id, '[❗] 𝐖𝐀𝐈𝐓 .....🖤, 𝐋𝐀𝐆𝐈 𝐏𝐑𝐎𝐒𝐄𝐒 ^_^',MessageType.text, { quoted: m} )
                   
                   client.sendMessage(id, hasil,MessageType.text, { quoted: m} )
               })
               .catch(err => {
                   console.log(err)
               })
           break
     case 'setname':
    let nama = `${value}`;
    let idgroup = `${id.split("@s.whatsapp.net")[0]}`;
    conn.groupUpdateSubject(idgroup, nama)
conn.sendMessage(id, 'Succes Change Name Group' ,MessageType.text, {quoted: m} )
           
     break
    
  
   
     //A187
  case 'spamsms':
           aris1('spamsms', value)
               .then(data => {
                   const { logs } = data
                   let hasil = `_${logs}_`
                   client.sendMessage(id, '[❗] 𝐖𝐀𝐈𝐓 .....🖤, 𝐋𝐀𝐆𝐈 𝐏𝐑𝐎𝐒𝐄𝐒 ^_^',MessageType.text, { quoted: m} )
                   client.sendMessage(id, hasil,MessageType.text, { quoted: m} )
               })
               .catch(err => {
                   console.log(err)
               })
           break
		case 'closegc':
   client.setGroupToAdminsOnly(groupId, true)
                    break    
       case 'joox':
           aris1('joox', value)
               .then(data => {
                   const { judul,mp3 } = data
                   let hasil = `*judul* : ${judul} \n*mp3* :${mp3}`
                   client.sendMessage(id, '[❗] 𝐖𝐀𝐈𝐓 .....🖤, 𝐋𝐀𝐆𝐈 𝐏𝐑𝐎𝐒𝐄𝐒 ^_^',MessageType.text, { quoted: m} )
                   client.sendMessage(id, hasil,MessageType.text, { quoted: m} )
               })
               .catch(err => {
                   console.log(err)
               })
           break    
           case 'renungan':
           aris1('renungan', value)
               .then(data => {
                   const { judul,isi,pesan } = data
                   let hasil = `Isi : ${isi} \njudul : ${judul} \npesan : ${pesan}`
                   client.sendMessage(id, hasil,MessageType.text, { quoted: m} )
               })
               .catch(err => {
                   console.log(err)
               })
           break    
      case 'cuaca':
           aris1('cuaca', value)
               .then(data => {
                   const { tempat,suhu,angin,kelembapan,cuaca } = data
                   let hasil = `Tempat : ${tempat}\nCuaca : ${cuaca}\nAngin : ${angin}\nSuhu : ${suhu}\nKelembapan : ${kelembapan}`
               client.sendMessage(id, '[❗] 𝐖𝐀𝐈𝐓 .....🖤, 𝐋𝐀𝐆𝐈 𝐏𝐑𝐎𝐒𝐄𝐒 ^_^',MessageType.text, { quoted: m} )
                       client.sendMessage(id, hasil,MessageType.text, { quoted: m} )
               })
               .catch(err => {
                   console.log(err)
               })
           break         
		case 'opengc':
    client.setGroupToAdminsOnly(groupId, false)
                    break
     case 'leave':
     client.leaveGroup(groupId)
                    break
              case 'hapus':      
       client.deleteMessage(quotedMsgObj.chatId, quotedMsgObj.id, false)
                    break             
 case 'covidcountry':
           aris1('covidcountry', value)
               .then(data => {
                   const { country, active, casesPerOneMillion, critical, deathsPerOneMillion, recovered, testPerOneMillion, todayCases, todayDeath, totalCases, totalTest } = data
                   let hasil = `*Negara* : _${country}_ \n\n *Active* : _${active}_ \n *CasesPerOneMillion* : _${casesPerOneMillion}_ \n *Critical* : ${critical}\n *DeathsPerOneMillion* : _${deathsPerOneMillion}_ \n *Recovered* : _${recovered}_ \n *TestPerOneMillion* : _${testPerOneMillion}_ \n *TodayCases* : _${todayCases}_ \n *TodayDeath : _${todayDeath}\n *TotalCases* : _${totalCases}_ \n  *TotalTest* : _${totalTest}_ `
                  client.sendMessage(id, '[❗] 𝐖𝐀𝐈𝐓 .....🖤, 𝐋𝐀𝐆𝐈 𝐏𝐑𝐎𝐒𝐄𝐒 ^_^',MessageType.text, { quoted: m} )
                    client.sendMessage(id, hasil,MessageType.text, { quoted: m} )
               })
               .catch(err => {
                   console.log(err)
                   
               })
           break
  case 'infoanime':
           aris1('infoanime', value)
               .then(data => {
                   const { result } = data
                   let hasil = `*INFO ANIME ${value} :* \n\n _${result}_  `
                   client.sendMessage(id, '[❗] 𝐖𝐀𝐈𝐓 .....🖤, 𝐋𝐀𝐆𝐈 𝐏𝐑𝐎𝐒𝐄𝐒 ^_^',MessageType.text, { quoted: m} )
                   client.sendMessage(id, hasil,MessageType.text, { quoted: m} )
               })
               .catch(err => {
                   console.log(err)
               })
           break
case 'gay':
           aris1('gay', value)
               .then(data => {
                   const { desc, persen } = data
                   let hasil = `*${desc} \n\n *Persen Gay Lu Tod!!!* _${persen}_  `
                   client.sendMessage(id, hasil,MessageType.text, { quoted: m} )
               })
               .catch(err => {
                   console.log(err)
               })
           break
  case 'indohot':
           aris1('indohot', value)
               .then(data => {
                   const { judul, genre, durasi, url } = data
                   let hasil = `Tobat GOBLOK-,-* \n\n *Judul* _${judul}_ \n\n *Status* _${genre}_ \n\n *Durasi* _${durasi}_ \n\n *Link Nya.* _${url}_  `
                   client.sendMessage(id, '[❗] 𝐖𝐀𝐈𝐓 .....🖤, 𝐋𝐀𝐆𝐈 𝐏𝐑𝐎𝐒𝐄𝐒 ^_^',MessageType.text, { quoted: m} )
                   client.sendMessage(id, hasil,MessageType.text, { quoted: m} )
               })
               .catch(err => {
                   console.log(err)
               })
           break
case 'filmanime':
           aris1('filmanime', value)
               .then(data => {
                   const { title, rating, sinopis, video } = data
                   let hasil = `*Film Anime ${value} :* \n\n *Judul* _${title}_ \n\n *Rating* _${rating}_ \n\n *Info* _${sinopsis}_ \n\n *Link Video* _${video}_  `
                   client.sendMessage(id, '[❗] 𝐖𝐀𝐈𝐓 .....🖤, 𝐋𝐀𝐆𝐈 𝐏𝐑𝐎𝐒𝐄𝐒 ^_^',MessageType.text, { quoted: m} )
                   client.sendMessage(id, hasil, MessageType.text)
               })
               .catch(err => {
                   console.log(err)
               })
           break
 case 'resep':
           aris1('resep', value)
               .then(data => {
                   const { title, user,  datePublished, dificulty, times, serving, bahan, tutor } = data
                   let hasil = `*Judul:* ${title}\n*Penulis:* ${user}\n*Rilis:* ${datePublished}\n*Level:* ${dificulty}\n*Waktu:* ${times}\n*Porsi:* ${servings}\n\n*Bahan-bahan:*\n${ingredient}\n\n*Step-by-step:*\n ${step} `
                   client.sendMessage(id, '[❗] 𝐖𝐀𝐈𝐓 .....🖤, 𝐋𝐀𝐆𝐈 𝐏𝐑𝐎𝐒𝐄𝐒 ^_^',MessageType.text, { quoted: m} )
                   client.sendMessage(id, hasil,MessageType.text, { quoted: m} )
               })
               .catch(err => {
                   console.log(err)
               })
           break
  case 'namaninja':
           aris1('namaninja', value)
               .then(data => {
                   const { ninja } = data
                   let hasil = `Nama Ninja *${value}*💡:\n\n _${ninja}_ `
                   client.sendMessage(id, '[❗] 𝐖𝐀𝐈𝐓 .....🖤, 𝐋𝐀𝐆𝐈 𝐏𝐑𝐎𝐒𝐄𝐒 ^_^',MessageType.text, { quoted: m} )
                   client.sendMessage(id, hasil,MessageType.text, { quoted: m} )
               })
               .catch(err => {
                   console.log(err)
               })
           break
  case 'cektanggal':
           aris1('cektanggal', value)
               .then(data => {
                   const { tanggal, keterangan } = data
                   let hasil = `Menurut tanggal ${value} adalah\n\n *Tanggal* : _${tanggal}_ \n *Keterangan* : _${keterangan}_  `
                 client.sendMessage(id, '[❗] 𝐖𝐀𝐈𝐓 .....🖤, 𝐋𝐀𝐆𝐈 𝐏𝐑𝐎𝐒𝐄𝐒 ^_^',MessageType.text, { quoted: m} )
                     client.sendMessage(id, hasil,MessageType.text, { quoted: m} )
               })
               .catch(err => {
                   console.log(err)
               })
           break
   case 'bitly':
           aris1('bitly', value)
               .then(data => {
                   const { result } = data
                   let hasil = `Nih kak udah jadi:) \n\n${result} `
                   client.sendMessage(id, '[❗] 𝐖𝐀𝐈𝐓 .....🖤, 𝐋𝐀𝐆𝐈 𝐏𝐑𝐎𝐒𝐄𝐒 ^_^',MessageType.text, { quoted: m} )
                   client.sendMessage(id, hasil,MessageType.text, { quoted: m} )
               })
               .catch(err => {
                   console.log(err)
               })
           break
     case 'cersex':
           aris1('cersex', value)
               .then(data => {
                   const { result } = data
                   let hasil = `CERSEX \n\n${result} `
                   client.sendMessage(id, hasil,MessageType.text, { quoted: m} )
               })
               .catch(err => {
                   console.log(err)
               })
           break
    case 'bucin':
           aris1('bucin', value)
               .then(data => {
                   const { desc } = data
                   let hasil = `_${desc}_ `
                   client.sendMessage(id, hasil,MessageType.text, { quoted: m} )
               })
               .catch(err => {
                   console.log(err)
               })
           break
             case 'pict':
           switch (value) {
               case 'cewek':
                   cewePict(value)
                       .then(buffer => {
                           client.sendMessage(id, '[❗] 𝐖𝐀𝐈𝐓 .....🖤, 𝐋𝐀𝐆𝐈 𝐏𝐑𝐎𝐒𝐄𝐒 ^_^',MessageType.text, { quoted: m} )
                           client.sendMessage(id, buffer ,MessageType.image, {caption: '𝐍𝐢𝐞𝐡 𝐁𝐨𝐬.', quoted: m} )
                       })
                       .catch(err => {
                           console.log(err)
                       })
                   break
               case 'cowok':
                   cowoPict(value)
                       .then(buffer => {
                           client.sendMessage(id, '[❗] 𝐖𝐀𝐈𝐓 .....🖤, 𝐋𝐀𝐆𝐈 𝐏𝐑𝐎𝐒𝐄𝐒 ^_^',MessageType.text, { quoted: m} )
                           client.sendMessage(id, buffer ,MessageType.image, {caption: '𝐍𝐢𝐞𝐡 𝐁𝐨𝐬.', quoted: m} )
                       })
                       .catch(err => {
                           console.log(err)
                       })
                   break
               default:
                   client.sendMessage(id, 'ulangi dengan  !pict cewek/cowok\n\nMisal: !pict cowok',MessageType.text, { quoted: m} )
                   break
           }
           break
       case 'animepict':
           animPict(value)
               .then(buffer => {
                   client.sendMessage(id, '[❗] 𝐖𝐀𝐈𝐓 .....🖤, 𝐋𝐀𝐆𝐈 𝐏𝐑𝐎𝐒𝐄𝐒 ^_^',MessageType.text, { quoted: m} )
                   client.sendMessage(id, buffer,MessageType.image, {caption: '𝐍𝐢𝐞𝐡 𝐁𝐨𝐬.', quoted: m} )
               })
               .catch(err => {
                   console.log(err)
               })
           break
           case 'map':
           map(value)
               .then(buffer => {
                   client.sendMessage(id, '[❗] 𝐖𝐀𝐈𝐓 .....🖤, 𝐋𝐀𝐆𝐈 𝐏𝐑𝐎𝐒𝐄𝐒 ^_^',MessageType.text, { quoted: m} )
                   client.sendMessage(id, buffer,MessageType.image, {caption: '𝐍𝐢𝐞𝐡 𝐁𝐨𝐬.', quoted: m} )
               })
               .catch(err => {
                   console.log(err)
               })
           break
           case 'waifu':
           waifu(value)
               .then(buffer => {
                   client.sendMessage(id, '[❗] 𝐖𝐀𝐈𝐓 .....🖤, 𝐋𝐀𝐆𝐈 𝐏𝐑𝐎𝐒𝐄𝐒 ^_^',MessageType.text, { quoted: m} )
                   client.sendMessage(id, buffer ,MessageType.image, {caption: '𝐍𝐢𝐞𝐡 𝐁𝐨𝐬.', quoted: m} )
               })
               .catch(err => {
                   console.log(err)
               })
           break
        case 'waifu2':
           waifu2(value)
               .then(buffer => {
                   client.sendMessage(id, '[❗] 𝐖𝐀𝐈𝐓 .....🖤, 𝐋𝐀𝐆𝐈 𝐏𝐑𝐎𝐒𝐄𝐒 ^_^', MessageType.text, { quoted: m} )
                   client.sendMessage(id, buffer ,MessageType.image, {caption: '𝐍𝐢𝐞𝐡 𝐁𝐨𝐬.', quoted: m} )
               })
               .catch(err => {
                   console.log(err)
               })
           break  
       case 'randomcry':
           randomcry(value)
               .then(buffer => {
                   client.sendMessage(id, '[❗] 𝐖𝐀𝐈𝐓 .....🖤, 𝐋𝐀𝐆𝐈 𝐏𝐑𝐎𝐒𝐄𝐒 ^_^',MessageType.text, { quoted: m} )
                   client.sendMessage(id, buffer,MessageType.image, {caption: '𝐍𝐢𝐞𝐡 𝐁𝐨𝐬.', quoted: m} )
               })
               .catch(err => {
                   console.log(err)
               })
               case 'randomanime':
           randomanime(value)
               .then(buffer => {
                   client.sendMessage(id, '[❗] 𝐖𝐀𝐈𝐓 .....🖤, 𝐋𝐀𝐆𝐈 𝐏𝐑𝐎𝐒𝐄𝐒 ^_^',MessageType.text, { quoted: m} )
                   client.sendMessage(id, buffer,MessageType.image, {caption: '𝐍𝐢𝐞𝐡 𝐁𝐨𝐬.', quoted: m} )
               })
               .catch(err => {
                   console.log(err)
               })
              case 'randomkis':
           randomkis(value)
               .then(buffer => {
                   client.sendMessage(id, '[❗] 𝐖𝐀𝐈𝐓 .....🖤, 𝐋𝐀𝐆𝐈 𝐏𝐑𝐎𝐒𝐄𝐒 ^_^',MessageType.text, { quoted: m} )
                   client.sendMessage(id, buffer,MessageType.imagegif,)
               })
               .catch(err => {
                   console.log(err)
               }) 
           break    
          case 'texthunder':
           texthunder(value)
               .then(buffer => {
                   client.sendMessage(id, '[❗] 𝐖𝐀𝐈𝐓 .....🖤, 𝐋𝐀𝐆𝐈 𝐏𝐑𝐎𝐒𝐄𝐒 ^_^',MessageType.text, { quoted: m} )
                   client.sendMessage(id, buffer,MessageType.image, {caption: '𝐍𝐢𝐞𝐡 𝐁𝐨𝐬.', quoted: m} )
               })
               .catch(err => {
                   console.log(err)
               })
           break     
      case 'loli':
           loli(value)
               .then(buffer => {
                   client.sendMessage(id, '[❗] 𝐖𝐀𝐈𝐓 .....🖤, 𝐋𝐀𝐆𝐈 𝐏𝐑𝐎𝐒𝐄𝐒 ^_^',MessageType.text, { quoted: m} )
                   client.sendMessage(id, buffer,MessageType.image, {caption: '𝐍𝐢𝐞𝐡 𝐁𝐨𝐬.', quoted: m} )
               })
               .catch(err => {
                   console.log(err)
               })
           break     
        case 'logogaming':
           logogaming(value)
               .then(buffer => {
                   client.sendMessage(id, '[❗] 𝐖𝐀𝐈𝐓 .....🖤, 𝐋𝐀𝐆𝐈 𝐏𝐑𝐎𝐒𝐄𝐒 ^_^',MessageType.text, { quoted: m} )
                   client.sendMessage(id, buffer,MessageType.image, {caption: '𝐍𝐢𝐞𝐡 𝐁𝐨𝐬.', quoted: m} )
               })
               .catch(err => {
                   console.log(err)
               })
           break       
           case 'ssweb':
           ssweb(value)
               .then(buffer => {
                   client.sendMessage(id, '[❗] 𝐖𝐀𝐈𝐓 .....🖤, 𝐋𝐀𝐆𝐈 𝐏𝐑𝐎𝐒𝐄𝐒 ^_^',MessageType.text, { quoted: m} )
                   client.sendMessage(id, buffer,MessageType.image, {caption: '𝐍𝐢𝐞𝐡 𝐁𝐨𝐬.', quoted: m} )
               })
               .catch(err => {
                   console.log(err)
               })
           break
           case 'hentai':
           hentai(value)
               .then(buffer => {
                   client.sendMessage(id, '[❗] 𝐖𝐀𝐈𝐓 .....🖤, 𝐋𝐀𝐆𝐈 𝐏𝐑𝐎𝐒𝐄𝐒 ^_^',MessageType.text, { quoted: m} )
                   client.sendMessage(id, buffer,MessageType.image, {caption: '𝐍𝐢𝐞𝐡 𝐁𝐨𝐬.', quoted: m} )
               })
               .catch(err => {
                   console.log(err)
               })
           break
         case 'memecreate':
           memecreate(value)
               .then(buffer => {
                   client.sendMessage(id, '[❗] 𝐖𝐀𝐈𝐓 .....🖤, 𝐋𝐀𝐆𝐈 𝐏𝐑𝐎𝐒𝐄𝐒 ^_^',MessageType.text, { quoted: m} )
                   client.sendMessage(id, buffer,MessageType.image, {caption: '𝐍𝐢𝐞𝐡 𝐁𝐨𝐬.', quoted: m} )
               })
               .catch(err => {
                   console.log(err)
               })    
           break  
           //A187
      case 'jokerlogo':
           jokerlogo(value)
               .then(buffer => {
                   client.sendMessage(id, '[❗] 𝐖𝐀𝐈𝐓 .....🖤, 𝐋𝐀𝐆𝐈 𝐏𝐑𝐎𝐒𝐄𝐒 ^_^',MessageType.text, { quoted: m} )
                   client.sendMessage(id, buffer,MessageType.image, {caption: '𝐍𝐢𝐞𝐡 𝐁𝐨𝐬.', quoted: m} )
               })
               .catch(err => {
                   console.log(err)
               })    
           break      
   case 'gltext':
           gltext(value)
               .then(buffer => {
                   client.sendMessage(id, '[❗] 𝐖𝐀𝐈𝐓 .....🖤, 𝐋𝐀𝐆𝐈 𝐏𝐑𝐎𝐒𝐄𝐒 ^_^',MessageType.text, { quoted: m} )
                   client.sendMessage(id, buffer,MessageType.image, {caption: '𝐍𝐢𝐞𝐡 𝐁𝐨𝐬.', quoted: m} )
               })
               .catch(err => {
                   console.log(err)
               })        
          case 'blackpink':
           blackpink(value)
               .then(buffer => {
                   client.sendMessage(id, '[❗] 𝐖𝐀𝐈𝐓 .....🖤, 𝐋𝐀𝐆𝐈 𝐏𝐑𝐎𝐒𝐄𝐒 ^_^',MessageType.text, { quoted: m} )
                   client.sendMessage(id, buffer,MessageType.image, {caption: '𝐍𝐢𝐞𝐡 𝐁𝐨𝐬.', quoted: m} )
               })
               .catch(err => {
                   console.log(err)
               })
           break   
     case 'cooltext':
           cooltext(value)
               .then(buffer => {
                   client.sendMessage(id, '[❗] 𝐖𝐀𝐈𝐓 .....🖤, 𝐋𝐀𝐆𝐈 𝐏𝐑𝐎𝐒𝐄𝐒 ^_^',MessageType.text, { quoted: m} )
                   client.sendMessage(id, buffer,MessageType.image, {caption: '𝐍𝐢𝐞𝐡 𝐁𝐨𝐬.', quoted: m} )
               })
               .catch(err => {
                   console.log(err)
               })
           break      
           case 'ttp':
           ttp(value)
               .then(buffer => {
                   client.sendMessage(id, '[❗] 𝐖𝐀𝐈𝐓 .....🖤, 𝐋𝐀𝐆𝐈 𝐏𝐑𝐎𝐒𝐄𝐒 ^_^',MessageType.text, { quoted: m} )
                   client.sendMessage(id, buffer,MessageType.image, {caption: '𝐍𝐢𝐞𝐡 𝐁𝐨𝐬.', quoted: m} )
               })
               .catch(err => {
                   console.log(err)
               })
           case 'pokemon':
           pokemon(value)
               .then(buffer => {
                   client.sendMessage(id, '[❗] 𝐖𝐀𝐈𝐓 .....🖤, 𝐋𝐀𝐆𝐈 𝐏𝐑𝐎𝐒𝐄𝐒 ^_^',MessageType.text, { quoted: m} )
                   client.sendMessage(id, buffer,MessageType.image, {caption: '𝐍𝐢𝐞𝐡 𝐁𝐨𝐬.', quoted: m} )
               })
               .catch(err => {
                   console.log(err)
               })
           break
           case 'nsfwneko':
           nsfwneko(value)
               .then(buffer => {
                   client.sendMessage(id, '[❗] 𝐖𝐀𝐈𝐓 .....🖤, 𝐋𝐀𝐆𝐈 𝐏𝐑𝐎𝐒𝐄𝐒 ^_^',MessageType.text, { quoted: m} )
                   client.sendMessage(id, buffer ,MessageType.image, {caption: '𝐍𝐢𝐞𝐡...', quoted: m} )
               })
               .catch(err => {
                   console.log(err)
               })
          case 'wolflogo1':
           wolflogo1(value)
               .then(buffer => {
                   client.sendMessage(id, '[❗] 𝐖𝐀𝐈𝐓 .....🖤, 𝐋𝐀𝐆𝐈 𝐏𝐑𝐎𝐒𝐄𝐒 ^_^',MessageType.text, { quoted: m} )
                   client.sendMessage(id, buffer ,MessageType.image, {caption: '𝐍𝐢𝐞𝐡 𝐁𝐨𝐬.', quoted: m} )
               })
               .catch(err => {
                   console.log(err)
               })
           case 'wolflogo2':
           wolflogo2(value)
               .then(buffer => {
                   client.sendMessage(id, '[❗] 𝐖𝐀𝐈𝐓 .....🖤, 𝐋𝐀𝐆𝐈 𝐏𝐑𝐎𝐒𝐄𝐒 ^_^',MessageType.text, { quoted: m} )
                   client.sendMessage(id, buffer ,MessageType.image, {caption: '𝐍𝐢𝐞𝐡 𝐁𝐨𝐬.', quoted: m} )
               })
               .catch(err => {
                   console.log(err)
               })
              case 'lionlogo':
           lionlogo(value)
               .then(buffer => {
                   client.sendMessage(id, '[❗] 𝐖𝐀𝐈𝐓 .....🖤, 𝐋𝐀𝐆𝐈 𝐏𝐑𝐎𝐒𝐄𝐒 ^_^',MessageType.text, { quoted: m} )
                   client.sendMessage(id, buffer ,MessageType.image, {caption: '𝐍𝐢𝐞𝐡 𝐁𝐨𝐬.', quoted: m} )
               })
               .catch(err => {
                   console.log(err)
               })          
          break
          case 'nekonime':
           nekonime(value)
               .then(buffer => {
                   client.sendMessage(id, '[❗] 𝐖𝐀𝐈𝐓 .....🖤, 𝐋𝐀𝐆𝐈 𝐏𝐑𝐎𝐒𝐄𝐒 ^_^',MessageType.text, { quoted: m} )
                   client.sendMessage(id, buffer ,MessageType.image, {caption: '𝐍𝐢𝐞𝐡 𝐁𝐨𝐬.', quoted: m} )
               })
               .catch(err => {
                   console.log(err)
               })
          break
       case 'randomkis':
           randomkis(value)
               .then(buffer => {
                   client.sendMessage(id, '[❗] 𝐖𝐀𝐈𝐓 .....🖤, 𝐋𝐀𝐆𝐈 𝐏𝐑𝐎𝐒𝐄𝐒 ^_^',MessageType.text, { quoted: m} )
                   client.sendMessage(id, buffer,MessageType.imagegif, {caption: '𝐍𝐢𝐞𝐡 𝐁𝐨𝐬.', quoted: m} )
               })
               .catch(err => {
                   console.log(err)
               })        
           break
           case 'ytmp3':
           case 'ytmp4':
           ytmp3(value)
               .then(buffer => {
                   client.sendMessage(id, '[❗] 𝐖𝐀𝐈𝐓 .....🖤, 𝐋𝐀𝐆𝐈 𝐏𝐑𝐎𝐒𝐄𝐒 ^_^',MessageType.text, { quoted: m} )
                   client.sendMessage(id, buffer ,MessageType.image, {caption: '𝐍𝐢𝐞𝐡 𝐁𝐨𝐬.', quoted: m} )
               })
               .catch(err => {
                   console.log(err)
               })
           break
         
      
     case 'sticker':
            if (isMedia && type === 'image') {
                const mediaData = await decryptMedia(message, uaOverride)
                const imageBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
                await client.sendImageAsSticker(from, imageBase64)
            } else if (quotedMsg && quotedMsg.type == 'image') {
                const mediaData = await decryptMedia(quotedMsg, uaOverride)
                const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
                await client.sendImageAsSticker(from, imageBase64)
            } else if (args.length === 2) {
                const url = args[1]
                if (url.match(isUrl)) {
                    await client.sendStickerfromUrl(from, url, { method: 'get' })
                        .catch(err => console.log('Caught exception: ', err))
                } else {
                    client.reply(from, mess.error.Iv, id)
                }
            } else {
                    client.reply(from, mess.error.St, id)
            }
            break       
       default:
           break
   }
})



/*
*ARIS187 ID
*ARIS187 ID
*ARIS187 ID
*ANAK ANJING MAU NGAPAIN?
*HARGAIN CREATOR ASLINYA BOSQUE
*GUA SUSAH PAYAH BUAT,KALIAN CUMAN MODAL NAMA SU
*TANPA KASIH CREDITS LAGI,,,,NYESEK SU ASU
*DIBILANG JANGAN UBAH INFO!!
*KASIH GUA CREDITS SEDIKIT BANGKE
*ANAK HARAM MANA MUNGKIN NURUT XIXIXIXXI
*ARIS187 ID
*ARIS187 ID
*ARIS187ID
*/

