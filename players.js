const players = [
    {
        firstName: `Percy`,
        lastName: `Jackson`,
        heritage: `Son of Poseidon`,
        series: `Percy Jackson and the Olympians, Heroes of Olympus, Trials of Apollo`,
        photo: `imgs//PercyJackson.jpg`,
        badges: [`imgs//pjo.png`, `imgs//hoo.png`, `imgs//toa.png`],
        info: `Percy is the loyal and often sarcastic son of Poseidon.He’s best known for saving Olympus, multiple times, and (unwilling) doing quests for the gods.
Fun fact: He jumped into the equivalent of literal hell after Annabeth was dragged in.`
    },
    {
        firstName: `Annabeth`,
        lastName: `Chase`,
        heritage: `Daughter of Athena`,
        series: `Percy Jackson and the Olympians, Heroes of Olympus`,
        photo: `imgs//AnnabethChase.jpg`,
        badges: [`imgs//pjo.png`, `imgs//hoo.png`],
        info: `Annabeth is a brilliant strategist, daughter of Athena, and scary smart and beautiful girlfriend of Percy Jackson. She’s fearless in battle and determined to succeed .
Fun fact: She re-designed Olympus for it to be rebuilt after the Battle of Manhattan.`
    },
    {
        firstName: `Grover`,
        lastName: `Underwood`,
        heritage: `Saytr, Lord of the Wild`,
        series: `Percy Jackson and the Olympians, Heroes of Olympus Trials of Apollo`,
        photo: `imgs//GroverUnderwood.jpg`,
        badges: [`imgs//pjo.png`, `imgs//hoo.png`, `imgs//toa.png`],
        info: `A satyr with a huge heart, Grover is Percy’s best friend and protector. He's also the Lord of the Wild, chosen by Pan himself.
Fun fact:He once charmed a horde of snakes on the pan pipes and when running out of time, his last resort was to play the song "Stayin' Alive". `
    },
    {
        firstName: `Luke`,
        lastName: `Castellan`,
        heritage: `Son of Hermes, Host of Kronos`,
        series: `Percy Jackson and the Olympians`,
        photo: `imgs//LukeCastellan.jpg`,
        badges: [`imgs//pjo.png`],
        info: `Once a trusted son of Hermes, Luke became the host of Kronos. His story is one of betrayal, redemption, and sacrifice.
Fun fact: Even after hosting Kronos, he went to Annabeth asking to run away together and avoid the gods and his fate before Kronos could fully take over..`
    },
    {
        firstName: `Thalia`,
        lastName: `Grace`,
        heritage: `Daughter of Zeus, Hunter of Artemis`,
        series: `Percy Jackson and the Olympians, Heroes of Olympus, Trials of Apollo`,
        photo: `imgs//ThaliaGrace.jpg`,
        badges: [`imgs//pjo.png`, `imgs//hoo.png`, `imgs//toa.png`],
        info: `Fun fact: She's afraid of heights—despite being the daughter of the sky god!`
    },
    {
        firstName: `Tyson`,
        lastName: ``,
        heritage: `Cyclops Son of Poseidon`,
        series: `Percy Jackson and the Olympians, Heroes of Olympus`,
        photo: `imgs//Tyson.jpg`,
        badges: [`imgs//pjo.png`, `imgs//hoo.png`,],
        info: `Tyson is a sweet, strong Cyclops and Percy's half-brother. Despite being underestimated, he’s a war hero and forge master.
Fun fact: He loves peanut butter and used it as a battle cry.`
    },
    {
        firstName: `Travis and Connor`,
        lastName: `Stoll`,
        heritage: `Son of Hermes`,
        series: `Percy Jackson and the Olympians, Heroes of Olympus, Trials of Apollo`,
        photo: `imgs//StollBrothers.jpg`,
        badges: [`imgs//pjo.png`, `imgs//hoo.png`, `imgs//toa.png`],
        info: `The Stoll brothers are mischievous sons of Hermes and serial pranksters, despite looking like twins they are actually a year apart in age. Fun Fact: They managed to uproot and replant live landmines, no one knows how they did it, and it's probably best not to ask.`
    },
    {
        firstName: `Charles “Charlie”`,
        lastName: `Beckendorf`,
        heritage: `Son of Hepheastus`,
        series: `Percy Jackson and the Olympians`,
        photo: `imgs//CharlesBeckendorf.png`,
        badges: [`imgs//pjo.png`],
        info: `Charlie was a talented son of Hephaestus and head of the forge cabin. He died a hero during a mission to destroy Kronos' ship. Fun Fact: Everyone at camp called him Beckendorf as he was an older brother figure to many, only Silena ever called him Charlie.`
    },
    {
        firstName: `Silena`,
        lastName: `Beauregard`,
        heritage: `Daughter of Aphrodite`,
        series: `Percy Jackson and the Olympians`,
        photo: `imgs//SilenaBeauregard.jpg`,
        badges: [`imgs//pjo.png`],
        info: `Silena was the kind-hearted daughter of Aphrodite who ultimately died a hero. She was a spy, but also redeemed herself in battle.
Fun fact: She stole Clarisse's armor went into the Battle of Manhattan impersonating her so that the Ares cabin joined the battle, her last words were to see 'Charlie' as they could reunite in the underworld.`
    },
    {
        firstName: `Nico`,
        lastName: `Di Angelo`,
        heritage: `Son of Hades`,
        series: `Percy Jackson and the Olympians, Heroes of Olympus, Trials of Apollo`,
        photo: `imgs//NicoDiAngelo.jpg`,
        badges: [`imgs//pjo.png`, `imgs//hoo.png`, `imgs//toa.png`],
        info: `Nico is the brooding son of Hades with the power to control the dead. Despite his darkness, he has a huge heart.
Fun fact: He once said, "With great power comes great need to take a nap, Wake me up later."`
    },
    {
        firstName: `Bianca`,
        lastName: `Di Angelo`,
        heritage: `Daughter of Hades`,
        series: `Percy Jackson and the Olympians`,
        photo: `imgs//Bianca.jpg`,
        badges: [`imgs//pjo.png`],
        info: `Bianca, Nico’s sister, joined the Hunters of Artemis before dying in a quest. She struggled between loyalty to her brother and her new life.
Fun fact: She sacrificed herself to save her friends from a mechanical giant and her final wish was for Nico to be taken care of.`
    },
    {
        firstName: `Zoë`,
        lastName: `Nightshade`,
        heritage: `Daughter of Atlas,Lieutenant Hunter of Artemis`,
        series: `Percy Jackson and the Olympians, Heroes of Olympus, Trials of Apollo`,
        photo: `imgs//Zoe.jpg`,
        badges: [`imgs//pjo.png`],
        info: `A loyal Hunter of Artemis, Zoë was once a Hesperide. She died from the poison of the monster Ladon at the hands of father, Atlas.
Fun fact: She harbored great hatred towards Heracules and Percy was the only man she actually liked as she literally said "Perhaps not all men" in regards to him.`
    },
    {
        firstName: `Rachel`,
        lastName: `Elizabeth Dare`,
        heritage: `Mortal, Oracle of Delphi`,
        series: `Percy Jackson and the Olympians, Heroes of Olympus, Trials of Apollo`,
        photo: `imgs//RachelDare.jpg`,
        badges: [`imgs//pjo.png`, `imgs//hoo.png`, `imgs//toa.png`],
        info: `Rachel is a mortal who can see through the Mist and became the Oracle of Delphi. With her artistic abilities and prophetic dreams, she paints prophecies as well as speaks them.
Fun fact: She hit Kronos, Lord of the Titans, in the eye with a blue plastic hairbrush.`
    },
    {
        firstName: `Calypso`,
        lastName: ``,
        heritage: `Daughter of Atlas`,
        series: `Percy Jackson and the Olympians, Heroes of Olympus, Trials of Apollo`,
        photo: `imgs//Calypso.jpg`,
        badges: [`imgs//pjo.png`, `imgs//hoo.png`, `imgs//toa.png`],
        info: `Calypso is the immortal daughter of Atlas, cursed to be alone on Ogygia and fall in love with every hero who shows up and then leaves forever. She eventually finds freedom and love with Leo Valdez.
Fun fact: Upon Leo's arrival to her island she screamed at the gods 'are you kidding!'.`
    },
    {
        firstName: `Will`,
        lastName: `Solace`,
        heritage: `Son of Apollo`,
        series: `Percy Jackson and the Olympians, Heroes of Olympus, Trials of Apollo`,
        photo: `imgs//WillSolace.jpg`,
        badges: [`imgs//pjo.png`, `imgs//hoo.png`, `imgs//toa.png`],
        info: `Will is the son of Apollo and a talented healer, he is Nico's boyfriend and was one of the few people not scared of him and literally yelled at him about his health.
Fun fact: Percy grabbed him out of the Battle of Manhattan, on a scooter to heal Annabeth. He also delivered a baby satyr during the war with the Romans.`
    },
    {
        firstName: `Ethan`,
        lastName: `Nakamura`,
        heritage: `Son of Nemesis`,
        series: `Percy Jackson and the Olympians`,
        photo: `imgs//Ethan.jpeg`,
        badges: [`imgs//pjo.png`],
        info: `Ethan was a son of Nemesis who sought justice for the minor gods. His decisions led to tragic consequences in the war.
Fun fact: He lost an eye in battle—symbolic of his loyalty to Nemesis and almost hit Percy in the only place that would have killed him.`
    },
    {
        firstName: `Chiron`,
        lastName: ``,
        heritage: `Centaur, Camp Director`,
        series: `Percy Jackson and the Olympians, Heroes of Olympus, Trials of Apollo`,
        photo: `imgs//Chiron.jpg`,
        badges: [`imgs//pjo.png`, `imgs//hoo.png`, `imgs//toa.png`],
        info: `Chiron is the centaur trainer of heroes and Camp Half-Blood's activities director. He’s been guiding demigods for thousands of years.
Fun fact: He taught Hercules, Achilles, and countless other great demigod heroes, and as long as heroes need guidance and training, he will exist.`
    },

    {
        firstName: `Jason`,
        lastName: `Grace`,
        heritage: `Son of Jupiter`,
        series: `Heroes of Olympus, Trials of Apollo`,
        photo: `imgs//JasonGrace.jpg`,
        badges: [`imgs//hoo.png`, `imgs//toa.png`],
        info: `A son of Jupiter and natural leader, Jason fought for both Greek and Roman camps. He died heroically saving his friends.
Fun fact: He could summon lightning and fly, he was Thalia's younger brother and tried to eat a stapler when he was two years old.`
    },
    {
        firstName: `Piper`,
        lastName: `McLean`,
        heritage: `Daughter of Aphrodite`,
        series: `Heroes of Olympus, Trials of Apollo`,
        photo: `imgs//PiperMcLean.jpg`,
        badges: [`imgs//hoo.png`, `imgs//toa.png`],
        info: `Piper is a daughter of Aphrodite with charm and courage. She often challenged the idea of what a "love goddess's daughter" should be.
Fun fact: She used charmspeak to take cars for 'test drives' at BMW dealerships and acquired a magic cornucopia and uses it as a weapon, successfully on multiple occasions.`
    },
    {
        firstName: `Leo`,
        lastName: `Valdez`,
        heritage: `Son of Hepheastus`,
        series: `Heroes of Olympus, Trials of Apollo`,
        photo: `imgs//LeoValdez.jpg`,
        badges: [`imgs//hoo.png`, `imgs//toa.png`],
        info: `Leo, a son of Hephaestus, is the team's mechanic and comic relief. He can light himself on fire and the proud creator of Festus, mechanical dragon and figurehead of flying giant warship he made from scratch (He also turned back into a dragon later and for some reason and turn into a rolling suitcase).
Fun fact: He literally died and came back to life, and visited Ogyia twice, both of these things deemed impossible. As Apollo himself had said, "That should have been physically impossible, of course, but like any decent god, demigod, or engineer, Leo Valdez refused to be stopped by the laws of physics."`
    },
    {
        firstName: `Frank`,
        lastName: `Zhang`,
        heritage: `Son of Mars`,
        series: `Heroes of Olympus, Trials of Apollo`,
        photo: `imgs//FrankZhang.jpg`,
        badges: [`imgs//hoo.png`, `imgs//toa.png`],
        info: `Frank is a Roman demigod who can shapeshift into animals. He’s humble, brave, and fiercely loyal and is the son of the Roman War God, Mars..
Fun fact: His life is tied small piece of firewood and he once iguana-ed his way out of a chinese finger trap.`
    },
    {
        firstName: `Hazel`,
        lastName: `Levesque`,
        heritage: `Daughter of Pluto`,
        series: `Heroes of Olympus`,
        photo: `imgs//HazelLevesque.jpg`,
        badges: [`imgs//hoo.png`],
        info: `Hazel is a daughter of Pluto who returned from the dead. She can manipulate precious metals and underground terrain.
Fun fact: Her horse, Arion, runs faster than sound, eats gold nuggets, and curse like a sailor (according to Percy Jackson because as the son of Poseidon he can speak horse).`
    },
    {
        firstName: `Reyna Avila`,
        lastName: `Ramírez-Arellano`,
        heritage: `Daughter of Bellona`,
        series: `Heroes of Olympus, Trials of Apollo`,
        photo: `imgs//ReynaRamirezArellano.jpg`,
        badges: [`imgs//hoo.png`, `imgs//toa.png`],
        info: `Reyna is a daughter of Bellona and former praetor of Camp Jupiter. She can lend her strength and leadership to others.
Fun fact: She rode Pegasus across the sea to deliver the Athena Parthenos sister to Hylla, current leader of the Amazons.`
    },
    {
        firstName: `Gleeson`,
        lastName: `Hedge`,
        heritage: `Satyr`,
        series: `Heroes of Olympus, Trials of Apollo`,
        photo: `imgs//CoachHedge.jpg`,
        badges: [`imgs//hoo.png`, `imgs//toa.png`],
        info: `Coach Hedge is a loud, aggressive satyr who loves combat. He’s unexpectedly sentimental and deeply cares for his students.
Fun fact: He keeps a baseball bat strapped to his back at all times and calls the demigods "cupcakes". Leo made his megaphone randomly yell things like 'the cow says moo!'`
    },
    {
        firstName: `Octavian`,
        lastName: ``,
        heritage: `Legacy of Apollo`,
        series: `Heroes of Olympus`,
        photo: `imgs//Octavian.jpg`,
        badges: [`imgs//hoo.png`],
        info: `A Roman legacy of Apollo, Octavian was manipulative and power-hungry. He used prophecies for personal gain.
Fun fact: He launched himself via catapult to be "the hero",it did not end well. He would murder pillow pets for 'sacrifices' to the gods. (RIP to Percy's panda pillow pet, you will be missed)`
    },
    {
        firstName: `Magnus`,
        lastName: `Chase`,
        heritage: `Einherji, Son of Frey`,
        series: `Magnus Chase and the Gods of Asgard`,
        photo: `imgs//MagnusChase.jpg`,
        badges: ['imgs//mgatgoa.png'],
        info: `Magnus is a son of Frey who died—and woke up in Valhalla. He wields a talking sword and prefers peace to violence. He is a powerful healer and boyfriend of Alex Fierro.
Fun fact: When kissed by Alex in male form he literally thought, "A small part of my brain thought, Alex is male right now. I have just been kissed by a dude. How do I feel about that?
The rest of my brain answered: I have just been kissed by Alex Fierro. I am absolutely great with that."`
    },
    {
        firstName: `"Jack" Sumarbrander`,
        lastName: ``,
        heritage: `Sword of Summer`,
        series: `Magnus Chase and the Gods of Asgard`,
        photo: `imgs//JackTheSword.jpg`,
        badges: ['imgs//mgatgoa.png'],
        info: `Jack is a talking sword formerly owned by Frey. He’s sassy, proud, and enjoys beheading monsters.
Fun fact: He can fly and fight completely on his own, also pretty blunt and not in the sharpness sense.`
    },
    {
        firstName: `Samirah`,
        lastName: `al-Abbas`,
        heritage: `Valkyrie, Daughter of Loki`,
        series: `Magnus Chase and the Gods of Asgard`,
        photo: `imgs//Samirah.jpg`,
        badges: ['imgs//mgatgoa.png'],
        info: `Sam is a Valkyrie and daughter of Loki who balances hero work with school and fasting during Ramadan.
Fun fact: Her last name means lion.`
    },
    {
        firstName: `Alex`,
        lastName: `Fierro`,
        heritage: `Einherji, Child of Loki`,
        series: `Magnus Chase and the Gods of Asgard`,
        photo: `imgs//Alex.jpg`,
        badges: ['imgs//mgatgoa.png'],
        info: `Alex Fierro is a fierce, sarcastic, shape-shifting child of Loki who wields a killer garrote, shreds gender norms, and has zero tolerance for your nonsense.
Fun Fact: Preferred weapon of choice is a razor-sharp ceramic-cutting wire, they have used it to decapitate someone, don't ask.
`
    },
    {
        firstName: `Blitzen`,
        lastName: ``,
        heritage: `Dwarf from Nidavellir`,
        series: `Magnus Chase and the Gods of Asgard`,
        photo: `imgs//Blitzen.jpg`,
        badges: ['imgs//mgatgoa.png'],
        info: `Blitzen is a fashionable dwarf and son of Freya. He hates traditional armor—but can forge magical items.
Fun fact: He helped reforge Thor’s hammer with style and forged a rubber duck in a competition due to nervousness – this has happened more then once.
`
    },
    {
        firstName: `Hearthstone`,
        lastName: ``,
        heritage: `Elf from Alfheim`,
        series: `Magnus Chase and the Gods of Asgard`,
        photo: `imgs//Hearthstone.jpg`,
        badges: ['imgs//mgatgoa.png'],
        info: `Hearth is a deaf elf and powerful rune magician. He communicates through ASL and ancient runes.
Fun fact: He turned down being cured of his deafness so he could pursue study of runes and magic.`
    },

    {
        firstName: `Mallory`,
        lastName: `Keen`,
        heritage: `Einherji, Daughter of Frigg`,
        series: `Magnus Chase and the Gods of Asgard`,
        photo: `imgs//MalloryKeen.jpg`,
        badges: ['imgs//mgatgoa.png'],
        info: `Mallory is a fiery Irish Einjherji with a tragic past and a big heart. She’s fiercely loyal to her friends.
Fun fact: She died while trying to disarm a car bomb during Bloody Friday.`
    },
    {
        firstName: `TJ`,
        lastName: ` (Thomas Jefferson, Jr.)`,
        heritage: `Einherji, Son of Tyr`,
        series: `Magnus Chase and the Gods of Asgard`,
        photo: `imgs//TJ.jpg`,
        badges: ['imgs//mgatgoa.png'],
        info: `TJ is an African-American son of Tyr and a Union soldier from the Civil War. He fights with honor and a big smile.
Fun fact: Due to Britain's decision not to support the Confederates, he is very grateful to English people and constantly thanks everyone he meets in York.`
    },
    {
        firstName: `Lester`,
        lastName: `Papadopoulos`,
        heritage: `Apollo in mortal form`,
        series: `Trials of Apollo`,
        photo: `imgs//Lester.jpg`,
        badges: [`imgs//toa.png`],
        info: `Once the god Apollo, Lester is Zeus’s punishment in mortal form. He must learn humility, empathy, and bravery.
Fun fact: Used playing "Tiptoe Through the Tulips" by Tiny Tim on the ukulele as a threat,it was very affective.
`
    },
    {
        firstName: `Meg`,
        lastName: `McCaffery`,
        heritage: `Daughter of Demeter`,
        series: `Trials of Apollo`,
        photo: `imgs//Meg.jpg`,
        badges: [`imgs//toa.png`],
        info: `Meg is a fierce daughter of Demeter and companion of Lester. She wields twin golden sickles and loves plants.
Fun fact: She summoned a deadly army of peaches—yes, peaches.`
    },
    {
        firstName: `Kayla`,
        lastName: `Knowles`,
        heritage: `Daughter of Apollo`,
        series: `Trials of Apollo`,
        photo: `imgs//Kayla.jpg`,
        badges: [`imgs//toa.png`],
        info: `Kayla is a daughter of Apollo and Canadian archery instructor Darren Knowles. She is a year round camper who dreams to compete in the Olympics
Fun fact: Currently the only known demigod whose parents, both god and mortal, are the same gender. We don’t question it nor are we surprised considering the very queer nature of the Greek Gods.`
    },
];
