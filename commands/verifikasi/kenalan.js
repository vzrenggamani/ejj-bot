exports.run = async (bot, message) => {
	if (message.author.id != '303011486916411392') {return message.channel.send(':question:');}
	// Only listen to message author message
	const filter = m => message.author.id === m.author.id;
	let nama, region;
	await message.channel.send(`Hallo!! @<${message.author.id}. Nama panggilan kamu siapa nih? Biar enak gtu manggilnya.`);
	message.channel.awaitMessages(filter, { max: 1, time: 10000, errors: ['time'] })
		.then((responNama) => {
			nama = responNama.first().content;
			message.channel.send(`Oke ${nama}. Lanjut ke pertanyaan selanjutnya yak..\nKamu dari region mana? Tulis kota aja yak!`);
			message.channel.awaitMessages(filter, { max: 1, time: 10000, errors: ['time'] }).then((responRegion) => {
				region = responRegion.first().content;
				message.channel.send(`${nama} dari ${region}, terima kasih sudah berpartisipasi!`);
			}).catch(() => {
				message.channel.send('Kamu kok nggak masukin region kamu sihh :(. Ulangi lagi yuk verifikasinya!. Biar semua pada kenal');
			});
		})
		.catch(() => {
			message.channel.send('Kamu kok nggak masukin nama :(. Ulangi lagi yuk verifikasinya!.');
		});
	message.member.setNickname(nama + ' ' + region);
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
