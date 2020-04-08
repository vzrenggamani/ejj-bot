// const Discord = require('discord.js');

exports.run = (bot, message) => {

	/* const embed = new Discord.MessageEmbed()
		.setAuthor('Daftar pilihan region yang tersedia')
		.setDescription(`Selamat datang **${message.member.username}**\n`)
		// Add field region - JSON / Tembak manual add field
		.setFooter('Event Jepang Jatim - Discord Server', bot.user.displayAvatarURL())
		.setColor('0xf5ab35'); */

	if (!message.guild.me.hasPermission('MANAGE_NICKNAMES')) {return message.channel.send('I don\'t have permission to change your nickname!');}
	else {
		message.channel.send(`Hallo <@${message.member.user.id}>. Makasih udah mau join di EJJ. Kalo boleh tau nama panggilan kamu siapa nih?`);
		// only listen to message author
		const filter = m =>m.author.id === message.author.id;
		// collect the message
		const collector = message.channel.createMessageCollector(filter, { time: 15000 });

		collector.on('collect', m => {
			// 1st input as name & 2nd input as region and role

			// Change user nick 1st input + 2nd input
			message.member.setNickname(m.content);
			// Give the user role based on 2nd input

			// Print to log and log file
			console.log(`Collected ${m.content}`);
		});

	}
};

exports.conf = {
	aliases: ['p'],
	cooldown: 1,
	guildOnly: false,
	userPerm: [''],
	botPerm: ['MANAGE_NICKNAMES'],
};

exports.help = {
	name: 'kenalan',
	category: 'Verifikasi',
	description: 'Kenalan',
	usage: 'kenalan',
	param: 'nama region',
};
