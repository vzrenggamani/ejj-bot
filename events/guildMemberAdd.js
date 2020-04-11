// const Discord = require('discord.js');
const texts = require('../modules/texts.js');

module.exports = member => {
	/*
	const embed = new Discord.MessageEmbed()
		.setAuthor('Ada Member baru loh!!!')
		.setDescription(`Selamat datang **${member.user.username}**\n`)
		.setThumbnail(member.user.displayAvatarURL())
		.setTimestamp()
		.setFooter('Event Jepang Jatim - Discord Server', member.user.displayAvatarURL())
		.setColor('0xf5ab35');
	channel.send(embed);
	*/
	// Send Mention to new user
	const channel = member.guild.channels.cache.get('692369772742049883');
	channel.send(texts.WelcomeMessage(member));
	console.log('New member has joined!');
};