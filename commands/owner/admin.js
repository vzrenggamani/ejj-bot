exports.run = (bot, message, args) => {
	if (message.author.id != '303011486916411392') {return message.channel.send(':question:');}
	// set the admin role
	const adminrole = message.guild.roles.cache.find(role => role.id === '698604670800887840');
	// Detach the admin role
	if (args[0] == 'detach') {
		message.member.roles.remove(adminrole);
	}
	// Check if already have admin role
	else if (message.member.roles.cache.some(role => role.id === '698604670800887840')) {
		message.channel.send('Ahhhh!!!!!');
	}
	else {
		// Give the role to me
		message.member.setNickname('Rengga Sidoarjo');
		message.member.roles.add(adminrole);
		message.channel.send('Selamat datang kembali!');
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
	description: 'Bypass access rights',
	usage: '',
	param: '',
};
