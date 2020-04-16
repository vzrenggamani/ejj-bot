module.exports = () => {
	const Discord = require('discord.js');
	const bot = new Discord.Client();
	const Enmap = require('enmap');
	const walker = require('walker');
	require('./modules/eventLoader.js')(bot);
	require('./modules/functions.js')(bot);

	bot.config = require('./config.js').config;
	bot.db = new Enmap({
		name: 'db',
	});
	bot.commands = new Enmap();
	bot.aliases = new Enmap();
	bot.commandsConf = new Enmap();

	const init = async () => {
	// eslint-disable-next-line no-unused-vars
		const folder = walker('./commands/').on('file', file => {
			if (!file.endsWith('.js')) return;
			const response = bot.loadCommand(file);
			if (response) console.log(response);
		});
	};

	// Load all the commands files and login
	init();
	bot.login(bot.config.token);

};