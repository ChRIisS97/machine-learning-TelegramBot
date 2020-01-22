const allTweet = [
    {
        input: "Don’t let the noise of others’ opinions drown out your own inner voice.",
        output: {jobs: 1}
    }, {
        input: "You can’t connect the dots looking forward; you can only connect them looking backward. So you have to trust that the dots will somehow connect in your future.",
        output: {jobs: 1}
    }, {
        input: "Your time is limited, so don’t waste it living someone else’s life.",
        output: {jobs: 1}
    }, {
        input: "Have the courage to follow your heart and intuition. They somehow already know what you truly want to become.",
        output: {jobs: 1}
    }, {
        input: "Stay hungry. Stay foolish.",
        output: {jobs: 1}
    }, {
        input: "If today were the last day of your life, would you want to do what you are about to do today",
        output: {jobs: 1}
    }, {
        input: "I think the things you regret most in life are the things you didn’t do.",
        output: {jobs: 1}
    }, {
        input: "Remembering that you are going to die is the best way I know to avoid the trap of thinking you have something to lose.",
        output: {jobs: 1}
    }, {
        input: "We’re here to put a dent in the universe. Otherwise why else even be here",
        output: {jobs: 1}
    }, {
        input: "Sometimes when you innovate, you make mistakes. It is best to admit them quickly, and get on with improving your other innovations.",
        output: {jobs: 1}
    }, {
        input: "My favorite things in life don’t cost any money. It’s really clear that the most precious resource we all have is time.",
        output: {jobs: 1}
    }, {
        input: "I’m convinced that about half of what separates successful entrepreneurs from the non-successful ones is pure perseverance.",
        output: {jobs: 1}
    }, {
        input: "Innovation distinguishes between a leader and a follower.",
        output: {jobs: 1}
    }, {
        input: "I think if you do something and it turns out pretty good, then you should go do something else wonderful, not dwell on it for too long. Just figure out what’s next.",
        output: {jobs: 1}
    }, {
        input: "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven’t found it yet, keep looking. Don’t settle. As with all matters of the heart, you’ll know when you find it.",
        output: {jobs: 1}
    }, { //----------
        input: "The products suck! There’s no sex in them anymore!",
        output: {jobs: 1}
    }, {
        input: "For you to sleep well at night, the aesthetic, the quality, has to be carried all the way through.",
        output: {jobs: 1}
    }, {
        input: "Ultimately, it comes down to taste. It comes down to trying to expose yourself to the best things that humans have done and then try to bring those things into what you’re doing.",
        output: {jobs: 1}
    }, {
        input: "Let’s go invent tomorrow rather than worrying about what happened yesterday.",
        output: {jobs: 1}
    }, {
        input: "I decided to drop out and trust that it would all work out ok.",
        output: {jobs: 1}
    }, {
        input: "I do not adopt softness towards others because I want to make them better.",
        output: {jobs: 1}
    }, {
        input: "You can build your own things that other people can use. And once you learn that, you’ll never be the same again.",
        output: {jobs: 1}
    }, {
        input: "Once you discover one simple fact, and that is everything around you that you call life, was made up by people that were no smarter than you.",
        output: {jobs: 1}
    }, {
        input: "I always advise people – Don’t wait! Do something when you are young, when you have nothing to lose, and keep that in mind.",
        output: {jobs: 1}
    }, {
        input: "We he had everything to gain. And we figured even if we crash and burn, and lose everything, the experience will have been worth ten times the cost.",
        output: {jobs: 1}
    }, {
        input: "I don’t care about being right. I care about success and doing the right thing.",
        output: {jobs: 1}
    }, {
        input: "That’s been one of my mantras – focus and simplicity.",
        output: {jobs: 1}
    }, {
        input: "The most precious thing that we all have with us is time.",
        output: {jobs: 1}
    }, {
        input: "We are very careful about what features we add because we can’t take them away.",
        output: {jobs: 1}
    }, {
        input: "On the blue box: That was what we learned: was that us, too, we didn’t know much. We could build a little thing that could control a giant thing and that was an incredible lesson.",
        output: {jobs: 1}
    }, { //----------
        input: "Believing that the dots will connect down the road will give you the confidence to follow your heart.",
        output: {jobs: 1}
    }, {
        input: "Don’t take it all too seriously. If you want to live your life in a creative way, as an artist, you have to not look back too much.",
        output: {jobs: 1}
    }, {
        input: "One way to remember who you are is to remember who your heroes are.",
        output: {jobs: 1}
    }, {
        input: "People who know what they’re talking about don’t need PowerPoint.",
        output: {jobs: 1}
    }, {
        input: "You have to trust in something, your gut, destiny, life, karma, whatever.",
        output: {jobs: 1}
    }, {
        input: "People judge you on your performance, so focus on the outcome. Be a yardstick of quality. Some people aren’t used to an environment where excellence is expected.",
        output: {jobs: 1}
    }, {
        input: "Now, as you graduate to begin anew, I wish that for you, ‘Stay hungry, stay foolish’.",
        output: {jobs: 1}
    }, {
        input: "It’s more fun to be a pirate than to join the Navy.",
        output: {jobs: 1}
    }, {
        input: "Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma, which is living with the results of other people’s thinking.",
        output: {jobs: 1}
    }, {
        input: "And most important, have the courage to follow your heart and intuition. They somehow already know what you truly want to become. Everything else is secondary.",
        output: {jobs: 1}
    }, {
        input: "Being the richest man in the cemetery doesn’t matter to me… Going to bed at night saying we’ve done something wonderful… that’s what matters to me.",
        output: {jobs: 1}
    }, {
        input: "Don’t let the noise of other’s opinions drown out your own inner voice.",
        output: {jobs: 1}
    }, {
        input: "Sometimes life hits you in the head with a brick. Don’t lose faith.",
        output: {jobs: 1}
    }, {
        input: "If today were the last of your life, would you do what you were going to do today?",
        output: {jobs: 1}
    }, {
        input: "I’m convinced that the only thing that kept me going was that I loved what I did. You’ve got to find what you love.",
        output: {jobs: 1}
    }, { //----------
        input: "Almost everything, all external expectations, all pride, all fear of embarrassment or failure, these things just fall away in the face of death, leaving only what is truly important.",
        output: {jobs: 1}
    }, {
        input: "Remembering that you are going to die is the best way I know to avoid the trap of thinking you have something to lose. You are already naked.",
        output: {jobs: 1}
    }, {
        input: "There is no reason not to follow your heart.",
        output: {jobs: 1}
    }, {
        input: "And you can change it, you can influence it.",
        output: {jobs: 1}
    }, {
        input: "If you want it, you can fly, you just have to trust you a lot.",
        output: {jobs: 1}
    }, {
        input: "The only thing you have in your life is time. If you invest that time in yourself to have great experiences that are going to enrich you, then you can’t possibly lose.",
        output: {jobs: 1}
    }, {
        input: "Sometimes when you innovate, you make mistakes. It is best to admit them quickly, and get on with improving your other innovations.",
        output: {jobs: 1}
    }, {
        input: "My favorite things in life don't cost any money. It's really clear that the most precious resource we all have is time.",
        output: {jobs: 1}
    }, {
        input: "It's not a faith in technology. It's faith in people.",
        output: {jobs: 1}
    }, {
        input: "I’m as proud of many of the things we haven’t done as the things we have done. Innovation is saying no to a thousand things.",
        output: {jobs: 1}
    }, {
        input: "Have the courage to follow your heart and intuition. They somehow know what you truly want to become.",
        output: {jobs: 1}
    }, {
        input: "Quality is more important than quantity. One home run is much better than two doubles.",
        output: {jobs: 1}
    }, {
        input: "Being the richest man in the cemetery doesn’t matter to me. Going to bed at night saying we’ve done something wonderful...that’s what matters to me.",
        output: {jobs: 1}
    }, {
        input: "The people who are crazy enough to think they can change the world are the ones who do.",
        output: {jobs: 1}
    }, {
        input: "Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma",
        output: {jobs: 1}
    }, { //----------
        input: "Don’t let the noise of others’ opinions drown out your own inner voice. And most important, have the courage to follow your heart and intuition.",
        output: {jobs: 1}
    }, {
        input: "We’re just enthusiastic about what we do.",
        output: {jobs: 1}
    }, {
        input: "Be a yardstick of quality. Some people aren’t used to an environment where excellence is expected.",
        output: {jobs: 1}
    }, {
        input: "I'm convinced that about half of what separates successful entrepreneurs from the non-successful ones is pure perseverance.",
        output: {jobs: 1}
    }, {
        input: "For the past 33 years, I have looked in the mirror every morning and asked myself: ‘If today were the last day of my life, would I want to do what I am about to do today?’ And whenever the answer has been ‘No’ for too many days in a row, I know I need to change something.",
        output: {jobs: 1}
    }, {
        input: "What is Apple, after all? Apple is about people who think ‘outside the box,’ people who want to use computers to help them change the world, to help them create things that make a difference, and not just to get a job done.",
        output: {jobs: 1}
    }, {
        input: "Things don’t have to change the world to be important.",
        output: {jobs: 1}
    }, {
        input: "Technology is nothing. What’s important is that you have a faith in people, that they’re basically good and smart, and if you give them tools, they’ll do wonderful things with them.",
        output: {jobs: 1}
    }, {
        input: "I’ve always been attracted to the more revolutionary changes. I don’t know why. Because they’re harder. They’re much more stressful emotionally.",
        output: {jobs: 1}
    }, {
        input: "My model for business is The Beatles: They were four guys that kept each others’ negative tendencies in check; they balanced each other. And the total was greater than the sum of the parts.",
        output: {jobs: 1}
    }, {
        input: "Remembering that you are going to die is the best way I know to avoid the trap of thinking you have something to lose.",
        output: {jobs: 1}
    }, {
        input: "It's really hard to design products by focus groups. A lot of times, people don't know what they want until you show it to them.",
        output: {jobs: 1}
    }, {
        input: "I want to put a ding in the universe.",
        output: {jobs: 1}
    }, {
        input: "The only way to do great work is to love what you do.",
        output: {jobs: 1}
    }, {
        input: "Even if we lose our money, we’ll have a company,",
        output: {jobs: 1}
    }, { //----------
        input: "I don’t really care about being right, I just care about success",
        output: {jobs: 1}
    }, {
        input: "What matters to me is that we do the right thing.",
        output: {jobs: 1}
    }, {
        input: "Details matter, it’s worth waiting to get it right.",
        output: {jobs: 1}
    }, {
        input: "good artists copy, great artists steal‘ – and we have always been shameless about stealing great ideas.",
        output: {jobs: 1}
    }, {
        input: "Things don’t have to change the world to be important.",
        output: {jobs: 1}
    }, {
        input: "Design is not just what it looks like and feels like. Design is how it works.",
        output: {jobs: 1}
    }, {
        input: "You can’t just ask customers what they want and then try to give that to them. By the time you get it built, they’ll want something new.",
        output: {jobs: 1}
    }, {
        input: "Innovation has nothing to do with how many R&D dollars you have. When Apple came up with the Mac, IBM was spending at least 100 times more on R&D. It’s not about money. It’s about the people you have, how you’re led, and how much you get it.",
        output: {jobs: 1}
    }, {
        input: "If you just sit and observe, you will see how restless your mind is. If you try to calm it, it only makes it worse, but over time it does calm, and when it does, there’s room to hear more subtle things",
        output: {jobs: 1}
    }, {
        input: "You’ve got to start with the customer experience and work back toward the technology – not the other way around.",
        output: {jobs: 1}
    }, {
        input: 'In every scene, you are my star, @MichelleObama! Happy birthday, baby! https://t.co/hgMBhHasBj',
        output: {obama: 1}
    }, {
        input: 'Glad to see American Factorys Oscar nod for Best Documentary. Its the kind of story we dont see often enough and https://t.co/FSdnLUbNBA',
        output: {obama: 1}
    }, {
        input: 'Our fellow Americans in Puerto Rico can use our support after this weeks earthquakes. Theyve shown their enduring https://t.co/qxjRcyT8cR',
        output: {obama: 1}
    }, {
        input: 'Heres the thing: Even with problems of this magnitude, each of us can still find a way to make change. Thats why https://t.co/K3YYej7d0s',
        output: {obama: 1}
    }, {
        input: 'The catastrophic fires in Australia are the latest example of the very real and very urgent consequences of climate https://t.co/anmhvMTvGz',
        output: {obama: 1}
    }, {
        input: 'With David Sterns passing, Im reflecting on everything he did to take the NBA global, creating entire new generat https://t.co/lUABFGYPQL',
        output: {obama: 1}
    }, {
        input: 'Heres to a happy, healthy, and hopeful 2020. Happy New Year, everybody!',
        output: {obama: 1}
    }, {
        input: 'From hip-hop to country to The Boss, here are my songs of the year. If youre looking for something to keep you com https://t.co/MGNAUPPgTj',
        output: {obama: 1}
    }, {
        input: 'If theres one thing I love about @RepJohnLewis, its his incomparable will to fight. I know hes got a lot more of https://t.co/5prseTALoX',
        output: {obama: 1}
    }, {
        input: 'Next up are my favorite movies and TV shows of 2019. Of course, theres also American Factory, a film from our own https://t.co/qJ7QkWzkjE',
        output: {obama: 1}
    }, {
        input: 'As we wind down 2019, I wanted to share with you my annual list of favorites that made the last year a little brigh https://t.co/hHUU0DWR46',
        output: {obama: 1}
    }, {
        input: 'From the Obama family to yours, Merry Christmas! https://t.co/dNfx52AjMN',
        output: {obama: 1}
    }, {
        input: 'On behalf of my family, Chag Sameach and Happy Hanukkah! As Jews around the world celebrate, let the menorahs ligh https://t.co/JG1nJIY9Uq',
        output: {obama: 1}
    }, {
        input: '2019 was full of moments that show humanity at its bestcompassionate, entrepreneurial, determined. And yes, hopefu https://t.co/XU93yaGnKS',
        output: {obama: 1}
    }, {
        input: 'RT @ObamaFoundation: #ObamaLeaders convened 200 inspiring changemakers from across the Asia Pacific. Take a look at their week in Kuala Lum',
        output: {obama: 1}
    }, {
        input: 'RT @GetUSCovered: Did you miss your chance to #GetCovered with affordable health coverage at https://t.co/p8DQwo89C7? Well youre in luck',
        output: {obama: 1}
    }, {
        input: 'You can get the zen garden next week, but tomorrow is the last day to sign up for health coverage at https://t.co/7aDwT0Kr6N',
        output: {obama: 1}
    }, {
        input: 'It was remarkable to be back in the Asia-Pacific region with my sister this week, joined by hundreds of talented an https://t.co/XWCz7q32yf',
        output: {obama: 1}
    }, {
        input: 'My sister Maya and I are about to take the stage at @ObamaFoundation Leaders: Asia-Pacific. Well be talking about https://t.co/iNIbFzF8Tr',
        output: {obama: 1}
    }, {
        input: 'RT @MichelleObama: Julia Roberts, Deborah Henry, and I are about to take the stage at #ObamaLeaders: Asia-Pacific to reflect on our visit t',
        output: {obama: 1}
    }, {
        input: 'I thought it was about time I share my holiday gift list  a few practical items, all $10 or less. The best one? He https://t.co/9div5vrK95',
        output: {obama: 1}
    }, {
        input: 'In Vietnam I had the chance to sit down with some of our @ObamaFoundation leaders and alumni from across the Asia P https://t.co/tV1ffldUIy',
        output: {obama: 1}
    }, {
        input: 'RT @MichelleObama: What an incredible day in Vietnam with members of the @GirlsAlliance community!\n\nTake a look at our visit to Cn Giuc h',
        output: {obama: 1}
    }, {
        input: 'Because of Paul Volcker, our financial system is stronger and safer for the American people. Ill remember Paul for https://t.co/FLH7iNb1o1',
        output: {obama: 1}
    }, {
        input: 'Today, we give thanks for our blessings, give back to those around us, and enjoy some time  and turkey, and maybe https://t.co/Y1wrA5SHHH',
        output: {obama: 1}
    }, {
        input: 'Before arguing with friends or family around the Thanksgiving table, take a look at the science behind arguing bett https://t.co/hYMSHMmxNq',
        output: {obama: 1}
    }, {
        input: 'Politicians shouldnt be picking their voters. Voters should be picking their representatives. But unless we act, t https://t.co/Td81P2kRUb',
        output: {obama: 1}
    }, {
        input: 'Take a look at this piece to understand the very real consequences of gerrymandering. In Asheville, NC, we see what https://t.co/zt6gHRDNCS',
        output: {obama: 1}
    }, {
        input: 'Young leaders like these are powering the promise of the Asia Pacific region. Michelle and I couldnt be more impre https://t.co/RHQjTYreVr',
        output: {obama: 1}
    }, {
        input: 'Proud to see Oluwaseun @AyodejiOsowobi in this list. Shes an @ObamaFoundation Leader whos organizing young people https://t.co/y8oGn0exHw',
        output: {obama: 1}
    }, {
        input: 'Stories like this are a reminder of our duty, as a country and as Americans, to support every veterannot only in w https://t.co/clVuvQQEyd',
        output: {obama: 1}
    }, {
        input: 'This Veterans Day, heres a moving portrait of the extraordinary resilience of my friend Cory Remsburg, an Army Ran https://t.co/bwYxW8LZyd',
        output: {obama: 1}
    }, {
        input: 'No one says it better than @MichelleObama  the Obama Presidential Center coming to the South Side isnt for us, it https://t.co/kNLNbOVpHr',
        output: {obama: 1}
    }, {
        input: 'Proud of all the Americans who showed up to vote yesterday, electing a set of hopeful, forward-thinking leaders pri https://t.co/9EA708TmyI',
        output: {obama: 1}
    }, {
        input: 'Proud to endorse an outstanding group of Virginia Democrats in Tuesdays electioncandidates wholl not only advanc https://t.co/s7lkCMYXu7',
        output: {obama: 1}
    }, {
        input: 'Todays the first day of open enrollment on, and high-quality coverage might be more afford https://t.co/lWds9MEdZv',
        output: {obama: 1}
    }, {
        input: 'Congrats to the World Champion @Nationals and their fans! A great group that always showed up when it counted and w https://t.co/bx1Cg6Jvcz',
        output: {obama: 1}
    }, {
        input: 'RT @ObamaFoundation: Watch live: @BarackObama is about to take the stage at the #ObamaSummit. Tune in now at https://t.co/aGSLPSV4Fe for hi',
        output: {obama: 1}
    }, {
        input: 'RT @ObamaFoundation: Take a tour with @BarackObama through the future Obama Presidential Center on Chicagos South Side. https://t.co/n5n6s',
        output: {obama: 1}
    }, {
        input: 'Glad to be back in Chicago for the @ObamaFoundation Summit. Its where I first learned to organizeand where I met https://t.co/umAF2H7vjZ',
        output: {obama: 1}
    }, {
        input: '.@SamanthaJPower is a Pulitzer winner, an incredible writer, and a great friend. Her memoir, The Education of an Id https://t.co/rsVrBUOSIJ',
        output: {obama: 1}
    }, {
        input: 'Michelle and I are heartbroken over the passing of our friend, Elijah Cummings. May his example inspire more Americ https://t.co/Km5EWFuGaw',
        output: {obama: 1}
    }, {
        input: 'I was proud to work with Justin Trudeau as President. Hes a hard-working, effective leader who takes on big issues https://t.co/nZdSmWcpgP',
        output: {obama: 1}
    }, {
        input: 'In December, Michelle and I will head to Malaysia for the first @ObamaFoundation Leaders: Asia-Pacific gathering. T https://t.co/sDWtdRPHCQ',
        output: {obama: 1}
    }, {
        input: 'Yesterday, marathoner Eliud Kipchoge became the first ever to break two hours. Today in Chicago, Brigid Kosgei set https://t.co/xbTHZbEo1K',
        output: {obama: 1}
    }, {
        input: 'RT @MichelleObama: Happy #DayoftheGirl! Im excited to share that in December, Ill be visiting Vietnam to meet some of the inspiring girls',
        output: {obama: 1}
    }, {
        input: 'Congrats to the @WashMystics on a gutsy, first-ever championship! A great team performance when it counted. If folk https://t.co/6M93KCXeVW',
        output: {obama: 1}
    }, {
        input: 'Heres an interesting reada reminder that behind every opinion lies a human being with real experiences and a stor https://t.co/r7MX8F6tsX',
        output: {obama: 1}
    }, {
        input: 'As President, I leaned on @AmbassadorRices experience, expertise, and willingness to tell me what I needed to hear https://t.co/oWx2obfDF5',
        output: {obama: 1}
    }, {
        input: 'Like the Beatles said: Its getting better all the time. Thanks, babe, for 27 amazing years! https://t.co/mImRqIYn1R',
        output: {obama: 1}
    }, {
        input: 'On National Voter Registration Day, its up to us as citizens to make sure everyone we know can make their voices h https://t.co/rYRdykNARc',
        output: {obama: 1}
    }, {
        input: 'One challenge will define the future for todays young generation more dramatically than any other: Climate change. https://t.co/MYeQbArWwu',
        output: {obama: 1}
    }, {
        input: 'Just 16, @GretaThunberg is already one of our planets greatest advocates. Recognizing that her generation will bea https://t.co/mrXtVgE3aN',
        output: {obama: 1}
    }, {
        input: 'Thats what Americans do when others are in need  we help. We give. We inspire. Want to make a difference? There a https://t.co/2mdo9GlaLl',
        output: {obama: 1}
    }, {
        input: 'Jermaine Bell is just six years old, but when he saw people in need, he took the money hed been saving for a trip https://t.co/W4LaUUEYe6',
        output: {obama: 1}
    }, {
        input: 'Bahamian families and communities face a long recovery from Hurricane Dorian. And Americans are reaching out to hel https://t.co/9AbyqU5gcf',
        output: {obama: 1}
    }, {
        input: 'As we remember those we lost on 9/11, we also remember the spirit of unity and togetherness that defined the weeks https://t.co/vVlN1ckjQg',
        output: {obama: 1}
    }, {
        input: 'Marca had a remarkable way of bringing out the best within us. For me, she was a trusted voice and a persistent, bu https://t.co/NKXEI9izsi',
        output: {obama: 1}
    }, {
        input: 'Yesterdays ruling is a big win for North Carolinaand for all of us. Voters should choose their representatives, n https://t.co/nQ1T3U3eBU',
        output: {obama: 1}
    }, {
        input: 'Saw this story of a young person doing great work and wanted to share itkeep it up, David! Thats some creative or https://t.co/LI2hQ3Tovf',
        output: {obama: 1}
    }, {
        input: 'Training is at the heart of organizing. Its why Ive always made it a priority from my 2008 campaign until now. https://t.co/KMSmanB2OK',
        output: {obama: 1}
    }, {
        input: 'With summer winding down, heres a sampling of what Michelle and I have been listening to some new, some old, som https://t.co/f41MILYSBr',
        output: {obama: 1}
    }, {
        input: 'A good story gives you the chance to better understand someone elses life. It can help you find common ground. And https://t.co/cDU3IJN1nq',
        output: {obama: 1}
    }, {
        input: 'Toni Morrison was a national treasure, as good a storyteller, as captivating, in person as she was on the page. Her https://t.co/859oLQ94Ta',
        output: {obama: 1}
    }, {
        input: 'Until all of us stand up and insist on holding public officials accountable for changing our gun laws, these traged https://t.co/QO6QOjix7M',
        output: {obama: 1}
    }, {
        input: 'The families of our wounded warriors don\'t often get a lot of fanfare, but they\'re serving and sacrificing right al https://t.co/dNQIaG7WAA',
        output: {obama: 1}
    }, {
        input: 'Recent court decisions make it clear that the change we need to restore our democracy has to come from the ground u https://t.co/iAsd5KCAdM',
        output: {obama: 1}
    }, {
        input: 'Heres a worthwhile Sunday read: nothing should temper partisanship more than an awareness that somewhere, on som https://t.co/XSbZhrhvcT',
        output: {obama: 1}
    }, {
        input: 'Ive always been proud of what this team accomplished during my administration. But more than what we did, Im prou https://t.co/b7pswCxgE1',
        output: {obama: 1}
    }, {
        input: 'RT @ObamaFoundation: Leaders: Africa may have ended, but 200 inspiring #ObamaLeaders returned to their homes with the new connections and f',
        output: {obama: 1}
    }, {
        input: 'Economist Raj Chetty is not only identifying the decline in opportunity weve seen in recent decades but trying to https://t.co/aVvBp3i2Ey',
        output: {obama: 1}
    }, {
        input: 'Here are a couple of articles backed by new research that are worth taking a look at: A new study on the Medicaid e https://t.co/ZxoqspJKRA',
        output: {obama: 1}
    }, {
        input: 'In America, we dont fear the future, we embrace it. 50 years ago, that spirit took us to the moon. Today, its emb https://t.co/dWqbdzNq83',
        output: {obama: 1}
    }, {
        input: 'RT @MichelleObama: What truly makes our country great is its diversity. Ive seen that beauty in so many ways over the years. Whether we ar',
        output: {obama: 1}
    }, {
        input: '#MandelaDay reminds us that when things feel dark, confusing, or impossibletake a look back at his writings. There https://t.co/dQ4IzuzBNQ',
        output: {obama: 1}
    }, {
        input: 'I have a good feeling about these Chicago @UrbanAlliance interns. Thanks for letting me spend yesterday afternoon w https://t.co/FF40nHbs63',
        output: {obama: 1}
    }, {
        input: 'The @ObamaFoundation is helping a new generation of leaders make their mark, and theres an extraordinary group gat https://t.co/azU3MXDYlN',
        output: {obama: 1}
    }, {
        input: 'Proud to rep Americas best team! Congrats @USWNT and thanks for being such a strong inspiration for women and girl https://t.co/L8OY8yP0Mi',
        output: {obama: 1}
    }, {
        input: 'Yes! Fourth star. Back to back. Congrats to the record breakers on the @USWNT, an incredible team thats always pus https://t.co/2wYRZDpcaO',
        output: {obama: 1}
    }, {
        input: 'RT @MichelleObama: Good luck to the @USWNT! You all are some of the most fearless, powerful, awe-inspiring athletes Ive ever seenand toge',
        output: {obama: 1}
    }, {
        input: 'Happy Fourth of July, everybody! This is always a great day in the Obama family: a chance to celebrate Americaand https://t.co/xLyTsgcyjO',
        output: {obama: 1}
    }, {
        input: 'Im admittedly biased, but this article gibes with my experience about what all of us might take away from the alo https://t.co/euYQ9XepeG',
        output: {obama: 1}
    }, {
        input: 'Congrats to the USWNT! A great performance from a great teamlooking forward to Sunday. #OneNationOneTeam',
        output: {obama: 1}
    }, {
        input: 'No one changes the world alone. Thats why the @ObamaFoundation is connecting emerging leaders from South Africa to https://t.co/nG2Rp9OjIw',
        output: {obama: 1}
    }, {
        input: 'The most important job in our democracy is citizen. If youre tired of politicians manipulating maps and ignoring t https://t.co/FM4pOBftrt',
        output: {obama: 1}
    }, {
        input: '50 years ago, history was written at the Stonewall Inn when New Yorks LGBT community stood up, spoke out, and star https://t.co/N6TIkkQHEI',
        output: {obama: 1}
    }, {
        input: 'What a gift to come across this interview with Julia Hurricane Hawkins. Im as grateful for her life advice as I https://t.co/zN8buKkYqL',
        output: {obama: 1}
    }, {
        input: 'Now were talking! Congrats to Team USA for moving on, and thanks for continuing to make us all proud. #USA https://t.co/DVkKBfU6wA',
        output: {obama: 1}
    }, {
        input: 'On Juneteenth, we celebrate our capacity to make real the promise of our founding, that thing inside each of us tha https://t.co/bYmILjSq9H',
        output: {obama: 1}
    }, {
        input: 'Outside the Oval Office, I kept a painting of a small crowd huddled around a pocketwatch, waiting for the moment th https://t.co/m8dljaM5Zk',
        output: {obama: 1}
    }, {
        input: 'This is worth a read: a thought-provoking reminder that education reform isnt a cure-all. As a supporter of educat https://t.co/sP7Q1oJSl5',
        output: {obama: 1}
    }, {
        input: 'Yes we can, Greta. Im hopeful because of you and all the young people who are fighting to protect the planet. Keep https://t.co/trOVzMi4Nr',
        output: {obama: 1}
    }, {
        input: 'Happy Fathers Day to Charles, one of our @ObamaFoundation Fellows, and all the dads at Fathers Uplift. Today, we https://t.co/l5IrsoIuop',
        output: {obama: 1}
    }, {
        input: 'RT @ObamaFoundation: These young people want to take action and make a change. Through the #CommunityLeadership Corps in Chicago and Hartfo',
        output: {obama: 1}
    }, {
        input: 'The @USWNT is something to smile about. It was great to celebrate with them back in 2015 and Im excited to root th https://t.co/WMEvpsFGin',
        output: {obama: 1}
    }, {
        input: 'Six years ago, David Ortizs spirit and resolve helped us all begin to heal from the Boston Marathon bombing. Today https://t.co/u3QgBv80aK',
        output: {obama: 1}
    }, {
        input: 'Last week, it was Virginia Beach. But day after day and year after year, too many families and communities are shat https://t.co/oscI8f9xFv',
        output: {obama: 1}
    }, {
        input: 'RT @ObamaFoundation: Courage is contagious. Watch some of the courageous students who won our first-ever Civic Action Recognition Awards, h',
        output: {obama: 1}
    }, {
        input: 'You ve got a lot to be proud of, Jiwandeep. Thanks for everything you do to make this country a little more equal. https://t.co/qw8I8io4pc',
        output: {obama: 1}
    }, {
        input: 'What a life. American history has always been driven by visionaries like Leah Chaseand all the men and women who w https://t.co/XHnhWiluN2',
        output: {obama: 1}
    }, {
        input: 'A story worth sharing: Twelve years ago, Brian joined my first presidential campaign. Two years ago, he was diagnos https://t.co/2uf6ozOukh',
        output: {obama: 1}
    }, {
        input: 'Exciting to see the faces of Colombias future at an @ObamaFoundation roundtable with young leaders in Bogot. Thei https://t.co/FniC2X3hM4',
        output: {obama: 1}
    }, {
        input: 'On Memorial Day, we remember all those who gave everything for something greater than themselves. Its up to us to https://t.co/4m5HbHFzcb',
        output: {obama: 1}
    }, {
        input: 'Great to get out there and take a few cuts at the plate yesterdayI had a blast with all these extraordinary young https://t.co/TQ7O6BVMSJ',
        output: {obama: 1}
    }, {
        input: 'RT @ObamaFoundation: Congratulations on the inauguration of @ChicagosMayor Lori Lightfoot, Treasurer Melissa Conyears-Ervin, @ChiCityClerk',
        output: {obama: 1}
    }, {
        input: 'Heres a great story: While weve still got a lot of work to do to make college affordable for everyone, that didnt https://t.co/eW9usqYzu1',
        output: {obama: 1}
    }, {
        input: 'Happy Mothers Day to the most caring, brilliant, funny, and grounded woman I knowa perfect role model not just fo https://t.co/Tpro3oBzyC',
        output: {obama: 1}
    }, {
        input: 'As part of the @ObamaFoundation, moms like Dr. Mwansa Ketty Lubeya are answering the call for changeand raising th https://t.co/Za7hYarUQW',
        output: {obama: 1}
    }, {
        input: 'RT @MichelleObama: Congratulations, Meghan and Harry! Barack and I are so thrilled for both of you and cant wait to meet him. #RoyalBaby h',
        output: {obama: 1}
    }, {
        input: 'Happy #CollegeSigningDay, everybody! Im proud of every student out there whos taking the next step in their educa https://t.co/djtqPri6U5',
        output: {obama: 1}
    }, {
        input: 'Condolences to the family of John Singleton. His seminal work, Boyz n the Hood, remains one of the most searing, lo https://t.co/KP8bValVK7',
        output: {obama: 1}
    }, {
        input: 'Congratulations to the new class of @ObamaFoundation Fellows! Their work in every region of the globe is already ma https://t.co/qB2Qxp8bB9',
        output: {obama: 1}
    }, {
        input: 'For thirty-six years, Richard Lugar proved that pragmatism and decency worknot only in Washington but all over the https://t.co/fbLSYFY3A6',
        output: {obama: 1}
    }, {
        input: 'Dominiques story is a reminder to us that where youre from shouldnt define what you can achieve. Im proud of he https://t.co/4w6Q5E3tA8',
        output: {obama: 1}
    }, {
        input: 'This generation of climate activists is tired of inaction, and theyve caught the attention of leaders all over the https://t.co/i8AM4miXL4',
        output: {obama: 1}
    }, {
        input: 'And in the U.S., 13-year old @AlexandriaV2005 of New York, 13-year old @havenruthie of Denver, and 16-year old https://t.co/aS6adg4Kh7',
        output: {obama: 1}
    }, {
        input: 'I met 23-year-old @luisamneubauer in Berlin earlier this month. Luisa, the organizer behind the student movement in https://t.co/GCaEtCcCkI',
        output: {obama: 1}
    }, {
        input: 'They\'re people like 16-year-old @GretaThunberg, whose protests at Swedish parliament sparked a movement. Inspired b https://t.co/vJjEgoUetO',
        output: {obama: 1}
    }, {
        input: 'Young people all over the world are leading the way in the fight to protect our planet because they know their futu https://t.co/D1XZ9f8Zck',
        output: {obama: 1}
    }, {
        input: 'To all who celebrate today, happy Easter from our family to yours! On this day of rebirth and renewal, lets recomm https://t.co/Xw82Y9kbPr',
        output: {obama: 1}
    }, {
        input: 'The attacks on tourists and Easter worshippers in Sri Lanka are an attack on humanity. On a day devoted to love, re https://t.co/pVpa7j9GKm',
        output: {obama: 1}
    }, {
        input: 'Notre Dame is one of the worlds great treasures, and were thinking of the people of France in your time of grief. https://t.co/aXv1azpmof',
        output: {obama: 1}
    }, {
        input: 'Congratulations, Tiger! To come back and win the Masters after all the highs and lows is a testament to excellence, grit, and determination.',
        output: {obama: 1}
    }, {
        input: 'Another good story worth sharing: From one ""kid from Akron"" to a new generation of Akron kids, some remarkable earl https://t.co/QH4JkJjqf5',
        output: {obama: 1}
    }, {
        input: 'From a big NBA fan, congrats to future Hall of Famers Dwyane Wade and Dirk Nowitzkinot just all-time greats but class acts, too.',
        output: {obama: 1}
    }, {
        input: 'In just a few minutes, Im taking the stage at the @ObamaFoundation Town Hall Europe for a conversation about how t https://t.co/N3FBPQfn47',
        output: {obama: 1}
    }, {
        input: 'A voice everybody should hear. https://t.co/0u7HUlQ8id',
        output: {obama: 1}
    }, {
        input: 'Heres a story about people doing good that\'s worth sharing: @BradPaisley and his wife @Kimwilliamspais saw food in https://t.co/kMBFR3xzAA',
        output: {obama: 1}
    }, {
        input: 'Great to see Chicagos historic mayoral race between two highly qualified candidates. Congrats to our next mayor, L https://t.co/MGW1qYdXeM',
        output: {obama: 1}
    }, {
        input: 'Valerie is one of my oldest friends and advisors  she was by my side when I first decided to run for office and fo https://t.co/VQKw3mhOPy',
        output: {obama: 1}
    }, {
        input: 'Last night I had the chance to meet with first-term Democrats in Congress it\'s a young, diverse class, stocked with https://t.co/BIiEeE5aSS',
        output: {obama: 1}
    }, {
        input: 'Just in the nick of time: My brackets have never been my one shining moment, but here we go again. You can check ou https://t.co/gZFlHQamkn',
        output: {obama: 1}
    }, {
        input: 'And here are some ways to help cyclone victims in Mozambique, Malawi, and Zimbabwe: https://t.co/if8HZBtWBH',
        output: {obama: 1}
    }, {
        input: 'The floods in the Midwest and in southern Africa are heartbreaking. Suffering and loss on two sides of the world ca https://t.co/JQuv5mQHnq',
        output: {obama: 1}
    }, {
        input: 'In 2011, I visited the tiny town of Moneygall and got to walk around in the house where my great-great-great grandf https://t.co/Po21svTQs8',
        output: {obama: 1}
    }, {
        input: 'Michelle and I send our condolences to the people of New Zealand. We grieve with you and the Muslim community. All https://t.co/lmpsr9lLSr',
        output: {obama: 1}
    }, {
        input: '.@MichelleObama and I are rooting hard for Team USA as the Special Olympics World Games get underway this week. Our https://t.co/aD4gRnMEL8',
        output: {obama: 1}
    }, {
        input: 'What a great moment. Happy 110th, Virginia. https://t.co/FuNZV3RRV4',
        output: {obama: 1}
    }, {
        input: 'Michelle and I send our deepest sympathies to all who knew the victims of todays plane crash in Ethiopia.',
        output: {obama: 1}
    }, {
        input: 'The Crew Dragons been on quite a ride since I last saw itcongrats to @NASA and @SpaceX on a successful return! We https://t.co/eJVhuf5KTQ',
        output: {obama: 1}
    }, {
        input: 'Preethi, Alice, and Sefora are just three of many @ObamaFoundation leaders who remind us what International Womens https://t.co/z319lmm1iP',
        output: {obama: 1}
    }, {
        input: 'And @SeforaKodjo is helping the next generation of women leaders in Africa rise up. Her organization is training an https://t.co/qTd90Kw7ev',
        output: {obama: 1}
    }, {
        input: '.@BarbeAlice is helping refugees resettle into welcoming communities in France, offering them job training and lang https://t.co/CoeFcGSJ7d',
        output: {obama: 1}
    }, {
        input: '.@preethiherman is helping women unleash their power to change their societies. As head of the https://t.co/1anUW1vugu',
        output: {obama: 1}
    }, {
        input: 'On International Womens Day, Im reflecting on the future we all want for our daughters: one where they can live o https://t.co/oJiJ7foBZy',
        output: {obama: 1}
    }, {
        input: 'Its up to all of us as citizens to make sure that the rules of democracy are faireverywherebecause the next deca https://t.co/Tpv5NoYazl',
        output: {obama: 1}
    }, {
        input: 'Zion Williamson seems like an outstanding young man as well as an outstanding basketball player. Wishing him a speedy recovery.',
        output: {obama: 1}
    }, {
        input: 'Im about to join @StephenCurry30 on stage with @MBK_Alliance to answer questions from boys and young men of color https://t.co/iAL5ZRVOUv',
        output: {obama: 1}
    }, {
        input: 'RT @ObamaFoundation: Ahead of #MBKRising and in honor of Black History Month, @BarackObama shared a nonfiction reading list that can help t',
        output: {obama: 1}
    }, {
        input: 'Ive always loved basketball because its about building a team thats equal to more than the sum of its parts. Gla https://t.co/QZ2PTwFPmq',
        output: {obama: 1}
    }, {
        input: 'Happy Valentines Day to the extraordinarily smart, beautiful, funny, one and only @MichelleObama. Its true; she d https://t.co/STEbQ40XQ5',
        output: {obama: 1}
    }, {
        input: 'In the year since their friends were killed, the students of Parkland refused to settle for the way things are and https://t.co/HLvyhgqiup',
        output: {obama: 1}
    }, {
        input: 'Dont be sad its over, be proud it taught us so much. Congrats to all the men and women of @NASA on a @MarsRovers https://t.co/lFxXcgiBqS',
        output: {obama: 1}
    }, {
        input: 'Happy 85th birthday to @RealBillRussell - the greatest champion in American sports, and a lifelong warrior for justice.',
        output: {obama: 1}
    }, {
        input: 'RT @MichelleObama: A big part of friendship is showing up for your girlsthats why I was thrilled to be there for the one and only @alicia',
        output: {obama: 1}
    }, {
        input: 'My statement on the passing of former Congressman John Dingell: https://t.co/gjBYHHImzB',
        output: {obama: 1}
    }, {
        input: 'We lost two great Americans today  Frank Robinson and John Dingell  citizens who inspired me and so many others b https://t.co/EcjpeHhzgf',
        output: {obama: 1}
    }, {
        input: 'As we celebrate Black History Month and Jackie Robinsons 100th birthday, we celebrate the life of all whose courag https://t.co/2JUfORxB3X',
        output: {obama: 1}
    }, {
        input: 'The @ObamaFoundation is connecting people from around the world so they can form partnerships just like this. I am https://t.co/dV9rIvzy8L',
        output: {obama: 1}
    }, {
        input: 'Ive always drawn inspiration from what Dr. King called lifes most persistent and urgent question: ""What are you d https://t.co/Cxspr7qtwG',
        output: {obama: 1}
    }, {
        input: 'RT @MBK_Alliance: President Obama challenged us to improve our communities in 2019and mentorship is a concrete action we can take. With @M',
        output: {obama: 1}
    }, {
        input: 'I knew it way back then and Im absolutely convinced of it today  youre one of a kind, @MichelleObama. Happy Birt https://t.co/VLwQtcydJm',
        output: {obama: 1}
    }, {
        input: 'In 2018 people stepped up and showed up like never before. Keep it up in 2019. Weve got a lot of work to do, and I https://t.co/7XRYXZbFTu',
        output: {obama: 1}
    }, {
        input: 'I hope you find inspiration in the stories of Dejah, Moussa, Sandor, Hong and Jonny. Their journeys began with a de https://t.co/nfkq6OHmuc',
        output: {obama: 1}
    }, {
        input: 'Leaders like Jonny Boucher, a Chicago native who, after losing too many friends and family to suicide, started a co https://t.co/lKmjQt4MNA',
        output: {obama: 1}
    }, {
        input: 'Leaders like Hong Hoang, who mobilized a youth-led movement to create a greener world after becoming the first Viet https://t.co/gDZ1xNFqhP',
        output: {obama: 1}
    }, {
        input: 'Leaders like Moussa Kondo and Sandor Lederer, who are each doing their part to fight corruption in their native cou https://t.co/XfRJsPyEBG',
        output: {obama: 1}
    }, {
        input: 'Leaders like Dejah Powell, who started an organization to bring health and wellness resources to communities on the https://t.co/bHnnttq0bZ',
        output: {obama: 1}
    }, {
        input: 'As the year winds down and we look toward 2019, Im asking you to make a commitment: find something you want to cha https://t.co/wg2DdYAJWs',
        output: {obama: 1}
    }, {
        input: 'As 2018 draws to a close, Im continuing the tradition of sharing my year-end lists. It gives me a moment to reflec https://t.co/rSD2tphr3l',
        output: {obama: 1}
    }, {
        input: 'Enjoy the holiday season with the ones you love. Michelle and I wish you a very Merry Christmas! https://t.co/LKLqlYfFUw',
        output: {obama: 1}
    }, {
        input: 'Theres no better time than the holidays to give back to your community. Yesterday I got to do just that at https://t.co/gGLJomf3ua',
        output: {obama: 1}
    }, {
        input: 'Merry Christmas and happy holidays to the extraordinary kids, families, and staff at Childrens National. And thank https://t.co/zhMp8GSpfO',
        output: {obama: 1}
    }, {
        input: 'Today is the last day of open enrollment. That means its the deadline to make sure you and the people you love hav https://t.co/MMZXvDdvaU',
        output: {obama: 1}
    }, {
        input: 'Joe is right. Head to https://t.co/SS87NTsgJt before tomorrows deadline. And nice bracelet, by the way. https://t.co/NFy3LxZe3f',
        output: {obama: 1}
    }, {
        input: 'As Bobby Kennedy taught us, the thing about hope is that it travels through space *and* time, first splashing again https://t.co/EsieA1Ry5F',
        output: {obama: 1}
    }, {
        input: 'RT @ObamaFoundation: The Cares Family reaches across generational divides to reduce loneliness in the U.K. Hear more from Alex Smith, found',
        output: {obama: 1}
    }, {
        input: 'No jump shots. No ferns. No memes. Not this time. Im going to give it to you straight: If you need health insuranc https://t.co/rThqk0VTXA',
        output: {obama: 1}
    }, {
        input: 'RT @GetUSCovered: Just ONE WEEK LEFT to #GetCovered for 2019. Most folks can find coverage for $75 or less per month. Head over to https:/',
        output: {obama: 1}
    }, {
        input: 'Happy Hanukkah! Over these eight nights, we draw inspiration from light that can overpower any darkness, and recomm https://t.co/IxuDfVzDLf',
        output: {obama: 1}
    }, {
        input: 'America has lost a patriot and humble servant in George Herbert Walker Bush. While our hearts are heavy today, they https://t.co/2Gn7sGTG90',
        output: {obama: 1}
    }, {
        input: 'I am grateful for the next generation of leaders -- the young people who are tolerant, creative, idealistic and doi https://t.co/Mnydz2BMZX',
        output: {obama: 1}
    }, {
        input: 'Thanks to the Chicago @FoodDepository team for all you do and to the volunteers who are doing great work and let me https://t.co/noTTWJDrlv',
        output: {obama: 1}
    }, {
        input: 'RT @ObamaFoundation: The Obama Presidential Center represents a historic opportunity to build a world-class museum and public gathering spa',
        output: {obama: 1}
    }, {
        input: 'When someone shares their story, we see the world through their eyes. Im looking forward to hearing a few from lea https://t.co/4ZM6S85yuU',
        output: {obama: 1}
    }, {
        input: 'Our future depends on all our young people, including our boys and young men of color, being able to achieve their https://t.co/TaRXBwtm9v',
        output: {obama: 1}
    }, {
        input: 'Of course, @MichelleObamas my wife, so Im a little biased here. But she also happens to be brilliant, funny, wise https://t.co/bhzH5QSA0x',
        output: {obama: 1}
    }, {
        input: 'Michelle and I are heartbroken for everybody whos lost so much in California, and grateful for the heroism of the https://t.co/4sNwd1l283',
        output: {obama: 1}
    }, {
        input: 'To all our veterans and your families: thank you. There\'s no tribute that can truly match the magnitude of your ser https://t.co/ypSU5ocwN2',
        output: {obama: 1}
    }, {
        input: 'Congratulations to everybody who showed up and participated in our democracy in record numbers yesterday. The chang https://t.co/KtOmsuUdHh',
        output: {obama: 1}
    }, {
        input: 'Today is the day. Today, its your turn to raise your voice to change the course of this country for the better. So https://t.co/PHQApoHdgr',
        output: {obama: 1}
    }, {
        input: 'If you take that power and vote, something powerful happens. Change happens. Hope happens. And with each new step w https://t.co/QwBCsv2WKS',
        output: {obama: 1}
    }, {
        input: 'When you vote, you have the power to make it easier for a student to afford college, and harder for a disturbed per https://t.co/IqykmSWOMo',
        output: {obama: 1}
    }, {
        input: 'When you vote, you have the power to protect voting rights. To make sure our criminal justice system treats everyon https://t.co/KmjBq77g5M',
        output: {obama: 1}
    }, {
        input: 'When we\'ve been at such crossroads before, Americans have made the right choice. Not because we sat back and waited https://t.co/Rrxma5NCX1',
        output: {obama: 1}
    }, {
        input: 'Tomorrows elections might be the most important of our lifetimes. The health care of millions is on the ballot. Ma https://t.co/9Vw2V9sSLv',
        output: {obama: 1}
    }, {
        input: 'Speaking of preexisting conditions, open enrollment starts today. If you or someone you know needs health care, vis https://t.co/VKJHRTRNY2',
        output: {obama: 1}
    }, {
        input: 'Elections matter. You have the power to protect a familys health care. Make a plan, grab some friends, and vote: https://t.co/rY8Ip1km9p',
        output: {obama: 1}
    }, {
        input: 'While we\'re talking about preexisting conditions, the ACA is the law that finally protected your coverage for preex https://t.co/tixOSz0DNP',
        output: {obama: 1}
    }, {
        input: 'Not sure who and what you can vote for? Head over to look up your state, learn who\'s run https://t.co/ATph6fzt75',
        output: {obama: 1}
    }, {
        input: 'Your vote can decide the health care of millions. Your voice can determine the character of our country. You have p https://t.co/ou6DL1g1b6',
        output: {obama: 1}
    }, {
        input: 'We grieve for the Americans murdered in Pittsburgh. All of us have to fight the rise of anti-Semitism and hateful r https://t.co/X9SED9pg8X',
        output: {obama: 1}
    }, {
        input: 'The last presidential election turned on fewer than 100,000 votes in three states. More people go to Coachella. The https://t.co/JtJlYxwGbf',
        output: {obama: 1}
    }, {
        input: 'America is always at our best when we look out for each other. Please do what you can to help people recover and re https://t.co/p53FdzYe97',
        output: {obama: 1}
    }, {
        input: 'Im so proud of the work @MichelleObama has done over the years to ensure adolescent girls have access to education https://t.co/oMXzcgI4l2',
        output: {obama: 1}
    }, {
        input: 'Congratulations to Drew Brees on the all time passing record. Always a class act.',
        output: {obama: 1}
    }, {
        input: 'Happy Anniversary, @MichelleObama. For 26 years, youve been an extraordinary partner, someone who can always make https://t.co/csomlGbL1B',
        output: {obama: 1}
    }, {
        input: 'Today, Im proud to endorse even more Democratic candidates who arent just running against something, but for some https://t.co/oqewS0Y8vZ',
        output: {obama: 1}
    }, {
        input: 'From civil servants to organizers, the young people I met in Amsterdam today are doing the hard work of change. And https://t.co/mlAp2SRZlP',
        output: {obama: 1}
    }, {
        input: 'The antidote to government by a powerful few is government by the organized, energized many. This National Voter Re https://t.co/3W5pfaUdKd',
        output: {obama: 1}
    }, {
        input: 'The first class of Obama Fellows is full of leaders like Keithhardworking, innovative, and dedicated to partnering https://t.co/nOd6FzH23n',
        output: {obama: 1}
    }, {
        input: 'We will always remember everyone we lost on 9/11, thank the first responders who keep us safe, and honor all who de https://t.co/ku270JQnwl',
        output: {obama: 1}
    }, {
        input: 'RT @nowthisnews: If you still don\'t think the midterms will affect you, @BarackObama is back to spell out just how important they are https',
        output: {obama: 1}
    }, {
        input: 'Today Im at the University of Illinois to deliver a simple message to young people all over the country: You need https://t.co/brM6Vd7j2R',
        output: {obama: 1}
    }, {
        input: 'Yesterday I met with high school students on Chicagos Southwest side who spent the summer learning to code some pr https://t.co/hY9B0mSQB9',
        output: {obama: 1}
    }, {
        input: 'Congratulations to Hawaii for winning the Little League World Series! You make America very proud. https://t.co/8Un7LPXgX1',
        output: {obama: 1}
    }, {
        input: 'Our statement on the passing of Senator John McCain: https://t.co/3GBjNYxoj5',
        output: {obama: 1}
    }, {
        input: 'Aretha helped define the American experience. In her voice, we could feel our history, all of it and in every shade https://t.co/hUcQpbdydq',
        output: {obama: 1}
    }, {
        input: 'Bobby Kennedy was one of my heroes. He was someone who showed us the power of acting on our ideals, the idea that a https://t.co/mMVBHEBzsv',
        output: {obama: 1}
    }, {
        input: 'Im confident that, together, theyll strengthen this country we love by restoring opportunity, repairing our allia https://t.co/CgiImgqCDD',
        output: {obama: 1}
    }, {
        input: 'Today Im proud to endorse such a wide and impressive array of Democratic candidates  leaders as diverse, patrioti https://t.co/i0MECnqfJr',
        output: {obama: 1}
    }, {
        input: 'Mandela Day is about taking action to change the world for the better. In these young people, I see Madiba\'s example https://t.co/iT1v545C2L',
        output: {obama: 1}
    }, {
        input: 'This week, Im traveling to Africa for the first time since I left office  a continent of wonderful diversity, thr https://t.co/UDROtalUlX',
        output: {obama: 1}
    }, {
        input: 'RT @MichelleObama: Sometimes truth transcends party. https://t.co/TeFM7NmNzU',
        output: {obama: 1}
    }, {
        input: 'Congratulations to the @Capitals! This @NHLBlackhawks fan knows what its like to lift that cup  and Im happy for https://t.co/9LG5lxLQC7',
        output: {obama: 1}
    }, {
        input: 'Low plastic stool, cheap but delicious noodles, cold Hanoi beer. This is how Ill remember Tony. He taught us abo https://t.co/l79o6OyNAT',
        output: {obama: 1}
    }, {
        input: 'This National Gun Violence Awareness Day, show your commitment to keeping our kids safe from gun violence. Then, fo https://t.co/Nr5qxK8sgu',
        output: {obama: 1}
    }, {
        input: 'We can never truly repay the debt we owe our fallen heroes. But we can remember them, honor their sacrifice, and af https://t.co/iHLhFdhoZQ',
        output: {obama: 1}
    }, {
        input: 'This Center is for the leaders of tomorrow who are ready to step up and build the world as it should be. Michelle a https://t.co/XN7anzCTst',
        output: {obama: 1}
    }, {
        input: 'Happy Mother s Day to every mom out there, especially the remarkable moms in my life, @MichelleObama and my mother-  https://t.co/QsZPuZ2OoJ',
        output: {obama: 1}
    }, {
        input: 'There are few issues more important to the security of the US than the potential spread of nuclear weapons or the p  https://t.co/ym4YTPpbWl',
        output: {obama: 1}
    }, {
        input: 'RT @MichelleObama: Happy #CollegeSigningDay! So excited to be in Philly to celebrate all the young people making the commitment to higher e ',
        output: {obama: 1}
    }, {
        input: 'These talented young people will create a better future not just in Africa, but around the world. I can t wait to s  https://t.co/0YgQxnOrz9',
        output: {obama: 1}
    }, {
        input: 'Our statement on the passing of Former First Lady Barbara Bush: https://t.co/MhTVYCL9Nj',
        output: {obama: 1}
    }, {
        input: 'RT @ObamaFoundation: We just announced the inaugural class of #ObamaFellows. These 20 civic leaders have carried out inspiring work around ',
        output: {obama: 1}
    }, {
        input: 'RT @ObamaFoundation: This week 50 years since Dr. Martin Luther King, Jr. was killed @BarackObama and @RepJohnLewis sat down with a group o',
        output: {obama: 1}
    }, {
        input: 'Incredible to have a Chicago team in the Final Four. I ll take that over an intact bracket any day! Congratulations  https://t.co/V9IbaSlbIp',
        output: {obama: 1}
    }, {
        input: 'Michelle and I are so inspired by all the young people who made today s marches happen. Keep at it. You re leading  https://t.co/d0DTg594Cs',
        output: {obama: 1}
    }, {
        input: 'Our most important task as a nation is to make sure all our young people can achieve their dreams. We ve started th  https://t.co/gNw9ks6pMY',
        output: {obama: 1}
    }, {
        input: 'In Singapore with young people who are advocating for education, empowering young women, and getting involved all o  https://t.co/V5uHCeMWUa',
        output: {obama: 1}
    }, {
        input: '41: I like the competition. And the loyalty to the home team. - 44 https://t.co/XG3ChMtW0M',
        output: {obama: 1}
    }, {
        input: 'Congrats to @LoyolaChicago and Sister Jean for a last-second upset - I had faith in my pick!',
        output: {obama: 1}
    }, {
        input: 'Just because I have more time to watch games doesn t mean my picks will be better, but here are my brackets this ye https://t.co/gWpZwlceV3',
        output: {obama: 1}
    }, {
        input: 'Have fun out there among the stars. https://t.co/S285MTwGtp',
        output: {obama: 1}
    }, {
        input: 'Four years ago, @MichelleObama and I had the privilege to host Lt. Cmdr. Dan Cnossen and his fellow Paralympians an  https://t.co/kneWyU2Tu1',
        output: {obama: 1}
    }, {
        input: 'I got my start holding community meetings in Chicago, so it was fun to be home for one tonight. Michelle and I want  https://t.co/1ammpZayJx',
        output: {obama: 1}
    }, {
        input: 'Young people have helped lead all our great movements. How inspiring to see it again in so many smart, fearless stu  https://t.co/wXO3wBtJ8V',
        output: {obama: 1}
    }, {
        input: 'Billy Graham was a humble servant who prayed for so many - and who, with wisdom and grace, gave hope and guidance t  https://t.co/V8WtgIRPEB',
        output: {obama: 1}
    }, {
        input: 'We are grieving with Parkland. But we are not powerless. Caring for our kids is our first job. And until we can hon  https://t.co/LWGSkzRapH',
        output: {obama: 1}
    }, {
        input: 'Happy Valentines Day, @MichelleObama. You make every day and every place better. https://t.co/aWvyytR7Mm',
        output: {obama: 1}
    }, {
        input: 'RT @MichelleObama: Happy #ValentinesDay to my one and only, @BarackObama. To celebrate the occasion, Im dedicating a little Valentines Da',
        output: {obama: 1}
    }, {
        input: 'Dr. King was 26 when the Montgomery bus boycott began. He started small, rallying others who believed their efforts https://t.co/N0zwBg7gTi',
        output: {obama: 1}
    }, {
        input: 'All across America people chose to get involved, get engaged and stand up. Each of us can make a difference, and al https://t.co/zxpKVnNeHZ',
        output: {obama: 1}
    }, {
        input: 'Ten-year-old Jahkil Jackson is on a mission to help homeless people in Chicago. He created kits full of socks, toil https://t.co/7mNk6dmnyC',
        output: {obama: 1}
    }, {
        input: 'Chris Long gave his paychecks from the first six games of the NFL season to fund scholarships in Charlottesville, V https://t.co/KxUk5Wle6h',
        output: {obama: 1}
    }, {
        input: 'Kat Creech, a wedding planner in Houston, turned a postponed wedding into a volunteer opportunity for Hurricane Har https://t.co/MCXiSuAVJN',
        output: {obama: 1}
    }, {
        input: 'As we count down to the new year, we get to reflect and prepare for whats ahead. For all the bad news that seemed https://t.co/WaUHkVww2g',
        output: {obama: 1}
    }, {
        input: 'RT @MBK_Alliance: I am my Brothers Keeper. \nWatch our new PSA with @BarackObama, @StephenCurry30 &amp; @chancetherapper, then take action to s',
        output: {obama: 1}
    }, {
        input: 'On behalf of the Obama family, Merry Christmas! We wish you joy and peace this holiday season. https://t.co/CNFUZrhrBj',
        output: {obama: 1}
    }, {
        input: 'Theres no better time than the holiday season to reach out and give back to our communities. Great to hear from yo https://t.co/gp5dCy9oN2',
        output: {obama: 1}
    }, {
        input: 'Happy Hanukkah, everybody, from the Obama family to yours. Chag Sameach!',
        output: {obama: 1}
    }, {
        input: 'Just got off a call to thank folks who are working hard to help more Americans across the country sign up for healt https://t.co/A9QvCySWJ8',
        output: {obama: 1}
    }, {
        input: 'RT @ObamaFoundation: Watch: We hosted a Town Hall in New Delhi with @BarackObama and young leaders about how to drive change and make an im',
        output: {obama: 1}
    }, {
        input: 'Michelle and I are delighted to congratulate Prince Harry and Meghan Markle on their engagement. We wish you a life https://t.co/KC9nmjZPuX',
        output: {obama: 1}
    }, {
        input: 'From the Obama family to yours, we wish you a Happy Thanksgiving full of joy and gratitude. https://t.co/xAvSQwjQkz',
        output: {obama: 1}
    }, {
        input: 'ME:  Joe, about halfway through the speech, Im gonna wish you a happy birth--\nBIDEN:  ITS MY BIRTHDAY!\nME:  Joe. https://t.co/5qLUsDoaMi',
        output: {obama: 1}
    }, {
        input: 'RT @ObamaFoundation: Today, we honor those who have honored our country with its highest form of service. https://t.co/IbJNCwIofL https://t',
        output: {obama: 1}
    }, {
        input: 'This is what happens when the people vote. Congrats @RalphNortham and @PhilMurphyNJ . And congratulations to all th https://t.co/ZvUKZIDGAj',
        output: {obama: 1}
    }, {
        input: 'Every election matters - those who show up determine our future. Go vote tomorrow! https://t.co/j1wh8hLamw',
        output: {obama: 1}
    }, {
        input: 'May God also grant all of us the wisdom to ask what concrete steps we can take to reduce the violence and weaponry in our midst.',
        output: {obama: 1}
    }, {
        input: 'We grieve with all the families in Sutherland Springs harmed by this act of hatred, and well stand with the survivors as they recover...',
        output: {obama: 1}
    }, {
        input: 'Starting today, you can sign up for 2018 health coverage. Head on over to https://t.co/ob1Ynoesod and find a plan t https://t.co/6eN1Y5TQGV',
        output: {obama: 1}
    }, {
        input: 'Michelle and I are thinking of the victims of today\'s attack in NYC and everyone who keeps us safe. New Yorkers are as tough as they come.',
        output: {obama: 1}
    }, {
        input: 'Hello, #ObamaSummit! Thrilled to host civic leaders in Chicago from all over the world. Follow along at @ObamaFoundation.',
        output: {obama: 1}
    }, {
        input: 'Ill let you and @ladygaga handle the singing, and well handle the donations. Theres still time to give: https://t.co/0NnaR3bozh',
        output: {obama: 1}
    }, {
        input: 'Tonight the ex-Presidents are getting together in Texas to support all our fellow Americans rebuilding from this ye https://t.co/nFSou6JC6n',
        output: {obama: 1}
    }, {
        input: 'Im grateful to @SenJohnMcCain for his lifetime of service to our country. Congratulations, John, on receiving this years Liberty Medal.',
        output: {obama: 1}
    }, {
        input: 'Michelle &amp; I are praying for the victims in Las Vegas. Our thoughts are with their families &amp; everyone enduring another senseless tragedy.',
        output: {obama: 1}
    }, {
        input: 'Proud to cheer on Team USA at the Invictus Games today with my friend Joe. You represent the best of our country. https://t.co/WBzcltmgqj',
        output: {obama: 1}
    }, {
        input: 'Were expanding our efforts to help Puerto Rico &amp; the USVI, where our fellow Americans need us right now. Join us a https://t.co/gkrp1RwXR4',
        output: {obama: 1}
    }, {
        input: 'Prosecutor, soldier, family man, citizen. Beau made us want to be better. What a legacy to leave. What a testament https://t.co/XDtkLu32wd',
        output: {obama: 1}
    }, {
        input: 'RT @gatesfoundation: President @BarackObama addresses #Goalkeepers17 starting at 12:40 PM. Tune in here: https://t.co/XmHBErSHYw',
        output: {obama: 1}
    }, {
        input: 'Thinking about our neighbors in Mexico and all our Mexican-American friends tonight. Cuidense mucho y un fuerte abrazo para todos.',
        output: {obama: 1}
    }, {
        input: 'Coding is important  and fun. @CSforAll, thanks for your work to make sure every kid can compete in a high-tech, g https://t.co/xwlnvxsjKb',
        output: {obama: 1}
    }, {
        input: 'Michelle and I want the @ObamaFoundation to inspire and empower people to change the world. Here\'s how we\'re gettin https://t.co/xY0UhBSvqp',
        output: {obama: 1}
    }, {
        input: 'We remember everyone we lost on 9/11 and honor all who defend our country and our ideals. No act of terror will ever change who we are.',
        output: {obama: 1}
    }, {
        input: 'RT @GeorgeHWBush: Across the U.S., Americans have answered the call to help with hurricane recovery. Praying for all Floridians. #Irma http',
        output: {obama: 1}
    }, {
        input: 'Proud of these McKinley Tech studentsinspiring young minds that make me hopeful about our future. https://t.co/nqYC1mjjTB',
        output: {obama: 1}
    }, {
        input: 'Americans always answer the call. https://t.co/SV1jixOExu https://t.co/ktEvL6s89d',
        output: {obama: 1}
    }, {
        input: 'To target hopeful young strivers who grew up here is wrong, because theyve done nothing wrong. My statement: https://t.co/TCxZdld7L4',
        output: {obama: 1}
    }, {
        input: 'Thank you to all the first responders and people helping each other out. That\'s what we do as Americans. Here\'s one https://t.co/I3RHWyZe31',
        output: {obama: 1}
    }, {
        input: 'Michelle and I are thinking of the victims and their families in Barcelona. Americans will always stand with our Spanish friends. Un abrazo.',
        output: {obama: 1}
    }, {
        input: '...For love comes more naturally to the human heart than its opposite."" - Nelson Mandela',
        output: {obama: 1}
    }, {
        input: 'People must learn to hate, and if they can learn to hate, they can be taught to love...',
        output: {obama: 1}
    }, {
        input: 'No one is born hating another person because of the color of his skin or his background or his religion..."" https://t.co/InZ58zkoAm',
        output: {obama: 1}
    }, {
        input: 'John McCain is an American hero &amp; one of the bravest fighters I\'ve ever known. Cancer doesn\'t know what it\'s up against. Give it hell, John.',
        output: {obama: 1}
    }, {
        input: 'Health care has always been about something bigger than politics: it\'s about the character of our country. https://t.co/UqLO14Hef7',
        output: {obama: 1}
    }, {
        input: 'Of all that Ive done in my life, Im most proud to be Sasha and Malias dad. To all those lucky enough to be a dad https://t.co/XSqMhcSuvR',
        output: {obama: 1}
    }, {
        input: 'On this National Gun Violence Awareness Day, let your voice be heard and show your commitment to reducing gun viole https://t.co/S7dth6Ywb0',
        output: {obama: 1}
    }, {
        input: 'Forever grateful for the service and sacrifice of all who fought to protect our freedoms and defend this country we https://t.co/BwRS0onlOL',
        output: {obama: 1}
    }, {
        input: 'Good to see my friend Prince Harry in London to discuss the work of our foundations &amp; offer condolences to victims https://t.co/f1U8It8AmE',
        output: {obama: 1}
    }, {
        input: 'Through faith, love, and resolve the character of the people of Manchester has shown itself.  Our thoughts &amp; prayer https://t.co/xyMer891Zo',
        output: {obama: 1}
    }, {
        input: 'Our hearts go out to those killed and wounded in Manchester. Americans will always stand shoulder to shoulder with the people of the UK.',
        output: {obama: 1}
    }, {
        input: 'Excited to hear from Sierra, Imani, Filiz, and Benedikt who are making a difference at home and abroad. See you in https://t.co/bF1kB1GvxC',
        output: {obama: 1}
    }, {
        input: 'Happy Mothers Day to my love and partner on this journey @MichelleObama, and to all the wonderful, hardworking mothers out there.',
        output: {obama: 1}
    }, {
        input: 'Were rolling up our sleeves again, back where it all started. Join us at https://t.co/GYkEOK8EuT. https://t.co/UlyvNrQvZR',
        output: {obama: 1}
    }, {
        input: 'Well said, Jimmy. Thats exactly why we fought so hard for the ACA, and why we need to protect it for kids like Bil https://t.co/jB3LXT94Ok',
        output: {obama: 1}
    }, {
        input: 'RT @ObamaFoundation: Its a beautiful day on the South Side. https://t.co/PtoaFbww0s',
        output: {obama: 1}
    }, {
        input: 'My heart goes out to the victims and their families in London. No act of terror can shake the strength and resilience of our British ally.',
        output: {obama: 1}
    }, {
        input: 'Chuck Berry rolled over everyone who came before him  and turned up everyone who came after.  We ll miss you, Chuck.  Be good.',
        output: {obama: 1}
    }, {
        input: 'On International Womens Day, @MichelleObama and I are inspired by all of you who embrace your power to drive chang https://t.co/Er9mIQlmgr',
        output: {obama: 1}
    }, {
        input: 'RT @ObamaFoundation: Courage comes in many forms. Who in your local community or neighborhood leads by example? #ProfileInCourage https://t',
        output: {obama: 1}
    }, {
        input: 'Humbled to be recognized by a family with a legacy of service. Who\'s your #ProfileInCourage? Tell me about them: https://t.co/25Ohhab8Xn',
        output: {obama: 1}
    }, {
        input: 'We asked. You answered. https://t.co/mAJvko6VqR',
        output: {obama: 1}
    }, {
        input: 'Happy Valentine s Day, @michelleobama! Almost 28 years with you, but it always feels new. https://t.co/O0UhJWoqGN',
        output: {obama: 1}
    }, {
        input: 'I read letters like these every single day. It was one of the best parts of the job   hearing from you. https://t.co/so1luBcszV',
        output: {obama: 1}
    }, {
        input: 'RT @ObamaFoundation: Add your voice: https://t.co/mA9MSHmi7o https://t.co/Uf7oEvkZF3',
        output: {obama: 1}
    }, {
        input: 'In the meantime, I want to hear what you\'re thinking about the road ahead. So share your ideas with me here: https://t.co/GYkEOK8EuT',
        output: {obama: 1}
    }, {
        input: 'Hi everybody! Back to the original handle. Is this thing still on? Michelle and I are off on a quick vacation, then we ll get back to work.',
        output: {obama: 1}
    }, {
        input: 'Tonight, President Obama reflects on eight years of progress. Watch the #FarewellAddress at 9 pm ET: https://t.co/ZnwTsg155B #ObamaFarewell',
        output: {obama: 1}
    }, {
        input: 'RT @OFA: ""Thanks to the Affordable Care Act, your coverage is better today than it was before.""\n\nWatch the weekly address: https://t.co/Pfk ',
        output: {obama: 1}
    }, {
        input: 'In the weekly address, President Obama discusses what #Obamacare has done to improve health care. https://t.co/VdQlyrSZhx',
        output: {obama: 1}
    }, {
        input: 'Let\'s keep working to keep our economy on a better, stronger course. https://t.co/bV2BVjyj7a',
        output: {obama: 1}
    }, {
        input: 'The landmark #ParisAgreement enters into force today we must keep up the momentum to #ActOnClimate. https://t.co/Cyw5Udaoro',
        output: {obama: 1}
    }, {
        input: 'The economy added 161,000 jobs in October, and wages are up 2.8 percent over the past year. https://t.co/pJxjgLnjCt #JobsReport',
        output: {obama: 1}
    }, {
        input: 'There are a lot of plans out there. Check your options and lock in the one that\'s best for you: https://t.co/buFY9ozDz4 #GetCovered',
        output: {obama: 1}
    }, {
        input: 'The positive impact of #Obamacare is undeniable, but there\'s one big factor holding many states back: https://t.co/7XebIdRX34',
        output: {obama: 1}
    }, {
        input: 'RT @POTUS: It happened: @Cubs win World Series. That\'s change even this South Sider can believe in. Want to come to the White House before ',
        output: {obama: 1}
    }, {
        input: 'Tens of millions of Americans have benefited from #Obamacare. Make sure you\'re one of them. #GetCovered https://t.co/e1KoXcPtpU',
        output: {obama: 1}
    }, {
        input: 'Thanks to #Obamacare, quality health care is available to everyone. The marketplace is now open make sure you and y  https://t.co/89gl6pzMGD',
        output: {obama: 1}
    }, {
        input: 'RT @lacasablanca: La tpica Latina tarda 22 meses en ganar lo que un hombre blanco gana en 12 meses. Tenemos que cerrar la brecha salarial. ',
        output: {obama: 1}
    }, {
        input: 'RT @WhiteHouse: On #LatinaEqualPay Day, we mark the work that remains to ensure that all Americans receive equal pay for equal work. https: ',
        output: {obama: 1}
    }, {
        input: 'Community organizing never goes out of style. Shop now: https://t.co/LXEbQdKLLT https://t.co/E56ofoU36i',
        output: {obama: 1}
    }, {
        input: 'With #Obamacare, people can focus on treatment for pre-existing conditions without the fear of coverage being cappe  https://t.co/jvdFY87XBu',
        output: {obama: 1}
    }, {
        input: 'The Obamacare marketplace is now open. If you\'re uninsured, now is the time to shop for a plan and #GetCovered.  https://t.co/Spjlga4eTT',
        output: {obama: 1}
    }, {
        input: 'RT @FLOTUS: Open enrollment starts tomorrow! Check out your options at https://t.co/dg57hwz5of and share your #GetCovered story. https://t. ',
        output: {obama: 1}
    }, {
        input: 'Lions and Tiggers and bears! Oh my! #HappyHalloween https://t.co/iU4fjBhi0Y',
        output: {obama: 1}
    }, {
        input: 'Usted y su familia merecen la tranquilidad de saber que estn cubiertos. El mercado de seguros abre maana. https://t.co/9iRCkLRGZD',
        output: {obama: 1}
    }, {
        input: 'Speak up in support of quality, affordable health care for all. https://t.co/rGsSguMxvj',
        output: {obama: 1}
    }, {
        input: 'Theres nothing to be scared of when searching for health insurance. Three in four people can #GetCovered for less  https://t.co/BUmnRO9B3E',
        output: {obama: 1}
    }, {
        input: 'Open enrollment begins tomorrow make sure you and your loved ones #GetCovered. https://t.co/2aak7Bt0s3',
        output: {obama: 1}
    }, {
        input: 'RT @OFA: Witch plan is best for you? Thanks to Obamacare, even pre-existing conditions cant stop you from comparing your options. #GetCove ',
        output: {obama: 1}
    }, {
        input: 'Senate leaders\' obstruction of our Supreme Court nomination process is unacceptable. Say so: https://t.co/t3pYMO8Fp0 #DoYourJob',
        output: {obama: 1}
    }, {
        input: 'Senate leaders should put the common good above politics the integrity of our nation\'s highest court depends on it.  https://t.co/iRVCEl1pzf',
        output: {obama: 1}
    }, {
        input: 'Dont ghost on your health and well-being your chance to #GetCovered is coming up. Open enrollment starts November  https://t.co/qwNLazuPiz',
        output: {obama: 1}
    }, {
        input: 'Climate change is happening now. Denial is dangerous. https://t.co/0Nlf8Fst4u',
        output: {obama: 1}
    }, {
        input: 'If youre willing to work hard and play by the rules, you should be able to get ahead. https://t.co/394hdJttgO',
        output: {obama: 1}
    }, {
        input: 'President Obama lays out just a few of the ways in which #Obamacare has helped millions of Americans. https://t.co/qeqHRLz0ID',
        output: {obama: 1}
    }, {
        input: 'New report: Renewable energy installations are beating fossil fuel installations for the first time. https://t.co/MMhIdu4jzt #ActOnClimate',
        output: {obama: 1}
    }, {
        input: 'Obamacare has helped millions of Americans gain the peace of mind that comes with coverage. Show your support: https://t.co/NfrG7DHL5C',
        output: {obama: 1}
    }, {
        input: 'This is what happens when we focus on building an economy that works for everyone, not just those at the top. https://t.co/op3Z74rPeI',
        output: {obama: 1}
    }, {
        input: 'No ones too wrapped up in pre-existing conditions to #GetCovered. \nThanks to Obamacare, you can find a plan that m  https://t.co/C7H9TZdxeU',
        output: {obama: 1}
    }, {
        input: 'Help protect the progress we\'ve made in helping millions of Americans get covered. Add your name now: https://t.co/HQSZKPl1eH',
        output: {obama: 1}
    }, {
        input: 'DYK: Most people can find a plan for less than $75 per month. Open enrollment starts on November 1. #GetCovered https://t.co/9RGG5Pr4mb',
        output: {obama: 1}
    }, {
        input: 'Women, the sick, survivors they all deserve fair treatment in our health care system. #Obamacare https://t.co/G948HN7pzV',
        output: {obama: 1}
    }, {
        input: 'Dont get tripped up by misinformation. Join the @OFA Truth Team today: https://t.co/wJZj1QCxXm https://t.co/vwwDgFHq6A',
        output: {obama: 1}
    }, {
        input: 'RT @SecBurwell: Most people shopping on @HealthCareGov will again find plans with premiums of less than $75/month, thanks to financial assi ',
        output: {obama: 1}
    }, {
        input: 'Be proud of the progress we\'ve made together wear the mark of this movement. https://t.co/fYf2O9WAwG https://t.co/1Z4yJmYh4E',
        output: {obama: 1}
    }, {
        input: 'Strong policies that help working families get ahead are good for our economy. https://t.co/QRRhibjZCl',
        output: {obama: 1}
    }, {
        input: 'The four-week average of jobless claims fell to the lowest level since 1973 a sign of a healthy labor market. https://t.co/Lv7DnRM2DY',
        output: {obama: 1}
    }, {
        input: 'Since 2010, America\'s uninsured rate has been cut in half. Help build on that progress join Team #Obamacare today: https://t.co/MhIICuE17A',
        output: {obama: 1}
    }, {
        input: 'RT @OFA: It\'s working.\nIt\'s saving lives.\nAnd we\'re not going back.\nRetweet to show your support. https://t.co/YOBeMMSYP8',
        output: {obama: 1}
    }, {
        input: 'Health care is a right, not a privilege and #Obamacare works to protect that right for millions of Americans. https://t.co/B7fO8rhggW',
        output: {obama: 1}
    }, {
        input: 'Don\'t get tripped up by misinformation. Join the @OFA Truth Team today: https://t.co/09BpA6F9Ne https://t.co/Nxgp87o4iq',
        output: {obama: 1}
    }, {
        input: 'Being able to stay on a parent\'s plan enables millions of young adults to make choices about their future with the  https://t.co/1lSzxCHZVf',
        output: {obama: 1}
    }, {
        input: 'Because of Obamacare, another 20 million Americans now know the financial security of health insurance."" https://t.co/eNd6J8bMxm',
        output: {obama: 1}
    }, {
        input: 'Stand up for the law that\'s helped 20 million more Americans gain health coverage. Join Team @Obamacare today: https://t.co/XiNXrgnPoF',
        output: {obama: 1}
    }, {
        input: 'There\'s still more work to do, but let\'s celebrate how far we\'ve come. https://t.co/kUVWn68kJw',
        output: {obama: 1}
    }, {
        input: 'LIVE: President Obama is in Miami talking about the progress made possible by the Affordable Care Act. https://t.co/7FsQXut07O',
        output: {obama: 1}
    }, {
        input: 'RT @WhiteHouse: Each day, @POTUS reads 10 letters from Americans. Today, we\'re sharing some of the letters written about #ACA: https://t.co ',
        output: {obama: 1}
    }, {
        input: 'Tune in at 1:55 p.m. ET to watch President Obama speak about the successes of the Affordable Care Act. https://t.co/7FsQXut07O',
        output: {obama: 1}
    }, {
        input: 'There\'s a lot of misinformation floating around. Make sure you\'ve got the facts join the @OFA Truth Team:  https://t.co/SpfRFK5LWq',
        output: {obama: 1}
    }, {
        input: 'From coast to coast, editorial boards are denouncing Senate obstructionism. Take a look: https://t.co/vqDr2bBiVr #DoYourJob',
        output: {obama: 1}
    }, {
        input: 'Our Supreme Court has been short a justice for far too long. #DoYourJob, Senate leaders. https://t.co/yJlejtHjr0',
        output: {obama: 1}
    }, {
        input: 'RT @SecBurwell: Today, 20M more Americans have coverage thanks to the #ACA. Our uninsured rate is the lowest in our nation s history. Lowes ',
        output: {obama: 1}
    }, {
        input: 'The need for a ninth justice is undeniably clear. #DoYourJob https://t.co/L1EBgNbh3Q',
        output: {obama: 1}
    }, {
        input: 'We can\'t afford to let this be the new normal. https://t.co/nJzyfz2Zlw #ActOnClimate',
        output: {obama: 1}
    }, {
        input: 'Denying climate change is dangerous. Join @OFA supporters in standing up for bold action now: https://t.co/JZnvlb080l #ActOnClimate',
        output: {obama: 1}
    }, {
        input: 'Climate change is real, but so is the progress we\'re making to #ActOnClimate. Let\'s keep it up. https://t.co/GOFKXQblGJ',
        output: {obama: 1}
    }, {
        input: 'This is just the latest step forward in the push to #ActOnClimate. https://t.co/UDInkidKkP',
        output: {obama: 1}
    }, {
        input: 'Read why @FLOTUS is fighting to ensure that girls everywhere have access to quality education. https://t.co/xleq3HHSZt #LetGirlsLearn',
        output: {obama: 1}
    }, {
        input: 'Wildfires in the next few decades could be ""unrecognizable"" to previous generations because of climate change: https://t.co/vM3xM6mCf3',
        output: {obama: 1}
    }, {
        input: 'Senate leaders are blocking the Supreme Court nomination for their own political gain don\'t be silent: https://t.co/OMdTVim0TC #DoYourJob',
        output: {obama: 1}
    }, {
        input: 'RT @WhiteHouse: ""Nobody should be priced out of a higher education.""  @POTUS on the progress we\'ve made: https://t.co/4YohVv7Qea https://t. ',
        output: {obama: 1}
    }, {
        input: 'RT @WHLive: Watch as @POTUS speaks on the progress made to ensure every student has the opportunity to realize their potential: https://t.c ',
        output: {obama: 1}
    }, {
        input: 'Senate leaders have recognized Judge Garland\'s impeccable credentials in the past. He deserves a fair hearing and a  https://t.co/w9bPtpSmm7',
        output: {obama: 1}
    }, {
        input: 'We need a fully functional Supreme Court. Editorial boards across the country agree: https://t.co/BkLrNaTtzN #DoYourJob',
        output: {obama: 1}
    }, {
        input: 'The American Bar Association gave Judge Garland its highest rating. Senate leaders: #DoYourJob and fill the #SCOTUS  https://t.co/iTVTqGIUvV',
        output: {obama: 1}
    }, {
        input: 'Denying climate change is dangerous. Join @OFA supporters in standing up for bold action now: https://t.co/7MDQGYgX2u #ActOnClimate',
        output: {obama: 1}
    }, {
        input: 'Cynics, take note: When we #ActOnClimate, we build a stronger future. https://t.co/wHHMdo2ro6',
        output: {obama: 1}
    }, {
        input: 'That s how we will overcome the challenges we face: by unleashing the power of all of us for all of us."" Read more: https://t.co/VxpwLIR4uF',
        output: {obama: 1}
    }, {
        input: 'Check out the most recent editorial boards calling on Senate leaders to vote on Judge Garland: https://t.co/hzuhZYevfo #DoYourJob',
        output: {obama: 1}
    }, {
        input: 'Senate leaders have undercut the functionality of the Supreme Court, and that\'s unacceptable. #DoYourJob https://t.co/5HFXhgTMoP',
        output: {obama: 1}
    }, {
        input: 'Senate leaders\' political games are handicapping the Supreme Court and judgeships across the country. https://t.co/PhKOBKXLmS #DoYourJob',
        output: {obama: 1}
    }, {
        input: 'RT @WIRED: After eight years in office, @POTUS remains optimistic about the world\'s future. His essay as WIRED s guest editor: https://t.co ',
        output: {obama: 1}
    }, {
        input: 'LIVE: President Obama is speaking at a reception celebrating #HispanicHeritageMonth. https://t.co/FK0ytbKw1q',
        output: {obama: 1}
    }, {
        input: 'RT @WhiteHouse: In honor of #HispanicHeritageMonth, we celebrate the progress that Hispanic Americans have made under @POTUS: https://t.co/ ',
        output: {obama: 1}
    }, {
        input: 'Support the bold steps we\'re taking against climate change. Say you\'re ready to #ActOnClimate: https://t.co/EtwjaKgYFW',
        output: {obama: 1}
    }, {
        input: 'Last week, more than 190 countries reached a landmark deal to reduce carbon pollution from aviation. https://t.co/LRYkXVw3rO #ActOnClimate',
        output: {obama: 1}
    }, {
        input: 'Let\'s leave our children and grandchildren a planet that\'s healthier than the one we have today. #ActOnClimate https://t.co/mP29bpRdU9',
        output: {obama: 1}
    }, {
        input: 'Climate change\'s effects are devastating. Denying the science behind it does nothing to help. https://t.co/Rww40wwgD9 #ActOnClima',
        output: {obama: 1}
    }, {
        input: 'On behalf of Michelle and our family, G mar Chatimah Tovah.""  President Obama #YomKippur',
        output: {obama: 1}
    }, {
        input: 'LGBT individuals deserve to know their country stands beside them.""  President Obama #NationalComingOutDay https://t.co/op7nBzbaod',
        output: {obama: 1}
    }, {
        input: 'The Supreme Court must remain above politics. Judge Garland needs a hearing and a vote. #DoYourJob https://t.co/eVSPSIFNpB',
        output: {obama: 1}
    }, {
        input: 'Don\'t stand idly by while Senate leaders continue to block Judge Garland from a fair hearing and vote: https://t.co/TSavHP3mHg #DoYourJob',
        output: {obama: 1}
    }, {
        input: 'Judge Garland is just as qualified now as he was in 1997, Senate leaders. It\'s time to #DoYourJob. https://t.co/j1lEkdMYV6',
        output: {obama: 1}
    }, {
        input: 'Dispel misinformation with facts from the @OFA Truth Team. https://t.co/zjexLUJXAC',
        output: {obama: 1}
    }, {
        input: 'The uninsured rate is the lowest it\'s been in decades, thanks to #Obamacare. Spread the word.  https://t.co/ZkN8HVbn3E',
        output: {obama: 1}
    }, {
        input: 'Deadline tonight help rein in payday lenders that succeed by targeting vulnerable Americans: https://t.co/7OlpH6OFek #StopTheDebtTrap',
        output: {obama: 1}
    }, {
        input: 'The Obama administration and @CFPB are working to protect consumers and #StopTheDebtTrap. https://t.co/UMO01OUkdh',
        output: {obama: 1}
    }, {
        input: 'Our economy is on a better, stronger course. https://t.co/yzB6x7CExJ',
        output: {obama: 1}
    }, {
        input: 'The economic progress we\'ve made is undeniable let\'s keep it up. https://t.co/gAlfaC1hkI',
        output: {obama: 1}
    }, {
        input: 'Check out President Obama\'s essay in @TheEconomist on the unique challenges the American economy faces. https://t.co/jKJNCrQALL',
        output: {obama: 1}
    }, {
        input: 'The economy added 156,000 jobs in September extending the longest streak of total job growth on record.',
        output: {obama: 1}
    }, {
        input: 'ICYMI: Read about the historic #ParisAgreement and what it means for the fight to #ActOnClimate. https://t.co/eMefgFZk53',
        output: {obama: 1}
    }, {
        input: 'RT @WhiteHouse: This is #SXSL: The White House festival of ideas, art, and action. Take a peek inside: https://t.co/BbvvMEaQTF https://t.co ',
        output: {obama: 1}
    }, {
        input: 'The cost of clean energy technology dropped significantly over the last eight years. Get the chart: https://t.co/fuGQMXeRYb #ActOnClimate',
        output: {obama: 1}
    }, {
        input: 'This historic step in the fight to #ActOnClimate came faster than anyone predicted. https://t.co/W2rtcNXkI7',
        output: {obama: 1}
    }, {
        input: 'Today is a historic day in the fight to protect our planet for future generations.  President Obama #ActOnClimate https://t.co/x3dJSCYUcj',
        output: {obama: 1}
    }, {
        input: 'LIVE: President Obama is delivering a statement on the Paris Climate Agreement. https://t.co/mNpQ6QyA91',
        output: {obama: 1}
    }, {
        input: 'Read from @NYTopinion about why filling the Supreme Court vacancy is crucial for our democracy: https://t.co/zuSWzxSaqW #DoYourJob',
        output: {obama: 1}
    }, {
        input: 'Enough is enough. Say it\'s time for Senate leaders to get to work: https://t.co/2M789YIcBk #DoYourJob',
        output: {obama: 1}
    }, {
        input: 'Everybody cares about their kids, their grandkids, and the kind of world we pass on to them.""  President Obama https://t.co/cfxpSBNWIU',
        output: {obama: 1}
    }, {
        input: 'Take what matters with you. https://t.co/E0hXWSu1q3 https://t.co/KJJdkE8DML',
        output: {obama: 1}
    }, {
        input: 'We\'ve come a long way, but the fight for fairness and an economy that works for everyone continues. https://t.co/WWRhZHwYWE',
        output: {obama: 1}
    }, {
        input: 'RT @NatGeoChannel: Tonight @POTUS will be joined by @LeoDiCaprio for a conversation on combating climate change: https://t.co/yCN9K74Jnj #S ',
        output: {obama: 1}
    }, {
        input: 'Side-by-side for 24 years. Here\'s to many more. #HappyAnniversary https://t.co/nh8Xfc7IWU',
        output: {obama: 1}
    }, {
        input: 'RT @WhiteHouse: Today, @POTUS is bringing something new to the South Lawn. Find out why: https://t.co/JvtZFKpQKZ',
        output: {obama: 1}
    }, {
        input: 'Facts matter. Stay informed with the @OFA Truth Team: https://t.co/O8PhOX5jJ3',
        output: {obama: 1}
    }, {
        input: 'RT @OFA: ""Since I took office, another ten million private-sector workers have gained paid sick leave.""  President Obama https://t.co/Ud3vq ',
        output: {obama: 1}
    }, {
        input: 'In the weekly address, President Obama discusses why access to paid leave is so important. https://t.co/q9kDEqYs5u #LeadOnLeave',
        output: {obama: 1}
    }, {
        input: 'Parents shouldn\'t have to choose between a paycheck and taking care of a sick child at home. #LeadOnLeave https://t.co/FF4hTkgOZy',
        output: {obama: 1}
    }, {
        input: 'After thirty years in Congress, Senator, this should not be your proudest accomplishment. https://t.co/FwGAJsBCoo  https://t.co/86F1fhUWsp',
        output: {obama: 1}
    }, {
        input: 'We need a fully functioning Supreme Court. Speak up if you agree it\'s time for a hearing and a vote: https://t.co/d6nmum1Ut7 #DoYourJob',
        output: {obama: 1}
    }, {
        input: 'There has never been a more qualified nominee, Senate leaders. He deserves a fair hearing and a vote. #DoYourJob https://t.co/qtzcY3iwyl',
        output: {obama: 1}
    }, {
        input: 'It\'s the Senate\'s job to fairly consider Supreme Court nominees. Their refusal to do so is unacceptable: https://t.co/s8FdCa0tq6 #DoYourJob',
        output: {obama: 1}
    }, {
        input: 'Everybody gets sick."" Check out what President Obama is doing to extend access to paid sick leave: https://t.co/gOAc2HAkQg #LeadOnLeave',
        output: {obama: 1}
    }, {
        input: 'RT @ErnestMoniz: THIS is what a #CleanEnergy revolution looks like. New report out today https://t.co/o13p5fPNDg #ActOnClimate https://t.',
        output: {obama: 1}
    }, {
        input: 'Never underestimate the strength and resilience of the American economy. https://t.co/OFTN2FlRtq',
        output: {obama: 1}
    }, {
        input: 'RT @Slate: President Obama answers Slate s questions about his administration s new rule extending paid sick leave: https://t.co/8AdEx431QN',
        output: {obama: 1}
    }, {
        input: 'The @OFA Truth Team makes it easy to stay informed. Join today: https://t.co/Q0axQYyJY1',
        output: {obama: 1}
    }, {
        input: 'This is no accident we\'re making a comeback because together, we\'ve fought hard to support American families. https://t.co/LTk7SiTexP',
        output: {obama: 1}
    }, {
        input: 'We\'re better off than we were eight years ago. https://t.co/OwrTM3V78t',
        output: {obama: 1}
    }, {
        input: 'Household incomes are up, and the poverty rate is down across all demographics. https://t.co/cEIdPJuuvR',
        output: {obama: 1}
    }, {
        input: 'As long as Senate leaders keep refusing to do their jobs, @OFA supporters will continue speaking out against their  https://t.co/DkmDKpMhOw',
        output: {obama: 1}
    }, {
        input: 'Senate leaders have blocked Judge Garland\'s hearing for over six months now. Keep pushing: https://t.co/AGrUjJTnST #DoYourJob',
        output: {obama: 1}
    }, {
        input: 'Important, tough conversations require solid facts. Get them from the @OFA Truth Team: https://t.co/5YH9zVeayn https://t.co/dD1EPgaA9W',
        output: {obama: 1}
    }, {
        input: 'These are high praises from the American Bar Association and yet, Senate leaders refuse to even consider Judge Garl  https://t.co/ryPFLZDAhY',
        output: {obama: 1}
    }, {
        input: 'Senate leaders\' unprecedented obstruction of the Supreme Court nomination must end. Your voice matters: https://t.co/yhy8al1FK7 #DoYourJob',
        output: {obama: 1}
    }, {
        input: 'The American people are waiting for Senate leaders to do their jobs. https://t.co/LNqAQpxMle',
        output: {obama: 1}
    }, {
        input: 'Senate leaders have blocked Judge Garland\'s hearing for over six months now. Keep pushing: https://t.co/peV6aCYswa #DoYourJob',
        output: {obama: 1}
    }, {
        input: 'Senate leaders need to work for the good of the American people, not seek out political points. https://t.co/Tdx3xk6gYi',
        output: {obama: 1}
    }, {
        input: 'Watch President Obama and @CEAChair Jason Furman discuss the positive gains the American economy has made. https://t.co/J28Crn3WAP',
        output: {obama: 1}
    }, {
        input: 'Here are 16 broken records we shouldn\'t be proud of. https://t.co/x98dGgEloW',
        output: {obama: 1}
    }, {
        input: 'Stay informed. Stay engaged. Speak up. Join the @OFA Truth Team: https://t.co/GVTL4HrTXw',
        output: {obama: 1}
    }, {
        input: 'Another record broken: 16 months in a row of undeniable, record-breaking heat.\nhttps://t.co/qMAH7nFf5I #ActOnClimate',
        output: {obama: 1}
    }, {
        input: 'We can\'t sit idly by. Climate change is likely to threaten our national securitywe must act now. https://t.co/6QQmpf27W0',
        output: {obama: 1}
    }, {
        input: 'Judge Garland is highly qualified for the bench even some Senate leaders who are now blocking his hearing have agre https://t.co/D5ScOCikVl',
        output: {obama: 1}
    }, {
        input: 'Senate leaders\' blind obstruction of Judge Garland\'s nomination sets a dangerous precedent. We can\'t stand idly by. https://t.co/k76I6DCDRI',
        output: {obama: 1}
    }, {
        input: 'Enough of the shameless partisanship, Senators. #DoYourJob and fill the Supreme Court vacancy. https://t.co/vIQY0bivo4',
        output: {obama: 1}
    }, {
        input: 'Help keep the pressure on Senate leaders to give Judge Garland a fair hearing before their next recess. https://t.co/lkLz4yidaw #DoYourJob',
        output: {obama: 1}
    }, {
        input: 'The American Bar Association gave Judge Garland its highest possible rating. He deserves a hearing and a vote. https://t.co/FUVmGKdZgB',
        output: {obama: 1}
    }, {
        input: 'Their right to inherit a healthy planet is a sacred responsibility."" President Obama #ActOnClimate https://t.co/MYumi6xiIW',
        output: {obama: 1}
    }, {
        input: 'Communities are already experiencing the effects of climate changewe can\'t afford not to act. Take a look: https://t.co/sEjVzKqhsw',
        output: {obama: 1}
    }, {
        input: 'As the #UNGA meets, take a look at the progress we\'ve made thanks to American leadership in the world. https://t.co/b4T0zGccLH',
        output: {obama: 1}
    }, {
        input: 'LIVE: President Obama is speaking at the 71st Session of the United Nations General Assembly. https://t.co/J8cm9QquER #UNGA',
        output: {obama: 1}
    }, {
        input: 'LIVE: President Obama is delivering a statement in New York. https://t.co/MJUr8C84Wd',
        output: {obama: 1}
    }, {
        input: 'President Obama commemorates #HispanicHeritageMonth in an address to @CHCI. https://t.co/oTVX7zOyFD',
        output: {obama: 1}
    }, {
        input: 'Senate leaders are putting politics above their basic responsibility to hold a hearing for Judge Garland. #DoYourJob https://t.co/N7vH2ncwmb',
        output: {obama: 1}
    }, {
        input: 'Six months is long enough, senators. It\'s time to #DoYourJob and give Judge Garland a hearing. https://t.co/A2Yedmhuw6',
        output: {obama: 1}
    }, {
        input: 'RT @OFA: Friendly reminder for Senate leaders on #ConstitutionDay2016: https://t.co/my5zUWxb6j',
        output: {obama: 1}
    }, {
        input: 'The Supreme Court should remain above partisan politics, Senator. https://t.co/DlWud7Rh3K #DoYourJob https://t.co/Wjd96qn9Hf',
        output: {obama: 1}
    }, {
        input: 'Progress starts with a conversation. Make sure you have the facts to get yours started: https://t.co/MxWdiJxz4o https://t.co/Q3iP0Jwg1t',
        output: {obama: 1}
    }, {
        input: 'When we protect our lands and waters, it helps us protect our climate for future generations. #ActOnClimate https://t.co/8tygZI0TDR',
        output: {obama: 1}
    }, {
        input: 'There is no \'election year\' exception in Article II."" Sen. Leahy calls on senators to give Judge Garland a hearing: https://t.co/VjxClMdqUg',
        output: {obama: 1}
    }, {
        input: 'President Obama just made history by protecting nearly 5,000 square miles off the New England coast. https://t.co/i8MAFYU60k #OurOcean',
        output: {obama: 1}
    }, {
        input: 'LIVE: President Obama is speaking at the 2016 Our Ocean Conference. https://t.co/ALK46jhUpw #OurOcean',
        output: {obama: 1}
    }, {
        input: 'RT @WhiteHouse: BREAKING: @POTUS will designate the first-ever marine monument in the Atlantic Ocean:https://t.co/t33G5z2QpK',
        output: {obama: 1}
    }, {
        input: 'We need nine justices for a fully functioning Supreme Court and editorial boards across the country agree. https://t.co/WD42qmgXpO',
        output: {obama: 1}
    }, {
        input: 'RT @cspan: .@RepJohnLewis on #GunViolence: ""The time for silence is over."" https://t.co/zUUX02jNnN',
        output: {obama: 1}
    }, {
        input: 'We can\'t let Senate leaders ignore their constitutional responsibilities. https://t.co/ExY5wZcWi6 #DoYourJob https://t.co/IwO7CAoVm2',
        output: {obama: 1}
    }, {
        input: 'Stay informed. Stay engaged. Speak up. Join the @OFA Truth Team: https://t.co/b0eae4PXDX',
        output: {obama: 1}
    }, {
        input: 'The U.S. is on track to hit two million solar installations within the next two years. Momentum is building: https://t.co/dTb4M3J4MY',
        output: {obama: 1}
    }, {
        input: 'Time is almost up for Senate leaders to do the right thing and fill the #SCOTUS vacancy. https://t.co/rPbzUkZAUE #DoYourJob',
        output: {obama: 1}
    }, {
        input: 'Median household income: Poverty rate: Uninsured rate: Middle-class economics works. https://t.co/ThPXBSux09',
        output: {obama: 1}
    }, {
        input: 'In 2015, we saw the fastest household income growth on record and the largest drop in the poverty rate since 1968. https://t.co/Kyw1vuhont',
        output: {obama: 1}
    }, {
        input: 'RT @WhiteHouse: Fastest household income growth on record Largest drop in poverty rate since 1968 https://t.co/qK505KUeuP',
        output: {obama: 1}
    }, {
        input: 'The Supreme Court must remain above partisanship. Senate leaders: The time to fill the vacant seat is now. https://t.co/7mmbuXjsPO',
        output: {obama: 1}
    }, {
        input: 'ICYMI: This is a really big deal. https://t.co/raNeUV5fRd',
        output: {obama: 1}
    }, {
        input: 'Vice President Biden speaks on the ""dangerous precedent"" Senate leaders are setting by refusing to do their jobs. https://t.co/W1A7Oyb4gB',
        output: {obama: 1}
    }, {
        input: 'These are records we can\'t keep breaking. We must work together to #ActOnClimate. https://t.co/sTxNR10sjK',
        output: {obama: 1}
    }, {
        input: 'Meaningful action on climate change can\'t wait. President Obama explains why in this @nytimes interview. https://t.co/zbaDcpztIW',
        output: {obama: 1}
    }, {
        input: 'We need to keep up efforts to fight climate change at every level locally, nationally, globally. #ActOnClimate https://t.co/L10qdkgPDg',
        output: {obama: 1}
    }, {
        input: 'RT @FactsOnClimate: BREAKING: A new strategy to harness the power of wind means more jobs, less pollution: https://t.co/s0I0CmalFL',
        output: {obama: 1}
    }, {
        input: 'Senate leaders are back in session. Keep the pressure high call out their obstructionism. https://t.co/eThTUbIMH0 #DoYourJob',
        output: {obama: 1}
    }, {
        input: 'There\'s no need to overcomplicate the process. #DoYourJob https://t.co/QgaNgKNBzJ',
        output: {obama: 1}
    }, {
        input: 'We must take bold steps now climate change is already impacting millions of people. https://t.co/ZWBgt0XEWt #ActOnClimate',
        output: {obama: 1}
    }, {
        input: "If you're walking down the right path and you're willing to keep walking, eventually you'll make progress.",
        output: {obama: 1}
    }, {
        input: "Issues are never simple. One thing I'm proud of is that very rarely will you hear me simplify the issues.",
        output: {obama: 1}
    }, {
        input: "If the people cannot trust their government to do the job for which it exists - to protect them and to promote their common welfare - all else is lost.",
        output: {obama: 1}
    }, {
        input: "I think when you spread the wealth around it's good for everybody",
        output: {obama: 1}
    }, {
        input: "If you're walking down the right path and you're willing to keep walking, eventually you'll make progress.",
        output: {obama: 1}
    }, {
        input: "Issues are never simple. One thing I'm proud of is that very rarely will you hear me simplify the issues.",
        output: {obama: 1}
    }, {
        input: "If the people cannot trust their government to do the job for which it exists - to protect them and to promote their common welfare - all else is lost.",
        output: {obama: 1}
    }, {
        input: "Change will not come if we wait for some other person, or if we wait for some other time. We are the ones we've been waiting for. We are the change that we seek.",
        output: {obama: 1}
    }, {
        input: "The best way to not feel hopeless is to get up and do something. Don’t wait for good things to happen to you. If you go out and make some good things happen, you will fill the world with hope, you will fill yourself with hope.",
        output: {obama: 1}
    }, {
        input: "A change is brought about because ordinary people do extraordinary things.",
        output: {obama: 1}
    },
    {
        input: "Looking forward to IA &amp; WI with Gov. Pence tomorrow. Join us! #MAGA https://t.co/3Hcnzj0Slx https://t.co/sEwLWkn1Sz https://t.co/0Ei3EdQdXB",
        output: {trump: 1}
    }, {
        input: "Thank you Jacksonvill Florida! #MakeAmericaGreatAgain https://t.co/xrTQjt9WOC https://t.co/VSnBoQYoZs",
        output: {trump: 1}
    }, {
        input: "Thank you for your support of my candidacy! #MAGA #ImWithYou https://t.co/Al5bZlRFYk",
        output: {trump: 1}
    }, {
        input: "Thank you to the amazing law enforcement officers today- in Daytona Beach Florida! #LESM #MAGA https://t.co/QoxJf4Xzbc",
        output: {trump: 1}
    }, {
        input: "THANK YOU Daytona Beach Florida! #MakeAmericaGreatAgain https://t.co/IAcLfXe463",
        output: {trump: 1}
    }, {
        input: "RT @mike_pence: Join me in Colorad today! Look forward to seeing you!",
        output: {trump: 1}
    }, {
        input: "Our incompetent Secretary of State Hillary Clinton was the one who started talks to give 400 million dollars in cas to Iran. Scandal!",
        output: {trump: 1}
    }, {
        input: "There is great unity in my campaign perhaps greater than ever before. I want to thank everyone for your tremendous support. Beat Crooked H!",
        output: {trump: 1}
    }, {
        input: "Great day in Virginia. Crowd was fantastic!",
        output: {trump: 1}
    }, {
        input: "My daughter @IvankaTrump will be on @Greta tonight at 7pm. Enjoy! https://t.co/QySC5PLFMy",
        output: {trump: 1}
    }, {
        input: "Report raises questions about ‘Clinton Cash’ from Russians during ‘reset' https://t.co/vVcAzY2zcp",
        output: {trump: 1}
    }, {
        input: "President Obama will go down as perhaps the worst president in the history of the United States!",
        output: {trump: 1}
    }, {
        input: "RT @gatewaypundit: Democrat Fire Marshal Turns THOUSANDS of Trump Supporters Away at Columbus Rally https://t.co/TO8oE5cv8Z via @gatewaypun…",
        output: {trump: 1}
    }, {
        input: "#ICYMI: John Podesta’s Brother Pocketed $180000 from Putin’s Uranium Company: https://t.co/d0LfyiBlvX https://t.co/I5fF3didZs",
        output: {trump: 1}
    }, {
        input: "Join me in Florida tomorrow! #MakeAmericaGreatAgain",
        output: {trump: 1}
    }, {
        input: "STATEMENT IN RESPONSE TO PRESIDENT OBAMA'S FAILED LEADERSHIP: https://t.co/SPgFIFuSO7",
        output: {trump: 1}
    }, {
        input: "Thank you Virginia! #ImWithYou https://t.co/9inCh1BVwM",
        output: {trump: 1}
    }, {
        input: "The Washington Post calls out #CrookedHillary for what she REALLY is. A PATHOLOGICAL LIAR! Watch that nose grow! https://t.co/FsrUGByuuD",
        output: {trump: 1}
    }, {
        input: "Great afternoon in Ohio &amp; a great evening in Pennsylvania - departing now. See you tomorrow Virginia! https://t.co/jQTQYBFpdb",
        output: {trump: 1}
    }, {
        input: "Just leaving Mechanicsburg PA. Incredible crowd-- so enthusiastic! Will be back soon. #MAGA https://t.co/RbuXfDZ5w9",
        output: {trump: 1}
    }, {
        input: "RT @DanScavino: .@realDonaldTrump stops by overflow room in Mechanicsburg Pennsylvania- prior to main rally. #TrumpMovement #MAGA🇺🇸 https:…",
        output: {trump: 1}
    }, {
        input: "Vast numbers of manufacturing jobs in Pennsylvania have moved to Mexico and other countries. That will end when I win!",
        output: {trump: 1}
    }, {
        input: "Thanks to @pnehlen for your kind words very much appreciated.",
        output: {trump: 1}
    }, {
        input: "Join me in Florida on Wednesday! Daytona &amp; Jacksonville:Daytona | 3pm- https://t.co/rJjYUbwiLL Jacksonville | 7pm- https://t.co/zfxeNbr1nq During the GOP convention CNN cut away from the victims of illegal immigrant violence. They don’t want them heard. https://t.co/EHRiLkQDWD",
        output: {trump: 1}
    }, {
        input: "When will CNN do a segment on Hillary’s plan to increase Syrian refugees 550% and how much it will cost?",
        output: {trump: 1}
    }, {
        input: "Hillary Clinton raked in money from regimes that horribly oppress women and gays &amp; refuses to speak out against Radical Islam.",
        output: {trump: 1}
    }, {
        input: "Hillary whose decisions have led to the deaths of many accepted $ from a business linked to ISIS. Silence at CNN. https://t.co/gJYSSXtpaz",
        output: {trump: 1}
    }, {
        input: "Crooked Hillary Clinton is 100% owned by her donors. #ImWithYou #MAGA https://t.co/iYM3CCWS2z",
        output: {trump: 1}
    }, {
        input: "Thank you Columbus Ohio! I will be back soon. #ImWithYou #MAGA https://t.co/vMf1EPJp4r",
        output: {trump: 1}
    }, {
        input: "Thank you Oklahoma &amp; Virginia! #MakeAmericaGreatAgain #ImWithYou https://t.co/WUdY7feRvV",
        output: {trump: 1}
    }, {
        input: "People believe CNN these days almost as little as they believe Hillary....that's really saying something!",
        output: {trump: 1}
    }, {
        input: "The people who support Hillary sit behind CNN anchor chairs or headline fundraisers - those disconnected from real life.",
        output: {trump: 1}
    }, {
        input: "Will CNN send its cameras to the border to show the massive unreported crisis now unfolding -- or are they worried it will hurt Hillary?",
        output: {trump: 1}
    }, {
        input: "When will we see stories from CNN on Clinton Foundation corruption and Hillary's pay-for-play at State Department?",
        output: {trump: 1}
    }, {
        input: "CNN anchors are completely out of touch with everyday people worried about rising crime failing schools and vanishing jobs.",
        output: {trump: 1}
    }, {
        input: "CNN will soon be the least trusted name in news if they continue to be the press shop for Hillary Clinton.",
        output: {trump: 1}
    }, {
        input: "Join Governor Mike Pence in Reno Nevada- tonight at 7pm! Tickets available at: https://t.co/4nLjRGyFYw",
        output: {trump: 1}
    },{ //------
        input: "So with all of the Obama tough talk on Russia and the Ukraine they have already taken Crimea and continue to push. That's what I said!",
        output: {trump: 1}
    }, {
        input: "When I said in an interview that Putin is not going into Ukraine you can mark it down  I am saying if I am President. Already in Crimea!",
        output: {trump: 1}
    }, {
        input: "This story is not about Mr. Khanwho is all over the place doing interviews but rather RADICAL ISLAMIC TERRORISM and the U.S. Get smart!",
        output: {trump: 1}
    }, {
        input: "Mr. Khan who does not know me viciously attacked me from the stage of the DNC and is now all over T.V. doing the same - Nice!",
        output: {trump: 1}
    }, {
        input: "Wow it is unbelievable how distorted one-sided and biased the media is against us. The failing @nytimes is a joke. @CNN is laughable!",
        output: {trump: 1}
    }, {
        input: "@RealJamesWoods:  Without absolutely OWNING the liberal media HillaryClinton wouldn't stand a chance. #VoterFraud and #MSM her only hope.",
        output: {trump: 1}
    }, {
        input: "The dishonest media is fawning over the Democratic Convention. I wonder why then my speech had millions of more viewers than Crooked H?",
        output: {trump: 1}
    }, {
        input: "I was viciously attacked by Mr. Khan at the Democratic Convention. Am I not allowed to respond? Hillary voted for the Iraq war not me!",
        output: {trump: 1}
    }, {
        input: "Captain Khan killed 12 years ago was a hero but this is about RADICAL ISLAMIC TERROR and the weakness of our ",
        output: {trump: 1}
    }, {
        input: "Nielson Media Research final numbers on ACCEPTANCE SPEECH: TRUMP  32.2 MILLION.  CLINTON 27.8 MILLION.  Thank you!",
        output: {trump: 1}
    }, {
        input: "Thank you to all of the television viewers that made my speech at the Republican National Convention #1 over Crooked Hillary and DEMS.",
        output: {trump: 1}
    }, {
        input: "Can you imagine if I had the small crowds that Hillary is drawing today in Pennsylvania. It would be a major media event! @CNN @FoxNews",
        output: {trump: 1}
    }, {
        input: "NATO commander agrees members should pay up via @dcexaminer:https://t.co/VZLDFy707K",
        output: {trump: 1}
    }, {
        input: "Wow NATO's top commander just announced that he agrees with me that alliance members must PAY THEIR BILLS. This is a general I will like!",
        output: {trump: 1}
    }, {
        input: "The Rust Belt was created by politicians like the Clintons who allowed our jobs to be stolen from us by other countries like Mexico. END!",
        output: {trump: 1}
    }, {
        input: "Crooked's stop in Johnstown Pennsylvania where jobs have been absolutely decimated by dumb politicians drew less than 200 - with Bill VP",
        output: {trump: 1}
    }, {
        input: "#CrookedHillary = Obama's third term which would be terrible news for our economic growth - seen below. https://t.co/y9WJoUaaql",
        output: {trump: 1}
    }, {
        input: "Word is that Crooked Hillary has very small and unenthusiastic crowds in Pennsylvania. Perhaps it is because her husband signed NAFTA?",
        output: {trump: 1}
    }, {
        input: "I turned down a meeting with Charles and David Koch. Much better for them to meet with the puppets of politics they will do much better!",
        output: {trump: 1}
    }, {
        input: "Why doesn't the media want to report that on the two Big Thursdays when Crooked Hillary and I made our speeches - Republican's won ratings",
        output: {trump: 1}
    },{
        input: "Crooked Hillary Clinton is soft on crime supports open borders and wants massive tax hikes. A formula for disaster!",
        output: {trump: 1}
    }, {
        input: "Violent crime is rising across the United States yet the DNC convention ignored it. Crime reduction will be one of my top priorities.",
        output: {trump: 1}
    }, {
        input: "Just got back from Colorado. The love and enthusiasm at two rallies was incredible. Big crowds!",
        output: {trump: 1}
    }, {
        input: "While I am in OH &amp; PA - you can also join @Mike_Pence in Nevada on Mon! Carson City: https://t.co/28G3RVbFsn Reno: https://t.co/4nLjRGyFYw",
        output: {trump: 1}
    }, {
        input: "Join me Monday in Columbus Ohio &amp; Harrisburg Pennsylvania! #MAGA 3pm in OH: https://t.co/DDg0AUsqRq, 7pm in PA: https://t.co/VmSLBvL43l",
        output: {trump: 1}
    }, {
        input: "American homeownership rate in Q2 2016 was 62.9% - lowest rate in 51yrs. WE will bring back the  'American Dream!' https://t.co/yI4Q8FHRjp",
        output: {trump: 1}
    }, {
        input: "We are suffering through the worst long-term unemployment in the last 70 years. I want change - Crooked Hillary Clinton does not.",
        output: {trump: 1}
    }, {
        input: "Hillary can never win over Bernie supporters. Her foreign wars NAFTA/TPP support &amp; Wall Street ties are driving away millions of votes.",
        output: {trump: 1}
    }, {
        input: "Colorado was amazing yesterday! So much support. Our tax trade and energy reforms will bring great jobs to Colorado and the whole country.",
        output: {trump: 1}
    }, {
        input: "@patrioticpepe: @realDonaldTrump ONLY TRUMP CAN UNITE AMERICA AND FIX OBAMA'S MISTAKES!!! #Trump2016 https://t.co/yB72Bm2muM",
        output: {trump: 1}
    }, {
        input: "Thank you Denver Colorado! #MakeAmericaGreatAgain! https://t.co/1KHrLdkOyW",
        output: {trump: 1}
    }, {
        input: "As usual Hillary &amp; the Dems are trying to rig the debates so 2 are up against major NFL games. Same as last time w/ Bernie. Unacceptable!",
        output: {trump: 1}
    }, {
        input: "#CrookedHillary Job Application https://t.co/CKXkAlGSiV",
        output: {trump: 1}
    }, {
        input: "Hillary Clinton should not be given national security briefings in that she is a lose cannon with extraordinarily bad judgement &amp; insticts.",
        output: {trump: 1}
    }, {
        input: "Thank you to the amazing law enforcement officers in Colorado! #MakeAmericaGreatAgain #LESM https://t.co/glxTQYAQiN",
        output: {trump: 1}
    }, {
        input: "Thank you Colorado Springs. Get out &amp; VOTE #TrumpPence16 in November! https://t.co/wK02fWzJey",
        output: {trump: 1}
    }, {
        input: "Only a Reagan or a Trump-like figure in the White House will achieve this goal. https://t.co/6a7Ef12giZ",
        output: {trump: 1}
    }, {
        input: "Even Bill is tired of the lies SAD! https://t.co/LPk1OkwH9P",
        output: {trump: 1}
    }, {
        input: "Join me in Colorado Springs at 2pm- or in Denver tonight at 7pm! Colorado Springs: https://t.co/HgFW7IRtz9 Denver: https://t.co/aE5P9jNcFC",
        output: {trump: 1}
    }, {
        input: "What Bernie Sanders really thinks of Crooked Hillary Clinton. https://t.co/VgMaAsZBep",
        output: {trump: 1}
    }, {
        input: "I am watching Crooked Hillary speak. Same old stuff our country needs change!",
        output: {trump: 1}
    }, {
        input: "Wow my campaign is hearing from more and more Bernie supporters that they will NEVER support Crooked Hillary. She sold them out V.P. pick!",
        output: {trump: 1}
    }, {
        input: "In Hillary Clinton's America - things get worse. #TrumpPence16 https://t.co/WdHbnhhCbW",
        output: {trump: 1}
    }, {
        input: "The dishonest media didn't mention that Bernie Sanders was very angry looking during Crooked's speech. He wishes he didn't make that deal!",
        output: {trump: 1}
    },{
        input: "Crooked Hillary said that I couldn't handle the rough and tumble of a political campaign. Really I just beat 16 people and am beating her!",
        output: {trump: 1}
    }, {
        input: "If Michael Bloomberg ran again for Mayor of New York he wouldn't get 10% of the vote - they would run him out of town!  #NeverHillary",
        output: {trump: 1}
    }, {
        input: "Little Michael Bloomberg who never had the guts to run for president knows nothing about me. His last term as Mayor was a disaster!",
        output: {trump: 1}
    }, {
        input: "General John Allen who I never met but spoke against me last night failed badly in his fight against ISIS. His record = BAD  #NeverHillary",
        output: {trump: 1}
    }, {
        input: "Crooked Hillary Clinton mentioned me 22 times in her very long and very boring speech. Many of her statements were lies and fabrications!",
        output: {trump: 1}
    }, {
        input: "Join @mike_pence at the University of Northwestern Ohio- tonight at 7pm. Tickets: https://t.co/DvP8p7ueNU",
        output: {trump: 1}
    }, {
        input: "@AnnCoulter: I believe in science Dem code for we're shutting down coal mines steel plants and any other remaining manufacturing",
        output: {trump: 1}
    }, {
        input: "Two policemen just shot in San Diego one dead. It is only getting worse. People want LAW AND ORDER!",
        output: {trump: 1}
    }, {
        input: "Crooked Hillary Clinton made up facts about me and ",
        output: {trump: 1}
    }, {
        input: "The media coverage this morning of the very average Clinton speech and Convention is a joke. @CNN and the little watched @Morning_Joe = SAD!",
        output: {trump: 1}
    }, {
        input: "No one has worse judgement than Hillary Clinton - corruption and devastation follows her wherever she goes.",
        output: {trump: 1}
    }, {
        input: "Hillary's wars in the Middle East have unleashed destruction terrorism and ISIS across the world.",
        output: {trump: 1}
    }, {
        input: "Hillary's vision is a borderless world where working people have no power no jobs no safety.",
        output: {trump: 1}
    }, {
        input: "Hillary will never reform Wall Street. She is owned by Wall Street!",
        output: {trump: 1}
    }, {
        input: "Our way of life is under threat by Radical Islam and Hillary Clinton cannot even bring herself to say the words.",
        output: {trump: 1}
    }, {
        input: "Hillary's refusal to mention Radical Islam as she pushes a 550% increase in refugees is more proof that she is unfit to lead the country.",
        output: {trump: 1}
    }, {
        input: "Departing now - thank you Cedar Rapids Iowa. This is a MOVEMENT! https://t.co/ezrqVqPtta",
        output: {trump: 1}
    }, {
        input: "Dems warn not to underestimate Trump's potential win https://t.co/X3xHtjhHpB",
        output: {trump: 1}
    }, {
        input: "Great to be back in Iowa! #TBT with @JerryJrFalwell joining me in Davenport- this past winter. #MAGA https://t.co/A5IF0QHnic",
        output: {trump: 1}
    }, {
        input: "Median household income is down for the middle class since Obama took office. It will only go further down under Clinton.",
        output: {trump: 1}
    }, {
        input: "A vote for Clinton-Kaine is a vote for TPP NAFTA high taxes radical regulatio and massive influx of refugees.",
        output: {trump: 1}
    }, {
        input: "@LallyRay: Poll: Donald Trump Sees 17-Point Positive Swing in Two Weeks - Breitbart https://t.co/bVAj52fA3Y @realdonaldtrump  Great!",
        output: {trump: 1}
    }, {
        input: "RT @mike_pence: Good morning! Join me in Lima Ohio - tomorrow evening at 7pm. #MAGA Tickets: https://t.co/sNfhyGeaAH",
        output: {trump: 1}
    }, {
        input: "RT @piersmorgan: Trump makes a funny obvious joke about Russia going after Hillary's emails &amp; U.S. media goes insane with fury. He plays t…",
        output: {trump: 1}
    }, {
        input: "RT @DRUDGE_REPORT: Obama Refers to Himself 119 Times During Hillary Nominating Speech... https://t.co/TyJI2DuqEk",
        output: {trump: 1}
    }, {
        input: "President Obama spoke last night about a world that doesn’t exist. 70% of the people think our country is going in the wrong direction. #DNC",
        output: {trump: 1}
    }, {
        input: "@trumplican2016: @realDonaldTrump @DavidWohl stay the course mr trump your message is resonating with the PEOPLE",
        output: {trump: 1}
    }, {
        input: "@DavidWohl: Barack is offended that @realDonaldTrump will demand that #NATO allies pay their fair share. #DemsInPhilly",
        output: {trump: 1}
    }, {
        input: "Our country does not feel 'great already' to the millions of wonderful people living in poverty violence and despair.",
        output: {trump: 1}
    }, {
        input: "Shooting deaths of police officers up 78% this year. We must restore law and order and protect our great law enforcement officers!",
        output: {trump: 1}
    }, {
        input: "Join me live in Toledo Ohio! #MakeAmericaGreatAgain https://t.co/ruEvMGx4C9",
        output: {trump: 1}
    },  {
        input: "Thank you Pennsylvania! #MakeAmericaGreatAgain https://t.co/bbv3EhGs5x https://t.co/bbroAGTdMw",
        output: {trump: 1}
    }, {
        input: "Thank you to our amazing law enforcement officers! #MAGA https://t.co/UEZorOQhTw",
        output: {trump: 1}
    }, {
        input: "Trump right: Illegal families crossing border set to double 51152 so far https://t.co/1noCe9W6Ru",
        output: {trump: 1}
    }, {
        input: "Great new poll - thank you! #MakeAmericaGreatAgain https://t.co/mXovx0TLPC",
        output: {trump: 1}
    }, {
        input: "If Russia or any other country or person has Hillary Clinton's 33000 illegally deleted emails perhaps they should share them with the FBI!",
        output: {trump: 1}
    }, {
        input: "Join our next Vice President @Mike_Pence in Wisconsin tonight &amp; Michigan Thursday! MI: https://t.co/daR2xIhCEs, WI: https://t.co/LKc7e4VZkB",
        output: {trump: 1}
    }, {
        input: "Not one American flag on the massive stage at the Democratic National Convention until people started complaining-then a small one. Pathetic",
        output: {trump: 1}
    }, {
        input: "Our not very bright Vice President Joe Biden just stated that I wanted to carpet bomb the enemy. Sorry Joe that was Ted Cruz!",
        output: {trump: 1}
    }, {
        input: "Crooked Hillary Clinton wants to flood our country with Syrian immigrants that we know little or nothing about. The danger is massive. NO!",
        output: {trump: 1}
    }, {
        input: "Hopefully the violent and vicious killing by ISIS of a beloved French priest is causing people to start thinking rationally. Get tough!",
        output: {trump: 1}
    }, {
        input: "The Democratic Convention has paid ZERO respect to the great police and law enforcement professionals of our country. No recognition - SAD!",
        output: {trump: 1}
    }, {
        input: "Funny how the failing @nytimes is pushing Dems narrative that Russia is working for me because Putin said Trump is a genius. America 1st!",
        output: {trump: 1}
    }, {
        input: "As I have been saying Crooked Hillary will approve the job killing TPP after the election despite her statements to the contrary: top adv.",
        output: {trump: 1}
    }, {
        input: "Just like I have warned from the beginning Crooked Hillary Clinton will betray you on the TPP. https://t.co/eoNTWK6I8y",
        output: {trump: 1}
    }, {
        input: "Many of Bernie's supporters have left the arena. Did Bernie go home and go to sleep?",
        output: {trump: 1}
    }, {
        input: "I hate to say it but the Republican Convention was far more interesting (with a much more beautiful set) than the Democratic Convention!",
        output: {trump: 1}
    }, {
        input: "No matter what Bill Clinton says and no matter how well he says it the phony media will exclaim it to be incredible. Highly overrated!",
        output: {trump: 1}
    }, {
        input: "You have no idea what my strategy on ISIS is and neither does ISIS (a good thing). Please get your facts straight - thanks. @megynkelly",
        output: {trump: 1}
    }, {
        input: "For the record I have ZERO investments in Russia.",
        output: {trump: 1}
    }, {
        input: "In order to try and deflect the horror and stupidity of the Wikileakes disaster the Dems said maybe it is Russia dealing with Trump. Crazy!",
        output: {trump: 1}
    }, {
        input: "Dems don't want to talk ISIS b/c Hillary's foreign interventions unleashed ISIS &amp; her refugee plans make it easier for them to come here.",
        output: {trump: 1}
    }, {
        input: "Bernie's exhausted he just wants to shut down and go home to bed!",
        output: {trump: 1}
    }, {
        input: "The invention of email has proven to be a very bad thing for Crooked Hillary in that it has proven her to be both incompetent and a liar!",
        output: {trump: 1}
    }, {
        input: "Thank you New Hampshire! #MakeAmericaGreatAgain https://t.co/KRCdV77BQp",
        output: {trump: 1}
    }, {
        input: "Join us in Toledo Ohio- tomorrow night at 8pm! #TrumpPence16 #MAGA Tickets: https://t.co/ERNRrksikq https://t.co/zmGZauCnQF",
        output: {trump: 1}
    }, {
        input: "Join us tomorrow in Scranton Pennsylvania at 3pm! #TrumpPence16 #MAGA Tickets: https://t.co/4FTydj8s9U https://t.co/7zMKhhMmhp",
        output: {trump: 1}
    }, {
        input: "Pocahontas bombed last night! Sad to watch.",
        output: {trump: 1}
    }, {
        input: "Why aren't the Democrats speaking about ISIS bad trade deals broken borders police and law and order. The Republican Convention was great",
        output: {trump: 1}
    }, {
        input: "Funny if you listen to @FoxNews the Democrats did not have a good day. If you listen to the other two they are fawning. What a difference",
        output: {trump: 1}
    }, {
        input: "Bernie Sanders totally sold out to Crooked Hillary Clinton. All of that work energy and money and nothing to show for it! Waste of time.",
        output: {trump: 1}
    }, {
        input: "Elizabeth Warren often referred to as Pocahontas just misrepresented me and spoke glowingly about Crooked Hillary who she always hated!",
        output: {trump: 1}
    }, {
        input: "Sad to watch Bernie Sanders abandon his revolution. We welcome all voters who want to fix our rigged system and bring back our jobs.",
        output: {trump: 1}
    }, {
        input: "If Cory Booker is the future of the Democratic Party they have no future! I know more about Cory than he knows about himself.",
        output: {trump: 1}
    }, {
        input: "I was at @FoxNews and met Juan Williams in passing.  He asked if he could have pictures taken with me. I said fine. He then trashes on air!",
        output: {trump: 1}
    }, {
        input: "Hard to believe that Bernie Sanders has done such a complete fold. He got NOTHING for all of the time energy and money. The V.P. a joke!",
        output: {trump: 1}
    }, {
        input: "While Bernie has totally given up on his fight for the people we welcome all voters who want a better future for our workers.",
        output: {trump: 1}
    }, {
        input: "Clinton betrayed Bernie voters. Kaine supports TPP is in pocket of Wall Street and backed Iraq War.",
        output: {trump: 1}
    }, {
        input: "Thank you OHIO! #TrumpPence16 https://t.co/NOF9Td9BHs https://t.co/WPMBkYjuIm",
        output: {trump: 1}
    }, {
        input: "Thank you Roanoke Virginia- be back soon! #TrumpPence16 https://toutput:.co/rwxXhfFsn1 https://t.co/HwqI2iGPDu",
        output: {trump: 1}
    }, {
        input: "MAKE AMERICA SAFE AND GREAT AGAIN! #TrumpPence16 https://t.co/4O4yjh7X4O https://t.co/cptBaZbV1v",
        output: {trump: 1}
    }, {
        input: "Great POLL numbers are coming out all over. People don't want another four years of Obama and Crooked Hillary would be even worse. #MAGA",
        output: {trump: 1}
    }, {
        input: "The State of Florida is so embarrassed by the antics of Crooked Hillary Clinton and Debbie Wasserman Schultz that they will vote for CHANGE!",
        output: {trump: 1}
    }, {
        input: "Wow the Republican Convention went so smoothly compared to the Dems total mess. But fear not the dishonest media will find a good spinnnn!",
        output: {trump: 1}
    }, {
        input: "Here we go again with another Clinton scandal and e-mails yet (can you believe). Crooked Hillary knew the fix was in B never had a chance!",
        output: {trump: 1}
    }, {
        input: "Crooked Hillary Clinton knew everything that her servant was doing at the DNC - they just got caught that's all! They laughed at Bernie.",
        output: {trump: 1}
    }, {
        input: "If Bernie Sanders after seeing the just released e-mails continues to look exhausted and done then his legacy will never be the same.",
        output: {trump: 1}
    }, {
        input: " well Thank you man! #MakeAmericaGreatAgain https://t.co/Pzs9uwgzam",
        output: {trump: 1}
    }, {
        input: "Hillary was involved in the e-mail scandal because she is the only one with judgement so bad that such a thing could have happened!",
        output: {trump: 1}
    }, {
        input: "How much BAD JUDGEMENT was on display by the people in DNC in writing those really dumb e-mails using even religion against Bernie!",
        output: {trump: 1}
    }, {
        input: "The new joke in town is that Russia leaked the disastrous DNC e-mails which should never have been written (stupid) because Putin likes me",
        output: {trump: 1}
    }, {
        input: "Watched Crooked Hillary Clinton and Tim Kaine on 60 Minutes. No way they are going to fix America's problems. ISIS &amp; all others laughing!",
        output: {trump: 1}
    }, {
        input: "The ratings for the Republican National Convention were very good but for the final night my speech great. Thank you!",
        output: {trump: 1}
    }, {
        input: "The highly neurotic Debbie Wasserman Schultz is angry that after stealing and cheating her way to a Crooked Hillary victory she's out!",
        output: {trump: 1}
    }, {
        input: "The Democrats are in a total meltdown but the biased media will say how great they are doing! E-mails say the rigged system is alive &amp; well!",
        output: {trump: 1}
    }, {
        input: "Even though Bernie Sanders has lost his energy and his strength I don't believe that his supporters will let Crooked Hillary off the hook!",
        output: {trump: 1}
    }, {
        input: "Crooked Hillary Clinton was not at all loyal to the person in her rigged system that pushed her over the top DWS. Too bad Bernie flamed out",
        output: {trump: 1}
    }, {
        input: "If the Republican Convention had blown up with e-mail resignation of boss and the beat down of a big player. (Bernie) media would go wild",
        output: {trump: 1}
    }, {
        input: "The @CNN panels are so one sided almost all against Trump. @FoxNews is so much better and the ratings are much higher. Don't watch CNN!",
        output: {trump: 1}
    }, {
        input: "I always said that Debbie Wasserman Schultz was overrated. The Dems Convention is cracking up and Bernie is exhausted no energy left!",
        output: {trump: 1}
    }, {
        input: "Today proves what I have always known that @Reince Priebus is the tough one and the smart one not Debbie Wasserman Shultz (@DWStweets.)",
        output: {trump: 1}
    }, {
        input: "Sorry folks but Bernie Sanders is exhausted just can't go on any longer. He is trying to dismiss the new e-mails and DNC disrespect. SAD!",
        output: {trump: 1}
    }, {
        input: "There is no longer a Bernie Sanders political revolution. He is turning out to be a weak and somewhat pathetic figure wants it all to end!",
        output: {trump: 1}
    }, {
        input: "An analysis showed that Bernie Sanders would have won the Democratic nomination if it were not for the Super Delegates.",
        output: {trump: 1}
    }, {
        input: "Looks like the Bernie people will fight. If not their BLOOD SWEAT AND TEARS was a total waste of time. Kaine stands for opposite!",
        output: {trump: 1}
    }, {
        input: "Wow President Obama's brother Malik just announced that he is voting for me. Was probably treated badly by president-like everybody else!",
        output: {trump: 1}
    }, {
        input: "Bernie Sanders started off strong but with the selection of Kaine for V.P is ending really weak. So much for a movement! TOTAL DISRESPECT",
        output: {trump: 1}
    }, {
        input: "The Crooked Hillary V.P. choice is VERY disrespectful to Bernie Sanders and all of his supporters. Just another case of BAD JUDGEMENT by H!",
        output: {trump: 1}
    }, {
        input: "#MakeAmericaGreatAgain #TrumpPence16 https://t.co/gCzHX1nyxD",
        output: {trump: 1}
    }, {
        input: "@NancyNielsenn: @realDonaldTrump Dinesh D'Sousa Hillary's America. see it",
        output: {trump: 1}
    }, {
        input: "@OliMauritania: @realDonaldTrump Kaine supported the stupidest deal in the history of deals https://t.co/0FFeKTsuJn #HillaryKaine2016",
        output: {trump: 1}
    }, {
        input: "Thank you to everyone for the wonderful reviews of my speech on Thursday night. From the heart!",
        output: {trump: 1}
    }, {
        input: "The Wikileaks e-mail release today was so bad to Sanders that it will make it impossible for him to support her unless he is a fraud!",
        output: {trump: 1}
    }, {
        input: "Just saw Crooked Hillary and Tim Kaine together. ISIS and our other enemies are drooling. They don't look presidential to me!",
        output: {trump: 1}
    }, {
        input: "I will bring jobs back and get wages up. People haven't had a real wage increase in almost twenty years. Clinton killed jobs!",
        output: {trump: 1}
    }, {
        input: "Tim Kaine has been praising the Trans Pacific Partnership and has been pushing hard to get it approved. Job killer!",
        output: {trump: 1}
    }, {
        input: "Funny that the Democrats would have their convention in Pennsylvania where her husband and her killed so many jobs. I will bring jobs back!",
        output: {trump: 1}
    }, {
        input: "Crooked Hillary Clinton has destroyed jobs and manufacturing in Pennsylvania. Against steelworkers and miners. Husband signed NAFTA.",
        output: {trump: 1}
    }, {
        input: "Leaked e-mails of DNC show plans to destroy Bernie Sanders. Mock his heritage and much more. On-line from Wikileakes really vicious. RIGGED",
        output: {trump: 1}
    }, {
        input: "Pocahontas wanted V.P. slot so badly but wasn't chosen because she has done nothing in the Senate. Also Crooked Hillary hates her!",
        output: {trump: 1}
    }, {
        input: "Tim Kaine is and always has been owned by the banks. Bernie supporters are outraged was their last choice. Bernie fought for nothing!",
        output: {trump: 1}
    }, {
        input: "The Bernie Sanders supporters are furious with the choice of Tim Kaine who represents the opposite of what Bernie stands for. Philly fight?",
        output: {trump: 1}
    }, {
        input: "@Theresa_Cali: @realDonaldTrump General Michael Flynn will make a great Secretary of Defense when you become POTUS! #MakeAmericaSafeAgain",
        output: {trump: 1}
    }, {
        input: "I highly recommend the just out book - THE FIELD OF FIGHT - by General Michael Flynn. How to defeat radical Islam.",
        output: {trump: 1}
    }, {
        input: "Is it the same Kaine that took hundreds of thousands of dollars in gifts while Governor of Virginia and didn't get indicted while Bob M did?",
        output: {trump: 1}
    }, {
        input: "Another attack this time in Germany. Many killed. God bless the people of Munich.",
        output: {trump: 1}
    }, {
        input: "One of the best produced including the incredible stage &amp; set in the history of conventions. Great unity! Big T.V. ratings! @KarlRove",
        output: {trump: 1}
    }, {
        input: "Thank you Cleveland. We love you and will be back many times!",
        output: {trump: 1}
    }, {
        input: "What a great four days in Cleveland. So proud of the great job done by the RNC and all. The police and Secret Service were fantastic!",
        output: {trump: 1}
    }, {
        input: "MAKE AMERICA SAFE AND GREAT AGAIN! #RNCinCLE https://t.co/KH2ZFHUHGP",
        output: {trump: 1}
    }, {
        input: "FORMAL ACCEPTANCE OF THE NOMINATION! #TrumpPence16 https://t.co/E6ZtVjSQZa",
        output: {trump: 1}
    }, {
        input: "You can watch 360 video live from the podium! https://t.co/yqcIsBUdAi #RNCinCLE #TrumpIsWithYou #MakeAmericaGreatAgain",
        output: {trump: 1}
    }, {
        input: "This is a MOVEMENT! #RNCinCLE https://t.co/bdox6JcrAp",
        output: {trump: 1}
    }, {
        input: "Thank you @DonaldJTrumpJr. Proud of you! #RNCinCLE #TrumpPence2016 https://t.co/gobSNWughP",
        output: {trump: 1}
    }, {
        input: "Great job @IvankaTrump! #RNCinCLE https://t.co/swsAKE11F0",
        output: {trump: 1}
    }, {
        input: "Other than a small group of people who have suffered massive and embarrassing losses the party is VERY united. Great love in the arena!",
        output: {trump: 1}
    }, {
        input: "Ted Cruz talks about the Constitution but doesn't say that if the Dems win the Presidency the new JUSTICES appointed will destroy us all!",
        output: {trump: 1}
    }, {
        input: "I am soooo proud of my children Don Eric and Tiffany - their speeches under enormous pressure were incredible. Ivanka intros me tonight!",
        output: {trump: 1}
    }, {
        input: "Great job @EricTrump! Proud of you! #AmericaFirst #RNCinCLE https://t.co/S7IHXDrmsJ",
        output: {trump: 1}
    }, {
        input: "MAKE AMERICA GREAT AGAIN! https://t.co/qL9rjb7OsD",
        output: {trump: 1}
    }, {
        input: "Arena was packed totally electric!",
        output: {trump: 1}
    }, {
        input: ".@mike_pence was fantastic tonight. Will be a great V.P.",
        output: {trump: 1}
    }, {
        input: "Our next Vice President of the United States of America Gov. @Mike_Pence! #GOPinCLE #GOPConvention #AmericaFirst https://t.co/TZT3XcKp1c",
        output: {trump: 1}
    }, {
        input: "Wow Ted Cruz got booed off the stage didn't honor the pledge! I saw his speech two hours early but let him speak anyway. No big deal!",
        output: {trump: 1}
    }, {
        input: "Great job @EricTrump! Proud of you! #AmericaFirst #RNCinCLE https://t.co/EE7C6XKDkt https://t.co/946U6bgREQ",
        output: {trump: 1}
    }, {
        input: "Thank you @ScottWalker! #AmericaFirst #RNCinCLE https://t.co/k2Poy3gGvQ",
        output: {trump: 1}
    }, {
        input: "Thank you to Governor @ScottWalker for such warm support. Great speech!",
        output: {trump: 1}
    }, {
        input: "Thank you @IngrahamAngle! #AmericaFirst https://t.co/cv3I3xRSOK",
        output: {trump: 1}
    }, {
        input: "Watching the #GOPConvention #AmericaFirst #RNCinCLE",
        output: {trump: 1}
    }, {
        input: "John Kasich was never asked by me to be V.P. Just arrived in Cleveland - will be a great two days!",
        output: {trump: 1}
    }, {
        input: "STATEMENT ON the MELANIA SPEECH people https://t.co/uzBOm21Pug",
        output: {trump: 1}
    }, {
        input: "The media is spending more time doing a forensic analysis of Melania's speech than the FBI spent on Hillary's emails.",
        output: {trump: 1}
    }, {
        input: "Good news is Melania's speech got more publicity than any in the history of politics especially if you believe that all press is good press!",
        output: {trump: 1}
    }, {
        input: "In November I think the people of Ohio will remember that the Republicans picked Cleveland instead of going to another state. Jobs!",
        output: {trump: 1}
    }, {
        input: "Bill Hemmer of @FoxNews was very nice in explaining the excitement and energy in the arena. More than in past years.",
        output: {trump: 1}
    }, {
        input: "Congratulations to my children Don and Tiffany on having done a fantastic job last night. I am very proud of you!",
        output: {trump: 1}
    }, {
        input: "Such a great honor to be the Republican Nominee for President of the United States. I will work hard and never let you down! AMERICA FIRST!",
        output: {trump: 1}
    }, {
        input: "The ROLL CALL is beginning at the Republican National Convention. Very exciting!",
        output: {trump: 1}
    }, {
        input: "#MakeAmericaWorkAgain #TrumpPence16 #RNCinCLE https://t.co/bsUp4MSysD https://t.co/mYBjp03XYf",
        output: {trump: 1}
    }, {
        input: "@RoxaneTancredi:  Democrats are coming to TRUMP. I used to be proud of the dem party. No more It is crooked and not for the people.",
        output: {trump: 1}
    }, {
        input: "It was truly an honor to introduce my wife Melania. Her speech and demeanor were absolutely incredible. Very proud! #GOPConvention",
        output: {trump: 1}
    }, {
        input: "Will be on @OreillyFactor tonight at 8:30pm @FoxNews- prior to Melania's speech at the #GOPConvention. Tune in- she will do great! #RNCinCLE",
        output: {trump: 1}
    }, {
        input: "#MakeAmericaSafeAgain! #GOPConvention #RNCinCLE https://t.co/QniZIsGrG8 https://t.co/Kvq6r6WkQ1",
        output: {trump: 1}
    }, {
        input: "Networks other than low ratings @CNN have been very fair and exciting!",
        output: {trump: 1}
    }, {
        input: ".@CNN is the worst.They go to their dumb one-sided panels when a podium speaker is for Trump! VAST MAJORITY want: Make America Great Again!",
        output: {trump: 1}
    }, {
        input: "Looking forward to being at the convention tonight to watch all of the wonderful speakers including my wife Melania. Place looks beautiful!",
        output: {trump: 1}
    }, {
        input: "Thank you Mahoning County Ohio! See you soon! #MakeAmericaSafeAgain https://t.co/TNJMUKImpK https://t.co/iFdqRvaL3q",
        output: {trump: 1}
    }, {
        input: "RT @foxandfriends: STILL AHEAD: @realDonaldTrump joins us at 7am/et! #RNCinCLE https://t.co/TzGbDs88b3",
        output: {trump: 1}
    }, {
        input: "President Obama just had a news conference but he doesn't have a clue. Our country is a divided crime scene and it will only get worse!",
        output: {trump: 1}
    }, {
        input: "Our country is totally divided and our enemies are watching. We are not looking good we are not looking smart we are not looking tough!",
        output: {trump: 1}
    }, {
        input: "@60Minutes: DonaldTrump and his running mate @Mike_Pence to appear on #60Minutes in first joint interview. CBS https://t.co/lZH7qw9qmu",
        output: {trump: 1}
    }, {
        input: "I will be on @60Minutes tonight at 7:00 P.M. with Mike Pence talking about LAW AND ORDER and many other subjects! Bad times for divided USA!",
        output: {trump: 1}
    }, {
        input: "We are TRYING to fight ISIS and now our own people are killing our police. Our country is divided and out of control. The world is watching",
        output: {trump: 1}
    }, {
        input: "We grieve for the officers killed in Baton Rouge today. How many law enforcement and people have to... https://t.co/pPNrzG8kEa",
        output: {trump: 1}
    }, {
        input: "The ratings at @FoxNews blow away the ratings of @CNN - not even close. That's because CNN is the Clinton News Network and people don't like",
        output: {trump: 1}
    }, {
        input: ".@FoxNews is much better and far more truthful than @CNN which is all negative. Guests are stacked for Crooked Hillary! I don't watch.",
        output: {trump: 1}
    }, {
        input: "If Goofy Elizabeth Warren a very weak Senator didn't lie about her heritage (being Native American) she would be nothing today. Pick her H",
        output: {trump: 1}
    }, {
        input: "I hope that Crooked Hillary picks Goofy Elizabeth Warren sometimes referred to as Pocahontas as her V.P. Then we can litigate her fraud!",
        output: {trump: 1}
    }, {
        input: "It doesn't matter that Crooked Hillary has experience look at all of the bad decisions she has made. Bernie said she has bad judgement!",
        output: {trump: 1}
    }, {
        input: "As the days and weeks go by we see what a total mess our country (and world) is in - Crooked Hillary Clinton led Obama into bad decisions!",
        output: {trump: 1}
    }, {
        input: "We are going to have a great time in Cleveland. Will lead to special results for our country. We will Make America Great Again!",
        output: {trump: 1}
    }, {
        input: "Goofy Elizabeth Warren who may be the least productive Senator in the U.S. Senate must prove she is not a fraud. Without the con it's over",
        output: {trump: 1}
    }, {
        input: "Thank you to Jack Morgan Tamara Neo Cheryl Ann Kraft and all of my friends and supporters in Virginia. GREAT JOB!",
        output: {trump: 1}
    }, {
        input: "@TrumpDoonbeg: Great news! We've been nominated for Ireland's Best Golf Hotel 2016.We would appreciate your vote! https://t.co/5uEBphqdG9",
        output: {trump: 1}
    }, {
        input: "Thank you to Chris Cox and Bikers for Trump - Your support has been amazing. I will never forget. MAKE AMERICA GREAT AGAIN!",
        output: {trump: 1}
    }, {
        input: "Thank you! #TrumpPence16 https://t.co/RHprMCsGT6",
        output: {trump: 1}
    }, {
        input: "Crooked Hillary Clinton is bought and paid for by Wall Street lobbyists and special interests. She will sell our country down the tubes!",
        output: {trump: 1}
    }, {
        input: "Very sad that a person who has made so many mistakes Crooked Hillary Clinton can put out such false and vicious ads with her phony money!",
        output: {trump: 1}
    }, {
        input: "Crooked Hillary who embarrassed herself and the country with her e-mail lies has been a DISASTER on foreign policy. Look what's happening!",
        output: {trump: 1}
    }, {
        input: "Crooked Hillary is spending big Wall Street money on ads saying I don't have foreign policy experience yet look what her policies have done",
        output: {trump: 1}
    }, {
        input: "Look forward to introducing Governor Mike Pence (who has done a spectacular job in the great State of Indiana). My first choice from start!",
        output: {trump: 1}
    }, {
        input: "Look forward to Governor Mike Pence V.P. introduction tomorrow in New York City.",
        output: {trump: 1}
    }, {
        input: "I am pleased to announce that I have chosen Governor Mike Pence as my Vice Presidential running mate. News conference tomorrow at 11:00 A.M.",
        output: {trump: 1}
    }, {
        input: "Four more years of weakness with a Crooked Hillary Administration is not acceptable. Look what has happened to the world with O &amp; Hillary!",
        output: {trump: 1}
    }, {
        input: "#NeverTrump is never more. They were crushed last night in Cleveland at Rules Committee by a vote of 87-12. MAKE AMERICA GREAT AGAIN!",
        output: {trump: 1}
    }, {
        input: "My prayers and condolences to the victims and families of the terrible tragedy in Nice France. We are with you in every way!",
        output: {trump: 1}
    }, {
        input: "In light of the horrible attack in Nice France I have postponed tomorrow's news conference concerning my Vice Presidential announcement.",
        output: {trump: 1}
    }, {
        input: "Another horrific attack this time in Nice France. Many dead and injured. When will we learn? It is only getting worse.",
        output: {trump: 1}
    }, {
        input: "I employ many people in the State of Virginia - JOBS JOBS JOBS! Crooked Hillary will sell us out just like her husband did with NAFTA.",
        output: {trump: 1}
    }, {
        input: "Another new poll. Thank you for your support! Join the MOVEMENT today! #ImWithYou https://t.co/3KWOl2ibaW https://t.co/miT4atHxQz",
        output: {trump: 1}
    }, {
        input: "Great new poll- thank you America! #Trump2016 #ImWithYou https://t.co/aVH9c5QRwc",
        output: {trump: 1}
    }, {
        input: "I will be making the announcement of my Vice Presidential pick on Friday at 11am in Manhattan. Details to follow.",
        output: {trump: 1}
    }, {
        input: "If I win the Presidency we will swamp Justice Ginsburg with real judges and real legal opinions!",
        output: {trump: 1}
    }, {
        input: "Even the @NYTimes and @WashingtonPost Editorial Boards condemned Justice Ginsburg for her ethical and legal breach. What was she thinking?",
        output: {trump: 1}
    }, {
        input: "Is Supreme Court Justice Ruth Bader Ginsburg going to apologize to me for her misconduct? Big mistake by an incompetent judge!",
        output: {trump: 1}
    }, {
        input: "On my way to San Diego to raise money for the Republican Party. I am spending a lot myself and also helping others.",
        output: {trump: 1}
    }, {
        input: "Voters understand that Crooked Hillary's negative ads are not true- just like her email lies and her other fraudulent activity.",
        output: {trump: 1}
    }, {
        input: "Despite spending $500k a day on TV ads alone #CrookedHillary falls flat in nationwide @QuinnipiacPoll. Having ZERO impact. Sad!!",
        output: {trump: 1}
    }, {
        input: "Lyin' Crooked Hillary's email stories all have one thing in common. https://t.co/teoVCYXKOR",
        output: {trump: 1}
    }, {
        input: "Is President Obama trying to destroy Israel with all his bad moves? Think about it and let me know!",
        output: {trump: 1}
    }, {
        input: "The Republican platform is most pro-Israel of all time!",
        output: {trump: 1}
    }, {
        input: "New GOP platform now includes language that supports the border wall. We will build the wall and MAKE AMERICA SAFE AGAIN!",
        output: {trump: 1}
    }, {
        input: "#CrookedHillary is outspending me by a combined 31 to 1 in Florida Ohio &amp; Pennsylvania. I haven't started yet! https://t.co/BcoPrwqFMe",
        output: {trump: 1}
    }, {
        input: "Thank you Florida Ohio and Pennsylvania! #CrookedHillary is not qualified. #ImWithYou https://t.co/M1yzgyeEdY",
        output: {trump: 1}
    }, {
        input: "Thank you! #ImWithYou https://t.co/6XkUQ0W4QS",
        output: {trump: 1}
    }, {
        input: "Justice Ginsburg of the U.S. Supreme Court has embarrassed all by making very dumb political statements about me. Her mind is shot - resign!",
        output: {trump: 1}
    }, {
        input: "THANK YOU INDIANA! #Trump2016 #Me #Best https://t.co/Jmkah9wGaA",
        output: {trump: 1}
    }, {
        input: "Thank you Iowa- see you soon! #Trump2016 #ImWithYou https://t.co/gva0MbgnuO https://t.co/PE1jdqZysc",
        output: {trump: 1}
    }, {
        input: "I will be interviewed by @oreillyfactor tonight on @FoxNews at 8pm. Enjoy!",
        output: {trump: 1}
    }, {
        input: "The American people agree. No free pass for #CrookedHillary! https://t.co/lTjLVKkzh1",
        output: {trump: 1}
    }, {
        input: "To all the Bernie voters who want to stop bad trade deals &amp; global special interests we welcome you with open arms. People first.",
        output: {trump: 1}
    }, {
        input: "Bernie sanders has abandoned his supporters by endorsing pro-war pro-TPP pro-Wall Street Crooked Hillary Clinton.",
        output: {trump: 1}
    }, {
        input: "Bernie Sanders endorsing Crooked Hillary Clinton is like Occupy Wall Street endorsing Goldman Sachs.",
        output: {trump: 1}
    }, {
        input: "#CrookedHillary is not qualified for that. believe me! https://t.co/6qi7KTW43O",
        output: {trump: 1}
    }, {
        input: "I am somewhat surprised that Bernie Sanders was not true to himself and his supporters. They are not happy that he is selling out!",
        output: {trump: 1}
    }, {
        input: "Bernie Sanders who has lost most of his leverage has totally sold out to Crooked Hillary Clinton. He will endorse her today - fans angry!",
        output: {trump: 1}
    }, {
        input: "This election is a choice between law order &amp; safety - or chaos crime &amp; violence. I will make America safe again for everyone. #ImWithYou",
        output: {trump: 1}
    }, {
        input: "For too many years our inner cities have been left behind. I am going to deliver jobs safety and protection for those in need.",
        output: {trump: 1}
    }, {
        input: "Crime is out of control and rapidly getting worse. Look what is going on in Chicago and our inner cities. Not good!",
        output: {trump: 1}
    }, {
        input: "#MakeAmericaGreatAgain #ImWithYou https://t.co/lb5ViCDH0g https://t.co/roVn7pAVfy",
        output: {trump: 1}
    }, {
        input: "Senior United States District Judge Robert E. Payne today ruled in favor of Trump campaign delegates who had argued..https://t.co/qVwfjgCHU7",
        output: {trump: 1}
    }, {
        input: "Thoughts and prayers with the victims and their families- along with everyone at the Berrien County Courthouse in St. Joseph Michigan.",
        output: {trump: 1}
    }, {
        input: "Join me in Westfield Indiana- tomorrow night at 7:30pm! #Trump2016Tickets: https://t.co/Jj9TmSEoOd https://t.co/Rq6YRHlpib",
        output: {trump: 1}
    }, {
        input: "I heard that the underachieving John King of @CNN on Inside Politics was one hour of lies. Happily few people are watching - dead network!",
        output: {trump: 1}
    }, {
        input: "The media is so dishonest. If I make a statement they twist it and turn it to make it sound bad or foolish.They think the public is stupid!",
        output: {trump: 1}
    }, {
        input: "President Obama thinks the nation is not as divided as people think. He is living in a world of the make believe!",
        output: {trump: 1}
    }, {
        input: "Look what is happening to our country under the WEAK leadership of Obama and people like Crooked Hillary Clinton. We are a divided nation!",
        output: {trump: 1}
    }, {
        input: "New poll - thank you! #Trump2016 https://t.co/Mi87Vmw06H https://t.co/WmqvcYG4r3",
        output: {trump: 1}
    }, {
        input: "Way to go @serenawilliams  - you are a true champion. Proud of you!",
        output: {trump: 1}
    }, {
        input: "MAKE AMERICA SAFE AGAIN #Make AmericaGreat Again! https://t.co/m0AJWlV8nm https://t.co/P0GleHEmJy",
        output: {trump: 1}
    }, {
        input: "Isn't it sad that on a day of national tragedy Hillary Clinton is answering softball questions about her email lies on @CNN?",
        output: {trump: 1}
    }, {
        input: "Due to the horrific events taking place in our country I have decided to postpone my speech on economic opportunity- today in Miami.",
        output: {trump: 1}
    }, {
        input: "Last night's horrific execution-style shootings of 12 Dallas law enforcement officers...https://t.co/mwzYU98yTt",
        output: {trump: 1}
    }, {
        input: "Prayers and condolences to all of the families who are so thoroughly devastated by the horrors we are all watching take place in our country",
        output: {trump: 1}
    }, {
        input: "After today Crooked Hillary can officially be called Lyin' Crooked Hillary.",
        output: {trump: 1}
    }, {
        input: "Thank you Speaker @PRyan! #AmericaFirst #Trump2016  https://t.co/PPsyxGPdFc",
        output: {trump: 1}
    }, {
        input: "Thank you Rep. Collins! #Trump2016 https://t.co/zkmPywMDxg",
        output: {trump: 1}
    }, {
        input: "Just leaving D.C. Had great meetings with Republicans in the House and Senate. Very interesting day! These are people who love our country!",
        output: {trump: 1}
    }, {
        input: "Great being in Cincinnati Ohio last night- thank you! Off to Washington D.C. now. #Trump2016 #AmericaFirst https://t.co/sryJgRyd56",
        output: {trump: 1}
    }, {
        input: "Where is the outrage for this Disney book? Is this the 'Star of David' also?  Dishonest media! #Frozen https://t.co/4LJBpSm8xa",
        output: {trump: 1}
    }, {
        input: "To all of my twitter followers please contribute whatever you can to the campaign. We must beat Crooked Hillary. https://t.co/Xv8Q1GuWiH",
        output: {trump: 1}
    }, {
        input: "Convention speaker schedule to be released tomorrow. Let today be devoted to Crooked Hillary and the rigged system under which we live.",
        output: {trump: 1}
    }, {
        input: "I have over seven million hits on social media re Crooked Hillary Clinton. Check it out Sleepy Eyes  @MarkHalperin @NBCPolitics",
        output: {trump: 1}
    }, {
        input: "Sleepy eyes Chuck Todd a man with so little touch for politicsis at it again.He could not have watched my standing ovation speech in N.C.",
        output: {trump: 1}
    }, {
        input: "Even the once great Caesars is bankrupt in A.C. Others to follow. Ask the Democrat City Council what happened to Atlantic City.",
        output: {trump: 1}
    }, {
        input: "Hillary Clinton should ask why the Democrat pols in Atlantic City made all the wrong moves - Convention Center Airport - and destroyed City",
        output: {trump: 1}
    }, {
        input: "I made a lot of money in Atlantic City and left 7 years ago great timing (as all know). Pols made big mistakes now many bankruptcies.",
        output: {trump: 1}
    }, {
        input: "Crooked Hillary Clinton lied to the FBI and to the people of our country. She is sooooo guilty. But watch her time will come!",
        output: {trump: 1}
    }, {
        input: "The rigged system may have helped Hillary Clinton escape criminal charges but...https://t.co/KO64IAMDgj https://t.co/8CBSfNpl2l",
        output: {trump: 1}
    }, {
        input: "Crooked Hillary has once again been proven to be a person who is dishonest incompetent and of very bad judgement.",
        output: {trump: 1}
    }, {
        input: "Crooked Hillary Clinton and her team were extremely careless in their handling of very sensitive  highly classified information. Not fit!",
        output: {trump: 1}
    }, {
        input: "Crooked Hillary Clinton is unfit to serve as President of the U.S. Her temperament is weak and her opponents are strong. BAD JUDGEMENT!",
        output: {trump: 1}
    }, {
        input: "I don't think the voters will forget the rigged system that allowed Crooked Hillary to get away with murder. Come November 8 she's out!",
        output: {trump: 1}
    }, {
        input: "Raised a lot of money for the Republican Party. There will be a big gasp when the figures are announced in the morning. Lots of support! Win",
        output: {trump: 1}
    }, {
        input: "I will be interviewed by @oreillyfactor tonight on @FoxNews at 11pm. Enjoy!",
        output: {trump: 1}
    }, {
        input: "My son @EricTrump will be interviewed by @SeanHannity tonight at 10pm on @FoxNews. Enjoy!",
        output: {trump: 1}
    }, {
        input: "Looking forward to meeting with @SenBobCorker in a little while. We will be traveling to North Carolina together today.",
        output: {trump: 1}
    }, {
        input: "FBI director said Crooked Hillary compromised our national security. No charges. Wow! #RiggedSystem",
        output: {trump: 1}
    }, {
        input: "The system is rigged. General Petraeus got in trouble for far less. Very very unfair! As usual bad judgment.",
        output: {trump: 1}
    }, {
        input: "It was great spending time with @joniernst yesterday. She has done a fantastic job for the people of Iowa and U.S. Will see her again!",
        output: {trump: 1}
    }, {
        input: "Taxpayers are paying a fortune for the use of Air Force One on the campaign trail by President Obama and Crooked Hillary. A total disgrace!",
        output: {trump: 1}
    }, {
        input: "On @FoxNews at 7:00 P.M. Special: Meet the Trumps Hope you enjoy!",
        output: {trump: 1}
    }, {
        input: "Why is President Obama allowed to use Air Force One on the campaign trail with Crooked Hillary? She is flying with him tomorrow. Who pays?",
        output: {trump: 1}
    }, {
        input: "With Hillary and Obama  the terrorist attacks will only get worse. Politically correct fools won't even call it what it is - RADICAL ISLAM!",
        output: {trump: 1}
    }, {
        input: "Crooked Hillary Clinton is guilty as hell but the system is totally rigged and corrupt! Where are the 33000 missing e-mails?",
        output: {trump: 1}
    }, {
        input: "The only people who are not interested in being the V.P. pick are the people who have not been asked!",
        output: {trump: 1}
    }, {
        input: "I look forward to meeting @joniernst today in New Jersey. She has done a great job as Senator of Iowa!",
        output: {trump: 1}
    }, {
        input: "Spent time with Indiana Governor Mike Pence and family yesterday. Very impressed great people!",
        output: {trump: 1}
    }, {
        input: "Senator Tom Cotton was great on Meet the Press yesterday. Despite a totally one-sided interview by Chuck Todd the end result was solid!",
        output: {trump: 1}
    }, {
        input: "Dishonest media is trying their absolute best to depict a star in a tweet as the Star of David rather than a Sheriff's Star or plain star!",
        output: {trump: 1}
    }, {
        input: "Happy 4th of July! #Trump2016 #AmericaFirst https://t.co/Ndb3AQrLtY https://t.co/YhHyQjwJW6",
        output: {trump: 1}
    }, {
        input: "Crooked Hillary will NEVER be able to handle the complexities and danger of ISIS - it will just go on forever. We need change!",
        output: {trump: 1}
    }, {
        input: "The third mass attack (slaughter) in days by ISIS. 200 dead in Baghdad worst in many years. We do not have leadership that can stop this!",
        output: {trump: 1}
    }, {
        input: "In Bangladesh hostages were immediately killed by ISIS terrorists if they were unable to cite a verse from the Koran. 20 were killed!",
        output: {trump: 1}
    }, {
        input: "I believe that Crooked Hillary sent Bill to have the meeting with the U.S.A.G. So Bill is not in trouble with H except that he got caught!",
        output: {trump: 1}
    }, {
        input: "The SECRET meeting between Bill Clinton and the U.S.A.G. in back of closed plane was heightened with FBI shouting go away no pictures.",
        output: {trump: 1}
    }, {
        input: "Does anybody really believe that Bill Clinton and the U.S.A.G. talked only about grandkids and golf for 37 minutes in plane on tarmac?",
        output: {trump: 1}
    }, {
        input: "THE SYSTEM IS RIGGED!",
        output: {trump: 1}
    }, {
        input: "On Saturday a great man Elie Wiesel passed away.The world is a better place because of him and his belief that good can triumph over evil!",
        output: {trump: 1}
    }, {
        input: "Crooked Hillary Clinton knew that her husband wanted to meet with the U.S.A.G. to work out a deal. The system is totally rigged &amp; corrupt!",
        output: {trump: 1}
    }, {
        input: "Only a fool would believe that the meeting between Bill Clinton and the U.S.A.G. was not arranged or that Crooked Hillary did not know.",
        output: {trump: 1}
    }, {
        input: "It was just announced-by sources-that no charges will be brought against Crooked Hillary Clinton. Like I said the system is totally rigged!",
        output: {trump: 1}
    }, {
        input: "It is impossible for the FBI not to recommend criminal charges against Hillary Clinton. What she did was wrong! What Bill did was stupid!",
        output: {trump: 1}
    }, {
        input: "Thank you for your support! #AmericaFirst #LeadRight2016  https://t.co/a6f6xZNry",
        output: {trump: 1}
    }, {
        input: "RT @GOP: Reminder: last year Clinton pledged she had turned over all work-related email under penalty of perjury https://t.co/X4R7LnsSoy",
        output: {trump: 1}
    }, {
        input: "Thank you man! #AmericaFirst #Trump",
        output: {trump: 1}
    }, {
        input: "If I become the next POTUS- they will not be ignoring! #AmericaFirst",
        output: {trump: 1}
    }, {
        input: "The #2A to our Constitution is clear. The right of the people to keep &amp; bear Arms shall not be infringed upon.",
        output: {trump: 1}
    }, {
        input: "The speakers slots at the Republican Convention are totally filled with a long waiting list of those that want to speak - Wednesday release",
        output: {trump: 1}
    }, {
        input: "Just read in the failing @nytimes that I was not aware \"the event had to be held in Cleveland\" - a total lie. These people are sick!",
        output: {trump: 1}
    }, {
        input: "When you can't say it - or see it -- you can't fix it. We will MAKE AMERICA SAFE AGAIN! #ImWithYou #AmericaFirst",
        output: {trump: 1}
    }, {
        input: "Just returned from Colorado. Amazing crowd!",
        output: {trump: 1}
    }, {
        input: "Thank you for inviting me to the Western Conservative Summit in Colorado! #ImWithYou #WCS16",
        output: {trump: 1}
    }, {
        input: "Thank you for your support! We will MAKE AMERICA SAFE AND GREAT AGAIN! #ImWithYou #AmericaFirst",
        output: {trump: 1}
    }, {
        input: "These crimes won't be happening if I'm elected POTUS. Killer should have never been here. #AmericaFirst",
        output: {trump: 1}
    }, {
        input: "Take a look at what happened w/ Bill Clinton. The system is totally rigged. Does anybody really believe that meeting was just a coincidence?",
        output: {trump: 1}
    }, {
        input: "Bill Clinton's meeting was a total secret. Nobody was to know about it but he was caught by a local reporter.",
        output: {trump: 1}
    }, {
        input: "As Bernie Sanders said Hillary Clinton has bad judgement. Bill's meeting was probably initiated and demanded by Hillary!",
        output: {trump: 1}
    }, {
        input: "#ThrowbackThursday #Trump2016",
        output: {trump: 1}
    }, {
        input: "I will be interviewed by @SeanHannity tonight at 10pm on FOX! Enjoy!",
        output: {trump: 1}
    }, {
        input: "The reason I put up approximately $50 million for my successful primary campaign is very simple. I want to MAKE AMERICA GREAT AGAIN!",
        output: {trump: 1}
    }, {
        input: "I have self funded my winning primary campaign with an approx. $50 million loan. I have totally terminated the loan!",
        output: {trump: 1}
    }, {
        input: "The very dishonest @NBCNews refuses to accept the fact that I have forgiven my $50 million loan to my campaign. Done deal!",
        output: {trump: 1}
    }, {
        input: "Why would college graduates want Crooked Hillary as their President? She will destroy them!",
        output: {trump: 1}
    }, {
        input: "New book by @ericbolling is absolutely terrific and a must read! #WakeUpAmerica",
        output: {trump: 1}
    }, {
        input: "The story with Hillary will never change. https://t.co/h0Av3TAIiM",
        output: {trump: 1}
    }, {
        input: "Tremendous day in Massachusetts and Maine. Thank you to everyone for making it so special!",
        output: {trump: 1}
    }, {
        input: "ISIS exploded on Hillary Clinton's watch- she's done nothing about it and never will. Not capable!",
        output: {trump: 1}
    }, {
        input: "New Q poll out- we are going to win the whole deal- and MAKE AMERICA GREAT AGAIN! #Trump2016",
        output: {trump: 1}
    }, {
        input: "Just watched Senator John Barrasso on @FoxNews - He was great! Thank you John.",
        output: {trump: 1}
    }, {
        input: "We must do everything possible to keep this horrible terrorism outside the United States.",
        output: {trump: 1}
    }, {
        input: "Hillary Clinton’s Presidency would be catastrophic for the future of our country. She is ill-fit with bad judgment.",
        output: {trump: 1}
    }, {
        input: "Check it out - 2nd video on Lying Crooked Hillary is now online! Watch it here:https://t.co/5mtwkOvQnd",
        output: {trump: 1}
    }, {
        input: ".@CNN is all negative when it comes to me. I don't watch it anymore.",
        output: {trump: 1}
    }, {
        input: "The media is unrelenting. They will only go with and report a story in a negative light. I called Brexit (Hillary was wrong)",
        output: {trump: 1}
    }, {
        input: "So true, thank you!",
        output: {trump: 1}
    }, {
        input: "Hillary Clinton’s Presidency would be catastrophic for the future of our country. She is ill-fit with bad judgment.",
        output: {trump: 1}
    }, {
        input: "Congressman Schiff omitted and distorted key facts' @FoxNews  So, what else is new. He is a total phony!",
        output: {trump: 1}
    }, {
        input: "I will be interviewed by @JudgeJeanine on @FoxNews at 9:00 P.M. Enjoy!",
        output: {trump: 1}
    }, {
        input: "Dem Memo: FBI did not disclose who the clients were - the Clinton Campaign and the DNC. Wow!",
        output: {trump: 1}
    }, {
        input: "The Democrat memo response on government surveillance abuses is a total political and legal BUST. Just confirms all of the terrible things that were done. SO ILLEGAL!",
        output: {trump: 1}
    }, {
        input: "Unemployment claims are at the lowest level since 1973. Much of this has to do with the massive cutting of unnecessary and job killing Regulations!",
        output: {trump: 1}
    }, {
        input: "So true Wayne, and Lowest black unemployment in history!",
        output: {trump: 1}
    }, {
        input: "Thank you to the great men and women of the United States @SecretService for a job well done!",
        output: {trump: 1}
    }, {
        input: "Today, @FLOTUS Melania and I were honored to welcome Prime Minister @TurnbullMalcolm and Mrs. Turnbull of Australia to the @WhiteHouse!",
        output: {trump: 1}
    }, {
        input: "After years of rebuilding OTHER nations, we are finally rebuilding OUR nation - and we are restoring our confidence and our pride!",
        output: {trump: 1}
    }, {
        input: "My whole life is about winning. I don't lose often. I almost never lose.",
        output: {trump: 1}
    }, {
        input: "American will start winning again, winning like never before.",
        output: {trump: 1}
    }, {
        input: "America first",
        output: {trump: 1}
    }, {
        input: "The media is unrelenting. They will only go with and report a story in a negative light. I called Brexit (Hillary was wrong)",
        output: {trump: 1}
    }, {
        input: "#ThrowbackThursday #Trump2016",
        output: {trump: 1}
    }, {
        input: 'RT @SpaceX: Latest weather data suggests sustained winds and rough seas in the recovery area during the top of tomorrows four-hour launch',
        output: {musk: 1}
    },{
        input: 'Best place to view is from the beach. Excitement guaranteed!',
        output: {musk: 1}
    }, {
        input: 'Dragon Spacecraft supersonic abort test coming up either tomorrow or Sunday, depending on weather @NASA @SpaceX',
        output: {musk: 1}
    }, {
        input: 'RT @NASA: LIVE NOW: Hear from mission experts as they talk about @SpaceXs In-Flight Abort Test. The test will demonstrate #CrewDragons ab',
        output: {musk: 1}
    }, {
        input: '@jm_marchante @kekai What should we change?',
        output: {musk: 1}
    }, {
        input: '@kekai Munros analysis of Tesla engineering is accurate, both pro &amp; con. I think he will appreciate some elements',
        output: {musk: 1}
    }, {
        input: 'RT @arstechnica: SpaceX will shut down its rocket mid-flight to test Dragons escape system by @SciGuySpace',
        output: {musk: 1}
    }, {
        input: '@Erdayastronaut @SPEXcast @SciGuySpace Even more important for a a reusable rocket, as cost of propellant actually',
        output: {musk: 1}
    }, {
        input: '@jameslin123321 @Erdayastronaut Helping to pay for this is why Im accumulating assets on Earth.',
        output: {musk: 1}
    }, {
        input: '@jameslin123321 @Erdayastronaut Loading the Mars fleet into Earth orbit, then 1000 ships depart over ~30 days every',
        output: {musk: 1}
    }, {
        input: '@mstrwilliam00 @Erdayastronaut Aiming for 20 to 30 years, like aircraft',
        output: {musk: 1}
    }, {
        input: '@Kristennetten @PicklePunchD @Erdayastronaut Yes. There will be a lot of jobs on Mars!',
        output: {musk: 1}
    }, {
        input: '@PicklePunchD @Erdayastronaut Needs to be such that anyone can go if they want, with loans available for those who dont have money',
        output: {musk: 1}
    }, {
        input: '@EcoHeliGuy @Erdayastronaut Yeah. A lot of work is needed for propellant production on Mars.',
        output: {musk: 1}
    },{
        input: '@Erdayastronaut Building 100 Starships/year gets to 1000 in 10 years or 100 megatons/year or maybe around 100k peop',
        output: {musk: 1}
    }, {
        input: '@Erdayastronaut Starship design goal is 3 flights/day avg rate, so ~1000 flights/year at &gt;100 tons/flight, so every',
        output: {musk: 1}
    }, {
        input: 'Megatons per year to orbit are needed for life to become multiplanetary',
        output: {musk: 1}
    }, {
        input: '@fighteer1 @LCS_Big_Mike @SciGuySpace Thats about right',
        output: {musk: 1}
    }, {
        input: '@g33st111 Reaction to Cyberpunk 2077 slipping release date to September',
        output: {musk: 1}
    }, {
        input: '@SPEXcast @SciGuySpace What amazing is how non-linear the effect of gravity is. Starship can travel by itself fro',
        output: {musk: 1}
    }, {
        input: '@SPEXcast @SciGuySpace Densification isnt needed to return the ship &amp; limited cargo from Mars, but its an option',
        output: {musk: 1}
    }, {
        input: '@SciGuySpace Fundamental issue with SLS is that its not reusable, which means that a billion dollar rocket is',
        output: {musk: 1}
    }, {
        input: '@SciGuySpace Densifying hydrogen is difficult, as its liquid temp is close to absolute zero. Much easier with CH4',
        output: {musk: 1}
    }, {
        input: '@Teslarati Sorry, migh have brought the site down',
        output: {musk: 1}
    }, {
        input: 'RT @Teslarati: The Boring Company releases new images of Las Vegas project as tunnel nears 50% mark',
        output: {musk: 1}
    }, {
        input: 'RT @NASA: Targeted for Sat., Jan. 18: the final major test before @NASA_Astronauts fly on the @SpaceX #CrewDragon. This @Commercial_Crew in',
        output: {musk: 1}
    }, {
        input: 'Starship orbital vehicle SN1, liquid oxygen header tank &amp; nosecone',
        output: {musk: 1}
    }, {
        input: 'RT @Commercial_Crew: .@SpaceXs uncrewed in-flight abort test is targeted for 8am ET on Jan. 18. This test will show that the #CrewDragon c',
        output: {musk: 1}
    }, {
        input: '@nntaleb Just saw this today. Tesla refunds in general should be easy to get electronically &amp; certainly through cus',
        output: {musk: 1}
    }, {
        input: 'RT @universal_sci: What it will look like when the sun becomes a red giant credit: ESA/Hubble (M. Kornmesser &amp; L. L. Christensen)',
        output: {musk: 1}
    }, {
        input: '@ErlendMoberget @ramez @KHayhoe Very true. Whats really mindblowing is how much energy the sun outputs &amp; how little',
        output: {musk: 1}
    }, {
        input: '@Alejandro_DebH @macshlibber @SpaceflightNow Advancing humanitys understanding of the Universe is a fundamental mo',
        output: {musk: 1}
    }, {
        input: '@Neuro_Skeptic One persons MRI machine is anothers railgun! Made a primitive one when I was studying physics at P',
        output: {musk: 1}
    }, {
        input: '@Alejandro_DebH @macshlibber @SpaceflightNow Exactly. Weve had good discussions with leading astronomers. One way',
        output: {musk: 1}
    },  {
        input: 'T-shirt is bulletproof &amp; makes u buff!',
        output: {musk: 1}
    }, {
        input: '@rhoehn @Tesla Thanks for mentioning! We should ve done this ages ago.',
        output: {musk: 1}
    }, {
        input: '@ramez @KHayhoe Good analysis, although a bit conservative imo. However, using a high upper bound for land area tha',
        output: {musk: 1}
    },{
        input: 'RT @yousuck2020: [WANTED!!!] Why not be the first woman to travel to the moon? #MZ_looking_for_love https://t.co/R5VEMXwggl',
        output: {musk: 1}
    }, {
        input: '@Mafaruk_Bagwan We need more emojis!!',
        output: {musk: 1}
    }, {
        input: 'And, of course, your car will be able to in their general direction',
        output: {musk: 1}
    }, {
        input: '@theXential For sure!! This will make for some epic robber confusion',
        output: {musk: 1}
    }, {
        input: 'Teslas will soon talk to people if you want. This is real.',
        output: {musk: 1}
    }, {
        input: '@bluemoondance74 @flcnhvy @SpaceX Should be able to post video of Raptor on Tripod soon',
        output: {musk: 1}
    }, {
        input: '@flcnhvy @nextspaceflight @SmileSimplify @SpaceX Ok, tho could be gnarly',
        output: {musk: 1}
    }, {
        input: '@nextspaceflight @SmileSimplify @SpaceX Destroyed in Dragon fire',
        output: {musk: 1}
    }, {
        input: '@SmileSimplify @SpaceX We tried to design a way to save B1046, but not possible',
        output: {musk: 1}
    }, {
        input: 'Critical test launch before flying astronauts is green for Jan 18',
        output: {musk: 1}
    }, {
        input: '@flcnhvy @Erdayastronaut @BocaChicaGal @NASASpaceflight Yes',
        output: {musk: 1}
    }, {
        input: '@RQuiddich Every tank under pressure is a balloon tanks just question of degree. Starship tanks are not ballo',
        output: {musk: 1}
    }, {
        input: '@Erdayastronaut @BocaChicaGal @NASASpaceflight Everything is compressible, but liquid compression at these pressure',
        output: {musk: 1}
    }, {
        input: '@Erdayastronaut @BocaChicaGal @NASASpaceflight A given tank pressure is needed to feed the engine turbopumps &amp; pres',
        output: {musk: 1}
    }, {
        input: '@Erdayastronaut @BocaChicaGal @NASASpaceflight Dome to barrel weld made it to 7.1 bar, which is pretty good as ~6 b',
        output: {musk: 1}
    }, {
        input: '@universal_sci The sun is green (peak photon frequency)',
        output: {musk: 1}
    }, {
        input: '@nichegamer King of the Goblins,Master of the Labyrinth',
        output: {musk: 1}
    }, {
        input: 'Tesla China Team Such amazing progress!!',
        output: {musk: 1}
    }, {
        input: '@BnOrdhaug @Erdayastronaut I havent cross-checked RCS pulses with the MLI dimpling on the video, but its most likely the cause',
        output: {musk: 1}
    }, {
        input: '@webtekno Nice',
        output: {musk: 1}
    }, {
        input: '@Erdayastronaut Since theres only one main engine, which gives pitch and yaw control, roll control is provided by',
        output: {musk: 1}
    }, {
        input: '@annerajb @waitbutwhy Looks like a thin, flat, round UFO on a stick. Starlink Terminal has motors to self-adjust op',
        output: {musk: 1}
    }, {
        input: '@RenataKonkoly @RationalEtienne Just tryin to grow my follower count on pornhub',
        output: {musk: 1}
    },{
        input: 'RT @SpaceX: Falcon 9 first stage has landed on the Of Course I Still Love You droneship SpaceXs 48th successful landing of an orbital cl',
        output: {musk: 1}
    }, {
        input: '@DonaldM38768041 Bossart was boss art!',
        output: {musk: 1}
    }, {
        input: '@slashdot The Nirvana baby is about a year away from turning 30',
        output: {musk: 1}
    },{
        input: '@hot_rod_co @Tesla People talk about the products they *love*, that touch their heart &amp; bring moments of joy',
        output: {musk: 1}
    }, {
        input: '@slashdot Wow, I built my first server room with parts from Frys. Ending of an era.',
        output: {musk: 1}
    }, {
        input: 'Congratulations Tesla &amp; SpaceX on great 2019! You rock!! Looking forward to epic 2020',
        output: {musk: 1}
    }, {
        input: 'No one suspected his disguise',
        output: {musk: 1}
    }, {
        input: '@engineers_feed @physicsJ Its a bit slow',
        output: {musk: 1}
    }, {
        input: 'RT @Teslarati: Tesla Model S gets another Car of the Decade Award: Nothing Else Comes Close',
        output: {musk: 1}
    }, {
        input: '@JohnnaCrider1 Its not ready yet',
        output: {musk: 1}
    },  {
        input: '@teslaownersSV @rhoehn Thanks all Tesla club members for helping out! Looking forward to seeing you there tomorrow.',
        output: {musk: 1}
    }, {
        input: 'Rest in peace Syd Mead. Your art will endure.',
        output: {musk: 1}
    }, {
        input: '@kulpability @cleantechnica C tbh',
        output: {musk: 1}
    }, {
        input: '@John_Gardi @Erdayastronaut Many ways to solve this problem, but the power requirements are much higher than aircra',
        output: {musk: 1}
    }, {
        input: '@ShaneAppleton7 @Erdayastronaut Building prototypes is relatively easy, volume production is hard',
        output: {musk: 1}
    }, {
        input: '@JaneidyEve Headed to Tesla Fremont factory tomorrow to help with vehicle deliveries',
        output: {musk: 1}
    }, {
        input: '@EvaFoxU Biting off more than I can chew. Because Im an optimistic fool.',
        output: {musk: 1}
    }, {
        input: '@Teslarati Hard to believe its almost time to retire Cargo Dragon after a decade of solid service',
        output: {musk: 1}
    }, {
        input: '@BaconMan65 @PhiliChez Exactly',
        output: {musk: 1}
    }, {
        input: '@cleantechnica Will talk about that on Q4 call',
        output: {musk: 1}
    }, {
        input: '@EverydayTesla Yeah, engineering is ~90% of my time at SpaceX &amp; about ~60% at Tesla',
        output: {musk: 1}
    },{
        input: '@ajtourville @cleantechnica Took me an embarrassingly long time to learn that',
        output: {musk: 1}
    }, {
        input: '@SteveHamel16 @cleantechnica Sounds about right',
        output: {musk: 1}
    }, {
        input: '@DonaldM38768041 @Erdayastronaut Beyond awesome. He was the real deal.',
        output: {musk: 1}
    },{
        input: '@cleantechnica Also, I hate deeply nested classes in C++. Had to be said.',
        output: {musk: 1}
    }, {
        input: '@cleantechnica The less code, the better! 1 point for adding a line of code, but 2 points for deleting a line. Bloatware is the devil.',
        output: {musk: 1}
    }, {
        input: '@Erdayastronaut Direct drive using several Tesla Plaid motors in parallel for SN1. Simpler, lighter &amp; more fault to',
        output: {musk: 1}
    }, {
        input: '@TeslaGong @BrianGilbert_ @Tesla @AusTeslaOwners Tesla merch def needs some love, but too many fish to fry rn',
        output: {musk: 1}
    }, {
        input: '@TeslaGong @BrianGilbert_ @Tesla @AusTeslaOwners Coming',
        output: {musk: 1}
    }, {
        input: '@ajtourville @Erdayastronaut Tesla uses that to wirebond cells to module current collectors. Is there a commerciall',
        output: {musk: 1}
    }, {
        input: '@Kristennetten @SmileSimplify @Erdayastronaut Were focusing on Boca right now for Starship &amp; Cape is focused on Falcon/Dragon',
        output: {musk: 1}
    }, {
        input: '@Erdayastronaut Spin start from COPVs so the ox &amp; fuel turbines spool up super fast in unison. A precise start with',
        output: {musk: 1}
    }, {
        input: '@SmileSimplify @Erdayastronaut Moving to an enclosed (fairly) clean room environment for SN2 in Jan, although, unli',
        output: {musk: 1}
    }, {
        input: '@Erdayastronaut No, will be autogenous from the start, tapping hot CH4 &amp; O2 from Raptor',
        output: {musk: 1}
    }, {
        input: '@teslaownersSV @TonyCrisostomo @Erdayastronaut Yeah',
        output: {musk: 1}
    }, {
        input: '@Erdayastronaut Best would probably be an autogenous laser weld, but we need more precise parts &amp; fixtures. Hopefully get that done in 2020.',
        output: {musk: 1}
    }, {
        input: '@Erdayastronaut Almost everything is different. These parts are stamped vs manually bump-formed &amp; TIP TIG welded vs',
        output: {musk: 1}
    }, {
        input: '@DJSnM We use that process for the Raptor nozzle jacket. The knuckles of this dome are stamped in Michigan with a 4',
        output: {musk: 1}
    }, {
        input: 'Almost three now. Boca team is crushing it! Starship has giant dome',
        output: {musk: 1}
    }, {
        input: '@donnyraywoody @flcnhvy @kulpability @NASA Haha true',
        output: {musk: 1}
    }, {
        input: '@realRickyReeves @Erdayastronaut @NASA Crew Dragon is capable of propulsive landing, but would require extensive te',
        output: {musk: 1}
    }, {
        input: '@kulpability @NASA New technology development schedules tend to exhibit a version of Zenos Paradox at any given',
        output: {musk: 1}
    }, {
        input: '@kulpability @NASA Crew Dragon should be physically ready &amp; at the Cape in Feb, but completing all safety reviews we',
        output: {musk: 1}
    }, {
        input: 'Simulation of first crewed flight of Falcon 9 / Dragon 2020 @NASA ',
        output: {musk: 1}
    }, {
        input: '8 years later, the simulation is mostly real',
        output: {musk: 1}
    }, {
        input: '@vincent13031925 @Tesla @jsrdctz Amazing work by Tesla China team!!',
        output: {musk: 1}
    }, {
        input: '@BrianGilbert_ @Tesla @AusTeslaOwners Tesla app based payment will soon be rolled out WW. Its tough making functio',
        output: {musk: 1}
    }, {
        input: '@BrianGilbert_ @Tesla @AusTeslaOwners Is purchasing through the Tesla app not working?',
        output: {musk: 1}
    }, {
        input: '@teslaownersSV @iam_preethi I def believe in the ethical treatment of animals &amp; taking action of climate, but these',
        output: {musk: 1}
    }, {
        input: '@EvaFoxU @TeslaHistorian @TeslaOwnersofMA @JohnnaCrider1 @vincent13031925 @boringcompany Nice',
        output: {musk: 1}
    }, {
        input: '@teslaownersSV @iam_preethi Renewable energy production (solar, wind, geothermal), improving home insulation &amp; elec',
        output: {musk: 1}
    }, {
        input: '@iam_preethi I support people choosing whatever diet makes them happy, but its true that everyone going vegan stil',
        output: {musk: 1}
    },{
        input: '@28delayslater @TeslaOwnersofMA @JohnnaCrider1 @vincent13031925 @boringcompany Slight tweak to the glass needed &amp; t',
        output: {musk: 1}
    }, {
        input: '@TeslaOwnersofMA @JohnnaCrider1 @vincent13031925 @boringcompany What is the platonic ideal of the perfect candy? Re',
        output: {musk: 1}
    }, {
        input: '@JohnnaCrider1 @vincent13031925 @boringcompany Yeah, Boring Bricks are def coming, but whole team is focused on g',
        output: {musk: 1}
    }, {
        input: '@vincent13031925 @boringcompany Certainly worth trying! The objective reality for large cities worldwide is that ef',
        output: {musk: 1}
    }, {
        input: '@JonAttenborough @cFidd Absolutely. Multi-level tunnels can go under buildings, mountains, rivers or anything else',
        output: {musk: 1}
    },{
        input: '@Snipergen @Tesla Sure. Trax will get much better &amp; more fun. This is an alpha version.',
        output: {musk: 1}
    }, {
        input: '@cFidd No, I said we should build more tunnels. Put trains in them or cars or whatever, but every large city on Ear',
        output: {musk: 1}
    }, {
        input: '@RationalEtienne @EvaFoxU @amargosavalley That might have something to do with it. Stalin: Court of the Red Tsar',
        output: {musk: 1}
    }, {
        input: '@EvaFoxU @amargosavalley For sure, but I understand the pulse of Twitter pretty well. A sudden avalanche of very si',
        output: {musk: 1}
    }, {
        input: '@amargosavalley Thousands of anon/troll/bot accounts suddenly on the attack. Interesting.',
        output: {musk: 1}
    }, {
        input: '@ToscaMusk @kimbal you too sis',
        output: {musk: 1}
    }, {
        input: '@SMZGallagher @Tesla Sorry about this. We will do our best. The Tesla production &amp; delivery teams have been working super hard.',
        output: {musk: 1}
    }, {
        input: '@JohnnaCrider1 @mayemusk Literally. It was at 40th &amp; Baltimore in Philadelphia before gentrification.',
        output: {musk: 1}
    }, {
        input: '@JaneidyEve @johnkrausphotos @austinbarnard45 @flcnhvy @Joe__Wakefield @tjq1190 @tyger_cyber @fawfulfan @_Mikemo Ramones &amp; Bach',
        output: {musk: 1}
    }, {
        input: '@johnkrausphotos @austinbarnard45 @flcnhvy @Joe__Wakefield @tjq1190 @tyger_cyber @fawfulfan @_Mikemo I hope someone',
        output: {musk: 1}
    }, {
        input: '@austinbarnard45 @flcnhvy @Joe__Wakefield @tjq1190 @tyger_cyber @fawfulfan @_Mikemo To pay rent, we turned our house',
        output: {musk: 1}
    },{
        input: '@catmonocle69 Sounds like a Marxist with style',
        output: {musk: 1}
    }, {
        input: '@cyrusposting Induced demand is one of the most irrational theories Ive ever heard. Correlation is not causation.',
        output: {musk: 1}
    }, {
        input: '@Joe__Wakefield @austinbarnard45 @tjq1190 @tyger_cyber @fawfulfan @_Mikemo This is a pretty awful lie. I left South',
        output: {musk: 1}
    }, {
        input: '@austinbarnard45 @tjq1190 @tyger_cyber @fawfulfan @_Mikemo This person blocked me, so cant read the tweet. Whats their deal?',
        output: {musk: 1}
    }, {
        input: '@IrinaAntony @tjq1190 @tyger_cyber @fawfulfan @_Mikemo We started Zip2 with ~$2k from me plus my overclocked home-b',
        output: {musk: 1}
    }, {
        input: '@tjq1190 @tyger_cyber @fawfulfan @_Mikemo He didnt own an emerald mine &amp; I worked my way through college, ending u',
        output: {musk: 1}
    },{
        input: '@annerajb @justpaulinelol Federal',
        output: {musk: 1}
    }, {
        input: '@justpaulinelol @annerajb Probably 2021. Depends on regulatory approvals.',
        output: {musk: 1}
    }, {
        input: '@annerajb Hopefully working in Caribbean by end of 2020. Def by 2021.',
        output: {musk: 1}
    }, {
        input: '@waitbutwhy @Kurz_Gesagt Maximizing conversion of mass to aimed photons (pure momentum) is actually the highest pos',
        output: {musk: 1}
    }, {
        input: '@TheAssassin_95 Yes, but its too secret',
        output: {musk: 1}
    }, {
        input: '@Erdayastronaut @teslaownersSV @Benioff Hopefully fully operational in 2020',
        output: {musk: 1}
    }, {
        input: '@teslaownersSV @Benioff Boring Co is completing its first commercial tunnel in Vegas, going from Convention Center',
        output: {musk: 1}
    }, {
        input: '@flcnhvy No, hes still much faster',
        output: {musk: 1}
    }, {
        input: 'These would be road tunnels for zero emissions vehicles only no toxic fumes is the key. Really, just an undergrou',
        output: {musk: 1}
    }, {
        input: '@Salo4201 That would be a fringe benefit',
        output: {musk: 1}
    }, {
        input: 'Build super safe, Earthquake-proof tunnels under cities to solve traffic',
        output: {musk: 1}
    }, {
        input: '@JaneidyEve Flight is hopefully 2 to 3 months away',
        output: {musk: 1}
    }, {
        input: '@JaneidyEve Were now building flight design of Starship SN1, but each SN will have at least minor improvements, at',
        output: {musk: 1}
    }, {
        input: 'Was up all night with SpaceX team working on Starship tank dome production (most difficult part of primary structur',
        output: {musk: 1}
    }, {
        input: '@DiscoverMag Please stop spamming bleak links into a paywall',
        output: {musk: 1}
    },{
        input: '@KakaroTTo1385 @flcnhvy @Sofiaan @Erdayastronaut It is an honor &amp; a privilege to work with so many great engineers',
        output: {musk: 1}
    }, {
        input: '@flcnhvy @Sofiaan @Erdayastronaut The overarching goal of Tesla engineering is maximize area under user happiness curve',
        output: {musk: 1}
    }, {
        input: '@flcnhvy @Sofiaan @Erdayastronaut Its not that these things cant be done, they just absorb a lot of software engine',
        output: {musk: 1}
    },{
        input: 'Turn on auto navigate feature &amp; car will activate traffic-based navigation to work, home or calendar, depending on',
        output: {musk: 1}
    }, {
        input: '@Sofiaan @Erdayastronaut Possible, but one step at a time. Anything we release to the fleet has big implications th',
        output: {musk: 1}
    }, {
        input: '@JeremyGreenlee @mobiledavidd Seeing B pillar (diagonal fwd) &amp; side repeater (diagonal back) camera views would pro',
        output: {musk: 1}
    }, {
        input: '@mobiledavidd Were building out Superchargers as fast as possible! Need to ramp V3 Supercharger production.',
        output: {musk: 1}
    }, {
        input: '@Erdayastronaut Phone notification with ability to view possibly relevant still images is no problem. Live video fr',
        output: {musk: 1}
    }, {
        input: '@Erdayastronaut Most people still dont know its there',
        output: {musk: 1}
    }, {
        input: 'Just swipe down on Tesla nav button for car to automatically navigate to home, work or destination in calendar',
        output: {musk: 1}
    }, {
        input: '@TesLatino @teslaownersSV @tesla_unplugged @TeslaOwnersofMA @Tesla @disneyplus @BenSullins If you enter a longer di',
        output: {musk: 1}
    }, {
        input: '@teslaownersSV @tesla_unplugged @TeslaOwnersofMA @Tesla @disneyplus @BenSullins Merry Christmas Hope youre enjoy',
        output: {musk: 1}
    }, {
        input: '@teslaownersSV @tesla_unplugged @TeslaOwnersofMA @Tesla @disneyplus @BenSullins Car should autonavigate to destinat',
        output: {musk: 1}
    }, {
        input: '@jamescharles That is odd. Try pressing both scroll wheel buttons to reboot. Have forwarded this to service.',
        output: {musk: 1}
    }, {
        input: '@teslaownersSV @tesla_unplugged @TeslaOwnersofMA @Tesla @disneyplus @BenSullins No',
        output: {musk: 1}
    }, {
        input: '@TeslaOwnersofMA @Tesla @disneyplus @BenSullins Coming soon',
        output: {musk: 1}
    }, {
        input: '@mikeduncan They should double down on insanity of Cats. Right move.',
        output: {musk: 1}
    }, {
        input: '@JaneidyEve @RenataKonkoly @mikeduncan Black Mirror',
        output: {musk: 1}
    }, {
        input: 'RT @Teslarati: Happy Holidays via OTA! Awesome first look at Teslas (2019.40.50) software update in action',
        output: {musk: 1}
    },{
        input: 'RT @Tesla: Trans-Canada Supercharger route from Vancouver to Halifax is now open! Over half the locations are V3 for the fastest chargi',
        output: {musk: 1}
    }, {
        input: '@royalsociety He was awesome. I squared R heating is why room temp superconductors arent needed to carry power lon',
        output: {musk: 1}
    }, {
        input: 'RT @SpaceX: Yesterday the team completed the 10th successful multi-chute test in a row of Crew Dragons upgraded Mark 3 parachute design',
        output: {musk: 1}
    }, {
        input: '@annerajb @RationalEtienne @aufrana @cleantechnica Big communication penalty for remote work, which means the gain',
        output: {musk: 1}
    }, {
        input: '@therealcliffyb @Tesla @SpaceX Truth',
        output: {musk: 1}
    }, {
        input: '@RationalEtienne @aufrana @cleantechnica Wow, accurate analysis!',
        output: {musk: 1}
    }, {
        input: '@RationalEtienne @RenataKonkoly Dont wanna brag but was me',
        output: {musk: 1}
    }, {
        input: '@RenataKonkoly Also fake Soundcloud rapper',
        output: {musk: 1}
    }, {
        input: '@reecethesaxman @youfoundalec @EV_Stevee @teslaownersSV @cgpgrey Write games',
        output: {musk: 1}
    }, {
        input: '@youfoundalec @EV_Stevee @teslaownersSV @cgpgrey Yes',
        output: {musk: 1}
    }, {
        input: '@teslaownersSV @cgpgrey Regarding 2.X to 3 hardware update, that should happen in earnest in Q1. Software feature d',
        output: {musk: 1}
    }, {
        input: '@EV_Stevee @teslaownersSV @cgpgrey Pretty much, although if there was a way to spend money to solve software proble',
        output: {musk: 1}
    }, {
        input: '@flcnhvy @cgpgrey @thirdrowtesla Ok sure',
        output: {musk: 1}
    }, {
        input: '@EV_Stevee @teslaownersSV @cgpgrey Sorry for the delay on V2.X! We just couldnt get it all done in time.',
        output: {musk: 1}
    }, {
        input: '@marialauraadr @teslaownersSV @cgpgrey Unfortunately, this has been necessary for many years, but hopefully not forever',
        output: {musk: 1}
    }, {
        input: '@teslaownersSV @cgpgrey Sorry, its been a bit of a struggle. Software team has been working all weekend to resolve',
        output: {musk: 1}
    }, {
        input: '@cgpgrey My wiki is a war zone with a zillion edits. At least its obviously not curated! Some day, I should probab',
        output: {musk: 1}
    },{
        input: '@TechnologicAli Started Zip2 with ~$2k &amp; ~$100k of student debt, rolled proceeds into X/PayPal, rolled proceeds aga',
        output: {musk: 1}
    }, {
        input: 'If Tesla &amp; SpaceX go bankrupt, so will I. As it should be.',
        output: {musk: 1}
    }, {
        input: 'Just looked at my wiki for 1st time in years. Its insane! Btw, can someone please delete investor. I do basically zero investing.',
        output: {musk: 1}
    }, {
        input: '@RationalEtienne @DonchoGunchev @Tesla @karpathy Sending you healing vibes',
        output: {musk: 1}
    }, {
        input: '@RationalEtienne @cleantechnica Thats certainly our impression, but its an old version of Tesla software, so effect is limited',
        output: {musk: 1}
    },  {
        input: 'The real reason for Looper was to travel back in time &amp; stop a terrible calamity the premiere of Cats!',
        output: {musk: 1}
    }, {
        input: '@dealer_of_happy @Tesla Were working on moving more cars to Florida. End of year delivery is intense! Very proud of',
        output: {musk: 1}
    }, {
        input: '@flcnhvy @engineers_feed Its been years',
        output: {musk: 1}
    }, {
        input: '@engineers_feed I try so hard with these jokes!',
        output: {musk: 1}
    }, {
        input: '@Erdayastronaut @NASA @BoeingSpace For sure!',
        output: {musk: 1}
    }, {
        input: '@NASA @BoeingSpace Orbit is hard. Best wishes for landing &amp; swift recovery to next mission.',
        output: {musk: 1}
    }, {
        input: '@wonderofscience @NatureMuseum Does it like the smiths?',
        output: {musk: 1}
    }, {
        input: '@Sofiaan @thirdrowtesla Needs a few more days of validation, then early access, then wide release',
        output: {musk: 1}
    }, {
        input: 'Tesla holiday software update has FSD sneak preview, Stardew Valley, Lost Backgammon &amp; a few other things',
        output: {musk: 1}
    }, {
        input: 'You dont hear much about element 43',
        output: {musk: 1}
    }, {
        input: '@oxfordteddy @teslainventory @teslaownersSV No, as thats OG Mobileye hardware',
        output: {musk: 1}
    }, {
        input: '@KingRippleXRP Cinnamon toast crunch',
        output: {musk: 1}
    }, {
        input: '@teslainventory @teslaownersSV This is quite a thorny hardware problem, as there are many diff versions of mcu &amp; au',
        output: {musk: 1}
    }, {
        input: 'This mode will show pic of moth &amp; play the smiths',
        output: {musk: 1}
    },{
        input: 'Tesla Moth Mode (better late than never)',
        output: {musk: 1}
    }, {
        input: '@master_ov @tesletter @teslaownersSV Yes, just costs a few thousand dollars &amp; is more complex than a board swap. Bu',
        output: {musk: 1}
    }, {
        input: '@tesletter @teslaownersSV I think we can improve that with a little software optimization',
        output: {musk: 1}
    }, {
        input: '@coffeemaestro_ This is a great meme',
        output: {musk: 1}
    }, {
        input: '@teslaownersSV MCU (infotainment computer) upgrade not recommended imo. Isnt needed for full self-driving &amp; cost i',
        output: {musk: 1}
    }, {
        input: 'Never trust cynics, as they excuse their own bad deeds by telling themselves everyone does it',
        output: {musk: 1}
    }, {
        input: '@acevedo_lex @AlexSibila @Tesla Yes, probably &amp; partially',
        output: {musk: 1}
    }, {
        input: '@AlexSibila @Tesla Some good ideas here!',
        output: {musk: 1}
    }, {
        input: '@SpaceX Telemetry indicates soft touchdown on the water, so fairing might still be reusable',
        output: {musk: 1}
    },{
        input: 'RT @SpaceX: About 45 minutes after liftoff, Ms. Tree and Ms. Chief will attempt to catch the fairing halves ',
        output: {musk: 1}
    }, {
        input: 'RT @SpaceX: Webcast of Falcon 9 launch now live',
        output: {musk: 1}
    }, {
        input: '@flcnhvy @Kristennetten Possibly Excession, but Id recommend reading Player of Games &amp; Surface Detail first. Theyre all great.',
        output: {musk: 1}
    },{
        input: '@bluemoondance74 @ThugsAndMiracle @tfspeakcies @DearHistorians @DeepintoHistory @HellenisticPod @TrueConsPod',
        output: {musk: 1}
    }, {
        input: '@ThugsAndMiracle @tfspeakcies @DearHistorians @DeepintoHistory @HellenisticPod @TrueConsPod @IWBpodcast @Coffincast',
        output: {musk: 1}
    }, {
        input: '@skorusARK This is how we will view fossil fuel cars',
        output: {musk: 1}
    }, {
        input: '@skorusARK Crossing S-curves standard for tech transitions',
        output: {musk: 1}
    },  {
        input: '@flcnhvy We are literally a brain in a vat. The vat is your skull. Everything you think is real is an electrical si',
        output: {musk: 1}
    }, {
        input: 'Games only render what you look at when you look at it, as the compute load would otherwise be impossibly high. Unt',
        output: {musk: 1}
    },{
        input: 'Meant to say is render speed. Frame rate is locked.',
        output: {musk: 1}
    },{
        input: '@SamTalksTesla There are 2 type of people: those who understand binary &amp; those who dont. And those who werent expecting a ternary joke.',
        output: {musk: 1}
    }, {
        input: '@4thFromOurStar Your DLC is $$$$',
        output: {musk: 1}
    }, {
        input: 'Way too many paywalls &amp; spawn points',
        output: {musk: 1}
    }, {
        input: '@Braddock512 Seriously, the NPC dialog tree should have more options',
        output: {musk: 1}
    }, {
        input: 'If life is a video game, the graphics are great, but the plot is confusing &amp; the tutorial is way too long',
        output: {musk: 1}
    },{
        input: 'Root of energy to mass ratio is max render speed of the simulation',
        output: {musk: 1}
    },  {
        input: 'RT @edmunds: The Edmunds 2020 #TopRated best EV of the year is the @Tesla Model 3.The Model 3 is unlike any other vehicle on sale, electric',
        output: {musk: 1}
    },  {
        input: '@RenataKonkoly @mayemusk They smashed the window to steal the radio, which was worth maybe $20. Got a replacement f',
        output: {musk: 1}
    }, {
        input: '@v_g_fischer @mayemusk Yeah, 1978 320i that I bought in 93 for $1400. I hotrodded it by jamming in a 5 speed trans',
        output: {musk: 1}
    }, {
        input: '@mayemusk Couldnt afford to pay for repairs, so I fixed almost everything on that car from parts in the junkyard.',
        output: {musk: 1}
    }, {
        input: '@justpaulinelol Maybe on Starship? Its def got the payload capacity',
        output: {musk: 1}
    }, {
        input: '@MemesOfMars @latimes @latimesfood @latimesbooks @latimesphotos @alex_avoigt @JaneidyEve @sara_boutall',
        output: {musk: 1}
    }, {
        input: '@NCBirbhan @Erdayastronaut Yeah, its one of my favorite T-shirts!',
        output: {musk: 1}
    }, {
        input: 'RT @Teslarati: Teslas Virtual Power Plant rescues grid after coal peaker fails despite being only 2% complete',
        output: {musk: 1}
    }, {
        input: 'RT @SpaceX: Capture confirmed! After 19 flights to the @space_station, Dragon has now delivered over 95,000 pounds of critical supplies to',
        output: {musk: 1}
    }, {
        input: '@teslaownersSV Well aim to have it come out same time as truck. Two seater electric ATV designed to work with Cybe',
        output: {musk: 1}
    }, {
        input: '@Kristennetten Your Twitter comments are great btw!',
        output: {musk: 1}
    }, {
        input: 'Huge thanks to everyone who contributed ideas to Cybertruck. Its better because of you!',
        output: {musk: 1}
    }, {
        input: '@Kristennetten This may sound crazy, but asking real people what theyd like in a product is a great way to meet their needs',
        output: {musk: 1}
    }, {
        input: '@Real_John_D @Teslarati @tesla_raj There will be no loss of either',
        output: {musk: 1}
    }, {
        input: '@flcnhvy @Teslarati @tesla_raj That will require a full redesign, but probably ~73 inches or ~185 cm width',
        output: {musk: 1}
    }, {
        input: '@Everman @Teslarati @tesla_raj True, more for parking at destination. Really needs to fit in same external envelope',
        output: {musk: 1}
    }, {
        input: '@Teslarati @tesla_raj We can prob reduce width by an inch &amp; maybe reduce length by 6+ inches without losing on util',
        output: {musk: 1}
    }, {
        input: 'RT @SpaceX: Falcon 9 lands on the Of Course I Still Love You droneship after delivering Dragon to orbit',
        output: {musk: 1}
    },{
        input: '@JoeWBowles @BillGates Hes def wrong. Solar power is a Gigawatt per square km! All you need is a 100 by 100 mile p',
        output: {musk: 1}
    }, {
        input: 'Super strong roof that generates clean energy, looks great &amp; costs less than a normal roof plus solar panels!',
        output: {musk: 1}
    }, {
        input: '@vincent13031925 @vicentes @neiltyson Huge admiration &amp; respect for the Tesla China team. Their talent &amp; drive is amazing!',
        output: {musk: 1}
    },{
        input: '@neiltyson If we create a city on Mars, Earth-Mars travel will be a powerful forcing function for inventing something like warp drive',
        output: {musk: 1}
    }, {
        input: 'RT @SpaceX: Dragons solar arrays have deployed, and its on its way to the International Space Station. Capture by the @Space_Station crew',
        output: {musk: 1}
    }, {
        input: 'RT @SpaceX: Webcast of Falcon 9 launch now live',
        output: {musk: 1}
    }, {
        input: 'RT @SpaceX: Falcon 9 launch of Dragon targeted for 12:29 p.m. EST, 17:29 UTC. Winds are looking better ahead of todays attempt',
        output: {musk: 1}
    }, {
        input: 'RT @SpaceX: T-30 minutes until Falcon 9 launch of Dragon. Weather is over 90% favorable for todays launch attempt',
        output: {musk: 1}
    }, {
        input: 'RT @SpaceX: Standing down today due to upper altitude winds and high winds at sea creating dynamic conditions around the Of Course I Still',
        output: {musk: 1}
    }, {
        input: 'RT @Tesla: Model X just earned 5 stars from Euro NCAP in safety testing',
        output: {musk: 1}
    }, {
        input: 'RT @SpaceX: Falcon 9 and Dragon are vertical ahead of todays resupply mission to the @Space_Station. Launch is targeted for 12:51 p.m. EST',
        output: {musk: 1}
    }, {
        input: 'RT @NASA: The @SpaceX Falcon 9 &amp; Dragonare preparing for a Dec. 4 launch on a resupply mission to @Space_Station. Today, watch NASA TV',
        output: {musk: 1}
    }, {
        input: 'Launching third flight of this Dragon spacecraft to @Space_Station tomorrow',
        output: {musk: 1}
    }, {
        input: '@mrzakes After a while, hydrogen became sentient',
        output: {musk: 1}
    }, {
        input: '@TonyTassell @Urbandirt @naumanbilly Bravo, right thing to do! Short selling should be illegal.',
        output: {musk: 1}
    }, {
        input: 'RT @flcnhvy: On November 21, 2019, @elonmusk unveiled what is largely considered to be the greatest evolution in vehicular fashion',
        output: {musk: 1}
    }, {
        input: 'People often think theyre breathing oxygen, but are actually breathing nitrogen (78%) with a side serving of oxyge',
        output: {musk: 1}
    }, {
        input: 'Hydrogen is a light, odorless gas, which, given enough time, turns into people who will make this statement',
        output: {musk: 1}
    }, {
        input: '@brandonorselli Still cant believe how hard it was to get',
        output: {musk: 1}
    }, {
        input: '@HarryStoltz1 @royalsociety We sent the nicest person in the company to sit on his doorstep until he at least talke',
        output: {musk: 1}
    }, {
        input: '@royalsociety Tesla was almost called Faraday, as original holder of Tesla Motors trademark refused to sell it to us!',
        output: {musk: 1}
    },{
        input: '@Erdayastronaut @IntEngineering Overall shape is good for low drag coefficient. Matters a lot exactly how you trip',
        output: {musk: 1}
    }, {
        input: '@TeslaForLife @Tesla @RamTrucks @Ford Laminar air flow due to a completely smooth bottom is underappreciated',
        output: {musk: 1}
    }, {
        input: 'RT @NASA: Next week, a #Dragon will race into the sky to deliver tons of cargo and supplies to the @Space_Station!Find out how to watch o',
        output: {musk: 1}
    }, {
        input: '@Real_John_D Thats why Cybertruck has active suspension height &amp; damping control',
        output: {musk: 1}
    }, {
        input: '@indiealexh @es2120 @Tesla @woodhaus2 Safety work is done by engineering, with passive safety by body/chassis eng &amp;',
        output: {musk: 1}
    }, {
        input: '@sivarajkumar237 @ZackBornstein @TheOnion They are dead to me',
        output: {musk: 1}
    }, {
        input: '@IntEngineering With extreme effort, Cybertruck might hit a 0.30 drag coefficient, which would be insane for a truc',
        output: {musk: 1}
    },  {
        input: '@ruttenpete @DeviantArt @TheBakaArts Just because he has a flamethrower and I have a flamethrower doesnt mean um',
        output: {musk: 1}
    }, {
        input: 'This one is deep.Happy Thanksgiving!',
        output: {musk: 1}
    }, {
        input: '@TheWalkingDead @Tesla The finest in apocalypse protection technology! Flamethrower optional.',
        output: {musk: 1}
    }, {
        input: '@RenataKonkoly @Tesla @Teslarati @InsideEVs',
        output: {musk: 1}
    }, {
        input: '@jpthor__ @RodAdib1 Yes, Cybertruck will have steel balls',
        output: {musk: 1}
    }, {
        input: '@Nnedi @Tesla Wed be happy to help',
        output: {musk: 1}
    }, {
        input: '@kimpaquette @neiltyson Sure, will aim to do this next week',
        output: {musk: 1}
    }, {
        input: '@neiltyson Agreed, this will be exciting to see!',
        output: {musk: 1}
    }, {
        input: '@neiltyson Electric motors also have insane torque. If we load both trucks to the max, electric still wins. Physics',
        output: {musk: 1}
    }, {
        input: '@Halo @pewdiepie Cybertruck is inspired by games like Halo. Warthog irl!!',
        output: {musk: 1}
    },  {
        input: '@RodAdib1 Yup. Sledgehammer impact on door cracked base of glass, which is why steel ball didnt bounce off. Should',
        output: {musk: 1}
    }, {
        input: '@greenspank Higher hardness, higher strength &amp; doesnt cost crazy money for ~3mm skins',
        output: {musk: 1}
    }, {
        input: '@TeslaOwnersofMA @Sofiaan @Tesla In general, this is something Tesla should do',
        output: {musk: 1}
    }, {
        input: '@Sofiaan @Tesla We should def make it good to hang out there',
        output: {musk: 1}
    }, {
        input: 'RT @NASA: Each second, 1.5 million tons of solar material shoot off the Sun into space. The magnetosphere shields Earth, but the solar wind',
        output: {musk: 1}
    }, {
        input: 'Cybertruck is our last product unveil for a while, but there will be some (mostly) unexpected technology announcements next year',
        output: {musk: 1}
    }, {
        input: '@thomasbroadfoot Good question. Its a new variant of 300 series stainless steel, but it also gets cold-worked many',
        output: {musk: 1}
    }, {
        input: '@JohnnaCrider1 @EV_Stevee @PicklePunchD Can be wrapped in any color!',
        output: {musk: 1}
    }, {
        input: '@EV_Stevee @PicklePunchD The body panels will actually be laser cut!',
        output: {musk: 1}
    }, {
        input: '@S_Padival @annerajb @flcnhvy Long term, it probably makes sense to build a smaller Cybertruck too',
        output: {musk: 1}
    },{
        input: '@vicentes Hardcore body engineers will understand this at a profound level',
        output: {musk: 1}
    }, {
        input: '@vicentes Haha true! New manufacturing methods are certainly needed, but then Im confident it will actually cost l',
        output: {musk: 1}
    }, {
        input: '@annerajb @flcnhvy Were creating this alloy at Tesla. Not a problem to create a lot of it, but well need to come',
        output: {musk: 1}
    }, {
        input: '@flcnhvy Starship steel decision came first. We were going to use titanium skins for Cybertruck, but cold-rolled 30',
        output: {musk: 1}
    }, {
        input: 'Even bending it requires a deep score on inside of bend, which is how the prototype was made',
        output: {musk: 1}
    }, {
        input: 'Reason Cybertruck is so planar is that you cant stamp ultra-hard 30X steel, because it breaks the stamping press',
        output: {musk: 1}
    }, {
        input: 'With no advertising &amp; no paid endorsement',
        output: {musk: 1}
    }, {
        input: '146k Cybertruck orders so far, with 42% choosing dual, 41% tri &amp; 17% single motor',
        output: {musk: 1}
    }, {
        input: '@cleantechnica Great analysis',
        output: {musk: 1}
    }, {
        input: '@GenerationPls @pewdiepie That would be cool',
        output: {musk: 1}
    }, {
        input: '@pewdiepie Gonna have some sick attachments',
        output: {musk: 1}
    }, {
        input: '@carkuwu Armored Personnel Carrier (APC)',
        output: {musk: 1}
    }, {
        input: 'Franz throws steel ball at Cybertruck window right before launch. Guess we have some improvements to make before pr',
        output: {musk: 1}
    },{
        input: '@reecethesaxman We threw same steel ball at same window several times right before event &amp; didnt even scratch the glass!',
        output: {musk: 1}
    }, {
        input: 'Better truck than an F-150, faster than a Porsche 911. Order Cybertruck online at',
        output: {musk: 1}
    }, {
        input: '@JRussell614 Will be an option to add solar power that generates 15 miles per day, possibly more. Would love this t',
        output: {musk: 1}
    }, {
        input: '@MoeSargi Tesla 2 person electric ATV will come at first as an option for Cybertruck',
        output: {musk: 1}
    }, {
        input: 'RT @MotorTrend: The MotorTrend team visited @Tesla twice during the development of #Cybertruck. Six exclusive stories and five videos at ht',
        output: {musk: 1}
    }, {
        input: 'RT @ReedSAlbers: Gonna tell my kids this is Knight Rider. #Cybertruck',
        output: {musk: 1}
    }, {
        input: 'RT @engineers_feed: @Tesla Oh. My. God. The Tesla Cyber Truck Credit @MyTeslaAdventur',
        output: {musk: 1}
    }, {
        input: '@DMC_Ryan High time we had a Tesla coil!',
        output: {musk: 1}
    }, {
        input: 'RT @Tesla: Cybertruck Unveil livestream starts at 8pm',
        output: {musk: 1}
    }, {
        input: 'Cybertruck design influenced partly by The Spy Who Loved Me',
        output: {musk: 1}
    }, {
        input: '@ElenMatvievska @Tesla Coming soon! Were working to complete the full Supercharger route from London to Shanghai.',
        output: {musk: 1}
    }, {
        input: 'Tesla Cybertruck (pressurized edition) will be official truck of Mars',
        output: {musk: 1}
    }, {
        input: '@WillFealey @Tesla Fun party guaranteed!',
        output: {musk: 1}
    }, {
        input: 'RT @Tesla: Cybertruck Unveil starts at 8 Stay tuned for livestream',
        output: {musk: 1}
    },  {
        input: '@Erdayastronaut @SpaceX Absolutely, but to move to Mk3 design. This had some value as a manufacturing pathfinder, b',
        output: {musk: 1}
    }, {
        input: '@MKBHD Maybe wont need a key at all',
        output: {musk: 1}
    }, {
        input: '@TeslaTested So many reporters gave Chanos airtime when he called Tesla a worthless fraud. Now that he has been proven wrong, silence',
        output: {musk: 1}
    }, {
        input: '@lexfridman @NSF Gravitas is overrated',
        output: {musk: 1}
    }, {
        input: '@SupaZT @Erdayastronaut That would be cool',
        output: {musk: 1}
    }, {
        input: 'National Science Foundation, u should add a W to ur name. Would get way more clicks. Ur welcome.',
        output: {musk: 1}
    }, {
        input: '78% of people want to gentrify Mordor',
        output: {musk: 1}
    }, {
        input: '@slashdot The China space industry is very impressive',
        output: {musk: 1}
    }, {
        input: '@mrclipsmaniac Cephalopods have a strange intelligence',
        output: {musk: 1}
    }, {
        input: '@justpaulinelol @universal_sci It certainly does',
        output: {musk: 1}
    },{
        input: '@teslaownersSV @Teslarati Not sure. Maybe write or message carmakers who oppose the environmental initiative?',
        output: {musk: 1}
    }, {
        input: '@Teslarati Even Toyota, who made the Prius. That is sad.',
        output: {musk: 1}
    }, {
        input: '@Kristennetten @farrxy @Ford Guess I was obsessed with space from an early age. Fair point.',
        output: {musk: 1}
    }, {
        input: '@farrxy @Ford Id be way too embarrassed to put that on a Tesla. Its like a kids drawing.',
        output: {musk: 1}
    }, {
        input: '@Ford Congratulations on the Mach E! Sustainable/electric cars are the future!! Excited to see this announcement fr',
        output: {musk: 1}
    }, {
        input: '@flcnhvy Exactly! Well said.',
        output: {musk: 1}
    }, {
        input: '@cleantechnica Surprisingly common',
        output: {musk: 1}
    }, {
        input: 'Cybertruck unveil Thursday night',
        output: {musk: 1}
    }, {
        input: 'Innovation comes in many ways',
        output: {musk: 1}
    }, {
        input: '@arstechnica @SciGuySpace Meaning not fair that Boeing gets so much more for the same thing',
        output: {musk: 1}
    }, {
        input: '@arstechnica @SciGuySpace This doesnt seem right',
        output: {musk: 1}
    },{
        input: '@fael097 @davidtrover Semi-infinite',
        output: {musk: 1}
    }, {
        input: '@davidtrover Seems likely. = hipsters.',
        output: {musk: 1}
    }, {
        input: '@flcnhvy @neuralink Right now, trajectory of neuro-silicon symbiosis doesnt appear to intersect trajectory of AGI.',
        output: {musk: 1}
    }, {
        input: '@CroWarrior1978 We fought the Balrog last year',
        output: {musk: 1}
    }, {
        input: '@flcnhvy @v_g_fischer @Tesla It was Tacheles',
        output: {musk: 1}
    }, {
        input: '@nichegamer @v_g_fischer @Tesla Memes are modern art',
        output: {musk: 1}
    }, {
        input: '@Matt_B730 @ID_AA_Carmack F8 irony',
        output: {musk: 1}
    }, {
        input: '@v_g_fischer @Tesla There will be many opportunities for both new &amp; experienced people!',
        output: {musk: 1}
    }, {
        input: 'RT @SpaceX: Full duration static fire test of Crew Dragons launch escape system complete SpaceX and NASA teams are now reviewing test da',
        output: {musk: 1}
    }, {
        input: 'RT @lexfridman: The pale blue dot and beyond... Thank you to @elonmusk and the SpaceX, Tesla, Neuralink teams for making the world dream. F',
        output: {musk: 1}
    },{
        input: 'RT @tsrandall: Again we see Model 3 satisfaction through the roof. Almost 99% of owners say theyd recommend it to friends and family, and',
        output: {musk: 1}
    }, {
        input: '@brandonbernicky Yeah, makes sense',
        output: {musk: 1}
    }, {
        input: 'Congrats to Tesla team on Model 3 winning best midsize car in Germany!',
        output: {musk: 1}
    }, {
        input: 'Will build batteries, powertrains &amp; vehicles, starting with Model Y',
        output: {musk: 1}
    },  {
        input: 'RT @SpaceX: Successful deployment of 60 Starlink satellites confirmed!',
        output: {musk: 1}
    }, {
        input: 'RT @SpaceX: Falcon 9 first stage has landed on the Of Course I Still Love You droneship the fourth launch and landing of this booster htt',
        output: {musk: 1}
    }, {
        input: 'RT @SpaceX: Fairing has deployed second time for this particular fairing',
        output: {musk: 1}
    },  {
        input: 'RT @SpaceX: Team is go for launch of 60 Starlink sats tomorrowheaviest payload to date, first re-flight of a fairing, and first Falcon 9 t',
        output: {musk: 1}
    },  {
        input: '@flcnhvy @SciGuySpace @yokem55 @waynehale Exactly',
        output: {musk: 1}
    }, {
        input: '@SciGuySpace @yokem55 @waynehale Without a fully &amp; rapidly reusable orbital rocket, humanity will never be a multiplanet species',
        output: {musk: 1}
    }, {
        input: '@lexfridman Bad logic is always ugly',
        output: {musk: 1}
    }, {
        input: '@RobGMacfarlane @nybooks @emilyraboteau Same goes for digital super intelligence denial',
        output: {musk: 1}
    },  {
        input: 'RT @ElectrekCo: 2020 Tesla Model 3 beats Hyundai IONIQ to become most efficient EV produced',
        output: {musk: 1}
    },{
        input: 'RT @ray4tesla: Tencent Auto Editor in chief is the first one in to test drive China-made #Model3. As a model 3 owner himself (delivere)',
        output: {musk: 1}
    }, {
        input: '@bluemoondance74 @flcnhvy Deleting throttle allows the engine to achieve max thrust on max thrust variant. Other va',
        output: {musk: 1}
    }, {
        input: '@bluemoondance74 @flcnhvy SpaceX engine production is gearing up to build about a Raptor a day by next year, so up',
        output: {musk: 1}
    }, {
        input: '@bluemoondance74 @flcnhvy Raptor is evolving rapidly. Probably wouldnt consider it to be even V1.0 until roughly e',
        output: {musk: 1}
    }, {
        input: '@jchybow @teslaownersSV @flcnhvy Pretty much',
        output: {musk: 1}
    }, {
        input: '@leo_cadle @teslaownersSV @flcnhvy Exactly! Its also a far more exciting &amp; inspiring future if consciousness is ou',
        output: {musk: 1}
    }, {
        input: '@teslaownersSV @flcnhvy No, in the beginning, assuming you even make it there alive, Mars will be far more dangerou',
        output: {musk: 1}
    }, {
        input: '@teslaownersSV @flcnhvy So it will take about 20 years to transfer a million tons to Mars Base Alpha, which is hope',
        output: {musk: 1}
    }, {
        input: '@teslaownersSV @flcnhvy As the planets align only once every two years',
        output: {musk: 1}
    }, {
        input: '@teslaownersSV @flcnhvy A thousand ships will be needed to create a sustainable Mars city',
        output: {musk: 1}
    }, {
        input: '@Malcolmmarsman @flcnhvy No problem. We could program Starship to perform Swan Lake in the sky. Minimizing landing',
        output: {musk: 1}
    }, {
        input: '@flcnhvy Current global payload to orbit capacity is about 500 tons per year, of which Falcon is about half',
        output: {musk: 1}
    }, {
        input: '@flcnhvy If we build as many Starships as Falcons, so ~100 vehicles &amp; each does 100 tons to orbit, thats a capacit',
        output: {musk: 1}
    }, {
        input: '@flcnhvy Payload to orbit per year of Starship fleet is most mind-blowing metric, as its designed to fly 3X per da',
        output: {musk: 1}
    }, {
        input: '@flcnhvy The economics have to be something like that to build a self-sustaining city on Mars',
        output: {musk: 1}
    }, {
        input: 'RT @Teslarati: Tesla receives top scores in Moodys Carbon Transition Assessment',
        output: {musk: 1}
    },{
        input: 'Cybertruck unveil on Nov 21 in LA near SpaceX rocket factory',
        output: {musk: 1}
    }, {
        input: '@uhaveanygrapes @Teslarati Looking into it',
        output: {musk: 1}
    },  {
        input: '@FredericLambert @Teslarati The audience of entrepreneurs should try it, not the AF',
        output: {musk: 1}
    }, {
        input: '@justpaulinelol @Teslarati Naturally',
        output: {musk: 1}
    }, {
        input: 'RT @SpaceX: The fairing supporting this mission previously flew on Falcon Heavys Arabsat-6A mission',
        output: {musk: 1}
    }, {
        input: 'RT @SpaceX: Static fire test of Falcon 9 complete targeting 11/11 for launch of 60 Starlink satellites from Pad 40 in Florida',
        output: {musk: 1}
    }, {
        input: '@Teslarati This is based on an incorrect Electrek article. The Air Force asked me to speak at a startup conference',
        output: {musk: 1}
    }, {
        input: '@WillFealey @Teslarati Fair point. Coming soon. Were making foundational upgrades to the core Tesla corporate OS. 2FA right after that.',
        output: {musk: 1}
    }, {
        input: '@Teslarati Connected, autonomous cars require great software. Advanced factories also require great software. The c',
        output: {musk: 1}
    }, {
        input: '@rafaelcr @OfWudan Would be odd to expect anything else',
        output: {musk: 1}
    }, {
        input: '@TJ_Cooney That said, most Starship spaceports will probably need to be ~20 miles / 30km offshore for acceptable no',
        output: {musk: 1}
    }, {
        input: '@TJ_Cooney Wow, 2011 seems like eons ago! With fairing recovery, Falcon is ~80% reusable, but reflight takes severa',
        output: {musk: 1}
    }, {
        input: 'Great work by SpaceX Dragon team &amp; Airborne! To be clear, weve only done 1 multi-parachute test of Mk3 design, so',
        output: {musk: 1}
    }, {
        input: '@Teslarati Putting Model S in range mode is the opposite of launch mode, as it minimizes performance in favor of ra',
        output: {musk: 1}
    }, {
        input: 'Tesla Solarglass vs Happy Halloween!!',
        output: {musk: 1}
    }, {
        input: '@stephenpallotta @Teslarati Sorry, Drag Times is correct, Top Gear is wrong',
        output: {musk: 1}
    }, {
        input: '@Teslarati Drag Race Times analysis is correct. Also, theres a software upgrade for Model S coming out that increa',
        output: {musk: 1}
    }, {
        input: '@TeslaNY Walking on a Tesla Solarglass roof is definitely no problem!',
        output: {musk: 1}
    }, {
        input: 'Thank for helping grow sustainable energy through solar!',
        output: {musk: 1}
    }, {
        input: '@tobi @chris__lu @MarkRober @MrBeastYT Congrats! Shopify is great btw. Nice work.',
        output: {musk: 1}
    },{
        input: '@johnkrausphotos @NASA @Space_Station Hard to say with high accuracy, but 4 to 6 weeks is my best guess',
        output: {musk: 1}
    }, {
        input: 'Soon, SpaceX will launch @NASA astronauts to @Space_Station!',
        output: {musk: 1}
    }, {
        input: '@themuskbros @teslaownersSV Thats significantly improved in current production',
        output: {musk: 1}
    }, {
        input: '@RenataKonkoly @MrBeastYT @MKBHD True, my name literally means tree',
        output: {musk: 1}
    }, {
        input: '@teslaownersSV If you have autonav enabled, car will automatically navigate either to address in calendar, to work',
        output: {musk: 1}
    }, {
        input: 'Just a reminder that the Tesla Full Self-Driving option goes up by $1000 at midnight on Nov 1 for all regions that',
        output: {musk: 1}
    }, {
        input: 'I always like going South; somehow, it feels like going downhill.',
        output: {musk: 1}
    }, {
        input: '@MKBHD @MrBeastYT Ok, sounds legit, will donate 1M trees',
        output: {musk: 1}
    }, {
        input: 'RT @tsrandall: As one owner said, Quality is measured in different ways. Notwithstanding initial flaws, they raved about their cars. A new',
        output: {musk: 1}
    }, {
        input: '@MrBeastYT Sounds cool. Where are the trees being planted &amp; what kind of trees?',
        output: {musk: 1}
    }, {
        input: '@Jason @kylegrantham Making a roof out of kindling in a fire risk zone is not recommended',
        output: {musk: 1}
    }, {
        input: '@Jon4Lakers @Tesla Were changing this from storm watch to disaster watch to cover fires, earthquakes, etc',
        output: {musk: 1}
    }, {
        input: '@kylegrantham Very true. Glass doesnt burn &amp; melting point is extremely high, so much more resilient than asphalt or wood roofs.',
        output: {musk: 1}
    }, {
        input: '@realDiegoMonroy I hate advertising',
        output: {musk: 1}
    }, {
        input: 'Unfortunately, its hard to google Tesla solar links due to tons of ads &amp; SEO. Go to to add',
        output: {musk: 1}
    }, {
        input: 'We dont make much money on this product, so $1000 actually means a lot',
        output: {musk: 1}
    }, {
        input: 'If youre directly affected by wildfire power outages, Tesla is reducing Solar+Powerwall prices by $1000 as of today',
        output: {musk: 1}
    }, {
        input: 'Apologies to those waiting for Solar/Powerwall outside California, as we are prioritizing those affected by wildfires',
        output: {musk: 1}
    }, {
        input: '@jasondunn So true. Imagine if phones were gasoline powered. Total sales would be like 14 units worldwide! Using oi',
        output: {musk: 1}
    }, {
        input: 'Homes with solar sell for 4.1% more, according to Zillow. Adding a Powerwall battery is highly likely to increase h',
        output: {musk: 1}
    }, {
        input: '@flcnhvy @teslaownersSV Id recommend regular solar panels for flat roofs',
        output: {musk: 1}
    }
];


module.exports.allTweet = allTweet;
