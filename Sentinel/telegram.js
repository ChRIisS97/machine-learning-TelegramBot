// initialize your Bot to Telegram
var TelegramBot = require('node-telegram-bot-api'),
    telegram = new TelegramBot("-------------Enter-Key--------------", {polling: true});
const {execute, picture, res} = require("./scripts");

// when a user press on start -> bot send message
telegram.onText(/\/start/, (msg) => {
    telegram.sendMessage(msg.chat.id, "Hey im S E N T I N E L, Your personal assistant for indicating sentences.\nFor more information what i can do type 'help'");
});

telegram.on("text", (message) => {
    let ZiTTrack = execute(message.text);
    /**
     * @return {string}
     */
    let LandCode = function (input) {
        var land = input;
        if (land === 'de') {
            return "Germany"
        } else if (land === 'en') {
            return "America"
        } else {
            return "interesting Country my friend"
        }
    };
    //multi declaration for userinput -> greater variety of interactions
    if (message.text.toString().toLowerCase() === 'what are you?' || message.text.toString().toLowerCase() === 'say more about yourself' || message.text.toString().toLowerCase() === 'you are what?') {
        telegram.sendMessage(message.chat.id, "<b>That's a good question</b>,\nmy name is S E N T I N E L and I was programmed to help you. I'm based on machine learning more concretely with <a href=\"https://nodejs.org/en/\">NodeJS</a> and <a href=\"https://brain.js.org/#/\">BrainJS</a>. Brain.js is a GPU accelerated library of Neural Networks written in JavaScript for Browsers and NodeJS.\nWhich means you can give me any answer you want and I'll try to match that answer to a person as good as possible.\n\n For more information feel free to contact my creator \n- <a href=\'https://christopher-himann.com/\'>christopher-himann.com</a>", {parse_mode: "HTML"});
        telegram.sendPhoto(message.chat.id, "pictures/Base@2x.png", {
            caption: 'Your personal assistant for indicating sentences',
        });
    //multi declaration for userinput -> greater variety of interactions
    } else if (message.text.toString().toLowerCase() === 'hello' || message.text.toString().toLowerCase() === 'hey' || message.text.toString().toLowerCase() === 'hi' || message.text.toString().toLowerCase() === 'what\'s up' || message.text.toString().toLowerCase() === 'servus') {
        telegram.sendMessage(message.chat.id, "Hello " + message.chat.first_name + ", <strong>nice to meet you!</strong>\nI see you came from " + LandCode(message.from.language_code) + ", <strong>cool!</strong>", {parse_mode: "HTML"});
        telegram.sendMessage(message.chat.id, "<b>I'm S E N T I N E L</b>,\nYou can give me sentences and I\'ll try to find out from which person this could come", {parse_mode: "HTML"});

    }
    //multi declaration for userinput -> greater variety of interactions
    else if (message.text.toString().toLowerCase() === 'help' || message.text.toString().toLowerCase() === 'hilfe' || message.text.toString().toLowerCase() === 'sos') {
        telegram.sendMessage(message.chat.id, "<b>You can ask me different thinks</b>\n\n<b>type 'help'</b>\nI give you some instructions what can i do", {parse_mode: "HTML"});
        telegram.sendMessage(message.chat.id, "<b>type a sentence</b>\nI will analyze this and then give you a probability of who would write it or where it could come from.", {parse_mode: "HTML"});
        telegram.sendMessage(message.chat.id, "<b>type something like 'hello'</b>\nYou get a hello back or something like that, but find it out", {parse_mode: "HTML"});
        telegram.sendMessage(message.chat.id, "<b>type something like 'what are you?'</b>\nI give you more information about me. For example who made me or what I was programmed with", {parse_mode: "HTML"});

    }
    //here the Magic happens with machine learning
    else {
        telegram.sendMessage(message.chat.id, "" + ZiTTrack + "");
        telegram.sendPhoto(message.chat.id, picture("" + res + ""));
    }
    telegram.on("polling_error", (err) => console.log(err));  //for error handling -> why this happens
});


