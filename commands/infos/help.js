module.exports = [{
    name: "help", //name of the slash command
    prototype : "slash", //clarifying that this command belongs to a slash command 
    type: "interaction", //clarifying that this command is an interaction command
    code: `$interactionReply[<@$authorID>;{newEmbed:{title:🏠 Accueil}
  {description:Bienvenue dans le système d'aide de <@1063920557281779793> !
  Je suis un bot multifonction
  > [Top.gg de mon serveur support](https://discord.gg/WSTe8KnvNB)
  > [Top.gg](https://top.gg/bot/1063920557281779793)}
  {footer:RenFox 76}};{actionRow:{selectMenu:help1:Mes commandes:1:1:false:{selectMenuOptions:Fun:fun:Commandes Fun:false:🫠}{selectMenuOptions:Modération:mods:Commandes de Modérations:false:🔧}{selectMenuOptions:Utilitaire:utils:Commandes d'utilitaire:false:🧰}{selectMenuOptions:Informations:infos:Commandes d'informations:false:ℹ️}}};;everyone;false]` // code that will be executed if slash command triggered
  },{
      name:"help1",
          type:"interaction",
          prototype:"selectMenu",
          $if:"old",
          code:`
  $if[$message==fun]
  $interactionReply[;{newEmbed:{title: :laughing: Fun}{description:
  > aki      = Jouer à akinator (en Anglais)
  > wanted   = Vous êtes recherché
  > qi       = Le qi d'un membre ou lui-même
  > slap     = Faire une claque à un membre grâce au bot}{footer: RenFox 76 }};;;everyone;true]
  $endif
  
  $if[$message==mods]
  $interactionReply[;{newEmbed:{title: :tools: Modération}{description:
  > ban         = Bannir un membre
  > unban       = Enlever le bannissement d'un membre
  > kick        = Expulser un membre 
  > clear       = Effacer les messages d'un salon}{footer: RenFox 76 }};;;everyone;true]
  $endif
  
  $if[$message==utils]
  $interactionReply[;{newEmbed:{title: 🧰 Utilitaire}{description:
  > bump        = Bumper votre serveur sur le serveur support
  > bbump       = Boost bump votre serveur sur notre serveur avec mention
  > say         = Envoyé un message à partir du bot
  > ping        = Obtenir le ping du bot
  > config      = Configurer le bot sur ton serveur}{footer: RenFox 76 }};;;everyone;true]
  $endif
  
  $if[$message==infos]
  $interactionReply[;{newEmbed:{title: ℹ️ Information}{description:
  > stats       = Obtenir des informations sur moi
  > serverinfo  = Obtenir des informations sur le serveur
  > userinfo    = Obtenir des informations sur un utilisateur}{footer: RenFox 76}};;;everyone;true]
  $endif
  `}]