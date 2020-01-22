
 <h1 align="center">- S E N T I N E L -</h1>
<h4 align="center">Your personal assistent for indicating sentences</h4><br><br>

**Description**:
The project was created by a lecture module on the [University of Design(HfG)](https://www.hfg-gmuend.de/) in schwäbisch Gmünd with the topic **machine learning**. The result was a telegram bot that analyses sentences and gives you a probability of which person it might fit. But this also works on movies, music etc.
This Bot is based on [NodeJS](https://nodejs.org/en/) and the neuralNetwork [BrainJS](https://brain.js.org/#/)

If you want to test it then you can just search for **@MovieiumBot at Telegram** and talk to him 

# Intruction
```ruby
Download Zip 

cd 'your directory'
run 'npm install'
then run 'node telegram.js'
```

# Telegram & Twitter API
**What you need:**
**[Messenger Telegram](https://telegram.org/)**  
for chatting/interacting with your bot and to created a TelegramBot with the Botfather.
``` ruby
var TelegramBot = require('node-telegram-bot-api'),
    telegram = new TelegramBot("--- Put your Key from Botfather here ---", {polling: true});
```
<h1 align="center"></h1>

**[Twitter developer Account](https://developer.twitter.com/)** 

Publish and analyze Tweets, optimize ads, and create unique customer experiences. 
And to creat a app to save your Keys to get tweets or analyze Tweets.
``` ruby
consumer_key    = "--- place key after creating a app ---"
consumer_secret = "--- place key after creating a app ---"
access_key      = "--- place key after creating a app ---"
access_secret   = "--- place key after creating a app ---"
```


# Screens 
![alt text](https://github.com/ChRIisS97/machine-learning-TelegramBot/blob/master/Home.png)
![alt text](https://github.com/ChRIisS97/machine-learning-TelegramBot/blob/master/variants.png)
![alt text](https://github.com/ChRIisS97/machine-learning-TelegramBot/blob/master/Home%20–%202.png)


# Last words
Its **still in process** so not everything would be perfect. 

if you change the dataset then you should take care that **the input** is not too short (min. 5 words) 
otherwise you will get a **NaN** in the output. Is at the moment still a small bug
