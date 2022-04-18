require("dotenv").config();
const { Client, Intents } = require("discord.js");
const { token } = require("./config");

console.log("Token: " + token);

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once("ready", () => {
  console.log("ready!");
});

client.login(token);
