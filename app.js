const { Client } = require('discord.js-selfbot-v13');
const config = require('./config.json');
const mondros = require('./mondros');
const { spawn } = require('child_process');
require('dotenv').config(); // .env dosyasındaki çevre değişkenlerini kullanmak için
const fs = require('fs'); // dosya işlemleri için
const prefix = config.prefix;
const client = new Client({
    checkUpdate: false,
});

//Coded Mondros Development https://discord.gg/2cD6NtfvNR Athenax#1217/Senox#1111 
let channel;

client.on('ready', () => {
  console.log("---------------------------------------------------------------------------------------------------------------------")
  console.log(`${client.user.tag} Hesabın Sistemine Başarı İle Giriş Sağlandı!`);
  if (config.token && config.ownerID && config.prefix && config.kanalid) {
    console.log('\x1b[32m%s\x1b[0m', 'Girdiğiniz Bilgiler Doğrulandı. Bot Kullanıma Hazır! ✅');
    }    
  console.log("Development By Mondros")
  console.log("---------------------------------------------------------------------------------------------------------------------")
//Coded Mondros Development https://discord.gg/2cD6NtfvNR Athenax#1217/Senox#1111
  channel = client.channels.cache.get(config.kanalid); 
  if (!channel) {
      console.error("Kanal İD'si Girilmedi Veya Yanlış Girildi. Lütfen Kontrol Edin! 📛");
  }
});
//Coded Mondros Development https://discord.gg/2cD6NtfvNR Athenax#1217/Senox#1111
if (!config.token) {
console.error('\x1b[31m%s\x1b[0m', 'Lütfen Botunuzun Tokenini Giriniz! 📛');
return;
}
//Coded Mondros Development https://discord.gg/2cD6NtfvNR Athenax#1217/Senox#1111
if (!config.ownerID) {
console.error('\x1b[31m%s\x1b[0m', "Lütfen Botunuzu Kullanabilecek Kişinin İD'sini Giriniz! 📛");
return;
}
//Coded Mondros Development https://discord.gg/2cD6NtfvNR Athenax#1217/Senox#1111
if (!config.prefix) {
console.error('\x1b[31m%s\x1b[0m', 'Lütfen Botunuzun Prefixini Giriniz! 📛');
return;
}
//Coded Mondros Development https://discord.gg/2cD6NtfvNR Athenax#1217/Senox#1111

client.on('ready', () => {
    client.user.setActivity('Development By Mondros', { type: "PLAYING" });
});
//Coded Mondros Development https://discord.gg/2cD6NtfvNR Athenax#1217/Senox#1111

client.on('messageCreate', athenax => {
    if (athenax.author.bot) return; 
    if (athenax.content.startsWith(config.prefix + 'yaz')) {
      const messageToEcho = athenax.content.slice(5); // yaz komutundan sonraki mesajı alıyoruz.
      if (!messageToEcho) {
        athenax.reply('Lütfen Yazmam Gereken Mesajı Belirtin! 📛'); // Kullanıcının mesaj girmeden yaz komutunu kullanması durumunda hata mesajı gönderir.
        return;
      }
      athenax.delete(); 
      athenax.channel.send(messageToEcho); 
    }
});
//Coded Mondros Development https://discord.gg/2cD6NtfvNR Athenax#1217/Senox#1111
let counter = 0;
let isOwoHuntEnabled = true;
let isOwoBattleEnabled = true;
let systemStoppedCounter = 0;
let isOwoHugEnabled = true;
let isOwoKissEnabled = true;
let interval;
let isSystemRunning = false;
//Coded Mondros Development https://discord.gg/2cD6NtfvNR Athenax#1217/Senox#1111
function startSystem() {
  if (isSystemRunning) {
  }
//Coded Mondros Development https://discord.gg/2cD6NtfvNR Athenax#1217/Senox#1111
  interval = setInterval(() => {
    counter++;//Coded Mondros Development https://discord.gg/2cD6NtfvNR Athenax#1217/Senox#1111
    if (isOwoHuntEnabled && counter % 2 === 0) {//Coded Mondros Development https://discord.gg/2cD6NtfvNR Athenax#1217/Senox#1111
      channel.send('owo hunt');//Coded Mondros Development https://discord.gg/2cD6NtfvNR Athenax#1217/Senox#1111
    } else if (isOwoBattleEnabled && counter % 3 === 0) {//Coded Mondros Development https://discord.gg/2cD6NtfvNR Athenax#1217/Senox#1111
      channel.send('owo battle');//Coded Mondros Development https://discord.gg/2cD6NtfvNR Athenax#1217/Senox#1111
    } else if (isOwoHugEnabled && counter % 5 === 0) {//Coded Mondros Development https://discord.gg/2cD6NtfvNR Athenax#1217/Senox#1111
      channel.send('owo hug <@408785106942164992>');//Coded Mondros Development https://discord.gg/2cD6NtfvNR Athenax#1217/Senox#1111
    } else if (isOwoKissEnabled && counter % 7 === 0) {//Coded Mondros Development https://discord.gg/2cD6NtfvNR Athenax#1217/Senox#1111
      channel.send('owo kiss <@408785106942164992>');//Coded Mondros Development https://discord.gg/2cD6NtfvNR Athenax#1217/Senox#1111
    }
    if (counter % 9 === 0) { 
      clearInterval(interval);
      isSystemRunning = false;
      systemStoppedCounter++;
      channel.send('Sistem Botun Doğrulamaya Girmesini Önlemek Amacı İle Durduruldu! ``1`` Dakika Sonra Tekrardan Başlatılacak. 🔄');
//Coded Mondros Development https://discord.gg/2cD6NtfvNR Athenax#1217/Senox#1111
      setTimeout(() => {
        counter = 0;//Coded Mondros Development https://discord.gg/2cD6NtfvNR Athenax#1217/Senox#1111
        shouldSendMessage = true;//Coded Mondros Development https://discord.gg/2cD6NtfvNR Athenax#1217/Senox#1111
        isSystemRunning = true;//Coded Mondros Development https://discord.gg/2cD6NtfvNR Athenax#1217/Senox#1111
        startSystem();//Coded Mondros Development https://discord.gg/2cD6NtfvNR Athenax#1217/Senox#1111
        channel.send('Sistem Başarı İle Yeniden Başlatıldı! 🔄');
      }, 60000); 
    }//Coded Mondros Development https://discord.gg/2cD6NtfvNR Athenax#1217/Senox#1111
  }, 15000);
  isSystemRunning = true;
  channel.send('Sistem Başarı İle Aktifleştirilmiştir! Sistemi Kapatmak İçin ``.durdur`` Yazınız. ✅')
}
//Coded Mondros Development https://discord.gg/2cD6NtfvNR Athenax#1217/Senox#1111
//Coded Mondros Development https://discord.gg/2cD6NtfvNR Athenax#1217/Senox#1111
function stopSystem() {
  clearInterval(interval);
  isSystemRunning = false;//Coded Mondros Development https://discord.gg/2cD6NtfvNR Athenax#1217/Senox#1111
  channel.send('Sistem Başarı İle Durdurulmuştur Sistemi Açmak İçin ``.başlat`` Yazınız.  ✅');
}

function enableOwoHunt() {//Coded Mondros Development https://discord.gg/2cD6NtfvNR Athenax#1217/Senox#1111
  isOwoHuntEnabled = true;
  channel.send('**OwO-Hunt** Sistemi Başarı İle Aktifleştirilmiştir!  ✅');
}

function disableOwoHunt() {
  isOwoHuntEnabled = false;//Coded Mondros Development https://discord.gg/2cD6NtfvNR Athenax#1217/Senox#1111
  channel.send('**OwO-Hunt** Sistemi Başarı İle Kapatılmıştır.  ✅');
}

function enableOwoBattle() {
  isOwoBattleEnabled = true;//Coded Mondros Development https://discord.gg/2cD6NtfvNR Athenax#1217/Senox#1111
  channel.send('**OwO-Battle** Sistemi Başarı İle Aktifleştirilmiştir!  ✅');
}

function disableOwoBattle() {
  isOwoBattleEnabled = false;//Coded Mondros Development https://discord.gg/2cD6NtfvNR Athenax#1217/Senox#1111
  channel.send('**OwO-Battle** Sistemi Başarı İle Kapatılmıştır.  ✅');
}

function enableOwoHug() {//Coded Mondros Development https://discord.gg/2cD6NtfvNR Athenax#1217/Senox#1111
  isOwoHugEnabled = true;
  channel.send('**OwO-Hug** Sistemi Başarı İle Aktifleştirilmiştir!  ✅');
}

function disableOwoHug() {//Coded Mondros Development https://discord.gg/2cD6NtfvNR Athenax#1217/Senox#1111
  isOwoHugEnabled = false;
  channel.send('**OwO-Hug** Sistemi Başarı İle Kapatılmıştır.  ✅');
}

function enableOwoKiss() {//Coded Mondros Development https://discord.gg/2cD6NtfvNR Athenax#1217/Senox#1111
  isOwoKissEnabled = true;
  channel.send('**OwO-Kiss** Sistemi Başarı İle Aktifleştirilmiştir!  ✅');
}

function disableOwoKiss() {
  isOwoKissEnabled = false;//Coded Mondros Development https://discord.gg/2cD6NtfvNR Athenax#1217/Senox#1111
  channel.send('**OwO-Kiss** Sistemi Başarı İle Kapatılmıştır.  ✅');
}




function setOwoKissStatus(status) {
  if (status === true) {
    enableOwoKiss();
  } else {
    disableOwoKiss();
  }//Coded Mondros Development https://discord.gg/2cD6NtfvNR Athenax#1217/Senox#1111
}


function setOwoHuntStatus(status) {
  if (status === true) {
    enableOwoHunt();//Coded Mondros Development https://discord.gg/2cD6NtfvNR Athenax#1217/Senox#1111
  } else {
    disableOwoHunt();
  }
}

function setOwoBattleStatus(status) {
  if (status === true) {
    enableOwoBattle();
  } else {//Coded Mondros Development https://discord.gg/2cD6NtfvNR Athenax#1217/Senox#1111
    disableOwoBattle();
  }
}//Coded Mondros Development https://discord.gg/2cD6NtfvNR Athenax#1217/Senox#1111

function setOwoHugStatus(status) {
  if (status === true) {
    enableOwoHug();
  } else {
    disableOwoHug();//Coded Mondros Development https://discord.gg/2cD6NtfvNR Athenax#1217/Senox#1111
  }
}
//Coded Mondros Development https://discord.gg/2cD6NtfvNR Athenax#1217/Senox#1111
//Coded Mondros Development https://discord.gg/2cD6NtfvNR Athenax#1217/Senox#1111
client.on('messageCreate', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === 'başlat') {//Coded Mondros Development https://discord.gg/2cD6NtfvNR Athenax#1217/Senox#1111
    if (message.author.id === config.ownerID) {
    if (isSystemRunning) {
      message.channel.send('Sistem Zaten Aktif Durumda!  📛');
    } else {
      startSystem();//Coded Mondros Development https://discord.gg/2cD6NtfvNR Athenax#1217/Senox#1111
    }
  }//Coded Mondros Development https://discord.gg/2cD6NtfvNR Athenax#1217/Senox#1111
  } else if (command === 'durdur') {
    if (message.author.id === config.ownerID) {
    if (isSystemRunning) {
      stopSystem();
    } else {
      message.channel.send('Sistem Zaten Durdurulmuş Durumda!  📛');
    }//Coded Mondros Development https://discord.gg/2cD6NtfvNR Athenax#1217/Senox#1111
  }
  } else if (command === 'owohunt') {
    if (message.author.id === config.ownerID) {
    if (args[0] === 'aç') {//Coded Mondros Development https://discord.gg/2cD6NtfvNR Athenax#1217/Senox#1111
      enableOwoHunt();
    } else if (args[0] === 'kapat') {
      disableOwoHunt();//Coded Mondros Development https://discord.gg/2cD6NtfvNR Athenax#1217/Senox#1111
    } else {
      message.channel.send('Geçersiz Argüman Kullanımı Doğru Kullanım: ``.owohunt aç/kapat``  📛');
    }
  }//Coded Mondros Development https://discord.gg/2cD6NtfvNR Athenax#1217/Senox#1111
  } else if (command === 'owobattle') {//Coded Mondros Development https://discord.gg/2cD6NtfvNR Athenax#1217/Senox#1111
    if (message.author.id === config.ownerID) {
    if (args[0] === 'aç') {
      enableOwoBattle();//Coded Mondros Development https://discord.gg/2cD6NtfvNR Athenax#1217/Senox#1111
    } else if (args[0] === 'kapat') {
      disableOwoBattle();//Coded Mondros Development https://discord.gg/2cD6NtfvNR Athenax#1217/Senox#1111
    } else {
      message.channel.send('Geçersiz Argüman Kullanımı Doğru Kullanım:  ``.owobattle aç/kapat``  📛');
    }
  }//Coded Mondros Development https://discord.gg/2cD6NtfvNR Athenax#1217/Senox#1111
  } else if (command === 'owohug') {
    if (message.author.id === config.ownerID) {

    if (args[0] === 'aç') {
      enableOwoHug();
    } else if (args[0] === 'kapat') {//Coded Mondros Development https://discord.gg/2cD6NtfvNR Athenax#1217/Senox#1111
      disableOwoHug();
    } else {//Coded Mondros Development https://discord.gg/2cD6NtfvNR Athenax#1217/Senox#1111
      message.channel.send('Geçersiz Argüman Kullanımı Doğru Kullanım:  ``.owohug aç/kapat``  📛')
    }
  }//Coded Mondros Development https://discord.gg/2cD6NtfvNR Athenax#1217/Senox#1111
  } else if (command === 'owokiss') {
    if (message.author.id === config.ownerID) {

    if (args[0] === 'aç') {
      enableOwoKiss();
    } else if (args[0] === 'kapat') {
      disableOwoKiss();//Coded Mondros Development https://discord.gg/2cD6NtfvNR Athenax#1217/Senox#1111
    } else {
      message.channel.send('Geçersiz Argüman Kullanımı Doğru Kullanım: ``.owokiss aç/kapat``  📛')
    }
  }
//Coded Mondros Development https://discord.gg/2cD6NtfvNR Athenax#1217/Senox#1111
  } else if (command === 'durum') {
    if (message.author.id === config.ownerID) {
    message.channel.send(`⚙  __**Mondros Hunting Bots Durum!**___\n\nSistem Durumu: ${isSystemRunning ? '**Aktif**   ✅' : '**Pasif**   📛'}
    \nOwO Hunt Sistem Durumu: ${isOwoHuntEnabled ? '**Aktif**   ✅' : '**Pasif**    📛'}
    \nOwO Battle Sistem Durumu: ${isOwoBattleEnabled ? '**Aktif**   ✅' : '**Pasif**   📛'}
    \nOwO Kiss Sistem Durumu: ${isOwoKissEnabled ? '**Aktif**   ✅' : '**Pasif**    📛'}
    \nOwO Hug Sistem Durumu: ${isOwoHugEnabled ? '**Aktif**   ✅' : '**Pasif**    📛'}`);
  }  
}
//Coded Mondros Development https://discord.gg/2cD6NtfvNR Athenax#1217/Senox#1111

   //yardım
  if (command === 'ayarlar') {
//Coded Mondros Development https://discord.gg/2cD6NtfvNR Athenax#1217/Senox#1111
    message.channel.send("\n\n⚙  __**Mondros Hunting Bots Ayarlar!**___\n\nOwO Hunt:  ``.owohunt aç/kapat``\nOwO Battle:  ``.owobattle aç/kapat``\nOwO Kiss:  ``.owokiss aç/kapat``\nOwO Hug:  ``.owohug aç/kapat``\n\nAçık Veya Kapalı Sistemleri Görüntülemek İçin:  ``.durum``");
  }
});
//Coded Mondros Development https://discord.gg/2cD6NtfvNR Athenax#1217/Senox#1111
//Coded Mondros Development https://discord.gg/2cD6NtfvNR Athenax#1217/Senox#1111
//Coded Mondros Development https://discord.gg/2cD6NtfvNR Athenax#1217/Senox#1111
client.on('messageCreate', msg => {
  const keywords = ['human', 'captcha', 'dm', 'banned', 'https://owobot.com/captcha', 'Beep', 'Boop', 'human?', 'Are you a real human?'];
  const content = msg.content.toLowerCase();
  const isDM = msg.channel.type === 'dm';//Coded Mondros Development https://discord.gg/2cD6NtfvNR Athenax#1217/Senox#1111
  const containsKeyword = keywords.some(keyword => content.includes(keyword));
  const isUser = msg.author.id === '408785106942164992';
  if (isUser && (isDM || containsKeyword)) {//Coded Mondros Development https://discord.gg/2cD6NtfvNR Athenax#1217/Senox#1111
    clearInterval(interval); 
    channel.send(`<@${config.ownerID}> Bot Kelime Doğrulamasına Düştü Lütfen Doğrulamayı Yapınız Aksi Taktirde Banlanacaksınız!  📛`); // Send a message to indicate that the system has stopped
  }
});
//Coded Mondros Development https://discord.gg/2cD6NtfvNR Athenax#1217/Senox#1111
     client.on('messageCreate', message => {
      if (message.author.id === config.ownerID) {//Coded Mondros Development https://discord.gg/2cD6NtfvNR Athenax#1217/Senox#1111
        if (message.author.bot) return;//Coded Mondros Development https://discord.gg/2cD6NtfvNR Athenax#1217/Senox#1111
        if (message.content === config.prefix + 'yardım') {
          message.channel.send({//Coded Mondros Development https://discord.gg/2cD6NtfvNR Athenax#1217/Senox#1111
            content: "```diff\n-Mondros OwO Hunt Bots!\n\n⚙  Ayar Komutları!  ⚙ \n\n• .başlat = Sistemi Başlatır. \n• .durdur = Sistemi Durdurur.\n• .ayarlar = Komut Ayar Menüsü.\n• .durum = Hangi Sistemlerin Aktif/Pasif Olduğunu Gösterir.\n• .prefixigüncelle = Yeni Prefix Belirler.\n• .kanalıgüncelle = Botun Çalışacağı Kanal İD'sini Günceller.\n\n⚙  Genel Komutlar  ⚙ \n\n• .para = Hesapta Kaç Para Olduğunu Söyler.\n• .yaz = Bota İstediğiniz Yazıyı Yazdırır. \n• .koddoğrula = .koddoğruladan Sonra Yazdığınız Kodu OwO Bota Mesaj Olarak Gönderir.\n• .kullan = OwO Use Komutunu Kullanmanıza Yarar.\n• .envanter = Envanterde Bulunan Eşyaları Gösterir. \n• .durum = Botun Durumunu & İstatistiklerini Gösterir.\n• .hayvanlar = Hesaptaki Hayvanları Gösterir. \n• .hayvanlarısat = Bütün Hayvanları Satar. \n• .günlüködül = OwO'Dan Günlük Ödülünüzü Alır. \n• .elmaskutularınıaç = Tüm Hayvan Kutularını Açar. \n• .silahkutularınıaç = Bütün Silah Kutularını Açar.\n\n+Bu Botu Kullanan Herkesin Sorumluluğu Kendisine Aittir. Banlanma VB. Durumlarda Kesinlikle Sorumluluk Kabul Etmiyoruz.\n\n-©2023 Coded By Mondros```"
          });
        }//Coded Mondros Development https://discord.gg/2cD6NtfvNR Athenax#1217/Senox#1111
        else if (message.content === config.prefix + 'elmaskutularınıaç') {
          message.channel.send('owo lb all');//Coded Mondros Development https://discord.gg/2cD6NtfvNR Athenax#1217/Senox#1111
        }//Coded Mondros Development https://discord.gg/2cD6NtfvNR Athenax#1217/Senox#1111
        else if (message.content === config.prefix + 'silahkutularınıaç') {
          message.channel.send('owo lb all');//Coded Mondros Development https://discord.gg/2cD6NtfvNR Athenax#1217/Senox#1111
      }//Coded Mondros Development https://discord.gg/2cD6NtfvNR Athenax#1217/Senox#1111
      else if (message.content === config.prefix + 'para') {
        message.channel.send('owo cash');//Coded Mondros Development https://discord.gg/2cD6NtfvNR Athenax#1217/Senox#1111
      }//Coded Mondros Development https://discord.gg/2cD6NtfvNR Athenax#1217/Senox#1111
      else if (message.content === config.prefix + 'hayvanlar') {
        message.channel.send('owo zoo');
        }//Coded Mondros Development https://discord.gg/2cD6NtfvNR Athenax#1217/Senox#1111
        else if (message.content === config.prefix + 'hayvanlarısat') {//Coded Mondros Development https://discord.gg/2cD6NtfvNR Athenax#1217/Senox#1111
          message.channel.send('owo sell all');
        }//Coded Mondros Development https://discord.gg/2cD6NtfvNR Athenax#1217/Senox#1111
        else if (message.content === config.prefix + 'günlüködül') {
          message.channel.send('owo daily');
        }//Coded Mondros Development https://discord.gg/2cD6NtfvNR Athenax#1217/Senox#1111
        else if (message.content === config.prefix + 'envanter') {
          message.channel.send('owo inv')
        }//Coded Mondros Development https://discord.gg/2cD6NtfvNR Athenax#1217/Senox#1111
        if (message.content.startsWith(prefix + 'kullan ')) {
          const arg = message.content.slice(7);
          message.channel.send(`owo use ${arg}`);
        }  //Coded Mondros Development https://discord.gg/2cD6NtfvNR Athenax#1217/Senox#1111      
       else if (message.content.startsWith(prefix + 'koddoğrula ')) {
          const kod = message.content.slice(12);
          message.reply('Kelime Doğrulaması Kodu Bota Başarı İle İletilmiştir!  ✅');
          client.users.cache.get('408785106942164992').send(kod);
        }
      }
  });
  //Coded Mondros Development https://discord.gg/2cD6NtfvNR Athenax#1217/Senox#1111

   client.on('messageCreate', async message => {
     if (message.author.id === config.ownerID) {
     if (message.content === config.prefix + 'kanalıgüncelle') {
       try {//Coded Mondros Development https://discord.gg/2cD6NtfvNR Athenax#1217/Senox#1111
         const filter = m => m.author.id === message.author.id;
         const channelPrompt = await message.channel.send('Lütfen Yeni Kanalın ID\'sini Gönderiniz.');//Coded Mondros Development https://discord.gg/2cD6NtfvNR Athenax#1217/Senox#1111
         const channelMessage = await message.channel.awaitMessages({ filter, max: 1, time: 15000, errors: ['time'] });
         const newChannelId = channelMessage.first().content.trim();
  //Coded Mondros Development https://discord.gg/2cD6NtfvNR Athenax#1217/Senox#1111
         if (isNaN(newChannelId)) {
           message.channel.send('Geçersiz Bir Sayı Girdiniz. Lütfen Sadece Sayı Girin.');
           return;
         }//Coded Mondros Development https://discord.gg/2cD6NtfvNR Athenax#1217/Senox#1111
  //Coded Mondros Development https://discord.gg/2cD6NtfvNR Athenax#1217/Senox#1111
         const config = JSON.parse(fs.readFileSync('./config.json', 'utf8'));
         config.kanalid = newChannelId;
         fs.writeFileSync('./config.json', JSON.stringify(config, null, 2));
         message.channel.send(`**✅  Yeni Kanal Ayarlandı!**\n\n **Kanal ID:** ${newChannelId} \n **Kanal Adı:** <#${newChannelId}>\n\n **NOT:** Kanalı Güncellediğinizden Dolayı Botun Yeni Kanalı Algılayabilmesi Adına Botu Yeniden Başlatmanız Gerekmektedir.`);
       } catch (err) {
         console.error(err);
       }
     }//Coded Mondros Development https://discord.gg/2cD6NtfvNR Athenax#1217/Senox#1111
   }
 });//Coded Mondros Development https://discord.gg/2cD6NtfvNR Athenax#1217/Senox#1111
  //Coded Mondros Development https://discord.gg/2cD6NtfvNR Athenax#1217/Senox#1111
  client.on('messageCreate', async message => {
    if (message.content === config.prefix + 'prefixigüncelle') {
      try {//Coded Mondros Development https://discord.gg/2cD6NtfvNR Athenax#1217/Senox#1111
        const filter = m => m.author.id === message.author.id;
        const channelPrompt = await message.channel.send('Lütfen Yeni Prefixi Gönderiniz.');
        const channelMessage = await message.channel.awaitMessages({ filter, max: 1, time: 15000, errors: ['time'] });
        const newprefix = channelMessage.first().content.trim();
//Coded Mondros Development https://discord.gg/2cD6NtfvNR Athenax#1217/Senox#1111
        config.prefix = newprefix;
        fs.writeFileSync('./config.json', JSON.stringify(config, null, 2));
        message.channel.send(`**✅  Yeni Prefix Ayarlandı!**\n\n **Prefix:** ${newprefix}`);//Coded Mondros Development https://discord.gg/2cD6NtfvNR Athenax#1217/Senox#1111
        message.channel.send('Bir hata oluştu. Lütfen daha sonra tekrar deneyin.');
       } catch (err) {//Coded Mondros Development https://discord.gg/2cD6NtfvNR Athenax#1217/Senox#1111
         console.error(err);//Coded Mondros Development https://discord.gg/2cD6NtfvNR Athenax#1217/Senox#1111
      }
    }
  });



//Coded Mondros Development https://discord.gg/2cD6NtfvNR Athenax#1217/Senox#1111
client.login(config.token);
//Coded Mondros Development https://discord.gg/2cD6NtfvNR Athenax#1217/Senox#1111
