module.exports = [{
    name: "config",
    prototype : "slash",
    type: "interaction", 
    code: `
  $interactionReply[;{newEmbed:{title:Configuration}{description:
  Bienvenue dans le système de configuration de <@1063920557281779793> !
  Tu pourras configurer le bot, pour bien fonctionner sur ton serveur !
  }{footer: RenFox 76 }};{actionRow:{selectMenu:config1:Choisir une option:1:1:false:{selectMenuOptions:Chatbot:chatboted:Système-ChatBot:false:🗯️}{selectMenuOptions:Aller-Retour:jl:Système de bienvenue et de départ:false:👋}}};;everyone;false]
  $onlyPerms[administrator;**⛔ Vous n'avez pas les permissions, vous devez être __Administrateur__ !**]
  `}, {
    name: "config1",
    prototype: "selectMenu",
    type:"interaction",
    $if: "old",
    code:
    `$if[$message==chatboted]
    $interactionReply[;{newEmbed:{title: 💭 Chatbot}{description:
      Comment configurer le chatbot ?
  > Pour activer appuyez sur le bouton Activer
  > Pour désactiver appuyez sur le bouton désactiver}{footer: RenFox 76 }};{actionRow:{button:Activer:success:activatechatbot:no:💭}}{actionRow:{button:Désactiver:danger:dchatbot:no:🗨️}};;everyone;true]
    $endif
  $if[$message==jl]
    $interactionReply[;{newEmbed:{title: 👋 Bienvenue et départ}{description:
      Join:
      - Salon: $getGuildVar[joinch]
  - Message: $getGuildVar[joinmsg]
      Leave:
      - Salon: $getGuildVar[leavech]
  - Message: $getGuildVar[leavemsg]
    }{footer: RenFox 76 }};{actionRow:{button:Setup:success:setupjl:no:👋}};;everyone;true]
    $endif`
      },{
          name: "setupjl",
          prototype: "button",
          type: "interaction",
          code: `$interactionModal[Setup Join / Leave;setupjl1;{actionRow:{textInput:Message de bienvenue:2:join-msg:true:Quel est ton message de bienvenue ?:1:4000}}{actionRow:{textInput:Salon de bienvenue:1:join-ch:true:Quel est l\'ID du salon ?:1:4000}}{actionRow:{textInput:Message de départ:1:leave-msg:true:Quel est ton message de départ ?:1:4000}}{actionRow:{textInput:Salon de départ:1:leave-ch:true:Quel est l\'ID du salon ?:1:20}}]`
      }, {
          name: "setupjl1",
          type: "interaction",
          prototype: "modal",
          code: `$interactionReply[;{newEmbed:{title: Setup join / Leave}{description:
     Nous avions configuré:
  > Salon de Bienvenue : $textInputValue[join-ch]
  > Message de Bienvenue : $textInputValue[join-msg]
  > Salon de Départ : $textInputValue[leave-ch]
  > Message de Départ : $textInputValue[leave-msg]
    }{footer: RenFox 76 }};;;everyone;true]
  $setGuildVar[joinmsg;$textInputValue[join-msg]]
  $setGuildVar[joinch;$textInputValue[join-ch]]
  $setGuildVar[leavemsg;$textInputValue[leave-msg]]
  $setGuildVar[leavech;$textInputValue[leave-ch]]`
      }, {
          name: "activatechatbot",
          prototype: "button",
          type: "interaction",
      code: `
      $interactionModal[Activer le chatbot;actchatbot;
    {actionRow:
      {textInput:Le salon du chatbot ID:1:chatbot1:ID du salon:true:1:4000}
    }]`
      },{
          name: "actchatbot",
          prototype: "modal",
          type: "interaction",
          code: `
  $setGuildVar[chatbotChannel;$textInputValue[chatbot1]]
  $interactionReply[;{newEmbed:{title:Chatbot}{description:
  > Félicitation, nous avions activé sur le salon **<#$textInputValue[chatbot1]>**
  }{footer: RenFox 76 }};;;everyone;true]`
      }, {
          name: "dchatbot",
          prototype: "button",
          type: "interaction",
          $if: "old",
          code: `$setGuildVar[chatbotChannel;]
  $interactionReply[;{newEmbed:{title:Chatbot}{description:
  > Félicitation, nous avions désactiver le chatbot !}{footer: RenFox 76 }};;;everyone;true]
  $onlyIf[$getGuildVar[chatbotChannel]!=;{newEmbed:{description:⚠️Le chatbot est désactivé !}}]
  $onlyPerms[administrator;**Vous n'avez pas les permissions, vous devez être __Administrateur__ !**]
  `}]