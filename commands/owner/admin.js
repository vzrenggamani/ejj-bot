exports.run = (bot, message, args) => {
	// Only respond to owner message
	if (message.author.id != '303011486916411392') {return message.channel.send(':question:');}

	/* Give Role Function */
	function giveownerole(roles) {
		const operatorRole = message.guild.roles.cache.find(role => role.id === `${roles}`);
		message.member.roles.add(operatorRole);
		message.member.setNickname('Rengga Sidoarjo');
		message.channel.send('Jangan lupa untuk untuk detach kalo udah selesai');
	}

	if (args[0] == 'limit') {
		// Operator Access
		message.channel.send('Aku set jadi Operator ya!');
		giveownerole('699302221552156732');
	}
	else if (args[0] == 'detach') {
		message.member.roles.set([])
			.then(message.channel.send('Okey! Sudah aku lepas semua nya...'));
	}
	else if (!args[0]) {
		// Adminsnistrator Access
		message.channel.send('Tolong hati-hati ya... Bahaya loh');
		giveownerole('698604670800887840');
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
	usage: 'admin [ACL]',
	param: '',
};
