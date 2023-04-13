module.exports = [{
    name: "clear",
    prototype : "slash",
    type: "interaction", 
    code: `
    $interactionReply[;{newEmbed:{title:Suppression}{description:
  J'ai supprimer $slashOption[clear] message avec succès !
  }{footer: RenFox 76 }};;;everyone;true]
  $clear[$slashOption[clear]]
  $onlyPerms[managemessages;**⛔ Vous n'avez pas les permissions de __Supprimer les messages__ !**]
  `}]