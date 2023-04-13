const aoijs = require("aoi.js");
const bot = new aoijs.AoiClient({
    token: "VOTRE TOKEN",
  prefix: "PREFIX",
  intents: ["Guilds", "GuildMembers", "GuildModeration", "GuildBans", "GuildEmojisAndStickers", "GuildIntegrations", "GuildWebhooks", "GuildInvites", "GuildVoiceStates", "GuildPresences", "GuildMessages", "GuildMessageReactions", "GuildMessageTyping", "DirectMessages", "DirectMessageReactions", "DirectMessageTyping", "MessageContent", "GuildScheduledEvents", "AutoModerationConfiguration", "AutoModerationExecution"],
        events: ["onMessage", "onMessageDelete", "onMessageUpdate", "onMessageDeleteBulk", "onGuildJoin", "onGuildLeave", "onGuildUpdate", "onGuildUnavailable", "onRoleCreate", "onRoleUpdate", "onRoleDelete", "onChannelCreate", "onChannelUpdate", "onChannelDelete", "onChannelPinsUpdate", "onStageInstanceCreate", "onStageInstanceUpdate", "onStageInstanceDelete", "onThreadCreate", "onThreadUpdate", "onThreadDelete", "onThreadListSync", "onThreadMemberUpdate", "onThreadMembersUpdate", "onJoin", "onLeave", "onMemberUpdate", "onMemberAvailable", "onMembersChunk", "onEmojiCreate", "onEmojiDelete", "onEmojiUpdate", "onStickerCreate", "onStickerDelete", "onStickerUpdate", "onBanAdd", "onBanRemove", "onReactionAdd", "onReactionRemove", "onReactionRemoveAll", "onReactionRemoveEmoji", "onVoiceStateUpdate", "onPresenceUpdate", "onTypingStart", "onInteractionCreate", "onApplicationCmdPermsUpdate", "onUserUpdate", "onVariableCreate", "onVariableDelete", "onVariableUpdate", "onFunctionError", "onWebhookUpdate"],
         // vous n'aurez pas forcément besoin de tous les intents et de tous les évents mais mettez les, ça évite les crashs
        database: {
            type:'default',
            db:require('dbdjs.db'),
            path:"./db/",
            tables:["main"],
            promisify:false
        }
});

const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd,"./commands/")

bot.variables(require('./handler/variables.js'))
bot.guildJoinCommand({
channel: "$randomChannelID[$guildID;Text]",
code: `
$title[👋 Salut]
$description[Bonjour $username[$ownerID], merci de m'avoir ajouter sur ton serveur !
Je suis un bot multifonction codé en aoi.js V6.1.1.
J'espère pouvoir t'aider et améliorer ton serveur 😉
**__Conseil__**: Regarde **/help** pour afficher toute mes commandes !
N'oublie pas de jeter un oeil sur /config pour configurer le bot sur ton serveur !
Bonne journée à toi ! <@$ownerID>]
$footer[RenFox 76]
$color[00FF00]
` 
})
bot.command({
  name: '<@1063920557281779793>',
  code: `$title[RenFox 76 en ligne]
$description[Salut 👋 $username 
Mon prefix sur le serveur est **/**
> Mon ping $ping MS
`,
  nonPrefixed: true
})
bot.joinCommand({
    channel: "$getGuildVar[joinch]",
    code: `
$replaceText[$replaceText[$getGuildVar[joinmsg];{author.tag};$userTag];{memberscount.guild};$membersCount]`
})
bot.leaveCommand({
    channel: "$getGuildVar[leavech]",
    code: `
$replaceText[$replaceText[$getGuildVar[leavemsg];{author.tag};$userTag];{memberscount.guild};$membersCount]`
})
bot.guildJoinCommand({
channel: "ID DU SALON",
code: `
$title[Serveur Ajouté]
$description[Le Fondateur du serveur $guildName m'as ajouté !
> Serveur de <@$ownerID>
> [Rejoindre]($getGuildInvite[$guildID])
> Membres: $membersCount]
$color[008000]
$image[$guildIcon]
$footer[RenFox 76]
`
})
bot.guildLeaveCommand({
channel: "ID DU SALON",
code: `
$title[Serveur Retiré]
$description[Le Fondateur du serveur $guildName m'as retiré !
> Serveur de <@$ownerID> !
> Maintenant j'ai **$guildCount** serveurs 😭]
$color[FF0000]
$image[$guildIcon]
$footer[RenFox 76]
`
})
bot.readyCommand({
    channel: "ID DU SALON",
    code: `$title[Bot Actif]
$description[Je suis en ligne avec succès ! 
Ping > $ping MS]
$color[00FF00]
$image[http://www.polymtl.ca/futur/sites/futur.amigow.polymtl.ca/files/Icone_En-ligne_vert-blanc.png]
$footer[RenFox 76]
$log[Bot en ligne: $userTag[$clientID]]`
})

bot.status({
    text: "STATUS",
    type: "PLAYING",
    status: "idle",
    time: 15
});

bot.command({
                  name: '$alwaysExecute',
                  code: `  
                $reply[$messageID;yes]
                $httpRequest[https://api.simsimi.net/v2/?text=$message&lc=fr;GET;;success]
                $botTyping
                $cooldown[2s;{newEmbed:{description:Doucement je peux pas te comprendre !}{color:ff0000}}]
                $onlyIf[$checkContains[$message;@everyone;@here]==false;{newEmbed:{description:Je ne parle pas aux everyone et here !}{color:ff0000}}]
                $onlyForChannels[$getGuildVar[chatbotChannel];]
                $onlyIf[$getGuildVar[chatbotChannel]!=;]
                $suppressErrors
                `
                })
