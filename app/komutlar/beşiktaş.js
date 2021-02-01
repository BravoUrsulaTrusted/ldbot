const Discord = require('discord.js');

exports.run = (client, message, args) => { 
      message.channel.send(`https://cdn.discordapp.com/attachments/669741982951800843/689582516125827231/image0.jpg`);     
    }


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bjk', 'beşiktaş'],
  permLevel: 0
};

exports.help = {
  name: 'bjk',
  description: 'bjk',
  usage: 'bjk'
};
