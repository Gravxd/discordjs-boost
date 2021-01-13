# discordjs-boost
How to look for a new booster!

Within discord.js, there is not an event for `NitroBoost` so this is a very simple & easy method to automatically find/award new boosters!

**MADE FOR DISCORD-JS V11**

See discord.js.org for v12 changes.

Note: If the booster role has not yet been created, you can just change Line 3:

`const booster_role = newMember.guild.roles.find(r => r.id === 'boosteroleidhere')`

To:

`const booster_role = newMember.guild.roles.find(r => r.name === 'Booster Boomer')`

Then add underneath the newly changed line:

`if(!booster_role) return;` This is so that if the role does not exist we just cancel the function. 


If you rename your booster role, then update the name here.


**If you somehow run into issues with this on the v11 version of discord-js, feel free to join my discord for support!**

[Discord Invite](https://discord.gg/ZYHxxba)
