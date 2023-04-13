module.exports = [{
    name: "traduction",
    prototype : "slash",
    type: "interaction", 
    code: `
  $interactionReply[;{newEmbed:{title:Traduction}{description:
  > $slashOption[msg-trad]
  en **$slashOption[lang-trad]**
  > $httpRequest[https://api.popcat.xyz/translate?to=$slashOption[lang-trad]&text=$slashOption[msg-trad]]
  }{footer: RenFox 76 }};;;everyone;false]
  `}]