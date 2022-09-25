const { Client, GatewayIntentBits } = require("discord.js");
const { config } = require("dotenv");

config()

const client = new Client({ intents: [GatewayIntentBits.Guilds] })

client.on("ready", () => {
    console.log(`Ready! Logged in as ${client.user.tag}`)
})

client.on("interactionCreate", (interaction) => {
    if (!interaction.isChatInputCommand()) return

    if (interaction.commandName === "test") {
        interaction.reply({ content: "Test!" })
    }
})

client.login(process.env.TOKEN)