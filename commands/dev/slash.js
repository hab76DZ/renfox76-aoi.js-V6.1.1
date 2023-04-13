module.exports = ({
    name: "slash",
    code: `J'ai activer les commandes slash avec succès !
    $onlyForIDs[VOTRE ID;ID DE VOTRE DEV;ID DE VOTRE DEV;Erreur vous n'êtes pas dévellopeurs du bot !]
$createApplicationCommand[global;ping;🏓Mon Ping;true]
$createApplicationCommand[global;aki;🤖 Jouer à akinator (en Anglais);true]
$createApplicationCommand[global;wanted;⚠️ Vous êtes recherché !;true]
$createApplicationCommand[global;config;⚙ Configurer le bot;true]
$createApplicationCommand[global;bump;📩 Bump ton serveur;true]
$createApplicationCommand[global;bbump;📩 Boost Bump ton serveur;true]
$createApplicationCommand[global;qi;🧠 Ton QI;true]
$createApplicationCommand[global;stats; <:logo:1079142356944703538> Mes Informations;true]
$createApplicationCommand[global;help;❓Liste des commandes disponibles;true]
$createApplicationCommand[global;serveur-info;ℹ️ Information sur le serveur;true]
$createApplicationCommand[global;traduction;🇫🇷 Traduire un texte en une langue;true;slash;[{
  "name": "msg-trad",
  "description": "Mot à traduire",
  "required": true,
  "type": 3},{
          "name": "lang-trad", 
          "description": "La langue à traduire", 
          "required": true, 
          "type": 3
        }]
  $createApplicationCommand[global;clear;💬 Effacer un message;true;slash;[{
  "name": "clear",
  "description": "Effacer un message",
  "required": true,
  "type": 3}]
$createApplicationCommand[global;user-info;🤔 Information sur l'utilisateur;true;slash;[{
  "name": "utilisateur",
  "description": "Nom d'un utilisateur",
  "required": true,
  "type": 9}]
$createApplicationCommand[global;bug;🐞Signaler un bug / erreur;true;slash;[{
  "name": "bug",
  "description": "Message de l'erreur",
  "required": true,
  "type": 3}]
$createApplicationCommand[global;say;🗨️ Ecrire un message à ta place;true;slash;[{
  "name": "message",
  "description": "Le message à envoyé à partir du bot",
  "required": true,
  "type": 3}]
$createApplicationCommand[global;slap;🩴Faire une claque à un membre;true;slash;[{
  "name": "slap-membre",
  "description": "Nom d'un membre à faire une claque",
  "required": true,
  "type": 9}]
$createApplicationCommand[global;unban;🟢 Révoquer son bannissement d'un membre;true;slash;[{
  "name": "membres-unban",
  "description": "ID du membres à révoquer",
  "required": true,
  "type": 9}]
$createApplicationCommand[global;ban;⛔ Bannir un membre;true;slash;[{
  "name": "membres-ban",
  "description": "Membre à bannir",
  "required": true,
  "type": 6},{
          "name": "ban-msg", 
          "description": "Raison", 
          "required": true, 
          "type": 3
        }]]
$createApplicationCommand[global;kick;🚫 Expulser un membre;true;slash;[{
  "name": "membres-kick",
  "description": "Membre à expulser",
  "required": true,
  "type": 6},{
          "name": "kick-msg", 
          "description": "Raison", 
          "required": true, 
          "type": 3
        }]]
`
})
