module.exports = [{
    name: "serveur-info", //name of the slash command
    prototype : "slash", //clarifying that this command belongs to a slash command 
    type: "interaction", //clarifying that this command is an interaction command
    code: `$interactionReply[;{newEmbed:{color:F50B94}{title: Information sur $guildName}
        {thumbnail:$guildIcon[$guildID]}{image:$guildBanner[$guildID]}
  {description:Voici les informations du serveur }{field:👑 Créateur:$userTag[$ownerID]:true}{field:🗣️ Membres:$membersCount[$guildID;all;true]:true}{field: 💠Boost:Nombres $guildBoostCount / Niveau $guildBoostCount:true}{field:📜 Description :$guildDescription:false}{field:Status des membres: \n ⚫ Hors ligne $membersCount[$guildID;offline;true] \n 🟢 En ligne $membersCount[$guildID;online;true] \n 🌙 Inactif $membersCount[$guildID;idle;true] \n ⛔ Ne pas déranger $membersCount[$guildID;dnd;true]:true}{field:🤩 Emojis:$guildEmojis:true}{field:🎭 Rôles: $guildRoles[$guildID;name;, ]:true}{field:📋Fonctionnalité: $guildFeatures[$guildID;true]:true}{field:🏤 Salon: $guildChannels[$guildID;mention;, ]:false}{footer:RenFox 76}};;;everyone;false]
`}]