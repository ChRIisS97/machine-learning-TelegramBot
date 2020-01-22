 const trainingData = [
    {
        input: "So true, thank you!",
        output: {trump: 1}
    }, {
        input: "The first step is to establish that something is possible, then probability will occur.",
        output: {musk: 1}
    }, {
        input: "We're going to make it happen. As God is my bloody witness, I'm hell bent on making it work.",
        output: {musk: 1}
    }, {
        input: "If you go back a few hundred years, what we take for granted today would seem like magic being able to talk to people over long distances, to transmit images, flying, accessing vast amounts of data like an oracle. These are all things that would have been considered magic a few hundred years ago.",
        output: {musk: 1}
    }, {
        input: "Its OK to have your eggs in one basket as long as you control what happens to that basket.",
        output: {musk: 1}
    }, {
        input: "Persistence is very important. You should not give up unless you are forced to give up.",
        output: {musk: 1}
    }, {
        input: "When Henry Ford made cheap, reliable cars, people said, Nah what's wrong with a horse?' That was a huge bet he made, and it worked.",
        output: {musk: 1}
    }, {
        input: "There have to be reasons that you get up in the morning and you want to live. Why do you want to live? What's the point? What inspires you? What do you love about the future? If the future does not include being out there among the stars and being a multi-planet species, I find that incredibly depressing.",
        output: {musk: 1}
    }, {
        input: "If you get up in the morning and think the future is going to be better, it is a bright day. Otherwise, it's not.",
        output: {musk: 1}
    }, {
        input: "When something is important enough, you do it even if the odds are not in your favor.",
        output: {musk: 1}
    }, {
        input: "I could either watch it happen or be a part of it.",
        output: {musk: 1}
    }, {
        input: "I don't think it's a good idea to plan to sell a company.",
        output: {musk: 1}
    }, {
        input: "People work better when they know what the goal is and why. It is important that people look forward to coming to work in the morning and enjoy working.",
        output: {musk: 1}
    }, {
        input: "I say something, and then it usually happens. Maybe not on schedule, but it usually happens.",
        output: {musk: 1}
    }, {
        input: "I dont spend my time pontificating about high-concept things; I spend my time solving engineering and manufacturing problems.",
        output: {musk: 1}
    }, {
        input: "My biggest mistake is probably weighing too much on someone's talent and not someone's personality. I think it matters whether someone has a good heart.",
        output: {musk: 1}
    }, {
        input: "I dont create companies for the sake of creating companies, but to get things done.",
        output: {musk: 1}
    }, {
        input: "The first step is to establish that something is possible; then probability will occur.",
        output: {musk: 1}
    }, {
        input: "Best place to view is from the beach. Excitement guaranteed!",
        output: {musk: 1}
    }, {
        input: "Dragon Spacecraft supersonic abort test coming up either tomorrow or Sunday, depending on weather",
        output: {musk: 1}
    }, {
        input: "Hear from mission experts as they talk about SpaceXs In-Flight Abort Test. The test will demonstrate CrewDragons",
        output: {musk: 1}
    }, {
        input: "Could do it, but we developed low cost reusable tiles that are much lighter than tra",
        output: {musk: 1}
    }, {
        input: "Better just to ride your max temp all the way down, let T4 be your friend. Lower atmosphere cools",
        output: {musk: 1}
    }, {
        input: "Exactly. For reusable heatshield, minimize peak heating. For ablative, expendable, minimize total heat.",
        output: {musk: 1}
    }, {
        input: "It does actually generate lift in hypersonic regime, which is important to limit peak heating",
        output: {musk: 1}
    }, {
        input: "Many powerful electric motors batteries. Force required is enormous, as entire fin moves",
        output: {musk: 1}
    }, {
        input: "That's correct. Essentially controlled falling, like a skydiver.",
        output: {musk: 1}
    }, {
        input: "Herbert Diess is doing more than any big car maker to go electric. The good of the world should come first",
        output: {musk: 1}
    }, {
        input: "Just sent a note to check",
        output: {musk: 1}
    }, {
        input: "Some secrets are too dangerous to be free",
        output: {musk: 1}
    }, {
        input: "Tesla OG Roadster is def helping us out here with 826M miles by itself",
        output: {musk: 1}
    }, {
        input: "Ahem well um jea emm well",
        output: {musk: 1}
    }, {
        input: "Super Heavy rocket will be much like Falcon 9, but the Ship is a strange c",
        output: {musk: 1}
    }, {
        input: "Approximately correct. We also fire the ACS thrusters to rotate the vehicle",
        output: {musk: 1}
    }, {
        input: "For aero control, it comes down to cross-sectional area moving vs not. Flexible as too",
        output: {musk: 1}
    }, {
        input: "Current analysis, which Im not fully bought into, suggests that 2 rear fins with separate airframe",
        output: {musk: 1}
    }, {
        input: "Stability is controlled by very rapid movement of rear fwd fins during entry landing, as well",
        output: {musk: 1}
    }, {
        input: "Stability is not an issue with 3",
        output: {musk: 1}
    }, {
        input: "Nose tip has forward movable fins, cold gas attitude control thrusters, header tanks for landing",
        output: {musk: 1}
    }, {
        input: "Yes. Theres a huge amount of hardware in the tip of the faring that being integrated on the ground",
        output: {musk: 1}
    }, {
        input: "Adding the rear moving fins to Starship Mk1 in Boca Chica, Texas",
        output: {musk: 1}
    },/*{
        input: "Thanks!",
        output: {musk: 1}
    }, */{
        input: "Either way, sustainable energy wins!!",
        output: {musk: 1}
    },/* {
        input: "srsly",
        output: {musk: 1}
    }, {
        input: "Its my glasses",
        output: {musk: 1}
    }, */{
        input: "Sure. Have to do it on Mars from beginning. Will ultimately do that on Earth",
        output: {musk: 1}
    }, {
        input: "This is coming Next quarter",
        output: {musk: 1}
    }, {
        input: "Will discuss with my product team next week, but probably",
        output: {musk: 1}
    },{
        input: "Great work by SpaceX parachute engineering! The Crew Dragon parachutes are way more difficult than they",
        output: {musk: 1}
    }, {
        input: "When something is important enough, you do it even if the odds are not in your favor.",
        output: {musk: 1}
    }, {
        input: "Persistence is very important. You should not give up unless you are forced to give up.",
        output: {musk: 1}
    }, {
        input: "Failure is an option here. If things are not failing, you are not innovating enough.",
        output: {musk: 1}
    }, {
        input: "Optimism, pessimism, f..ck that we’re going to make it happen.",
        output: {musk: 1}
    }, {
        input: "It’s OK to have your eggs in one basket as long as you control what happens to that basket.",
        output: {musk: 1}
    }, {
        input: "You want to have a future where you’re expecting things to be better, not one where you’re expecting things to be worse.",
        output: {musk: 1}
    }, {
        input: "I could either watch it happen or be a part of it.",
        output: {musk: 1}
    }, {
        input: "My biggest mistake is probably weighing too much on someone’s talent and not someone’s personality. I think it matters whether someone has a good heart",
        output: {musk: 1}
    }, {
        input: "You want to have a future where you’re expecting things to be better, not one where you’re expecting things to be worse.",
        output: {musk: 1}
    }, {
        input: "You have to be pretty driven to make it happen. Otherwise, you will just make yourself miserable.",
        output: {musk: 1}
    }, {
        input: "If something’s important enough, you should try. Even if the probable outcome is failure.",
        output: {musk: 1}
    }, {
        input: "Life is too short for long term grudges.",
        output: {musk: 1}
    }, {
        input: "You shouldn’t do things differently just because they’re different. They need to be.. better.",
        output: {musk: 1}
    }, { //------------------------------------------------------------------------------------------- Donald Trump
        input: "So true, thank you!",
        output: {trump: 1}
    }, {
        input: "THE SYSTEM IS RIGGED!",
        output: {trump: 1}
    },{
        input: "Thank you! #AmericaFirst",
        output: {trump: 1}
    }, {
        input: "If I become the next POTUS they will not be ignoring! #AmericaFirst",
        output: {trump: 1}
    }, {
        input: "#AmericaFirst #ImWithYou #trumpForYou #ImTheBest",
        output: {trump: 1}
    }, {
        input: "Thank you for your support! We will MAKE AMERICA SAFE AND GREAT AGAIN! #ImWithYou #AmericaFirst",
        output: {trump: 1}
    }, {
        input: "Unemployment claims are at the lowest level since 1973. Much of this has to do with the massive cutting of unnecessary and job killing Regulations!",
        output: {trump: 1}
    }, {
        input: "So true Wayne, and Lowest black unemployment in history!",
        output: {trump: 1}
    }, {
        input: "Thank you to the great men and women of the United States SecretService for a job well done!",
        output: {trump: 1}
    }, {
        input: "My whole life is about winning. I don't lose often. I almost never lose.",
        output: {trump: 1}
    }, {
        input: "American will start winning again, winning like never before.",
        output: {trump: 1}
    }, {
        input: "Crooked Hillary Clinton mentioned me 22 times in her very long and very boring speech. Many of her statements were lies and fabrications!",
        output: {trump: 1}
    }, {
        input: "CAMPAIGN STATEMENT is coming for you",
        output: {trump: 1}
    }, {
        input: "Two policemen just shot in San Diego one dead. It is only getting worse. People want LAW AND ORDER!",
        output: {trump: 1}
    }, {
        input: "No one has worse judgement than Hillary Clinton corruption and devastation follows her wherever she goes.",
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
        input: "Great to be back in Iowa! #TBT with JerryJrFalwell joining me in Davenport- this past winter. #MAGA",
        output: {trump: 1}
    }, {
        input: "Median household income is down for the middle class since Obama took office. It will only go further down under Clinton.",
        output: {trump: 1}
    }, {
        input: "A vote for Clinton-Kaine is a vote for TPP NAFTA high taxes radical regulation and massive influx of refugees.",
        output: {trump: 1}
    }, {
        input: "AMERICA'S FUTURE is all that matters",
        output: {trump: 1}
    }, {
        input: "Donald Trump Sees 17-Point Positive Swing in Two Weeks, Breitbart @realdonaldtrump Great!",
        output: {trump: 1}
    }, {
        input: "Good morning! Join me in Lima Ohio, tomorrow evening at 7pm. #MAGA Tickets",
        output: {trump: 1}
    }, {
        input: "Obama Refers to Himself 119 Times During Hillary Nominating Speech...",
        output: {trump: 1}
    }, {
        input: "President Obama spoke last night about a world that doesnt exist. 70% of the people think our country is going in the wrong direction. #DNC",
        output: {trump: 1}
    }, {
        input: "stay the course mr trump your message is resonating with the PEOPLE",
        output: {trump: 1}
    }, {
        input: "Barack is offended that @realDonaldTrump will demand that #NATO allies pay their fair share. #DemsInPhilly",
        output: {trump: 1}
    }, {
        input: "Our country does not feel 'great already' to the millions of wonderful people living in poverty violence and despair.",
        output: {trump: 1}
    }, {
        input: "Shooting deaths of police officers up 78% this year. We must restore law and order and protect our great law enforcement officers!",
        output: {trump: 1}
    }, {
        input: "Join me live in Toledo Ohio! #MakeAmericaGreatAgain",
        output: {trump: 1}
    }, {
        input: "Thank you Pennsylvania! #MakeAmericaGreatAgain",
        output: {trump: 1}
    }, {
        input: "Thank you to our amazing law enforcement officers! #MAGA",
        output: {trump: 1}
    }, {
        input: "Trump right: Illegal families crossing border set to double 51152 so far",
        output: {trump: 1}
    }, {
        input: "Great new poll - thank you! #MakeAmericaGreatAgain",
        output: {trump: 1}
    }, {
        input: "If Russia or any other country or person has Hillary Clinton's 33000 illegally deleted emails perhaps they should share them with the FBI!",
        output: {trump: 1}
    }, {
        input: "Join our next Vice President @Mike_Pence in Wisconsin tonight Michigan Thursday!",
        output: {trump: 1}
    }, {
        input: "I have a great relationship with the blacks.",
        output: {trump: 1}
    }, {
        input: "I will build a great wall and nobody builds walls better than me, believe me",
        output: {trump: 1}
    }, {
        input: "I will build a great wall",
        output: {trump: 1}
    },  {
         input: "building walls is the best what i can do",
         output: {trump: 1}
     }, {
        input: "The beauty of me is that I'm very rich.",
        output: {trump: 1}
    }, {
        input: "It's freezing and snowing in New York, we need global warming!",
        output: {trump: 1}
    }, {
        input: "Our country is in serious trouble. We don't have any victories anymore. We used to have victories, but we don't have them. When was the last time anybody saw us beating, let's say China, in a trade deal? I beat China all the time. All the time.",
        output: {trump: 1}
    }, {
        input: "I just start kissing them. It’s like a magnet. Just kiss. I don’t even wait. And when you’re a star, they let you do it. You can do anything. Grab them by the pussy. You can do anything",
        output: {trump: 1}
    }, {
        input: "You know, it really doesn't matter what the media write, as long as you've got a young and beautiful piece of ass.",
        output: {trump: 1}
    }, {
        input: "I've said if Ivanka weren't my daughter, perhaps I'd be dating her",
        output: {trump: 1}
    }, {
        input: "We have a 5 billion dollar website. I have so many websites. I have them all over the place... I hire people... it costs me three dollars.",
        output: {trump: 1}
    }, {
        input: "All of the women on The Apprentice flirted with me, consciously or unconsciously. That's to be expected.",
        output: {trump: 1}
    }, {
        input: "My Twitter has become so powerful that I can actually make my enemies tell the truth.",
        output: {trump: 1}
    }, {
        input: "They had a person who was extremely proud that a number of the women had become doctors. And I wasn't interested",
        output: {trump: 1}
    }, {
        input: "I will be the greatest jobs president that God ever created.",
        output: {trump: 1}
    }, {
        input: "I'm their worst nightmare of all time.",
        output: {trump: 1}
    }, {
        input: "Ariana Huffington is unattractive both inside and out. I fully understand why her former husband left her for a man, he made a good decision.",
        output: {trump: 1}
    }, {
        input: "When Mexico sends its people, they're not sending the best. They're not sending you, they're sending people that have lots of problems and they're bringing those problems. They're bringing drugs, they're bringing crime.",
        output: {trump: 1}
    }, {
        input: "My fingers are long and beautiful, as, it has been well documented, are various other parts of my body.",
        output: {trump: 1}
    }, {
        input: "I take advantage of the laws of the nation. Because I'm running a company.",
        output: {trump: 1}
    }, {
        input: "I did try and fuck her... I moved on her like a bitch, but I couldn’t get there. And she was married.",
        output: {trump: 1}
    }, {
        input: "I Have never seen a thin person drinking Diet Coke.",
        output: {trump: 1}
    }, {
        input: "Our great African-American President hasn't exactly had a positive impact on the thugs who are so happily and openly destroying Baltimore!",
        output: {trump: 1}
    }, {
        input: "I think the only difference between me and the other candidates is that I'm more honest and my women are more beautiful.",
        output: {trump: 1}
    }, {
        input: "I'm proud of my net worth; I've done an amazing job.. The total is $8,737,540,000 USD. I'm not doing that to brag, because you know what, I don't have to brag.",
        output: {trump: 1}
    }, {
        input: "I'm not a schmuck. Even if the world is going to hell in a hand-basket, I won't lose a penny.",
        output: {trump: 1}
    }, {
        input: "What is it at 35? It's called check-out time.",
        output: {trump: 1}
    }, {
        input: "You are fake news!! thats not true",
        output: {trump: 1}
    }, {
        input: "that's fake news, not more",
        output: {trump: 1}
    }, { //------------------------------------------------------------------------------------------- Barack Obama
        input: "If you're walking down the right path and you're willing to keep walking, eventually you'll make progress.",
        output: {obama: 1}
    }, {
        input: "Issues are never simple. One thing I'm proud of is that very rarely will you hear me simplify the issues.",
        output: {obama: 1}
    }, {
        input: "If the people cannot trust their government to do the job for which it exists - to protect them and to promote their common welfare all else is lost.",
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
    }, {
        input: "Vice President Biden speaks on the dangerous precedent Senate leaders are setting by refusing to do their jobs.",
        output: {obama: 1}
    }, {
        input: "These are records we cant keep breaking. We must work together to #ActOnClimate.",
        output: {obama: 1}
    }, {
        input: "Meaningful action on climate change cant wait. President Obama explains why in this @nytimes interview.",
        output: {obama: 1}
    }, {
        input: "We need to keep up efforts to fight climate change at every level locally, nationally, globally. #ActOnClimate",
        output: {obama: 1}
    }, {
        input: "RT @FactsOnClimate: BREAKING: A new strategy to harness the power of wind means more jobs, less pollution:",
        output: {obama: 1}
    }, {
        input: "Senate leaders are back in session. Keep the pressure high call out their obstructionism. #DoYourJob",
        output: {obama: 1}
    }, {
        input: "Theres no need to overcomplicate the process. #DoYourJob",
        output: {obama: 1}
    }, {
        input: "We must take bold steps now climate change is already impacting millions of people. #ActOnClimate",
        output: {obama: 1}
    }, {
        input: "In every scene, you are my star, @MichelleObama! Happy birthday, baby!",
        output: {obama: 1}
    }, {
        input: "Glad to see American Factorys Oscar nod for Best Documentary. Its the kind of story we dont see often enough and",
        output: {obama: 1}
    }, {
        input: "Our fellow Americans in Puerto Rico can use our support after this weeks earthquakes. Theyve shown their enduring",
        output: {obama: 1}
    }, {
        input: "Heres the thing: Even with problems of this magnitude, each of us can still find a way to make change. Thats why",
        output: {obama: 1}
    }, {
        input: "The catastrophic fires in Australia are the latest example of the very real and very urgent consequences of climate",
        output: {obama: 1}
    }, {
        input: "With David Sterns passing, Im reflecting on everything he did to take the NBA global, creating entire new generat",
        output: {obama: 1}
    }, {
        input: "Heres to a happy, healthy, and hopeful 2020. Happy New Year, everybody!",
        output: {obama: 1}
    }, {
        input: "From hip-hop to country to The Boss, here are my songs of the year. If youre looking for something to keep you com",
        output: {obama: 1}
    }, {
        input: "If theres one thing I love about @RepJohnLewis, its his incomparable will to fight. I know hes got a lot more of",
        output: {obama: 1}
    }, {
        input: "Next up are my favorite movies and TV shows of 2019. Of course, theres also American Factory, a film from our own",
        output: {obama: 1}
    }, {
        input: "As we wind down 2019, I wanted to share with you my annual list of favorites that made the last year a little bright",
        output: {obama: 1}
    }, {
        input: "From the Obama family to yours, Merry Christmas!",
        output: {obama: 1}
    }, {
        input: "On behalf of my family, Chag Sameach and Happy Hanukkah! As Jews around the world celebrate, let the menorahs light",
        output: {obama: 1}
    }, {
        input: "2019 was full of moments that show humanity at its best compassionate, entrepreneurial, determined. And yes, hopefull",
        output: {obama: 1}
    }, {
        input: "RT @ObamaFoundation: #ObamaLeaders convened 200 inspiring change makers from across the Asia Pacific. Take a look at their week in Kuala Lum",
        output: {obama: 1}
    }, {
        input: "RT @GetUSCovered: Did you miss your chance to #GetCovered with affordable health coverage at? Well youre in luck",
        output: {obama: 1}
    }, {
        input: "You can get the zen garden next week, but tomorrow is the last day to sign up for health coverage at",
        output: {obama: 1}
    }, {
        input: "It was remarkable to be back in the Asia-Pacific region with my sister this week, joined by hundreds of talented an",
        output: {obama: 1}
    }, {
        input: "My sister Maya and I are about to take the stage at @ObamaFoundation Leaders: Asia-Pacific. Well be talking about",
        output: {obama: 1}
    }, {
        input: "Julia Roberts, Deborah Henry, and I are about to take the stage at #ObamaLeaders: Asia-Pacific to reflect on our visit t",
        output: {obama: 1}
    }, {
        input: "I thought it was about time I share my holiday gift list  a few practical items, all $10 or less. The best one? He",
        output: {obama: 1}
    }, {
        input: "In Vietnam I had the chance to sit down with some of our @ObamaFoundation leaders and alumni from across the Asia P",
        output: {obama: 1}
    }, {
        input: "What an incredible day in Vietnam with members of the @GirlsAlliance community! Take a look at our visit to Cn Giuc h",
        output: {obama: 1}
    }, {
        input: "Because of Paul Volcker, our financial system is stronger and safer for the American people. Ill remember Paul for",
        output: {obama: 1}
    }, {
        input: "Before arguing with friends or family around the Thanksgiving table, take a look at the science behind arguing bett",
        output: {obama: 1}
    }, {
        input: "Take a look at this piece to understand the very real consequences of gerrymandering. In Asheville, NC, we see what",
        output: {obama: 1}
    }, {
        input: "Young leaders like these are powering the promise of the Asia Pacific region. Michelle and I couldnt be more impre",
        output: {obama: 1}
    }, {
        input: "Proud to see Oluwaseun @AyodejiOsowobi in this list. Shes an @ObamaFoundation Leader whos organizing young people",
        output: {obama: 1}
    },{
        input: "This Veterans Day, heres a moving portrait of the extraordinary resilience of my friend Cory Remsburg, an Army Ran",
        output: {obama: 1}
    }, {
        input: "Proud of all the Americans who showed up to vote yesterday, electing a set of hopeful, forward-thinking leaders price",
        output: {obama: 1}
    }, {
        input: "Todays the first day of open enrollment on, and high-quality coverage might be more afford",
        output: {obama: 1}
    }, {
        input: "Happy #DayoftheGirl! Im excited to share that in December, Ill be visiting Vietnam to meet some of the inspiring girls",
        output: {obama: 1}
    }, {
        input: "Heres an interesting reada reminder that behind every opinion lies a human being with real experiences and a story",
        output: {obama: 1}
    }, {
        input: "As President, I leaned on experience, expertise, and willingness to tell me what I needed to hear",
        output: {obama: 1}
    }, {
        input: "Like the Beatles said: Its getting better all the time. Thanks, babe for 27 amazing years!",
        output: {obama: 1}
    }, {
        input: "On National Voter Registration Day, its up to us as citizens to make sure everyone we know can make their voices",
        output: {obama: 1}
    }, {
        input: "One challenge will define the future for todays young generation more dramatically than any other: Climate change.",
        output: {obama: 1}
    }, {
        input: "Jermaine Bell is just six years old, but when he saw people in need, he took the money hed been saving for a trip",
        output: {obama: 1}
    }, {
        input: "Bahamian families and communities face a long recovery from Hurricane Dorian. And Americans are reaching out",
        output: {obama: 1}
    }, {
        input: "With summer winding down, heres a sampling of what Michelle and I have been listening to some new, some old",
        output: {obama: 1}
    }, {
        input: "A good story gives you the chance to better understand someone elses life. It can help you find common ground.",
        output: {obama: 1}
    }, {
        input: "Leaders: Africa may have ended, but 200 inspiring #ObamaLeaders returned to their homes with the new connections",
        output: {obama: 1}
    }, {
        input: "Don’t let the noise of others’ opinions drown out your own inner voice.",
        output: {jobs: 1}
    }, {
        input: "Your time is limited, so don’t waste it living someone else’s life.",
        output: {jobs: 1}
    }, {
        input: "Have the courage to follow your heart and intuition. They somehow already know what you truly want to become.",
        output: {jobs: 1}
    }, {
        input: "Stay hungry and Stay foolish.",
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
        input: "Details matter, it’s worth waiting to get it right.",
        output: {jobs: 1}
    }, {
        input: "Get closer than ever to your customers. So close that you tell them what they need well before they realize it themselves.",
        output: {jobs: 1}
    }, {
        input: "The doers are the major thinkers. The people that really create the things that change this industry are both the thinker and doer in one person.",
        output: {jobs: 1}
    }, {
        input: "I’m actually as proud of many of the things we haven’t done as the things we have done.",
        output: {jobs: 1}
    }, {
        input: "In the broadest context, the goal is to seek enlightenment – however you define it.",
        output: {jobs: 1}
    }, {
        input: "You have to believe that the dots will somehow connect in your future.",
        output: {jobs: 1}
    }, {
        input: "If you don’t love it, you’re going to fail.",
        output: {jobs: 1}
    }, {
        input: "The products suck! There’s no sex in them anymore!",
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
        input: "The products suck! There’s no sex in them anymore!",
        output: {jobs: 1}
    }, {
        input: "For you to sleep well at night, the aesthetic, the quality, has to be carried all the way through.",
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
    },{
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
    }, {
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
        input: "Have the courage to follow your heart and intuition. They somehow know what you truly want to become.",
        output: {jobs: 1}
    }, {
        input: "Quality is more important than quantity. One home run is much better than two doubles.",
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
        input: "Things don’t have to change the world to be important.",
        output: {jobs: 1}
    }, {
        input: "Technology is nothing. What’s important is that you have a faith in people, that they’re basically good and smart, and if you give them tools, they’ll do wonderful things with them.",
        output: {jobs: 1}
    }, {
        input: "I’ve always been attracted to the more revolutionary changes. I don’t know why. Because they’re harder. They’re much more stressful emotionally.",
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
    }, {
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
    },{
        input: "You’ve got to start with the customer experience and work back toward the technology – not the other way around.",
        output: {jobs: 1}
    }, {
        input: "Well Walla, stirb, wie Du gelebt hast!",
        output: {expanse: 1}
    }, {
        input: "It’s better to go down swinging than rolling over.",
        output: {expanse: 1}
    }, {
        input: "Dock Master: Hat die Dame Ärger am Hals? Joe Miller: Keinen, mit dem sie nicht fertig wird.",
        output: {expanse: 1}
    }, {
        input: "Earthers have a home. It’s time Belters had one, too.",
        output: {expanse: 1}
    }, {
        input: "Das ist kein Muttermal, das ist eine Narbe und sie will sie behalten... als Symbol des aufbgehrens gegen alles, was sie nicht sein will.",
        output: {expanse: 1}
    }, {
        input: "A kid needs at least one person who never gives up on them, no matter what.",
        output: {expanse: 1}
    }, {
        input: "Schon seit über 100 Jahren behandeln Erde und Mars die Gürtler wie Sklaven und ich wollte nicht die Peitsche sein.",
        output: {expanse: 1}
    }, {
        input: "Cold war is a bloodless war. Mutual distrust and complete co-dependence.",
        output: {expanse: 1}
    }, {
        input: "Guilt is like salt. You put a little on, and it hides all the bitterness.",
        output: {expanse: 1}
    }, {
        input: "Wenn wir uns wie Tiere aufführen, stärkt sie das nur in ihrem Glauben, dass wir das auch sind.",
        output: {expanse: 1}
    }, {
        input: "Ich verurteile Sie nicht, ich würde nur gerne wissen, was Ihre Dienste kosten.",
        output: {expanse: 1}
    }, {
        input: "Sind Sie der Schutzpatron der hoffnungslosen Fälle? Mir kommen gleich die Tränen.",
        output: {expanse: 1}
    }, {
        input: "Weißt Du, was das beste am Mars ist? Dass sie da noch träumen.",
        output: {expanse: 1}
    }, {
        input: "Cpt. Theresa Yao: Sie wirken nervös? Jim Holden: Ist so ne Angewohnheit, wenn ich beschossen werde.",
        output: {expanse: 1}
    }, {
        input: "Die Vergangenheit organisierter Religionen ist auch nicht gerade konfliktfrei.",
        output: {expanse: 1}
    }, {
        input: "Ich brauche mehr Details zu diesem Puzzle.",
        output: {expanse: 1}
    }, {
        input: "Mit jedem Mal, wenn man sich erinnert, verändern sich Deine Erinnerungen ein bischen. Bis Deine schönsten und schlimmst Erinnerungen Deine größten Illusionen sind.",
        output: {expanse: 1}
    }, {
        input: "Es ist ok ein Bauer auf dem Schlachtfeld zu sein, wenn man auf der richtigen Seite steht.",
        output: {expanse: 1}
    }, {
        input: "Octavia Muss: Wonach riecht's denn hier? Joe Miller: Das Zeug heißt Kaffee.",
        output: {expanse: 1}
    }, {
        input: "Ich werde meine verbliebenen Gehirnzellen nutzen um meine verbliebenen Gehirnzellen zu töten.",
        output: {expanse: 1}
    }, {
        input: "Es sei denn, Sie haben ne bessere schlechte Idee.",
        output: {expanse: 1}
    }, {
        input: "Jim Holden: Ja, n paar Dinge sind zur Zeit im Fluss. Praxideke Meng: Die einzige Konstante in der Natur: Veränderung.",
        output: {expanse: 1}
    }, {
        input: "Ich werde meine verbliebenen Gehirnzellen nutzen um meine verbliebenen Gehirnzellen zu töten.",
        output: {expanse: 1}
    }, {
        input: "Es sei denn, Sie haben ne bessere schlechte Idee.",
        output: {expanse: 1}
    }, {
        input: "Wars Aren’t Meant To Be Won",
        output: {robot: 1}
    }, {
        input: "Maybe wars aren’t meant to be won, maybe they’re meant to be continuous.",
        output: {robot: 1}
    }, {
        input: "We’re all living in each other’s paranoia.",
        output: {robot: 1}
    }, {
        input: "I’m good at reading people. My secret? I look for the worst in them.",
        output: {robot: 1}
    }, {
        input: "I do see the beauty in the rules, the invisible code of chaos hiding behind the menacing face of order.",
        output: {robot: 1}
    }, {
        input: "I’ve never found it hard to hack most people. If you listen to them, watch them, their vulnerabilities are like a neon sign screwed into their heads.",
        output: {robot: 1}
    }, {
        input: "I never want to be right about my hacks, but people always find a way to disappoint.",
        output: {robot: 1}
    }, {
        input: "It's one thing to question your mind; it's another to question your eyes and ears. But, then again, isn't it all the same? ",
        output: {robot: 1}
    }, {
        input: "Do other people see things the same way you do? Is everyone just making their own best guesses about situations, and often times, our views are all completely different?",
        output: {robot: 1}
    }, {
        input: "Annihilation is always the answer. We destroy parts of ourselves every day. We Photoshop our warts away.",
        output: {robot: 1}
    }, {
        input: "We edit the parts we hate about ourselves, modify the parts we think people hate. We curate our identity, carve it, distill it. Krista's wrong. Annihilation is all we are.",
        output: {robot: 1}
    }, {
        input: "Control can sometimes be an illusion. But sometimes you need illusions to gain control. Fantasy is an easy way to give meaning to the world. ",
        output: {robot: 1}
    }, {
        input: "The world itself's just one big hoax. Spamming each other with our running commentary of bullshit, masquerading as insight, our social media faking as intimacy. Or is it that we voted for this?",
        output: {robot: 1}
    }, {
        input: "I just wanted to save the world.",
        output: {robot: 1}
    }, {
        input: "When we lose our principles, we invite chaos.",
        output: {robot: 1}
    }, {
        input: "The concept of waiting bewilders me. There are always deadlines. There are always ticking clocks. That is why you must manage your time.",
        output: {robot: 1}
    }, {
        input: "It’s good. So good, it scratched that part of my mind. The part that doesn’t allow good to exist without a condition",
        output: {robot: 1}
    }, {
        input: "They will die in debt for things they didn’t want to do.",
        output: {robot: 1}
    }, {
        input: "Unfortunately, we’re all human. Except me, of course",
        output: {robot: 1}
    }, {
        input: "Getting into the mind of a woman, it’s the toughest route for even the best sources",
        output: {robot: 1}
    }, {
        input: "Most kids get scared shitless when they’re alone, but I wasn’t. I loved it.",
        output: {robot: 1}
    }, {
        input: "I never want to be right about my hacks, but people always find a way to disappoint.",
        output: {robot: 1}
    }, {
        input: "I’m gonna fix the world I broke, and put it back together better than it was before.",
        output: {robot: 1}
    }, {
        input: "Don’t mistake my generosity for generosity.",
        output: {robot: 1}
    }, {
        input: "When you see a good move, look for a better one.",
        output: {robot: 1}
    }, {
        input: "A bug is never just a mistake. It represents something bigger. An error of thinking that makes you who you are.",
        output: {robot: 1}
    }, {
        input: "Power belongs to the people that take it. Nothing to do with their hard work, strong ambitions, or rightful qualifications, no.",
        output: {robot: 1}
    }, {
        input: "Give a man a gun and he can rob a bank, but give a man a bank, and he can rob the world.",
        output: {robot: 1}
    }, {
        input: "I believe in fate. There’s a reason we met. There’s something between us. I can see it.",
        output: {robot: 1}
    }
];

module.exports.trainingData = trainingData;



