client.on('guildMemberUpdate', (oldMember, newMember) => {
    if(oldMember.user.bot || newMember.user.bot) return;
    const booster_role = newMember.guild.roles.find(r => r.id === 'boosteroleidhere')
    const welcome_channel = newMember.guild.channels.find(c => c.id === 'welcomechannelid')
    const boost_embed = new RichEmbed()
    .setColor("#4632a8")
    .setTitle(`**New Booster!**`)
    .setDescription(`Thank you to ${newMember} for the boost!`)
    .setThumbnail(newMember.user.displayAvatarURL)
    if(!oldMember.roles.has(booster_role.id) && newMember.roles.has(booster_role.id)) {
        welcome_channel.send(boost_embed)
    }
})
