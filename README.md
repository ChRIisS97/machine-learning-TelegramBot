
 <h1 align="center">- S E N T I N E L -</h1>
<h4 align="center">Your personal assistent for indicating sentences</h4><br><br>

**Description**:
The project was created by a lecture module on the [university of Design(HfG)](https://www.hfg-gmuend.de/) in schwäbisch Gmünd with the topic "machine learning. The result was a telegram bot that analyses sentences and gives you a probability of which person it might fit. But this also works on movies, music etc.
This Bot is based on [NodeJS](https://nodejs.org/en/) and the neuralNetwork [BrainJS](https://brain.js.org/#/)


# Intruction
```ruby
Download Zip 

cd 'your directory'
run 'npm install'
then run 'node telegram.js'
```

# Telegram & Twitter API
**What you need:**
- **[Messenger Telegram](https://telegram.org/)**  
for chatting/interacting with your bot and to created a TelegramBot with the Botfather.
``` ruby
var TelegramBot = require('node-telegram-bot-api'),
    telegram = new TelegramBot("--- Put your Key from Botfather here ---", {polling: true});
```

- **[Twitter developer Account](https://developer.twitter.com/)** 
Publish and analyze Tweets, optimize ads, and create unique customer experiences. 
And to creat a app to save your Keys to get tweets or analyze Tweets.
``` ruby
consumer_key    = "--- place key after creating a app ---"
consumer_secret = "--- place key after creating a app ---"
access_key      = "--- place key after creating a app ---"
access_secret   = "--- place key after creating a app ---"
```

# Pictures
![alt text](https://github.com/ChRIisS97/machine-learning-TelegramBot/blob/master/Home.png)
![alt text](https://github.com/ChRIisS97/machine-learning-TelegramBot/blob/master/variants.png)
