module.exports = [{
    name: "say",
    prototype : "slash",
    type: "interaction", 
    code: `
  $interactionReply[;{newEmbed:{title:Say}{description:
  Envoit du message avec sucèss !
 \n > $slashOption[message]
  }{footer: RenFox 76 }};;;everyone;true]
  $slashOption[message]
  `}]