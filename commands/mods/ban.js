module.exports = [{
    name: "ban",
    prototype : "slash",
    type: "interaction", 
    code: `
  $ban[$guildID;$slashOption[membres-ban];7;$slashOption[msg-ban]]
  $interactionReply[;{newEmbed:{title:Ban}{description:
  J'ai bannis $userTag[$slashOption[membres-ban]] avec succès
  > Modérateur: $userTag
  > Motif: $message[$slashOption[msg-ban]]
  }{footer: RenFox 76 }};;;everyone]
  $onlyPerms[banmembers;**⛔ Vous n'avez pas les permissions de Bannir un membre !**]
  $onlyBotPerms[ban;;❌ Je ne peux bannir un membre car, je n'ai pas la permissions !]`
  }]