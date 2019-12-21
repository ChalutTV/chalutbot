const Discord = require('discord.js');
const client = new Discord.Client();

client.commands = new Discord.Collection();

client.login(process.env.TOKEN);

module.exports = (client) => {
    client.user.setPresence({
        game: {
            name: "c/help --> Affiche l'aide !"
        }
    });
};
