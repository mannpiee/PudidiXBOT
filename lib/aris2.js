const axios = require("axios")
const imageToBase64 = require('image-to-base64');

const waifu = () => { 
    return new Promise((resolve, reject) => {
        var url = `https://st4rz.herokuapp.com/api/waifu`
        axios.get(url)
            .then(res => {
                imageToBase64(res.data.image)
                    .then(data => {
                        var buffer = Buffer.from(data, 'base64')
                        resolve(buffer)
                    })
            })
            .catch(err => {
                reject('sepertinya error.')
            })
    })
}
const nsfwneko = () => {
    return new Promise((resolve, reject) => {
        var url = `https://tobz-api.herokuapp.com/api/nsfwneko`
        axios.get(url)
            .then(res => {
                imageToBase64(res.data.result)
                    .then(data => {
                        var buffer = Buffer.from(data, 'base64')
                        resolve(buffer)
                    })
            })
            .catch(err => {
                reject('sepertinya error.')
            })
    })
}
const randomanime = () => {
    return new Promise((resolve, reject) => {
        var url = `https://tobz-api.herokuapp.com/api/randomanime`
        axios.get(url)
            .then(res => {
                imageToBase64(res.data.result)
                    .then(data => {
                        var buffer = Buffer.from(data, 'base64')
                        resolve(buffer)
                    })
            })
            .catch(err => {
                reject('sepertinya error.')
            })
    })
}
const cooltext = (A187) => {
    return new Promise((resolve, reject) => {
        if (typeof A187 === 'Yah gagal😥, coba lagi yuk😃') { reject('masukan teks.') }
        var url = 'https://api.haipbis.xyz/randomcooltext?text=${A187}'
        axios.get(url)
            .then(res => {
                imageToBase64(res.data.image)
                    .then(data => {
                        var buffer = Buffer.from(data, 'base64')
                        resolve(buffer)
                    })
            })
            .catch(err => {
                reject('sepertinya error.')
            })
    })
}
const wolflogo1 = (A187) => {
    return new Promise((resolve, reject) => {
        if (typeof A187 === 'Yah gagal😥, coba lagi yuk😃') { reject('masukan teks.') }
        var url = 'https://tobz-api.herokuapp.com/api/textpro?theme=wolflogo1&text1=A187&text2=${A187}'
        axios.get(url)
            .then(res => {
                imageToBase64(res.data.image)
                    .then(data => {
                        var buffer = Buffer.from(data, 'base64')
                        resolve(buffer)
                    })
            })
            .catch(err => {
                reject('sepertinya error.')
            })
    })
}
const lionlogo = (A187) => {
    return new Promise((resolve, reject) => {
        if (typeof A187 === 'Yah gagal😥, coba lagi yuk😃') { reject('masukan teks.') }
        var url = 'https://tobz-api.herokuapp.com/api/textpro?theme=lionlogo&text1=A187&text2=${A187}'
        axios.get(url)
            .then(res => {
                imageToBase64(res.data.image)
                    .then(data => {
                        var buffer = Buffer.from(data, 'base64')
                        resolve(buffer)
                    })
            })
            .catch(err => {
                reject('sepertinya error.')
            })
    })
}
const gltext = (A187) => {
    return new Promise((resolve, reject) => {
        if (typeof A187 === 'Yah gagal😥, coba lagi yuk😃') { reject('masukan teks') }
        var gh = text.split(".gltext ")[1];
    var A187i = gh.split("|")[0];
    var A187d = gh.split("|")[1];
    axios.get(`http://inyourdream.herokuapp.com/glitch?kata1=${A187i}&kata2=${A187d}`).then((res) => {
      imageToBase64(res.data.status)
                    .then(data => {
                        var buf = Buffer.from(ress, 'base64')
                        resolve(buffer)
                    })
            })
            .catch(err => {
                reject('sepertinya error.')
            })
    })
}
const hentai = () => {
    return new Promise((resolve, reject) => {
        var url = `https://tobz-api.herokuapp.com/api/hentai`
        axios.get(url)
            .then(res => {
                imageToBase64(res.data.result)
                    .then(data => {
                        var buffer = Buffer.from(data, 'base64')
                        resolve(buffer)
                    })
            })
            .catch(err => {
                reject('sepertinya error.')
            })
    })
}
const jokerlogo = (A187) => {
    return new Promise((resolve, reject) => {
        if (typeof A187 === 'Yah gagal😥, coba lagi yuk😃') { reject('masukan teks yang akan ditulis.') }
        var url = 'https://tobz-api.herokuapp.com/api/textpro?theme=jokerlogo&text=${A187}'
        axios.get(url)
            .then(res => {
                imageToBase64(res.data.result)
                    .then(data => {
                        var buffer = Buffer.from(data, 'base64')
                        resolve(buffer)
                    })
            })
            .catch(err => {
                reject('sepertinya error.')
            })
    })
}
const logogaming = (A187) => {
    return new Promise((resolve, reject) => {
        if (typeof A187 === 'Yah gagal😥, coba lagi yuk😃') { reject('masukan teks') }
        var url = 'https://docs-jojo.herokuapp.com/api/gaming?text=${A187}'
        axios.get(url)
            .then(res => {
                imageToBase64(res.data.result)
                    .then(data => {
                        var buf = Buffer.from(ress, 'base64')
                        resolve(buffer)
                    })
            })
            .catch(err => {
                reject('sepertinya error.')
            })
    })
}

const loli = () => {
    return new Promise((resolve, reject) => {
        var url = `https://tobz-api.herokuapp.com/api/randomloli`
        axios.get(url)
            .then(res => {
                imageToBase64(res.data.result)
                    .then(data => {
                        var buffer = Buffer.from(data, 'base64')
                        resolve(buffer)
                    })
            })
            .catch(err => {
                reject('sepertinya error.')
            })
    })
}
const memecreate = (A187) => {
    return new Promise((resolve, reject) => {
        if (typeof A187 === 'Yah gagal😥, coba lagi yuk😃') { reject('masukan teks') }
        var url = 'https://mnazria.herokuapp.com/api/create-meme?text-atas=${A187}'
        axios.get(url)
            .then(res => {
                imageToBase64(res.data.result)
                    .then(data => {
                        var buf = Buffer.from(ress, 'base64')
                        resolve(buffer)
                    })
            })
            .catch(err => {
                reject('sepertinya error.')
            })
    })
}
const nekonime = () => {
    return new Promise((resolve, reject) => {
        
        var url = `https://arugaz.herokuapp.com/api/nekonime`
        axios.get(url)
            .then(res => {
                imageToBase64(res.data.image)
                    .then(data => {
                        var buffer = Buffer.from(data, 'base64')
                        resolve(buffer)
                    })
            })
            .catch(err => {
                reject('sepertinya error.')
            })
    })
}
const nulis = (A187) => {
    return new Promise((resolve, reject) => {
        if (typeof A187 === 'Yah gagal😥, coba lagi yuk😃') { reject('masukan teks yang akan ditulis.') }
        var url = 'https://tobz-api.herokuapp.com/api/nulis?text=${A187}'
        axios.get(url)
            .then(res => {
                imageToBase64(res.data.result)
                    .then(data => {
                        var buffer = Buffer.from(data, 'base64')
                        resolve(buffer)
                    })
            })
            .catch(err => {
                reject('sepertinya error.')
            })
    })
}
const text3d = (A187) => {
    return new Promise((resolve, reject) => {
        if (typeof A187 === 'Yah gagal😥, coba lagi yuk😃') { reject('masukan teks') }
        var url = 'http://jojo-api-doc.herokuapp.com/api/text3d?text=${A187}'
        axios.get(url)
            .then(res => {
                imageToBase64(res.data.result)
                    .then(data => {
                        var buf = Buffer.from(ress, 'base64')
                        resolve(buffer)
                    })
            })
            .catch(err => {
                reject('sepertinya error.')
            })
    })
}
const wolflogo2 = (A187) => {
    return new Promise((resolve, reject) => {
        if (typeof A187 === 'Yah gagal😥, coba lagi yuk😃') { reject('masukan teks') }
        var url = 'https://tobz-api.herokuapp.com/api/textpro?theme=wolflogo2&text1=A187&text2=${A187}'
        axios.get(url)
            .then(res => {
                imageToBase64(res.data.result)
                    .then(data => {
                        var buf = Buffer.from(ress, 'base64')
                        resolve(buffer)
                    })
            })
            .catch(err => {
                reject('sepertinya error.')
            })
    })
}
const pokemon = () => {
    return new Promise((resolve, reject) => {
        var items = ["anime pokemon"];
    var nime = items[Math.floor(Math.random() * items.length)];
    var url = "https://api.fdci.se/rep.php?gambar=" + nime;
    
    axios.get(url)
      .then((result) => {
        var n = JSON.parse(JSON.stringify(result.data));
        var nimek =  n[Math.floor(Math.random() * n.length)];
        imageToBase64(nimek) 
        .then(data => {
                        var buffer = Buffer.from(data, 'base64')
                        resolve(buffer)
                    })
            })
            .catch(err => {
                reject('sepertinya error.')
            })
    })
}

const randomcry = () => {
    return new Promise((resolve, reject) => {
        var url = `https://tobz-api.herokuapp.com/api/cry`
        axios.get(url)
            .then(res => {
                imageToBase64(res.data.result)
                    .then(data => {
                        var buffer = Buffer.from(data, 'base64')
                        resolve(buffer)
                    })
            })
            .catch(err => {
                reject('sepertinya error.')
            })
    })
}

const randomkis = () => {
    return new Promise((resolve, reject) => {
        var url = `https://tobz-api.herokuapp.com/api/kiss`
        axios.get(url)
            .then(res => {
                imageToBase64(res.data.result)
                    .then(data => {
                        var buffer = Buffer.from(data, 'base64')
                        resolve(buffer)
                    })
            })
            .catch(err => {
                reject('sepertinya error.')
            })
    })
}

const texthunder = (A187) => {
    return new Promise((resolve, reject) => {
        if (typeof A187 === 'Yah gagal😥, coba lagi yuk😃') { reject('masukan teks') }
        var url = 'http://jojo-api-doc.herokuapp.com/api/thunder?text=${A187}'
        axios.get(url)
            .then(res => {
                imageToBase64(res.data.result)
                    .then(data => {
                        var buf = Buffer.from(ress, 'base64')
                        resolve(buffer)
                    })
            })
            .catch(err => {
                reject('sepertinya error.')
            })
    })
}
const ssweb = (A187) => {
    return new Promise((resolve, reject) => {
        if (typeof A187 === 'Yah gagal😥, coba lagi yuk😃') { reject('Lebih teliti lagi bosque😊') }
        var url = 'https://api.haipbis.xyz/ssweb?url=${A187}'
        axios.get(url)
            .then(res => {
                imageToBase64(res.data.result)
                    .then(data => {
                        var buffer = Buffer.from(data, 'base64')
                        resolve(buffer)
                    })
            })
            .catch(err => {
                reject('sepertinya error.')
            })
    })
}

const ttp = (A187) => {
    return new Promise((resolve, reject) => {
        if (typeof A187 === 'Yah gagal😥, coba lagi yuk😃') { reject('masukan teks yang akan ditulis.') }
        var url = 'https://st4rz.herokuapp.com/api/ttp?kata=${A187}'
        axios.get(url)
            .then(res => {
                imageToBase64(res.data.image)
                    .then(data => {
                        var buffer = Buffer.from(data, 'base64')
                        resolve(buffer)
                    })
            })
            .catch(err => {
                reject('sepertinya error.')
            })
    })
}
const ytmp3 = (A187) => {
    return new Promise((resolve, reject) => {
        if (typeof A187 === 'Yah gagal😥, coba lagi yuk😃') { reject('Lebih teliti lagi bosque😊') }
        var url = 'https://st4rz.herokuapp.com/api/yta2?url=${A187}'
        axios.get(url)
            .then(res => {
                imageToBase64(res.data.thumb)
                    .then(data => {
                        var buffer = Buffer.from(data, 'base64')
                        resolve(buffer)
                    })
            })
            .catch(err => {
                reject('sepertinya error.')
            })
    })
}

const waifu2 = () => {
    return new Promise((resolve, reject) => {
        var url = `https://docs-jojo.herokuapp.com/api/waifu2`
        axios.get(url)
            .then(res => {
                imageToBase64(res.data.img)
                    .then(data => {
                        var buffer = Buffer.from(data, 'base64')
                        resolve(buffer)
                    })
            })
            .catch(err => {
                reject('sepertinya error.')
            })
    })
}

const animPict = () => {
    return new Promise((resolve, reject) => {
        var items = ["anime girl", "anime cantik", "anime", "anime aesthetic", "anime hd", "gambar anime hd"]
        var nime = items[Math.floor(Math.random() * items.length)];
        var url = 'https://api.fdci.se/rep.php?gambar=' + nime
        axios.get(url)
            .then(res => {
                var acak = res.data[Math.floor(Math.random() * res.data.length )]
                imageToBase64(acak)
                    .then(data => {
                        var buffer = Buffer.from(data, 'base64')
                        resolve(buffer)
                    })
            })
            .catch(err => {
                reject('sepertinya error.')
            })
    })
}

const cewePict = () => {
    return new Promise((resolve, reject) => {
        var items = ["ullzang girl", "cewe cantik", "hijab cantik", "korean girl", "remaja cantik", "cewek korea", "cewek jepang"]
        var cewe = items[Math.floor(Math.random() * items.length)];
        var url = 'https://api.fdci.se/rep.php?gambar=' + cewe
        axios.get(url)
            .then(res => {
                var acak = res.data[Math.floor(Math.random() * res.data.length )]
                imageToBase64(acak)
                    .then(data => {
                        var buffer = Buffer.from(data, 'base64')
                        resolve(buffer)
                    })
            })
            .catch(err => {
                reject('sepertinya error.')
            })
    })
á}

const cowoPict = () => {
    return new Promise((resolve, reject) => {
        var items = ["cowo ganteng", "cogan", "korean boy", "chinese boy", "japan boy", "cowok indo ganteng", "cowok korea"]
        var cowo = items[Math.floor(Math.random() * items.length)];
        var url = 'https://api.fdci.se/rep.php?gambar=' + cowo
        axios.get(url)
            .then(res => {
                var acak = res.data[Math.floor(Math.random() * res.data.length )]
                imageToBase64(acak)
                    .then(data => {
                        var buffer = Buffer.from(data, 'base64')
                        resolve(buffer)
                    })
            })
            .catch(err => {
                reject('sepertinya error.')
            })
    })
}

module.exports = { cowoPict, 
cewePict, 
animPict, 
waifu,
waifu2,
nsfwneko,
randomanime,
cooltext,
gltext,
wolflogo1,
wolflogo2,
lionlogo,
hentai,
loli,
logogaming,
jokerlogo,
memecreate,
nulis,nekonime,
text3d,pokemon,
randomcry,
randomkis,
ttp,
ssweb,
texthunder,
ytmp3}
