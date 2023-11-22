## v14 Discord Moderation Bot's
- [Aquara](https://discord.com/invite/aquara)
- [Discord]- Raviwen.

## Configuration
```
module.exports ={
    "Bot": {
        "Guıild": "YOUR_GUILD_ID",   // Sunucuzun ID'si
        "Token": "YOUR_TOKEN", // Botunuzun Tokeni
        "Status": "discord.gg/rota - Rota Communtiy", // Botunuzun durumu
    },
    "Roles": {
        "Owner": ["YOUR_OWNER_ROLE_ID"],  // Owner rolü (Kullanabildiği komutlar) = [Aktif/Bakım/Restart/Rol(ver/al)]
        "WhitelistAuth": ["YOUR_WHITELIST_AUTH_ROLE_ID"], // Whitelist yetkilisi (Kullanabildiği komutlar) = [Kayıtsız/Whitelist(onay/red)]
        "Whitelist": "YOUR_WHITELIST_ROLE_ID", // Whitelist rolü
        "UnRegistered": "YOUR_UNREGISTERED_ROLE_ID", // Kayıtsız rolü
    },
    "Channels": {
        "WhitelistLog": "YOUR_LOG_CHANNEL_ID", // Log kanalı
        "RoleLog": "YOUR_ROLE_LOG_CHANNEL_ID", // Rol verme log kanalı
        "BanLog": "YOUR_BAN_LOG_CHANNEL_ID", // Ban log kanalı

    },
    "Fivem": {
        "SunucuIP": "SURUCU_IP", // Sunucu IP'si
        "AktifGif": "YOUR_ACTIVE_GIF", // Aktif gif
        "BakımGif": "YOUR_MAINTENANCE_GIF", // Bakım gif
        "RestartGif": "YOUR_RESTART_GIF", // Restart gif
    },
}

```

# Commands

```
/aktif
/bakım
/restart
/ban
/ip
/rol_al
/rol_ver
/whitelist
```
