const players = [
    {
        firstName: `Percy`,
        lastName: `Jackson`,
        heritage: `Son of Poseidon`,
        series: `Percy Jackson and the Olympians, Heroes of Olympus, Trials of Apollo`,
        photo: `imgs//PercyJackson.jpg`,
        badges: [`imgs//pjo.png`, `imgs//hoo.png`, `imgs//toa.png`]
    },
    {
        firstName: `Annabeth`,
        lastName: `Chase`,
        heritage: `Daughter of Athena`,
        series: `Percy Jackson and the Olympians, Heroes of Olympus`,
        photo: `imgs//AnnabethChase.jpg`,
        badges: [`imgs//pjo.png`, `imgs//hoo.png`]
    },
    {
        firstName: `Grover`,
        lastName: `Underwood`,
        heritage: `Saytr, Lord of the Wild`,
        series: `Percy Jackson and the Olympians, Heroes of Olympus Trials of Apollo`,
        photo: `imgs//GroverUnderwood.jpg`,
        badges: [`imgs//pjo.png`, `imgs//hoo.png`, `imgs//toa.png`]
    },
    {
        firstName: `Luke`,
        lastName: `Castellan`,
        heritage: `Son of Hermes, Host of Kronos`,
        series: `Percy Jackson and the Olympians`,
        photo: `imgs//LukeCastellan.jpg`,
        badges: [`imgs//pjo.png`]
    },
    {
        firstName: `Thalia`,
        lastName: `Grace`,
        heritage: `Daughter of Zeus, Hunter of Artemis`,
        series: `Percy Jackson and the Olympians, Heroes of Olympus, Trials of Apollo`,
        photo: `imgs//ThaliaGrace.jpg`,
        badges: [`imgs//pjo.png`, `imgs//hoo.png`, `imgs//toa.png`]
    },
    {
        firstName: `Tyson`,
        lastName: ``,
        heritage: `Cyclops Son of Poseidon`,
        series: `Percy Jackson and the Olympians, Heroes of Olympus`,
        photo: `imgs//Tyson.jpg`,
        badges: [`imgs//pjo.png`, `imgs//hoo.png`,]
    },
    {
        firstName: `Travis and Connor`,
        lastName: `Stoll`,
        heritage: `Son of Hermes`,
        series: `Percy Jackson and the Olympians, Heroes of Olympus, Trials of Apollo`,
        photo: `imgs//StollBrothers.jpg`,
        badges: [`imgs//pjo.png`, `imgs//hoo.png`, `imgs//toa.png`]
    },
    {
        firstName: `Charles “Charlie”`,
        lastName: `Beckendorf`,
        heritage: `Son of Hepheastus`,
        series: `Percy Jackson and the Olympians`,
        photo: `imgs//CharlesBeckendorf.png`,
        badges: [`imgs//pjo.png`]
    },
    {
        firstName: `Silena`,
        lastName: `Beauregard`,
        heritage: `Daughter of Aphrodite`,
        series: `Percy Jackson and the Olympians`,
        photo: `imgs//SilenaBeauregard.jpg`,
        badges: [`imgs//pjo.png`]
    },
    {
        firstName: `Nico`,
        lastName: `Di Angelo`,
        heritage: `Son of Hades`,
        series: `Percy Jackson and the Olympians, Heroes of Olympus, Trials of Apollo`,
        photo: `imgs//NicoDiAngelo.jpg`,
        badges: [`imgs//pjo.png`, `imgs//hoo.png`, `imgs//toa.png`]
    },
    {
        firstName: `Bianca`,
        lastName: `Di Angelo`,
        heritage: `Daughter of Hades`,
        series: `Percy Jackson and the Olympians`,
        photo: `imgs//Bianca.jpg`,
        badges: [`imgs//pjo.png`]
    },
    {
        firstName: `Zoë`,
        lastName: `Nightshade`,
        heritage: `Daughter of Atlas,Lieutenant Hunter of Artemis`,
        series: `Percy Jackson and the Olympians, Heroes of Olympus, Trials of Apollo`,
        photo: `imgs//Zoe.jpg`,
        badges: [`imgs//pjo.png`]
    },
    {
        firstName: `Rachel`,
        lastName: `Elizabeth Dare`,
        heritage: `Mortal, Oracle of Delphi`,
        series: `Percy Jackson and the Olympians, Heroes of Olympus, Trials of Apollo`,
        photo: `imgs//RachelDare.jpg`,
        badges: [`imgs//pjo.png`, `imgs//hoo.png`, `imgs//toa.png`]
    },
    {
        firstName: `Calypso`,
        lastName: ``,
        heritage: `Daughter of Atlas`,
        series: `Percy Jackson and the Olympians, Heroes of Olympus, Trials of Apollo`,
        photo: `imgs//Calypso.jpg`,
        badges: [`imgs//pjo.png`, `imgs//hoo.png`, `imgs//toa.png`]
    },
    {
        firstName: `Will`,
        lastName: `Solace`,
        heritage: `Son of Apollo`,
        series: `Percy Jackson and the Olympians, Heroes of Olympus, Trials of Apollo`,
        photo: `imgs//WillSolace.jpg`,
        badges: [`imgs//pjo.png`, `imgs//hoo.png`, `imgs//toa.png`]
    },
    {
        firstName: `Ethan`,
        lastName: `Nakamura`,
        heritage: `Son of Nemesis`,
        series: `Percy Jackson and the Olympians`,
        photo: `imgs//Ethan.jpeg`,
        badges: [`imgs//pjo.png`]
    },
    {
        firstName: `Chiron`,
        lastName: `Trainer of Heroes`,
        heritage: `Centaur, Camp Director`,
        series: `Percy Jackson and the Olympians, Heroes of Olympus, Trials of Apollo`,
        photo: `imgs//Chiron.jpg`,
        badges: [`imgs//pjo.png`, `imgs//hoo.png`, `imgs//toa.png`]
    },

    {
        firstName: `Jason`,
        lastName: `Grace`,
        heritage: `Son of Jupiter`,
        series: `Heroes of Olympus, Trials of Apollo`,
        photo: `imgs//JasonGrace.jpg`,
        badges: [`imgs//hoo.png`, `imgs//toa.png`]
    },
    {
        firstName: `Piper`,
        lastName: `McLean`,
        heritage: `Daughter of Aphrodite`,
        series: `Heroes of Olympus, Trials of Apollo`,
        photo: `imgs//PiperMcLean.jpg`,
        badges: [`imgs//hoo.png`, `imgs//toa.png`]
    },
    {
        firstName: `Leo`,
        lastName: `Valdez`,
        heritage: `Son of Hepheastus`,
        series: `Heroes of Olympus, Trials of Apollo`,
        photo: `imgs//LeoValdez.jpg`,
        badges: [`imgs//hoo.png`, `imgs//toa.png`]
    },
    {
        firstName: `Frank`,
        lastName: `Zhang`,
        heritage: `Son of Mars`,
        series: `Heroes of Olympus, Trials of Apollo`,
        photo: `imgs//FrankZhang.jpg`,
        badges: [`imgs//hoo.png`, `imgs//toa.png`]
    },
    {
        firstName: `Hazel`,
        lastName: `Levesque`,
        heritage: `Daughter of Pluto`,
        series: `Heroes of Olympus`,
        photo: `imgs//HazelLevesque.jpg`,
        badges: [`imgs//hoo.png`]
    },
    {
        firstName: `Reyna Avila`,
        lastName: `Ramírez-Arellano`,
        heritage: `Daughter of Bellona`,
        series: `Heroes of Olympus, Trials of Apollo`,
        photo: `imgs//ReynaRamirezArellano.jpg`,
        badges: [`imgs//hoo.png`, `imgs//toa.png`]
    },
    {
        firstName: `Gleeson`,
        lastName: `Hedge`,
        heritage: `Satyr`,
        series: `Heroes of Olympus, Trials of Apollo`,
        photo: `imgs//CoachHedge.jpg`,
        badges: [`imgs//hoo.png`, `imgs//toa.png`]
    },
    {
        firstName: `Octavian`,
        lastName: ``,
        heritage: `Legacy of Apollo`,
        series: `Heroes of Olympus`,
        photo: `imgs//Octavian.jpg`,
        badges: [`imgs//hoo.png`]
    },
    {
        firstName: `Magnus`,
        lastName: `Chase`,
        heritage: `Einherji, Son of Frey`,
        series: `Magnus Chase and the Gods of Asgard`,
        photo: `imgs//MagnusChase.jpg`,
        badges: ['imgs//mgatgoa.png']
    },
    {
        firstName: `"Jack" Sumarbrander`,
        lastName: ``,
        heritage: `Sword of Summer`,
        series: `Magnus Chase and the Gods of Asgard`,
        photo: `imgs//JackTheSword.jpg`,
        badges: ['imgs//mgatgoa.png']
    },
    {
        firstName: `Samirah`,
        lastName: `al-Abbas`,
        heritage: `Valkyrie, Daughter of Loki`,
        series: `Magnus Chase and the Gods of Asgard`,
        photo: `imgs//Samirah.jpg`,
        badges: ['imgs//mgatgoa.png']
    },
    {
        firstName: `Alex`,
        lastName: `Fierro`,
        heritage: `Einherji, Child of Loki`,
        series: `Magnus Chase and the Gods of Asgard`,
        photo: `imgs//Alex.jpg`,
        badges: ['imgs//mgatgoa.png']
    },
    {
        firstName: `Blitzen`,
        lastName: ``,
        heritage: `Dwarf from Nidavellir`,
        series: `Magnus Chase and the Gods of Asgard`,
        photo: `imgs//Blitzen.jpg`,
        badges: ['imgs//mgatgoa.png']
    },
    {
        firstName: `Hearthstone`,
        lastName: ``,
        heritage: `Elf from Alfheim`,
        series: `Magnus Chase and the Gods of Asgard`,
        photo: `imgs//Hearthstone.jpg`,
        badges: ['imgs//mgatgoa.png']
    },

    {
        firstName: `Mallory`,
        lastName: `Keen`,
        heritage: `Einherji`,
        series: `Magnus Chase and the Gods of Asgard`,
        photo: `imgs//MalloryKeen.jpg`,
        badges: ['imgs//mgatgoa.png']
    },
    {
        firstName: `TJ`,
        lastName: ` (Thomas Jefferson, Jr.)`,
        heritage: `Einherji, Son of Tyr`,
        series: `Magnus Chase and the Gods of Asgard`,
        photo: `imgs//TJ.jpg`,
        badges: ['imgs//mgatgoa.png']
    },
    {
        firstName: `Lester`,
        lastName: `Papadopoulos`,
        heritage: `Apollo in mortal form`,
        series: `Trials of Apollo`,
        photo: `imgs//Lester.jpg`,
        badges: [`imgs//toa.png`]
    },
    {
        firstName: `Meg`,
        lastName: `McCaffery`,
        heritage: `Daughter of Demeter`,
        series: `Trials of Apollo`,
        photo: `imgs//Meg.jpg`,
        badges: [`imgs//toa.png`]
    },
    {
        firstName: `Kayla`,
        lastName: `Knowles`,
        heritage: `Daughter of Apollo`,
        series: `Trials of Apollo`,
        photo: `imgs//Kayla.jpg`,
        badges: [`imgs//toa.png`]
    },
];
