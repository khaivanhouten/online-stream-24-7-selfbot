const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
    checkUpdate: false
});
client.on('ready', async () => {
const rpc = new Discord.RichPresence()
    .setApplicationId('1242393862220288063')
    .setType('STREAMING')
    .setURL(`LINK YOUTUBE`)
    .setDetails(`STATUS RPC`)
    .setName(`S`)
    .setState(`STATUS`)
    .setStartTimestamp(Date.now())
    .setAssetsLargeImage(`URL GAMBAR`)
    .setAssetsLargeText(`TEXT BESAR`)
    .setAssetsSmallImage(`URL GAMBAR`)
    .setAssetsSmallText(`TEXT KECIL`)
    .addButton(`NAMA BUTTON`, `LINK`)//MAX 2 BUTTON

client.user.setActivity(rpc.toJSON());

console.log(`${client.user.tag} LOGIN BERHASIL`);
});


client.login("TOKEN"); 
