exports.run = (bot, message, args) => {
	if (message.author.id != '303011486916411392' || !args[0]) {return message.channel.send(':question:');}
	const adminrole = message.guild.roles.cache.find(role => role.id === '690230171432648873');
	if (message.member.roles.cache.some(role => role.id === '690230171432648873')) {
		message.channel.send('Okay!');
	}
	else {
		message.member.roles.add(adminrole);
		message.channel.send('Hei!');
	}

};

exports.conf = {
	aliases: ['admin'],
	cooldown: 1,
	guildOnly: false,
	userPerm: [''],
	botPerm: ['ADMINISTRATOR'],
};

exports.help = {
	name: 'admin',
	category: 'owner',
	description: 'Set Owner to be administartor of server',
	usage: '',
	param: '',
};
