const {SlashCommandBuilder, EmbedBuilder} = require("discord.js")
const config = require("../../config");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("restart")
        .setDescription("Sunucuya restart bilgisi verilir."),
    run: async (client, interaction) => {

        const embed = new EmbedBuilder().setTimestamp().setFooter({ text: `${config.Bot.Status}`}).setColor('Random').setAuthor({ name: interaction.user.username, iconURL: interaction.user.avatarURL({dynamic:true})})
        
        let author = interaction.guild.members.cache.get(interaction.user.id);

        if(!config.Roles.Owner.some(x => author.roles.cache.has(x))) return interaction.reply({ embeds: [embed.setColor('Red').setDescription(`Bu komutu yalnızca ${config.Roles.Owner.map(x => `<@&${x}>`)} yetkili olanlar kullanabilir.`)], ephemeral:true})

        const message = new EmbedBuilder()
        .setColor('Green')
        .setTimestamp()
        .setFooter({ text: `${config.Bot.Status}`})
        .setImage(config.Fivem.BakımGif)
        .setDescription(`Sunucumuz Restartlanmıştır. Lütfen aktif verilene kadar giriş yapmayınız...`)
        .setTitle(`Sunucu Restart!`)

        interaction.reply({ content: `İşlem başarılı!`, ephemeral: true })
        interaction.channel.send({ content: `@everyone`,embeds: [message]})
}}
