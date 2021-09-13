const { Client, Intents } = require("discord.js");
const { default: axios } = require("axios");
const app = require("../API/Server");

module.exports = class SchoolR extends Client {
	constructor() {
		super({
			intents: [
				Intents.FLAGS.GUILDS,
				Intents.FLAGS.GUILD_MESSAGES,
				Intents.FLAGS.GUILD_MEMBERS,
			],
		});
	}

	async start() {
		console.log(await axios.get("http://localhost:6969/"));
		await this.login(process.env.DISCORD_TOKEN);
	}
};