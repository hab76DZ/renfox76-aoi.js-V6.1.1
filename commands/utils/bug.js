module.exports = [{
    name: "bug",
    prototype : "slash",
    type: "interaction", 
    code: `
  $interactionReply[;{newEmbed:{title:Bug signalé avec succès !}{description:
  Nous avions sigalé le bug que tu as eu.
  *Erreur*: $slashOption[bug]}{footer: RenFox 76 }};;;everyone;true]
  $channelSendMessage[1079397673624408094;{newEmbed:{title:**Bug signalé**}{description: 
  > Serveur ayant récupérer le bug ** [$guildName]($createserverinvite) **
  > Membre sigalé ** $userTag **
  > Serveur de ** $userTag[$ownerID] ** 
  > Bug : $slashOption[bug]}{thumbnail:$guildIcon}{color:0400ff}}]
  `}]