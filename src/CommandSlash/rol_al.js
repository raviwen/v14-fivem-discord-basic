const {SlashCommandBuilder, EmbedBuilder} = require("discord.js")
const config = require("../../config");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("rol_al")
        .setDescription("Belirtilen kişiden belirtilen rolü alır.")
        .addUserOption(option => option.setName('üye').setDescription('Üye Belirtiniz.').setRequired(true))
        .addRoleOption(option => option.setName('role').setDescription('Rol Belirtiniz.').setRequired(true)),
    run: async (client, interaction) => {

        const embed = new EmbedBuilder().setTimestamp().setFooter({ text: `${config.Bot.Status}`}).setColor('Random').setAuthor({ name: interaction.user.username, iconURL: interaction.user.avatarURL({dynamic:true})})
        

        let value = interaction.options.getUser('üye')
        let values2 = interaction.options.getRole('role')



        let member = interaction.guild.members.cache.get(value.id)
        let author = interaction.guild.members.cache.get(interaction.user.id);


        if(!config.Roles.Owner.some(x => author.roles.cache.has(x)) && !config.Roles.UpperStaff.some(x => author.roles.cache.has(x))) return interaction.reply({ embeds: [embed.setColor('Red').setDescription(`Bu komutu yalnızca ${config.Roles.WhitelistAuth.map(x => `<@&${x}>`)} yetkili olanlar kullanabilir.`)], ephemeral:true})

  
       await member.roles.remove(values2)

       await interaction.reply({ embeds: [embed.setDescription(`${value} Adlı üyeden ${values2} rolü alındı.`)]})


       await interaction.guild.channels.cache.get(config.Channels.RoleLog).send({ 
        embeds: [
            embed
            .setTitle(`Rol Verme İşlemi`)
            .setDescription(`\`Yetkili:\` ${interaction.user}-(${interaction.user.id}) \n\n \`Rol Alınan Üye:\` ${value}-(${value.id}) \n\n \`Alınan Rol:\` **${values2}** \n\n \`Alınma Tarihi:\` **${new Date().toLocaleString()}**`)
        ]
       })
}}
