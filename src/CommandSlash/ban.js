const {SlashCommandBuilder, EmbedBuilder} = require("discord.js")
const config = require("../../config");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("ban")
        .setDescription("Üyeyi banlar")
        .addUserOption(option => option.setName('üye').setDescription('Üye Belirtiniz.').setRequired(true))
        .addStringOption(option => option.setName('sebep').setDescription('Sebep Belirtiniz.').setRequired(true)),
    run: async (client, interaction) => {

        const embed = new EmbedBuilder().setTimestamp().setFooter({ text: `${config.Bot.Status}`}).setColor('Random').setAuthor({ name: interaction.user.username, iconURL: interaction.user.avatarURL({dynamic:true})})
        

        let value = interaction.options.getUser('üye')
        let values2 = interaction.options.getString('sebep')



        let member = interaction.guild.members.cache.get(value.id)
        let author = interaction.guild.members.cache.get(interaction.user.id);


        if(!config.Roles.Owner.some(x => author.roles.cache.has(x)) && !config.Roles.UpperStaff.some(x => author.roles.cache.has(x))) return interaction.reply({ embeds: [embed.setColor('Red').setDescription(`Bu komutu yalnızca ${config.Roles.Owner.map(x => `<@&${x}>`)} yetkili olanlar kullanabilir.`)], ephemeral:true})

  
      await member.ban({ reason: `Yetkili : ${author.user.username}-(${author.id}) | ${values2}` })
       await interaction.reply({ embeds: [embed.setDescription(`${value} Adlı üye sunucudan ${values2} sebebiyle yasaklandı.`)]})


       await interaction.guild.channels.cache.get(config.Channels.BanLog).send({ 
        embeds: [
            embed
            .setTitle(`Banlama İşlemi`)
            .setDescription(`\`Yetkili:\` ${interaction.user}-(${interaction.user.id}) \n\n \`Banlanan Üye:\` ${value}-(${value.id}) \n\n \`Sebep:\` **${values2}** \n\n \`Banlanma Tarihi:\` **${new Date().toLocaleString()}**`)
        ]
       })
}}
