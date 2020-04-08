exports.run = (bot, message) => {
	// const role = message.guild.roles.get('694168566903210024');
	const rolemusik = message.guild.roles.cache.find(role => role.id === '694168566903210024');
	// Check the user already have roles or not
	if (message.member.roles.cache.some(role => role.id === '694168566903210024')) {
		message.channel.send('Udah ready dugeman slurr..');
	}
	else {
		// if the user not have the roles, give to them
		message.member.roles.add(rolemusik);
		message.channel.send('Udah bisa dugeman slurr...');
	}
};

exports.conf = {
	aliases: ['musik'],
	cooldown: 1,
	guildOnly: false,
	userPerm: [''],
	botPerm: ['MANAGE_ROLES'],
};

exports.help = {
	name: 'musik',
	category: 'Utility',
	description: 'Colong Role Dugem',
	usage: 'musik',
	param: '',
};
