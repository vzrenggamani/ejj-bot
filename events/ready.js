const chalk = require('chalk');

module.exports = bot => {
	console.log(chalk.bgGreen.white(`Logged in as ${bot.user.tag}!`));
	console.log(chalk.bgGreen.white('Booted up!'));
};