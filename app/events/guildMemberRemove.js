module.exports = member => {
  let guild = member.guild;
  member.send('niye gittin?');
  var kanal = 
  guild.defaultChannel.send(`${member.user.username} gitti.`);
};
