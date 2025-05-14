const players = [
    {
        firstName: `Percy`,
        lastName: `Jackson`,
        heritage: `Son of Poseidon`,
        series: `Percy Jackson and the Olympians, Heroes of Olympus, Trials of Apollo`,
        photo: `https://picsum.photos/200`
    },
    {
        firstName: `Annabeth`,
        lastName: `Chase`,
        heritage: `Daughter of Athena`,
        series: `Percy Jackson and the Olympians, Heroes of Olympus`,
        photo: `https://picsum.photos/200`
    },
    {
        firstName: `Grover`,
        lastName: `Underwood`,
        heritage: `Saytr, Lord of the Wild`,
        series: `Percy Jackson and the Olympians, Trials of Apollo`,
        photo: `https://picsum.photos/200`
    },
    {
        firstName: `Luke`,
        lastName: `Castellan`,
        heritage: `Son of Hermes, Host of Kronos`,
        series: `Percy Jackson and the Olympians`,
        photo: `https://picsum.photos/200`
    },
    {
        firstName: `Thalia`,
        lastName: `Grace`,
        heritage: `Daughter of Zeus, Hunter of Artemis`,
        series: `Percy Jackson and the Olympians, Heroes of Olympus, Trials of Apollo`,
        photo: `https://picsum.photos/200`
    },
    {
        firstName: `Nico`,
        lastName: `Di Angelo`,
        heritage: `Son of Hades`,
        series: `Percy Jackson and the Olympians, Heroes of Olympus, Trials of Apollo`,
        photo: `https://picsum.photos/200`
    },
    {
        firstName: `Bianca`,
        lastName: `Di Angelo`,
        heritage: `Daughter of Hades`,
        series: `Percy Jackson and the Olympians, Heroes of Olympus, Trials of Apollo`,
        photo: `https://picsum.photos/200`
    },
    {
        firstName: `Rachel`,
        lastName: `Elizabeth Dare`,
        heritage: `Mortal, Oracle of Delphi`,
        series: `Percy Jackson and the Olympians, Heroes of Olympus, Trials of Apollo`,
        photo: `https://picsum.photos/200`
    },
    {
        firstName: `Clarisse`,
        lastName: `La Rue`,
        heritage: `Daughter of Ares`,
        series: `Percy Jackson and the Olympians, Heroes of Olympus`,
        photo: `https://picsum.photos/200`
    },
    {
        firstName: `Chiron`,
        lastName: `Trainer of Heroes`,
        heritage: `Centaur, Camp Director`,
        series: `Percy Jackson and the Olympians, Heroes of Olympus, Trials of Apollo`,
        photo: `https://picsum.photos/200`
    },
    {
        firstName: `Dionysus`,
        lastName: `"Mr. D"`,
        heritage: `God, Camp Director`,
        series: `Percy Jackson and the Olympians, Heroes of Olympus`,
        photo: `https://picsum.photos/200`
    },
    {
        firstName: `Will`,
        lastName: `Solace`,
        heritage: `Son of Apollo`,
        series: `Percy Jackson and the Olympians, Heroes of Olympus, Trials of Apollo`,
        photo: `https://picsum.photos/200`
    },
    {
        firstName: `Ethan`,
        lastName: `Nakamura`,
        heritage: `Son of Nemesis`,
        series: `Percy Jackson and the Olympians`,
        photo: `https://picsum.photos/200`
    },
    {
        firstName: `Travis`,
        lastName: `Stoll`,
        heritage: `Son of Hermes`,
        series: `Percy Jackson and the Olympians, Heroes of Olympus, Trials of Apollo`,
        photo: `https://picsum.photos/200`
    },
    {
        firstName: `Connor`,
        lastName: `Stoll`,
        heritage: `Son of Hermes`,
        series: `Percy Jackson and the Olympians, Heroes of Olympus, Trials of Apollo`,
        photo: `https://picsum.photos/200`
    },
    {
        firstName: `Silena`,
        lastName: `Beauregard`,
        heritage: `Daughter of Aphrodite`,
        series: `Percy Jackson and the Olympians`,
        photo: `https://picsum.photos/200`
    },
    {
        firstName: `Charles “Charlie”`,
        lastName: `Beckendorf`,
        heritage: `Son of Hepheastus`,
        series: `Percy Jackson and the Olympians`,
        photo: `https://picsum.photos/200`
    },
    {
        firstName: `Jason`,
        lastName: `Grace`,
        heritage: `Son of Jupiter`,
        series: `Heroes of Olympus, Trials of Apollo`,
        photo: `https://picsum.photos/200`
    },
    {
        firstName: `Piper`,
        lastName: `McLean`,
        heritage: `Daughter of Aphrodite`,
        series: `Heroes of Olympus, Trials of Apollo`,
        photo: `https://picsum.photos/200`
    },
    {
        firstName: `Leo`,
        lastName: `Valdez`,
        heritage: `Son of Hepheastus`,
        series: `Heroes of Olympus, Trials of Apollo`,
        photo: `https://picsum.photos/200`
    },
    {
        firstName: `Festus`,
        lastName: `Argo II Figurehead`,
        heritage: `Mechanical Dragon`,
        series: `Percy Jackson and the Olympians, Heroes of Olympus, Trials of Apollo`,
        photo: `https://picsum.photos/200`
    },
    {
        firstName: `Frank`,
        lastName: `Zhang`,
        heritage: `Son of Mars`,
        series: `Heroes of Olympus, Trials of Apollo`,
        photo: `https://picsum.photos/200`
    },
    {
        firstName: `Hazel`,
        lastName: `Levesque`,
        heritage: `Daughter of Pluto`,
        series: `Heroes of Olympus`,
        photo: `https://picsum.photos/200`
    },
    {
        firstName: `Reyna Avila`,
        lastName: `Ramírez-Arellano`,
        heritage: `Daughter of Bellona`,
        series: `Heroes of Olympus, Trials of Apollo`,
        photo: `https://picsum.photos/200`
    },
    {
        firstName: `Gleeson`,
        lastName: `Hedge`,
        heritage: `Satyr`,
        series: `Heroes of Olympus, Trials of Apollo`,
        photo: `https://picsum.photos/200`
    },
    {
        firstName: `Octavian`,
        lastName: `Augur`,
        heritage: `Legacy of Apollo`,
        series: `Heroes of Olympus`,
        photo: `https://picsum.photos/200`
    },
    {
        firstName: `Magnus`,
        lastName: `Chase`,
        heritage: `Son of Frey`,
        series: `Magnus Chase and the Gods of Asgard`,
        photo: `https://picsum.photos/200`
    },
    {
        firstName: `"Jack" Sumarbrander`,
        lastName: ``,
        heritage: `Sword of Summer`,
        series: `Magnus Chase and the Gods of Asgard`,
        photo: `https://picsum.photos/200`
    },
    {
        firstName: `Samirah`,
        lastName: `al-Abbas`,
        heritage: `Daughter of Loki`,
        series: `Magnus Chase and the Gods of Asgard`,
        photo: `https://picsum.photos/200`
    },
    {
        firstName: `Alex`,
        lastName: `Fierro`,
        heritage: `Child of Loki`,
        series: `Magnus Chase and the Gods of Asgard`,
        photo: `https://picsum.photos/200`
    },
    {
        firstName: `Blitzen`,
        lastName: ``,
        heritage: `Dwarf from Nidavellir`,
        series: `Magnus Chase and the Gods of Asgard`,
        photo: `https://picsum.photos/200`
    },
    {
        firstName: `Hearthstone`,
        lastName: ``,
        heritage: `Elf from Alfheim`,
        series: `Magnus Chase and the Gods of Asgard`,
        photo: `https://picsum.photos/200`
    },
    {
        firstName: `Lester`,
        lastName: `Papadopoulos`,
        heritage: `Apollo in mortal form`,
        series: `Trials of Apollo`,
        photo: `https://picsum.photos/200`
    },
    {
        firstName: `Meg`,
        lastName: `McCaffery`,
        heritage: `Daughter of Demeter`,
        series: `Trials of Apollo`,
        photo: `https://picsum.photos/200`
    },
    {
        firstName: `Kayla`,
        lastName: `Knowles`,
        heritage: `Daughter of Apollo`,
        series: `Trials of Apollo`,
        photo: `https://picsum.photos/200`
    },

    {
        firstName: `later`,
        lastName: `later`,
        heritage: `later`,
        series: `later`,
        photo: `https://picsum.photos/200`
    },
    {
        firstName: `later`,
        lastName: `later`,
        heritage: `later`,
        series: `later`,
        photo: `https://picsum.photos/200`
    },
];
