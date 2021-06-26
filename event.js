client.on('guildMemberUpdate', (oldMember, newMember) => {
    if(oldMember.user.bot || newMember.user.bot) return;
    const booster_role = newMember.guild.roles.get('booster_role_id)') || newMember.guild.roles.find(r => r.name.toLowerCase() === 'booster_role_name')
    const welcome_channel = newMember.guild.channels.get('welcome_channel_id') || newMember.guild.channels.find(c => c.name.toLowerCaser() === 'welcome_channel_name');
    const boost_embed = new RichEmbed()
    .setColor("#4632a8")
    .setTitle(`**New Booster!**`)
    .setDescription(`Thank you to ${newMember} for the boost!`)
    .setThumbnail(newMember.user.displayAvatarURL)
   if(booster_role) {
     if(!oldMember.roles.has(booster_role.id) && newMember.roles.has(booster_role.id) && welcome_channel) {
        welcome_channel.send(boost_embed)
    }
   }
})
