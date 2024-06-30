const movies = [
  {
    id: 10,
    title: "Kingdom of the Planet of the Apes",
    releaseYear: "2024",
    genres: "Science Fiction, Adventure, Action",
    content:
      "Kingdom of the Planet of the Apes: Several generations in the future following Caesar's reign, apes are now the dominant species and live harmoniously while humans have been reduced to living in the shadows. As a new tyrannical ape leader builds his empire, one young ape undertakes a harrowing journey that will cause him to question all that he has known about the past and to make choices that will define a future for apes and humans alike.",
    image:
      "https://image.tmdb.org/t/p/original//gKkl37BQuKTanygYQG1pyYgLVgf.jpg",
  },
  {
    id: 11,
    title: "Furiosa: A Mad Max Saga",
    releaseYear: "2024",
    genres: "Action, Adventure, Science Fiction",
    content:
      "Furiosa: A Mad Max Saga: As the world fell, young Furiosa is snatched from the Green Place of Many Mothers and falls into the hands of a great Biker Horde led by the Warlord Dementus. Sweeping through the Wasteland they come across the Citadel presided over by The Immortan Joe. While the two Tyrants war for dominance, Furiosa must survive many trials as she puts together the means to find her way home.",
    image:
      "https://image.tmdb.org/t/p/original//iADOJ8Zymht2JPMoy3R7xceZprc.jpg",
  },
  {
    id: 12,
    title: "Inside Out",
    releaseYear: "2015",
    genres: "Animation, Family, Adventure, Drama, Comedy",
    content:
      "Inside Out: When 11-year-old Riley moves to a new city, her Emotions team up to help her through the transition. Joy, Fear, Anger, Disgust and Sadness work together, but when Joy and Sadness get lost, they must journey through unfamiliar places to get back home.",
    image:
      "https://image.tmdb.org/t/p/original//2H1TmgdfNtsKlU9jKdeNyYL5y8T.jpg",
  },
  {
    id: 13,
    title: "Godzilla x Kong: The New Empire",
    releaseYear: "2024",
    genres: "Science Fiction, Action, Adventure",
    content:
      "Godzilla x Kong: The New Empire: Following their explosive showdown, Godzilla and Kong must reunite against a colossal undiscovered threat hidden within our world, challenging their very existence – and our own.",
    image:
      "https://image.tmdb.org/t/p/original//z1p34vh7dEOnLDmyCrlUVLuoDzd.jpg",
  },
  {
    id: 14,
    title: "Civil War",
    releaseYear: "2024",
    genres: "War, Action, Drama",
    content:
      "Civil War: In the near future, a group of war journalists attempt to survive while reporting the truth as the United States stands on the brink of civil war.",
    image:
      "https://image.tmdb.org/t/p/original//sh7Rg8Er3tFcN9BpKIPOMvALgZd.jpg",
  },
  {
    id: 15,
    title: "Kung Fu Panda 4",
    releaseYear: "2024",
    genres: "Animation, Action, Family, Comedy, Fantasy",
    content:
      "Kung Fu Panda 4: Po is gearing up to become the spiritual leader of his Valley of Peace, but also needs someone to take his place as Dragon Warrior. As such, he will train a new kung fu practitioner for the spot and will encounter a villain called the Chameleon who conjures villains from the past.",
    image:
      "https://image.tmdb.org/t/p/original//kDp1vUBnMpe8ak4rjgl3cLELqjU.jpg",
  },
  {
    id: 16,
    title: "The Fall Guy",
    releaseYear: "2024",
    genres: "Action, Comedy",
    content:
      "The Fall Guy: Fresh off an almost career-ending accident, stuntman Colt Seavers has to track down a missing movie star, solve a conspiracy and try to win back the love of his life while still doing his day job.",
    image:
      "https://image.tmdb.org/t/p/original//aBkqu7EddWK7qmY4grL4I6edx2h.jpg",
  },
  {
    id: 17,
    title: "Dune: Part Two",
    releaseYear: "2024",
    genres: "Science Fiction, Adventure",
    content:
      "Dune: Part Two: Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the known universe, Paul endeavors to prevent a terrible future only he can foresee.",
    image:
      "https://image.tmdb.org/t/p/original//1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
  },
  {
    id: 18,
    title: "Bad Boys for Life",
    releaseYear: "2020",
    genres: "Thriller, Action, Crime",
    content:
      "Bad Boys for Life: Marcus and Mike are forced to confront new threats, career changes, and midlife crises as they join the newly created elite team AMMO of the Miami police department to take down the ruthless Armando Armas, the vicious leader of a Miami drug cartel.",
    image:
      "https://image.tmdb.org/t/p/original//y95lQLnuNKdPAzw9F9Ab8kJ80c3.jpg",
  },
  {
    id: 19,
    title: "Godzilla Minus One",
    releaseYear: "2023",
    genres: "Science Fiction, Horror, Action",
    content:
      "Godzilla Minus One: In postwar Japan, Godzilla brings new devastation to an already scorched landscape. With no military intervention or government help in sight, the survivors must join together in the face of despair and fight back against an unrelenting horror.",
    image:
      "https://image.tmdb.org/t/p/original//hkxxMIGaiCTmrEArK7J56JTKUlB.jpg",
  },
  {
    id: 20,
    title: "Migration",
    releaseYear: "2023",
    genres: "Animation, Action, Adventure, Comedy, Family",
    content:
      "Migration: After a migrating duck family alights on their pond with thrilling tales of far-flung places, the Mallard family embarks on a family road trip, from New England, to New York City, to tropical Jamaica.",
    image:
      "https://image.tmdb.org/t/p/original//ldfCF9RhR40mppkzmftxapaHeTo.jpg",
  },
  {
    id: 21,
    title: "Fast X",
    releaseYear: "2023",
    genres: "Action, Crime, Thriller",
    content:
      "Fast X: Over many missions and against impossible odds, Dom Toretto and his family have outsmarted, out-nerved and outdriven every foe in their path. Now, they confront the most lethal opponent they've ever faced: A terrifying threat emerging from the shadows of the past who's fueled by blood revenge, and who is determined to shatter this family and destroy everything—and everyone—that Dom loves, forever.",
    image:
      "https://image.tmdb.org/t/p/original//fiVW06jE7z9YnO4trhaMEdclSiC.jpg",
  },
  {
    id: 22,
    title: "Oppenheimer",
    releaseYear: "2023",
    genres: "Drama, History",
    content:
      "Oppenheimer: The story of J. Robert Oppenheimer's role in the development of the atomic bomb during World War II.",
    image:
      "https://image.tmdb.org/t/p/original//8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
  },
  {
    id: 23,
    title: "Mad Max: Fury Road",
    releaseYear: "2015",
    genres: "Action, Adventure, Science Fiction",
    content:
      "Mad Max: Fury Road: An apocalyptic story set in the furthest reaches of our planet, in a stark desert landscape where humanity is broken, and most everyone is crazed fighting for the necessities of life. Within this world exist two rebels on the run who just might be able to restore order.",
    image:
      "https://image.tmdb.org/t/p/original//hA2ple9q4qnwxp3hKVNhroipsir.jpg",
  },
  {
    id: 24,
    title: "The Batman",
    releaseYear: "2022",
    genres: "Crime, Mystery, Thriller",
    content:
      "The Batman: In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler.",
    image:
      "https://image.tmdb.org/t/p/original//74xTEgt7R36Fpooo50r9T25onhq.jpg",
  },
  {
    id: 25,
    title: "Ghostbusters: Frozen Empire",
    releaseYear: "2024",
    genres: "Fantasy, Adventure, Comedy",
    content:
      "Ghostbusters: Frozen Empire: When the discovery of an ancient artifact unleashes an evil force, Ghostbusters new and old must join forces to protect their home and save the world from a second Ice Age.",
    image:
      "https://image.tmdb.org/t/p/original//e1J2oNzSBdou01sUvriVuoYp0pJ.jpg",
  },
  {
    id: 26,
    title: "The Terminator",
    releaseYear: "1984",
    genres: "Action, Thriller, Science Fiction",
    content:
      'The Terminator: In the post-apocalyptic future, reigning tyrannical supercomputers teleport a cyborg assassin known as the "Terminator" back to 1984 to kill Sarah Connor, whose unborn son is destined to lead insurgents against 21st century mechanical hegemony. Meanwhile, the human-resistance movement dispatches a lone warrior to safeguard Sarah. Can he stop the virtually indestructible killing machine?',
    image:
      "https://image.tmdb.org/t/p/original//qvktm0BHcnmDpul4Hz01GIazWPr.jpg",
  },
  {
    id: 27,
    title: "Tenet",
    releaseYear: "2020",
    genres: "Action, Thriller, Science Fiction",
    content:
      "Tenet: Armed with only one word - Tenet - and fighting for the survival of the entire world, the Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.",
    image:
      "https://image.tmdb.org/t/p/original//k68nPLbIST6NP96JmTxmZijEvCA.jpg",
  },
  {
    id: 28,
    title: "Ghostbusters",
    releaseYear: "2016",
    genres: "Action, Fantasy, Comedy",
    content:
      "Ghostbusters: Following a ghost invasion of Manhattan, paranormal enthusiasts Erin Gilbert and Abby Yates, nuclear engineer Jillian Holtzmann, and subway worker Patty Tolan band together to stop the otherworldly threat.",
    image:
      "https://image.tmdb.org/t/p/original//wJmWliwXIgZOCCVOcGRBhce7xPS.jpg",
  },
  {
    id: 29,
    title: "Bird Box",
    releaseYear: "2018",
    genres: "Horror, Thriller, Drama",
    content:
      "Bird Box: Five years after an ominous unseen presence drives most of society to suicide, a survivor and her two children make a desperate bid to reach safety.",
    image:
      "https://image.tmdb.org/t/p/original//rGfGfgL2pEPCfhIvqHXieXFn7gp.jpg",
  },
  {
    id: 10,
    title: "My Fault",
    releaseYear: "2023",
    genres: "Drama, Romance",
    content:
      "My Fault: Noah must leave her city, boyfriend, and friends to move into William Leister's mansion, the flashy and wealthy husband of her mother Rafaela. As a proud and independent 17 year old, Noah resists living in a mansion surrounded by luxury. However, it is there where she meets Nick, her new stepbrother, and the clash of their strong personalities becomes evident from the very beginning.",
    image:
      "https://image.tmdb.org/t/p/original//w46Vw536HwNnEzOa7J24YH9DPRS.jpg",
  },
  {
    id: 11,
    title: "Bad Boys",
    releaseYear: "1995",
    genres: "Action, Comedy, Crime, Thriller",
    content:
      "Bad Boys: Marcus Burnett is a henpecked family man. Mike Lowry is a footloose and fancy free ladies' man. Both Miami policemen, they have 72 hours to reclaim a consignment of drugs stolen from under their station's nose. To complicate matters, in order to get the assistance of the sole witness to a murder, they have to pretend to be each other.",
    image:
      "https://image.tmdb.org/t/p/original//x1ygBecKHfXX4M2kRhmFKWfWbJc.jpg",
  },
  {
    id: 12,
    title: "Wonder Woman",
    releaseYear: "2017",
    genres: "Action, Adventure, Fantasy",
    content:
      "Wonder Woman: An Amazon princess comes to the world of Man in the grips of the First World War to confront the forces of evil and bring an end to human conflict.",
    image:
      "https://image.tmdb.org/t/p/original//imekS7f1OuHyUP2LAiTEM0zBzUz.jpg",
  },
  {
    id: 13,
    title: "Iron Man 2",
    releaseYear: "2010",
    genres: "Adventure, Action, Science Fiction",
    content:
      "Iron Man 2: With the world now aware of his dual life as the armored superhero Iron Man, billionaire inventor Tony Stark faces pressure from the government, the press and the public to share his technology with the military. Unwilling to let go of his invention, Stark, with Pepper Potts and James 'Rhodey' Rhodes at his side, must forge new alliances – and confront powerful enemies.",
    image:
      "https://image.tmdb.org/t/p/original//6WBeq4fCfn7AN0o21W9qNcRF2l9.jpg",
  },
  {
    id: 14,
    title: "Barbie",
    releaseYear: "2023",
    genres: "Comedy, Adventure",
    content:
      "Barbie: Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.",
    image:
      "https://image.tmdb.org/t/p/original//iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
  },
  {
    id: 15,
    title: "Thor: Ragnarok",
    releaseYear: "2017",
    genres: "Action, Adventure, Science Fiction",
    content:
      "Thor: Ragnarok: Thor is imprisoned on the other side of the universe and finds himself in a race against time to get back to Asgard to stop Ragnarok, the destruction of his home-world and the end of Asgardian civilization, at the hands of a powerful new threat, the ruthless Hela.",
    image:
      "https://image.tmdb.org/t/p/original//rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg",
  },
  {
    id: 16,
    title: "2001: A Space Odyssey",
    releaseYear: "1968",
    genres: "Science Fiction, Mystery, Adventure",
    content:
      "2001: A Space Odyssey: Humanity finds a mysterious object buried beneath the lunar surface and sets off to find its origins with the help of HAL 9000, the world's most advanced super computer.",
    image:
      "https://image.tmdb.org/t/p/original//ve72VxNqjGM69Uky4WTo2bK6rfq.jpg",
  },
  {
    id: 17,
    title: "Dune",
    releaseYear: "2021",
    genres: "Science Fiction, Adventure",
    content:
      "Dune: Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet's exclusive supply of the most precious resource in existence-a commodity capable of unlocking humanity's greatest potential-only those who can conquer their fear will survive.",
    image:
      "https://image.tmdb.org/t/p/original//d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
  },
  {
    id: 18,
    title: "X",
    releaseYear: "2022",
    genres: "Horror, Mystery, Thriller",
    content:
      "X: In 1979, a group of young filmmakers set out to make an adult film in rural Texas, but when their reclusive, elderly hosts catch them in the act, the cast find themselves fighting for their lives.",
    image:
      "https://image.tmdb.org/t/p/original//A7YPhQKdcr6XB1kCUdS4tHifYWd.jpg",
  },
  {
    id: 19,
    title: "Bad Boys II",
    releaseYear: "2003",
    genres: "Action, Crime, Comedy",
    content:
      "Bad Boys II: Detectives Marcus Burnett and Mike Lowrey of the Miami Narcotics Task Force are tasked with stopping the flow of the drug ecstasy into Miami. They track the drugs to the whacked-out Cuban drug lord Johnny Tapia, who is also involved in a bloody war with Russian and Haitian mobsters. If that isn't bad enough, there's tension between the two detectives when Marcus discovers that playboy Mike is secretly romancing Marcus’ sister, Syd.",
    image:
      "https://image.tmdb.org/t/p/original//yCvB5fG5aEPqa1St7ihY6KEAsHD.jpg",
  },
  {
    id: 20,
    title: "Alien",
    releaseYear: "1979",
    genres: "Horror, Science Fiction",
    content:
      "Alien: During its return to the earth, commercial spaceship Nostromo intercepts a distress signal from a distant planet. When a three-member team of the crew discovers a chamber containing thousands of eggs on the planet, a creature inside one of the eggs attacks an explorer. The entire crew is unaware of the impending nightmare set to descend upon them when the alien parasite planted inside its unfortunate host is birthed.",
    image:
      "https://image.tmdb.org/t/p/original//vfrQk5IPloGg1v9Rzbh2Eg3VGyM.jpg",
  },
  {
    id: 21,
    title: "Captain Marvel",
    releaseYear: "2019",
    genres: "Action, Adventure, Science Fiction",
    content:
      "Captain Marvel: The story follows Carol Danvers as she becomes one of the universe’s most powerful heroes when Earth is caught in the middle of a galactic war between two alien races. Set in the 1990s, Captain Marvel is an all-new adventure from a previously unseen period in the history of the Marvel Cinematic Universe.",
    image:
      "https://image.tmdb.org/t/p/original//AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg",
  },
  {
    id: 22,
    title: "The Flash",
    releaseYear: "2023",
    genres: "Action, Adventure, Science Fiction",
    content:
      "The Flash: When his attempt to save his family inadvertently alters the future, Barry Allen becomes trapped in a reality in which General Zod has returned and there are no Super Heroes to turn to. In order to save the world that he is in and return to the future that he knows, Barry's only hope is to race for his life. But will making the ultimate sacrifice be enough to reset the universe?",
    image:
      "https://image.tmdb.org/t/p/original//rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg",
  },
  {
    id: 23,
    title: "Turning Red",
    releaseYear: "2022",
    genres: "Animation, Family, Comedy, Fantasy",
    content:
      "Turning Red: Thirteen-year-old Mei is experiencing the awkwardness of being a teenager with a twist – when she gets too excited, she transforms into a giant red panda.",
    image:
      "https://image.tmdb.org/t/p/original//qsdjk9oAKSQMWs0Vt5Pyfh6O4GZ.jpg",
  },
  {
    id: 24,
    title: "The Matrix",
    releaseYear: "1999",
    genres: "Action, Science Fiction",
    content:
      "The Matrix: Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.",
    image:
      "https://image.tmdb.org/t/p/original//f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
  },
  {
    id: 25,
    title: "Alien: Covenant",
    releaseYear: "2017",
    genres: "Science Fiction, Horror, Mystery",
    content:
      "Alien: Covenant: The crew of the colony ship Covenant, bound for a remote planet on the far side of the galaxy, discovers what they think is an uncharted paradise but is actually a dark, dangerous world.",
    image:
      "https://image.tmdb.org/t/p/original//zecMELPbU5YMQpC81Z8ImaaXuf9.jpg",
  },
  {
    id: 26,
    title: "Madame Web",
    releaseYear: "2024",
    genres: "Action, Fantasy",
    content:
      "Madame Web: Forced to confront revelations about her past, paramedic Cassandra Webb forges a relationship with three young women destined for powerful futures...if they can all survive a deadly present.",
    image:
      "https://image.tmdb.org/t/p/original//rULWuutDcN5NvtiZi4FRPzRYWSh.jpg",
  },
  {
    id: 27,
    title: "Joker",
    releaseYear: "2019",
    genres: "Crime, Thriller, Drama",
    content:
      "Joker: During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
    image:
      "https://image.tmdb.org/t/p/original//udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
  },
  {
    id: 28,
    title: "Aquaman",
    releaseYear: "2018",
    genres: "Action, Adventure, Fantasy",
    content:
      "Aquaman: Half-human, half-Atlantean Arthur Curry is taken on the journey of his lifetime to discover if he is worth of being a king.",
    image:
      "https://image.tmdb.org/t/p/original//zdw7Wf97vsQ0YnGomxDqfcEdUjX.jpg",
  },
  {
    id: 29,
    title: "Deadpool",
    releaseYear: "2016",
    genres: "Action, Adventure, Comedy",
    content:
      "Deadpool: The origin story of former Special Forces operative turned mercenary Wade Wilson, who, after being subjected to a rogue experiment that leaves him with accelerated healing powers, adopts the alter ego Deadpool. Armed with his new abilities and a dark, twisted sense of humor, Deadpool hunts down the man who nearly destroyed his life.",
    image:
      "https://image.tmdb.org/t/p/original//3E53WEZJqP6aM84D8CckXx4pIHw.jpg",
  },
  {
    id: 10,
    title: "Road House",
    releaseYear: "2024",
    genres: "Action, Thriller",
    content:
      "Road House: Ex-UFC fighter Dalton takes a job as a bouncer at a Florida Keys roadhouse, only to discover that this paradise is not all it seems.",
    image:
      "https://image.tmdb.org/t/p/original//lwPsIgh98Wnpvkr3svkZwlhDrfm.jpg",
  },
  {
    id: 11,
    title: "The Idea of You",
    releaseYear: "2024",
    genres: "Romance, Comedy, Drama",
    content:
      "The Idea of You: 40-year-old single mom Solène begins an unexpected romance with 24-year-old Hayes Campbell, the lead singer of August Moon, the hottest boy band on the planet. As they begin a whirlwind romance, it isn't long before Hayes' superstar status poses unavoidable challenges to their relationship, and Solène soon discovers that life in the glare of his spotlight might be more than she bargained for.",
    image:
      "https://image.tmdb.org/t/p/original//zDi2U7WYkdIoGYHcYbM9X5yReVD.jpg",
  },
  {
    id: 12,
    title: "Serenity",
    releaseYear: "2005",
    genres: "Science Fiction, Action, Adventure, Thriller",
    content:
      "Serenity: When the renegade crew of Serenity agrees to hide a fugitive on their ship, they find themselves in an action-packed battle between the relentless military might of a totalitarian regime who will destroy anything – or anyone – to get the girl back and the bloodthirsty creatures who roam the uncharted areas of space. But... the greatest danger of all may be on their ship.",
    image:
      "https://image.tmdb.org/t/p/original//4sqUOaPFoP2W81mq1UYqZqf5WzA.jpg",
  },
  {
    id: 13,
    title: "Wonka",
    releaseYear: "2023",
    genres: "Comedy, Family, Fantasy",
    content:
      "Wonka: Willy Wonka – chock-full of ideas and determined to change the world one delectable bite at a time – is proof that the best things in life begin with a dream, and if you’re lucky enough to meet Willy Wonka, anything is possible.",
    image:
      "https://image.tmdb.org/t/p/original//qhb1qOilapbapxWQn9jtRCMwXJF.jpg",
  },
  {
    id: 14,
    title: "Black Panther",
    releaseYear: "2018",
    genres: "Action, Adventure, Science Fiction",
    content:
      "Black Panther: King T'Challa returns home to the reclusive, technologically advanced African nation of Wakanda to serve as his country's new leader. However, T'Challa soon finds that he is challenged for the throne by factions within his own country as well as without. Using powers reserved to Wakandan kings, T'Challa assumes the Black Panther mantle to join with ex-girlfriend Nakia, the queen-mother, his princess-kid sister, members of the Dora Milaje (the Wakandan 'special forces') and an American secret agent, to prevent Wakanda from being dragged into a world war.",
    image:
      "https://image.tmdb.org/t/p/original//uxzzxijgPIY7slzFvMotPv8wjKA.jpg",
  },
  {
    id: 15,
    title: "Rocky",
    releaseYear: "1976",
    genres: "Drama",
    content:
      "Rocky: An uneducated collector for a Philadelphia loan shark is given a once-in-a-lifetime opportunity to fight against the world heavyweight boxing champion.",
    image:
      "https://image.tmdb.org/t/p/original//cqxg1CihGR5ge0i1wYXr4Rdeppu.jpg",
  },
  {
    id: 16,
    title: "Spider-Man: Across the Spider-Verse",
    releaseYear: "2023",
    genres: "Animation, Action, Adventure, Science Fiction",
    content:
      "Spider-Man: Across the Spider-Verse: After reuniting with Gwen Stacy, Brooklyn’s full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters the Spider Society, a team of Spider-People charged with protecting the Multiverse’s very existence. But when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders and must set out on his own to save those he loves most.",
    image:
      "https://image.tmdb.org/t/p/original//8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
  },
  {
    id: 17,
    title: "Star Wars",
    releaseYear: "1977",
    genres: "Adventure, Action, Science Fiction",
    content:
      "Star Wars: Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire.",
    image:
      "https://image.tmdb.org/t/p/original//6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
  },
  {
    id: 18,
    title: "xXx",
    releaseYear: "2002",
    genres: "Action, Adventure, Thriller, Crime",
    content:
      'xXx: Xander Cage is your standard adrenaline junkie with no fear and a lousy attitude. When the US Government "recruits" him to go on a mission, he\'s not exactly thrilled. His mission: to gather information on an organization that may just be planning the destruction of the world, led by the nihilistic Yorgi.',
    image:
      "https://image.tmdb.org/t/p/original//xeEw3eLeSFmJgXZzmF2Efww0q3s.jpg",
  },
  {
    id: 19,
    title: "Logan",
    releaseYear: "2017",
    genres: "Action, Drama, Science Fiction",
    content:
      "Logan: In the near future, a weary Logan cares for an ailing Professor X in a hideout on the Mexican border. But Logan's attempts to hide from the world and his legacy are upended when a young mutant arrives, pursued by dark forces.",
    image:
      "https://image.tmdb.org/t/p/original//fnbjcRDYn6YviCcePDnGdyAkYsB.jpg",
  },
  {
    id: 20,
    title: "Predator",
    releaseYear: "1987",
    genres: "Science Fiction, Action, Adventure, Thriller",
    content:
      "Predator: A team of elite commandos on a secret mission in a Central American jungle come to find themselves hunted by an extraterrestrial warrior.",
    image:
      "https://image.tmdb.org/t/p/original//k3mW4qfJo6SKqe6laRyNGnbB9n5.jpg",
  },
  {
    id: 21,
    title: "The Omen",
    releaseYear: "1976",
    genres: "Horror, Thriller",
    content:
      "The Omen: Immediately after their miscarriage, the US diplomat Robert Thorn adopts the newborn Damien without the knowledge of his wife. Yet what he doesn’t know is that their new son is the son of the devil.",
    image:
      "https://image.tmdb.org/t/p/original//p0LcWxOIoBx0MEZMn8tFcrvDXR1.jpg",
  },
  {
    id: 22,
    title: "Meg 2: The Trench",
    releaseYear: "2023",
    genres: "Action, Science Fiction, Horror",
    content:
      "Meg 2: The Trench: An exploratory dive into the deepest depths of the ocean of a daring research team spirals into chaos when a malevolent mining operation threatens their mission and forces them into a high-stakes battle for survival.",
    image:
      "https://image.tmdb.org/t/p/original//4m1Au3YkjqsxF8iwQy0fPYSxE0h.jpg",
  },
  {
    id: 23,
    title: "Misery",
    releaseYear: "1990",
    genres: "Drama, Thriller",
    content:
      "Misery: After stalking and saving the life of her favorite fiction author in a car accident, his  manic obsessor holds him captive in her remote Colorado home then forces him to write back to life the popular literary character he killed off.",
    image:
      "https://image.tmdb.org/t/p/original//23Y65uWaVMpqfbZTN3CT0aei4D5.jpg",
  },
  {
    id: 24,
    title: "Elemental",
    releaseYear: "2023",
    genres: "Animation, Comedy, Family, Fantasy, Romance",
    content:
      "Elemental: In a city where fire, water, land and air residents live together, a fiery young woman and a go-with-the-flow guy will discover something elemental: how much they have in common.",
    image:
      "https://image.tmdb.org/t/p/original//4Y1WNkd88JXmGfhtWR7dmDAo1T2.jpg",
  },
  {
    id: 25,
    title: "Superman",
    releaseYear: "1978",
    genres: "Science Fiction, Action, Adventure",
    content:
      "Superman: Mild-mannered Clark Kent works as a reporter at the Daily Planet alongside his crush, Lois Lane. Clark must summon his superhero alter-ego when the nefarious Lex Luthor launches a plan to take over the world.",
    image:
      "https://image.tmdb.org/t/p/original//d7px1FQxW4tngdACVRsCSaZq0Xl.jpg",
  },
  {
    id: 26,
    title: "Kate",
    releaseYear: "2021",
    genres: "Action",
    content:
      "Kate: A ruthless criminal operative has less than 24 hours to exact revenge on her enemies and in the process forms an unexpected bond with the daughter of one of her past victims.",
    image:
      "https://image.tmdb.org/t/p/original//uJgdT1boTSP0dDIjdTgGleg71l4.jpg",
  },
  {
    id: 27,
    title: "Wish",
    releaseYear: "2023",
    genres: "Animation, Family, Fantasy, Adventure",
    content:
      "Wish: Asha, a sharp-witted idealist, makes a wish so powerful that it is answered by a cosmic force – a little ball of boundless energy called Star. Together, Asha and Star confront a most formidable foe - the ruler of Rosas, King Magnifico - to save her community and prove that when the will of one courageous human connects with the magic of the stars, wondrous things can happen.",
    image:
      "https://image.tmdb.org/t/p/original//vgJZSqKMXWDDx09iSIStGKfHMku.jpg",
  },
  {
    id: 28,
    title: "Inception",
    releaseYear: "2010",
    genres: "Action, Science Fiction, Adventure",
    content:
      "Inception: Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life as payment for a task considered to be impossible: \"inception\", the implantation of another person's idea into a target's subconscious.",
    image:
      "https://image.tmdb.org/t/p/original//oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
  },
  {
    id: 29,
    title: "Donnie Darko",
    releaseYear: "2001",
    genres: "Fantasy, Drama, Mystery",
    content:
      "Donnie Darko: After narrowly escaping a bizarre accident, a troubled teenager is plagued by visions of a large bunny rabbit that manipulates him to commit a series of crimes.",
    image:
      "https://image.tmdb.org/t/p/original//fhQoQfejY1hUcwyuLgpBrYs6uFt.jpg",
  },
  {
    id: 10,
    title: "The Super Mario Bros. Movie",
    releaseYear: "2023",
    genres: "Animation, Family, Adventure, Fantasy, Comedy",
    content:
      "The Super Mario Bros. Movie: While working underground to fix a water main, Brooklyn plumbers—and brothers—Mario and Luigi are transported down a mysterious pipe and wander into a magical new world. But when the brothers are separated, Mario embarks on an epic quest to find Luigi.",
    image:
      "https://image.tmdb.org/t/p/original//qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
  },
  {
    id: 11,
    title: "Green Book",
    releaseYear: "2018",
    genres: "Drama, History",
    content:
      "Green Book: Tony Lip, a bouncer in 1962, is hired to drive pianist Don Shirley on a tour through the Deep South in the days when African Americans, forced to find alternate accommodations and services due to segregation laws below the Mason-Dixon Line, relied on a guide called The Negro Motorist Green Book.",
    image:
      "https://image.tmdb.org/t/p/original//7BsvSuDQuoqhWmU2fL7W2GOcZHU.jpg",
  },
  {
    id: 12,
    title: "The Marvels",
    releaseYear: "2023",
    genres: "Science Fiction, Adventure, Action",
    content:
      "The Marvels: Carol Danvers, aka Captain Marvel, has reclaimed her identity from the tyrannical Kree and taken revenge on the Supreme Intelligence. But unintended consequences see Carol shouldering the burden of a destabilized universe. When her duties send her to an anomalous wormhole linked to a Kree revolutionary, her powers become entangled with that of Jersey City super-fan Kamala Khan, aka Ms. Marvel, and Carol’s estranged niece, now S.A.B.E.R. astronaut Captain Monica Rambeau. Together, this unlikely trio must team up and learn to work in concert to save the universe.",
    image:
      "https://image.tmdb.org/t/p/original//9GBhzXMFjgcZ3FdR9w3bUMMTps5.jpg",
  },
  {
    id: 13,
    title: "Gravity",
    releaseYear: "2013",
    genres: "Science Fiction, Thriller, Drama",
    content:
      "Gravity: Dr. Ryan Stone, a brilliant medical engineer on her first Shuttle mission, with veteran astronaut Matt Kowalsky in command of his last flight before retiring. But on a seemingly routine spacewalk, disaster strikes. The Shuttle is destroyed, leaving Stone and Kowalsky completely alone-tethered to nothing but each other and spiraling out into the blackness of space. The deafening silence tells them they have lost any link to Earth and any chance for rescue. As fear turns to panic, every gulp of air eats away at what little oxygen is left. But the only way home may be to go further out into the terrifying expanse of space.",
    image:
      "https://image.tmdb.org/t/p/original//kZ2nZw8D681aphje8NJi8EfbL1U.jpg",
  },
  {
    id: 14,
    title: "RoboCop",
    releaseYear: "1987",
    genres: "Action, Thriller, Science Fiction",
    content:
      "RoboCop: In a violent, near-apocalyptic Detroit, evil corporation Omni Consumer Products wins a contract from the city government to privatize the police force. To test their crime-eradicating cyborgs, the company leads street cop Alex Murphy into an armed confrontation with crime lord Boddicker so they can use his body to support their untested RoboCop prototype. But when RoboCop learns of the company's nefarious plans, he turns on his masters.",
    image:
      "https://image.tmdb.org/t/p/original//hHtOgGb3NihlyRATHlKPaFApbrd.jpg",
  },
  {
    id: 15,
    title: "Interstellar",
    releaseYear: "2014",
    genres: "Adventure, Drama, Science Fiction",
    content:
      "Interstellar: The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
    image:
      "https://image.tmdb.org/t/p/original//gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
  },
  {
    id: 16,
    title: "Arrival",
    releaseYear: "2016",
    genres: "Drama, Science Fiction, Mystery",
    content:
      "Arrival: Taking place after alien crafts land around the world, an expert linguist is recruited by the military to determine whether they come in peace or are a threat.",
    image:
      "https://image.tmdb.org/t/p/original//pEzNVQfdzYDzVK0XqxERIw2x2se.jpg",
  },
  {
    id: 17,
    title: "Pulp Fiction",
    releaseYear: "1994",
    genres: "Thriller, Crime",
    content:
      "Pulp Fiction: A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.",
    image:
      "https://image.tmdb.org/t/p/original//d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
  },
  {
    id: 18,
    title: "Avengers: Infinity War",
    releaseYear: "2018",
    genres: "Adventure, Action, Science Fiction",
    content:
      "Avengers: Infinity War: As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.",
    image:
      "https://image.tmdb.org/t/p/original//7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
  },
  {
    id: 19,
    title: "Gifted",
    releaseYear: "2017",
    genres: "Drama, Comedy",
    content:
      "Gifted: Frank, a single man raising his child prodigy niece Mary, is drawn into a custody battle with his mother.",
    image:
      "https://image.tmdb.org/t/p/original//7YB2YrMwIm1g8FyZtlvmVDfRnAT.jpg",
  },
  {
    id: 20,
    title: "Minions: The Rise of Gru",
    releaseYear: "2022",
    genres: "Animation, Comedy, Family, Adventure, Crime, Science Fiction",
    content:
      "Minions: The Rise of Gru: A fanboy of a supervillain supergroup known as the Vicious 6, Gru hatches a plan to become evil enough to join them, with the backup of his followers, the Minions.",
    image:
      "https://image.tmdb.org/t/p/original//wKiOkZTN9lUUUNZLmtnwubZYONg.jpg",
  },
  {
    id: 21,
    title: "Spectre",
    releaseYear: "2015",
    genres: "Action, Adventure, Thriller",
    content:
      "Spectre: A cryptic message from Bond’s past sends him on a trail to uncover a sinister organization. While M battles political forces to keep the secret service alive, Bond peels back the layers of deceit to reveal the terrible truth behind SPECTRE.",
    image:
      "https://image.tmdb.org/t/p/original//zj8ongFhtWNsVlfjOGo8pSr7PQg.jpg",
  },
  {
    id: 22,
    title: "John Wick: Chapter 4",
    releaseYear: "2023",
    genres: "Action, Thriller, Crime",
    content:
      "John Wick: Chapter 4: With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.",
    image:
      "https://image.tmdb.org/t/p/original//vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
  },
  {
    id: 23,
    title: "Puss in Boots: The Last Wish",
    releaseYear: "2022",
    genres: "Animation, Adventure, Fantasy, Comedy, Family",
    content:
      "Puss in Boots: The Last Wish: Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
    image:
      "https://image.tmdb.org/t/p/original//kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
  },
  {
    id: 24,
    title: "Split",
    releaseYear: "2017",
    genres: "Horror, Thriller",
    content:
      "Split: Though Kevin has evidenced 23 personalities to his trusted psychiatrist, Dr. Fletcher, there remains one still submerged who is set to materialize and dominate all the others. Compelled to abduct three teenage girls led by the willful, observant Casey, Kevin reaches a war for survival among all of those contained within him — as well as everyone around him — as the walls between his compartments shatter apart.",
    image:
      "https://image.tmdb.org/t/p/original//lli31lYTFpvxVBeFHWoe5PMfW5s.jpg",
  },
  {
    id: 25,
    title: "Harry Potter and the Philosopher's Stone",
    releaseYear: "2001",
    genres: "Adventure, Fantasy",
    content:
      "Harry Potter and the Philosopher's Stone: Harry Potter has lived under the stairs at his aunt and uncle's house his whole life. But on his 11th birthday, he learns he's a powerful wizard—with a place waiting for him at the Hogwarts School of Witchcraft and Wizardry. As he learns to harness his newfound powers with the help of the school's kindly headmaster, Harry uncovers the truth about his parents' deaths—and about the villain who's to blame.",
    image:
      "https://image.tmdb.org/t/p/original//wuMc08IPKEatf9rnMNXvIDxqP4W.jpg",
  },
  {
    id: 26,
    title: "Taxi Driver",
    releaseYear: "1976",
    genres: "Crime, Drama",
    content:
      "Taxi Driver: A mentally unstable Vietnam War veteran works as a night-time taxi driver in New York City where the perceived decadence and sleaze feed his urge for violent action.",
    image:
      "https://image.tmdb.org/t/p/original//ekstpH614fwDX8DUln1a2Opz0N8.jpg",
  },
  {
    id: 27,
    title: "Dark City",
    releaseYear: "1998",
    genres: "Mystery, Science Fiction",
    content:
      "Dark City: A man struggles with memories of his past, including a wife he cannot remember, in a nightmarish world with no sun and run by beings with telekinetic powers who seek the souls of humans.",
    image:
      "https://image.tmdb.org/t/p/original//AdBe2ow8hdlT2aLBYuUjs0Xkqkw.jpg",
  },
  {
    id: 28,
    title: "Con Air",
    releaseYear: "1997",
    genres: "Action, Thriller, Crime",
    content:
      'Con Air: Newly-paroled former US Army ranger Cameron Poe is headed back to his wife, but must fly home aboard a prison transport flight dubbed "Jailbird" taking the “worst of the worst” prisoners, a group described as “pure predators”, to a new super-prison. Poe faces impossible odds when the transport plane is skyjacked mid-flight by the most vicious criminals in the country led by the mastermind — genius serial killer Cyrus "The Virus" Grissom, and backed by black militant Diamond Dog and psychopath Billy Bedlam.',
    image:
      "https://image.tmdb.org/t/p/original//kOKjgrEzGOP92rVQ6srA9jtp60l.jpg",
  },
  {
    id: 29,
    title: "Transformers: Rise of the Beasts",
    releaseYear: "2023",
    genres: "Action, Adventure, Science Fiction",
    content:
      "Transformers: Rise of the Beasts: When a new threat capable of destroying the entire planet emerges, Optimus Prime and the Autobots must team up with a powerful faction known as the Maximals. With the fate of humanity hanging in the balance, humans Noah and Elena will do whatever it takes to help the Transformers as they engage in the ultimate battle to save Earth.",
    image:
      "https://image.tmdb.org/t/p/original//gPbM0MK8CP8A174rmUwGsADNYKD.jpg",
  },
  {
    id: 10,
    title: "A Quiet Place",
    releaseYear: "2018",
    genres: "Horror, Drama, Science Fiction",
    content:
      "A Quiet Place: A family is forced to live in silence while hiding from creatures that hunt by sound.",
    image:
      "https://image.tmdb.org/t/p/original//nAU74GmpUk7t5iklEp3bufwDq4n.jpg",
  },
  {
    id: 11,
    title: "Dark Phoenix",
    releaseYear: "2019",
    genres: "Science Fiction, Action, Adventure",
    content:
      "Dark Phoenix: The X-Men face their most formidable and powerful foe when one of their own, Jean Grey, starts to spiral out of control. During a rescue mission in outer space, Jean is nearly killed when she's hit by a mysterious cosmic force. Once she returns home, this force not only makes her infinitely more powerful, but far more unstable. The X-Men must now band together to save her soul and battle aliens that want to use Grey's new abilities to rule the galaxy.",
    image:
      "https://image.tmdb.org/t/p/original//cCTJPelKGLhALq3r51A9uMonxKj.jpg",
  },
  {
    id: 12,
    title: "Avatar: The Way of Water",
    releaseYear: "2022",
    genres: "Science Fiction, Adventure, Action",
    content:
      "Avatar: The Way of Water: Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
    image:
      "https://image.tmdb.org/t/p/original//t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
  },
  {
    id: 13,
    title: "Morbius",
    releaseYear: "2022",
    genres: "Action, Science Fiction, Fantasy",
    content:
      "Morbius: Dangerously ill with a rare blood disorder, and determined to save others suffering his same fate, Dr. Michael Morbius attempts a desperate gamble. What at first appears to be a radical success soon reveals itself to be a remedy potentially worse than the disease.",
    image:
      "https://image.tmdb.org/t/p/original//6JjfSchsU6daXk2AKX8EEBjO3Fm.jpg",
  },
  {
    id: 14,
    title: "Spider-Man: No Way Home",
    releaseYear: "2021",
    genres: "Action, Adventure, Science Fiction",
    content:
      "Spider-Man: No Way Home: Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.",
    image:
      "https://image.tmdb.org/t/p/original//1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
  },
  {
    id: 15,
    title: "Citizen Kane",
    releaseYear: "1941",
    genres: "Mystery, Drama",
    content:
      "Citizen Kane: Newspaper magnate Charles Foster Kane is taken from his mother as a boy and made the ward of a rich industrialist. As a result, every well-meaning, tyrannical or self-destructive move he makes for the rest of his life appears in some way to be a reaction to that deeply wounding event.",
    image:
      "https://image.tmdb.org/t/p/original//sav0jxhqiH0bPr2vZFU0Kjt2nZL.jpg",
  },
  {
    id: 16,
    title: "Venom",
    releaseYear: "2018",
    genres: "Science Fiction, Action",
    content:
      "Venom: Investigative journalist Eddie Brock attempts a comeback following a scandal, but accidentally becomes the host of Venom, a violent, super powerful alien symbiote. Soon, he must rely on his newfound powers to protect the world from a shadowy organization looking for a symbiote of their own.",
    image:
      "https://image.tmdb.org/t/p/original//2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg",
  },
  {
    id: 17,
    title: "Baywatch",
    releaseYear: "2017",
    genres: "Comedy, Action, Crime",
    content:
      "Baywatch: Devoted lifeguard Mitch Buchannon butts heads with a brash new recruit. Together, they uncover a local criminal plot that threatens the future of the Bay.",
    image:
      "https://image.tmdb.org/t/p/original//6HE4xd8zloDqmjMZuhUCCw2UcY1.jpg",
  },
  {
    id: 18,
    title: "Deadpool 2",
    releaseYear: "2018",
    genres: "Action, Comedy, Adventure",
    content:
      "Deadpool 2: Wisecracking mercenary Deadpool battles the evil and powerful Cable and other bad guys to save a boy's life.",
    image:
      "https://image.tmdb.org/t/p/original//to0spRl1CMDvyUbOnbb4fTk3VAd.jpg",
  },
  {
    id: 19,
    title: "The Godfather",
    releaseYear: "1972",
    genres: "Drama, Crime",
    content:
      "The Godfather: Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
    image:
      "https://image.tmdb.org/t/p/original//3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
  },
  {
    id: 20,
    title: "Pirates of the Caribbean: The Curse of the Black Pearl",
    releaseYear: "2003",
    genres: "Adventure, Fantasy, Action",
    content:
      "Pirates of the Caribbean: The Curse of the Black Pearl: Jack Sparrow, a freewheeling 18th-century pirate, quarrels with a rival pirate bent on pillaging Port Royal. When the governor's daughter is kidnapped, Sparrow decides to help the girl's love save her.",
    image:
      "https://image.tmdb.org/t/p/original//poHwCZeWzJCShH7tOjg8RIoyjcw.jpg",
  },
  {
    id: 21,
    title: "Good Will Hunting",
    releaseYear: "1997",
    genres: "Drama",
    content:
      "Good Will Hunting: When professors discover that an aimless janitor is also a math genius, a therapist helps the young man confront the demons that are holding him back.",
    image:
      "https://image.tmdb.org/t/p/original//bABCBKYBK7A5G1x0FzoeoNfuj2.jpg",
  },
  {
    id: 22,
    title: "Scarface",
    releaseYear: "1983",
    genres: "Action, Crime, Drama",
    content:
      "Scarface: After getting a green card in exchange for assassinating a Cuban government official, Tony Montana stakes a claim on the drug trade in Miami. Viciously murdering anyone who stands in his way, Tony eventually becomes the biggest drug lord in the state, controlling nearly all the cocaine that comes through Miami. But increased pressure from the police, wars with Colombian drug cartels and his own drug-fueled paranoia serve to fuel the flames of his eventual downfall.",
    image:
      "https://image.tmdb.org/t/p/original//iQ5ztdjvteGeboxtmRdXEChJOHh.jpg",
  },
  {
    id: 23,
    title: "Harry Potter and the Deathly Hallows: Part 2",
    releaseYear: "2011",
    genres: "Fantasy, Adventure",
    content:
      "Harry Potter and the Deathly Hallows: Part 2: Harry, Ron and Hermione continue their quest to vanquish the evil Voldemort once and for all. Just as things begin to look hopeless for the young wizards, Harry discovers a trio of magical objects that endow him with powers to rival Voldemort's formidable skills.",
    image:
      "https://image.tmdb.org/t/p/original//c54HpQmuwXjHq2C9wmoACjxoom3.jpg",
  },
  {
    id: 24,
    title: "The Void",
    releaseYear: "2016",
    genres: "Mystery, Horror, Science Fiction",
    content:
      "The Void: In the middle of a routine patrol, officer Daniel Carter happens upon a blood-soaked figure limping down a deserted stretch of road. He rushes the young man to a nearby rural hospital staffed by a skeleton crew, only to discover that patients and personnel are transforming into something inhuman. As the horror intensifies, Carter leads the other survivors on a hellish voyage into the subterranean depths of the hospital in a desperate bid to end the nightmare before it's too late.",
    image:
      "https://image.tmdb.org/t/p/original//c0WLRyT0AmUi41nVXBnqmJshIBn.jpg",
  },
  {
    id: 25,
    title: "Anyone But You",
    releaseYear: "2023",
    genres: "Romance, Comedy",
    content:
      "Anyone But You: After an amazing first date, Bea and Ben’s fiery attraction turns ice cold — until they find themselves unexpectedly reunited at a destination wedding in Australia. So they do what any two mature adults would do: pretend to be a couple.",
    image:
      "https://image.tmdb.org/t/p/original//5qHoazZiaLe7oFBok7XlUhg96f2.jpg",
  },
  {
    id: 26,
    title: "Logan Lucky",
    releaseYear: "2017",
    genres: "Comedy, Crime, Action, Drama",
    content:
      "Logan Lucky: Trying to reverse a family curse, brothers Jimmy and Clyde Logan set out to execute an elaborate robbery during the legendary Coca-Cola 600 race at the Charlotte Motor Speedway.",
    image:
      "https://image.tmdb.org/t/p/original//mQrhrBaaHvRfBQq0Px3HtVbH9iE.jpg",
  },
  {
    id: 27,
    title: "The Boy and the Heron",
    releaseYear: "2023",
    genres: "Animation, Adventure, Fantasy",
    content:
      "The Boy and the Heron: While the Second World War rages, the teenage Mahito, haunted by his mother's tragic death, is relocated from Tokyo to the serene rural home of his new stepmother Natsuko, a woman who bears a striking resemblance to the boy's mother. As he tries to adjust, this strange new world grows even stranger following the appearance of a persistent gray heron, who perplexes and bedevils Mahito, dubbing him the \"long-awaited one.\"",
    image:
      "https://image.tmdb.org/t/p/original//jDQPkgzerGophKRRn7MKm071vCU.jpg",
  },
  {
    id: 28,
    title: "Doctor Strange",
    releaseYear: "2016",
    genres: "Action, Adventure, Fantasy",
    content:
      "Doctor Strange: After his career is destroyed, a brilliant but arrogant surgeon gets a new lease on life when a sorcerer takes him under her wing and trains him to defend the world against evil.",
    image:
      "https://image.tmdb.org/t/p/original//7WfK17BXE6szXlm4WOxfswgbdsL.jpg",
  },
  {
    id: 29,
    title: "Judge Dredd",
    releaseYear: "1995",
    genres: "Science Fiction",
    content:
      "Judge Dredd: In a dystopian future, Dredd, the most famous judge (a cop with instant field judiciary powers) is convicted for a crime he did not commit while his murderous counterpart escapes.",
    image:
      "https://image.tmdb.org/t/p/original//cfSnKn8NDU3m8UxihjVcYprA0Aq.jpg",
  },
  {
    id: 10,
    title: "Jaws",
    releaseYear: "1975",
    genres: "Horror, Thriller, Adventure",
    content:
      "Jaws: When the seaside community of Amity finds itself under attack by a dangerous great white shark, the town's chief of police, a young marine biologist, and a grizzled hunter embark on a desperate quest to destroy the beast before it strikes again.",
    image:
      "https://image.tmdb.org/t/p/original//lxM6kqilAdpdhqUl2biYp5frUxE.jpg",
  },
  {
    id: 11,
    title: "Angel Heart",
    releaseYear: "1987",
    genres: "Horror, Mystery",
    content:
      "Angel Heart: A down-and-out Brooklyn detective is hired to track down a singer on an odyssey that will take him through the desperate streets of Harlem, the smoke-filled jazz clubs of New Orleans, and the swamps of Louisiana and its seedy underworld of voodoo.",
    image:
      "https://image.tmdb.org/t/p/original//h5v3wjJQNB7q2RntEnKDLhKtTFE.jpg",
  },
  {
    id: 12,
    title: "Death Wish",
    releaseYear: "2018",
    genres: "Action, Crime, Drama, Thriller",
    content:
      "Death Wish: A mild-mannered father is transformed into a killing machine after his family is torn apart by a violent act.",
    image:
      "https://image.tmdb.org/t/p/original//g0eEEZAqMf98ULQnoiORuazjOpn.jpg",
  },
  {
    id: 13,
    title: "Thor: Love and Thunder",
    releaseYear: "2022",
    genres: "Fantasy, Action, Comedy",
    content:
      "Thor: Love and Thunder: After his retirement is interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods, Thor Odinson enlists the help of King Valkyrie, Korg, and ex-girlfriend Jane Foster, who now wields Mjolnir as the Mighty Thor. Together they embark upon a harrowing cosmic adventure to uncover the mystery of the God Butcher’s vengeance and stop him before it’s too late.",
    image:
      "https://image.tmdb.org/t/p/original//pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg",
  },
  {
    id: 14,
    title: "Babylon",
    releaseYear: "2022",
    genres: "Drama, Comedy",
    content:
      "Babylon: A tale of outsized ambition and outrageous excess, tracing the rise and fall of multiple characters in an era of unbridled decadence and depravity during Hollywood's transition from silent films to sound films in the late 1920s.",
    image:
      "https://image.tmdb.org/t/p/original//wjOHjWCUE0YzDiEzKv8AfqHj3ir.jpg",
  },
  {
    id: 15,
    title: "Silence",
    releaseYear: "2016",
    genres: "Drama, History",
    content:
      "Silence: Two Jesuit priests travel to seventeenth century Japan which has, under the Tokugawa shogunate, banned Catholicism and almost all foreign contact.",
    image:
      "https://image.tmdb.org/t/p/original//x5T0cQDYws0xRBVG4Q3wpcrcmax.jpg",
  },
  {
    id: 16,
    title: "Spider-Man: Homecoming",
    releaseYear: "2017",
    genres: "Action, Adventure, Science Fiction, Drama",
    content:
      "Spider-Man: Homecoming: Following the events of Captain America: Civil War, Peter Parker, with the help of his mentor Tony Stark, tries to balance his life as an ordinary high school student in Queens, New York City, with fighting crime as his superhero alter ego Spider-Man as a new threat, the Vulture, emerges.",
    image:
      "https://image.tmdb.org/t/p/original//c24sv2weTHPsmDa7jEMN0m2P3RT.jpg",
  },
  {
    id: 17,
    title: "Harry Potter and the Chamber of Secrets",
    releaseYear: "2002",
    genres: "Adventure, Fantasy",
    content:
      "Harry Potter and the Chamber of Secrets: Cars fly, trees fight back, and a mysterious house-elf comes to warn Harry Potter at the start of his second year at Hogwarts. Adventure and danger await when bloody writing on a wall announces: The Chamber Of Secrets Has Been Opened. To save Hogwarts will require all of Harry, Ron and Hermione’s magical abilities and courage.",
    image:
      "https://image.tmdb.org/t/p/original//sdEOH0992YZ0QSxgXNIGLq1ToUi.jpg",
  },
  {
    id: 18,
    title: "Challengers",
    releaseYear: "2024",
    genres: "Romance, Drama",
    content:
      'Challengers: Tennis player turned coach Tashi has taken her husband, Art, and transformed him into a world-famous Grand Slam champion. To jolt him out of his recent losing streak, she signs him up for a "Challenger" event — close to the lowest level of pro tournament — where he finds himself standing across the net from his former best friend and Tashi\'s former boyfriend.',
    image:
      "https://image.tmdb.org/t/p/original//H6vke7zGiuLsz4v4RPeReb9rsv.jpg",
  },
  {
    id: 19,
    title: "Harry Potter and the Prisoner of Azkaban",
    releaseYear: "2004",
    genres: "Adventure, Fantasy",
    content:
      "Harry Potter and the Prisoner of Azkaban: Year three at Hogwarts means new fun and challenges as Harry learns the delicate art of approaching a Hippogriff, transforming shape-shifting Boggarts into hilarity and even turning back time. But the term also brings danger: soul-sucking Dementors hover over the school, an ally of the accursed He-Who-Cannot-Be-Named lurks within the castle walls, and fearsome wizard Sirius Black escapes Azkaban. And Harry will confront them all.",
    image:
      "https://image.tmdb.org/t/p/original//aWxwnYoe8p2d2fcxOqtvAtJ72Rw.jpg",
  },
  {
    id: 20,
    title: "Total Recall",
    releaseYear: "2012",
    genres: "Action, Science Fiction, Thriller",
    content:
      "Total Recall: Factory worker Doug Quaid takes a virtual mind-trip vacation with the Rekall company, opting for implanted memories of being a spy. When the procedure goes wrong, Quaid becomes a wanted man by the police and joins forces with a rebel fighter to stop the evil Chancellor Cohaagen.",
    image:
      "https://image.tmdb.org/t/p/original//4M5urSlUyR2PtVBIoW9hLG9NQCQ.jpg",
  },
  {
    id: 21,
    title: "Prey",
    releaseYear: "2022",
    genres: "Thriller, Action, Science Fiction",
    content:
      "Prey: When danger threatens her camp, the fierce and highly skilled Comanche warrior Naru sets out to protect her people. But the prey she stalks turns out to be a highly evolved alien predator with a technically advanced arsenal.",
    image:
      "https://image.tmdb.org/t/p/original//ujr5pztc1oitbe7ViMUOilFaJ7s.jpg",
  },
  {
    id: 22,
    title: "Harry Potter and the Goblet of Fire",
    releaseYear: "2005",
    genres: "Adventure, Fantasy",
    content:
      "Harry Potter and the Goblet of Fire: When Harry Potter's name emerges from the Goblet of Fire, he becomes a competitor in a grueling battle for glory among three wizarding schools—the Triwizard Tournament. But since Harry never submitted his name for the Tournament, who did? Now Harry must confront a deadly dragon, fierce water demons and an enchanted maze only to find himself in the cruel grasp of He Who Must Not Be Named.",
    image:
      "https://image.tmdb.org/t/p/original//fECBtHlr0RB3foNHDiCBXeg9Bv9.jpg",
  },
  {
    id: 23,
    title: "Harry Potter and the Half-Blood Prince",
    releaseYear: "2009",
    genres: "Adventure, Fantasy",
    content:
      "Harry Potter and the Half-Blood Prince: As Lord Voldemort tightens his grip on both the Muggle and wizarding worlds, Hogwarts is no longer a safe haven. Harry suspects perils may even lie within the castle, but Dumbledore is more intent upon preparing him for the final battle fast approaching. Together they work to find the key to unlock Voldemorts defenses and to this end, Dumbledore recruits his old friend and colleague Horace Slughorn, whom he believes holds crucial information. Even as the decisive showdown looms, romance blossoms for Harry, Ron, Hermione and their classmates. Love is in the air, but danger lies ahead and Hogwarts may never be the same again.",
    image:
      "https://image.tmdb.org/t/p/original//z7uo9zmQdQwU5ZJHFpv2Upl30i1.jpg",
  },
  {
    id: 24,
    title: "Halloween",
    releaseYear: "2018",
    genres: "Horror, Thriller",
    content:
      "Halloween: Laurie Strode comes to her final confrontation with Michael Myers, the masked figure who has haunted her since she narrowly escaped his killing spree on Halloween night four decades ago.",
    image:
      "https://image.tmdb.org/t/p/original//f7JAX5EGk4GgsEnus6OxyzwpFp7.jpg",
  },
  {
    id: 25,
    title: "It Chapter Two",
    releaseYear: "2019",
    genres: "Horror",
    content:
      "It Chapter Two: 27 years after overcoming the malevolent supernatural entity Pennywise, the former members of the Losers' Club, who have grown up and moved away from Derry, are brought back together by a devastating phone call.",
    image:
      "https://image.tmdb.org/t/p/original//zfE0R94v1E8cuKAerbskfD3VfUt.jpg",
  },
  {
    id: 26,
    title: "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
    releaseYear: "2005",
    genres: "Adventure, Family, Fantasy",
    content:
      "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe: Siblings Lucy, Edmund, Susan and Peter step through a magical wardrobe and find the land of Narnia. There, they discover a charming, once peaceful kingdom that has been plunged into eternal winter by the evil White Witch, Jadis. Aided by the wise and magnificent lion, Aslan, the children lead Narnia into a spectacular, climactic battle to be free of the Witch's glacial powers forever.",
    image:
      "https://image.tmdb.org/t/p/original//iREd0rNCjYdf5Ar0vfaW32yrkm.jpg",
  },
  {
    id: 27,
    title: "The Blues Brothers",
    releaseYear: "1980",
    genres: "Music, Comedy, Action, Crime",
    content:
      "The Blues Brothers: Jake Blues, just released from prison, puts his old band back together to save the Catholic home where he and his brother Elwood were raised.",
    image:
      "https://image.tmdb.org/t/p/original//rhYJKOt6UrQq7JQgLyQcSWW5R86.jpg",
  },
  {
    id: 28,
    title: "Pirates of the Caribbean: Dead Man's Chest",
    releaseYear: "2006",
    genres: "Adventure, Fantasy, Action",
    content:
      "Pirates of the Caribbean: Dead Man's Chest: Captain Jack Sparrow works his way out of a blood debt with the ghostly Davy Jones to avoid eternal damnation.",
    image:
      "https://image.tmdb.org/t/p/original//uXEqmloGyP7UXAiphJUu2v2pcuE.jpg",
  },
  {
    id: 29,
    title: "Top Gun: Maverick",
    releaseYear: "2022",
    genres: "Action, Drama",
    content:
      "Top Gun: Maverick: After more than thirty years of service as one of the Navy’s top aviators, and dodging the advancement in rank that would ground him, Pete “Maverick” Mitchell finds himself training a detachment of TOP GUN graduates for a specialized mission the likes of which no living pilot has ever seen.",
    image:
      "https://image.tmdb.org/t/p/original//62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
  },
  {
    id: 10,
    title: "Coraline",
    releaseYear: "2009",
    genres: "Animation, Family, Fantasy",
    content:
      "Coraline: A young girl discovers an idealized parallel universe behind a secret door in her new home, unaware that it contains a sinister secret.",
    image:
      "https://image.tmdb.org/t/p/original//4jeFXQYytChdZYE9JYO7Un87IlW.jpg",
  },
  {
    id: 11,
    title: "Pirates of the Caribbean: At World's End",
    releaseYear: "2007",
    genres: "Adventure, Fantasy, Action",
    content:
      "Pirates of the Caribbean: At World's End: Captain Barbossa, long believed to be dead, has come back to life and is headed to the edge of the Earth with Will Turner and Elizabeth Swann. But nothing is quite as it seems.",
    image:
      "https://image.tmdb.org/t/p/original//jGWpG4YhpQwVmjyHEGkxEkeRf0S.jpg",
  },
  {
    id: 12,
    title: "Rise of the Planet of the Apes",
    releaseYear: "2011",
    genres: "Thriller, Action, Drama, Science Fiction",
    content:
      "Rise of the Planet of the Apes: A highly intelligent chimpanzee named Caesar has been living a peaceful suburban life ever since he was born. But when he gets taken to a cruel primate facility, Caesar decides to revolt against those who have harmed him.",
    image:
      "https://image.tmdb.org/t/p/original//cjLsuP75UDlRdJVMXzXg3TJ4umX.jpg",
  },
  {
    id: 13,
    title: "Damsel",
    releaseYear: "2024",
    genres: "Fantasy, Action, Adventure",
    content:
      "Damsel: A young woman's marriage to a charming prince turns into a fierce fight for survival when she's offered up as a sacrifice to a fire-breathing dragon.",
    image:
      "https://image.tmdb.org/t/p/original//AgHbB9DCE9aE57zkHjSmseszh6e.jpg",
  },
  {
    id: 14,
    title: "X-Men: Apocalypse",
    releaseYear: "2016",
    genres: "Action, Adventure, Science Fiction, Fantasy",
    content:
      "X-Men: Apocalypse: After the re-emergence of the world's first mutant, world-destroyer Apocalypse, the X-Men must unite to defeat his extinction level plan.",
    image:
      "https://image.tmdb.org/t/p/original//2mtQwJKVKQrZgTz49Dizb25eOQQ.jpg",
  },
  {
    id: 15,
    title: "Harry Potter and the Deathly Hallows: Part 1",
    releaseYear: "2010",
    genres: "Adventure, Fantasy",
    content:
      "Harry Potter and the Deathly Hallows: Part 1: Harry, Ron and Hermione walk away from their last year at Hogwarts to find and destroy the remaining Horcruxes, putting an end to Voldemort's bid for immortality. But with Harry's beloved Dumbledore dead and Voldemort's unscrupulous Death Eaters on the loose, the world is more dangerous than ever.",
    image:
      "https://image.tmdb.org/t/p/original//iGoXIpQb7Pot00EEdwpwPajheZ5.jpg",
  },
  {
    id: 16,
    title: "Despicable Me 2",
    releaseYear: "2013",
    genres: "Animation, Comedy, Family",
    content:
      "Despicable Me 2: Gru is recruited by the Anti-Villain League to help deal with a powerful new super criminal.",
    image:
      "https://image.tmdb.org/t/p/original//5Fh4NdoEnCjCK9wLjdJ9DJNFl2b.jpg",
  },
  {
    id: 17,
    title: "Ghostbusters",
    releaseYear: "1984",
    genres: "Comedy, Fantasy",
    content:
      'Ghostbusters: After losing their academic posts at a prestigious university, a team of parapsychologists goes into business as proton-pack-toting "ghostbusters" who exterminate ghouls, hobgoblins and supernatural pests of all stripes. An ad campaign pays off when a knockout cellist hires the squad to purge her swanky digs of demons that appear to be living in her refrigerator.',
    image:
      "https://image.tmdb.org/t/p/original//7E8nLijS9AwwUEPu2oFYOVKhdFA.jpg",
  },
  {
    id: 18,
    title: "Baby Driver",
    releaseYear: "2017",
    genres: "Action, Crime",
    content:
      "Baby Driver: After being coerced into working for a crime boss, a young getaway driver finds himself taking part in a heist doomed to fail.",
    image:
      "https://image.tmdb.org/t/p/original//rmnQ9jKW72bHu8uKlMjPIb2VLMI.jpg",
  },
  {
    id: 19,
    title: "Aquaman and the Lost Kingdom",
    releaseYear: "2023",
    genres: "Action, Adventure, Fantasy",
    content:
      "Aquaman and the Lost Kingdom: Black Manta seeks revenge on Aquaman for his father's death. Wielding the Black Trident's power, he becomes a formidable foe. To defend Atlantis, Aquaman forges an alliance with his imprisoned brother. They must protect the kingdom.",
    image:
      "https://image.tmdb.org/t/p/original//7lTnXOy0iNtBAdRP3TZvaKJ77F6.jpg",
  },
  {
    id: 20,
    title: "The 'Burbs",
    releaseYear: "1989",
    genres: "Comedy, Horror, Thriller",
    content:
      "The 'Burbs: When secretive new neighbors move in next door, suburbanite Ray Peterson and his friends let their paranoia get the best of them as they start to suspect the newcomers of evildoings and commence an investigation. But it's hardly how Ray, who much prefers drinking beer, reading his newspaper and watching a ball game on the tube expected to spend his vacation.",
    image:
      "https://image.tmdb.org/t/p/original//vrVPAcv2njVdnkqhBwGBc7UxCjz.jpg",
  },
  {
    id: 21,
    title: "Toy Story",
    releaseYear: "1995",
    genres: "Animation, Adventure, Family, Comedy",
    content:
      "Toy Story: Led by Woody, Andy's toys live happily in his room until Andy's birthday brings Buzz Lightyear onto the scene. Afraid of losing his place in Andy's heart, Woody plots against Buzz. But when circumstances separate Buzz and Woody from their owner, the duo eventually learns to put aside their differences.",
    image:
      "https://image.tmdb.org/t/p/original//uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg",
  },
  {
    id: 22,
    title: "The Equalizer 3",
    releaseYear: "2023",
    genres: "Action, Thriller, Crime",
    content:
      "The Equalizer 3: Robert McCall finds himself at home in Southern Italy but he discovers his friends are under the control of local crime bosses. As events turn deadly, McCall knows what he has to do: become his friends' protector by taking on the mafia.",
    image:
      "https://image.tmdb.org/t/p/original//b0Ej6fnXAP8fK75hlyi2jKqdhHz.jpg",
  },
  {
    id: 23,
    title: "The Family Plan",
    releaseYear: "2023",
    genres: "Action, Comedy",
    content:
      "The Family Plan: Dan Morgan is many things: a devoted husband, a loving father, a celebrated car salesman. He's also a former assassin. And when his past catches up to his present, he's forced to take his unsuspecting family on a road trip unlike any other.",
    image:
      "https://image.tmdb.org/t/p/original//jLLtx3nTRSLGPAKl4RoIv1FbEBr.jpg",
  },
  {
    id: 24,
    title: "The Beekeeper",
    releaseYear: "2024",
    genres: "Action, Crime, Thriller",
    content:
      "The Beekeeper: One man's campaign for vengeance takes on national stakes after he is revealed to be a former operative of a powerful and clandestine organization known as Beekeepers.",
    image:
      "https://image.tmdb.org/t/p/original//A7EByudX0eOzlkQ2FIbogzyazm2.jpg",
  },
  {
    id: 25,
    title: "Se7en",
    releaseYear: "1995",
    genres: "Crime, Mystery, Thriller",
    content:
      'Se7en: Two homicide detectives are on a desperate hunt for a serial killer whose crimes are based on the "seven deadly sins" in this dark and haunting film that takes viewers from the tortured remains of one victim to the next. The seasoned Det. Sommerset researches each sin in an effort to get inside the killer\'s mind, while his novice partner, Mills, scoffs at his efforts to unravel the case.',
    image:
      "https://image.tmdb.org/t/p/original//6yoghtyTpznpBik8EngEmJskVUO.jpg",
  },
  {
    id: 26,
    title: "Guardians of the Galaxy Vol. 3",
    releaseYear: "2023",
    genres: "Science Fiction, Adventure, Action",
    content:
      "Guardians of the Galaxy Vol. 3: Peter Quill, still reeling from the loss of Gamora, must rally his team around him to defend the universe along with protecting one of their own. A mission that, if not completed successfully, could quite possibly lead to the end of the Guardians as we know them.",
    image:
      "https://image.tmdb.org/t/p/original//r2J02Z2OpNTctfOSN1Ydgii51I3.jpg",
  },
  {
    id: 27,
    title: "Skyscraper",
    releaseYear: "2018",
    genres: "Action, Thriller, Adventure",
    content:
      "Skyscraper: Framed and on the run, a former FBI agent must save his family from a blazing fire in the world's tallest building.",
    image:
      "https://image.tmdb.org/t/p/original//52ml62vClzrlqvXZq2FEW6UF6c1.jpg",
  },
  {
    id: 28,
    title: "Teenage Mutant Ninja Turtles: Mutant Mayhem",
    releaseYear: "2023",
    genres: "Animation, Comedy, Action, Science Fiction",
    content:
      "Teenage Mutant Ninja Turtles: Mutant Mayhem: After years of being sheltered from the human world, the Turtle brothers set out to win the hearts of New Yorkers and be accepted as normal teenagers through heroic acts. Their new friend April O'Neil helps them take on a mysterious crime syndicate, but they soon get in over their heads when an army of mutants is unleashed upon them.",
    image:
      "https://image.tmdb.org/t/p/original//ueO9MYIOHO7M1PiMUeX74uf8fB9.jpg",
  },
  {
    id: 29,
    title: "Five Nights at Freddy's",
    releaseYear: "2023",
    genres: "Horror, Mystery",
    content:
      "Five Nights at Freddy's: Recently fired and desperate for work, a troubled young man named Mike agrees to take a position as a night security guard at an abandoned theme restaurant: Freddy Fazbear's Pizzeria. But he soon discovers that nothing at Freddy's is what it seems.",
    image:
      "https://image.tmdb.org/t/p/original//nuv2CzJsG605LMZaifUigDyuOEO.jpg",
  },
  {
    id: 10,
    title: "Avengers: Endgame",
    releaseYear: "2019",
    genres: "Adventure, Science Fiction, Action",
    content:
      "Avengers: Endgame: After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and restore order to the universe once and for all, no matter what consequences may be in store.",
    image:
      "https://image.tmdb.org/t/p/original//or06FN3Dka5tukK1e9sl16pB3iy.jpg",
  },
  {
    id: 11,
    title: "Fifty Shades of Grey",
    releaseYear: "2015",
    genres: "Drama, Romance, Thriller",
    content:
      "Fifty Shades of Grey: When college senior Anastasia Steele steps in for her sick roommate to interview prominent businessman Christian Grey for their campus paper, little does she realize the path her life will take. Christian, as enigmatic as he is rich and powerful, finds himself strangely drawn to Ana, and she to him. Though sexually inexperienced, Ana plunges headlong into an affair -- and learns that Christian's true sexual proclivities push the boundaries of pain and pleasure.",
    image:
      "https://image.tmdb.org/t/p/original//63kGofUkt1Mx0SIL4XI4Z5AoSgt.jpg",
  },
  {
    id: 12,
    title: "Shrek",
    releaseYear: "2001",
    genres: "Animation, Comedy, Fantasy, Adventure, Family",
    content:
      "Shrek: It ain't easy bein' green -- especially if you're a likable (albeit smelly) ogre named Shrek. On a mission to retrieve a gorgeous princess from the clutches of a fire-breathing dragon, Shrek teams up with an unlikely compatriot -- a wisecracking donkey.",
    image:
      "https://image.tmdb.org/t/p/original//iB64vpL3dIObOtMZgX3RqdVdQDc.jpg",
  },
  {
    id: 13,
    title: "Harry Potter and the Order of the Phoenix",
    releaseYear: "2007",
    genres: "Adventure, Fantasy",
    content:
      "Harry Potter and the Order of the Phoenix: Returning for his fifth year of study at Hogwarts, Harry is stunned to find that his warnings about the return of Lord Voldemort have been ignored. Left with no choice, Harry takes matters into his own hands, training a small group of students to defend themselves against the dark arts.",
    image:
      "https://image.tmdb.org/t/p/original//5aOyriWkPec0zUDxmHFP9qMmBaj.jpg",
  },
  {
    id: 14,
    title: "Wonder Woman 1984",
    releaseYear: "2020",
    genres: "Action, Adventure, Fantasy",
    content:
      "Wonder Woman 1984: A botched store robbery places Wonder Woman in a global battle against a powerful and mysterious ancient force that puts her powers in jeopardy.",
    image:
      "https://image.tmdb.org/t/p/original//8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg",
  },
  {
    id: 15,
    title: "The Mummy",
    releaseYear: "2017",
    genres: "Fantasy, Thriller, Action, Adventure, Horror",
    content:
      "The Mummy: Though safely entombed in a crypt deep beneath the unforgiving desert, an ancient queen whose destiny was unjustly taken from her is awakened in our current day, bringing with her malevolence grown over millennia, and terrors that defy human comprehension.",
    image:
      "https://image.tmdb.org/t/p/original//zxkY8byBnCsXodEYpK8tmwEGXBI.jpg",
  },
  {
    id: 16,
    title: "Justice League",
    releaseYear: "2017",
    genres: "Action, Adventure, Science Fiction",
    content:
      "Justice League: Fuelled by his restored faith in humanity and inspired by Superman's selfless act, Bruce Wayne and Diana Prince assemble a team of metahumans consisting of Barry Allen, Arthur Curry and Victor Stone to face the catastrophic threat of Steppenwolf and the Parademons who are on the hunt for three Mother Boxes on Earth.",
    image:
      "https://image.tmdb.org/t/p/original//eifGNCSDuxJeS1loAXil5bIGgvC.jpg",
  },
  {
    id: 17,
    title: "Black Panther: Wakanda Forever",
    releaseYear: "2022",
    genres: "Action, Adventure, Science Fiction",
    content:
      "Black Panther: Wakanda Forever: Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.",
    image:
      "https://image.tmdb.org/t/p/original//sv1xJUazXeYqALzczSZ3O6nkH75.jpg",
  },
  {
    id: 18,
    title: "Transformers: Age of Extinction",
    releaseYear: "2014",
    genres: "Science Fiction, Action, Adventure",
    content:
      'Transformers: Age of Extinction: As humanity picks up the pieces, following the conclusion of "Transformers: Dark of the Moon," Autobots and Decepticons have all but vanished from the face of the planet. However, a group of powerful, ingenious businessman and scientists attempt to learn from past Transformer incursions and push the boundaries of technology beyond what they can control - all while an ancient, powerful Transformer menace sets Earth in his cross-hairs.',
    image:
      "https://image.tmdb.org/t/p/original//jyzrfx2WaeY60kYZpPYepSjGz4S.jpg",
  },
  {
    id: 19,
    title: "The Suicide Squad",
    releaseYear: "2021",
    genres: "Action, Comedy, Adventure",
    content:
      "The Suicide Squad: Supervillains Harley Quinn, Bloodsport, Peacemaker and a collection of nutty cons at Belle Reve prison join the super-secret, super-shady Task Force X as they are dropped off at the remote, enemy-infused island of Corto Maltese.",
    image:
      "https://image.tmdb.org/t/p/original//kb4s0ML0iVZlG6wAKbbs9NAm6X.jpg",
  },
  {
    id: 20,
    title: "The Hunger Games: The Ballad of Songbirds & Snakes",
    releaseYear: "2023",
    genres: "Drama, Science Fiction, Action",
    content:
      "The Hunger Games: The Ballad of Songbirds & Snakes: 64 years before he becomes the tyrannical president of Panem, Coriolanus Snow sees a chance for a change in fortunes when he mentors Lucy Gray Baird, the female tribute from District 12.",
    image:
      "https://image.tmdb.org/t/p/original//mBaXZ95R2OxueZhvQbcEWy2DqyO.jpg",
  },
  {
    id: 21,
    title: "The Avengers",
    releaseYear: "2012",
    genres: "Science Fiction, Action, Adventure",
    content:
      "The Avengers: When an unexpected enemy emerges and threatens global safety and security, Nick Fury, director of the international peacekeeping agency known as S.H.I.E.L.D., finds himself in need of a team to pull the world back from the brink of disaster. Spanning the globe, a daring recruitment effort begins!",
    image:
      "https://image.tmdb.org/t/p/original//RYMX2wcKCBAr24UyPD7xwmjaTn.jpg",
  },
  {
    id: 22,
    title: "The Amazing Spider-Man 2",
    releaseYear: "2014",
    genres: "Action, Adventure, Science Fiction",
    content:
      "The Amazing Spider-Man 2: For Peter Parker, life is busy. Between taking out the bad guys as Spider-Man and spending time with the person he loves, Gwen Stacy, high school graduation cannot come quickly enough. Peter has not forgotten about the promise he made to Gwen’s father to protect her by staying away, but that is a promise he cannot keep. Things will change for Peter when a new villain, Electro, emerges, an old friend, Harry Osborn, returns, and Peter uncovers new clues about his past.",
    image:
      "https://image.tmdb.org/t/p/original//kV61FAIsRWZP6JhgWFOKug9RbBx.jpg",
  },
  {
    id: 23,
    title: "GoodFellas",
    releaseYear: "1990",
    genres: "Drama, Crime",
    content:
      "GoodFellas: The true story of Henry Hill, a half-Irish, half-Sicilian Brooklyn kid who is adopted by neighbourhood gangsters at an early age and climbs the ranks of a Mafia family under the guidance of Jimmy Conway.",
    image:
      "https://image.tmdb.org/t/p/original//aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg",
  },
  {
    id: 24,
    title: "Iron Man 3",
    releaseYear: "2013",
    genres: "Action, Adventure, Science Fiction",
    content:
      "Iron Man 3: When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution.",
    image:
      "https://image.tmdb.org/t/p/original//qhPtAc1TKbMPqNvcdXSOn9Bn7hZ.jpg",
  },
  {
    id: 25,
    title: "It",
    releaseYear: "2017",
    genres: "Horror",
    content:
      "It: In a small town in Maine, seven children known as The Losers Club come face to face with life problems, bullies and a monster that takes the shape of a clown called Pennywise.",
    image:
      "https://image.tmdb.org/t/p/original//9E2y5Q7WlCVNEhP5GiVTjhEhx1o.jpg",
  },
  {
    id: 26,
    title: "Dawn of the Planet of the Apes",
    releaseYear: "2014",
    genres: "Science Fiction, Action, Drama, Thriller",
    content:
      "Dawn of the Planet of the Apes: A group of scientists in San Francisco struggle to stay alive in the aftermath of a plague that is wiping out humanity, while Caesar tries to maintain dominance over his community of intelligent apes.",
    image:
      "https://image.tmdb.org/t/p/original//kScdQEwS9jPEdnO23XjGAtaoRcT.jpg",
  },
  {
    id: 27,
    title: "Encanto",
    releaseYear: "2021",
    genres: "Animation, Comedy, Family, Fantasy",
    content:
      "Encanto: The tale of an extraordinary family, the Madrigals, who live hidden in the mountains of Colombia, in a magical house, in a vibrant town, in a wondrous, charmed place called an Encanto. The magic of the Encanto has blessed every child in the family—every child except one, Mirabel. But when she discovers that the magic surrounding the Encanto is in danger, Mirabel decides that she, the only ordinary Madrigal, might just be her exceptional family's last hope.",
    image:
      "https://image.tmdb.org/t/p/original//4j0PNHkMr5ax3IA8tjtxcmPU3QT.jpg",
  },
  {
    id: 28,
    title: "Me Before You",
    releaseYear: "2016",
    genres: "Drama, Romance",
    content:
      "Me Before You: A small town girl is caught between dead-end jobs. A high-profile, successful man becomes wheelchair bound following an accident. The man decides his life is not worth living until the girl is hired for six months to be his new caretaker. Worlds apart and trapped together by circumstance, the two get off to a rocky start. But the girl becomes determined to prove to the man that life is worth living and as they embark on a series of adventures together, each finds their world changing in ways neither of them could begin to imagine.",
    image:
      "https://image.tmdb.org/t/p/original//Ia3dzj5LnCj1ZBdlVeJrbKJQxG.jpg",
  },
  {
    id: 29,
    title: "Blade",
    releaseYear: "1998",
    genres: "Horror, Action",
    content:
      'Blade: The Daywalker known as "Blade" - a half-vampire, half-mortal man - becomes the protector of humanity against an underground army of vampires.',
    image:
      "https://image.tmdb.org/t/p/original//oWT70TvbsmQaqyphCZpsnQR7R32.jpg",
  },
  {
    id: 10,
    title: "Thor: The Dark World",
    releaseYear: "2013",
    genres: "Action, Adventure, Fantasy",
    content:
      "Thor: The Dark World: Thor fights to restore order across the cosmos… but an ancient race led by the vengeful Malekith returns to plunge the universe back into darkness. Faced with an enemy that even Odin and Asgard cannot withstand, Thor must embark on his most perilous and personal journey yet, one that will reunite him with Jane Foster and force him to sacrifice everything to save us all.",
    image:
      "https://image.tmdb.org/t/p/original//wp6OxE4poJ4G7c0U2ZIXasTSMR7.jpg",
  },
  {
    id: 11,
    title: "Frozen",
    releaseYear: "2013",
    genres: "Animation, Family, Adventure, Fantasy",
    content:
      "Frozen: Young princess Anna of Arendelle dreams about finding true love at her sister Elsa’s coronation. Fate takes her on a dangerous journey in an attempt to end the eternal winter that has fallen over the kingdom. She's accompanied by ice delivery man Kristoff, his reindeer Sven, and snowman Olaf. On an adventure where she will find out what friendship, courage, family, and true love really means.",
    image:
      "https://image.tmdb.org/t/p/original//itAKcobTYGpYT8Phwjd8c9hleTo.jpg",
  },
  {
    id: 12,
    title: "Die Another Day",
    releaseYear: "2002",
    genres: "Adventure, Action, Thriller",
    content:
      "Die Another Day: James Bond is sent to investigate the connection between a North Korean terrorist and a diamond mogul, who is funding the development of an international space weapon.",
    image:
      "https://image.tmdb.org/t/p/original//bZmGqOhMhaLn8AoFMvFDct4tbrL.jpg",
  },
  {
    id: 13,
    title: "Lady Bird",
    releaseYear: "2017",
    genres: "Drama, Comedy",
    content:
      "Lady Bird: Lady Bird McPherson, a strong willed, deeply opinionated, artistic 17 year old comes of age in Sacramento. Her relationship with her mother and her upbringing are questioned and tested as she plans to head off to college.",
    image:
      "https://image.tmdb.org/t/p/original//gl66K7zRdtNYGrxyS2YDUP5ASZd.jpg",
  },
  {
    id: 14,
    title: "Fast & Furious Presents: Hobbs & Shaw",
    releaseYear: "2019",
    genres: "Action, Adventure, Comedy",
    content:
      "Fast & Furious Presents: Hobbs & Shaw: Ever since US Diplomatic Security Service Agent Hobbs and lawless outcast Shaw first faced off, they just have traded smack talk and body blows. But when cyber-genetically enhanced anarchist Brixton's ruthless actions threaten the future of humanity, they join forces to defeat him.",
    image:
      "https://image.tmdb.org/t/p/original//qRyy2UmjC5ur9bDi3kpNNRCc5nc.jpg",
  },
  {
    id: 15,
    title: "Shrek Forever After",
    releaseYear: "2010",
    genres: "Comedy, Adventure, Fantasy, Animation, Family",
    content:
      "Shrek Forever After: A bored and domesticated Shrek pacts with deal-maker Rumpelstiltskin to get back to feeling like a real ogre again, but when he's duped and sent to a twisted version of Far Far Away—where Rumpelstiltskin is king, ogres are hunted, and he and Fiona have never met—he sets out to restore his world and reclaim his true love.",
    image:
      "https://image.tmdb.org/t/p/original//6HrfPZtKcGmX2tUWW3cnciZTaSD.jpg",
  },
  {
    id: 16,
    title: "Insidious: The Red Door",
    releaseYear: "2023",
    genres: "Horror, Thriller",
    content:
      "Insidious: The Red Door: To put their demons to rest once and for all, Josh Lambert and a college-aged Dalton Lambert must go deeper into The Further than ever before, facing their family's dark past and a host of new and more horrifying terrors that lurk behind the red door.",
    image:
      "https://image.tmdb.org/t/p/original//uS1AIL7I1Ycgs8PTfqUeN6jYNsQ.jpg",
  },
  {
    id: 17,
    title: "The Maze Runner",
    releaseYear: "2014",
    genres: "Action, Mystery, Science Fiction, Thriller",
    content:
      "The Maze Runner: Set in a post-apocalyptic world, young Thomas is deposited in a community of boys after his memory is erased, soon learning they're all trapped in a maze that will require him to join forces with fellow “runners” for a shot at escape.",
    image:
      "https://image.tmdb.org/t/p/original//ode14q7WtDugFDp78fo9lCsmay9.jpg",
  },
  {
    id: 18,
    title: "Rings",
    releaseYear: "2017",
    genres: "Horror",
    content:
      'Rings: Julia becomes worried about her boyfriend Holt when he explores the dark urban legend of a mysterious videotape said to kill the watcher seven days after viewing. She sacrifices herself to save her boyfriend and in doing so makes a horrifying discovery: there is a "movie within the movie" that no one has ever seen before.',
    image:
      "https://image.tmdb.org/t/p/original//5FoczK6tDFzC9OyHiMMNIeNspek.jpg",
  },
  {
    id: 19,
    title: "Creed II",
    releaseYear: "2018",
    genres: "Drama, Action",
    content:
      "Creed II: Between personal obligations and training for his next big fight against an opponent with ties to his family's past, Adonis Creed is up against the challenge of his life.",
    image:
      "https://image.tmdb.org/t/p/original//v3QyboWRoA4O9RbcsqH8tJMe8EB.jpg",
  },
  {
    id: 20,
    title: "Raya and the Last Dragon",
    releaseYear: "2021",
    genres: "Animation, Family, Fantasy, Action, Adventure",
    content:
      "Raya and the Last Dragon: Long ago, in the fantasy world of Kumandra, humans and dragons lived together in harmony. But when an evil force threatened the land, the dragons sacrificed themselves to save humanity. Now, 500 years later, that same evil has returned and it’s up to a lone warrior, Raya, to track down the legendary last dragon to restore the fractured land and its divided people.",
    image:
      "https://image.tmdb.org/t/p/original//lPsD10PP4rgUGiGR4CCXA6iY0QQ.jpg",
  },
  {
    id: 21,
    title: "Twilight",
    releaseYear: "2008",
    genres: "Fantasy, Drama, Romance",
    content:
      "Twilight: When Bella Swan moves to a small town in the Pacific Northwest, she falls in love with Edward Cullen, a mysterious classmate who reveals himself to be a 108-year-old vampire. Despite Edward's repeated cautions, Bella can't stay away from him, a fatal move that endangers her own life.",
    image:
      "https://image.tmdb.org/t/p/original//3Gkb6jm6962ADUPaCBqzz9CTbn9.jpg",
  },
  {
    id: 22,
    title: "Despicable Me",
    releaseYear: "2010",
    genres: "Family, Animation, Comedy",
    content:
      "Despicable Me: Villainous Gru lives up to his reputation as a despicable, deplorable and downright unlikable guy when he hatches a plan to steal the moon from the sky. But he has a tough time staying on task after three orphans land in his care.",
    image:
      "https://image.tmdb.org/t/p/original//9lOloREsAhBu0pEtU0BgeR1rHyo.jpg",
  },
  {
    id: 23,
    title: "A Quiet Place Part II",
    releaseYear: "2021",
    genres: "Science Fiction, Thriller, Horror",
    content:
      "A Quiet Place Part II: Following the events at home, the Abbott family now face the terrors of the outside world. Forced to venture into the unknown, they realize that the creatures that hunt by sound are not the only threats that lurk beyond the sand path.",
    image:
      "https://image.tmdb.org/t/p/original//4q2hz2m8hubgvijz8Ez0T2Os2Yv.jpg",
  },
  {
    id: 24,
    title: "Chinatown",
    releaseYear: "1974",
    genres: "Crime, Drama, Mystery, Thriller",
    content:
      "Chinatown: Private eye Jake Gittes lives off of the murky moral climate of sunbaked, pre-World War II Southern California. Hired by a beautiful socialite to investigate her husband's extra-marital affair, Gittes is swept into a maelstrom of double dealings and deadly deceits, uncovering a web of personal and political scandals that come crashing together.",
    image:
      "https://image.tmdb.org/t/p/original//7Fm4R7ji6yu7CcwcsQs8arhPdN9.jpg",
  },
  {
    id: 25,
    title: "The Wolf of Wall Street",
    releaseYear: "2013",
    genres: "Crime, Drama, Comedy",
    content:
      "The Wolf of Wall Street: A New York stockbroker refuses to cooperate in a large securities fraud case involving corruption on Wall Street, corporate banking world and mob infiltration. Based on Jordan Belfort's autobiography.",
    image:
      "https://image.tmdb.org/t/p/original//34m2tygAYBGqA9MXKhRDtzYd4MR.jpg",
  },
  {
    id: 26,
    title: "Catch Me If You Can",
    releaseYear: "2002",
    genres: "Drama, Crime",
    content:
      "Catch Me If You Can: A true story about Frank Abagnale Jr. who, before his 19th birthday, successfully conned millions of dollars worth of checks as a Pan Am pilot, doctor, and legal prosecutor. An FBI agent makes it his mission to put him behind bars. But Frank not only eludes capture, he revels in the pursuit.",
    image:
      "https://image.tmdb.org/t/p/original//ctjEj2xM32OvBXCq8zAdK3ZrsAj.jpg",
  },
  {
    id: 27,
    title: "Expend4bles",
    releaseYear: "2023",
    genres: "Action, Adventure, Thriller",
    content:
      "Expend4bles: Armed with every weapon they can get their hands on and the skills to use them, The Expendables are the world’s last line of defense and the team that gets called when all other options are off the table. But new team members with new styles and tactics are going to give “new blood” a whole new meaning.",
    image:
      "https://image.tmdb.org/t/p/original//iwsMu0ehRPbtaSxqiaUDQB9qMWT.jpg",
  },
  {
    id: 28,
    title: "The Abyss",
    releaseYear: "1989",
    genres: "Adventure, Action, Thriller, Science Fiction",
    content:
      "The Abyss: A civilian oil rig crew is recruited to conduct a search and rescue effort when a nuclear submarine mysteriously sinks. One diver soon finds himself on a spectacular odyssey 25,000 feet below the ocean's surface where he confronts a mysterious force that has the power to change the world or destroy it.",
    image:
      "https://image.tmdb.org/t/p/original//2dCit3XAtv9KWCJvRKdPkJ0FAkH.jpg",
  },
  {
    id: 29,
    title: "Ant-Man and the Wasp: Quantumania",
    releaseYear: "2023",
    genres: "Action, Adventure, Science Fiction",
    content:
      "Ant-Man and the Wasp: Quantumania: Super-Hero partners Scott Lang and Hope van Dyne, along with with Hope's parents Janet van Dyne and Hank Pym, and Scott's daughter Cassie Lang, find themselves exploring the Quantum Realm, interacting with strange new creatures and embarking on an adventure that will push them beyond the limits of what they thought possible.",
    image:
      "https://image.tmdb.org/t/p/original//qnqGbB22YJ7dSs4o6M7exTpNxPz.jpg",
  },
  {
    id: 10,
    title: "The Little Mermaid",
    releaseYear: "2023",
    genres: "Adventure, Family, Fantasy, Romance",
    content:
      "The Little Mermaid: The youngest of King Triton’s daughters, and the most defiant, Ariel longs to find out more about the world beyond the sea, and while visiting the surface, falls for the dashing Prince Eric. With mermaids forbidden to interact with humans, Ariel makes a deal with the evil sea witch, Ursula, which gives her a chance to experience life on land, but ultimately places her life – and her father’s crown – in jeopardy.",
    image:
      "https://image.tmdb.org/t/p/original//ym1dxyOk4jFcSl4Q2zmRrA5BEEN.jpg",
  },
  {
    id: 11,
    title: "Charlie and the Chocolate Factory",
    releaseYear: "2005",
    genres: "Adventure, Comedy, Family, Fantasy",
    content:
      "Charlie and the Chocolate Factory: A young boy wins a tour through the most magnificent chocolate factory in the world, led by the world's most unusual candy maker.",
    image:
      "https://image.tmdb.org/t/p/original//wfGfxtBkhBzQfOZw4S8IQZgrH0a.jpg",
  },
  {
    id: 12,
    title: "Poor Things",
    releaseYear: "2023",
    genres: "Science Fiction, Romance, Comedy",
    content:
      "Poor Things: Brought back to life by an unorthodox scientist, a young woman runs off with a lawyer on a whirlwind adventure across the continents. Free from the prejudices of her times, she grows steadfast in her purpose to stand for equality and liberation.",
    image:
      "https://image.tmdb.org/t/p/original//kCGlIMHnOm8JPXq3rXM6c5wMxcT.jpg",
  },
  {
    id: 13,
    title: "365 Days: This Day",
    releaseYear: "2022",
    genres: "Romance, Drama",
    content:
      "365 Days: This Day: Laura and Massimo are back and hotter than ever. But the reunited couple's new beginning is complicated by Massimo’s family ties and a mysterious man who enters Laura’s life to win her heart and trust, at any cost.",
    image:
      "https://image.tmdb.org/t/p/original//7qU0SOVcQ8BTJLodcAlulUAG16C.jpg",
  },
  {
    id: 14,
    title: "The Nun",
    releaseYear: "2018",
    genres: "Horror",
    content:
      "The Nun: A priest with a haunted past and a novice on the threshold of her final vows are sent by the Vatican to investigate the death of a young nun in Romania and confront a malevolent force in the form of a demonic nun.",
    image:
      "https://image.tmdb.org/t/p/original//sFC1ElvoKGdHJIWRpNB3xWJ9lJA.jpg",
  },
  {
    id: 15,
    title: "Fight Club",
    releaseYear: "1999",
    genres: "Drama",
    content:
      'Fight Club: A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground "fight clubs" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.',
    image:
      "https://image.tmdb.org/t/p/original//pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
  },
  {
    id: 16,
    title: "Avengers: Age of Ultron",
    releaseYear: "2015",
    genres: "Action, Adventure, Science Fiction",
    content:
      "Avengers: Age of Ultron: When Tony Stark tries to jumpstart a dormant peacekeeping program, things go awry and Earth’s Mightiest Heroes are put to the ultimate test as the fate of the planet hangs in the balance. As the villainous Ultron emerges, it is up to The Avengers to stop him from enacting his terrible plans, and soon uneasy alliances and unexpected action pave the way for an epic and unique global adventure.",
    image:
      "https://image.tmdb.org/t/p/original//4ssDuvEDkSArWEdyBl2X5EHvYKU.jpg",
  },
  {
    id: 17,
    title: "Grease",
    releaseYear: "1978",
    genres: "Romance, Comedy",
    content:
      "Grease: Australian good girl Sandy and greaser Danny fell in love over the summer. But when they unexpectedly discover they're now in the same high school, will they be able to rekindle their romance despite their eccentric friends?",
    image:
      "https://image.tmdb.org/t/p/original//czVhhAaSBFpakur7U8pOIDV9NUG.jpg",
  },
  {
    id: 18,
    title: "The American",
    releaseYear: "2010",
    genres: "Crime, Drama, Thriller",
    content:
      "The American: Dispatched to a small Italian town to await further orders, assassin Jack embarks on a double life that may be more relaxing than is good for him.",
    image:
      "https://image.tmdb.org/t/p/original//5OEOsRaBsSxD0qBtAhus0iKDzr.jpg",
  },
  {
    id: 19,
    title: "Allied",
    releaseYear: "2016",
    genres: "Action, Drama, War, Romance, Thriller",
    content:
      "Allied: In 1942, an intelligence officer in North Africa encounters a female French Resistance fighter on a deadly mission behind enemy lines. When they reunite in London, their relationship is tested by the pressures of war.",
    image:
      "https://image.tmdb.org/t/p/original//sV4lXM32quwminL3TP36nlNPp7Q.jpg",
  },
  {
    id: 20,
    title: "Sound of Freedom",
    releaseYear: "2023",
    genres: "Action, Drama",
    content:
      "Sound of Freedom: The story of Tim Ballard, a former US government agent, who quits his job in order to devote his life to rescuing children from global sex traffickers.",
    image:
      "https://image.tmdb.org/t/p/original//kSf9svfL2WrKeuK8W08xeR5lTn8.jpg",
  },
  {
    id: 21,
    title: "The Twilight Saga: Breaking Dawn - Part 2",
    releaseYear: "2012",
    genres: "Adventure, Fantasy, Drama, Romance",
    content:
      "The Twilight Saga: Breaking Dawn - Part 2: After the birth of Renesmee, the Cullens gather other vampire clans in order to protect the child from a false allegation that puts the family in front of the Volturi.",
    image:
      "https://image.tmdb.org/t/p/original//7IGdPaKujv0BjI0Zd0m0a4CzEjJ.jpg",
  },
  {
    id: 22,
    title: "Get Out",
    releaseYear: "2017",
    genres: "Mystery, Thriller, Horror",
    content:
      "Get Out: Chris and his girlfriend Rose go upstate to visit her parents for the weekend. At first, Chris reads the family's overly accommodating behavior as nervous attempts to deal with their daughter's interracial relationship, but as the weekend progresses, a series of increasingly disturbing discoveries lead him to a truth that he never could have imagined.",
    image:
      "https://image.tmdb.org/t/p/original//mE24wUCfjK8AoBBjaMjho7Rczr7.jpg",
  },
  {
    id: 23,
    title: "Mission: Impossible - Dead Reckoning Part One",
    releaseYear: "2023",
    genres: "Action, Thriller",
    content:
      "Mission: Impossible - Dead Reckoning Part One: Ethan Hunt and his IMF team embark on their most dangerous mission yet: To track down a terrifying new weapon that threatens all of humanity before it falls into the wrong hands. With control of the future and the world's fate at stake and dark forces from Ethan's past closing in, a deadly race around the globe begins. Confronted by a mysterious, all-powerful enemy, Ethan must consider that nothing can matter more than his mission—not even the lives of those he cares about most.",
    image:
      "https://image.tmdb.org/t/p/original//NNxYkU70HPurnNCSiCjYAmacwm.jpg",
  },
  {
    id: 24,
    title: "Shazam!",
    releaseYear: "2019",
    genres: "Action, Comedy, Fantasy",
    content:
      "Shazam!: A boy is given the ability to become an adult superhero in times of need with a single magic word.",
    image:
      "https://image.tmdb.org/t/p/original//xnopI5Xtky18MPhK40cZAGAOVeV.jpg",
  },
  {
    id: 25,
    title: "The Creator",
    releaseYear: "2023",
    genres: "Action, Adventure, Science Fiction",
    content:
      "The Creator: Amid a future war between the human race and the forces of artificial intelligence, a hardened ex-special forces agent grieving the disappearance of his wife, is recruited to hunt down and kill the Creator, the elusive architect of advanced AI who has developed a mysterious weapon with the power to end the war—and mankind itself.",
    image:
      "https://image.tmdb.org/t/p/original//vBZ0qvaRxqEhZwl6LWmruJqWE8Z.jpg",
  },
  {
    id: 26,
    title: "Terminator: Dark Fate",
    releaseYear: "2019",
    genres: "Science Fiction, Action",
    content:
      "Terminator: Dark Fate: Decades after Sarah Connor prevented Judgment Day, a lethal new Terminator is sent to eliminate the future leader of the resistance. In a fight to save mankind, battle-hardened Sarah Connor teams up with an unexpected ally and an enhanced super soldier to stop the deadliest Terminator yet.",
    image:
      "https://image.tmdb.org/t/p/original//vqzNJRH4YyquRiWxCCOH0aXggHI.jpg",
  },
  {
    id: 27,
    title: "The Prestige",
    releaseYear: "2006",
    genres: "Drama, Mystery, Science Fiction",
    content:
      "The Prestige: A mysterious story of two magicians whose intense rivalry leads them on a life-long battle for supremacy -- full of obsession, deceit and jealousy with dangerous and deadly consequences.",
    image:
      "https://image.tmdb.org/t/p/original//tRNlZbgNCNOpLpbPEz5L8G8A0JN.jpg",
  },
  {
    id: 28,
    title: "Tangled",
    releaseYear: "2010",
    genres: "Animation, Family",
    content:
      "Tangled: When the kingdom's most wanted-and most charming-bandit Flynn Rider hides out in a mysterious tower, he's taken hostage by Rapunzel, a beautiful and feisty tower-bound teen with 70 feet of magical, golden hair. Flynn's curious captor, who's looking for her ticket out of the tower where she's been locked away for years, strikes a deal with the handsome thief and the unlikely duo sets off on an action-packed escapade, complete with a super-cop horse, an over-protective chameleon and a gruff gang of pub thugs.",
    image:
      "https://image.tmdb.org/t/p/original//ym7Kst6a4uodryxqbGOxmewF235.jpg",
  },
  {
    id: 29,
    title: "Up",
    releaseYear: "2009",
    genres: "Animation, Comedy, Family, Adventure",
    content:
      "Up: Carl Fredricksen spent his entire life dreaming of exploring the globe and experiencing life to its fullest. But at age 78, life seems to have passed him by, until a twist of fate (and a persistent 8-year old Wilderness Explorer named Russell) gives him a new lease on life.",
    image:
      "https://image.tmdb.org/t/p/original//vpbaStTMt8qqXaEgnOR2EE4DNJk.jpg",
  },
  {
    id: 10,
    title: "Quantum of Solace",
    releaseYear: "2008",
    genres: "Adventure, Action, Thriller, Crime",
    content:
      "Quantum of Solace: Betrayed by Vesper, the woman he loved, 007 fights the urge to make his latest mission personal. Pursuing his determination to uncover the truth, Bond and M interrogate Mr. White, who reveals that the organization that blackmailed Vesper is far more complex and dangerous than anyone had imagined.",
    image:
      "https://image.tmdb.org/t/p/original//e3DXXLJHGqMx9yYpXsql1XNljmM.jpg",
  },
  {
    id: 11,
    title: "The Shawshank Redemption",
    releaseYear: "1994",
    genres: "Drama, Crime",
    content:
      "The Shawshank Redemption: Imprisoned in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.",
    image:
      "https://image.tmdb.org/t/p/original//9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg",
  },
  {
    id: 12,
    title: "Titanic",
    releaseYear: "1997",
    genres: "Drama, Romance",
    content:
      "Titanic: 101-year-old Rose DeWitt Bukater tells the story of her life aboard the Titanic, 84 years later. A young Rose boards the ship with her mother and fiancé. Meanwhile, Jack Dawson and Fabrizio De Rossi win third-class tickets aboard the ship. Rose tells the whole story from Titanic's departure through to its death—on its first and last voyage—on April 15, 1912.",
    image:
      "https://image.tmdb.org/t/p/original//9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
  },
  {
    id: 13,
    title: "Creed III",
    releaseYear: "2023",
    genres: "Drama, Action",
    content:
      "Creed III: After dominating the boxing world, Adonis Creed has thrived in his career and family life. When a childhood friend and former boxing prodigy, Damian Anderson, resurfaces after serving a long sentence in prison, he is eager to prove that he deserves his shot in the ring. The face-off between former friends is more than just a fight. To settle the score, Adonis must put his future on the line to battle Damian — a fighter with nothing to lose.",
    image:
      "https://image.tmdb.org/t/p/original//cvsXj3I9Q2iyyIo95AecSd1tad7.jpg",
  },
  {
    id: 14,
    title: "Species",
    releaseYear: "1995",
    genres: "Science Fiction, Horror, Action",
    content:
      "Species: In 1993, the Search for Extra Terrestrial Intelligence Project receives a transmission detailing an alien DNA structure, along with instructions on how to splice it with human DNA. The result is Sil, a sensual but deadly creature who can change from a beautiful woman to an armour-plated killing machine in the blink of an eye.",
    image:
      "https://image.tmdb.org/t/p/original//cT5wdyo8kT7dycqjrolJ2sHWkFx.jpg",
  },
  {
    id: 15,
    title: "I Am Legend",
    releaseYear: "2007",
    genres: "Drama, Science Fiction, Thriller",
    content:
      "I Am Legend: Robert Neville is a scientist who was unable to stop the spread of the terrible virus that was incurable and man-made. Immune, Neville is now the last human survivor in what is left of New York City and perhaps the world. For three years, Neville has faithfully sent out daily radio messages, desperate to find any other survivors who might be out there. But he is not alone.",
    image:
      "https://image.tmdb.org/t/p/original//iPDkaSdKk2jRLTM65UOEoKtsIZ8.jpg",
  },
  {
    id: 16,
    title: "Evil Dead Rise",
    releaseYear: "2023",
    genres: "Horror, Thriller",
    content:
      "Evil Dead Rise: A reunion between two estranged sisters gets cut short by the rise of flesh-possessing demons, thrusting them into a primal battle for survival as they face the most nightmarish version of family imaginable.",
    image:
      "https://image.tmdb.org/t/p/original//5ik4ATKmNtmJU6AYD0bLm56BCVM.jpg",
  },
  {
    id: 17,
    title: "Forrest Gump",
    releaseYear: "1994",
    genres: "Comedy, Drama, Romance",
    content:
      "Forrest Gump: A man with a low IQ has accomplished great things in his life and been present during significant historic events—in each case, far exceeding what anyone imagined he could do. But despite all he has achieved, his one true love eludes him.",
    image:
      "https://image.tmdb.org/t/p/original//arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
  },
  {
    id: 18,
    title: "Mission: Impossible",
    releaseYear: "1996",
    genres: "Adventure, Action, Thriller",
    content:
      "Mission: Impossible: When Ethan Hunt, the leader of a crack espionage team whose perilous operation has gone awry with no explanation, discovers that a mole has penetrated the CIA, he's surprised to learn that he's the No. 1 suspect. To clear his name, Hunt now must ferret out the real double agent and, in the process, even the score.",
    image:
      "https://image.tmdb.org/t/p/original//l5uxY5m5OInWpcExIpKG6AR3rgL.jpg",
  },
  {
    id: 19,
    title: "Planet of the Apes",
    releaseYear: "2001",
    genres: "Thriller, Science Fiction, Action, Adventure",
    content:
      "Planet of the Apes: After a spectacular crash-landing on an uncharted planet, brash astronaut Leo Davidson finds himself trapped in a savage world where talking apes dominate the human race. Desperate to find a way home, Leo must evade the invincible gorilla army led by Ruthless General Thade.",
    image:
      "https://image.tmdb.org/t/p/original//2IZcJHsTugOdyg0Y8ejj4CM2X3a.jpg",
  },
  {
    id: 20,
    title: "Bright",
    releaseYear: "2017",
    genres: "Fantasy, Action, Thriller",
    content:
      "Bright: In an alternate present-day where magical creatures live among us, two L.A. cops become embroiled in a prophesied turf battle.",
    image:
      "https://image.tmdb.org/t/p/original//whkT53Sv2vKAUiknQ13pqcWaPXB.jpg",
  },
  {
    id: 21,
    title: "War of the Worlds",
    releaseYear: "2005",
    genres: "Adventure, Thriller, Science Fiction",
    content:
      "War of the Worlds: Ray Ferrier is a divorced dockworker and less-than-perfect father. Soon after his ex-wife and her new husband drop off his teenage son and young daughter for a rare weekend visit, a strange and powerful lightning storm touches down.",
    image:
      "https://image.tmdb.org/t/p/original//6Biy7R9LfumYshur3YKhpj56MpB.jpg",
  },
  {
    id: 22,
    title: "The Good, the Bad and the Ugly",
    releaseYear: "1966",
    genres: "Western",
    content:
      "The Good, the Bad and the Ugly: While the Civil War rages on between the Union and the Confederacy, three men – a quiet loner, a ruthless hitman, and a Mexican bandit – comb the American Southwest in search of a strongbox containing $200,000 in stolen gold.",
    image:
      "https://image.tmdb.org/t/p/original//bX2xnavhMYjWDoZp1VM6VnU1xwe.jpg",
  },
  {
    id: 23,
    title: "Godzilla: King of the Monsters",
    releaseYear: "2019",
    genres: "Science Fiction, Action",
    content:
      "Godzilla: King of the Monsters: Follows the heroic efforts of the crypto-zoological agency Monarch as its members face off against a battery of god-sized monsters, including the mighty Godzilla, who collides with Mothra, Rodan, and his ultimate nemesis, the three-headed King Ghidorah. When these ancient super-species, thought to be mere myths, rise again, they all vie for supremacy, leaving humanity's very existence hanging in the balance.",
    image:
      "https://image.tmdb.org/t/p/original//fQ40gmFM4p03tXwMxQQKh2cCBW4.jpg",
  },
  {
    id: 24,
    title: "The Croods: A New Age",
    releaseYear: "2020",
    genres: "Animation, Family, Adventure, Fantasy, Comedy",
    content:
      "The Croods: A New Age: Searching for a safer habitat, the prehistoric Crood family discovers an idyllic, walled-in paradise that meets all of its needs. Unfortunately, they must also learn to live with the Bettermans -- a family that's a couple of steps above the Croods on the evolutionary ladder. As tensions between the new neighbors start to rise, a new threat soon propels both clans on an epic adventure that forces them to embrace their differences, draw strength from one another, and survive together.",
    image:
      "https://image.tmdb.org/t/p/original//tbVZ3Sq88dZaCANlUcewQuHQOaE.jpg",
  },
  {
    id: 25,
    title: "Coming to America",
    releaseYear: "1988",
    genres: "Comedy, Romance",
    content:
      "Coming to America: An African prince decides it’s time for him to find a princess... and his mission leads him and his most loyal friend to Queens, New York. In disguise as an impoverished immigrant, the pampered prince quickly finds himself a new job, new friends, new digs, new enemies and lots of trouble.",
    image:
      "https://image.tmdb.org/t/p/original//djRAvxyvvN2yqlJKDbT3uy4vOBw.jpg",
  },
  {
    id: 26,
    title: "Madagascar 3: Europe's Most Wanted",
    releaseYear: "2012",
    genres: "Animation, Family, Comedy, Adventure",
    content:
      "Madagascar 3: Europe's Most Wanted: Animal pals Alex, Marty, Melman, and Gloria are still trying to make it back to New York's Central Park Zoo. They are forced to take a detour to Europe to find the penguins and chimps who broke the bank at a Monte Carlo casino. When French animal-control officer Capitaine Chantel DuBois picks up their scent, Alex and company are forced to hide out in a traveling circus.",
    image:
      "https://image.tmdb.org/t/p/original//ekraj4ksvIKeuvQVEevEJkuybZd.jpg",
  },
  {
    id: 27,
    title: "Coco",
    releaseYear: "2017",
    genres: "Family, Animation, Music, Adventure",
    content:
      "Coco: Despite his family’s baffling generations-old ban on music, Miguel dreams of becoming an accomplished musician like his idol, Ernesto de la Cruz. Desperate to prove his talent, Miguel finds himself in the stunning and colorful Land of the Dead following a mysterious chain of events. Along the way, he meets charming trickster Hector, and together, they set off on an extraordinary journey to unlock the real story behind Miguel's family history.",
    image:
      "https://image.tmdb.org/t/p/original//gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg",
  },
  {
    id: 28,
    title: "Friday the 13th",
    releaseYear: "1980",
    genres: "Horror",
    content:
      "Friday the 13th: Camp counselors are stalked and murdered by an unknown assailant while trying to reopen a summer camp that was the site of a child's drowning.",
    image:
      "https://image.tmdb.org/t/p/original//HzrPn1gEHWixfMOvOehOTlHROo.jpg",
  },
  {
    id: 29,
    title: "How to Train Your Dragon",
    releaseYear: "2010",
    genres: "Fantasy, Adventure, Animation, Family",
    content:
      "How to Train Your Dragon: As the son of a Viking leader on the cusp of manhood, shy Hiccup Horrendous Haddock III faces a rite of passage: he must kill a dragon to prove his warrior mettle. But after downing a feared dragon, he realizes that he no longer wants to destroy it, and instead befriends the beast – which he names Toothless – much to the chagrin of his warrior father.",
    image:
      "https://image.tmdb.org/t/p/original//ygGmAO60t8GyqUo9xYeYxSZAR3b.jpg",
  },
  {
    id: 10,
    title: "National Lampoon's Vacation",
    releaseYear: "1983",
    genres: "Comedy, Adventure",
    content:
      "National Lampoon's Vacation: Clark Griswold is on a quest to take his family to the Walley World theme park for a vacation, but things don't go exactly as planned.",
    image:
      "https://image.tmdb.org/t/p/original//q3DvoqY06yZnRp9faH6uge7n7VP.jpg",
  },
  {
    id: 11,
    title: "Kong: Skull Island",
    releaseYear: "2017",
    genres: "Action, Adventure, Fantasy",
    content:
      "Kong: Skull Island: Explore the mysterious and dangerous home of the king of the apes as a team of explorers ventures deep inside the treacherous, primordial island.",
    image:
      "https://image.tmdb.org/t/p/original//r2517Vz9EhDhj88qwbDVj8DCRZN.jpg",
  },
  {
    id: 12,
    title: "Eyes Wide Shut",
    releaseYear: "1999",
    genres: "Drama, Thriller, Mystery",
    content:
      "Eyes Wide Shut: After Dr. Bill Harford's wife, Alice, admits to having sexual fantasies about a man she met, Bill becomes obsessed with having a sexual encounter. He discovers an underground sexual group and attends one of their meetings -- and quickly discovers that he is in over his head.",
    image:
      "https://image.tmdb.org/t/p/original//knEIz1eNGl5MQDbrEAVWA7iRqF9.jpg",
  },
  {
    id: 13,
    title: "The Grey",
    releaseYear: "2012",
    genres: "Drama, Thriller, Action, Adventure",
    content:
      "The Grey: Following a grueling five-week shift at an Alaskan oil refinery, workers led by sharpshooter John Ottway are flying home for a much-needed vacation. But a brutal storm causes their plane to crash in the frozen wilderness, and only eight men, including Ottway, survive. As they trek southward toward civilization and safety, Ottway and his companions must battle mortal injuries, the icy elements, and a pack of hungry wolves.",
    image:
      "https://image.tmdb.org/t/p/original//a0Vt3wx8ciKmPt4iXPx9sH4HBVU.jpg",
  },
  {
    id: 14,
    title: "Downsizing",
    releaseYear: "2017",
    genres: "Drama, Science Fiction",
    content:
      "Downsizing: A kindly occupational therapist undergoes a new procedure to be shrunken to four inches tall so that he and his wife can help save the planet and afford a nice lifestyle at the same time.",
    image:
      "https://image.tmdb.org/t/p/original//5bNzInSSAXfr0MFlHfb4IoQePVx.jpg",
  },
  {
    id: 15,
    title: "Venom: Let There Be Carnage",
    releaseYear: "2021",
    genres: "Science Fiction, Action, Adventure",
    content:
      "Venom: Let There Be Carnage: After finding a host body in investigative reporter Eddie Brock, the alien symbiote must face a new enemy, Carnage, the alter ego of serial killer Cletus Kasady.",
    image:
      "https://image.tmdb.org/t/p/original//1MJNcPZy46hIy2CmSqOeru0yr5C.jpg",
  },
  {
    id: 16,
    title: "The Exorcism of God",
    releaseYear: "2022",
    genres: "Horror, Crime, Drama, Fantasy",
    content:
      "The Exorcism of God: An American priest working in Mexico is considered a saint by many local parishioners. However, due to a botched exorcism, he carries a secret that’s eating him alive until he gets an opportunity to face his demon one final time.",
    image:
      "https://image.tmdb.org/t/p/original//hangTmbxpSV4gpHG7MgSlCWSSFa.jpg",
  },
  {
    id: 17,
    title: "Spider-Man: Far From Home",
    releaseYear: "2019",
    genres: "Action, Adventure, Science Fiction",
    content:
      "Spider-Man: Far From Home: Peter Parker and his friends go on a summer trip to Europe. However, they will hardly be able to rest - Peter will have to agree to help Nick Fury uncover the mystery of creatures that cause natural disasters and destruction throughout the continent.",
    image:
      "https://image.tmdb.org/t/p/original//4q2NNj4S5dG2RLF9CpXsej7yXl.jpg",
  },
  {
    id: 18,
    title: "Chappie",
    releaseYear: "2015",
    genres: "Crime, Action, Science Fiction",
    content:
      "Chappie: Every child comes into the world full of promise, and none more so than Chappie: he is gifted, special, a prodigy. Like any child, Chappie will come under the influence of his surroundings—some good, some bad—and he will rely on his heart and soul to find his way in the world and become his own man. But there's one thing that makes Chappie different from any one else: he is a robot.",
    image:
      "https://image.tmdb.org/t/p/original//hpnuXlKKWznTgbheGe4iQXzkuwJ.jpg",
  },
  {
    id: 19,
    title: "Nobody",
    releaseYear: "2021",
    genres: "Action, Thriller",
    content:
      'Nobody: Hutch Mansell, a suburban dad, overlooked husband, nothing neighbor — a "nobody." When two thieves break into his home one night, Hutch\'s unknown long-simmering rage is ignited and propels him on a brutal path that will uncover dark secrets he fought to leave behind.',
    image:
      "https://image.tmdb.org/t/p/original//oBgWY00bEFeZ9N25wWVyuQddbAo.jpg",
  },
  {
    id: 20,
    title: "Shrek the Third",
    releaseYear: "2007",
    genres: "Fantasy, Adventure, Animation, Comedy, Family",
    content:
      "Shrek the Third: The King of Far Far Away has died and Shrek and Fiona are to become King & Queen. However, Shrek wants to return to his cozy swamp and live in peace and quiet, so when he finds out there is another heir to the throne, they set off to bring him back to rule the kingdom.",
    image:
      "https://image.tmdb.org/t/p/original//n4SexGGQzI26E269tfpa80MZaGV.jpg",
  },
  {
    id: 21,
    title: "Jurassic World Dominion",
    releaseYear: "2022",
    genres: "Adventure, Action, Science Fiction",
    content:
      "Jurassic World Dominion: Four years after Isla Nublar was destroyed, dinosaurs now live—and hunt—alongside humans all over the world. This fragile balance will reshape the future and determine, once and for all, whether human beings are to remain the apex predators ona planet they now share with history's most fearsome creatures.",
    image:
      "https://image.tmdb.org/t/p/original//kAVRgw7GgK1CfYEJq8ME6EvRIgU.jpg",
  },
  {
    id: 22,
    title: "Back to the Future",
    releaseYear: "1985",
    genres: "Adventure, Comedy, Science Fiction",
    content:
      "Back to the Future: Eighties teenager Marty McFly is accidentally sent back in time to 1955, inadvertently disrupting his parents' first meeting and attracting his mother's romantic interest. Marty must repair the damage to history by rekindling his parents' romance and - with the help of his eccentric inventor friend Doc Brown - return to 1985.",
    image:
      "https://image.tmdb.org/t/p/original//fNOH9f1aA7XRTzl1sAOx9iF553Q.jpg",
  },
  {
    id: 23,
    title: "Predators",
    releaseYear: "2010",
    genres: "Science Fiction, Action, Thriller",
    content:
      "Predators: A group of cold-blooded killers find themselves trapped on an alien planet to be hunted by extraterrestrial Predators.",
    image:
      "https://image.tmdb.org/t/p/original//54LZIRznS0Zjn7ZDXrsGVe3HXei.jpg",
  },
  {
    id: 24,
    title: "Total Recall",
    releaseYear: "1990",
    genres: "Action, Adventure, Science Fiction",
    content:
      "Total Recall: Construction worker Douglas Quaid's obsession with the planet Mars leads him to visit Recall, a company who manufacture memories. Something goes wrong during his memory implant turning Doug's life upside down and even to question what is reality and what isn't.",
    image:
      "https://image.tmdb.org/t/p/original//wVbeL6fkbTKSmNfalj4VoAUUqJv.jpg",
  },
  {
    id: 25,
    title: "Black Widow",
    releaseYear: "2021",
    genres: "Action, Adventure, Science Fiction",
    content:
      "Black Widow: Natasha Romanoff, also known as Black Widow, confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. Pursued by a force that will stop at nothing to bring her down, Natasha must deal with her history as a spy and the broken relationships left in her wake long before she became an Avenger.",
    image:
      "https://image.tmdb.org/t/p/original//kwB7d51AIcyzPOBOHLCEZJkmPhQ.jpg",
  },
  {
    id: 26,
    title: "Kung Fu Panda",
    releaseYear: "2008",
    genres: "Action, Adventure, Animation, Family, Comedy",
    content:
      "Kung Fu Panda: When the Valley of Peace is threatened, lazy Po the panda discovers his destiny as the \"chosen one\" and trains to become a kung fu hero, but transforming the unsleek slacker into a brave warrior won't be easy. It's up to Master Shifu and the Furious Five -- Tigress, Crane, Mantis, Viper and Monkey -- to give it a try.",
    image:
      "https://image.tmdb.org/t/p/original//wWt4JYXTg5Wr3xBW2phBrMKgp3x.jpg",
  },
  {
    id: 27,
    title: "Shrek 2",
    releaseYear: "2004",
    genres: "Animation, Family, Comedy, Fantasy, Adventure",
    content:
      "Shrek 2: Shrek, Fiona, and Donkey set off to Far, Far Away to meet Fiona's mother and father, the Queen and King. But not everyone is happily ever after. Shrek and the King find it difficult to get along, and there's tension in the marriage. The Fairy Godmother discovers that Fiona has married Shrek instead of her son Prince Charming and plots to destroy their marriage.",
    image:
      "https://image.tmdb.org/t/p/original//2yYP0PQjG8zVqturh1BAqu2Tixl.jpg",
  },
  {
    id: 28,
    title: "Fargo",
    releaseYear: "1996",
    genres: "Crime, Drama, Thriller",
    content:
      "Fargo: Jerry, a small-town Minnesota car salesman is bursting at the seams with debt... but he's got a plan. He's going to hire two thugs to kidnap his wife in a scheme to collect a hefty ransom from his wealthy father-in-law. It's going to be a snap and nobody's going to get hurt... until people start dying. Enter Police Chief Marge, a coffee-drinking, parka-wearing - and extremely pregnant - investigator who'll stop at nothing to get her man. And if you think her small-time investigative skills will give the crooks a run for their ransom... you betcha!",
    image:
      "https://image.tmdb.org/t/p/original//rt7cpEr1uP6RTZykBFhBTcRaKvG.jpg",
  },
  {
    id: 29,
    title: "X-Men: Days of Future Past",
    releaseYear: "2014",
    genres: "Action, Adventure, Science Fiction",
    content:
      "X-Men: Days of Future Past: The ultimate X-Men ensemble fights a war for the survival of the species across two time periods as they join forces with their younger selves in an epic battle that must change the past – to save our future.",
    image:
      "https://image.tmdb.org/t/p/original//tYfijzolzgoMOtegh1Y7j2Enorg.jpg",
  },
  {
    id: 10,
    title: "True Romance",
    releaseYear: "1993",
    genres: "Action, Crime, Romance",
    content:
      "True Romance: Clarence marries hooker Alabama, steals cocaine from her pimp, and tries to sell it in Hollywood, while the owners of the coke try to reclaim it.",
    image:
      "https://image.tmdb.org/t/p/original//39lXk6ud6KiJgGbbWI2PUKS7y2.jpg",
  },
  {
    id: 11,
    title: "Dumb and Dumber",
    releaseYear: "1994",
    genres: "Comedy",
    content:
      'Dumb and Dumber: Lloyd and Harry are two men whose stupidity is really indescribable. When Mary, a beautiful woman, loses an important suitcase with money before she leaves for Aspen, the two friends (who have found the suitcase) decide to return it to her. After some "adventures" they finally get to Aspen where, using the lost money they live it up and fight for Mary\'s heart.',
    image:
      "https://image.tmdb.org/t/p/original//4LdpBXiCyGKkR8FGHgjKlphrfUc.jpg",
  },
  {
    id: 12,
    title: "The Hobbit: The Battle of the Five Armies",
    releaseYear: "2014",
    genres: "Action, Adventure, Fantasy",
    content:
      "The Hobbit: The Battle of the Five Armies: Immediately after the events of The Desolation of Smaug, Bilbo and the dwarves try to defend Erebor's mountain of treasure from others who claim it: the men of the ruined Laketown and the elves of Mirkwood. Meanwhile an army of Orcs led by Azog the Defiler is marching on Erebor, fueled by the rise of the dark lord Sauron. Dwarves, elves and men must unite, and the hope for Middle-Earth falls into Bilbo's hands.",
    image:
      "https://image.tmdb.org/t/p/original//xT98tLqatZPQApyRmlPL12LtiWp.jpg",
  },
  {
    id: 13,
    title: "Saw X",
    releaseYear: "2023",
    genres: "Horror, Thriller",
    content:
      "Saw X: Between the events of 'Saw' and 'Saw II', a sick and desperate John Kramer travels to Mexico for a risky and experimental medical procedure in hopes of a miracle cure for his cancer, only to discover the entire operation is a scam to defraud the most vulnerable. Armed with a newfound purpose, the infamous serial killer returns to his work, turning the tables on the con artists in his signature visceral way through devious, deranged, and ingenious traps.",
    image:
      "https://image.tmdb.org/t/p/original//aQPeznSu7XDTrrdCtT5eLiu52Yu.jpg",
  },
  {
    id: 14,
    title: "Terminator Genisys",
    releaseYear: "2015",
    genres: "Science Fiction, Action, Thriller, Adventure",
    content:
      "Terminator Genisys: The year is 2029. John Connor, leader of the resistance continues the war against the machines. At the Los Angeles offensive, John's fears of the unknown future begin to emerge when TECOM spies reveal a new plot by SkyNet that will attack him from both fronts; past and future, and will ultimately change warfare forever.",
    image:
      "https://image.tmdb.org/t/p/original//oZRVDpNtmHk8M1VYy1aeOWUXgbC.jpg",
  },
  {
    id: 15,
    title: "Melancholia",
    releaseYear: "2011",
    genres: "Drama, Science Fiction",
    content:
      "Melancholia: Two sisters find their already strained relationship challenged as a mysterious new planet threatens to collide with Earth.",
    image:
      "https://image.tmdb.org/t/p/original//fMneszMiQuTKY8JUXrGGB5vwqJf.jpg",
  },
  {
    id: 16,
    title: "Scream 2",
    releaseYear: "1997",
    genres: "Horror, Mystery",
    content:
      "Scream 2: Away at college, Sidney Prescott thought she'd finally put the shocking murders that shattered her life behind her... until a copycat killer begins acting out a real-life sequel.",
    image:
      "https://image.tmdb.org/t/p/original//dORlVasiaDkJXTqt9bdH7nFNs6C.jpg",
  },
  {
    id: 17,
    title: "Halloween",
    releaseYear: "1978",
    genres: "Horror, Thriller",
    content:
      "Halloween: Fifteen years after murdering his sister on Halloween Night 1963, Michael Myers escapes from a mental hospital and returns to the small town of Haddonfield, Illinois to kill again.",
    image:
      "https://image.tmdb.org/t/p/original//wijlZ3HaYMvlDTPqJoTCWKFkCPU.jpg",
  },
  {
    id: 18,
    title: "The Hunger Games: Mockingjay - Part 1",
    releaseYear: "2014",
    genres: "Science Fiction, Adventure, Thriller",
    content:
      "The Hunger Games: Mockingjay - Part 1: Katniss Everdeen reluctantly becomes the symbol of a mass rebellion against the autocratic Capitol.",
    image:
      "https://image.tmdb.org/t/p/original//4FAA18ZIja70d1Tu5hr5cj2q1sB.jpg",
  },
  {
    id: 19,
    title: "Blue Beetle",
    releaseYear: "2023",
    genres: "Action, Science Fiction, Adventure",
    content:
      "Blue Beetle: Recent college grad Jaime Reyes returns home full of aspirations for his future, only to find that home is not quite as he left it. As he searches to find his purpose in the world, fate intervenes when Jaime unexpectedly finds himself in possession of an ancient relic of alien biotechnology: the Scarab.",
    image:
      "https://image.tmdb.org/t/p/original//mXLOHHc1Zeuwsl4xYKjKh2280oL.jpg",
  },
  {
    id: 20,
    title: "The Lion King",
    releaseYear: "2019",
    genres: "Adventure, Drama, Family, Animation",
    content:
      "The Lion King: Simba idolizes his father, King Mufasa, and takes to heart his own royal destiny. But not everyone in the kingdom celebrates the new cub's arrival. Scar, Mufasa's brother—and former heir to the throne—has plans of his own. The battle for Pride Rock is ravaged with betrayal, tragedy and drama, ultimately resulting in Simba's exile. With help from a curious pair of newfound friends, Simba will have to figure out how to grow up and take back what is rightfully his.",
    image:
      "https://image.tmdb.org/t/p/original//dzBtMocZuJbjLOXvrl4zGYigDzh.jpg",
  },
  {
    id: 21,
    title: "The Hobbit: An Unexpected Journey",
    releaseYear: "2012",
    genres: "Adventure, Fantasy, Action",
    content:
      "The Hobbit: An Unexpected Journey: Bilbo Baggins, a hobbit enjoying his quiet life, is swept into an epic quest by Gandalf the Grey and thirteen dwarves who seek to reclaim their mountain home from Smaug, the dragon.",
    image:
      "https://image.tmdb.org/t/p/original//yHA9Fc37VmpUA5UncTxxo3rTGVA.jpg",
  },
  {
    id: 22,
    title: "The Tomorrow War",
    releaseYear: "2021",
    genres: "Action, Science Fiction, Adventure",
    content:
      "The Tomorrow War: The world is stunned when a group of time travelers arrive from the year 2051 to deliver an urgent message: Thirty years in the future, mankind is losing a global war against a deadly alien species. The only hope for survival is for soldiers and civilians from the present to be transported to the future and join the fight. Among those recruited is high school teacher and family man Dan Forester. Determined to save the world for his young daughter, Dan teams up with a brilliant scientist and his estranged father in a desperate quest to rewrite the fate of the planet.",
    image:
      "https://image.tmdb.org/t/p/original//34nDCQZwaEvsy4CFO5hkGRFDCVU.jpg",
  },
  {
    id: 23,
    title: "Beauty and the Beast",
    releaseYear: "2017",
    genres: "Family, Fantasy, Romance",
    content:
      "Beauty and the Beast: A live-action adaptation of Disney's version of the classic tale of a cursed prince and a beautiful young woman who helps him break the spell.",
    image:
      "https://image.tmdb.org/t/p/original//hKegSKIDep2ewJWPUQD7u0KqFIp.jpg",
  },
  {
    id: 24,
    title: "The Sixth Sense",
    releaseYear: "1999",
    genres: "Mystery, Thriller, Drama",
    content:
      "The Sixth Sense: Following an unexpected tragedy, child psychologist Malcolm Crowe meets a nine year old boy named Cole Sear, who is hiding a dark secret.",
    image:
      "https://image.tmdb.org/t/p/original//4AfSDjjCy6T5LA1TMz0Lh2HlpRh.jpg",
  },
  {
    id: 25,
    title: "Killers of the Flower Moon",
    releaseYear: "2023",
    genres: "Crime, History, Drama",
    content:
      "Killers of the Flower Moon: When oil is discovered in 1920s Oklahoma under Osage Nation land, the Osage people are murdered one by one—until the FBI steps in to unravel the mystery.",
    image:
      "https://image.tmdb.org/t/p/original//dB6Krk806zeqd0YNp2ngQ9zXteH.jpg",
  },
  {
    id: 26,
    title: "Big Hero 6",
    releaseYear: "2014",
    genres: "Adventure, Family, Animation, Action, Comedy",
    content:
      "Big Hero 6: A special bond develops between plus-sized inflatable robot Baymax, and prodigy Hiro Hamada, who team up with a group of friends to form a band of high-tech heroes.",
    image:
      "https://image.tmdb.org/t/p/original//2mxS4wUimwlLmI1xp6QW6NSU361.jpg",
  },
  {
    id: 27,
    title: "Man of Steel",
    releaseYear: "2013",
    genres: "Action, Adventure, Science Fiction",
    content:
      "Man of Steel: A young boy learns that he has extraordinary powers and is not of this earth. As a young man, he journeys to discover where he came from and what he was sent here to do. But the hero in him must emerge if he is to save the world from annihilation and become the symbol of hope for all mankind.",
    image:
      "https://image.tmdb.org/t/p/original//dksTL9NXc3GqPBRHYHcy1aIwjS.jpg",
  },
  {
    id: 28,
    title: "The Emoji Movie",
    releaseYear: "2017",
    genres: "Animation, Family, Comedy",
    content:
      "The Emoji Movie: Gene, a multi-expressional emoji, sets out on a journey to become a normal emoji.",
    image:
      "https://image.tmdb.org/t/p/original//f5pF4OYzh4wb1dYL2ARQNdqUsEZ.jpg",
  },
  {
    id: 29,
    title: "Monsters, Inc.",
    releaseYear: "2001",
    genres: "Animation, Comedy, Family",
    content:
      "Monsters, Inc.: Lovable Sulley and his wisecracking sidekick Mike Wazowski are the top scare team at Monsters, Inc., the scream-processing factory in Monstropolis. When a little girl named Boo wanders into their world, it's the monsters who are scared silly, and it's up to Sulley and Mike to keep her out of sight and get her back home.",
    image:
      "https://image.tmdb.org/t/p/original//wFSpyMsp7H0ttERbxY7Trlv8xry.jpg",
  },
  {
    id: 10,
    title: "Hellraiser",
    releaseYear: "1987",
    genres: "Horror, Thriller, Fantasy",
    content:
      "Hellraiser: Hedonist Frank Cotton finds a mysterious puzzle box that summons the Cenobites, who open the doors to a dominion where pain and pleasure are indivisible.",
    image:
      "https://image.tmdb.org/t/p/original//3Z0oPHyLnk3Vx6ZMC1MiVwIrKhO.jpg",
  },
  {
    id: 11,
    title: "Sonic the Hedgehog 2",
    releaseYear: "2022",
    genres: "Action, Adventure, Family, Comedy",
    content:
      "Sonic the Hedgehog 2: After settling in Green Hills, Sonic is eager to prove he has what it takes to be a true hero. His test comes when Dr. Robotnik returns, this time with a new partner, Knuckles, in search for an emerald that has the power to destroy civilizations. Sonic teams up with his own sidekick, Tails, and together they embark on a globe-trotting journey to find the emerald before it falls into the wrong hands.",
    image:
      "https://image.tmdb.org/t/p/original//6DrHO1jr3qVrViUO6s6kFiAGM7.jpg",
  },
  {
    id: 12,
    title: "The King's Man",
    releaseYear: "2021",
    genres: "Action, Comedy, Adventure, Thriller",
    content:
      "The King's Man: As a collection of history's worst tyrants and criminal masterminds gather to plot a war to wipe out millions, one man must race against time to stop them.",
    image:
      "https://image.tmdb.org/t/p/original//aq4Pwv5Xeuvj6HZKtxyd23e6bE9.jpg",
  },
  {
    id: 13,
    title: "The Green Mile",
    releaseYear: "1999",
    genres: "Fantasy, Drama, Crime",
    content:
      "The Green Mile: A supernatural tale set on death row in a Southern prison, where gentle giant John Coffey possesses the mysterious power to heal people's ailments. When the cell block's head guard, Paul Edgecomb, recognizes Coffey's miraculous gift, he tries desperately to help stave off the condemned man's execution.",
    image:
      "https://image.tmdb.org/t/p/original//8VG8fDNiy50H4FedGwdSVUPoaJe.jpg",
  },
  {
    id: 14,
    title: "I Am Mother",
    releaseYear: "2019",
    genres: "Science Fiction, Thriller",
    content:
      'I Am Mother: A teenage girl is raised underground by a robot "Mother", designed to repopulate the earth following an extinction event. But their unique bond is threatened when an inexplicable stranger arrives with alarming news.',
    image:
      "https://image.tmdb.org/t/p/original//b3jWxwWRFqvNDJTvBcmKJVHnzKK.jpg",
  },
  {
    id: 15,
    title: "Zack Snyder's Justice League",
    releaseYear: "2021",
    genres: "Action, Adventure, Fantasy",
    content:
      "Zack Snyder's Justice League: Determined to ensure Superman's ultimate sacrifice was not in vain, Bruce Wayne aligns forces with Diana Prince with plans to recruit a team of metahumans to protect the world from an approaching threat of catastrophic proportions.",
    image:
      "https://image.tmdb.org/t/p/original//tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg",
  },
  {
    id: 16,
    title: "Suburbicon",
    releaseYear: "2017",
    genres: "Thriller, Crime, Drama, Mystery",
    content:
      "Suburbicon: In the quiet family town of Suburbicon during the 1950s, the best and worst of humanity is hilariously reflected through the deeds of seemingly ordinary people. When a home invasion turns deadly, a picture-perfect family turns to blackmail, revenge and murder.",
    image:
      "https://image.tmdb.org/t/p/original//a3IHgSwO5jWPLcGjKqbQ7pxVGkq.jpg",
  },
  {
    id: 17,
    title: "Toy Story 2",
    releaseYear: "1999",
    genres: "Animation, Comedy, Family",
    content:
      "Toy Story 2: Andy heads off to Cowboy Camp, leaving his toys to their own devices. Things shift into high gear when an obsessive toy collector named Al McWhiggen, owner of Al's Toy Barn kidnaps Woody. Andy's toys mount a daring rescue mission, Buzz Lightyear meets his match and Woody has to decide where he and his heart truly belong.",
    image:
      "https://image.tmdb.org/t/p/original//2MFIhZAW0CVlEQrFyqwa4U6zqJP.jpg",
  },
  {
    id: 18,
    title: "Howl's Moving Castle",
    releaseYear: "2004",
    genres: "Fantasy, Animation, Adventure",
    content:
      "Howl's Moving Castle: Sophie, a young milliner, is turned into an elderly woman by a witch who enters her shop and curses her. She encounters a wizard named Howl and gets caught up in his resistance to fighting for the king.",
    image:
      "https://image.tmdb.org/t/p/original//6pZgH10jhpToPcf0uvyTCPFhWpI.jpg",
  },
  {
    id: 19,
    title: "Maze Runner: The Scorch Trials",
    releaseYear: "2015",
    genres: "Science Fiction, Action, Thriller, Adventure",
    content:
      "Maze Runner: The Scorch Trials: Thomas and his fellow Gladers face their greatest challenge yet: searching for clues about the mysterious and powerful organization known as WCKD. Their journey takes them to the Scorch, a desolate landscape filled with unimaginable obstacles. Teaming up with resistance fighters, the Gladers take on WCKD’s vastly superior forces and uncover its shocking plans for them all.",
    image:
      "https://image.tmdb.org/t/p/original//mYw7ZyejqSCPFlrT2jHZOESZDU3.jpg",
  },
  {
    id: 20,
    title: "The Princess and the Frog",
    releaseYear: "2009",
    genres: "Animation, Romance, Fantasy, Family",
    content:
      "The Princess and the Frog: A waitress, desperate to fulfill her dreams as a restaurant owner, is set on a journey to turn a frog prince back into a human being, but she has to face the same problem after she kisses him.",
    image:
      "https://image.tmdb.org/t/p/original//v6nAUs62OJ4DXmnnmPFeVmMz8H9.jpg",
  },
  {
    id: 21,
    title: "The Nun II",
    releaseYear: "2023",
    genres: "Horror",
    content:
      "The Nun II: In 1956 France, a priest is violently murdered, and Sister Irene begins to investigate. She once again comes face-to-face with a powerful evil.",
    image:
      "https://image.tmdb.org/t/p/original//5gzzkR7y3hnY8AD1wXjCnVlHba5.jpg",
  },
  {
    id: 22,
    title: "Hacksaw Ridge",
    releaseYear: "2016",
    genres: "Drama, History, War",
    content:
      "Hacksaw Ridge: WWII American Army Medic Desmond T. Doss, who served during the Battle of Okinawa, refuses to kill people and becomes the first Conscientious Objector in American history to receive the Congressional Medal of Honor.",
    image:
      "https://image.tmdb.org/t/p/original//wuz8TjCIWR2EVVMuEfBnQ1vuGS3.jpg",
  },
  {
    id: 23,
    title: "Blade Runner 2049",
    releaseYear: "2017",
    genres: "Science Fiction, Drama",
    content:
      "Blade Runner 2049: Thirty years after the events of the first film, a new blade runner, LAPD Officer K, unearths a long-buried secret that has the potential to plunge what's left of society into chaos. K's discovery leads him on a quest to find Rick Deckard, a former LAPD blade runner who has been missing for 30 years.",
    image:
      "https://image.tmdb.org/t/p/original//gajva2L0rPYkEWjzgFlBXCAVBE5.jpg",
  },
  {
    id: 24,
    title: "Wrath of Man",
    releaseYear: "2021",
    genres: "Action, Crime, Thriller",
    content:
      "Wrath of Man: A cold and mysterious new security guard for a Los Angeles cash truck company surprises his co-workers when he unleashes precision skills during a heist. The crew is left wondering who he is and where he came from. Soon, the marksman's ultimate motive becomes clear as he takes dramatic and irrevocable steps to settle a score.",
    image:
      "https://image.tmdb.org/t/p/original//M7SUK85sKjaStg4TKhlAVyGlz3.jpg",
  },
  {
    id: 25,
    title: "Contagion",
    releaseYear: "2011",
    genres: "Drama, Thriller, Science Fiction",
    content:
      "Contagion: As an epidemic of a lethal airborne virus - that kills within days - rapidly grows, the worldwide medical community races to find a cure and control the panic that spreads faster than the virus itself.",
    image:
      "https://image.tmdb.org/t/p/original//qL0IooP0bjXy0KXl9KEyPo22ll0.jpg",
  },
  {
    id: 26,
    title: "Napoleon",
    releaseYear: "2023",
    genres: "History, War, Romance",
    content:
      "Napoleon: An epic that details the checkered rise and fall of French Emperor Napoleon Bonaparte and his relentless journey to power through the prism of his addictive, volatile relationship with his wife, Josephine.",
    image:
      "https://image.tmdb.org/t/p/original//vcZWJGvB5xydWuUO1vaTLI82tGi.jpg",
  },
  {
    id: 27,
    title: "Toy Story 3",
    releaseYear: "2010",
    genres: "Animation, Family, Comedy",
    content:
      "Toy Story 3: Woody, Buzz, and the rest of Andy's toys haven't been played with in years. With Andy about to go to college, the gang find themselves accidentally left at a nefarious day care center. The toys must band together to escape and return home to Andy.",
    image:
      "https://image.tmdb.org/t/p/original//AbbXspMOwdvwWZgVN0nabZq03Ec.jpg",
  },
  {
    id: 28,
    title: "The Bad Guys",
    releaseYear: "2022",
    genres: "Family, Animation, Adventure, Comedy, Crime",
    content:
      "The Bad Guys: When the Bad Guys, a crew of criminal animals, are finally caught after years of heists and being the world’s most-wanted villains, Mr. Wolf brokers a deal to save them all from prison.",
    image:
      "https://image.tmdb.org/t/p/original//7qop80YfuO0BwJa1uXk1DXUUEwv.jpg",
  },
  {
    id: 29,
    title: "The Hunger Games: Catching Fire",
    releaseYear: "2013",
    genres: "Adventure, Action, Science Fiction",
    content:
      'The Hunger Games: Catching Fire: Katniss Everdeen has returned home safe after winning the 74th Annual Hunger Games along with fellow tribute Peeta Mellark. Winning means that they must turn around and leave their family and close friends, embarking on a "Victor\'s Tour" of the districts. Along the way Katniss senses that a rebellion is simmering, but the Capitol is still very much in control as President Snow prepares the 75th Annual Hunger Games (The Quarter Quell) - a competition that could change Panem forever.',
    image:
      "https://image.tmdb.org/t/p/original//v9qVkyS58WHdfrcEq0dxUJFKS9n.jpg",
  },
  {
    id: 10,
    title: "Toy Story 4",
    releaseYear: "2019",
    genres: "Family, Adventure, Animation, Comedy, Fantasy",
    content:
      'Toy Story 4: Woody has always been confident about his place in the world and that his priority is taking care of his kid, whether that\'s Andy or Bonnie. But when Bonnie adds a reluctant new toy called "Forky" to her room, a road trip adventure alongside old and new friends will show Woody how big the world can be for a toy.',
    image:
      "https://image.tmdb.org/t/p/original//w9kR8qbmQ01HwnvK4alvnQ2ca0L.jpg",
  },
  {
    id: 11,
    title: "Mission: Impossible III",
    releaseYear: "2006",
    genres: "Adventure, Action, Thriller",
    content:
      "Mission: Impossible III: Retired from active duty, and training recruits for the Impossible Mission Force, agent Ethan Hunt faces the toughest foe of his career: Owen Davian, an international broker of arms and information, who is as cunning as he is ruthless. Davian emerges to threaten Hunt and all that he holds dear -- including the woman Hunt loves.",
    image:
      "https://image.tmdb.org/t/p/original//vKGYCpmQyV9uHybWDzXuII8Los5.jpg",
  },
  {
    id: 12,
    title: "Ponyo",
    releaseYear: "2008",
    genres: "Animation, Fantasy, Family",
    content:
      "Ponyo: When Sosuke, a young boy who lives on a clifftop overlooking the sea, rescues a stranded goldfish named Ponyo, he discovers more than he bargained for. Ponyo is a curious, energetic young creature who yearns to be human, but even as she causes chaos around the house, her father, a powerful sorcerer, schemes to return Ponyo to the sea.",
    image:
      "https://image.tmdb.org/t/p/original//yp8vEZflGynlEylxEesbYasc06i.jpg",
  },
  {
    id: 13,
    title: "Blue Velvet",
    releaseYear: "1986",
    genres: "Crime, Drama, Mystery, Thriller",
    content:
      "Blue Velvet: Clean-cut Jeffrey Beaumont realizes his hometown is not so normal when he discovers a human ear in a field, the investigation soon catapulting him toward a disturbed nightclub singer and a drug-addicted sadist.",
    image:
      "https://image.tmdb.org/t/p/original//7hlgzJXLgyECS1mk3LSN3E72l5N.jpg",
  },
  {
    id: 14,
    title: "Fifty Shades Freed",
    releaseYear: "2018",
    genres: "Drama, Romance",
    content:
      "Fifty Shades Freed: Believing they have left behind shadowy figures from their past, newlyweds Christian and Ana fully embrace an inextricable connection and shared life of luxury. But just as she steps into her role as Mrs. Grey and he relaxes into an unfamiliar stability, new threats could jeopardize their happy ending before it even begins.",
    image:
      "https://image.tmdb.org/t/p/original//vwFR5WI1RQ1RCxS0cdTbiSgaXJr.jpg",
  },
  {
    id: 15,
    title: "Gladiator",
    releaseYear: "2000",
    genres: "Action, Drama, Adventure",
    content:
      "Gladiator: In the year 180, the death of emperor Marcus Aurelius throws the Roman Empire into chaos.  Maximus is one of the Roman army's most capable and trusted generals and a key advisor to the emperor.  As Marcus' devious son Commodus ascends to the throne, Maximus is set to be executed.  He escapes, but is captured by slave traders.  Renamed Spaniard and forced to become a gladiator, Maximus must battle to the death with other men for the amusement of paying audiences.",
    image:
      "https://image.tmdb.org/t/p/original//ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
  },
  {
    id: 16,
    title: "Heat",
    releaseYear: "1995",
    genres: "Action, Crime, Drama",
    content:
      "Heat: Obsessive master thief Neil McCauley leads a top-notch crew on various daring heists throughout Los Angeles while determined detective Vincent Hanna pursues him without rest. Each man recognizes and respects the ability and the dedication of the other even though they are aware their cat-and-mouse game may end in violence.",
    image:
      "https://image.tmdb.org/t/p/original//umSVjVdbVwtx5ryCA2QXL44Durm.jpg",
  },
  {
    id: 17,
    title: "U.S. Marshals",
    releaseYear: "1998",
    genres: "Thriller, Crime, Action",
    content:
      "U.S. Marshals: U.S. Marshal Sam Gerard is accompanying a plane load of convicts from Chicago to New York. The plane crashes spectacularly, and Mark Sheridan escapes. But when Diplomatic Security Agent John Royce is assigned to help Gerard recapture Sheridan, it becomes clear that Sheridan is more than just another murderer.",
    image:
      "https://image.tmdb.org/t/p/original//5ST0BydDSXtW5AtfDDhTVS13pTt.jpg",
  },
  {
    id: 18,
    title: "Whiplash",
    releaseYear: "2014",
    genres: "Drama, Music",
    content:
      "Whiplash: Under the direction of a ruthless instructor, a talented young drummer begins to pursue perfection at any cost, even his humanity.",
    image:
      "https://image.tmdb.org/t/p/original//7fn624j5lj3xTme2SgiLCeuedmO.jpg",
  },
  {
    id: 19,
    title: "War for the Planet of the Apes",
    releaseYear: "2017",
    genres: "Drama, Science Fiction, War",
    content:
      "War for the Planet of the Apes: Caesar and his apes are forced into a deadly conflict with an army of humans led by a ruthless Colonel. After the apes suffer unimaginable losses, Caesar wrestles with his darker instincts and begins his own mythic quest to avenge his kind. As the journey finally brings them face to face, Caesar and the Colonel are pitted against each other in an epic battle that will determine the fate of both their species and the future of the planet.",
    image:
      "https://image.tmdb.org/t/p/original//mMA1qhBFgZX8O36qPPTC016kQl1.jpg",
  },
  {
    id: 20,
    title: "The Gangster, the Cop, the Devil",
    releaseYear: "2019",
    genres: "Crime, Action, Thriller",
    content:
      "The Gangster, the Cop, the Devil: After barely surviving a violent attack by an elusive serial killer, crime boss Jang Dong-su finds himself forming an unlikely partnership with local detective Jung Tae-seok to catch the sadistic killer simply known as K.",
    image:
      "https://image.tmdb.org/t/p/original//oHlM4abRm6BzrRcz9Nup1uidw9H.jpg",
  },
  {
    id: 21,
    title: "Leo",
    releaseYear: "2023",
    genres: "Animation, Comedy, Family",
    content:
      "Leo: Jaded 74-year-old lizard Leo has been stuck in the same Florida classroom for decades with his terrarium-mate turtle. When he learns he only has one year left to live, he plans to escape to experience life on the outside but instead gets caught up in the problems of his anxious students — including an impossibly mean substitute teacher.",
    image:
      "https://image.tmdb.org/t/p/original//pD6sL4vntUOXHmuvJPPZAgvyfd9.jpg",
  },
  {
    id: 22,
    title: "Rocky V",
    releaseYear: "1990",
    genres: "Drama",
    content:
      "Rocky V: A lifetime of taking shots has ended Rocky’s career, and a crooked accountant has left him broke. Inspired by the memory of his trainer, however, Rocky finds glory in training and takes on an up-and-coming boxer.",
    image:
      "https://image.tmdb.org/t/p/original//o1nY37L6HC9hwlLSH5sHVzvXt1P.jpg",
  },
  {
    id: 23,
    title: "Ghostbusters: Afterlife",
    releaseYear: "2021",
    genres: "Fantasy, Comedy, Adventure, Science Fiction",
    content:
      "Ghostbusters: Afterlife: When single mom Callie and her two kids Trevor and Phoebe arrive in a small Oklahoma town, they begin to discover their connection to the original Ghostbusters and the secret legacy their grandfather left behind.",
    image:
      "https://image.tmdb.org/t/p/original//sg4xJaufDiQl7caFEskBtQXfD4x.jpg",
  },
  {
    id: 24,
    title: "Hocus Pocus 2",
    releaseYear: "2022",
    genres: "Fantasy, Comedy, Family",
    content:
      "Hocus Pocus 2: 29 years since the Black Flame Candle was last lit, the 17th-century Sanderson sisters are resurrected, and they are looking for revenge. Now it's up to three high school students to stop the ravenous witches from wreaking a new kind of havoc on Salem before dawn on All Hallow's Eve.",
    image:
      "https://image.tmdb.org/t/p/original//7ze7YNmUaX81ufctGqt0AgHxRtL.jpg",
  },
  {
    id: 25,
    title: "Home Alone 2: Lost in New York",
    releaseYear: "1992",
    genres: "Comedy, Family, Adventure",
    content:
      "Home Alone 2: Lost in New York: Instead of flying to Florida with his folks, Kevin ends up alone in New York, where he gets a hotel room with his dad's credit card—despite problems from a clerk and meddling bellboy. But when Kevin runs into his old nemeses, the Wet Bandits, he's determined to foil their plans to rob a toy store on Christmas Eve.",
    image:
      "https://image.tmdb.org/t/p/original//uuitWHpJwxD1wruFl2nZHIb4UGN.jpg",
  },
  {
    id: 26,
    title: "Now You See Me",
    releaseYear: "2013",
    genres: "Thriller, Crime",
    content:
      "Now You See Me: An FBI agent and an Interpol detective track a team of illusionists who pull off bank heists during their performances and reward their audiences with the money.",
    image:
      "https://image.tmdb.org/t/p/original//tWsNYbrqy1p1w6K9zRk0mSchztT.jpg",
  },
  {
    id: 27,
    title: "Bumblebee",
    releaseYear: "2018",
    genres: "Action, Adventure, Science Fiction",
    content:
      "Bumblebee: On the run in the year 1987, Bumblebee finds refuge in a junkyard in a small Californian beach town. Charlie, on the cusp of turning 18 and trying to find her place in the world, discovers Bumblebee, battle-scarred and broken.  When Charlie revives him, she quickly learns this is no ordinary yellow VW bug.",
    image:
      "https://image.tmdb.org/t/p/original//fw02ONlDhrYjTSZV8XO6hhU3ds3.jpg",
  },
  {
    id: 28,
    title: "Mad Max Beyond Thunderdome",
    releaseYear: "1985",
    genres: "Action, Adventure, Science Fiction",
    content:
      "Mad Max Beyond Thunderdome: Mad Max becomes a pawn in a decadent oasis of a technological society, and when exiled, becomes the deliverer of a colony of children.",
    image:
      "https://image.tmdb.org/t/p/original//jJlxcEVVUHnrUeEkQ0077VeHQpb.jpg",
  },
  {
    id: 29,
    title: "Planet of the Apes",
    releaseYear: "1968",
    genres: "Science Fiction, Adventure, Drama, Action",
    content:
      "Planet of the Apes: Astronaut Taylor crash lands on a distant planet ruled by apes who use a primitive race of humans for experimentation and sport. Soon Taylor finds himself among the hunted, his life in the hands of a benevolent chimpanzee scientist.",
    image:
      "https://image.tmdb.org/t/p/original//2r9iKnlSYEk4daQadsXfcjHfIjQ.jpg",
  },
  {
    id: 10,
    title: "The Rock",
    releaseYear: "1996",
    genres: "Action, Adventure, Thriller",
    content:
      "The Rock: When vengeful General Francis X. Hummel seizes control of Alcatraz Island and threatens to launch missiles loaded with deadly chemical weapons into San Francisco, only a young FBI chemical weapons expert and notorious Federal prisoner have the stills to penetrate the impregnable island fortress and take him down.",
    image:
      "https://image.tmdb.org/t/p/original//j5mxLNWjUlXUUk8weFBtnF4afIR.jpg",
  },
  {
    id: 11,
    title: "The Lord of the Rings: The Fellowship of the Ring",
    releaseYear: "2001",
    genres: "Adventure, Fantasy, Action",
    content:
      "The Lord of the Rings: The Fellowship of the Ring: Young hobbit Frodo Baggins, after inheriting a mysterious ring from his uncle Bilbo, must leave his home in order to keep it from falling into the hands of its evil creator. Along the way, a fellowship is formed to protect the ringbearer and make sure that the ring arrives at its final destination: Mt. Doom, the only place where it can be destroyed.",
    image:
      "https://image.tmdb.org/t/p/original//6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
  },
  {
    id: 12,
    title: "Rebel Moon - Part One: A Child of Fire",
    releaseYear: "2023",
    genres: "Science Fiction, Drama, Action",
    content:
      "Rebel Moon - Part One: A Child of Fire: When the ruthless forces of the Motherworld threaten a quiet farming village on a distant moon, a mysterious outsider becomes its best hope for survival.",
    image:
      "https://image.tmdb.org/t/p/original//ui4DrH1cKk2vkHshcUcGt2lKxCm.jpg",
  },
  {
    id: 13,
    title: "Doctor Strange in the Multiverse of Madness",
    releaseYear: "2022",
    genres: "Fantasy, Action, Adventure",
    content:
      "Doctor Strange in the Multiverse of Madness: Doctor Strange, with the help of mystical allies both old and new, traverses the mind-bending and dangerous alternate realities of the Multiverse to confront a mysterious new adversary.",
    image:
      "https://image.tmdb.org/t/p/original//9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg",
  },
  {
    id: 14,
    title: "John Wick: Chapter 3 - Parabellum",
    releaseYear: "2019",
    genres: "Action, Thriller, Crime",
    content:
      "John Wick: Chapter 3 - Parabellum: Super-assassin John Wick returns with a $14 million price tag on his head and an army of bounty-hunting killers on his trail. After killing a member of the shadowy international assassin’s guild, the High Table, John Wick is excommunicado, but the world’s most ruthless hit men and women await his every turn.",
    image:
      "https://image.tmdb.org/t/p/original//ziEuG1essDuWuC5lpWUaw1uXY2O.jpg",
  },
  {
    id: 15,
    title: "The New Mutants",
    releaseYear: "2020",
    genres: "Science Fiction, Horror, Action, Mystery, Adventure",
    content:
      "The New Mutants: Five young mutants, just discovering their abilities while held in a secret facility against their will, fight to escape their past sins and save themselves.",
    image:
      "https://image.tmdb.org/t/p/original//xZNw9xxtwbEf25NYoz52KdbXHPM.jpg",
  },
  {
    id: 16,
    title: "Metropolis",
    releaseYear: "1927",
    genres: "Drama, Science Fiction",
    content:
      "Metropolis: In a futuristic city sharply divided between the rich and the poor, the son of the city's mastermind meets a prophet who predicts the coming of a savior to mediate their differences.",
    image:
      "https://image.tmdb.org/t/p/original//pxbGZewX327IbTvrCVRJgcLJTSQ.jpg",
  },
  {
    id: 17,
    title: "The Girl Next Door",
    releaseYear: "2004",
    genres: "Comedy, Romance",
    content:
      "The Girl Next Door: Exceptionally ambitious high schooler Matthew has aspirations for a career in politics when he falls in love with his gorgeous 19-year-old neighbor, Danielle. But Matthew's bright future is jeopardized when he finds Danielle was once a porn star. As Danielle's past catches up with her, Matthew's love for her forces him to re-evaluate his goals.",
    image:
      "https://image.tmdb.org/t/p/original//5mVyFHSY2rSsNgD4NfEwV82HigU.jpg",
  },
  {
    id: 18,
    title: "Eternal Sunshine of the Spotless Mind",
    releaseYear: "2004",
    genres: "Science Fiction, Drama, Romance",
    content:
      "Eternal Sunshine of the Spotless Mind: Joel Barish, heartbroken that his girlfriend underwent a procedure to erase him from her memory, decides to do the same. However, as he watches his memories of her fade away, he realises that he still loves her, and may be too late to correct his mistake.",
    image:
      "https://image.tmdb.org/t/p/original//5MwkWH9tYHv3mV9OdYTMR5qreIz.jpg",
  },
  {
    id: 19,
    title: "Talk to Me",
    releaseYear: "2023",
    genres: "Horror, Thriller",
    content:
      "Talk to Me: When a group of friends discover how to conjure spirits using an embalmed hand, they become hooked on the new thrill, until one of them goes too far and unleashes terrifying supernatural forces.",
    image:
      "https://image.tmdb.org/t/p/original//kdPMUMJzyYAc4roD52qavX0nLIC.jpg",
  },
  {
    id: 20,
    title: "The Good Dinosaur",
    releaseYear: "2015",
    genres: "Adventure, Animation, Family",
    content:
      "The Good Dinosaur: An epic journey into the world of dinosaurs where an Apatosaurus named Arlo makes an unlikely human friend.",
    image:
      "https://image.tmdb.org/t/p/original//uFGLkizYHzAE5cEtWtyL6FBcBdJ.jpg",
  },
  {
    id: 21,
    title: "Wrong Turn 3: Left for Dead",
    releaseYear: "2009",
    genres: "Horror, Thriller",
    content:
      "Wrong Turn 3: Left for Dead: A group of people find themselves trapped in the backwoods of West Virginia, fighting for their lives against a group of vicious and horribly disfigured inbred cannibals.",
    image:
      "https://image.tmdb.org/t/p/original//84s4LMWuGbm4xPWW5PSbHyQhh33.jpg",
  },
  {
    id: 22,
    title: "The Cabin in the Woods",
    releaseYear: "2012",
    genres: "Horror, Mystery, Thriller",
    content:
      "The Cabin in the Woods: Five friends go for a break at a remote cabin, where they get more than they bargained for, discovering the truth behind the cabin in the woods.",
    image:
      "https://image.tmdb.org/t/p/original//kjDXrK3ReIwuDrpWElI5OQkKYTA.jpg",
  },
  {
    id: 23,
    title: "Sing 2",
    releaseYear: "2021",
    genres: "Animation, Family, Music, Comedy",
    content:
      "Sing 2: Buster and his new cast now have their sights set on debuting a new show at the Crystal Tower Theater in glamorous Redshore City. But with no connections, he and his singers must sneak into the Crystal Entertainment offices, run by the ruthless wolf mogul Jimmy Crystal, where the gang pitches the ridiculous idea of casting the lion rock legend Clay Calloway in their show. Buster must embark on a quest to find the now-isolated Clay and persuade him to return to the stage.",
    image:
      "https://image.tmdb.org/t/p/original//aWeKITRFbbwY8txG5uCj4rMCfSP.jpg",
  },
  {
    id: 24,
    title: "The Ten Commandments",
    releaseYear: "1956",
    genres: "Drama, History",
    content:
      "The Ten Commandments: Escaping death, a Hebrew infant is raised in a royal household to become a prince. Upon discovery of his true heritage, Moses embarks on a personal quest to reclaim his destiny as the leader and liberator of the Hebrew people.",
    image:
      "https://image.tmdb.org/t/p/original//stSpFp2NUJMGhIyndqwBi9WE9y9.jpg",
  },
  {
    id: 25,
    title: "Passengers",
    releaseYear: "2016",
    genres: "Drama, Romance, Science Fiction",
    content:
      "Passengers: A spacecraft traveling to a distant colony planet and transporting thousands of people has a malfunction in its sleep chambers. As a result, two passengers are awakened 90 years early.",
    image:
      "https://image.tmdb.org/t/p/original//oZpdONg32luHu0g8HcysuPgSlIK.jpg",
  },
  {
    id: 26,
    title: "Cocaine Bear",
    releaseYear: "2023",
    genres: "Thriller, Comedy, Crime",
    content:
      "Cocaine Bear: Inspired by a true story, an oddball group of cops, criminals, tourists and teens converge in a Georgia forest where a 500-pound black bear goes on a murderous rampage after unintentionally ingesting cocaine.",
    image:
      "https://image.tmdb.org/t/p/original//gOnmaxHo0412UVr1QM5Nekv1xPi.jpg",
  },
  {
    id: 27,
    title: "Freddy vs. Jason",
    releaseYear: "2003",
    genres: "Horror",
    content:
      "Freddy vs. Jason: Freddy enlists Jason to kill on his behalf on Elm Street, after realizing that he can't haunt dreams because people no longer fear him.",
    image:
      "https://image.tmdb.org/t/p/original//ffoBCQ7y63Tvo48HsJqr1XOiqiV.jpg",
  },
  {
    id: 28,
    title: "Batman Begins",
    releaseYear: "2005",
    genres: "Action, Crime, Drama",
    content:
      "Batman Begins: Driven by tragedy, billionaire Bruce Wayne dedicates his life to uncovering and defeating the corruption that plagues his home, Gotham City.  Unable to work within the system, he instead creates a new identity, a symbol of fear for the criminal underworld - The Batman.",
    image:
      "https://image.tmdb.org/t/p/original//4MpN4kIEqUjW8OPtOQJXlTdHiJV.jpg",
  },
  {
    id: 29,
    title: "The Chronicles of Narnia: Prince Caspian",
    releaseYear: "2008",
    genres: "Adventure, Family, Fantasy",
    content:
      "The Chronicles of Narnia: Prince Caspian: One year after their incredible adventures in the Lion, the Witch and the Wardrobe, Peter, Edmund, Lucy and Susan Pevensie return to Narnia to aid a young prince whose life has been threatened by the evil King Miraz. Now, with the help of a colorful cast of new characters, including Trufflehunter the badger and Nikabrik the dwarf, the Pevensie clan embarks on an incredible quest to ensure that Narnia is returned to its rightful heir.",
    image:
      "https://image.tmdb.org/t/p/original//qxz3WIyjZiSKUhaTIEJ3c1GcC9z.jpg",
  },
  {
    id: 10,
    title: "Journey 2: The Mysterious Island",
    releaseYear: "2012",
    genres: "Adventure, Action, Science Fiction",
    content:
      "Journey 2: The Mysterious Island: Sean Anderson partners with his mom's boyfriend on a mission to find his grandfather, who is thought to be missing on a mythical island.",
    image:
      "https://image.tmdb.org/t/p/original//hLZHJjsZ83Wfn3MRteNb6ew0WC7.jpg",
  },
  {
    id: 11,
    title: "The Karate Kid",
    releaseYear: "2010",
    genres: "Action, Adventure, Drama, Family",
    content:
      "The Karate Kid: Twelve-year-old Dre Parker could have been the most popular kid in Detroit, but his mother's latest career move has landed him in China. Dre immediately falls for his classmate Mei Ying but the cultural differences make such a friendship impossible. Even worse, Dre's feelings make him an enemy of the class bully, Cheng. With no friends in a strange land, Dre has nowhere to turn but maintenance man Mr. Han, who is a kung fu master. As Han teaches Dre that kung fu is not about punches and parries, but maturity and calm, Dre realizes that facing down the bullies will be the fight of his life.",
    image:
      "https://image.tmdb.org/t/p/original//bHjLC5GuBfeyW6ZE07x6TalKj19.jpg",
  },
  {
    id: 12,
    title: "The Passion of the Christ",
    releaseYear: "2004",
    genres: "Drama",
    content:
      "The Passion of the Christ: A graphic portrayal of the last twelve hours of Jesus of Nazareth's life.",
    image:
      "https://image.tmdb.org/t/p/original//v9f9MMrq2nGQrN7cHnQRmEq9lSE.jpg",
  },
  {
    id: 13,
    title: "Hotel Transylvania: Transformania",
    releaseYear: "2022",
    genres: "Animation, Comedy, Family, Adventure, Fantasy",
    content:
      "Hotel Transylvania: Transformania: When Van Helsing's mysterious invention, the \"Monsterfication Ray,\" goes haywire, Drac and his monster pals are all transformed into humans, and Johnny becomes a monster. In their new mismatched bodies, Drac and Johnny must team up and race across the globe to find a cure before it's too late, and before they drive each other crazy.",
    image:
      "https://image.tmdb.org/t/p/original//teCy1egGQa0y8ULJvlrDHQKnxBL.jpg",
  },
  {
    id: 14,
    title: "Meet the Robinsons",
    releaseYear: "2007",
    genres: "Animation, Comedy, Family",
    content:
      "Meet the Robinsons: Lewis, a brilliant young inventor, is keen on creating a time machine to find his mother, who abandoned him in an orphanage. Things take a turn when he meets Wilbur Robinson and his family.",
    image:
      "https://image.tmdb.org/t/p/original//naya0zF4kT401Sx15AtwB9vpcJr.jpg",
  },
  {
    id: 15,
    title: "Cop Land",
    releaseYear: "1997",
    genres: "Crime, Drama, Mystery",
    content:
      "Cop Land: Freddy Heflin is the sheriff of a place everyone calls “Cop Land” — a small and seemingly peaceful town populated by the big city police officers he’s long admired. Yet something ugly is taking place behind the town’s peaceful facade. And when Freddy uncovers a massive, deadly conspiracy among these local residents, he is forced to take action and make a dangerous choice between protecting his idols and upholding the law.",
    image:
      "https://image.tmdb.org/t/p/original//qzR7m6kUhsbdid3xRK2jTXjyNmG.jpg",
  },
  {
    id: 16,
    title: "Ocean's Eight",
    releaseYear: "2018",
    genres: "Crime, Comedy, Action",
    content:
      "Ocean's Eight: Debbie Ocean, a criminal mastermind, gathers a crew of female thieves to pull off the heist of the century at New York's annual Met Gala.",
    image:
      "https://image.tmdb.org/t/p/original//MvYpKlpFukTivnlBhizGbkAe3v.jpg",
  },
  {
    id: 17,
    title: "Ex Machina",
    releaseYear: "2015",
    genres: "Drama, Science Fiction",
    content:
      "Ex Machina: Caleb, a coder at the world's largest internet company, wins a competition to spend a week at a private mountain retreat belonging to Nathan, the reclusive CEO of the company. But when Caleb arrives at the remote location he finds that he will have to participate in a strange and fascinating experiment in which he must interact with the world's first true artificial intelligence, housed in the body of a beautiful robot girl.",
    image:
      "https://image.tmdb.org/t/p/original//aeJS3OXnp7d17QSoMdglZERwCkM.jpg",
  },
  {
    id: 18,
    title: "Pirates of the Caribbean: On Stranger Tides",
    releaseYear: "2011",
    genres: "Adventure, Action, Fantasy",
    content:
      "Pirates of the Caribbean: On Stranger Tides: Captain Jack Sparrow crosses paths with a woman from his past, and he's not sure if it's love -- or if she's a ruthless con artist who's using him to find the fabled Fountain of Youth. When she forces him aboard the Queen Anne's Revenge, the ship of the formidable pirate Blackbeard, Jack finds himself on an unexpected adventure in which he doesn't know who to fear more: Blackbeard or the woman from his past.",
    image:
      "https://image.tmdb.org/t/p/original//keGfSvCmYj7CvdRx36OdVrAEibE.jpg",
  },
  {
    id: 19,
    title: "Free Guy",
    releaseYear: "2021",
    genres: "Comedy, Adventure, Science Fiction",
    content:
      "Free Guy: A bank teller discovers he is actually a background player in an open-world video game, and decides to become the hero of his own story. Now, in a world where there are no limits, he is determined to be the guy who saves his world his way before it's too late.",
    image:
      "https://image.tmdb.org/t/p/original//xmbU4JTUm8rsdtn7Y3Fcm30GpeT.jpg",
  },
  {
    id: 20,
    title: "Demon Slayer -Kimetsu no Yaiba- The Movie: Mugen Train",
    releaseYear: "2020",
    genres: "Action, Animation, Adventure, Fantasy, Thriller",
    content:
      "Demon Slayer -Kimetsu no Yaiba- The Movie: Mugen Train: Tanjiro Kamado, joined with Inosuke Hashibira, a boy raised by boars who wears a boar's head, and Zenitsu Agatsuma, a scared boy who reveals his true power when he sleeps, boards the Infinity Train on a new mission with the Fire Hashira, Kyojuro Rengoku, to defeat a demon who has been tormenting the people and killing the demon slayers who oppose it!",
    image:
      "https://image.tmdb.org/t/p/original//h8Rb9gBr48ODIwYUttZNYeMWeUU.jpg",
  },
  {
    id: 21,
    title: "How to Train Your Dragon 2",
    releaseYear: "2014",
    genres: "Fantasy, Action, Adventure, Animation, Comedy, Family",
    content:
      "How to Train Your Dragon 2: Five years have passed since Hiccup and Toothless united the dragons and Vikings of Berk. Now, they spend their time charting unmapped territories. During one of their adventures, the pair discover a secret cave that houses hundreds of wild dragons -- and a mysterious dragon rider who turns out to be Hiccup's mother, Valka. Hiccup and Toothless then find themselves at the center of a battle to protect Berk from a power-hungry warrior named Drago.",
    image:
      "https://image.tmdb.org/t/p/original//d13Uj86LdbDLrfDoHR5aDOFYyJC.jpg",
  },
  {
    id: 22,
    title: "Meet Joe Black",
    releaseYear: "1998",
    genres: "Fantasy, Drama, Romance",
    content:
      "Meet Joe Black: William Parrish (Sir Anthony Hopkins), media tycoon, loving father, and still a human being, is about to celebrate his 65th birthday. One morning, he is contacted by the inevitable, by hallucination, as he thinks. Later, Death enters his home and his life, personified in a man's body: Joe Black (Brad Pitt) has arrived. His intention was to take William with him, but accidentally, Joe's former host and William's beautiful daughter Susan (Claire Forlani) have already met. Joe begins to develop certain interest in life on Earth, as well as in Susan, who has no clue with whom she's flirting.",
    image:
      "https://image.tmdb.org/t/p/original//fDPAjvfPMomkKF7cMRmL5Anak61.jpg",
  },
  {
    id: 23,
    title: "Red, White & Royal Blue",
    releaseYear: "2023",
    genres: "Comedy, Romance",
    content:
      "Red, White & Royal Blue: After an altercation between Alex, the president's son, and Britain's Prince Henry at a royal event becomes tabloid fodder, their long-running feud now threatens to drive a wedge in U.S./British relations. When the rivals are forced into a staged truce, their icy relationship begins to thaw and the friction between them sparks something deeper than they ever expected.",
    image:
      "https://image.tmdb.org/t/p/original//dD3vhyDRCCT90hf4rldHU6Wu3Va.jpg",
  },
  {
    id: 24,
    title: "Top Gun",
    releaseYear: "1986",
    genres: "Drama, Action, Adventure",
    content:
      "Top Gun: For Lieutenant Pete 'Maverick' Mitchell and his friend and co-pilot Nick 'Goose' Bradshaw, being accepted into an elite training school for fighter pilots is a dream come true. But a tragedy, as well as personal demons, will threaten Pete's dreams of becoming an ace pilot.",
    image:
      "https://image.tmdb.org/t/p/original//xUuHj3CgmZQ9P2cMaqQs4J0d4Zc.jpg",
  },
  {
    id: 25,
    title: "The General",
    releaseYear: "1926",
    genres: "Comedy, Action, Adventure, War",
    content:
      "The General: During America’s Civil War, Union spies steal engineer Johnny Gray's beloved locomotive, 'The General'—with Johnnie's lady love aboard an attached boxcar—and he single-handedly must do all in his power to both get The General back and to rescue Annabelle.",
    image:
      "https://image.tmdb.org/t/p/original//nIp4gIXogCjfB1QABNsWwa9gSca.jpg",
  },
  {
    id: 26,
    title: "Rocky IV",
    releaseYear: "1985",
    genres: "Drama",
    content:
      "Rocky IV: Rocky Balboa proudly holds the world heavyweight boxing championship, but a new challenger has stepped forward: Ivan Drago, a six-foot-four, 261-pound fighter who has the backing of the Soviet Union.",
    image:
      "https://image.tmdb.org/t/p/original//2MHUit4H6OK5adcOjnCN6suCKOl.jpg",
  },
  {
    id: 27,
    title: "The Purge: Anarchy",
    releaseYear: "2014",
    genres: "Horror, Thriller",
    content:
      "The Purge: Anarchy: One night per year, the government sanctions a 12-hour period in which citizens can commit any crime they wish -- including murder -- without fear of punishment or imprisonment. Leo, a sergeant who lost his son, plans a vigilante mission of revenge during the mayhem. However, instead of a death-dealing avenger, he becomes the unexpected protector of four innocent strangers who desperately need his help if they are to survive the night.",
    image:
      "https://image.tmdb.org/t/p/original//qwqHHZLZSUvMkAMQ47ymtfjEifY.jpg",
  },
  {
    id: 28,
    title: "Spirited Away",
    releaseYear: "2001",
    genres: "Animation, Family, Fantasy",
    content:
      "Spirited Away: A young girl, Chihiro, becomes trapped in a strange new world of spirits. When her parents undergo a mysterious transformation, she must call upon the courage she never knew she had to free her family.",
    image:
      "https://image.tmdb.org/t/p/original//39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
  },
  {
    id: 29,
    title: "The Next 365 Days",
    releaseYear: "2022",
    genres: "Romance, Drama",
    content:
      "The Next 365 Days: Laura and Massimo's relationship hangs in the balance as they try to overcome trust issues while a tenacious Nacho works to push them apart.",
    image:
      "https://image.tmdb.org/t/p/original//6FsGeIp7heHm5eh4tIxTzHIRxmt.jpg",
  },
  {
    id: 10,
    title: "The Parent Trap",
    releaseYear: "1998",
    genres: "Comedy, Family, Romance",
    content:
      "The Parent Trap: Hallie Parker and Annie James are identical twins separated at a young age because of their parents' divorce. Unknowingly to their parents, the girls are sent to the same summer camp where they meet, discover the truth about themselves, and then plot with each other to switch places.",
    image:
      "https://image.tmdb.org/t/p/original//a3XOGrrAjl1wwiumtACWBufg6AL.jpg",
  },
  {
    id: 11,
    title: "Platoon",
    releaseYear: "1986",
    genres: "Drama, War, Action",
    content:
      "Platoon: As a young and naive recruit in Vietnam, Chris Taylor faces a moral crisis when confronted with the horrors of war and the duality of man.",
    image:
      "https://image.tmdb.org/t/p/original//m3mmFkPQKvPZq5exmh0bDuXlD9T.jpg",
  },
  {
    id: 12,
    title: "The Hangover Part II",
    releaseYear: "2011",
    genres: "Comedy",
    content:
      "The Hangover Part II: The Hangover crew heads to Thailand for Stu's wedding. After the disaster of a bachelor party in Las Vegas last year, Stu is playing it safe with a mellow pre-wedding brunch. However, nothing goes as planned and Bangkok is the perfect setting for another adventure with the rowdy group.",
    image:
      "https://image.tmdb.org/t/p/original//jrP9zmdSUpOzzUXpEqPqg3dryUr.jpg",
  },
  {
    id: 13,
    title: "Manhattan",
    releaseYear: "1979",
    genres: "Comedy, Drama, Romance",
    content:
      "Manhattan: Manhattan explores how the life of a middle-aged television writer dating a teenage girl is further complicated when he falls in love with his best friend's mistress.",
    image:
      "https://image.tmdb.org/t/p/original//k4eT3EvfxW1L9Wmt04UqJqCvCR6.jpg",
  },
  {
    id: 14,
    title: "Teenage Mutant Ninja Turtles",
    releaseYear: "2014",
    genres: "Science Fiction, Action, Adventure, Comedy",
    content:
      "Teenage Mutant Ninja Turtles: When a kingpin threatens New York City, a group of mutated turtle warriors must emerge from the shadows to protect their home.",
    image:
      "https://image.tmdb.org/t/p/original//azL2ThbJMIkts3ZMt3j1YgBUeDB.jpg",
  },
  {
    id: 15,
    title: "The Pope's Exorcist",
    releaseYear: "2023",
    genres: "Horror, Thriller",
    content:
      "The Pope's Exorcist: Father Gabriele Amorth, Chief Exorcist of the Vatican, investigates a young boy's terrifying possession and ends up uncovering a centuries-old conspiracy the Vatican has desperately tried to keep hidden.",
    image:
      "https://image.tmdb.org/t/p/original//gNPqcv1tAifbN7PRNgqpzY8sEJZ.jpg",
  },
  {
    id: 16,
    title: "The Hunt",
    releaseYear: "2020",
    genres: "Action, Thriller, Horror",
    content:
      "The Hunt: Twelve strangers wake up in a clearing. They don't know where they are—or how they got there. In the shadow of a dark internet conspiracy theory, ruthless elitists gather at a remote location to hunt humans for sport. But their master plan is about to be derailed when one of the hunted turns the tables on her pursuers.",
    image:
      "https://image.tmdb.org/t/p/original//wxPhn4ef1EAo5njxwBkAEVrlJJG.jpg",
  },
  {
    id: 17,
    title: "Ice Age: Dawn of the Dinosaurs",
    releaseYear: "2009",
    genres: "Animation, Comedy, Family, Adventure",
    content:
      "Ice Age: Dawn of the Dinosaurs: Times are changing for Manny the moody mammoth, Sid the motor mouthed sloth and Diego the crafty saber-toothed tiger. Life heats up for our heroes when they meet some new and none-too-friendly neighbors – the mighty dinosaurs.",
    image:
      "https://image.tmdb.org/t/p/original//cXOLaxcNjNAYmEx1trZxOTKhK3Q.jpg",
  },
  {
    id: 18,
    title: "Resident Evil: Welcome to Raccoon City",
    releaseYear: "2021",
    genres: "Horror, Science Fiction, Action",
    content:
      "Resident Evil: Welcome to Raccoon City: Once the booming home of pharmaceutical giant Umbrella Corporation, Raccoon City is now a dying Midwestern town. The company’s exodus left the city a wasteland…with great evil brewing below the surface. When that evil is unleashed, the townspeople are forever…changed…and a small group of survivors must work together to uncover the truth behind Umbrella and make it through the night.",
    image:
      "https://image.tmdb.org/t/p/original//bArhvjRHl535XMaSh9VjInF2mSZ.jpg",
  },
  {
    id: 19,
    title: "Roald Dahl's The Witches",
    releaseYear: "2020",
    genres: "Family, Comedy, Fantasy",
    content:
      "Roald Dahl's The Witches: In late 1967, a young orphaned boy goes to live with his loving grandma in the rural Alabama town of Demopolis. As the boy and his grandmother encounter some deceptively glamorous but thoroughly diabolical witches, she wisely whisks him away to a seaside resort. Regrettably, they arrive at precisely the same time that the world's Grand High Witch has gathered.",
    image:
      "https://image.tmdb.org/t/p/original//ht6EfsM5hrsUPSR4ReJQFDVU71F.jpg",
  },
  {
    id: 20,
    title: "Geostorm",
    releaseYear: "2017",
    genres: "Action, Science Fiction, Thriller",
    content:
      "Geostorm: After an unprecedented series of natural disasters threatened the planet, the world's leaders came together to create an intricate network of satellites to control the global climate and keep everyone safe. But now, something has gone wrong: the system built to protect Earth is attacking it, and it becomes a race against the clock to uncover the real threat before a worldwide geostorm wipes out everything and everyone along with it.",
    image:
      "https://image.tmdb.org/t/p/original//nrsx0jEaBgXq4PWo7SooSnYJTv.jpg",
  },
  {
    id: 21,
    title: "The Bourne Identity",
    releaseYear: "2002",
    genres: "Action, Drama, Mystery, Thriller",
    content:
      "The Bourne Identity: Wounded to the brink of death and suffering from amnesia, Jason Bourne is rescued at sea by a fisherman. With nothing to go on but a Swiss bank account number, he starts to reconstruct his life, but finds that many people he encounters want him dead. However, Bourne realizes that he has the combat and mental skills of a world-class spy—but who does he work for?",
    image:
      "https://image.tmdb.org/t/p/original//aP8swke3gmowbkfZ6lmNidu0y9p.jpg",
  },
  {
    id: 22,
    title: "Willy Wonka & the Chocolate Factory",
    releaseYear: "1971",
    genres: "Family, Fantasy, Comedy",
    content:
      "Willy Wonka & the Chocolate Factory: When eccentric candy man Willy Wonka promises a lifetime supply of sweets and a tour of his chocolate factory to five lucky kids, penniless Charlie Bucket seeks the golden ticket that will make him a winner.",
    image:
      "https://image.tmdb.org/t/p/original//xL2GISX0MODJfpHrMdLdZF6xWgW.jpg",
  },
  {
    id: 23,
    title: "Iron Man",
    releaseYear: "2008",
    genres: "Action, Science Fiction, Adventure",
    content:
      "Iron Man: After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
    image:
      "https://image.tmdb.org/t/p/original//78lPtwv72eTNqFW9COBYI0dWDJa.jpg",
  },
  {
    id: 24,
    title: "Dawn of the Dead",
    releaseYear: "2004",
    genres: "Action, Horror, Drama",
    content:
      "Dawn of the Dead: A group of survivors take refuge in a shopping mall after the world is taken over by aggressive, flesh-eating zombies.",
    image:
      "https://image.tmdb.org/t/p/original//fNw87FZ6u258qmbkNNjrPtGZuvB.jpg",
  },
  {
    id: 25,
    title: "Alvin and the Chipmunks: The Squeakquel",
    releaseYear: "2009",
    genres: "Comedy, Family, Animation, Fantasy, Music",
    content:
      "Alvin and the Chipmunks: The Squeakquel: Pop sensations Alvin, Simon and Theodore end up in the care of Dave Seville's twenty-something nephew Toby. The boys must put aside music super stardom to return to school, and are tasked with saving the school's music program by winning the $25,000 prize in a battle of the bands. But the Chipmunks unexpectedly meet their match in three singing chipmunks known as The Chipettes - Brittany, Eleanor and Jeanette. Romantic and musical sparks are ignited when the Chipmunks and Chipettes square off.",
    image:
      "https://image.tmdb.org/t/p/original//8mdPqOga5fty15nXmaNcK1fsNMa.jpg",
  },
  {
    id: 26,
    title: "Gemini Man",
    releaseYear: "2019",
    genres: "Science Fiction, Action, Thriller",
    content:
      "Gemini Man: Henry Brogan is an elite 51-year-old assassin who's ready to call it quits after completing his 72nd job. His plans get turned upside down when he becomes the target of a mysterious operative who can seemingly predict his every move. To his horror, Brogan soon learns that the man who's trying to kill him is a younger, faster, cloned version of himself.",
    image:
      "https://image.tmdb.org/t/p/original//uTALxjQU8e1lhmNjP9nnJ3t2pRU.jpg",
  },
  {
    id: 27,
    title: "Ghost in the Shell",
    releaseYear: "2017",
    genres: "Science Fiction, Drama, Action",
    content:
      "Ghost in the Shell: In the near future, Major is the first of her kind: a human saved from a terrible crash, then cyber-enhanced to be a perfect soldier devoted to stopping the world's most dangerous criminals.",
    image:
      "https://image.tmdb.org/t/p/original//myRzRzCxdfUWjkJWgpHHZ1oGkJd.jpg",
  },
  {
    id: 28,
    title: "Rambo: Last Blood",
    releaseYear: "2019",
    genres: "Action, Thriller, Drama",
    content:
      "Rambo: Last Blood: After fighting his demons for decades, John Rambo now lives in peace on his family ranch in Arizona, but his rest is interrupted when Gabriela, the granddaughter of his housekeeper María, disappears after crossing the border into Mexico to meet her biological father. Rambo, who has become a true father figure for Gabriela over the years, undertakes a desperate and dangerous journey to find her.",
    image:
      "https://image.tmdb.org/t/p/original//kTQ3J8oTTKofAVLYnds2cHUz9KO.jpg",
  },
  {
    id: 29,
    title: "Detroit",
    releaseYear: "2017",
    genres: "Crime, Drama, Thriller, History",
    content:
      "Detroit: A police raid in Detroit in 1967 results in one of the largest citizens' uprisings in the history of the United States.",
    image:
      "https://image.tmdb.org/t/p/original//tmCt2hy9QoFHft3UcHwpGX2Sihl.jpg",
  },
  {
    id: 10,
    title: "Ratatouille",
    releaseYear: "2007",
    genres: "Animation, Comedy, Family, Fantasy",
    content:
      "Ratatouille: Remy, a resident of Paris, appreciates good food and has quite a sophisticated palate. He would love to become a chef so he can create and enjoy culinary masterpieces to his heart's delight. The only problem is, Remy is a rat. When he winds up in the sewer beneath one of Paris' finest restaurants, the rodent gourmet finds himself ideally placed to realize his dream.",
    image:
      "https://image.tmdb.org/t/p/original//t3vaWRPSf6WjDSamIkKDs1iQWna.jpg",
  },
  {
    id: 11,
    title: "Finding Nemo",
    releaseYear: "2003",
    genres: "Animation, Family",
    content:
      "Finding Nemo: Nemo, an adventurous young clownfish, is unexpectedly taken from his Great Barrier Reef home to a dentist's office aquarium. It's up to his worrisome father Marlin and a friendly but forgetful fish Dory to bring Nemo home -- meeting vegetarian sharks, surfer dude turtles, hypnotic jellyfish, hungry seagulls, and more along the way.",
    image:
      "https://image.tmdb.org/t/p/original//eHuGQ10FUzK1mdOY69wF5pGgEf5.jpg",
  },
  {
    id: 12,
    title: "WALL·E",
    releaseYear: "2008",
    genres: "Animation, Family, Science Fiction",
    content:
      "WALL·E: In the distant future, Earth has become a desolate wasteland, abandoned by humanity and overrun by mountains of trash. Amidst the rubble, a small, lovable robot named WALL-E spends his days tirelessly cleaning up the mess. But when a sleek, high-tech robot named EVE arrives on a mission to search for signs of life, WALL-E is immediately smitten. Together, they embark on a journey across the cosmos.",
    image:
      "https://image.tmdb.org/t/p/original//hbhFnRzzg6ZDmm8YAmxBnQpQIPh.jpg",
  },
  {
    id: 13,
    title: "Uncut Gems",
    releaseYear: "2019",
    genres: "Drama, Thriller, Crime",
    content:
      "Uncut Gems: A charismatic New York City jeweler always on the lookout for the next big score makes a series of high-stakes bets that could lead to the windfall of a lifetime. Howard must perform a precarious high-wire act, balancing business, family, and encroaching adversaries on all sides in his relentless pursuit of the ultimate win.",
    image:
      "https://image.tmdb.org/t/p/original//6XN1vxHc7kUSqNWtaQKN45J5x2v.jpg",
  },
  {
    id: 14,
    title: "The Expendables 2",
    releaseYear: "2012",
    genres: "Action, Adventure, Thriller",
    content:
      "The Expendables 2: Mr. Church reunites the Expendables for what should be an easy paycheck, but when one of their men is murdered on the job, their quest for revenge puts them deep in enemy territory and up against an unexpected threat.",
    image:
      "https://image.tmdb.org/t/p/original//4EBO8aIeP2bF1jGpwbuRS4CFMca.jpg",
  },
  {
    id: 15,
    title: "Return of the Jedi",
    releaseYear: "1983",
    genres: "Adventure, Action, Science Fiction",
    content:
      "Return of the Jedi: Luke Skywalker leads a mission to rescue his friend Han Solo from the clutches of Jabba the Hutt, while the Emperor seeks to destroy the Rebellion once and for all with a second dreaded Death Star.",
    image:
      "https://image.tmdb.org/t/p/original//jQYlydvHm3kUix1f8prMucrplhm.jpg",
  },
  {
    id: 16,
    title: "Suicide Squad",
    releaseYear: "2016",
    genres: "Action, Adventure, Fantasy",
    content:
      "Suicide Squad: From DC Comics comes the Suicide Squad, an antihero team of incarcerated supervillains who act as deniable assets for the United States government, undertaking high-risk black ops missions in exchange for commuted prison sentences.",
    image:
      "https://image.tmdb.org/t/p/original//xFw9RXKZDvevAGocgBK0zteto4U.jpg",
  },
  {
    id: 17,
    title: "The Hunchback of Notre Dame",
    releaseYear: "1996",
    genres: "Drama, Animation, Family",
    content:
      "The Hunchback of Notre Dame: Isolated bell-ringer Quasimodo wishes to leave Notre Dame tower against the wishes of Judge Claude Frollo, his stern guardian and Paris' strait-laced Minister of Justice. His first venture to the outside world finds him Esmeralda, a kind-hearted and fearless Romani woman who openly stands up to Frollo's tyranny.",
    image:
      "https://image.tmdb.org/t/p/original//dNhZjiQ5jblNwhxrrXDt3ai9KXC.jpg",
  },
  {
    id: 18,
    title: "Secret of the Wings",
    releaseYear: "2012",
    genres: "Animation, Family, Fantasy, Adventure",
    content:
      "Secret of the Wings: Tinkerbell wanders into the forbidden Winter woods and meets Periwinkle. Together they learn the secret of their wings and try to unite the warm fairies and the winter fairies to help Pixie Hollow.",
    image:
      "https://image.tmdb.org/t/p/original//bnbzEKX9LgDuJ0VBGm5d60mKDaR.jpg",
  },
  {
    id: 19,
    title: "Fury",
    releaseYear: "2014",
    genres: "War, Drama, Action",
    content:
      "Fury: In the last months of World War II, as the Allies make their final push in the European theatre, a battle-hardened U.S. Army sergeant named 'Wardaddy' commands a Sherman tank called 'Fury' and its five-man crew on a deadly mission behind enemy lines. Outnumbered and outgunned, Wardaddy and his men face overwhelming odds in their heroic attempts to strike at the heart of Nazi Germany.",
    image:
      "https://image.tmdb.org/t/p/original//pfte7wdMobMF4CVHuOxyu6oqeeA.jpg",
  },
  {
    id: 20,
    title: "Deep Water",
    releaseYear: "2022",
    genres: "Drama, Mystery, Thriller",
    content:
      "Deep Water: Vic and Melinda Van Allen are a couple in the small town of Little Wesley. Their loveless marriage is held together only by a precarious arrangement whereby, in order to avoid the messiness of divorce, Melinda is allowed to take any number of lovers as long as she does not desert her family.",
    image:
      "https://image.tmdb.org/t/p/original//6yRMyWwjuhKg6IU66uiZIGhaSc8.jpg",
  },
  {
    id: 21,
    title: "Madagascar: Escape 2 Africa",
    releaseYear: "2008",
    genres: "Family, Adventure, Animation, Comedy",
    content:
      "Madagascar: Escape 2 Africa: Alex, Marty, and other zoo animals find a way to escape from Madagascar when the penguins reassemble a wrecked airplane. The precariously repaired craft stays airborne just long enough to make it to the African continent. There the New Yorkers encounter members of their own species for the first time. Africa proves to be a wild place, but Alex and company wonder if it is better than their Central Park home.",
    image:
      "https://image.tmdb.org/t/p/original//agRbLOHgN46TQO4YdKR462iR7To.jpg",
  },
  {
    id: 22,
    title: "Ice Age",
    releaseYear: "2002",
    genres: "Animation, Comedy, Family, Adventure",
    content:
      "Ice Age: With the impending ice age almost upon them, a mismatched trio of prehistoric critters – Manny the woolly mammoth, Diego the saber-toothed tiger and Sid the giant sloth – find an orphaned infant and decide to return it to its human parents. Along the way, the unlikely allies become friends but, when enemies attack, their quest takes on far nobler aims.",
    image:
      "https://image.tmdb.org/t/p/original//gLhHHZUzeseRXShoDyC4VqLgsNv.jpg",
  },
  {
    id: 23,
    title: "The Conjuring",
    releaseYear: "2013",
    genres: "Horror, Thriller",
    content:
      "The Conjuring: Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse. Forced to confront a powerful entity, the Warrens find themselves caught in the most terrifying case of their lives.",
    image:
      "https://image.tmdb.org/t/p/original//wVYREutTvI2tmxr6ujrHT704wGF.jpg",
  },
  {
    id: 24,
    title: "Indiana Jones and the Dial of Destiny",
    releaseYear: "2023",
    genres: "Adventure, Action",
    content:
      "Indiana Jones and the Dial of Destiny: Finding himself in a new era, and approaching retirement, Indy wrestles with fitting into a world that seems to have outgrown him. But as the tentacles of an all-too-familiar evil return in the form of an old rival, Indy must don his hat and pick up his whip once more to make sure an ancient and powerful artifact doesn't fall into the wrong hands.",
    image:
      "https://image.tmdb.org/t/p/original//Af4bXE63pVsb2FtbW8uYIyPBadD.jpg",
  },
  {
    id: 25,
    title: "Scream",
    releaseYear: "1996",
    genres: "Crime, Horror, Mystery",
    content:
      "Scream: After a series of mysterious deaths befalls their small town, an offbeat group of friends led by Sidney Prescott become the target of a masked killer.",
    image:
      "https://image.tmdb.org/t/p/original//3O3klyyYpAZBBE4n7IngzTomRDp.jpg",
  },
  {
    id: 26,
    title: "The Lord of the Rings: The Return of the King",
    releaseYear: "2003",
    genres: "Adventure, Fantasy, Action",
    content:
      "The Lord of the Rings: The Return of the King: As armies mass for a final battle that will decide the fate of the world--and powerful, ancient forces of Light and Dark compete to determine the outcome--one member of the Fellowship of the Ring is revealed as the noble heir to the throne of the Kings of Men. Yet, the sole hope for triumph over evil lies with a brave hobbit, Frodo, who, accompanied by his loyal friend Sam and the hideous, wretched Gollum, ventures deep into the very dark heart of Mordor on his seemingly impossible quest to destroy the Ring of Power.​",
    image:
      "https://image.tmdb.org/t/p/original//rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
  },
  {
    id: 27,
    title: "The Conjuring: The Devil Made Me Do It",
    releaseYear: "2021",
    genres: "Horror, Mystery, Thriller",
    content:
      "The Conjuring: The Devil Made Me Do It: Paranormal investigators Ed and Lorraine Warren encounter what would become one of the most sensational cases from their files. The fight for the soul of a young boy takes them beyond anything they'd ever seen before, to mark the first time in U.S. history that a murder suspect would claim demonic possession as a defense.",
    image:
      "https://image.tmdb.org/t/p/original//xbSuFiJbbBWCkyCCKIMfuDCA4yV.jpg",
  },
  {
    id: 28,
    title: "The Matrix Resurrections",
    releaseYear: "2021",
    genres: "Science Fiction, Action, Adventure",
    content:
      "The Matrix Resurrections: Plagued by strange memories, Neo's life takes an unexpected turn when he finds himself back inside the Matrix.",
    image:
      "https://image.tmdb.org/t/p/original//8c4a8kE7PizaGQQnditMmI1xbRp.jpg",
  },
  {
    id: 29,
    title: "No Time to Die",
    releaseYear: "2021",
    genres: "Action, Adventure, Thriller",
    content:
      "No Time to Die: Bond has left active service and is enjoying a tranquil life in Jamaica. His peace is short-lived when his old friend Felix Leiter from the CIA turns up asking for help. The mission to rescue a kidnapped scientist turns out to be far more treacherous than expected, leading Bond onto the trail of a mysterious villain armed with dangerous new technology.",
    image:
      "https://image.tmdb.org/t/p/original//iUgygt3fscRoKWCV1d0C7FbM9TP.jpg",
  },
  {
    id: 10,
    title: "Terminator 3: Rise of the Machines",
    releaseYear: "2003",
    genres: "Action, Thriller, Science Fiction",
    content:
      "Terminator 3: Rise of the Machines: It's been 10 years since John Connor saved Earth from Judgment Day, and he's now living under the radar, steering clear of using anything Skynet can trace. That is, until he encounters T-X, a robotic assassin ordered to finish what T-1000 started. Good thing Connor's former nemesis, the Terminator, is back to aid the now-adult Connor … just like he promised.",
    image:
      "https://image.tmdb.org/t/p/original//hTKYcptqbBZwLhUVcIATQ72WNSY.jpg",
  },
  {
    id: 11,
    title: "Spider-Man",
    releaseYear: "2002",
    genres: "Action, Science Fiction",
    content:
      "Spider-Man: After being bitten by a genetically altered spider at Oscorp, nerdy but endearing high school student Peter Parker is endowed with amazing powers to become the superhero known as Spider-Man.",
    image:
      "https://image.tmdb.org/t/p/original//gh4cZbhZxyTbgxQPxD0dOudNPTn.jpg",
  },
  {
    id: 12,
    title: "Crazy, Stupid, Love.",
    releaseYear: "2011",
    genres: "Comedy, Drama, Romance",
    content:
      "Crazy, Stupid, Love.: Cal Weaver is living the American dream. He has a good job, a beautiful house, great children and a beautiful wife, named Emily. Cal's seemingly perfect life unravels, however, when he learns that Emily has been unfaithful and wants a divorce. Over 40 and suddenly single, Cal is adrift in the fickle world of dating. Enter, Jacob Palmer, a self-styled player who takes Cal under his wing and teaches him how to be a hit with the ladies.",
    image:
      "https://image.tmdb.org/t/p/original//p4RafgAPk558muOjnBMHhMArjS2.jpg",
  },
  {
    id: 13,
    title: "Saving Private Ryan",
    releaseYear: "1998",
    genres: "Drama, History, War",
    content:
      "Saving Private Ryan: As U.S. troops storm the beaches of Normandy, three brothers lie dead on the battlefield, with a fourth trapped behind enemy lines. Ranger captain John Miller and seven men are tasked with penetrating German-held territory and bringing the boy home.",
    image:
      "https://image.tmdb.org/t/p/original//uqx37cS8cpHg8U35f9U5IBlrCV3.jpg",
  },
  {
    id: 14,
    title: "The Irishman",
    releaseYear: "2019",
    genres: "Crime, Drama, History",
    content:
      "The Irishman: Pennsylvania, 1956. Frank Sheeran, a war veteran of Irish origin who works as a truck driver, accidentally meets mobster Russell Bufalino. Once Frank becomes his trusted man, Bufalino sends him to Chicago with the task of helping Jimmy Hoffa, a powerful union leader related to organized crime, with whom Frank will maintain a close friendship for nearly twenty years.",
    image:
      "https://image.tmdb.org/t/p/original//mbm8k3GFhXS0ROd9AD1gqYbIFbM.jpg",
  },
  {
    id: 15,
    title: "Blade Runner",
    releaseYear: "1982",
    genres: "Science Fiction, Drama, Thriller",
    content:
      "Blade Runner: In the smog-choked dystopian Los Angeles of 2019, blade runner Rick Deckard is called out of retirement to terminate a quartet of replicants who have escaped to Earth seeking their creator for a way to extend their short life spans.",
    image:
      "https://image.tmdb.org/t/p/original//63N9uy8nd9j7Eog2axPQ8lbr3Wj.jpg",
  },
  {
    id: 16,
    title: "A Walk to Remember",
    releaseYear: "2002",
    genres: "Drama, Romance",
    content:
      'A Walk to Remember: When the popular, restless Landon Carter is forced to participate in the school drama production, he falls in love with Jamie Sullivan, the daughter of the town\'s minister. Jamie has a "to-do" list for her life, as well as a very big secret she must keep from Landon.',
    image:
      "https://image.tmdb.org/t/p/original//8lUYMvWdHA0Q0k5F76RQCeCBUkA.jpg",
  },
  {
    id: 17,
    title: "The Lovely Bones",
    releaseYear: "2009",
    genres: "Fantasy, Drama",
    content:
      "The Lovely Bones: After being brutally murdered, 14-year-old Susie Salmon watches from heaven over her grief-stricken family -- and her killer. As she observes their daily lives, she must balance her thirst for revenge with her desire for her family to heal.",
    image:
      "https://image.tmdb.org/t/p/original//sn0iDphRxQ7I6aLd9igIgACITak.jpg",
  },
  {
    id: 18,
    title: "Gran Turismo",
    releaseYear: "2023",
    genres: "Adventure, Action, Drama",
    content:
      "Gran Turismo: The ultimate wish-fulfillment tale of a teenage Gran Turismo player whose gaming skills won him a series of Nissan competitions to become an actual professional racecar driver.",
    image:
      "https://image.tmdb.org/t/p/original//51tqzRtKMMZEYUpSYkrUE7v9ehm.jpg",
  },
  {
    id: 19,
    title: "The SpongeBob Movie: Sponge Out of Water",
    releaseYear: "2015",
    genres: "Family, Adventure, Comedy, Fantasy, Animation",
    content:
      "The SpongeBob Movie: Sponge Out of Water: Burger Beard is a pirate who is in search of the final page of a magical book that makes any evil plan he writes in it come true, which happens to be the Krabby Patty secret formula. When the entire city of Bikini Bottom is put in danger, SpongeBob, Patrick, Mr. Krabs, Squidward, Sandy, and Plankton need to go on a quest that takes them to the surface. In order to get back the recipe and save their city, the gang must retrieve the book and transform themselves into superheroes.",
    image:
      "https://image.tmdb.org/t/p/original//2WDmjUlSAPlA27i2OwEC7sRTFw3.jpg",
  },
  {
    id: 20,
    title: "Highlander",
    releaseYear: "1986",
    genres: "Adventure, Action, Fantasy",
    content:
      "Highlander: He fought his first battle on the Scottish Highlands in 1536. He will fight his greatest battle on the streets of New York City in 1986. His name is Connor MacLeod. He is immortal.",
    image:
      "https://image.tmdb.org/t/p/original//8Z8dptJEypuLoOQro1WugD855YE.jpg",
  },
  {
    id: 21,
    title: "Retribution",
    releaseYear: "2023",
    genres: "Thriller",
    content:
      "Retribution: When a mysterious caller puts a bomb under his car seat, Matt Turner begins a high-speed chase across the city to complete a specific series of tasks- all with his kids trapped in the back seat.",
    image:
      "https://image.tmdb.org/t/p/original//oUmmY7QWWn7OhKlcPOnirHJpP1F.jpg",
  },
  {
    id: 22,
    title: "Shang-Chi and the Legend of the Ten Rings",
    releaseYear: "2021",
    genres: "Action, Adventure, Fantasy",
    content:
      "Shang-Chi and the Legend of the Ten Rings: Shang-Chi must confront the past he thought he left behind when he is drawn into the web of the mysterious Ten Rings organization.",
    image:
      "https://image.tmdb.org/t/p/original//1BIoJGKbXjdFDAqUEiA2VHqkK1Z.jpg",
  },
  {
    id: 23,
    title: "Fantastic Beasts: The Secrets of Dumbledore",
    releaseYear: "2022",
    genres: "Fantasy, Adventure",
    content:
      "Fantastic Beasts: The Secrets of Dumbledore: Professor Albus Dumbledore knows the powerful, dark wizard Gellert Grindelwald is moving to seize control of the wizarding world. Unable to stop him alone, he entrusts magizoologist Newt Scamander to lead an intrepid team of wizards and witches. They soon encounter an array of old and new beasts as they clash with Grindelwald's growing legion of followers.",
    image:
      "https://image.tmdb.org/t/p/original//jrgifaYeUtTnaH7NF5Drkgjg2MB.jpg",
  },
  {
    id: 24,
    title: "He's Just Not That Into You",
    releaseYear: "2009",
    genres: "Comedy, Romance, Drama",
    content:
      "He's Just Not That Into You: Remember that really cute girl/guy who said they'd call – and didn't? Maybe they lost your number. Maybe they're in the hospital. Maybe they're awed by your looks, brains or success. Or maybe... They're just not that into you.",
    image:
      "https://image.tmdb.org/t/p/original//jip2ap24Y6JxEgzVRyNqyYssnyR.jpg",
  },
  {
    id: 25,
    title: "American Pie",
    releaseYear: "1999",
    genres: "Comedy, Romance",
    content:
      'American Pie: At a high-school party, four friends find that losing their collective virginity isn\'t as easy as they had thought. But they still believe that they need to do so before college. To motivate themselves, they enter a pact to all "score" by their senior prom.',
    image:
      "https://image.tmdb.org/t/p/original//n0nglZOU2uLMAwf1glc6dEWvojC.jpg",
  },
  {
    id: 26,
    title: "Despicable Me 3",
    releaseYear: "2017",
    genres: "Action, Animation, Comedy, Family, Adventure",
    content:
      "Despicable Me 3: Gru and his wife Lucy must stop former '80s child star Balthazar Bratt from achieving world domination.",
    image:
      "https://image.tmdb.org/t/p/original//6t3YWl7hrr88lCEFlGVqW5yV99R.jpg",
  },
  {
    id: 27,
    title: "Zootopia",
    releaseYear: "2016",
    genres: "Animation, Adventure, Family, Comedy",
    content:
      "Zootopia: Determined to prove herself, Officer Judy Hopps, the first bunny on Zootopia's police force, jumps at the chance to crack her first case - even if it means partnering with scam-artist fox Nick Wilde to solve the mystery.",
    image:
      "https://image.tmdb.org/t/p/original//hlK0e0wAQ3VLuJcsfIYPvb4JVud.jpg",
  },
  {
    id: 28,
    title: "White Chicks",
    releaseYear: "2004",
    genres: "Comedy, Crime",
    content:
      "White Chicks: Two FBI agent brothers, Marcus and Kevin Copeland, accidentally foil a drug bust. To avoid being fired they accept a mission escorting a pair of socialites to the Hamptons--but when the girls are disfigured in a car accident, they refuse to go. Left without options, Marcus and Kevin decide to pose as the sisters, transforming themselves from black men into rich white women.",
    image:
      "https://image.tmdb.org/t/p/original//aHTUpo45qy9QYIOnVITGGqLoVcA.jpg",
  },
  {
    id: 29,
    title: "Prometheus",
    releaseYear: "2012",
    genres: "Science Fiction, Adventure, Mystery",
    content:
      "Prometheus: A team of explorers discover a clue to the origins of mankind on Earth, leading them on a journey to the darkest corners of the universe. There, they must fight a terrifying battle to save the future of the human race.",
    image:
      "https://image.tmdb.org/t/p/original//m7nZCtHJyDLncBUarfM5h5mrppx.jpg",
  },
  {
    id: 10,
    title: "The Chronicles of Narnia: The Voyage of the Dawn Treader",
    releaseYear: "2010",
    genres: "Adventure, Family, Fantasy",
    content:
      "The Chronicles of Narnia: The Voyage of the Dawn Treader: This time around Edmund and Lucy Pevensie, along with their pesky cousin Eustace Scrubb find themselves swallowed into a painting and on to a fantastic Narnian ship headed for the very edges of the world.",
    image:
      "https://image.tmdb.org/t/p/original//z6LVJXEmY8E6s57uf8cV3RlWvws.jpg",
  },
  {
    id: 11,
    title: "Den of Thieves",
    releaseYear: "2018",
    genres: "Action, Crime, Thriller",
    content:
      "Den of Thieves: A gritty crime saga which follows the lives of an elite unit of the LA County Sheriff's Dept. and the state's most successful bank robbery crew as the outlaws plan a seemingly impossible heist on the Federal Reserve Bank.",
    image:
      "https://image.tmdb.org/t/p/original//AfybH6GbGFw1F9bcETe2yu25mIE.jpg",
  },
  {
    id: 12,
    title: "A.I. Artificial Intelligence",
    releaseYear: "2001",
    genres: "Drama, Science Fiction, Adventure",
    content:
      "A.I. Artificial Intelligence: David, a robotic boy—the first of his kind programmed to love—is adopted as a test case by a Cybertronics employee and his wife. Though he gradually becomes their child, a series of unexpected circumstances make this life impossible for David.",
    image:
      "https://image.tmdb.org/t/p/original//zxUhHQxKRbVLsaHR1V81SWYADOl.jpg",
  },
  {
    id: 13,
    title: "Spirit: Stallion of the Cimarron",
    releaseYear: "2002",
    genres: "Animation, Adventure, Comedy, Family, Drama, Western, Romance",
    content:
      "Spirit: Stallion of the Cimarron: As a wild stallion travels across the frontiers of the Old West, he befriends a young human and finds true love with a mare.",
    image:
      "https://image.tmdb.org/t/p/original//cUgYrz4twiJ3QgVGpRfey984NIB.jpg",
  },
  {
    id: 14,
    title: "Grown Ups",
    releaseYear: "2010",
    genres: "Comedy",
    content:
      "Grown Ups: After their high school basketball coach passes away, five good friends and former teammates reunite for a Fourth of July holiday weekend.",
    image:
      "https://image.tmdb.org/t/p/original//cQGM5k1NtU85n4TUlrOrwijSCcm.jpg",
  },
  {
    id: 15,
    title: "The Hangover Part III",
    releaseYear: "2013",
    genres: "Comedy",
    content:
      "The Hangover Part III: This time, there's no wedding. No bachelor party. What could go wrong, right? But when the Wolfpack hits the road, all bets are off.",
    image:
      "https://image.tmdb.org/t/p/original//vtxuPWkdllLNLVyGjKYa267ntuH.jpg",
  },
  {
    id: 16,
    title: "Mad Max",
    releaseYear: "1979",
    genres: "Adventure, Action, Thriller, Science Fiction",
    content:
      "Mad Max: In the ravaged near-future, a savage motorcycle gang rules the road. Terrorizing innocent civilians while tearing up the streets, the ruthless gang laughs in the face of a police force hell-bent on stopping them.",
    image:
      "https://image.tmdb.org/t/p/original//5LrI4GiCSrChgkdskVZiwv643Kg.jpg",
  },
  {
    id: 17,
    title: "Ready or Not",
    releaseYear: "2019",
    genres: "Comedy, Horror, Thriller",
    content:
      "Ready or Not: When a young bride marries into a ridiculously rich and delightfully deranged family, her wedding night becomes her worst nightmare as she's forced to play a lethal game of hide-and-seek and must fight to stay alive.",
    image:
      "https://image.tmdb.org/t/p/original//vOl6shtL0wknjaIs6JdKCpcHvg8.jpg",
  },
  {
    id: 18,
    title: "The Lorax",
    releaseYear: "2012",
    genres: "Animation, Family",
    content:
      "The Lorax: A 12-year-old boy searches for the one thing that will enable him to win the affection of the girl of his dreams. To find it he must discover the story of the Lorax, the grumpy yet charming creature who fights to protect his world.",
    image:
      "https://image.tmdb.org/t/p/original//tePFnZFw5JvjwjQjaKkqDPNMLPU.jpg",
  },
  {
    id: 19,
    title: "Pitch Perfect 2",
    releaseYear: "2015",
    genres: "Comedy, Music",
    content:
      "Pitch Perfect 2: The Bellas are back, and they are better than ever. After being humiliated in front of none other than the President of the United States of America, the Bellas are taken out of the Aca-Circuit. In order to clear their name, and regain their status, the Bellas take on a seemingly impossible task: winning an international competition no American team has ever won. In order to accomplish this monumental task, they need to strengthen the bonds of friendship and sisterhood and blow away the competition with their amazing aca-magic! With all new friends and old rivals tagging along for the trip, the Bellas can hopefully accomplish their dreams.",
    image:
      "https://image.tmdb.org/t/p/original//fQaEGzFmvTYu3G641WV0Tg9auAt.jpg",
  },
  {
    id: 20,
    title: "San Andreas",
    releaseYear: "2015",
    genres: "Action, Drama, Thriller",
    content:
      "San Andreas: In the aftermath of a massive earthquake in California, a rescue-chopper pilot makes a dangerous journey across the state in order to rescue his estranged daughter.",
    image:
      "https://image.tmdb.org/t/p/original//2Gfjn962aaFSD6eST6QU3oLDZTo.jpg",
  },
  {
    id: 21,
    title: "The Predator",
    releaseYear: "2018",
    genres: "Science Fiction, Action, Adventure",
    content:
      "The Predator: When a young boy accidentally triggers the universe's most lethal hunters' return to Earth, only a ragtag crew of ex-soldiers and a disgruntled scientist can prevent the end of the human race.",
    image:
      "https://image.tmdb.org/t/p/original//a3eWGF6YPF7No5Rbtjc8QpDvz7l.jpg",
  },
  {
    id: 22,
    title: "Captain America: Civil War",
    releaseYear: "2016",
    genres: "Adventure, Action, Science Fiction",
    content:
      "Captain America: Civil War: Following the events of Age of Ultron, the collective governments of the world pass an act designed to regulate all superhuman activity. This polarizes opinion amongst the Avengers, causing two factions to side with Iron Man or Captain America, which causes an epic battle between former allies.",
    image:
      "https://image.tmdb.org/t/p/original//rAGiXaUfPzY7CDEyNKUofk3Kw2e.jpg",
  },
  {
    id: 23,
    title: "Hustlers",
    releaseYear: "2019",
    genres: "Drama, Comedy, Crime",
    content:
      "Hustlers: A crew of savvy former strip club employees band together to turn the tables on their Wall Street clients.",
    image:
      "https://image.tmdb.org/t/p/original//zBhv8rsLOfpFW2M5b6wW78Uoojs.jpg",
  },
  {
    id: 24,
    title: "Final Destination 2",
    releaseYear: "2003",
    genres: "Horror, Mystery",
    content:
      "Final Destination 2: When Kimberly has a violent premonition of a highway pileup she blocks the freeway, keeping a few others meant to die, safe...Or are they? The survivors mysteriously start dying and it's up to Kimberly to stop it before she's next.",
    image:
      "https://image.tmdb.org/t/p/original//4gfxCoPYNJU63l4hOBeLoimhhrt.jpg",
  },
  {
    id: 25,
    title: "Sonic the Hedgehog",
    releaseYear: "2020",
    genres: "Action, Science Fiction, Comedy, Family",
    content:
      "Sonic the Hedgehog: Powered with incredible speed, Sonic The Hedgehog embraces his new home on Earth. That is, until Sonic sparks the attention of super-uncool evil genius Dr. Robotnik. Now it’s super-villain vs. super-sonic in an all-out race across the globe to stop Robotnik from using Sonic’s unique power for world domination.",
    image:
      "https://image.tmdb.org/t/p/original//aQvJ5WPzZgYVDrxLX4R6cLJCEaQ.jpg",
  },
  {
    id: 26,
    title: "Mission: Impossible II",
    releaseYear: "2000",
    genres: "Adventure, Action, Thriller",
    content:
      "Mission: Impossible II: With computer genius Luther Stickell at his side and a beautiful thief on his mind, agent Ethan Hunt races across Australia and Spain to stop a former IMF agent from unleashing a genetically engineered biological weapon called Chimera. This mission, should Hunt choose to accept it, plunges him into the center of an international crisis of terrifying magnitude.",
    image:
      "https://image.tmdb.org/t/p/original//1VMWLpk9VXyYcEZ8w3uUhp0OF1v.jpg",
  },
  {
    id: 27,
    title: "Brightburn",
    releaseYear: "2019",
    genres: "Horror, Science Fiction, Thriller, Mystery",
    content:
      "Brightburn: What if a child from another world crash-landed on Earth, but instead of becoming a hero to mankind, he proved to be something far more sinister?",
    image:
      "https://image.tmdb.org/t/p/original//sJWwkYc9ajwnPRSkqj8Aue5JbKz.jpg",
  },
  {
    id: 28,
    title: "Real Steel",
    releaseYear: "2011",
    genres: "Action, Science Fiction, Drama",
    content:
      "Real Steel: Charlie Kenton is a washed-up fighter who retired from the ring when robots took over the sport. After his robot is trashed, he reluctantly teams up with his estranged son to rebuild and train an unlikely contender.",
    image:
      "https://image.tmdb.org/t/p/original//4GIeI5K5YdDUkR3mNQBoScpSFEf.jpg",
  },
  {
    id: 29,
    title: "The Twilight Saga: Breaking Dawn - Part 1",
    releaseYear: "2011",
    genres: "Adventure, Fantasy, Romance",
    content:
      "The Twilight Saga: Breaking Dawn - Part 1: The new found married bliss of Bella Swan and vampire Edward Cullen is cut short when a series of betrayals and misfortunes threatens to destroy their world.",
    image:
      "https://image.tmdb.org/t/p/original//qs8LsHKYlVRmJbFUiSUhhRAygwj.jpg",
  },
  {
    id: 10,
    title: "Spider-Man: Into the Spider-Verse",
    releaseYear: "2018",
    genres: "Animation, Action, Adventure, Science Fiction",
    content:
      'Spider-Man: Into the Spider-Verse: Struggling to find his place in the world while juggling school and family, Brooklyn teenager Miles Morales is unexpectedly bitten by a radioactive spider and develops unfathomable powers just like the one and only Spider-Man. While wrestling with the implications of his new abilities, Miles discovers a super collider created by the madman Wilson "Kingpin" Fisk, causing others from across the Spider-Verse to be inadvertently transported to his dimension.',
    image:
      "https://image.tmdb.org/t/p/original//iiZZdoQBEYBv6id8su7ImL0oCbD.jpg",
  },
  {
    id: 11,
    title: "We Bought a Zoo",
    releaseYear: "2011",
    genres: "Drama, Comedy, Family",
    content:
      "We Bought a Zoo: Benjamin has lost his wife and, in a bid to start his life over, purchases a large house that has a zoo – welcome news for his daughter, but his son is not happy about it. The zoo is in need of renovation and Benjamin sets about the work with the head keeper and the rest of the staff, but, the zoo soon runs into financial trouble.",
    image:
      "https://image.tmdb.org/t/p/original//dcOvIqdsojUdAtWt1nPT9xS76Su.jpg",
  },
  {
    id: 12,
    title: "Jigsaw",
    releaseYear: "2017",
    genres: "Horror, Mystery, Thriller",
    content:
      "Jigsaw: Law enforcement finds itself chasing the ghost of a man dead for over a decade, embroiled in a diabolical new game that's only just begun.",
    image:
      "https://image.tmdb.org/t/p/original//swSFDqNIZwT4M9AQn5zQSXuZfTw.jpg",
  },
  {
    id: 13,
    title: "The Wizard of Oz",
    releaseYear: "1939",
    genres: "Adventure, Fantasy, Family",
    content:
      "The Wizard of Oz: Young Dorothy finds herself in a magical world where she makes friends with a lion, a scarecrow and a tin man as they make their way along the yellow brick road to talk with the Wizard and ask for the things they miss most in their lives. The Wicked Witch of the West is the only thing that could stop them.",
    image:
      "https://image.tmdb.org/t/p/original//pfAZFD7I2hxW9HCChTuAzsdE6UX.jpg",
  },
  {
    id: 14,
    title: "The Amazing Spider-Man",
    releaseYear: "2012",
    genres: "Action, Adventure, Science Fiction",
    content:
      "The Amazing Spider-Man: Peter Parker is an outcast high schooler abandoned by his parents as a boy, leaving him to be raised by his Uncle Ben and Aunt May. Like most teenagers, Peter is trying to figure out who he is and how he got to be the person he is today. As Peter discovers a mysterious briefcase that belonged to his father, he begins a quest to understand his parents' disappearance – leading him directly to Oscorp and the lab of Dr. Curt Connors, his father's former partner. As Spider-Man is set on a collision course with Connors' alter ego, The Lizard, Peter will make life-altering choices to use his powers and shape his destiny to become a hero.",
    image:
      "https://image.tmdb.org/t/p/original//BgcvtsVWLQfjHD6Dr3YYgeSLYk.jpg",
  },
  {
    id: 15,
    title: "You Don't Mess with the Zohan",
    releaseYear: "2008",
    genres: "Comedy, Action",
    content:
      "You Don't Mess with the Zohan: An Israeli counterterrorism soldier with a secretly fabulous ambition to become a Manhattan hairstylist. Zohan's desire runs so deep that he'll do anything -- including faking his own death and going head-to-head with an Arab cab driver -- to make his dreams come true.",
    image:
      "https://image.tmdb.org/t/p/original//gBhLQmpCPoKFMCGsulMbIFzrBID.jpg",
  },
  {
    id: 16,
    title: "Jackie",
    releaseYear: "2016",
    genres: "Drama",
    content:
      "Jackie: An account of the days of First Lady, Jacqueline Kennedy, in the immediate aftermath of John F. Kennedy's assassination in 1963.",
    image:
      "https://image.tmdb.org/t/p/original//nF9N33PfhizMEzbfxHoxXBo2vx9.jpg",
  },
  {
    id: 17,
    title: "Wind River",
    releaseYear: "2017",
    genres: "Crime, Drama, Mystery, Thriller",
    content:
      "Wind River: An FBI agent teams with the town's veteran game tracker to investigate a murder that occurred on a Native American reservation.",
    image:
      "https://image.tmdb.org/t/p/original//pySivdR845Hom4u4T2WNkJxe6Ad.jpg",
  },
  {
    id: 18,
    title: "The Lucky One",
    releaseYear: "2012",
    genres: "Drama, Romance",
    content:
      "The Lucky One: A Marine travels to Louisiana after serving three tours in Iraq and searches for the unknown woman he believes was his good luck charm during the war.",
    image:
      "https://image.tmdb.org/t/p/original//vK3A2i5dPCSB4vYBMcDZzm8DfRd.jpg",
  },
  {
    id: 19,
    title: "Raiders of the Lost Ark",
    releaseYear: "1981",
    genres: "Adventure, Action",
    content:
      "Raiders of the Lost Ark: When Dr. Indiana Jones – the tweed-suited professor who just happens to be a celebrated archaeologist – is hired by the government to locate the legendary Ark of the Covenant, he finds himself up against the entire Nazi regime.",
    image:
      "https://image.tmdb.org/t/p/original//ceG9VzoRAVGwivFU403Wc3AHRys.jpg",
  },
  {
    id: 20,
    title: "The Kissing Booth",
    releaseYear: "2018",
    genres: "Romance, Comedy",
    content:
      "The Kissing Booth: When teenager Elle's first kiss leads to a forbidden romance with the hottest boy in high school, she risks her relationship with her best friend.",
    image:
      "https://image.tmdb.org/t/p/original//7Dktk2ST6aL8h9Oe5rpk903VLhx.jpg",
  },
  {
    id: 21,
    title: "Wrong Turn",
    releaseYear: "2021",
    genres: "Horror, Thriller",
    content:
      "Wrong Turn: Jen and a group of friends set out to hike the Appalachian Trail. Despite warnings to stick to the trail, the hikers stray off course—and cross into land inhabited by The Foundation, a hidden community of mountain dwellers who use deadly means to protect their way of life.",
    image:
      "https://image.tmdb.org/t/p/original//4U1SBHmwHkNA0eHZ2n1CuiC1K1g.jpg",
  },
  {
    id: 22,
    title: "Licence to Kill",
    releaseYear: "1989",
    genres: "Adventure, Action, Thriller",
    content:
      "Licence to Kill: After capturing the notorious drug lord Franz Sanchez, Bond's close friend and former CIA agent Felix Leiter is left for dead and his wife is murdered. Bond goes rogue and seeks vengeance on those responsible, as he infiltrates Sanchez's organization from the inside.",
    image:
      "https://image.tmdb.org/t/p/original//8nzJve63EXA79HGAyidZwivZrQ2.jpg",
  },
  {
    id: 23,
    title: "Cloudy with a Chance of Meatballs",
    releaseYear: "2009",
    genres: "Animation, Comedy, Family",
    content:
      "Cloudy with a Chance of Meatballs: Inventor Flint Lockwood creates a machine that makes clouds rain food, enabling the down-and-out citizens of Chewandswallow to feed themselves. But when the falling food reaches gargantuan proportions, Flint must scramble to avert disaster. Can he regain control of the machine and put an end to the wild weather before the town is destroyed?",
    image:
      "https://image.tmdb.org/t/p/original//qhOhIKf7QEyQ5dMrRUqs5eTX1Oq.jpg",
  },
  {
    id: 24,
    title: "Taken 3",
    releaseYear: "2014",
    genres: "Thriller, Action",
    content:
      "Taken 3: Ex-government operative Bryan Mills finds his life is shattered when he's falsely accused of a murder that hits close to home. As he's pursued by a savvy police inspector, Mills employs his particular set of skills to track the real killer and exact his unique brand of justice.",
    image:
      "https://image.tmdb.org/t/p/original//vzvMXMypMq7ieDofKThsxjHj9hn.jpg",
  },
  {
    id: 25,
    title: "The Iron Giant",
    releaseYear: "1999",
    genres: "Family, Animation, Science Fiction, Adventure",
    content:
      "The Iron Giant: In the small town of Rockwell, Maine in October 1957, a giant metal machine befriends a nine-year-old boy and ultimately finds its humanity by unselfishly saving people from their own fears and prejudices.",
    image:
      "https://image.tmdb.org/t/p/original//ct04FCFLPImNG5thcPLRnVsZlmS.jpg",
  },
  {
    id: 26,
    title: "The Incredibles",
    releaseYear: "2004",
    genres: "Action, Adventure, Animation, Family",
    content:
      "The Incredibles: Bob Parr has given up his superhero days to log in time as an insurance adjuster and raise his three children with his formerly heroic wife in suburbia. But when he receives a mysterious assignment, it's time to get back into costume.",
    image:
      "https://image.tmdb.org/t/p/original//2LqaLgk4Z226KkgPJuiOQ58wvrm.jpg",
  },
  {
    id: 27,
    title: "The Godfather Part II",
    releaseYear: "1974",
    genres: "Drama, Crime",
    content:
      "The Godfather Part II: In the continuing saga of the Corleone crime family, a young Vito Corleone grows up in Sicily and in 1910s New York. In the 1950s, Michael Corleone attempts to expand the family business into Las Vegas, Hollywood and Cuba.",
    image:
      "https://image.tmdb.org/t/p/original//hek3koDUyRQk7FIhPXsa6mT2Zc3.jpg",
  },
  {
    id: 28,
    title: "The Lord of the Rings: The Two Towers",
    releaseYear: "2002",
    genres: "Adventure, Fantasy, Action",
    content:
      "The Lord of the Rings: The Two Towers: Frodo Baggins and the other members of the Fellowship continue on their sacred quest to destroy the One Ring--but on separate paths. Their destinies lie at two towers--Orthanc Tower in Isengard, where the corrupt wizard Saruman awaits, and Sauron's fortress at Barad-dur, deep within the dark lands of Mordor. Frodo and Sam are trekking to Mordor to destroy the One Ring of Power while Gimli, Legolas and Aragorn search for the orc-captured Merry and Pippin. All along, nefarious wizard Saruman awaits the Fellowship members at the Orthanc Tower in Isengard.",
    image:
      "https://image.tmdb.org/t/p/original//5VTN0pR8gcqV3EPUHHfMGnJYN9L.jpg",
  },
  {
    id: 29,
    title: "After We Fell",
    releaseYear: "2021",
    genres: "Romance, Drama",
    content:
      "After We Fell: Just as Tessa's life begins to become unglued, nothing is what she thought it would be. Not her friends nor her family. The only person that she should be able to rely on is Hardin, who is furious when he discovers the massive secret that she's been keeping. Before Tessa makes the biggest decision of her life, everything changes because of revelations about her family.",
    image:
      "https://image.tmdb.org/t/p/original//dU4HfnTEJDf9KvxGS9hgO7BVeju.jpg",
  },
  {
    id: 10,
    title: "The Bourne Supremacy",
    releaseYear: "2004",
    genres: "Action, Drama, Thriller",
    content:
      "The Bourne Supremacy: A CIA operation to purchase classified Russian documents is blown by a rival agent, who then shows up in the sleepy seaside village where Bourne and Marie have been living. The pair run for their lives and Bourne, who promised retaliation should anyone from his former life attempt contact, is forced to once again take up his life as a trained assassin to survive.",
    image:
      "https://image.tmdb.org/t/p/original//g09UIYfShY8uWGMGP3HkvWp8L8n.jpg",
  },
  {
    id: 11,
    title: "The First Purge",
    releaseYear: "2018",
    genres: "Horror, Action, Thriller",
    content:
      "The First Purge: To push the crime rate below one percent for the rest of the year, the New Founding Fathers of America test a sociological theory that vents aggression for one night in one isolated community. But when the violence of oppressors meets the rage of the others, the contagion will explode from the trial-city borders and spread across the nation.",
    image:
      "https://image.tmdb.org/t/p/original//litjsBoiydO6JlO70uOX4N3WnNL.jpg",
  },
  {
    id: 12,
    title: "Interview with the Vampire",
    releaseYear: "1994",
    genres: "Horror, Drama, Fantasy",
    content:
      "Interview with the Vampire: A vampire relates his epic life story of love, betrayal, loneliness, and dark hunger to an over-curious reporter.",
    image:
      "https://image.tmdb.org/t/p/original//2162lAT2MP36MyJd2sttmj5du5T.jpg",
  },
  {
    id: 13,
    title: "The Road to El Dorado",
    releaseYear: "2000",
    genres: "Family, Adventure, Animation, Comedy, Fantasy",
    content:
      'The Road to El Dorado: After a failed swindle, two con-men end up with a map to El Dorado, the fabled "city of gold," and an unintended trip to the New World.  Much to their surprise, the map does lead the pair to the mythical city, where the startled inhabitants promptly begin to worship them as gods.  The only question is, do they take the worshipful natives for all they\'re worth, or is there a bit more to El Dorado than riches?',
    image:
      "https://image.tmdb.org/t/p/original//yrx9uj1hnGKicNuMtiiAAo2alON.jpg",
  },
  {
    id: 14,
    title: "The Bourne Ultimatum",
    releaseYear: "2007",
    genres: "Action, Drama, Mystery, Thriller",
    content:
      "The Bourne Ultimatum: Bourne is brought out of hiding once again by reporter Simon Ross who is trying to unveil Operation Blackbriar, an upgrade to Project Treadstone, in a series of newspaper columns. Information from the reporter stirs a new set of memories, and Bourne must finally uncover his dark past while dodging The Company's best efforts to eradicate him.",
    image:
      "https://image.tmdb.org/t/p/original//15rMz5MRXFp7CP4VxhjYw4y0FUn.jpg",
  },
  {
    id: 15,
    title: "Ford v Ferrari",
    releaseYear: "2019",
    genres: "Drama, Action, History",
    content:
      "Ford v Ferrari: American car designer Carroll Shelby and the British-born driver Ken Miles work together to battle corporate interference, the laws of physics, and their own personal demons to build a revolutionary race car for Ford Motor Company and take on the dominating race cars of Enzo Ferrari at the 24 Hours of Le Mans in France in 1966.",
    image:
      "https://image.tmdb.org/t/p/original//dR1Ju50iudrOh3YgfwkAU1g2HZe.jpg",
  },
  {
    id: 16,
    title: "The Zone of Interest",
    releaseYear: "2023",
    genres: "History, Drama",
    content:
      "The Zone of Interest: The commandant of Auschwitz, Rudolf Höss, and his wife Hedwig, strive to build a dream life for their family in a house and garden next to the camp.",
    image:
      "https://image.tmdb.org/t/p/original//hUu9zyZmDd8VZegKi1iK1Vk0RYS.jpg",
  },
  {
    id: 17,
    title: "Dune",
    releaseYear: "1984",
    genres: "Action, Science Fiction, Adventure",
    content:
      "Dune: In the year 10,191, the most precious substance in the universe is the spice Melange. The spice extends life. The spice expands consciousness. The spice is vital to space travel.  The spice exists on only one planet in the entire universe, the vast desert planet Arrakis, also known as Dune.  Its native inhabitants, the Fremen, have long held a prophecy that a man would come, a messiah who would lead them to true freedom.",
    image:
      "https://image.tmdb.org/t/p/original//lyP3eKSEgZkChb77cKMIbydbPSq.jpg",
  },
  {
    id: 18,
    title: "300: Rise of an Empire",
    releaseYear: "2014",
    genres: "Action, Drama, War",
    content:
      "300: Rise of an Empire: Greek general Themistocles attempts to unite all of Greece by leading the charge that will change the course of the war. Themistocles faces the massive invading Persian forces led by mortal-turned-god, Xerxes and Artemesia, the vengeful commander of the Persian navy.",
    image:
      "https://image.tmdb.org/t/p/original//wYDdWN1McB1Sio4z1dPSkb40Z78.jpg",
  },
  {
    id: 19,
    title: "Frozen II",
    releaseYear: "2019",
    genres: "Family, Animation, Adventure, Comedy, Fantasy",
    content:
      "Frozen II: Elsa, Anna, Kristoff and Olaf head far into the forest to learn the truth about an ancient mystery of their kingdom.",
    image:
      "https://image.tmdb.org/t/p/original//mINJaa34MtknCYl5AjtNJzWj8cD.jpg",
  },
  {
    id: 20,
    title: "The Living Daylights",
    releaseYear: "1987",
    genres: "Action, Adventure, Thriller",
    content:
      "The Living Daylights: After a defecting Russian general reveals a plot to assassinate foreign spies, James Bond is assigned a secret mission to dispatch the new head of the KGB to prevent an escalation of tensions between the Soviet Union and the West.",
    image:
      "https://image.tmdb.org/t/p/original//1oRlmWX9hewpn2B44wawBjHd7dx.jpg",
  },
  {
    id: 21,
    title: "The Dark Knight",
    releaseYear: "2008",
    genres: "Drama, Action, Crime, Thriller",
    content:
      "The Dark Knight: Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.",
    image:
      "https://image.tmdb.org/t/p/original//qJ2tW6WMUDux911r6m7haRef0WH.jpg",
  },
  {
    id: 22,
    title: "American Beauty",
    releaseYear: "1999",
    genres: "Drama",
    content:
      "American Beauty: Lester Burnham, a depressed suburban father in a mid-life crisis, decides to turn his hectic life around after developing an infatuation with his daughter's attractive friend.",
    image:
      "https://image.tmdb.org/t/p/original//wby9315QzVKdW9BonAefg8jGTTb.jpg",
  },
  {
    id: 23,
    title: "Mad Max 2",
    releaseYear: "1981",
    genres: "Adventure, Action, Thriller, Science Fiction",
    content:
      "Mad Max 2: Max Rockatansky returns as the heroic loner who drives the dusty roads of a postapocalyptic Australian Outback in an unending search for gasoline. Arrayed against him and the other scraggly defendants of a fuel-depot encampment are the bizarre warriors commanded by the charismatic Lord Humungus, a violent leader whose scruples are as barren as the surrounding landscape.",
    image:
      "https://image.tmdb.org/t/p/original//dhVekfpaCW3QavAwGYbaQig87Xc.jpg",
  },
  {
    id: 24,
    title: "Gone with the Wind",
    releaseYear: "1939",
    genres: "Drama, War, Romance",
    content:
      "Gone with the Wind: The spoiled daughter of a Georgia plantation owner conducts a tumultuous romance with a cynical profiteer during the American Civil War and Reconstruction Era.",
    image:
      "https://image.tmdb.org/t/p/original//lNz2Ow0wGCAvzckW7EOjE03KcYv.jpg",
  },
  {
    id: 25,
    title: "V for Vendetta",
    releaseYear: "2006",
    genres: "Action, Thriller, Science Fiction",
    content:
      "V for Vendetta: In a world in which Great Britain has become a fascist state, a masked vigilante known only as “V” conducts guerrilla warfare against the oppressive British government. When V rescues a young woman from the secret police, he finds in her an ally with whom he can continue his fight to free the people of Britain.",
    image:
      "https://image.tmdb.org/t/p/original//1avD1JeaRiJX5M4ahPdZPypGoGN.jpg",
  },
  {
    id: 26,
    title: "Whisper of the Heart",
    releaseYear: "1995",
    genres: "Animation, Drama, Family",
    content:
      "Whisper of the Heart: Shizuku lives a simple life, dominated by her love for stories and writing. One day she notices that all the library books she has have been previously checked out by the same person: 'Seiji Amasawa'.",
    image:
      "https://image.tmdb.org/t/p/original//5FROLD8zpWFs9ja7aYho1uOMJHg.jpg",
  },
  {
    id: 27,
    title: "Bohemian Rhapsody",
    releaseYear: "2018",
    genres: "Music, Drama",
    content:
      "Bohemian Rhapsody: Singer Freddie Mercury, guitarist Brian May, drummer Roger Taylor and bass guitarist John Deacon take the music world by storm when they form the rock 'n' roll band Queen in 1970. Hit songs become instant classics. When Mercury's increasingly wild lifestyle starts to spiral out of control, Queen soon faces its greatest challenge yet – finding a way to keep the band together amid the success and excess.",
    image:
      "https://image.tmdb.org/t/p/original//lHu1wtNaczFPGFDTrjCSzeLPTKN.jpg",
  },
  {
    id: 28,
    title: "The Longest Yard",
    releaseYear: "2005",
    genres: "Drama, Comedy",
    content:
      "The Longest Yard: Disgraced pro football quarterback Paul Crewe lands in a Texas federal penitentiary, where manipulative Warden Hazen recruits him to advise the institution's football team of prison guards. Crewe suggests a tune-up game which lands him quarterbacking a crew of inmates in a game against the guards. Aided by incarcerated ex-NFL coach and player Nate Scarborough, Crewe and his team must overcome not only the bloodthirstiness of the opposition, but also the corrupt warden trying to fix the game against them.",
    image:
      "https://image.tmdb.org/t/p/original//nbKcVBcxF96ARW2oKHqDYAcLdu.jpg",
  },
  {
    id: 29,
    title: "Percy Jackson & the Olympians: The Lightning Thief",
    releaseYear: "2010",
    genres: "Adventure, Fantasy, Family",
    content:
      "Percy Jackson & the Olympians: The Lightning Thief: Accident prone teenager, Percy discovers he's actually a demi-God, the son of Poseidon, and he is needed when Zeus' lightning is stolen. Percy must master his new found skills in order to prevent a war between the Gods that could devastate the entire world.",
    image:
      "https://image.tmdb.org/t/p/original//8wmqmvJknPv6WptTRSA9kGUkPV7.jpg",
  },
  {
    id: 10,
    title: "A Beautiful Mind",
    releaseYear: "2001",
    genres: "Drama, Romance",
    content:
      "A Beautiful Mind: In a decades-spanning biopic, brilliant mathematician John Forbes Nash Jr. makes history in his field as schizophrenia sets in.",
    image:
      "https://image.tmdb.org/t/p/original//26uu1IKOs81D7Pfz1iC9FgrwAk9.jpg",
  },
  {
    id: 11,
    title: "Apocalypse Now",
    releaseYear: "1979",
    genres: "Drama, War",
    content:
      'Apocalypse Now: At the height of the Vietnam war, Captain Benjamin Willard is sent on a dangerous mission that, officially, "does not exist, nor will it ever exist." His goal is to locate - and eliminate - a mysterious Green Beret Colonel named Walter Kurtz, who has been leading his personal army on illegal guerrilla missions into enemy territory.',
    image:
      "https://image.tmdb.org/t/p/original//gQB8Y5RCMkv2zwzFHbUJX3kAhvA.jpg",
  },
  {
    id: 12,
    title: "Babylon A.D.",
    releaseYear: "2008",
    genres: "Action, Adventure, Science Fiction, Thriller",
    content:
      "Babylon A.D.: A veteran-turned-mercenary is hired to take a young woman with a secret from post-apocalyptic Eastern Europe to New York City.",
    image:
      "https://image.tmdb.org/t/p/original//kt9nqD0uOar8IVE9191HXhWOXKI.jpg",
  },
  {
    id: 13,
    title: "The Social Network",
    releaseYear: "2010",
    genres: "Drama",
    content:
      "The Social Network: In 2003, Harvard undergrad and computer genius Mark Zuckerberg begins work on a new concept that eventually turns into the global social network known as Facebook. Six years later, he is one of the youngest billionaires ever, but Zuckerberg finds that his unprecedented success leads to both personal and legal complications when he ends up on the receiving end of two lawsuits, one involving his former friend.",
    image:
      "https://image.tmdb.org/t/p/original//n0ybibhJtQ5icDqTp8eRytcIHJx.jpg",
  },
  {
    id: 14,
    title: "After",
    releaseYear: "2019",
    genres: "Romance, Drama",
    content:
      "After: Tessa Young is a dedicated student, dutiful daughter and loyal girlfriend to her high school sweetheart. Entering her first semester of college, Tessa's guarded world opens up when she meets Hardin Scott, a mysterious and brooding rebel who makes her question all she thought she knew about herself -- and what she wants out of life.",
    image:
      "https://image.tmdb.org/t/p/original//u3B2YKUjWABcxXZ6Nm9h10hLUbh.jpg",
  },
  {
    id: 15,
    title: "The Equalizer 2",
    releaseYear: "2018",
    genres: "Action, Thriller, Crime",
    content:
      "The Equalizer 2: Robert McCall, who serves an unflinching justice for the exploited and oppressed, embarks on a relentless, globe-trotting quest for vengeance when his former partner is murdered.",
    image:
      "https://image.tmdb.org/t/p/original//cQvc9N6JiMVKqol3wcYrGshsIdZ.jpg",
  },
  {
    id: 16,
    title: "Orphan: First Kill",
    releaseYear: "2022",
    genres: "Horror, Thriller",
    content:
      "Orphan: First Kill: After escaping from an Estonian psychiatric facility, Leena Klammer travels to America by impersonating Esther, the missing daughter of a wealthy family. But when her mask starts to slip, she is put against a mother who will protect her family from the murderous “child” at any cost.",
    image:
      "https://image.tmdb.org/t/p/original//pHkKbIRoCe7zIFvqan9LFSaQAde.jpg",
  },
  {
    id: 17,
    title: "Lawrence of Arabia",
    releaseYear: "1962",
    genres: "Adventure, History, War",
    content:
      "Lawrence of Arabia: The story of British officer T.E. Lawrence's mission to aid the Arab tribes in their revolt against the Ottoman Empire during the First World War. Lawrence becomes a flamboyant, messianic figure in the cause of Arab unity but his psychological instability threatens to undermine his achievements.",
    image:
      "https://image.tmdb.org/t/p/original//AiAm0EtDvyGqNpVoieRw4u65vD1.jpg",
  },
  {
    id: 18,
    title: "Evil Dead",
    releaseYear: "2013",
    genres: "Horror",
    content:
      "Evil Dead: Mia, a drug addict, is determined to kick the habit. To that end, she asks her brother, David, his girlfriend, Natalie and their friends Olivia and Eric to accompany her to their family's remote forest cabin to help her through withdrawal. Eric finds a mysterious Book of the Dead at the cabin and reads aloud from it, awakening an ancient demon. All hell breaks loose when the malevolent entity possesses Mia.",
    image:
      "https://image.tmdb.org/t/p/original//1gDV0Lm9y8ufIKzyf0h0GBgb9Zj.jpg",
  },
  {
    id: 19,
    title: "The Notebook",
    releaseYear: "2004",
    genres: "Romance, Drama",
    content:
      "The Notebook: An epic love story centered around an older man who reads aloud to a woman with Alzheimer's. From a faded notebook, the old man's words bring to life the story about a couple who is separated by World War II, and is then passionately reunited, seven years later, after they have taken different paths.",
    image:
      "https://image.tmdb.org/t/p/original//rNzQyW4f8B8cQeg7Dgj3n6eT5k9.jpg",
  },
  {
    id: 20,
    title:
      "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
    releaseYear: "1964",
    genres: "Comedy, War",
    content:
      "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb: After the insane General Jack D. Ripper initiates a nuclear strike on the Soviet Union, a war room full of politicians, generals and a Russian diplomat all frantically try to stop the nuclear strike.",
    image:
      "https://image.tmdb.org/t/p/original//7SixLzxcqezkZEYU8pcHZgbkmjp.jpg",
  },
  {
    id: 21,
    title: "The Conjuring 2",
    releaseYear: "2016",
    genres: "Horror",
    content:
      "The Conjuring 2: Lorraine and Ed Warren travel to north London to help a single mother raising four children alone in a house plagued by malicious spirits.",
    image:
      "https://image.tmdb.org/t/p/original//zEqyD0SBt6HL7W9JQoWwtd5Do1T.jpg",
  },
  {
    id: 22,
    title: "Space Jam: A New Legacy",
    releaseYear: "2021",
    genres: "Family, Animation, Comedy, Science Fiction",
    content:
      "Space Jam: A New Legacy: When LeBron and his young son Dom are trapped in a digital space by a rogue A.I., LeBron must get them home safe by leading Bugs, Lola Bunny and the whole gang of notoriously undisciplined Looney Tunes to victory over the A.I.'s digitized champions on the court. It's Tunes versus Goons in the highest-stakes challenge of his life.",
    image:
      "https://image.tmdb.org/t/p/original//mDACFTANR34u6lvucazoYiFJOp7.jpg",
  },
  {
    id: 23,
    title: "A Nightmare on Elm Street",
    releaseYear: "1984",
    genres: "Horror",
    content:
      "A Nightmare on Elm Street: Teenagers in a small town are dropping like flies, apparently in the grip of mass hysteria causing their suicides. A cop's daughter, Nancy Thompson, traces the cause to child molester Fred Krueger, who was burned alive by angry parents many years before. Krueger has now come back in the dreams of his killers' children, claiming their lives as his revenge. Nancy and her boyfriend, Glen, must devise a plan to lure the monster out of the realm of nightmares and into the real world...",
    image:
      "https://image.tmdb.org/t/p/original//wGTpGGRMZmyFCcrY2YoxVTIBlli.jpg",
  },
  {
    id: 24,
    title: "The Lost City",
    releaseYear: "2022",
    genres: "Action, Adventure, Comedy",
    content:
      "The Lost City: Reclusive author Loretta Sage writes about exotic places in her popular adventure novels that feature a handsome cover model named Alan. While on tour promoting her new book with Alan, Loretta gets kidnapped by an eccentric billionaire who hopes she can lead him to the ancient city's lost treasure that featured in her latest story. Alan, determined to prove he can be a hero in real life and not just on the pages of her books, sets off to rescue her.",
    image:
      "https://image.tmdb.org/t/p/original//neMZH82Stu91d3iqvLdNQfqPPyl.jpg",
  },
  {
    id: 25,
    title: "The Boss Baby: Family Business",
    releaseYear: "2021",
    genres: "Animation, Comedy, Adventure, Family",
    content:
      "The Boss Baby: Family Business: The Templeton brothers — Tim and his Boss Baby little bro Ted — have become adults and drifted away from each other. But a new boss baby with a cutting-edge approach and a can-do attitude is about to bring them together again … and inspire a new family business.",
    image:
      "https://image.tmdb.org/t/p/original//kv2Qk9MKFFQo4WQPaYta599HkJP.jpg",
  },
  {
    id: 26,
    title: "Godzilla",
    releaseYear: "2014",
    genres: "Action, Drama, Science Fiction",
    content:
      "Godzilla: Ford Brody, a Navy bomb expert, has just reunited with his family in San Francisco when he is forced to go to Japan to help his estranged father, Joe. Soon, both men are swept up in an escalating crisis when an ancient alpha predator arises from the sea to combat malevolent adversaries that threaten the survival of humanity. The creatures leave colossal destruction in their wake, as they make their way toward their final battleground: San Francisco.",
    image:
      "https://image.tmdb.org/t/p/original//zokD6uxR2iWfYM3Y84yGJvnNTK7.jpg",
  },
  {
    id: 27,
    title: "Wreck-It Ralph",
    releaseYear: "2012",
    genres: "Family, Animation, Comedy, Adventure",
    content:
      "Wreck-It Ralph: Wreck-It Ralph is the 9-foot-tall, 643-pound villain of an arcade video game named Fix-It Felix Jr., in which the game's titular hero fixes buildings that Ralph destroys. Wanting to prove he can be a good guy and not just a villain, Ralph escapes his game and lands in Hero's Duty, a first-person shooter where he helps the game's hero battle against alien invaders. He later enters Sugar Rush, a kart racing game set on tracks made of candies, cookies and other sweets. There, Ralph meets Vanellope von Schweetz who has learned that her game is faced with a dire threat that could affect the entire arcade, and one that Ralph may have inadvertently started.",
    image:
      "https://image.tmdb.org/t/p/original//zWoIgZ7mgmPkaZjG0102BSKFIqQ.jpg",
  },
  {
    id: 28,
    title: "The School for Good and Evil",
    releaseYear: "2022",
    genres: "Fantasy, Comedy, Adventure, Drama",
    content:
      "The School for Good and Evil: Best friends Sophie and Agatha navigate an enchanted school for young heroes and villains — and find themselves on opposing sides of the battle between good and evil.",
    image:
      "https://image.tmdb.org/t/p/original//6oZeEu1GDILdwezmZ5e2xWISf1C.jpg",
  },
  {
    id: 29,
    title: "John Wick: Chapter 2",
    releaseYear: "2017",
    genres: "Action, Thriller, Crime",
    content:
      "John Wick: Chapter 2: John Wick is forced out of retirement by a former associate looking to seize control of a shadowy international assassins’ guild. Bound by a blood oath to aid him, Wick travels to Rome and does battle against some of the world’s most dangerous killers.",
    image:
      "https://image.tmdb.org/t/p/original//hXWBc0ioZP3cN4zCu6SN3YHXZVO.jpg",
  },
  {
    id: 10,
    title: "Underworld: Rise of the Lycans",
    releaseYear: "2009",
    genres: "Fantasy, Action, Thriller",
    content:
      "Underworld: Rise of the Lycans: A prequel to the first two Underworld films, this fantasy explains the origins of the feud between the Vampires and the Lycans. Aided by his secret love, Sonja, courageous Lucian leads the Lycans in battle against brutal Vampire king Viktor. Determined to break the king's enslavement of his people, Lucian faces off against the Death Dealer army in a bid for Lycan independence.",
    image:
      "https://image.tmdb.org/t/p/original//yW9gF7rGn8EoV8B8rxOx1xjxVZf.jpg",
  },
  {
    id: 11,
    title: "Pet Sematary",
    releaseYear: "1989",
    genres: "Horror, Drama",
    content:
      "Pet Sematary: After the Creed family's cat is accidentally killed, a friendly neighbor advises its burial in a mysterious nearby cemetery.",
    image:
      "https://image.tmdb.org/t/p/original//8ZtH1V4rhrtP53ezlEWrCaMALXF.jpg",
  },
  {
    id: 12,
    title: "Guy Ritchie's The Covenant",
    releaseYear: "2023",
    genres: "War, Action, Thriller",
    content:
      "Guy Ritchie's The Covenant: During the war in Afghanistan, a local interpreter risks his own life to carry an injured sergeant across miles of grueling terrain.",
    image:
      "https://image.tmdb.org/t/p/original//kVG8zFFYrpyYLoHChuEeOGAd6Ru.jpg",
  },
  {
    id: 13,
    title: "Tears of the Sun",
    releaseYear: "2003",
    genres: "War, Action, Drama",
    content:
      "Tears of the Sun: Navy SEAL Lieutenant A.K. Waters and his elite squadron of tactical specialists are forced to choose between their duty and their humanity, between following orders by ignoring the conflict that surrounds them, or finding the courage to follow their conscience and protect a group of innocent refugees. When the democratic government of Nigeria collapses and the country is taken over by a ruthless military dictator, Waters, a fiercely loyal and hardened veteran is dispatched on a routine mission to retrieve a Doctors Without Borders physician.",
    image:
      "https://image.tmdb.org/t/p/original//fUnSSQukwTwBSdCbufEE36petLq.jpg",
  },
  {
    id: 14,
    title: "Princess Mononoke",
    releaseYear: "1997",
    genres: "Adventure, Fantasy, Animation",
    content:
      "Princess Mononoke: Ashitaka, a prince of the disappearing Emishi people, is cursed by a demonized boar god and must journey to the west to find a cure. Along the way, he encounters San, a young human woman fighting to protect the forest, and Lady Eboshi, who is trying to destroy it. Ashitaka must find a way to bring balance to this conflict.",
    image:
      "https://image.tmdb.org/t/p/original//cMYCDADoLKLbB83g4WnJegaZimC.jpg",
  },
  {
    id: 15,
    title: "Red Sparrow",
    releaseYear: "2018",
    genres: "Thriller, Mystery",
    content:
      "Red Sparrow: Prima ballerina Dominika Egorova faces a bleak and uncertain future after she suffers an injury that ends her career. She soon turns to Sparrow School, a secret intelligence service that trains exceptional young people to use their minds and bodies as weapons. Dominika emerges as the most dangerous Sparrow after completing the sadistic training process. As she comes to terms with her new abilities, she meets a CIA agent who tries to convince her that he is the only person she can trust.",
    image:
      "https://image.tmdb.org/t/p/original//vLCogyfQGxVLDC1gqUdNAIkc29L.jpg",
  },
  {
    id: 16,
    title: "Bridge to Terabithia",
    releaseYear: "2007",
    genres: "Adventure, Drama, Family",
    content:
      "Bridge to Terabithia: Jesse Aarons trained all summer to become the fastest runner in school. So he's very upset when newcomer Leslie Burke outruns him and everyone else. Despite this and other differences including that she's rich, he's poor, she's a city girl, and he's a country boy the two become fast friends. Together they create Terabithia, a land of monsters, trolls, ogres, and giants where they rule as king and queen.",
    image:
      "https://image.tmdb.org/t/p/original//3xFxGodKPMFLheS8rujFSmLfcq4.jpg",
  },
  {
    id: 17,
    title: "The Nice Guys",
    releaseYear: "2016",
    genres: "Comedy, Crime, Action",
    content:
      "The Nice Guys: A private eye investigates the apparent suicide of a fading porn star in 1970s Los Angeles and uncovers a conspiracy.",
    image:
      "https://image.tmdb.org/t/p/original//uXdQztKoAtx7UU3RvqeF52KsoQP.jpg",
  },
  {
    id: 18,
    title: "Gattaca",
    releaseYear: "1997",
    genres: "Thriller, Science Fiction, Mystery, Romance",
    content:
      "Gattaca: In a future society in the era of indefinite eugenics, humans are set on a life course depending on their DNA. Young Vincent Freeman is born with a condition that would prevent him from space travel, yet is determined to infiltrate the GATTACA space program.",
    image:
      "https://image.tmdb.org/t/p/original//eSKr5Fl1MEC7zpAXaLWBWSBjgJq.jpg",
  },
  {
    id: 19,
    title: "Godzilla vs. Kong",
    releaseYear: "2021",
    genres: "Action, Science Fiction, Adventure",
    content:
      "Godzilla vs. Kong: In a time when monsters walk the Earth, humanity’s fight for its future sets Godzilla and Kong on a collision course that will see the two most powerful forces of nature on the planet collide in a spectacular battle for the ages.",
    image:
      "https://image.tmdb.org/t/p/original//pgqgaUx1cJb5oZQQ5v0tNARCeBp.jpg",
  },
  {
    id: 20,
    title: "Lift",
    releaseYear: "2024",
    genres: "Action, Comedy, Crime",
    content:
      "Lift: An international heist crew, led by Cyrus Whitaker, race to lift $500 million in gold from a passenger plane at 40,000 feet.",
    image:
      "https://image.tmdb.org/t/p/original//h7wJI6mctrDJ9wMbFfgrBUTn1LT.jpg",
  },
  {
    id: 21,
    title: "The Dark Knight Rises",
    releaseYear: "2012",
    genres: "Action, Crime, Drama, Thriller",
    content:
      "The Dark Knight Rises: Following the death of District Attorney Harvey Dent, Batman assumes responsibility for Dent's crimes to protect the late attorney's reputation and is subsequently hunted by the Gotham City Police Department. Eight years later, Batman encounters the mysterious Selina Kyle and the villainous Bane, a new terrorist leader who overwhelms Gotham's finest. The Dark Knight resurfaces to protect a city that has branded him an enemy.",
    image:
      "https://image.tmdb.org/t/p/original//hr0L2aueqlP2BYUblTTjmtn0hw4.jpg",
  },
  {
    id: 22,
    title: "xXx: Return of Xander Cage",
    releaseYear: "2017",
    genres: "Action, Adventure, Crime",
    content:
      "xXx: Return of Xander Cage: Extreme athlete turned government operative Xander Cage comes out of self-imposed exile, thought to be long dead, and is set on a collision course with deadly alpha warrior Xiang and his team in a race to recover a sinister and seemingly unstoppable weapon known as Pandora's Box. Recruiting an all-new group of thrill-seeking cohorts, Xander finds himself enmeshed in a deadly conspiracy that points to collusion at the highest levels of world governments.",
    image:
      "https://image.tmdb.org/t/p/original//hba8zREJpP1AYhaXgb2oJLQeO0K.jpg",
  },
  {
    id: 23,
    title: "Argylle",
    releaseYear: "2024",
    genres: "Action, Adventure, Comedy",
    content:
      "Argylle: When the plots of reclusive author Elly Conway's fictional espionage novels begin to mirror the covert actions of a real-life spy organization, quiet evenings at home become a thing of the past. Accompanied by her cat Alfie and Aiden, a cat-allergic spy, Elly races across the world to stay one step ahead of the killers as the line between Conway's fictional world and her real one begins to blur.",
    image:
      "https://image.tmdb.org/t/p/original//siduVKgOnABO4WH4lOwPQwaGwJp.jpg",
  },
  {
    id: 24,
    title: "Shutter Island",
    releaseYear: "2010",
    genres: "Drama, Thriller, Mystery",
    content:
      "Shutter Island: World War II soldier-turned-U.S. Marshal Teddy Daniels investigates the disappearance of a patient from a hospital for the criminally insane, but his efforts are compromised by troubling visions and a mysterious doctor.",
    image:
      "https://image.tmdb.org/t/p/original//4GDy0PHYX3VRXUtwK5ysFbg3kEx.jpg",
  },
  {
    id: 25,
    title: "Hulk",
    releaseYear: "2003",
    genres: "Science Fiction, Adventure, Action",
    content:
      "Hulk: Bruce Banner, a genetics researcher with a tragic past, suffers massive radiation exposure in his laboratory that causes him to transform into a raging green monster when he gets angry.",
    image:
      "https://image.tmdb.org/t/p/original//qnngKqAcqfH2pBxDoKu5lxzSbTo.jpg",
  },
  {
    id: 26,
    title: "Avatar",
    releaseYear: "2009",
    genres: "Action, Adventure, Fantasy, Science Fiction",
    content:
      "Avatar: In the 22nd century, a paraplegic Marine is dispatched to the moon Pandora on a unique mission, but becomes torn between following orders and protecting an alien civilization.",
    image:
      "https://image.tmdb.org/t/p/original//kyeqWdyUXW608qlYkRqosgbbJyK.jpg",
  },
  {
    id: 27,
    title: "Jujutsu Kaisen 0",
    releaseYear: "2021",
    genres: "Animation, Action, Fantasy",
    content:
      "Jujutsu Kaisen 0: Yuta Okkotsu is a nervous high school student who is suffering from a serious problem—his childhood friend Rika has turned into a curse and won't leave him alone. Since Rika is no ordinary curse, his plight is noticed by Satoru Gojo, a teacher at Jujutsu High, a school where fledgling exorcists learn how to combat curses. Gojo convinces Yuta to enroll, but can he learn enough in time to confront the curse that haunts him?",
    image:
      "https://image.tmdb.org/t/p/original//23oJaeBh0FDk2mQ2P240PU9Xxfh.jpg",
  },
  {
    id: 28,
    title: "Sister Act 2: Back in the Habit",
    releaseYear: "1993",
    genres: "Music, Comedy",
    content:
      "Sister Act 2: Back in the Habit: Deloris Van Cartier is again asked to don the nun's habit to help a run-down Catholic school, presided over by Mother Superior. And if trying to reach out to a class full of uninterested students wasn't bad enough, the sisters discover that the school is due to be closed by the unscrupulous chief of a local authority.",
    image:
      "https://image.tmdb.org/t/p/original//dlkBp5S6Ei5f54031rAhyb4IwML.jpg",
  },
  {
    id: 29,
    title: "American History X",
    releaseYear: "1998",
    genres: "Drama",
    content:
      "American History X: Derek Vineyard is paroled after serving 3 years in prison for killing two African-American men. Through his brother, Danny Vineyard's narration, we learn that before going to prison, Derek was a skinhead and the leader of a violent white supremacist gang that committed acts of racial crime throughout L.A. and his actions greatly influenced Danny. Reformed and fresh out of prison, Derek severs contact with the gang and becomes determined to keep Danny from going down the same violent path as he did.",
    image:
      "https://image.tmdb.org/t/p/original//euypWkaYFOLW3e5rLIcTAjWnhhT.jpg",
  },
];
const displayedMovies = movies.slice(0, 12);
export { movies, displayedMovies };
