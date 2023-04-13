module.exports = [{
    name: "bump",
    prototype : "slash",
    type: "interaction", 
    code: `
  $interactionReply[;{newEmbed:{title:Bump avec succès !}{description:J'ai bumper ton serveur avec succès sur mon serveur support ! Attend **2H** pour recommencer le bump !}{footer: RenFox 76 }{image:https://cdn.discordapp.com/attachments/1066723253562900521/1067028961781100604/Picsart_23-01-23_11-30-54-281.png}};;;everyone;false]
  $channelSendMessage[1079684071359258634;{newEmbed:{title:**Serveur Bump**}{description: 
  > Nom du serveur: ** [$guildName]($getGuildInvite[$guildID]) **
  > Nombres de membres : ** $membersCount **
  > Bump effectué par ** $userTag **
  > Serveur de ** $userTag[$ownerID] ** }{thumbnail:$guildIcon}{image:https://cdn.discordapp.com/attachments/1066723253562900521/1067028961781100604/Picsart_23-01-23_11-30-54-281.png}{color:0400ff}}]
  $setguildVar[bump;$guildName]
  $guildCooldown[2h;Erreur ! Vous devez patientez avant de rebump le serveur !]
  `}]