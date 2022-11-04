module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log(`Pronto! Loguei em ${client.user.tag}`);
	},
};