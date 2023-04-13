module.exports = [{
    name: "unban",
    prototype : "slash",
    type: "interaction", 
    code: `
  $unban[$guildID;$slashOption[membres-unban];7;]
  $interactionReply[;{newEmbed:{title:UnBan}{description:
  J'ai débannis $userTag[$slashOption[membres-unban]] avec succès
  > Modérateur: $userTag
  }{footer: RenFox 76 }};;;everyone]
  $onlyPerms[banmembers;**⛔ Vous n'avez pas les permissions de DéBannir un membre !**]
  $onlyBotPerms[ban;;x: Je n'ai pas la permission de unban un memnbre !]`
  }]