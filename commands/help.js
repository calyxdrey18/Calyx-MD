const settings = require('../settings');
const fs = require('fs');
const path = require('path');

async function helpCommand(sock, chatId, message) {
    const helpMessage = `
------------------------------------
   *🤖 ${settings.botName || '𝘾𝘼𝙇𝙔𝙓-𝙈𝘿'}*  
   Version: *${settings.version || '1.0.1'}*
   by ${settings.botOwner || 'Calyx Drey'}
   YT : ${global.ytch}
------------------------------------

------------------------------------
> ☆☆𝘾𝙊𝙈𝙈𝘼𝙉𝘿 𝙇𝙄𝙎𝙏 ☆☆
------------------------------------

------------------------------------
> ☆𝙍𝙖𝙣𝙙𝙤𝙢 𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙨☆ :
    
➤ .help or .menu
➤ .ping
➤ .alive
➤ .tts [text]
➤ .owner
➤ .joke
➤ .quote
➤ .fact
➤ .weather [city]
➤ .news
➤ .attp [text]
➤ .lyrics [song_title]
➤ .8ball [question]
➤ .groupinfo
➤ .staff or .admins 
➤ .vv
➤ .trt [text] [lang]
➤ .ss [link]
➤ .jid
------------------------------------

------------------------------------
> ☆𝙋𝙧𝙚𝙢𝙞𝙪𝙢 𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙨☆ :
    
➤ .mode
➤ .autostatus
➤ .clearsession
➤ .antidelete
➤ .cleartmp
➤ .setpp [reply to image]
➤ .autoreact
------------------------------------

------------------------------------
> ☆𝘼𝙙𝙢𝙞𝙣 𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙨☆ :
    
➤ .ban @user
➤ .promote @user
➤ .demote @user
➤ .mute [minutes]
➤ .unmute
➤ .delete or .del
➤ .kick @user
➤ .warnings @user
➤ .warn @user
➤ .antilink
➤ .antibadword
➤ .clear
➤ .tag [message]
➤ .tagall
➤ .chatbot
➤ .resetlink
➤ .welcome [on/off]
➤ .goodbye [on/off]
------------------------------------

------------------------------------
> ☆𝙄𝙢𝙜/𝙎𝙩𝙞𝙘𝙠𝙚𝙧 𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙨☆ :
    
➤ .blur [image]
➤ .simage [reply to sticker]
➤ .sticker [reply to image]
➤ .tgsticker [Link]
➤ .meme
➤ .take [packname] 
➤ .emojimix [emj1]+[emj2] 
------------------------------------

------------------------------------
> ☆𝙂𝙖𝙢𝙚 𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙨☆ :
    
➤ .tictactoe @user
➤ .hangman
➤ .guess [letter]
➤ .trivia
➤ .answer [answer]
➤ .truth
➤ .dare
------------------------------------

------------------------------------
> ☆𝘼𝙄 𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙨☆ :
    
➤ .gpt [question]
➤ .gemini [question]
➤ .imagine [prompt]
➤ .flux [prompt]
------------------------------------

------------------------------------
> ☆𝙁𝙪𝙣 𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙨☆ :

➤ .compliment @user
➤ .insult @user
➤ .flirt 
➤ .shayari
➤ .goodnight
➤ .roseday
➤ .character @user
➤ .wasted @user
➤ .ship @user
➤ .simp @user
➤ .stupid @user [text]
------------------------------------

------------------------------------
> ☆𝙏𝙚𝙭𝙩𝙢𝙖𝙠𝙚𝙧☆ : 

➤ .metallic [text]
➤ .ice [text]
➤ .snow [text]
➤ .impressive [text]
➤ .matrix [text]
➤ .light [text]
➤ .neon [text]
➤ .purple [text]
➤ .thunder [text]
➤ .leaves [text]
➤ .1917 [text]
➤ .arena [text]
➤ .hacker [text]
➤ .sand [text]
➤ .blackpink [text]
------------------------------------

------------------------------------
> ☆𝘿𝙤𝙬𝙣𝙡𝙤𝙖𝙙𝙚𝙧☆ :
    
➤ .play [song_name]
➤ .song [song_name]
➤ .instagram [link]
➤ .facebook [link]
➤ .tiktok [link]
➤ .video [song name]
➤ .ytmp4 [Link]
------------------------------------

------------------------------------
> ☆𝙎𝙘𝙧𝙞𝙥𝙩 𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙨☆ :

➤ .git
➤ .sc
➤ .repo
------------------------------------
Join our channel for updates:`;

    try {
        const imagePath = path.join(__dirname, '../assets/bot_image.jpg');
        
        if (fs.existsSync(imagePath)) {
            const imageBuffer = fs.readFileSync(imagePath);
            
            await sock.sendMessage(chatId, {
                image: imageBuffer,
                caption: helpMessage,
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363301940507195@newsletter',
                        newsletterName: 'Calyx-MD Full Commands List',
                        serverMessageId: -1
                    }
                }
            },{ quoted: message });
        } else {
            console.error('Bot image not found at:', imagePath);
            await sock.sendMessage(chatId, { 
                text: helpMessage,
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363301940507195@newsletter',
                        newsletterName: 'Calyx-MD Full Commands List',
                        serverMessageId: -1
                    } 
                }
            });
        }
    } catch (error) {
        console.error('Error in help command:', error);
        await sock.sendMessage(chatId, { text: helpMessage });
    }
}

module.exports = helpCommand;
