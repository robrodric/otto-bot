const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder, Client, Collection, Intents } = require('discord.js');
const schema = require("../database/Schemas/user.js")
const discord = require('discord.js')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('banco')
		.setDescription('[💸 » Economia] - Mostra todos os robrocoins na sua conta bancária.')
    .addUserOption(option => option.setName('usuário').setDescription('Mencione o usuário.').setRequired(false))
  ,
  
	async execute(interaction, client) {

const user = interaction.options.getUser('usuário') || interaction.user

const target = interaction.guild.members.fetch(interaction.targetId);

  let data;
try {
data = await schema.findOne({ _id: user.id})
if(!data) data = await schema.create({ _id: user.id})
}catch(e) {
console.log(e)
}

const exampleEmbed = new EmbedBuilder()
	.setColor('#005fff')
	.setTitle(`🏦 Banco de ${user.tag}`)
  .setDescription(`**${user.username}** tem **${data.coins}** <:pixels:1037915050746335335>!`)
  .setThumbnail(user.displayAvatarURL())
  .setFooter({text: "Dica: Use /trabalhar para conseguir Pixels!"})

			if (user) {
	await interaction.reply({embeds: [exampleEmbed]});
			} else {
  await interaction.reply({embeds: [exampleEmbed]});
      }
	},
}