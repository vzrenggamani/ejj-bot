exports.run = (bot, message) => {
	if (message.author.id != '303011486916411392') {return message.channel.send(':question:');}
	const adminrole = message.guild.roles.cache.find(role => role.id === '698604670800887840');
	if (message.member.roles.cache.some(role => role.id === '698604670800887840')) {
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
