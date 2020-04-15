exports.run = (bot, message) => {
	if (message.author.id != '303011486916411392') {return message.channel.send(':question:');}
	// Only listen to message author message
	const filter = m =>m.author.id === message.author.id;
	let name, region;
	message.channel.send(`Hallo!! @<${message.author.id}. Nama panggilan kamu siapa nih? Biar enak gtu manggilnya.`);
	message.channel.awaitMessages(filter, { time: 15000, max: 1, errors: ['time'] })
		.then(messages => {
			message.channel.send(`Oke ${messages.first().content}. Lanjut ke pertanyaan selanjutnya yak..`);
			name = message.first().content;
		})
		.catch(() => {
			message.channel.send('Kamu kok nggak masukin nama :(. Ulangi lagi yuk verifikasinya!.');
		});

	message.channel.send(`Oke kita lanjut ya @<${message.author.id}. Kamu dari region mana ? Tulis kota aja yak`);
	message.channel.awaitMessages(filter, { time: 15000, max: 1, errors: ['time'] })
		.then(messages => {
			message.channel.send(`Oke ${messages.first().content}. Selamat datang ${name} dari ${region}. Semoga betah yak!`);
			name = message.first().content;
		})
		.catch(() => {
			message.channel.send('Kamu kok nggak masukin region kamu sihh :(. Ulangi lagi yuk verifikasinya!. Biar semua pada kenal');
		});


	message.member.setNickname(name + ' ' + region);
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
