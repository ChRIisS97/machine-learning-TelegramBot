const trainingData = [
    {
        input: "So true, thank you!",
        output: {trump: 1}
    }, {
        input: "The first step is to establish that something is possible; then probability will occur.",
        output: {musk: 1}
    }, {
        input: "We're going to make it happen. As God is my bloody witness, I'm hell-bent on making it work.",
        output: {musk: 1}
    }, {
        input: "If you go back a few hundred years, what we take for granted today would seem like magic-being able to talk to w hundred years ago.",
        output: {musk: 1}
    }, {
        input: "It's OK to have your eggs in one basket as long as you control what happens to that basket.",
        output: {musk: 1}
    }, {
        input: "Persistence is very important. You should not give up unless you are forced to give up.",
        output: {musk: 1}
    }, {
        input: "When Henry Ford made cheap, reliable cars, people said, 'Nah, what's wrong with a horse?' That was a huge bet he made, and it worked.",
        output: {musk: 1}
    }, {
        input: "There have to be reasons that you get up in the morning and you want to live. Why do you want to live? What's ing a multi-planet species, I find that incredibly depressing.",
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
        input: "I don't spend my time pontificating about high-concept things; I spend my time solving engineering and manufacturing problems.",
        output: {musk: 1}
    }, {
        input: "My biggest mistake is probably weighing too much on someone's talent and not someone's personality. I think it matters whether someone has a good heart.",
        output: {musk: 1}
    }, {
        input: "I don't create companies for the sake of creating companies, but to get things done.",
        output: {musk: 1}
    }, {
        input: "The first step is to establish that something is possible; then probability will occur.",
        output: {musk: 1}
    }, {
        input: 'Best place to view is from the beach. Excitement guaranteed!',
        output: {musk: 1}
    }, {
        input: 'Dragon Spacecraft supersonic abort test coming up either tomorrow or Sunday, depending on weather @NASA @SpaceX',
        output: {musk: 1}
    }, {
        input: 'RT @NASA: LIVE NOW: Hear from mission experts as they talk about @SpaceXs In-Flight Abort Test. The test will demonstrate #CrewDragons ab',
        output: {musk: 1}
    }, {
        input: "If you go back a few hundred years, what we take for granted today would seem like magic-being able to talk to pethings that would have been considered magic a few hundred years ago.",
        output: {musk: 1}
    }, {
        input: 'Could do it, but we developed low cost reusable tiles that are much lighter than tra',
        output: {musk: 1}
    }, {
        input: 'Better just to ride your max temp all the way down &amp; let T^4 be your friend. Lower atmosphere cools',
        output: {musk: 1}
    }, {
        input: 'Exactly. For reusable heatshield, minimize peak heating. For ablative/expendable, minimize total heat. There',
        output: {musk: 1}
    }, {
        input: ' It does actually generate lift in hypersonic regime, which is important to limit peak heating',
        output: {musk: 1}
    }, {
        input: 'Many powerful electric motors &amp; batteries. Force required is enormous, as entire fin moves',
        output: {musk: 1}
    }, {
        input: ' Thats correct. Essentially controlled falling, like a skydiver.',
        output: {musk: 1}
    }, {
        input: ' does she ever ask you what youre thinking and you say nothing but youre actually thinking about whether Tesla secretly emplo',
        output: {musk: 1}
    }, {
        input: 'Herbert Diess is doing more than any big carmaker to go electric. The good of the world should come first',
        output: {musk: 1}
    }, {
        input: 'Just sent a note to check',
        output: {musk: 1}
    }, {
        input: 'Some secrets are too dangerous to be free',
        output: {musk: 1}
    }, {
        input: 'Between the trees and the forest floor, its like a giant mural, continued the veritable High Priest of',
        output: {musk: 1}
    }, {
        input: 'Hoping to open in Slovakia, Croatia, Serbia &amp; most of Eastern Europe',
        output: {musk: 1}
    }, {
        input: 'Tesla OG Roadster is def helping us out here with 826M miles by itself',
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
    }, {
        input: 'My Twitter has become so powerful that I can actually make my enemies tell the truth.',
        output: {trump: 1}
    }, {
        input: 'Bottom half of Starship at night. Top half with forward fins &amp; header tanks probably stacks on Wednesday. Three Rap',
        output: {musk: 1}
    },{
        input: 'Ive said if Ivanka werent my daughter, perhaps Id be dating her',
        output: {trump: 1}
    }, {
        input: 'You know, it really doesnt matter what the media write, as long as youve got a young and beautiful piece of ass.',
        output: {trump: 1}
    }, {
        input: 'Its freezing and snowing in New York, we need global warming!',
        output: {trump: 1}
    }, {
        input: 'The beauty of me is that Im very rich.',
        output: {trump: 1}
    }, {
        input: 'I will build a great wall and nobody builds walls better than me, believe me',
        output: {trump: 1}
    }, {
        input: 'I have a great relationship with the blacks',
        output: {trump: 1}
    }, {
        input: 'Thank you Pennsylvania! #MakeAmericaGreatAgain',
        output: {trump: 1}
    }, {
        input: 'Hillary will never reform Wall Street. She is owned by Wall Street',
        output: {trump: 1}
    }, {
        input: "thats fake, your fake",
        output: {trump: 1}
    }, {
        input: "thats all fake news ",
        output: {trump: 1}
    }, {
        input: "you are fake news, buddy!",
        output: {trump: 1}
    },  {
        input: "your so fake, that's tremendous fake",
        output: {trump: 1}
    },{
        input: "American will start winning again, winning like never before.",
        output: {trump: 1}
    },{
        input: "'Congressman Schiff omitted and distorted key facts' @FoxNews  So, what else is new. He is a total phony!",
        output: {trump: 1}
    }, {
        input: "thats not true, you are fake news",
        output: {trump: 1}
    }, {
        input: "Hillary Clinton’s Presidency would be catastrophic for the future of our country. She is ill-fit with bad judgment.",
        output: {trump: 1}
    }, {
        input: "THE SYSTEM IS RIGGED!",
        output: {trump: 1}
    }, {
        input: "I will be interviewed by @JudgeJeanine on @FoxNews at 9:00 P.M. Enjoy!",
        output: {trump: 1}
    }, {
        input: "Thank you! #AmericaFirst",
        output: {trump: 1}
    }, {
        input: "If I become the next POTUS- they will not be ignoring! #AmericaFirst",
        output: {trump: 1}
    }, {
        input: "#AmericaFirst #ImWithYou",
        output: {trump: 1}
    }, {
        input: "Dem Memo: FBI did not disclose who the clients were - the Clinton Campaign and the DNC. Wow!",
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
        input: "Crooked Hillary Clinton mentioned me 22 times in her very long and very boring speech. Many of her statements were lies and fabrications!",
        output: {trump: 1}
    }, {
        input: "Join @mike_pence at the University of Northwestern Ohio- tonight at 7pm. Tickets under...",
        output: {trump: 1}
    }, {
        input: "I believe in science Dem code for we're shutting down coal mines steel plants and any other remaining manufacturing",
        output: {trump: 1}
    }, {
        input: "American will start winning again, winning like never before.",
        output: {trump: 1}
    },{
        input: "I Have never seen a thin person drinking Diet Coke.",
        output: {trump: 1}
    }, {
        input: "Thank you to the great men and women of the United States @SecretService for a job well done!",
        output: {trump: 1}
    }, {
        input: "I will be the greatest jobs president that God ever created.",
        output: {trump: 1}
    }, {
        input: "I'm their worst nightmare. keep that",
        output: {trump: 1}
    },  {
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
    },  {                //------------------------------------------------------------------------------------------- Barack Obama
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
        input: "The best way to not feel hopeless is to get up and do something. Don’t wait for good things to happen to you. If ll the world with hope, you will fill yourself with hope.",
        output: {obama: 1}
    }, {
        input: "A change is brought about because ordinary people do extraordinary things.",
        output: {obama: 1}
    }, {
        input: 'Vice President Biden speaks on the ""dangerous precedent"" Senate leaders are setting by refusing to do their jobs.',
        output: {obama: 1}
    }, {
        input: 'These are records we cant keep breaking. We must work together to #ActOnClimate.',
        output: {obama: 1}
    }, {
        input: 'From the Obama family to yours, Merry Christmas!',
        output: {obama: 1}
    }, {
        input: 'Issues are never simple. One thing Im proud of is that very rarely will you hear me simplify the issues.',
        output: {obama: 1}
    },  {
        input: 'If you\'re walking down the right path and you\'re willing to keep walking, eventually you\'ll make progress.',
        output: {obama: 1}
    }, {
        input: 'My fellow Americans, we are and always will be a nation of immigrants. We were strangers once, too.',
        output: {obama: 1}
    }, {
        input: 'The future rewards those who press on. I don\'t have time to feel sorry for myself. I don\'t have time to complain. I\'m going to press on.',
        output: {obama: 1}
    }, {
        input: 'Change will not come if we wait for some other person or some other time. We are the ones we\'ve been waiting for. We are the change that we seek.',
        output: {obama: 1}
    },{
        input: "No one is pro-abortion.",
        output: {obama: 1}
    }, {
        input: "We can't drive our SUVs and eat as much as we want and keep our homes on 72 degrees at all times... and then just expect that other countries are going to say OK. That's not leadership. That's not going to happen.",
        output: {obama: 1}
    }, {
        input: "I think when you spread the wealth around it's good for everybody.",
        output: {obama: 1}
    }, {
        input: "The role of citizen in a democracy does not end with your vote.",
        output: {obama: 1}
    }, {
        input: "Money is not the only answer, but it makes a difference.",
        output: {obama: 1}
    }, {
        input: "The thing about Hip-Hop today is it’s smart, it’s insightful. The way they can communicate a complex message in a very short space is remarkable.",
        output: {obama: 1}
    }, {
        input: "Americans still believe in an America where anything’s possible – they just don’t think their leaders do.",
        output: {obama: 1}
    }, {
        input: "What we need in Washington is not more political tactics – we need more good ideas",
        output: {obama: 1}
    }, {
        input: "Those who have the privilege to serve this country have an obligation to do our job as best we can… that’s why disagreement cannot mean dysfunction",
        output: {obama: 1}
    }, {
        input: "I don’t want to pit Red America against Blue America – I want to be President of the United States of America.",
        output: {obama: 1}
    }, {
        input: "Hope is the bedrock of this nation; the belief that our destiny will not be written for us, but by us.",
        output: {obama: 1}
    }, {
        input: "You can’t let your failures define you – you have to let them teach you. You have to let them show you what to do differently next time.",
        output: {obama: 1}
    }, {
        input: "What Washington needs is adult supervision.",
        output: {obama: 1}
    }, {
        input: "Some things are beyond my control. For example, this whole controversy about Jay-Z going to Cuba, it’s unbelievable! I’ve got 99 problems, now Jay-Z is one.",
        output: {obama: 1}
    }, {
        input: "Now, when you first become president, one of the questions people ask you is, “what’s really going on in Area 51?",
        output: {obama: 1}
    }, {
        input: "Theres not a liberal America and a conservative America, theres the united states of america",
        output: {obama: 1}
    }, {
        input: "The strongest weapon against hateful speech is not repression , it is more speech",
        output: {obama: 1}
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
    }, { //-------------------------------------------------------------------------------------------The expanse
        input: "Well Walla, stirb, wie Du gelebt hast!",
        output: {expanse: 1}
    }, {
        input: "Dock Master: Hat die Dame Ärger am Hals? Joe Miller: Keinen, mit dem sie nicht fertig wird.",
        output: {expanse: 1}
    }, {
        input: "Das ist kein Muttermal, das ist eine Narbe und sie will sie behalten... als Symbol des aufbgehrens gegen alles, was sie nicht sein will.",
        output: {expanse: 1}
    }, {
        input: "Schon seit über 100 Jahren behandeln Erde und Mars die Gürtler wie Sklaven und ich wollte nicht die Peitsche sein.",
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
    },{
        input: "Earthers have a home. It’s time Belters had one, too.",
        output: {expanse: 1}
    },  {
        input: "A kid needs at least one person who never gives up on them, no matter what.",
        output: {expanse: 1}
    }, {
        input: "It’s better to go down swinging than rolling over.",
        output: {expanse: 1}
    }, {
        input: "Wars Aren’t Meant To Be Won",
        output: {robot: 1}
    },{
        input: "Maybe wars aren’t meant to be won, maybe they’re meant to be continuous.",
        output: {robot: 1}
    },{
        input: "We’re all living in each other’s paranoia.",
        output: {robot: 1}
    },{
        input: "I’m good at reading people. My secret? I look for the worst in them.",
        output: {robot: 1}
    },{
        input: "I do see the beauty in the rules, the invisible code of chaos hiding behind the menacing face of order.",
        output: {robot: 1}
    },{
        input: "I’ve never found it hard to hack most people. If you listen to them, watch them, their vulnerabilities are like a neon sign screwed into their heads.",
        output: {robot: 1}
    },{
        input: "I never want to be right about my hacks, but people always find a way to disappoint.",
        output: {robot: 1}
    },{
        input: "It's one thing to question your mind; it's another to question your eyes and ears. But, then again, isn't it all the same? ",
        output: {robot: 1}
    },{
        input: "Do other people see things the same way you do? Is everyone just making their own best guesses about situations, and ofteplain so much of the conflict in the world?",
        output: {robot: 1}
    },{
        input: "Annihilation is always the answer. We destroy parts of ourselves every day. We Photoshop our warts away.",
        output: {robot: 1}
    },{
        input: "We edit the parts we hate about ourselves, modify the parts we think people hate. We curate our identity, carve it, distill it. Krista's wrong. Annihilation is all we are.",
        output: {robot: 1}
    },{
        input: "Control can sometimes be an illusion. But sometimes you need illusions to gain control. Fantasy is an easy way to give meaning to the world. ",
        output: {robot: 1}
    },{
        input: "The world itself's just one big hoax. Spamming each other with our running commentary of bullshit, masquerading as insiggs, our property, our money. I'm not saying anything new. ",
        output: {robot: 1}
    },{
        input: "I wanted to save the world.",
        output: {robot: 1}
    },{
        input: "When we lose our principles, we invite chaos.",
        output: {robot: 1}
    },{
        input: "The concept of waiting bewilders me. There are always deadlines. There are always ticking clocks. That is why you must manage your time.",
        output: {robot: 1}
    },{
        input: "It’s good. So good, it scratched that part of my mind. The part that doesn’t allow good to exist without a condition",
        output: {robot: 1}
    },{
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
