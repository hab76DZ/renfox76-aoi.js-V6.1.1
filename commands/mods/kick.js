module.exports = [{
    name: "kick",
    prototype : "slash",
    type: "interaction", 
    code: `
  $kick[$guildID;$slashOption[membres-kick];7;$slashOption[msg-kick]]
  $interactionReply[;{newEmbed:{title:Kick}{description:
  J'ai expulser $userTag[$slashOption[membres-ban]] avec succès
  > Modérateur: $userTag
  > Motif: $message[$slashOption[msg-kick]]
  }{footer: RenFox 76 }};;;everyone]
  $onlyPerms[kickmembers;**⛔ Vous n'avez pas les permissions d'Expulser un membre !**]
  `
  }]