const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
require('./util/eventLoader')(client);

var prefix = ayarlar.prefix;


const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};


client.on('message', msg => {
  console.log(`LOG: S: ${msg.guild.name} M: ${msg.content} Y: ${msg.author.tag}`);
  if (msg.author.id === ayarlar.id) return;
  if (msg.author.bot) return;
  if (msg.content.toLowerCase() === 'sa') {
    msg.reply('Cami mi burası orospu çocuğu?');
  }
    if (msg.content.toLowerCase() === prefix + 'temizle') {
    msg.channel.bulkDelete(5);
    msg.channel.sendMessage("5 adet mesaj silindi!");
  }
   if (msg.content.toLowerCase() === prefix + 'elohimkim') {
    
     msg.channel.sendMessage('https://media.discordapp.net/attachments/727899523040542860/798668974991867934/unknown.png');
   }
     if (msg.content.toLowerCase() === prefix + 'kurobilim') {
     msg.channel.sendMessage('https://media.discordapp.net/attachments/727899523040542860/798671448163352687/unknown.png');
   }
     if (msg.content.toLowerCase() === prefix + 'negatif') {
     msg.channel.sendMessage('https://media.discordapp.net/attachments/727899523040542860/798671223949099018/unknown.png');
   }
     if (msg.content.toLowerCase() === prefix + 'şifa') {
    
     msg.channel.sendMessage('https://media.discordapp.net/attachments/727899523040542860/798671121112629358/unknown.png');
   }
     if (msg.content.toLowerCase() === prefix + 'kuropembe') {
    
     msg.channel.sendMessage('https://media.discordapp.net/attachments/727899523040542860/798670577422172200/unknown.png');
   }
     if (msg.content.toLowerCase() === prefix + 'darbe') {
     msg.channel.sendMessage('https://media.discordapp.net/attachments/727899523040542860/798670393590153287/unknown.png');
   }
     if (msg.content.toLowerCase() === prefix + 'balık') {
    
     msg.channel.sendMessage('https://media.discordapp.net/attachments/727899523040542860/798670285007356034/unknown.png');
   }
     if (msg.content.toLowerCase() === prefix + 'şampiyon') {
     msg.channel.sendMessage('https://cdn.discordapp.com/attachments/691039642136608911/805584599492198421/unknown.png');
                             }
     if (msg.content.toLowerCase() === prefix + 'daisy') {
    
     msg.channel.sendMessage('https://media.discordapp.net/attachments/727899523040542860/785996387673178182/1607466525879.jpg?width=668&height=671');
   }
       if (msg.content.toLowerCase() === prefix + 'liboş') {
    
     msg.channel.sendMessage('https://media.discordapp.net/attachments/670473341437607946/671153196823216147/20200127_032203.jpg');
   }
       if (msg.content.toLowerCase() === prefix + 'karanikah') {
    
     msg.channel.sendMessage('https://media.discordapp.net/attachments/670473341437607946/686619714406842564/20200309_200122.jpg?width=670&height=670');
   }
       if (msg.content.toLowerCase() === prefix + 'menderes') {
    
     msg.channel.sendMessage('https://media.discordapp.net/attachments/670473341437607946/692452071772913846/IMG_20200325_221655.jpg');
   }
       if (msg.content.toLowerCase() === prefix + 'cigara') {
    
     msg.channel.sendMessage('https://media.discordapp.net/attachments/670473341437607946/693423665685069834/image0.jpg?width=536&height=670');
   }
       if (msg.content.toLowerCase() === prefix + 'aera') {
    
     msg.channel.sendMessage('https://media.discordapp.net/attachments/670473341437607946/693457901041483776/image0.jpg?width=1204&height=670');
   }
       if (msg.content.toLowerCase() === prefix + 'fatih') {
    
     msg.channel.sendMessage('https://media.discordapp.net/attachments/670473341437607946/693474308068212736/adfgadfga.jpg');
   }
       if (msg.content.toLowerCase() === prefix + 'pozitif') {
    
     msg.channel.sendMessage('https://media.discordapp.net/attachments/670473341437607946/693477163151917106/image0.jpg?width=499&height=670');
   }
 if (msg.content.toLowerCase() ===   'moscow') {
   msg.channel.sendMessage('<@301786220269142016> seni çağırıyorlar başganım :*');
 }
    if (msg.content.toLowerCase() === 'ah') {
    msg.reply('Niye inliyorsun canım');
  }
      if (msg.content.toLowerCase() === 'of') {
    msg.reply('of deme oh de');
  }
     if (msg.content.toLowerCase() === 'off') {
    msg.reply('of deme oh de');
  }
     if (msg.content.toLowerCase() === 'offf') {
    msg.reply('of deme oh de');
  }
     if (msg.content.toLowerCase() === 'ışıkla kal') {
    msg.reply('Işıkla kal kardeşim benim');
  }
       if (msg.content.toLowerCase() === 'ışıkla kalın') {
    msg.reply('Işıkla kal kardeşim benim ');
  }
       if (msg.content.toLowerCase() === 'isikla kal') {
    msg.reply('Işıkla kal kardeşim benim'); 
       }
              if (msg.content.toLowerCase() === 'isikla kalin') {
    msg.reply('Işıkla kal kardeşim benim');
  }
                       if (msg.content.toLowerCase() === 'ölmek istiyorum') {
    msg.reply('Amen kardeşim amen');
  }

                 if (msg.content.toLowerCase() === 'günaydın') {
    msg.reply('Günaydım canım');
  }      
               if (msg.content.toLowerCase() === 'seslideyim') {
    msg.reply('https://tenor.com/view/napim-gif-19016502');
  }      
  
        if (msg.content.toLowerCase() === 'geleyim mi yukarıya') {
    msg.reply('gel amınakoyum bi sen eksiksin zaten');
  }      
  if (msg.content.toLowerCase() === 'dur') {
    msg.reply(' durdum');
  }  
  if (msg.content.toLowerCase() === 'düştün') {
    msg.reply(' evet, ben de ona düştüm.');
  }      
  
  if (msg.content.toLowerCase() === 'düştüm') {
    msg.reply(' ben de sana düştüm ciğerim');
  }
  if (msg.content.toLowerCase() === '+1') {
    msg.reply(' saymayı mı öğreniyon lan lale');
  }      
  if (msg.content.toLowerCase() === 'gel') {
    msg.reply(' ev boş mu?');
  }      
  if (msg.content.toLowerCase() === 'güzel') {
    msg.reply(' ben daha güzelim');
  }      
  if (msg.content.toLowerCase() === 'gerçekten') {
    msg.reply(' diyosun??');
  }      
  if (msg.content.toLowerCase() === 'gerçekten') {
    msg.reply(' diyosun??');
  }
  if (msg.content.toLowerCase() === 'doğru') {
    msg.reply(' ispatla');
  }      
  if (msg.content.toLowerCase() === 'liboş') {
    msg.reply(' anan liboştur anan');
  }      
  if (msg.content.toLowerCase() === 'beğenmedim') {
    msg.reply(' senin fikrini sorduk mu?');
  }      
  if (msg.content.toLowerCase() === 'sevmedim') {
    msg.reply(' senin fikrini sorduk mu?');
  }      
  if (msg.content.toLowerCase() === 'amk') {
    msg.reply(' amına koyma cebine koy bayramda harçlık yaparsın');
  }      
   if (msg.content.toLowerCase() === 'aq') {
    msg.reply(' amına koyma cebine koy bayramda harçlık yaparsın');
  }      
   if (msg.content.toLowerCase() === 'aminakoyum') {
    msg.reply(' amına koyma cebine koy bayramda harçlık yaparsın');
  }      
  if (msg.content.toLowerCase() === 'kalktı') {
    msg.reply(' kalkmış hali mi bu?');
  }      
    if (msg.content.toLowerCase() === 'moruk') {
    msg.reply(' sus lan amına kodum boomerı');
  }      
  if (msg.content.toLowerCase() === 'anlamadım') {
    msg.reply(' 50 kere mi anlatsın dalyarak?');
  }      
  if (msg.content.toLowerCase() === 'olur') {
    msg.reply(' her şeye olur deme bi bakamışın arka kapıdan giriyolar');
  }      
  
  if (msg.content.toLowerCase() === 'korkma') {
    msg.reply(' aynen şimdi ikna oldu kanka');
  }      
  
  if (msg.content.toLowerCase() === 'üzülme') {
       msg.reply(' aynen şimdi ikna oldu kanka');
  }      
  if (msg.content.toLowerCase() === 'peki') {
       msg.reply(' trip mi atıyorsun len yavşak');
  }      
  if (msg.content.toLowerCase() === 'geldim') {
       msg.reply(' hoşgeldin gönlümün efendisi');
  }      
  if (msg.content.toLowerCase() === 'tm') {
       msg.reply(' düzgün yazsana orospu çocuğu');
  }      
  if (msg.content.toLowerCase() === 'efendim') {
       msg.reply(' kibarlığını yesinler');
  }      
  
  if (msg.content.toLowerCase() === 'tmm') {
       msg.reply(' düzgün yazsana orospu çocuğu');
  }      
  if (msg.content.toLowerCase() === 'yoo') {
       msg.reply(' türkçede böyle bi kelime yok');
  }      
  if (msg.content.toLowerCase() === 'oh') {
       msg.reply(' Afiyet olsun.');
  }  
    if (msg.content.toLowerCase() === 'aera') {
       msg.channel.sendMessage('<@564928862262263817> baş kara lejyonerim bakar mısınız efenim sizi çağırıyorlar hürtmetler efenim hürmetler');
  }      
  if (msg.content.toLowerCase() === 'eris') {
       msg.channel.sendMessage('<@784863572220051535> şşt seni çağırıyolar');
  }      
        if (msg.content.toLowerCase() === 'sirius') {
       msg.channel.sendMessage('<@745712947350732811> baş kara lejyonerim bakar mısınız efenim sizi çağırıyorlar hürtmetler efenim hürmetler');
  }      
  if (msg.content.toLowerCase() === 'daisy') {
       msg.channel.sendMessage('<@745712947350732811> baş kara lejyonerim bakar mısınız efenim sizi çağırıyorlar hürtmetler efenim hürmetler');
  }      
  
       if (msg.content.toLowerCase() === prefix + 'moscowhata') {
     msg.channel.sendMessage('https://media.discordapp.net/attachments/670473341437607946/694898367503007805/image0.jpg?width=1013&height=670');
       }
  if (msg.content.toLowerCase() === prefix + 'aerabidon') {
     msg.channel.sendMessage('https://media.discordapp.net/attachments/670473341437607946/695077581208158308/image0.jpg?width=659&height=670');
       }
         if (msg.content.toLowerCase() === prefix + 'kurobidon') {
     msg.channel.sendMessage('https://media.discordapp.net/attachments/670473341437607946/695076917954609172/image0.jpg?width=670&height=670');
       }
         if (msg.content.toLowerCase() === prefix + 'başkasunucu') {
     msg.channel.sendMessage('https://media.discordapp.net/attachments/670473341437607946/698011116177195148/IMG_20200410_062649.jpg');
       }
           if (msg.content.toLowerCase() === prefix + 'anahtar') {
     msg.channel.sendMessage('https://media.discordapp.net/attachments/670473341437607946/700740840527757472/IMG_20200417_191526.jpg?width=678&height=671');
       }
             if (msg.content.toLowerCase() === prefix + 'yasak') {
     msg.channel.sendMessage('https://media.discordapp.net/attachments/727899523040542860/803397332879802368/unknown.png');
       }
         if (msg.content.toLowerCase() === prefix + 'cuma') {
     msg.channel.sendMessage('https://media.discordapp.net/attachments/727899523040542860/799664051021021194/IMG_20210115_183917.jpg?width=665&height=671');
       }
  
  

  
  
});

client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);
