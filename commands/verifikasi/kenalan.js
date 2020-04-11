exports.run = (bot, message, args) => {
	if (message.author.id != '303011486916411392' || !args[0]) {return message.channel.send(':question:');}
	// Only listen to message author message
	const filter = m =>m.author.id === message.author.id;
	message.channel.send(`Hallo <@${message.member.user.id}>. Makasih udah mau join di EJJ. Kalo boleh tau nama panggilan kamu siapa nih?`).then(() => {
		message.channel.awaitMessages(filter, { max: 1, time: 15000, errors: ['time'] })
			.then(nama => console.log(nama.content))
			.then(message.channel.send('Kamu dari region mana nih?').then(() => {
				message.channel.awaitMessages(filter, { max: 1, time: 15000, errors: ['time'] })
					.then(region => console.log(region.content));
			}));
	});
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
