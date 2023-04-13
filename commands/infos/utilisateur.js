module.exports = [{
    name: "user-info",
    prototype : "slash",
    type: "interaction", 
    code: `$interactionReply[;{newEmbed:{color:ED4245}{title:Information sur $userTag[$slashOption[utilisateur]]}{description:
  Voici tes / ces informations sur **$userTag[$slashOption[utilisateur]]**}
{field:👤  Nom d'utilisateur:$username[$slashOption[utilisateur]] :true}{field:👥  Surnom:$replaceText[$replaceText[$checkCondition[$nickname[$slashOption[utilisateur];$guildID;true]==];true;$username[$slashOption[utilisateur]]];false;$nickname[$slashOption[utilisateur];$guildID;true]]:true}{field:👨 Mention:<@$slashOption[utilisateur]>:true}
{field:🟢 Status: $status[$slashOption[utilisateur];$guildID]:true}{field:📱Plateforme:$platform[$slashOption[utilisateur];$guildID;, ]:true}
{field:🆔 ID: $slashOption[utilisateur]:true}{field:🎭Rôles |$userRolesCount[$slashOption[utilisateur];$guildID]|: $userRoles[$slashOption[utilisateur];$guildID;mention;, ]:true}
{field:🪪 Permissions: $userPerms[$slashOption[utilisateur];, ;$guildID]:false}
  {footer: RenFox 76}{thumbnail:$userAvatar[$slashOption[utilisateur]]}};;;everyone]`
  }]