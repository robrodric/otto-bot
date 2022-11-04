module.exports = {
	name: 'interactionCreate',
	execute(interaction) {
		console.log(`${interaction.user.tag} em #${interaction.channel.name} usou um comando.`);
	},
};