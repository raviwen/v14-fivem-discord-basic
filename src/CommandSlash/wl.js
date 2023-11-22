const {SlashCommandBuilder, EmbedBuilder} = require("discord.js")
const config = require("../../config");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("whitelist")
        .setDescription("Sunucuya bilgisi verilir.")
        .addUserOption(option => option.setName('üye').setDescription('Üye Belirtiniz.').setRequired(true))
        .addStringOption(option => option.setName('hex').setDescription('Hex-ID Belirtiniz.').setRequired(true)),
    run: async (client, interaction) => {

        const embed = new EmbedBuilder().setTimestamp().setFooter({ text: `${config.Bot.Status}`}).setColor('Random').setAuthor({ name: interaction.user.username, iconURL: interaction.user.avatarURL({dynamic:true})})
        
        let value = interaction.options.getUser('üye')
        let values22 = interaction.options.getString('hex')

        let member = interaction.guild.members.cache.get(value.id)
        let author = interaction.guild.members.cache.get(interaction.user.id);

        if(!config.Roles.UpperStaff.some(x => author.roles.cache.has(x)) && !config.Roles.WhitelistAuth.some(x => author.roles.cache.has(x))) return interaction.reply({ embeds: [embed.setColor('Red').setDescription(`Bu komutu yalnızca ${config.Roles.WhitelistAuth.map(x => `<@&${x}>`)} yetkili olanlar kullanabilir.`)], ephemeral:true})

  
       await member.roles.remove(config.Roles.UnRegistered)
       await member.roles.add(config.Roles.Whitelist)
       await member.setNickname(`ic isim`);
       await interaction.reply({ embeds: [embed.setDescription(`${value} Adlı üyeye <@&${config.Roles.Whitelist}> rolü verildi ve ismi değiştirildi.`)]})


       await interaction.guild.channels.cache.get(config.Channels.WhitelistLog).send({ 
        embeds: [
            embed
            .setTitle(`Whitelist Kaydı`)
            .setDescription(`\`Kayıt Yetkili:\` ${interaction.user}-(${interaction.user.id}) \n\n \`Kayıt Edilen Üye:\` ${value}-(${value.id}) \n\n \`HEX-ID:\` **${values2}** \n\n \`Kayıt Tarihi:\` **${new Date().toLocaleString()}**`)
        ]
       })
}}
