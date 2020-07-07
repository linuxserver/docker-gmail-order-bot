const Discord = require('discord.js');
const YAML = require('yaml');
const discordtoken = process.env.DISCORD_TOKEN;
const roomid = process.env.DISCORD_ROOM


exports.orderbot = async function(order) {
  return new Promise(resolve => {
    const client = new Discord.Client();
    client.login(discordtoken);
    client.on('ready', async () => {
      delete order.rawpayload
      await client.channels.cache.get(roomid.toString()).send(YAML.stringify(order));
      client.destroy();
      resolve(true)
    })
  });
}
