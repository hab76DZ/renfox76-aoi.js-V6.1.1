module.exports = [{
    name: "wanted",
    prototype : "slash",
    type: "interaction", 
    code: `$interactionReply[;{newEmbed:{title:Wanted }{description:
  Vous êtes recherché $username !}{image:$httpRequest[https://api.popcat.xyz/wanted?image=$userAvatar]}{footer: RenFox 76 }};;;everyone]`
  }]