const { config } = require('../config.js');
const texts = require('../modules/texts.js');

module.exports = async function(message) {
	const bot = message.client;

	// ignore DMs
	if (message.channel.type == 'dm') return;

	const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();
	const prefix = config.prefix;
	let cmd;

	if (message.content.includes === 'Halo') {
		message.channel.send('Hallo, Senang bertemu dengan kamu. Oiya, kamu boleh kok ngajak kita-kita buat diskusi atau guyon guyon receh hehehe');
		message.channel.send('Semoga harimu menyenangkan');
	}

	if (message.content.startsWith('<@573032392403582976>') || message.content.startsWith('<@!573032392403582976>')) message.channel.send(`${texts.MentionedTexts(bot)} ${texts.MentionedEmojis()}`);

	// Ignore message if not starts with bot prefix
	if (!message.content.startsWith(prefix)) return;

	// Get commands from the commands list that user want
	if (bot.commands.has(command)) cmd = bot.commands.get(command);

	// Ignore it's not a commands
	if (!cmd) return;

	// Assign conf config to run commands
	let find, cmdname, userperm, botperm;
	if (bot.commands.has(command)) {
		find = bot.commands.get(command),
		cmdname = find.help.name,
		userperm = find.conf.userPerm,
		botperm = find.conf.botPerm;
		userperm[0].length == 0 ? (userperm = 'SEND_MESSAGES') : '';
		botperm[0].length == 0 ? (botperm = 'SEND_MESSAGES') : '';
	}

	// Ignore when bot dont have message perms, ignore the messages.
	if (!message.guild.me.hasPermission('SEND_MESSAGES')) return;

	// If user dont have perms
	if (!message.member.hasPermission(userperm) || !message.channel.permissionsFor(message.member).has(userperm)) return message.channel.send(`❌ | You don't have any right to run that command!\n_missing ${userperm} permission(s)_`);
	// if bot dont have perms
	if (!message.guild.me.hasPermission(botperm) || !message.channel.permissionsFor(bot.user).has(botperm)) return message.channel.send(`❌ | Lacks one or more of these permission(s) : \`${botperm.join(', ')}\``);

	// Run the commands
	cmd.run(bot, message, args, prefix);

	// Log the executed commands
	const ran = `${message.author.tag}  ::  ${message.author.id}
	=====================================
	command ran : ${command}
	content     : ${args.join(' ')}
	guild name  : ${message.guild.name}
	guild ID    : ${message.guild.id}
	=====================================\n`;
	console.log(ran);
};