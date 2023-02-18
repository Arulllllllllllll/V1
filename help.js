exports.done = () => {
return `✅ Done`
}

exports.wait = () => {
return `⏳ Mohon tunggu sebentar`
}

exports.error = () => {
return `Result Tidak Ditemukan !!`
}

exports.noLink = (command) => {
return `Harap Sertakan Link
Format: .${command} _link_`
}

exports.noQuery = () => {
return `Masukkan Query !!`
}

exports.noTeks = (prefix,command) => {
return `Harap Sertakan Teks !!
Contoh : ${prefix+command} hallo`
}

exports.noTeks2 = (prefix,command) => {
return `Harap Sertakan Teks !!
Contoh : ${prefix+command} teks1,teks2`
}

exports.smeme = (prefix,command) => {
return `kirim gambar dengan caption ${prefix+command} atau balas gambar yang sudah dikirim`
}

exports.smeme2 = (prefix,command) => {
return `kirim gambar dengan caption ${prefix+command} teks1+teks2 atau balas gambar yang sudah dikirim`
}

exports.owner = () => {
return `Perintah Ini Hanya Bisa Digunakan Oleh Owner !!`
}

exports.admin = () => {
return `Perintah Ini Hanya Bisa Digunakan Oleh Admin Grup`
}

exports.noAdmin = () =>{
return `Kamu bukan admin !!`
}

exports.botAdmin = () => {
return `Bot Bukan Admin !!`
}

exports.group = () => {
return `Perintah Ini Hanya Bisa Digunakan Di Group !!`
}

exports.mix2 = (prefix,command) =>{
return `Example : ${prefix + command} 😅`
}

exports.mix = (command) =>{
return `Format : ${command} emoji1+emoji2\nContoh : .${command} 😜+😅`
}

exports.noMoji = () =>{
return `Itu Bukan Emoji`
}

exports.audioc = (prefix,command) =>{
return `Reply Audio Yang Ingin Diubah Dengan Caption *${prefix+command}*`
}

exports.listmenu = (a,b,c,d,e,f,no,nmr,prefix) => {
return `${a} ${b}

*Owner :* ${c}
*Library :* ${f}
*Date Server :* ${d}
*Runtime :* ${e}

*GROUP MENU*
( ${nmr++} ) ${prefix}add
( ${nmr++} ) ${prefix}kick
( ${nmr++} ) ${prefix}antilink on
( ${nmr++} ) ${prefix}antilink off
( ${nmr++} ) ${prefix}promote
( ${nmr++} ) ${prefix}demote
( ${nmr++} ) ${prefix}tagall
( ${nmr++} ) ${prefix}hidetag
( ${nmr++} ) ${prefix}infogc
( ${nmr++} ) ${prefix}linkgc
( ${nmr++} ) ${prefix}setnamegc
( ${nmr++} ) ${prefix}setdesc
( ${nmr++} ) ${prefix}revoke
( ${nmr++} ) ${prefix}group open
( ${nmr++} ) ${prefix}group close
( ${nmr++} ) ${prefix}welcome on
( ${nmr++} ) ${prefix}welcome off

*DOWNLOAD MENU*
( ${nmr++} ) ${prefix}gitclone
( ${nmr++} ) ${prefix}facebook
( ${nmr++} ) ${prefix}igvideo
( ${nmr++} ) ${prefix}igphoto
( ${nmr++} ) ${prefix}mediafire
( ${nmr++} ) ${prefix}pinterest
( ${nmr++} ) ${prefix}tiktoknowm
( ${nmr++} ) ${prefix}tiktokaudio
( ${nmr++} ) ${prefix}ytmp3
( ${nmr++} ) ${prefix}ytmp4
( ${nmr++} ) ${prefix}play

*FUN MENU*
( ${nmr++} ) ${prefix}truth
( ${nmr++} ) ${prefix}dare
( ${nmr++} ) ${prefix}simi
( ${nmr++} ) ${prefix}slot
( ${nmr++} ) ${prefix}cekwaras 
( ${nmr++} ) ${prefix}cantikcek 
( ${nmr++} ) ${prefix}cekcantik 
( ${nmr++} ) ${prefix}gantengcek 
( ${nmr++} ) ${prefix}cekganteng 
( ${nmr++} ) ${prefix}sangecek 
( ${nmr++} ) ${prefix}ceksange 
( ${nmr++} ) ${prefix}gaycek 
( ${nmr++} ) ${prefix}cekgay 
( ${nmr++} ) ${prefix}lesbicek 
( ${nmr++} ) ${prefix}ceklesbi 
( ${nmr++} ) ${prefix}cektolol 
( ${nmr++} ) ${prefix}cekpintar 
( ${nmr++} ) ${prefix}cekbodoh 
( ${nmr++} ) ${prefix}cekgoblok 
( ${nmr++} ) ${prefix}cekstres 
( ${nmr++} ) ${prefix}cekstress 

*SEARCH MENU*
( ${nmr++} ) ${prefix}brainly
( ${nmr++} ) ${prefix}translate1
( ${nmr++} ) ${prefix}trnaslate2
( ${nmr++} ) ${prefix}ytsearch
( ${nmr++} ) ${prefix}gimage
( ${nmr++} ) ${prefix}ssweb1
( ${nmr++} ) ${prefix}ssweb2

*EPHOTO MENU*
( ${nmr++} ) ${prefix}team-logo-ninja-1
( ${nmr++} ) ${prefix}team-logo-ninja-2
( ${nmr++} ) ${prefix}team-logo-ninja-3
( ${nmr++} ) ${prefix}team-logo-ninja-4
( ${nmr++} ) ${prefix}team-logo-ninja-5
( ${nmr++} ) ${prefix}team-logo-ninja-6
( ${nmr++} ) ${prefix}team-logo-ninja-7
( ${nmr++} ) ${prefix}team-logo-ninja-8
( ${nmr++} ) ${prefix}team-logo-ninja-9
( ${nmr++} ) ${prefix}captainamerica
( ${nmr++} ) ${prefix}graffiti
( ${nmr++} ) ${prefix}pornhub
( ${nmr++} ) ${prefix}mountain 
( ${nmr++} ) ${prefix}team-logo-cobra
( ${nmr++} ) ${prefix}team-logo-singa
( ${nmr++} ) ${prefix}team-logo-macan
( ${nmr++} ) ${prefix}team-logo-elang
( ${nmr++} ) ${prefix}team-logo-banteng 
( ${nmr++} ) ${prefix}youtube-silver-button 
( ${nmr++} ) ${prefix}youtube-gold-button 
( ${nmr++} ) ${prefix}instagram-silver-button 
( ${nmr++} ) ${prefix}instagram-gold-button 
( ${nmr++} ) ${prefix}facebook-silver-button 
( ${nmr++} ) ${prefix}facebook-gold-button 
( ${nmr++} ) ${prefix}twitter-silver-button 
( ${nmr++} ) ${prefix}twitter-gold-button
( ${nmr++} ) ${prefix}ashe-banner 
( ${nmr++} ) ${prefix}brigitte-banner 
( ${nmr++} ) ${prefix}doomfist-banner 
( ${nmr++} ) ${prefix}junker-banner 
( ${nmr++} ) ${prefix}kiriko-banner 
( ${nmr++} ) ${prefix}reaper-banner 
( ${nmr++} ) ${prefix}sojourn-banner 
( ${nmr++} ) ${prefix}symmetra-banner 
( ${nmr++} ) ${prefix}zarya-banner 
( ${nmr++} ) ${prefix}tracer-banner 
( ${nmr++} ) ${prefix}style-1917
( ${nmr++} ) ${prefix}pixel-glitch
( ${nmr++} ) ${prefix}purple
( ${nmr++} ) ${prefix}futuristic-technology
( ${nmr++} ) ${prefix}futuristic-technology2
( ${nmr++} ) ${prefix}futuristic-technology3

*OTHER MENU*
( ${nmr++} ) ${prefix}delete
( ${nmr++} ) ${prefix}grupbot
( ${nmr++} ) ${prefix}request
( ${nmr++} ) ${prefix}report
( ${nmr++} ) ${prefix}runtime
( ${nmr++} ) ${prefix}script
( ${nmr++} ) ${prefix}rules
( ${nmr++} ) ${prefix}kirimpesan
( ${nmr++} ) ${prefix}server
( ${nmr++} ) ${prefix}readmore

*PHOTOOXY MENU*
( ${nmr++} ) ${prefix}shadow 
( ${nmr++} ) ${prefix}romantic 
( ${nmr++} ) ${prefix}smoke 
( ${nmr++} ) ${prefix}burn-paper 
( ${nmr++} ) ${prefix}love-message 
( ${nmr++} ) ${prefix}message-under-grass 
( ${nmr++} ) ${prefix}double-heart 
( ${nmr++} ) ${prefix}coffe-cup 
( ${nmr++} ) ${prefix}love-text 
( ${nmr++} ) ${prefix}butterfly 

*RANDOM IMAGE*
( ${nmr++} ) ${prefix}anjing 
( ${nmr++} ) ${prefix}blackpink 
( ${nmr++} ) ${prefix}boneka 
( ${nmr++} ) ${prefix}boruto 
( ${nmr++} ) ${prefix}cecan 
( ${nmr++} ) ${prefix}cogan 
( ${nmr++} ) ${prefix}estetik 
( ${nmr++} ) ${prefix}hekel 
( ${nmr++} ) ${prefix}jeni 
( ${nmr++} ) ${prefix}kpop 
( ${nmr++} ) ${prefix}kucing
( ${nmr++} ) ${prefix}bkpimg

*ASUPAN MENU*
( ${nmr++} ) ${prefix}hijaber 
( ${nmr++} ) ${prefix}china 
( ${nmr++} ) ${prefix}indonesia 
( ${nmr++} ) ${prefix}korea 
( ${nmr++} ) ${prefix}japan 
( ${nmr++} ) ${prefix}malaysia 
( ${nmr++} ) ${prefix}thailand 
( ${nmr++} ) ${prefix}vietnam 
( ${nmr++} ) ${prefix}bocil 
( ${nmr++} ) ${prefix}geayubi 
( ${nmr++} ) ${prefix}santuy 
( ${nmr++} ) ${prefix}tiktok 
( ${nmr++} ) ${prefix}ukhty 

*RANDOM ANIME*
( ${nmr++} ) ${prefix}loli
( ${nmr++} ) ${prefix}waifu
( ${nmr++} ) ${prefix}couple
( ${nmr++} ) ${prefix}akira 
( ${nmr++} ) ${prefix}akiyama 
( ${nmr++} ) ${prefix}asuna 
( ${nmr++} ) ${prefix}boruto 
( ${nmr++} ) ${prefix}chitoge 
( ${nmr++} ) ${prefix}cosplay 
( ${nmr++} ) ${prefix}deidara 
( ${nmr++} ) ${prefix}elaina 
( ${nmr++} ) ${prefix}emilia 
( ${nmr++} ) ${prefix}hinata 
( ${nmr++} ) ${prefix}itachi 
( ${nmr++} ) ${prefix}itori 
( ${nmr++} ) ${prefix}kagura 
( ${nmr++} ) ${prefix}kakasih 
( ${nmr++} ) ${prefix}keneki 
( ${nmr++} ) ${prefix}naruto

*KERANG MENU*
( ${nmr++} ) ${prefix}apakah
( ${nmr++} ) ${prefix}bagaimanakah
( ${nmr++} ) ${prefix}bisakah
( ${nmr++} ) ${prefix}kapankah

*NSFW MENU*
( ${nmr++} ) ${prefix}ahegao 
( ${nmr++} ) ${prefix}ass 
( ${nmr++} ) ${prefix}bdsm 
( ${nmr++} ) ${prefix}blowjob 
( ${nmr++} ) ${prefix}cum 
( ${nmr++} ) ${prefix}foot 
( ${nmr++} ) ${prefix}gangbang 
( ${nmr++} ) ${prefix}gifs 
( ${nmr++} ) ${prefix}glasses 
( ${nmr++} ) ${prefix}hentai 
( ${nmr++} ) ${prefix}orgy 
( ${nmr++} ) ${prefix}panties 
( ${nmr++} ) ${prefix}pussy 
( ${nmr++} ) ${prefix}yuri 
( ${nmr++} ) ${prefix}zettai 

*RANDOM MENU*
( ${nmr++} ) ${prefix}bacot
( ${nmr++} ) ${prefix}katabijak
( ${nmr++} ) ${prefix}quotesanime
( ${nmr++} ) ${prefix}darkjoke
( ${nmr++} ) ${prefix}jokes
( ${nmr++} ) ${prefix}fakta
( ${nmr++} ) ${prefix}quotes

*CONVERT MENU*
( ${nmr++} ) ${prefix}toimg
( ${nmr++} ) ${prefix}tomp4
( ${nmr++} ) ${prefix}emojimix
( ${nmr++} ) ${prefix}emojimix2
( ${nmr++} ) ${prefix}tourl
( ${nmr++} ) ${prefix}tinyulr
( ${nmr++} ) ${prefix}shortlink
( ${nmr++} ) ${prefix}tts
( ${nmr++} ) ${prefix}removebg
( ${nmr++} ) ${prefix}ebinary
( ${nmr++} ) ${prefix}debinary

*STICKER MENU*
( ${nmr++} ) ${prefix}sticker
( ${nmr++} ) ${prefix}smeme
( ${nmr++} ) ${prefix}smeme2
( ${nmr++} ) ${prefix}take
( ${nmr++} ) ${prefix}wm
( ${nmr++} ) ${prefix}lick
( ${nmr++} ) ${prefix}kiss
( ${nmr++} ) ${prefix}awoo
( ${nmr++} ) ${prefix}hug
( ${nmr++} ) ${prefix}cry
( ${nmr++} ) ${prefix}cuddle
( ${nmr++} ) ${prefix}bully
( ${nmr++} ) ${prefix}megumin
( ${nmr++} ) ${prefix}shinobu
( ${nmr++} ) ${prefix}neko
( ${nmr++} ) ${prefix}slap
( ${nmr++} ) ${prefix}wink
( ${nmr++} ) ${prefix}dance
( ${nmr++} ) ${prefix}poke
( ${nmr++} ) ${prefix}glomp
( ${nmr++} ) ${prefix}bite
( ${nmr++} ) ${prefix}nom
( ${nmr++} ) ${prefix}handhold
( ${nmr++} ) ${prefix}highfive
( ${nmr++} ) ${prefix}wave
( ${nmr++} ) ${prefix}smile
( ${nmr++} ) ${prefix}yeet
( ${nmr++} ) ${prefix}bonk
( ${nmr++} ) ${prefix}smug
( ${nmr++} ) ${prefix}pat 
( ${nmr++} ) ${prefix}kill 
( ${nmr++} ) ${prefix}blush 
( ${nmr++} ) ${prefix}happy 
( ${nmr++} ) ${prefix}cringe

*AUDIO CHANGER*
( ${nmr++} ) ${prefix}bass
( ${nmr++} ) ${prefix}blown
( ${nmr++} ) ${prefix}deep
( ${nmr++} ) ${prefix}earrape
( ${nmr++} ) ${prefix}fast
( ${nmr++} ) ${prefix}fat
( ${nmr++} ) ${prefix}nightcore
( ${nmr++} ) ${prefix}reverserobot
( ${nmr++} ) ${prefix}slow
( ${nmr++} ) ${prefix}smooth
( ${nmr++} ) ${prefix}tupai

*OWNER MENU*
( ${nmr++} ) ${prefix}broadcast
( ${nmr++} ) ${prefix}setthumb
( ${nmr++} ) ${prefix}getcase
( ${nmr++} ) ${prefix}setppbot
( ${nmr++} ) ${prefix}chat
( ${nmr++} ) ${prefix}creategc
( ${nmr++} ) ${prefix}join
( ${nmr++} ) ${prefix}listpc
( ${nmr++} ) ${prefix}listgc
( ${nmr++} ) ${prefix}block
( ${nmr++} ) ${prefix}unblock

*SOUND MENU*
( ${nmr++} ) ${prefix}sound${no++}
( ${nmr++} ) ${prefix}sound${no++}
( ${nmr++} ) ${prefix}sound${no++}
( ${nmr++} ) ${prefix}sound${no++}
( ${nmr++} ) ${prefix}sound${no++}
( ${nmr++} ) ${prefix}sound${no++}
( ${nmr++} ) ${prefix}sound${no++}
( ${nmr++} ) ${prefix}sound${no++}
( ${nmr++} ) ${prefix}sound${no++}
( ${nmr++} ) ${prefix}sound${no++}
( ${nmr++} ) ${prefix}sound${no++}
( ${nmr++} ) ${prefix}sound${no++}
( ${nmr++} ) ${prefix}sound${no++}
( ${nmr++} ) ${prefix}sound${no++}
( ${nmr++} ) ${prefix}sound${no++}
( ${nmr++} ) ${prefix}sound${no++}
( ${nmr++} ) ${prefix}sound${no++}
( ${nmr++} ) ${prefix}sound${no++}
( ${nmr++} ) ${prefix}sound${no++}
( ${nmr++} ) ${prefix}sound${no++}
`
}

exports.rulesBot = (prefix) =>{
return`*── 「 RULES AND FAQ 」 ──*

1. Jangan spam bot. 🙅
2. Jangan telepon bot. ☎️
3. Jangan membandingkan bot 👍

🗯️ Bot tidak atau lambat merespon ?
➡️ Mungkin dipengaruhi oleh jaringan, signal, banned oleh Whatsapp dan beberapa asalan.

🗯️ Dimana saya bisa mendapatkan Script dari bot ini ?
➡️ Script ini bisa kalian beli ke owner Arulbot

🗯️ Boleh saya menambah ke grup?
➡️ Untuk itu tergantung dari owner bot sendiri

🗯️ Prefixnya apa ya?
➡️ Bot ini menggunakan prefix *.*

Jika sudah dipahami rules-nya, silakan ketik *.menu* untuk memulai!

⚠️ Segala kebijakan dan ketentuan bot dapat berubah kapan saja 

Terimakasih! `
}