const texts = {
	MentionedEmojis: () => {
		// prettier-ignore
		return ['(#^ω^#)', '(✿ꈍ。 ꈍ✿)', '(灬ºωº灬)♡', '(UωU)', '(OωO)', '(O///ω///O)', '(U///ω///U)'].random();
	},
	MentionedTexts: bot => {
		// prettier-ignore
		return [`M-my prefix is \`${bot.db.get('guildConf', message.guild.id, 'prefix')}\``, 'Miku desu!', 'Hi!'].random();
	},
};
module.exports = texts;