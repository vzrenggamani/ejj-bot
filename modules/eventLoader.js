const eventReq = (event) => require(`../events/${event}`);
module.exports = bot => {
	// ejjbot.on("ready", () => eventReq("ready")(ejjbot));
	bot.on('message', eventReq('message'));
	bot.on('guildMemberAdd', eventReq('guildMemberAdd'));
};