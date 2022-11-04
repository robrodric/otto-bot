const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		// .setNameLocalizations({
		// 	'pt-BR': 'ajuda',
		// })
		.setDescription('Lista todos os comandos e informações do bot.'),
		// .setDescriptionLocalizations({
		// 	'pt-BR': 'Lists all commands or bot information.',
		// }),
	async execute(interaction, client) {
		console.log(client.guilds.cache.size)
        const help = new EmbedBuilder()
        .setTitle(`Informações`)
        .setColor(`#00afff`)
		.setDescription(`Olá! 👋\nMe chamo **Otto**, sou um bot.`)
		return interaction.reply({embeds: [help]});
	},
};