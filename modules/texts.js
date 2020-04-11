const texts = {
	MentionedEmojis: () => {
		// prettier-ignore
		return ['(#^ω^#)', '(✿ꈍ。 ꈍ✿)', '(灬ºωº灬)♡', '(UωU)', '(OωO)', '(O///ω///O)', '(U///ω///U)'].random();
	},
	MentionedTexts: bot => {
		// prettier-ignore
		// eslint-disable-next-line no-undef
		return [`M-my prefix is \`${bot.db.get('guildConf', message.guild.id, 'prefix')}\``, 'Miku desu!', 'Hi!'].random();
	},
	WelcomeMessage: member => {
		return [`Selamat datang <@${member.user.id}>! Jangan lupa untuk Intro di channel chat ya. Biar kita semua kenal oke :) Tengkyuu`,
			`Hallo, Terima kasih udah join <@${member.user.id}>. Jangan lupa untuk intro ya biar kita semua kenal dan baca rules ya!. Semoga betah dan bisa seru-seruan bareng.`, `Hai - hai <@${member.user.id}>. Selamat datang di EJJ dan salam kenal ya. Jangan lupa intro dan baca rules yang ada ya. Makasih :smile:`].random();
	},
};
module.exports = texts;