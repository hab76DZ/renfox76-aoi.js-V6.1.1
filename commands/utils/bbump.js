module.exports = [{
    name: "bbump",
    prototype : "slash",
    type: "interaction", 
    code: `
  $interactionReply[;{newEmbed:{title:Boost Bump avec succès !}{description:J'ai boost bumper ton serveur avec succès sur mon serveur support avec mention ! Attend **24H** pour recommencer le bump !}{footer: RenFox 76 }{image:https://cdn.discordapp.com/attachments/1066723253562900521/1067028962053718036/Picsart_23-01-23_11-31-24-186.png}};;;everyone;false]
  $channelSendMessage[ID DU SALON;Mention = <@&1072984973243584522> {newEmbed: {title:**Serveur Boost Bump**}{description: 
  > Nom du serveur: ** [$guildName]($getGuildInvite[$guildID]) **
  > Nombres de membres : ** $membersCount **
  > Boost Bump effectué par ** $userTag **
  > Serveur de ** $userTag[$ownerID] ** }{thumbnail:$guildIcon}{image:https://cdn.discordapp.com/attachments/1066723253562900521/1067028962053718036/Picsart_23-01-23_11-31-24-186.png}{color:0400ff}}]
  $setGuildVar[bump;$guildName]
  $guildCooldown[24h;Erreur ! Vous devez patientez avant de rebump le serveur !]
  `}]
