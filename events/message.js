/* eslint-disable no-inline-comments, no-unused-vars */
const Discord = require('discord.js');
const { config } = require('../config.js');
const texts = require('../modules/texts.js');

module.exports = message => {
	const bot = message.client;
	// ignore DMs
	if (message.channel.type == 'dm') return;
	// make a new embed
	const embed = new Discord.MessageEmbed();
	// if guild configuration doesn't exists, create a new one
	try {
		const checker = bot.db.get('guildConf', message.guild.id);
		if (checker == undefined) throw Error();
	}
	catch (_) {
		// prettier-ignore
		bot.db.set('guildConf', {
			prefix: 'q',
			greetingChannel: null,
			tags: {},
			star: {
				starChannel: null,
				used: [],
			},
		}, message.guild.id);
	}
	if (!bot.db.has('totalCommands')) bot.db.set('totalCommands', 0);

	/**
   * To separate command and arguments
   * <prefix>example help
   * output=
   * command : example
   * argument : help
   **/
	// prettier-ignore
	const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();
	const prefix = config.prefix;
	let cmd;

	// miku say hi when mentioned
	// prettier-ignore
	if (message.content.startsWith('<@573032392403582976>') || message.content.startsWith('<@!573032392403582976>')) message.channel.send('Hallo!');

	// if it does not starts with guild's custom prefix or default prefix or it's a bot, do nothing
	// prettier-ignore
	if ((!message.content.startsWith(bot.db.get('guildConf', `${message.guild.id}.prefix`)) && !message.content.startsWith(config.prefix)) || message.author.bot) return;

	// define cmd if bot has the command that user ran
	if (bot.commands.has(command)) cmd = bot.commands.get(command);
	// including aliases
	// prettier-ignore
	else if (bot.aliases.has(command)) cmd = bot.commands.get(bot.aliases.get(command));

	// if its not a command, ignore
	if (!cmd) return;

	let theCmd, find, cd, userperm, botperm;
	if (bot.commands.has(command)) {
		find = bot.commands.get(command); // find the command
		theCmd = find.help.name; // find command's name
		userperm = find.conf.userPerm; // get required user's permission
		botperm = find.conf.botPerm; // get required miku's permission
		userperm[0].length == 0 ? (userperm = 'SEND_MESSAGES') : ''; // if no specific permission is defined, define it into SEND_MESSAGES
		botperm[0].length == 0 ? (botperm = 'SEND_MESSAGES') : ''; // if no specific permission is defined, define it into SEND_MESSAGES
	}
	// if user ran command using aliases, do the same
	else if (bot.aliases.has(command)) {
		find = bot.commands.get(bot.aliases.get(command));
		theCmd = find.help.name;
		userperm = find.conf.userPerm;
		botperm = find.conf.botPerm;
		userperm[0].length == 0 ? (userperm = 'SEND_MESSAGES') : '';
		botperm[0].length == 0 ? (botperm = 'SEND_MESSAGES') : '';
	}

	// if miku lacks send permission, ignore
	if (!message.guild.me.hasPermission('SEND_MESSAGES')) return;
	// if user has no permission for specific command
	// prettier-ignore
	if (!message.member.hasPermission(userperm) || !message.channel.permissionsFor(message.member).has(userperm)) return message.channel.send(`❌ | You don't have any right to run that command!\n_missing ${userperm} permission(s)_`);
	// if miku has no permission for specific command
	// prettier-ignore
	if (!message.guild.me.hasPermission(botperm) || !message.channel.permissionsFor(bot.user).has(botperm)) return message.channel.send(`❌ | Lacks one or more of these permission(s) : \`${botperm.join(', ')}\``);

	// run the commands
	cmd.run(bot, message, args, prefix);
	bot.db.set('totalCommands', bot.db.get('totalCommands') + 1);
	// log it
	const ran = `${message.author.tag}  ::  ${message.author.id}
  =====================================
  command ran : ${command}
  content     : ${args.join(' ')}
  guild name  : ${message.guild.name}
  guild ID    : ${message.guild.id}
  =====================================\n`;
	console.log(ran);
};
