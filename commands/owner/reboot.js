exports.run = (bot, message) => {
	// prettier-ignore
	if (message.author.id != '303011486916411392') return message.channel.send(':question:');
	process.exit(1);
};

exports.conf = {
	aliases: [],
	cooldown: 0.1,
	guildOnly: false,
	userPerm: [''],
	botPerm: [''],
};

exports.help = {
	name: 'reboot',
	category: 'Owner',
	description: '**OWNER ONLY**',
	usage: '',
	param: '',
};
