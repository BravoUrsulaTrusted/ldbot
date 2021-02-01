const yardim = require('hastebin-gen');
const Discord = require('discord.js')

exports.run = (client, message, args) => {
  if(message.channel.type !== "text") return;
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('l.bülent', '---' , true)
    .addField('l.beşiktaş', '---', true)
    .addField('l.kuroöğrenci', '---' , true)
    .addField('l.kurobilim', '---' , true)
    .addField('l.negatif', '---' , true)
    .addField('l.şifa', '---' , true)
    .addField('l.kuropembe', '---' , true)
    .addField('l.darbe', '---' , true)
    .addField('l.balık', '---' , true)
    .addField('l.şampiyon', '---' , true)
    .addField('l.elohimkim', '---' , true)
    .addField('l.daisy', '---' , true)
    .addField('l.liboş', '---' , true)
    .addField('l.karanikah', '---' , true)
    .addField('l.menderes', '---' , true)
    .addField('l.cigara', '---' , true)
    .addField('l.aera', '---' , true)
    .addField('l.fatih', '---' , true)
    .addField('l.pozitif', '---' , true)
    .addField('l.moscowhata', '---' , true)
    .addField('l.aerabidon', '---' , true)
    .addField('l.kurobidon', 'l.yasak' , true)
    .addField('l.başkasunucu', 'l.cuma' , true)
    .addField('l.bülent', 'l.anahtar' , true)
  
    message.channel.sendEmbed(ozelmesajkontrol) 
  }
  
   
};



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
     kategori: "Kullanıcı"

};

exports.help = {
  name: 'yardim',
  description: 'yardım iste',
  usage: 'yardim [kod/cümle]'
};
