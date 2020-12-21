const axios = require('axios')

const Aris1 = (mode, A187 ) => new Promise((resolve, reject) => {
    if (typeof A187 === 'Yah gagal;(, ulang lagi yah') { reject('harap teliti gan..') }
    switch(mode) {
        case 'mp3':
            var url = `https://tobz-api.herokuapp.com/api/ytv?url=${A187}`
            axios.get(url)
                .then(res => {
                    const { title,filesize,result} = res.data
                    resolve({ title,filesize,result })
                })
        case 'mp4':
            var url = `https://tobz-api.herokuapp.com/api/ytv?url=${A187}`
            axios.get(url)
                .then(res => {
                    const { title,filesize,result } = res.data
                    resolve({ title,filesize,result })
                })
           case 'alay':    
                var url = `https://api.terhambar.com/bpk?kata=${A187}`
        axios.get(url)
            .then(res => {
                const { text: hasil } = res.data
                resolve({ hasil })
             })
             case 'spamsms':    
             var url = `https://arugaz.herokuapp.com/api/spamsms?no=${A187}&jum=20`
        axios.get(url)
            .then(res => {
                const { logs } = res.data
                resolve({ hasil })
             })
             case 'wiki':    
              var url = `https://st4rz.herokuapp.com/api/wiki?q=${A187}`
        axios.get(url)
            .then(res => {
                const { result: hasil } = res.data
                resolve({ hasil })
             })
             case 'wikien':    
              var url = `https://arugaz.herokuapp.com/api/wikien?q=${A187}`
        axios.get(url)
            .then(res => {
                const { result } = res.data
                resolve({ hasil })
             })
             case 'twt':    
             var url = `https://mhankbarbar.herokuapp.com/api/twit?url=${link}&apiKey=${process.env.MANGBARBAR_KEY}`
        axios.get(url)
            .then(res => {
                const { filesize: size, result: hasil } = res.data
                resolve({ size, hasil })
             })
             case 'spamgmail':    
             var url = `https://arugaz.herokuapp.com/api/spamgmail?target=${A187}&jum=10}`
        axios.get(url)
            .then(res => {
                const { logs } = res.data
                resolve({ hasil })
             })
             case 'tiktok':    
             var url = `https://st4rz.herokuapp.com/api/tiktok?url=${link}`
        axios.get(url)
            .then(res => {
                const { urlvideo: url, nama: nama, durasi, deskripsi } = res.data
                resolve({ url, nama, durasi, deskripsi })
             })
             case 'quran':    
             var url = `https://api.banghasan.com/quran/format/json/acak`
        axios.get(url)
            .then(res => {
                const { acak, surat } = res.data
                resolve({ acak, surat })
             })
             case 'spamcall':    
             var url = `https://arugaz.herokuapp.com/api/spamcall?no=${A187}`
        axios.get(url)
            .then(res => {
                const { logs } = res.data
                resolve({ hasil })
             })
            case 'artinama':    
                var url = `https://arugaz.herokuapp.com/api/artinama?nama=${nama}`
        axios.get(url)
            .then(res => {
                const { result } = res.data
                resolve({ result })
             })
             case 'bitly':    
                var url = `https://api.haipbis.xyz/bitly?url=${A187}`
        axios.get(url)
            .then(res => {
                const { result} = res.data
                resolve({ hasil })
             })
             case 'cektanggal':    
                var url = `https://api.haipbis.xyz/harinasional?tanggal=${A187}`
        axios.get(url)
            .then(res => {
                const { tanggal, keterangan } = res.data
                resolve({ hasil })
             })
            case 'bucin':    
                var url = `https://arugaz.herokuapp.com/api/howbucins`
        axios.get(url)
            .then(res => {
                const { desc } = res.data
                resolve({ desc })
             })
             case 'cerpen':    
                var url = `https://arugaz.herokuapp.com/api/cerpen`
        axios.get(url)
            .then(res => {
                const { result } = res.data
                resolve({ result })
             })
             case 'cersex':    
                var url = `https://arugaz.herokuapp.com/api/cersex2`
        axios.get(url)
            .then(res => {
                const { result } = res.data
                resolve({ result })
             })
             case 'chord':    
                var url = `https://alfians-api.herokuapp.com/api/chord?q=${A187}`
        axios.get(url)
            .then(res => {
                const { result } = res.data
                resolve({ hasil })
             })
            case 'corona':    
                var url = `https://arugaz.herokuapp.com/api/coronaindo`
        axios.get(url)
            .then(res => {
                const { meninggal, sembuh, kasus_total: positif } = res.data
                resolve({ meninggal, sembuh, positif })
             })
             case 'covidcountry':   
             var url = `https://arugaz.herokuapp.com/api/corona?country=${A187}`
        axios.get(url)
            .then(res => {
                const { country, active, casesPerOneMillion, critical, deathsPerOneMillion, recovered, testPerOneMillion, todayCases, todayDeath, totalCases, totalTest  } = res.data.result
                resolve({ hasil })
             })
             case 'cuaca':    
                var url = `https://mhankbarbars.herokuapp.com/api/cuaca?q=${A187}&apiKey=N2Ws9kp3KTDYtry5Jjyz`
        axios.get(url)
            .then(res => {
                const { tempat,cuaca,angin,kelembapan ,suhu } = res.data.result
                resolve({ hasil })
             })
             case 'fb':    
                var url = `https://mnazria.herokuapp.com/api/fbdownloadervideo?url=${A187}`
        axios.get(url)
            .then(res => {
                const { resultHD,resultSD } = res.data
                resolve({ hasil })
             })
             .catch(err => {
                 reject('sepertinya error! harap coba kembali.')
             })
             case 'filmanime':    
                var url = `https://arugaz.herokuapp.com/api/sdmovie?film=${A187}`
        axios.get(url)
            .then(res => {
                const { title, rating, sinopis, video  } = res.data.result
                resolve({ hasil })
             })
            case 'gay':    
                 var url = `https://arugaz.herokuapp.com/api/howgay`
        axios.get(url)
            .then(res => {
                const { desc, persen } = res.data
                resolve({ desc, persen })
             })
             case 'indohot':    
                 var url = `https://arugaz.herokuapp.com/api/indohot`
        axios.get(url)
            .then(res => {
                const { judul, genre, durasi, url } = res.data.result
                resolve({ judul, genre, durasi, url })
             })
             case 'infoanime':    
                 var url = `https://arugaz.herokuapp.com/api/dewabatch?q=${A187}`
        axios.get(url)
            .then(res => {
                const { result } = res.data
                resolve({ hasil })
             })
             case 'infogempa':    
                var url = `https://arugaz.herokuapp.com/api/infogempa`
        axios.get(url)
            .then(res => {
                const { lokasi, kedalaman, koordinat, magnitude, waktu } = res.data
                resolve({ lokasi, kedalaman, koordinat, magnitude, waktu })
             })
            case 'pasangan':    
                var url = `https://arugaz.herokuapp.com/api/jodohku?nama=${pasangan[0]}&pasangan=${pasangan[1]}`
        axios.get(url)
            .then(res => {
                const { negatif, positif } = res.data
                resolve({ negatif, positif })
             })
             case 'joox':   
             var url = `https://tobz-api.herokuapp.com/api/joox?q=${A187}`
        axios.get(url)
            .then(res => {
                const { judul,mp3 } = res.data
                resolve({ hasil })
             })
             case 'jsholat':    
        var url = `https://tobz-api.herokuapp.com/api/jadwalshalat?q=${A187}`
        axios.get(url)
            .then(res => {
                const { Imsyak, Subuh, Dzuhur, Ashar, Maghrib, Isya, Dhuha } = res.data
                resolve({ Imsyak, Subuh, Dzuhur, Ashar, Maghrib, Isya, Dhuha })
             })
             case 'kbbi':    
             var url = `https://mnazria.herokuapp.com/api/kbbi?search=${A187}`
        axios.get(url)
            .then(res => {
                const { result } = res.data
                resolve({ hasil })
             })
             case 'lirik':    
               var url = `http://scrap.terhambar.com/lirik?word=${A187}`
        axios.get(url)
            .then(res => {
                const { lirik: hasil } = res.data.result
                resolve({ hasil })
             })
             .catch(err => {
                 reject('sepertinya error.')
             })
             case 'namaninja':    
             var url = `https://api.terhambar.com/ninja?nama=${A187}`
        axios.get(url)
            .then(res => {
                const { ninja  } = res.data.result
                resolve({ hasil })
             })
             case 'pantun':    
           var url = `https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-pantun-pakboy.txt`
        axios.get(url)
            .then(res => {
                var data = res.data.split('\n')
                var random = data[Math.floor(Math.random() * data.length)]
                var pantun = random.replace(/pjrx-line/g, '\n')
                resolve(pantun)
             })  
             case 'puisi1':    
        var url = `https://arugaz.herokuapp.com/api/puisi1`
        axios.get(url)
            .then(res => {
                const { result } = res.data
                resolve({ result })
             })
             case 'puisi2':    
          var url = `https://arugaz.herokuapp.com/api/puisi3`
        axios.get(url)
            .then(res => {
                const { result } = res.data
                resolve({ result })
             })        
             case 'quotes':    
            var url = `https://alfians-api.herokuapp.com/api/randomquotes`
        axios.get(url)
            .then(res => {
                const { author, quotes } = res.data
                resolve({ author, quotes })
             }) 
             case 'renungan':    
         var url = `https://docs-jojo.herokuapp.com/api/renungan`
        axios.get(url)
            .then(res => {
                const { isi,judul,pesan } = res.data
                resolve({ isi,judul,pesan })
             })    
             case 'resep':    
           var url = `https://masak-apa.tomorisakura.vercel.app/api/search/?q=${A187}`
        axios.get(url)
            .then(res => {
                const { title, user,  datePublished, dificulty, times, serving, bahan, tutor  } = res.data.result
                resolve({ hasil })
             })  
             case 'simi':    
             var url = `https://st4rz.herokuapp.com/api/simsimi?kata=${A187}`
        axios.get(url)
            .then(res => {
                const { result } = res.data
                resolve({ hasil })
             })
        default:
            break
            
    }
})

module.exports = Aris1

   
