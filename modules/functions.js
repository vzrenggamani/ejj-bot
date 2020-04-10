const chalk = require('chalk');
const walker = require('walker');
const { get } = require('snekfetch');
const fs = require('fs');

module.exports = (bot, message) => {

	// RANDOM
	Array.prototype.random = function() {
		return this[Math.floor(Math.random() * this.length)];
	};

	// LOAD COMMAND
	bot.loadCommand = commandName => {
		try {
			// walk through the sub folders using walker
			const folder = walker('./commands/').on('file', file => {
				if (!file.endsWith('.js')) return;
				const props = require(`../${file}`);
				if (props.init) props.init(bot);
				// set command's config
				bot.commandsConf.set(props.help.name, props.conf.guildOnly);
				// set the command's name
				bot.commands.set(props.help.name, props);
			});
			console.log(chalk.bgWhite.black(`Loaded ${commandName}`));
			return false;
		}
		catch (e) {
			console.log(chalk.bgRed(`Unable to load command ${commandName}: ${e}`));
		}
	};

};