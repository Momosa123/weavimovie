const movies = [
  {
    backdrop_path: "/wNAhuOZ3Zf84jCIlrcI6JhgmY5q.jpg",
    original_language: "en",
    overview:
      "As the world fell, young Furiosa is snatched from the Green Place of Many Mothers and falls into the hands of a great Biker Horde led by the Warlord Dementus. Sweeping through the Wasteland they come across the Citadel presided over by The Immortan Joe. While the two Tyrants war for dominance, Furiosa must survive many trials as she puts together the means to find her way home.",
    poster_path:
      "https://image.tmdb.org/t/p/original//iADOJ8Zymht2JPMoy3R7xceZprc.jpg",
    release_date: "2024-05-22",
    title: "Furiosa: A Mad Max Saga",
    vote_average: 7.708,
    movieId: 786892,
    genres: "Action, Adventure, Science Fiction",
  },
  {
    backdrop_path: "/xg27NrXi7VXCGUr7MG75UqLl6Vg.jpg",
    original_language: "en",
    overview:
      "Teenager Riley's mind headquarters is undergoing a sudden demolition to make room for something entirely unexpected: new Emotions! Joy, Sadness, Anger, Fear and Disgust, who’ve long been running a successful operation by all accounts, aren’t sure how to feel when Anxiety shows up. And it looks like she’s not alone.",
    poster_path:
      "https://image.tmdb.org/t/p/original//vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg",
    release_date: "2024-06-11",
    title: "Inside Out 2",
    vote_average: 7.735,
    movieId: 1022789,
    genres: "Animation, Family, Adventure, Comedy",
  },
  {
    backdrop_path: "/fqv8v6AycXKsivp1T5yKtLbGXce.jpg",
    original_language: "en",
    overview:
      "Several generations in the future following Caesar's reign, apes are now the dominant species and live harmoniously while humans have been reduced to living in the shadows. As a new tyrannical ape leader builds his empire, one young ape undertakes a harrowing journey that will cause him to question all that he has known about the past and to make choices that will define a future for apes and humans alike.",
    poster_path:
      "https://image.tmdb.org/t/p/original//gKkl37BQuKTanygYQG1pyYgLVgf.jpg",
    release_date: "2024-05-08",
    title: "Kingdom of the Planet of the Apes",
    vote_average: 6.9,
    movieId: 653346,
    genres: "Science Fiction, Adventure, Action",
  },
  {
    backdrop_path: "/j29ekbcLpBvxnGk6LjdTc2EI5SA.jpg",
    original_language: "en",
    overview:
      "When 11-year-old Riley moves to a new city, her Emotions team up to help her through the transition. Joy, Fear, Anger, Disgust and Sadness work together, but when Joy and Sadness get lost, they must journey through unfamiliar places to get back home.",
    poster_path:
      "https://image.tmdb.org/t/p/original//2H1TmgdfNtsKlU9jKdeNyYL5y8T.jpg",
    release_date: "2015-06-17",
    title: "Inside Out",
    vote_average: 7.914,
    movieId: 150540,
    genres: "Animation, Family, Adventure, Drama, Comedy",
  },
  {
    backdrop_path: "/jvPMJ2zM92jfXxVEFsqP1MMrLaO.jpg",
    original_language: "en",
    overview:
      "Following their explosive showdown, Godzilla and Kong must reunite against a colossal undiscovered threat hidden within our world, challenging their very existence – and our own.",
    poster_path:
      "https://image.tmdb.org/t/p/original//z1p34vh7dEOnLDmyCrlUVLuoDzd.jpg",
    release_date: "2024-03-27",
    title: "Godzilla x Kong: The New Empire",
    vote_average: 7.217,
    movieId: 823464,
    genres: "Science Fiction, Action, Adventure",
  },
  {
    backdrop_path: "/z121dSTR7PY9KxKuvwiIFSYW8cf.jpg",
    original_language: "en",
    overview:
      "In the near future, a group of war journalists attempt to survive while reporting the truth as the United States stands on the brink of civil war.",
    poster_path:
      "https://image.tmdb.org/t/p/original//sh7Rg8Er3tFcN9BpKIPOMvALgZd.jpg",
    release_date: "2024-04-10",
    title: "Civil War",
    vote_average: 7.015,
    movieId: 929590,
    genres: "War, Action, Drama",
  },
  {
    backdrop_path: "/3ffPx9jqg0yj9y1KWeagT7D20CB.jpg",
    original_language: "en",
    overview:
      "Po is gearing up to become the spiritual leader of his Valley of Peace, but also needs someone to take his place as Dragon Warrior. As such, he will train a new kung fu practitioner for the spot and will encounter a villain called the Chameleon who conjures villains from the past.",
    poster_path:
      "https://image.tmdb.org/t/p/original//kDp1vUBnMpe8ak4rjgl3cLELqjU.jpg",
    release_date: "2024-03-02",
    title: "Kung Fu Panda 4",
    vote_average: 7.135,
    movieId: 1011985,
    genres: "Animation, Action, Family, Comedy, Fantasy",
  },
  {
    backdrop_path: "/H5HjE7Xb9N09rbWn1zBfxgI8uz.jpg",
    original_language: "en",
    overview:
      "Fresh off an almost career-ending accident, stuntman Colt Seavers has to track down a missing movie star, solve a conspiracy and try to win back the love of his life while still doing his day job.",
    poster_path:
      "https://image.tmdb.org/t/p/original//aBkqu7EddWK7qmY4grL4I6edx2h.jpg",
    release_date: "2024-04-24",
    title: "The Fall Guy",
    vote_average: 7.3,
    movieId: 746036,
    genres: "Action, Comedy",
  },
  {
    backdrop_path: "/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg",
    original_language: "en",
    overview:
      "Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the known universe, Paul endeavors to prevent a terrible future only he can foresee.",
    poster_path:
      "https://image.tmdb.org/t/p/original//1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
    release_date: "2024-02-27",
    title: "Dune: Part Two",
    vote_average: 8.168,
    movieId: 693134,
    genres: "Science Fiction, Adventure",
  },
  {
    backdrop_path: "/2KGxQFV9Wp1MshPBf8BuqWUgVAz.jpg",
    original_language: "en",
    overview:
      "After a migrating duck family alights on their pond with thrilling tales of far-flung places, the Mallard family embarks on a family road trip, from New England, to New York City, to tropical Jamaica.",
    poster_path:
      "https://image.tmdb.org/t/p/original//ldfCF9RhR40mppkzmftxapaHeTo.jpg",
    release_date: "2023-12-06",
    title: "Migration",
    vote_average: 7.461,
    movieId: 940551,
    genres: "Animation, Action, Adventure, Comedy, Family",
  },
  {
    backdrop_path: "/eAIHqfS3kXm7kZl4j7ZBfdegyEz.jpg",
    original_language: "en",
    overview:
      "Marcus and Mike are forced to confront new threats, career changes, and midlife crises as they join the newly created elite team AMMO of the Miami police department to take down the ruthless Armando Armas, the vicious leader of a Miami drug cartel.",
    poster_path:
      "https://image.tmdb.org/t/p/original//y95lQLnuNKdPAzw9F9Ab8kJ80c3.jpg",
    release_date: "2020-01-15",
    title: "Bad Boys for Life",
    vote_average: 7.132,
    movieId: 38700,
    genres: "Thriller, Action, Crime",
  },
  {
    backdrop_path: "/gqrnQA6Xppdl8vIb2eJc58VC1tW.jpg",
    original_language: "en",
    overview:
      "An apocalyptic story set in the furthest reaches of our planet, in a stark desert landscape where humanity is broken, and most everyone is crazed fighting for the necessities of life. Within this world exist two rebels on the run who just might be able to restore order.",
    poster_path:
      "https://image.tmdb.org/t/p/original//hA2ple9q4qnwxp3hKVNhroipsir.jpg",
    release_date: "2015-05-13",
    title: "Mad Max: Fury Road",
    vote_average: 7.604,
    movieId: 76341,
    genres: "Action, Adventure, Science Fiction",
  },
  {
    backdrop_path: "/fY3lD0jM5AoHJMunjGWqJ0hRteI.jpg",
    original_language: "ja",
    overview:
      "In postwar Japan, Godzilla brings new devastation to an already scorched landscape. With no military intervention or government help in sight, the survivors must join together in the face of despair and fight back against an unrelenting horror.",
    poster_path:
      "https://image.tmdb.org/t/p/original//hkxxMIGaiCTmrEArK7J56JTKUlB.jpg",
    release_date: "2023-11-03",
    title: "Godzilla Minus One",
    vote_average: 7.578,
    movieId: 940721,
    genres: "Science Fiction, Horror, Action",
  },
  {
    backdrop_path: "/roYyPiQDQKmIKUEhO912693tSja.jpg",
    original_language: "en",
    overview:
      "A family is forced to live in silence while hiding from creatures that hunt by sound.",
    poster_path:
      "https://image.tmdb.org/t/p/original//nAU74GmpUk7t5iklEp3bufwDq4n.jpg",
    release_date: "2018-04-03",
    title: "A Quiet Place",
    vote_average: 7.398,
    movieId: 447332,
    genres: "Horror, Drama, Science Fiction",
  },
  {
    backdrop_path: "/AsqUSUqXrK8JfH8WEQnCXVbIAv6.jpg",
    original_language: "en",
    overview:
      "Following the events at home, the Abbott family now face the terrors of the outside world. Forced to venture into the unknown, they realize that the creatures that hunt by sound are not the only threats that lurk beyond the sand path.",
    poster_path:
      "https://image.tmdb.org/t/p/original//4q2hz2m8hubgvijz8Ez0T2Os2Yv.jpg",
    release_date: "2021-05-21",
    title: "A Quiet Place Part II",
    vote_average: 7.497,
    movieId: 520763,
    genres: "Science Fiction, Thriller, Horror",
  },
  {
    backdrop_path: "/4XM8DUTQb3lhLemJC51Jx4a2EuA.jpg",
    original_language: "en",
    overview:
      "Over many missions and against impossible odds, Dom Toretto and his family have outsmarted, out-nerved and outdriven every foe in their path. Now, they confront the most lethal opponent they've ever faced: A terrifying threat emerging from the shadows of the past who's fueled by blood revenge, and who is determined to shatter this family and destroy everything—and everyone—that Dom loves, forever.",
    poster_path:
      "https://image.tmdb.org/t/p/original//fiVW06jE7z9YnO4trhaMEdclSiC.jpg",
    release_date: "2023-05-17",
    title: "Fast X",
    vote_average: 7.114,
    movieId: 385687,
    genres: "Action, Crime, Thriller",
  },
  {
    backdrop_path: "/qwK9soQmmJ7kRdjLZVXblw3g7AQ.jpg",
    original_language: "en",
    overview:
      'Xander Cage is your standard adrenaline junkie with no fear and a lousy attitude. When the US Government "recruits" him to go on a mission, he\'s not exactly thrilled. His mission: to gather information on an organization that may just be planning the destruction of the world, led by the nihilistic Yorgi.',
    poster_path:
      "https://image.tmdb.org/t/p/original//xeEw3eLeSFmJgXZzmF2Efww0q3s.jpg",
    release_date: "2002-08-09",
    title: "xXx",
    vote_average: 5.933,
    movieId: 7451,
    genres: "Action, Adventure, Thriller, Crime",
  },
  {
    backdrop_path: "/nb3xI8XI3w4pMVZ38VijbsyBqP4.jpg",
    original_language: "en",
    overview:
      "The story of J. Robert Oppenheimer's role in the development of the atomic bomb during World War II.",
    poster_path:
      "https://image.tmdb.org/t/p/original//8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    release_date: "2023-07-19",
    title: "Oppenheimer",
    vote_average: 8.092,
    movieId: 872585,
    genres: "Drama, History",
  },
  {
    backdrop_path: "/r4TxCaZvQ2bLFoXRLHGfii6b3tJ.jpg",
    original_language: "en",
    overview:
      "Marcus Burnett is a henpecked family man. Mike Lowry is a footloose and fancy free ladies' man. Both Miami policemen, they have 72 hours to reclaim a consignment of drugs stolen from under their station's nose. To complicate matters, in order to get the assistance of the sole witness to a murder, they have to pretend to be each other.",
    poster_path:
      "https://image.tmdb.org/t/p/original//x1ygBecKHfXX4M2kRhmFKWfWbJc.jpg",
    release_date: "1995-04-07",
    title: "Bad Boys",
    vote_average: 6.806,
    movieId: 9737,
    genres: "Action, Comedy, Crime, Thriller",
  },
  {
    backdrop_path: "/lntyt4OVDbcxA1l7LtwITbrD3FI.jpg",
    original_language: "es",
    overview:
      "Noah must leave her city, boyfriend, and friends to move into William Leister's mansion, the flashy and wealthy husband of her mother Rafaela. As a proud and independent 17 year old, Noah resists living in a mansion surrounded by luxury. However, it is there where she meets Nick, her new stepbrother, and the clash of their strong personalities becomes evident from the very beginning.",
    poster_path:
      "https://image.tmdb.org/t/p/original//w46Vw536HwNnEzOa7J24YH9DPRS.jpg",
    release_date: "2023-06-08",
    title: "My Fault",
    vote_average: 7.969,
    movieId: 1010581,
    genres: "Drama, Romance",
  },
  {
    backdrop_path: "/1r1dWa9yf1LeSLfkOfkSqxmWHdK.jpg",
    original_language: "en",
    overview:
      "When the discovery of an ancient artifact unleashes an evil force, Ghostbusters new and old must join forces to protect their home and save the world from a second Ice Age.",
    poster_path:
      "https://image.tmdb.org/t/p/original//e1J2oNzSBdou01sUvriVuoYp0pJ.jpg",
    release_date: "2024-03-20",
    title: "Ghostbusters: Frozen Empire",
    vote_average: 6.698,
    movieId: 967847,
    genres: "Fantasy, Adventure, Comedy",
  },
  {
    backdrop_path: "/pwGmXVKUgKN13psUjlhC9zBcq1o.jpg",
    original_language: "en",
    overview:
      "Forced to confront revelations about her past, paramedic Cassandra Webb forges a relationship with three young women destined for powerful futures...if they can all survive a deadly present.",
    poster_path:
      "https://image.tmdb.org/t/p/original//rULWuutDcN5NvtiZi4FRPzRYWSh.jpg",
    release_date: "2024-02-14",
    title: "Madame Web",
    vote_average: 5.589,
    movieId: 634492,
    genres: "Action, Fantasy",
  },
  {
    backdrop_path: "/oe7mWkvYhK4PLRNAVSvonzyUXNy.jpg",
    original_language: "en",
    overview:
      "Ex-UFC fighter Dalton takes a job as a bouncer at a Florida Keys roadhouse, only to discover that this paradise is not all it seems.",
    poster_path:
      "https://image.tmdb.org/t/p/original//lwPsIgh98Wnpvkr3svkZwlhDrfm.jpg",
    release_date: "2024-03-08",
    title: "Road House",
    vote_average: 7.005,
    movieId: 359410,
    genres: "Action, Thriller",
  },
  {
    backdrop_path: "/yyFc8Iclt2jxPmLztbP617xXllT.jpg",
    original_language: "en",
    overview:
      "Willy Wonka – chock-full of ideas and determined to change the world one delectable bite at a time – is proof that the best things in life begin with a dream, and if you’re lucky enough to meet Willy Wonka, anything is possible.",
    poster_path:
      "https://image.tmdb.org/t/p/original//qhb1qOilapbapxWQn9jtRCMwXJF.jpg",
    release_date: "2023-12-06",
    title: "Wonka",
    vote_average: 7.167,
    movieId: 787699,
    genres: "Comedy, Family, Fantasy",
  },
  {
    backdrop_path: "/75nSb1fbWooipwcSU5bUttiOriI.jpg",
    original_language: "ja",
    overview:
      "While the Second World War rages, the teenage Mahito, haunted by his mother's tragic death, is relocated from Tokyo to the serene rural home of his new stepmother Natsuko, a woman who bears a striking resemblance to the boy's mother. As he tries to adjust, this strange new world grows even stranger following the appearance of a persistent gray heron, who perplexes and bedevils Mahito, dubbing him the \"long-awaited one.\"",
    poster_path:
      "https://image.tmdb.org/t/p/original//jDQPkgzerGophKRRn7MKm071vCU.jpg",
    release_date: "2023-07-14",
    title: "The Boy and the Heron",
    vote_average: 7.5,
    movieId: 508883,
    genres: "Animation, Adventure, Fantasy",
  },
  {
    backdrop_path: "/tRS6jvPM9qPrrnx2KRp3ew96Yot.jpg",
    original_language: "en",
    overview:
      "In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler.",
    poster_path:
      "https://image.tmdb.org/t/p/original//74xTEgt7R36Fpooo50r9T25onhq.jpg",
    release_date: "2022-03-01",
    title: "The Batman",
    vote_average: 7.678,
    movieId: 414906,
    genres: "Crime, Mystery, Thriller",
  },
  {
    backdrop_path: "/6YInbRTk39ckuLYFmUgBCKcKNjb.jpg",
    original_language: "en",
    overview:
      "In a city where fire, water, land and air residents live together, a fiery young woman and a go-with-the-flow guy will discover something elemental: how much they have in common.",
    poster_path:
      "https://image.tmdb.org/t/p/original//4Y1WNkd88JXmGfhtWR7dmDAo1T2.jpg",
    release_date: "2023-06-14",
    title: "Elemental",
    vote_average: 7.651,
    movieId: 976573,
    genres: "Animation, Comedy, Family, Fantasy, Romance",
  },
  {
    backdrop_path: "/zRKQW58MBEY078AxkHxEJzUskCl.jpg",
    original_language: "en",
    overview:
      "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet's exclusive supply of the most precious resource in existence-a commodity capable of unlocking humanity's greatest potential-only those who can conquer their fear will survive.",
    poster_path:
      "https://image.tmdb.org/t/p/original//d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
    release_date: "2021-09-15",
    title: "Dune",
    vote_average: 7.783,
    movieId: 438631,
    genres: "Science Fiction, Adventure",
  },
  {
    backdrop_path: "/yY76zq9XSuJ4nWyPDuwkdV7Wt0c.jpg",
    original_language: "en",
    overview:
      "Armed with only one word - Tenet - and fighting for the survival of the entire world, the Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.",
    poster_path:
      "https://image.tmdb.org/t/p/original//k68nPLbIST6NP96JmTxmZijEvCA.jpg",
    release_date: "2020-08-22",
    title: "Tenet",
    vote_average: 7.187,
    movieId: 577922,
    genres: "Action, Thriller, Science Fiction",
  },
  {
    backdrop_path: "/fOy2Jurz9k6RnJnMUMRDAgBwru2.jpg",
    original_language: "en",
    overview:
      "Thirteen-year-old Mei is experiencing the awkwardness of being a teenager with a twist – when she gets too excited, she transforms into a giant red panda.",
    poster_path:
      "https://image.tmdb.org/t/p/original//qsdjk9oAKSQMWs0Vt5Pyfh6O4GZ.jpg",
    release_date: "2022-03-10",
    title: "Turning Red",
    vote_average: 7.383,
    movieId: 508947,
    genres: "Animation, Family, Comedy, Fantasy",
  },
  {
    backdrop_path: "/ffdqHMWkh1h9MABwIfbfRJhgFW6.jpg",
    original_language: "en",
    overview:
      'In the post-apocalyptic future, reigning tyrannical supercomputers teleport a cyborg assassin known as the "Terminator" back to 1984 to kill Sarah Connor, whose unborn son is destined to lead insurgents against 21st century mechanical hegemony. Meanwhile, the human-resistance movement dispatches a lone warrior to safeguard Sarah. Can he stop the virtually indestructible killing machine?',
    poster_path:
      "https://image.tmdb.org/t/p/original//qvktm0BHcnmDpul4Hz01GIazWPr.jpg",
    release_date: "1984-10-26",
    title: "The Terminator",
    vote_average: 7.7,
    movieId: 218,
    genres: "Action, Thriller, Science Fiction",
  },
  {
    backdrop_path: "/en971MEXui9diirXlogOrPKmsEn.jpg",
    original_language: "en",
    overview:
      "The origin story of former Special Forces operative turned mercenary Wade Wilson, who, after being subjected to a rogue experiment that leaves him with accelerated healing powers, adopts the alter ego Deadpool. Armed with his new abilities and a dark, twisted sense of humor, Deadpool hunts down the man who nearly destroyed his life.",
    poster_path:
      "https://image.tmdb.org/t/p/original//3E53WEZJqP6aM84D8CckXx4pIHw.jpg",
    release_date: "2016-02-09",
    title: "Deadpool",
    vote_average: 7.615,
    movieId: 293660,
    genres: "Action, Adventure, Comedy",
  },
  {
    backdrop_path: "/ehumsuIBbgAe1hg343oszCLrAfI.jpg",
    original_language: "en",
    overview:
      "Asha, a sharp-witted idealist, makes a wish so powerful that it is answered by a cosmic force – a little ball of boundless energy called Star. Together, Asha and Star confront a most formidable foe - the ruler of Rosas, King Magnifico - to save her community and prove that when the will of one courageous human connects with the magic of the stars, wondrous things can happen.",
    poster_path:
      "https://image.tmdb.org/t/p/original//vgJZSqKMXWDDx09iSIStGKfHMku.jpg",
    release_date: "2023-11-13",
    title: "Wish",
    vote_average: 6.404,
    movieId: 1022796,
    genres: "Animation, Family, Fantasy, Adventure",
  },
  {
    backdrop_path: "/yF1eOkaYvwiORauRCPWznV9xVvi.jpg",
    original_language: "en",
    overview:
      "When his attempt to save his family inadvertently alters the future, Barry Allen becomes trapped in a reality in which General Zod has returned and there are no Super Heroes to turn to. In order to save the world that he is in and return to the future that he knows, Barry's only hope is to race for his life. But will making the ultimate sacrifice be enough to reset the universe?",
    poster_path:
      "https://image.tmdb.org/t/p/original//rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg",
    release_date: "2023-06-13",
    title: "The Flash",
    vote_average: 6.73,
    movieId: 298618,
    genres: "Action, Adventure, Science Fiction",
  },
  {
    backdrop_path: "/pDKFL1zcHzEpmz4MJA5JJnRbJeD.jpg",
    original_language: "en",
    overview:
      "Five years after an ominous unseen presence drives most of society to suicide, a survivor and her two children make a desperate bid to reach safety.",
    poster_path:
      "https://image.tmdb.org/t/p/original//rGfGfgL2pEPCfhIvqHXieXFn7gp.jpg",
    release_date: "2018-12-13",
    title: "Bird Box",
    vote_average: 6.841,
    movieId: 405774,
    genres: "Horror, Thriller, Drama",
  },
  {
    backdrop_path: "/7I6VUdPj6tQECNHdviJkUHD2u89.jpg",
    original_language: "en",
    overview:
      "With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.",
    poster_path:
      "https://image.tmdb.org/t/p/original//vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
    release_date: "2023-03-22",
    title: "John Wick: Chapter 4",
    vote_average: 7.74,
    movieId: 603692,
    genres: "Action, Thriller, Crime",
  },
  {
    backdrop_path: "/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg",
    original_language: "en",
    overview:
      "While working underground to fix a water main, Brooklyn plumbers—and brothers—Mario and Luigi are transported down a mysterious pipe and wander into a magical new world. But when the brothers are separated, Mario embarks on an epic quest to find Luigi.",
    poster_path:
      "https://image.tmdb.org/t/p/original//qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
    release_date: "2023-04-05",
    title: "The Super Mario Bros. Movie",
    vote_average: 7.674,
    movieId: 502356,
    genres: "Animation, Family, Adventure, Fantasy, Comedy",
  },
  {
    backdrop_path: "/3RWsSQlqzRjsuqSRmoyggy74UA7.jpg",
    original_language: "en",
    overview:
      "Following a ghost invasion of Manhattan, paranormal enthusiasts Erin Gilbert and Abby Yates, nuclear engineer Jillian Holtzmann, and subway worker Patty Tolan band together to stop the otherworldly threat.",
    poster_path:
      "https://image.tmdb.org/t/p/original//wJmWliwXIgZOCCVOcGRBhce7xPS.jpg",
    release_date: "2016-07-14",
    title: "Ghostbusters",
    vote_average: 5.36,
    movieId: 43074,
    genres: "Action, Fantasy, Comedy",
  },
  {
    backdrop_path: "/ctMserH8g2SeOAnCw5gFjdQF8mo.jpg",
    original_language: "en",
    overview:
      "Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.",
    poster_path:
      "https://image.tmdb.org/t/p/original//iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
    release_date: "2023-07-19",
    title: "Barbie",
    vote_average: 7.047,
    movieId: 346698,
    genres: "Comedy, Adventure",
  },
  {
    backdrop_path: "/gxSVZCUlDd8upT1G2wdrUdz2hxG.jpg",
    original_language: "en",
    overview:
      "Detectives Marcus Burnett and Mike Lowrey of the Miami Narcotics Task Force are tasked with stopping the flow of the drug ecstasy into Miami. They track the drugs to the whacked-out Cuban drug lord Johnny Tapia, who is also involved in a bloody war with Russian and Haitian mobsters. If that isn't bad enough, there's tension between the two detectives when Marcus discovers that playboy Mike is secretly romancing Marcus’ sister, Syd.",
    poster_path:
      "https://image.tmdb.org/t/p/original//yCvB5fG5aEPqa1St7ihY6KEAsHD.jpg",
    release_date: "2003-07-18",
    title: "Bad Boys II",
    vote_average: 6.627,
    movieId: 8961,
    genres: "Action, Crime, Comedy",
  },
  {
    backdrop_path: "/4HodYYKEIsGOdinkGi2Ucz6X9i0.jpg",
    original_language: "en",
    overview:
      "After reuniting with Gwen Stacy, Brooklyn’s full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters the Spider Society, a team of Spider-People charged with protecting the Multiverse’s very existence. But when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders and must set out on his own to save those he loves most.",
    poster_path:
      "https://image.tmdb.org/t/p/original//8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
    release_date: "2023-05-31",
    title: "Spider-Man: Across the Spider-Verse",
    vote_average: 8.365,
    movieId: 569094,
    genres: "Animation, Action, Adventure, Science Fiction",
  },
  {
    backdrop_path: "/sI6uCeF8mUlZx22mFfHSi9W3XQ9.jpg",
    original_language: "en",
    overview:
      "40-year-old single mom Solène begins an unexpected romance with 24-year-old Hayes Campbell, the lead singer of August Moon, the hottest boy band on the planet. As they begin a whirlwind romance, it isn't long before Hayes' superstar status poses unavoidable challenges to their relationship, and Solène soon discovers that life in the glare of his spotlight might be more than she bargained for.",
    poster_path:
      "https://image.tmdb.org/t/p/original//zDi2U7WYkdIoGYHcYbM9X5yReVD.jpg",
    release_date: "2024-05-02",
    title: "The Idea of You",
    vote_average: 7.399,
    movieId: 843527,
    genres: "Romance, Comedy, Drama",
  },
  {
    backdrop_path: "/9QusGjxcYvfPD1THg6oW3RLeNn7.jpg",
    original_language: "en",
    overview:
      "Half-human, half-Atlantean Arthur Curry is taken on the journey of his lifetime to discover if he is worth of being a king.",
    poster_path:
      "https://image.tmdb.org/t/p/original//zdw7Wf97vsQ0YnGomxDqfcEdUjX.jpg",
    release_date: "2018-12-07",
    title: "Aquaman",
    vote_average: 6.896,
    movieId: 297802,
    genres: "Action, Adventure, Fantasy",
  },
  {
    backdrop_path: "/deLWkOLZmBNkm8p16igfapQyqeq.jpg",
    original_language: "en",
    overview:
      "A young woman's marriage to a charming prince turns into a fierce fight for survival when she's offered up as a sacrifice to a fire-breathing dragon.",
    poster_path:
      "https://image.tmdb.org/t/p/original//AgHbB9DCE9aE57zkHjSmseszh6e.jpg",
    release_date: "2024-03-07",
    title: "Damsel",
    vote_average: 7.106,
    movieId: 763215,
    genres: "Fantasy, Action, Adventure",
  },
  {
    backdrop_path: "/2vFuG6bWGyQUzYS9d69E5l85nIz.jpg",
    original_language: "en",
    overview:
      "When a new threat capable of destroying the entire planet emerges, Optimus Prime and the Autobots must team up with a powerful faction known as the Maximals. With the fate of humanity hanging in the balance, humans Noah and Elena will do whatever it takes to help the Transformers as they engage in the ultimate battle to save Earth.",
    poster_path:
      "https://image.tmdb.org/t/p/original//gPbM0MK8CP8A174rmUwGsADNYKD.jpg",
    release_date: "2023-06-06",
    title: "Transformers: Rise of the Beasts",
    vote_average: 7.328,
    movieId: 667538,
    genres: "Action, Adventure, Science Fiction",
  },
  {
    backdrop_path: "/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg",
    original_language: "en",
    overview:
      "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.",
    poster_path:
      "https://image.tmdb.org/t/p/original//1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
    release_date: "2021-12-15",
    title: "Spider-Man: No Way Home",
    vote_average: 8,
    movieId: 634649,
    genres: "Action, Adventure, Science Fiction",
  },
  {
    backdrop_path: "/kaIfm5ryEOwYg8mLbq8HkPuM1Fo.jpg",
    original_language: "en",
    overview:
      "Thor is imprisoned on the other side of the universe and finds himself in a race against time to get back to Asgard to stop Ragnarok, the destruction of his home-world and the end of Asgardian civilization, at the hands of a powerful new threat, the ruthless Hela.",
    poster_path:
      "https://image.tmdb.org/t/p/original//rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg",
    release_date: "2017-10-02",
    title: "Thor: Ragnarok",
    vote_average: 7.593,
    movieId: 284053,
    genres: "Action, Adventure, Science Fiction",
  },
  {
    backdrop_path: "/70Rm9ItxKuEKN8iu6rNjfwAYUCJ.jpg",
    original_language: "en",
    overview:
      "In 1979, a group of young filmmakers set out to make an adult film in rural Texas, but when their reclusive, elderly hosts catch them in the act, the cast find themselves fighting for their lives.",
    poster_path:
      "https://image.tmdb.org/t/p/original//A7YPhQKdcr6XB1kCUdS4tHifYWd.jpg",
    release_date: "2022-03-17",
    title: "X",
    vote_average: 6.7,
    movieId: 760104,
    genres: "Horror, Mystery, Thriller",
  },
  {
    backdrop_path: "/qAzYK4YPSWDc7aa4R43LcwRIAyb.jpg",
    original_language: "en",
    overview:
      "The story follows Carol Danvers as she becomes one of the universe’s most powerful heroes when Earth is caught in the middle of a galactic war between two alien races. Set in the 1990s, Captain Marvel is an all-new adventure from a previously unseen period in the history of the Marvel Cinematic Universe.",
    poster_path:
      "https://image.tmdb.org/t/p/original//AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg",
    release_date: "2019-03-06",
    title: "Captain Marvel",
    vote_average: 6.82,
    movieId: 299537,
    genres: "Action, Adventure, Science Fiction",
  },
  {
    backdrop_path: "/criPrxkTggCra1jch49jsiSeXo1.jpg",
    original_language: "en",
    overview:
      "Carol Danvers, aka Captain Marvel, has reclaimed her identity from the tyrannical Kree and taken revenge on the Supreme Intelligence. But unintended consequences see Carol shouldering the burden of a destabilized universe. When her duties send her to an anomalous wormhole linked to a Kree revolutionary, her powers become entangled with that of Jersey City super-fan Kamala Khan, aka Ms. Marvel, and Carol’s estranged niece, now S.A.B.E.R. astronaut Captain Monica Rambeau. Together, this unlikely trio must team up and learn to work in concert to save the universe.",
    poster_path:
      "https://image.tmdb.org/t/p/original//9GBhzXMFjgcZ3FdR9w3bUMMTps5.jpg",
    release_date: "2023-11-08",
    title: "The Marvels",
    vote_average: 6.125,
    movieId: 609681,
    genres: "Science Fiction, Adventure, Action",
  },
  {
    backdrop_path: "/6iUNJZymJBMXXriQyFZfLAKnjO6.jpg",
    original_language: "en",
    overview:
      "An Amazon princess comes to the world of Man in the grips of the First World War to confront the forces of evil and bring an end to human conflict.",
    poster_path:
      "https://image.tmdb.org/t/p/original//imekS7f1OuHyUP2LAiTEM0zBzUz.jpg",
    release_date: "2017-05-30",
    title: "Wonder Woman",
    vote_average: 7.227,
    movieId: 297762,
    genres: "Action, Adventure, Fantasy",
  },
  {
    backdrop_path: "/euCnMxNRlHNxA4f9BMnWbmxPOse.jpg",
    original_language: "en",
    overview:
      "Villainous Gru lives up to his reputation as a despicable, deplorable and downright unlikable guy when he hatches a plan to steal the moon from the sky. But he has a tough time staying on task after three orphans land in his care.",
    poster_path:
      "https://image.tmdb.org/t/p/original//9lOloREsAhBu0pEtU0BgeR1rHyo.jpg",
    release_date: "2010-07-08",
    title: "Despicable Me",
    vote_average: 7.238,
    movieId: 20352,
    genres: "Family, Animation, Comedy",
  },
  {
    backdrop_path: "/xJHokMbljvjADYdit5fK5VQsXEG.jpg",
    original_language: "en",
    overview:
      "The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
    poster_path:
      "https://image.tmdb.org/t/p/original//gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    release_date: "2014-11-05",
    title: "Interstellar",
    vote_average: 8.436,
    movieId: 157336,
    genres: "Adventure, Drama, Science Fiction",
  },
  {
    backdrop_path: "/mDfJG3LC3Dqb67AZ52x3Z0jU0uB.jpg",
    original_language: "en",
    overview:
      "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.",
    poster_path:
      "https://image.tmdb.org/t/p/original//7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
    release_date: "2018-04-25",
    title: "Avengers: Infinity War",
    vote_average: 8.246,
    movieId: 299536,
    genres: "Adventure, Action, Science Fiction",
  },
  {
    backdrop_path: "/jr8tSoJGj33XLgFBy6lmZhpGQNu.jpg",
    original_language: "en",
    overview:
      "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
    poster_path:
      "https://image.tmdb.org/t/p/original//kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
    release_date: "2022-12-07",
    title: "Puss in Boots: The Last Wish",
    vote_average: 8.2,
    movieId: 315162,
    genres: "Animation, Adventure, Fantasy, Comedy, Family",
  },
  {
    backdrop_path: "/AmR3JG1VQVxU8TfAvljUhfSFUOx.jpg",
    original_language: "en",
    overview:
      "During its return to the earth, commercial spaceship Nostromo intercepts a distress signal from a distant planet. When a three-member team of the crew discovers a chamber containing thousands of eggs on the planet, a creature inside one of the eggs attacks an explorer. The entire crew is unaware of the impending nightmare set to descend upon them when the alien parasite planted inside its unfortunate host is birthed.",
    poster_path:
      "https://image.tmdb.org/t/p/original//vfrQk5IPloGg1v9Rzbh2Eg3VGyM.jpg",
    release_date: "1979-05-25",
    title: "Alien",
    vote_average: 8.155,
    movieId: 348,
    genres: "Horror, Science Fiction",
  },
  {
    backdrop_path: "/ncEsesgOJDNrTUED89hYbA117wo.jpg",
    original_language: "en",
    overview:
      "Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.",
    poster_path:
      "https://image.tmdb.org/t/p/original//f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    release_date: "1999-03-31",
    title: "The Matrix",
    vote_average: 8.218,
    movieId: 603,
    genres: "Action, Science Fiction",
  },
  {
    backdrop_path: "/9X7YweCJw3q8Mcf6GadxReFEksM.jpg",
    original_language: "en",
    overview:
      "In the near future, a weary Logan cares for an ailing Professor X in a hideout on the Mexican border. But Logan's attempts to hide from the world and his legacy are upended when a young mutant arrives, pursued by dark forces.",
    poster_path:
      "https://image.tmdb.org/t/p/original//fnbjcRDYn6YviCcePDnGdyAkYsB.jpg",
    release_date: "2017-02-28",
    title: "Logan",
    vote_average: 7.818,
    movieId: 263115,
    genres: "Action, Drama, Science Fiction",
  },
  {
    backdrop_path: "/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg",
    original_language: "en",
    overview:
      "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
    poster_path:
      "https://image.tmdb.org/t/p/original//udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    release_date: "2019-10-01",
    title: "Joker",
    vote_average: 8.161,
    movieId: 475557,
    genres: "Crime, Thriller, Drama",
  },
  {
    backdrop_path: "/zqkmTXzjkAgXmEWLRsY4UpTWCeo.jpg",
    original_language: "en",
    overview:
      "Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire.",
    poster_path:
      "https://image.tmdb.org/t/p/original//6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
    release_date: "1977-05-25",
    title: "Star Wars",
    vote_average: 8.204,
    movieId: 11,
    genres: "Adventure, Action, Science Fiction",
  },
  {
    backdrop_path: "/kK9v1wclQxug6ZUJucD4DTaHgVF.jpg",
    original_language: "en",
    overview:
      "An uneducated collector for a Philadelphia loan shark is given a once-in-a-lifetime opportunity to fight against the world heavyweight boxing champion.",
    poster_path:
      "https://image.tmdb.org/t/p/original//cqxg1CihGR5ge0i1wYXr4Rdeppu.jpg",
    release_date: "1976-11-20",
    title: "Rocky",
    vote_average: 7.789,
    movieId: 1366,
    genres: "Drama",
  },
  {
    backdrop_path: "/cnqwv5Uz3UW5f086IWbQKr3ksJr.jpg",
    original_language: "en",
    overview:
      "Black Manta seeks revenge on Aquaman for his father's death. Wielding the Black Trident's power, he becomes a formidable foe. To defend Atlantis, Aquaman forges an alliance with his imprisoned brother. They must protect the kingdom.",
    poster_path:
      "https://image.tmdb.org/t/p/original//7lTnXOy0iNtBAdRP3TZvaKJ77F6.jpg",
    release_date: "2023-12-20",
    title: "Aquaman and the Lost Kingdom",
    vote_average: 6.8,
    movieId: 572802,
    genres: "Action, Adventure, Fantasy",
  },
  {
    backdrop_path: "/8GHxjXlI5rqyTBuVNekGTPjG5T6.jpg",
    original_language: "en",
    overview:
      "A young girl discovers an idealized parallel universe behind a secret door in her new home, unaware that it contains a sinister secret.",
    poster_path:
      "https://image.tmdb.org/t/p/original//4jeFXQYytChdZYE9JYO7Un87IlW.jpg",
    release_date: "2009-02-05",
    title: "Coraline",
    vote_average: 7.872,
    movieId: 14836,
    genres: "Animation, Family, Fantasy",
  },
  {
    backdrop_path: "/628Dep6AxEtDxjZoGP78TsOxYbK.jpg",
    original_language: "en",
    overview:
      "Ethan Hunt and his IMF team embark on their most dangerous mission yet: To track down a terrifying new weapon that threatens all of humanity before it falls into the wrong hands. With control of the future and the world's fate at stake and dark forces from Ethan's past closing in, a deadly race around the globe begins. Confronted by a mysterious, all-powerful enemy, Ethan must consider that nothing can matter more than his mission—not even the lives of those he cares about most.",
    poster_path:
      "https://image.tmdb.org/t/p/original//NNxYkU70HPurnNCSiCjYAmacwm.jpg",
    release_date: "2023-07-08",
    title: "Mission: Impossible - Dead Reckoning Part One",
    vote_average: 7.549,
    movieId: 575264,
    genres: "Action, Thriller",
  },
  {
    backdrop_path: "/r9oTasGQofvkQY5vlUXglneF64Z.jpg",
    original_language: "en",
    overview:
      "Dan Morgan is many things: a devoted husband, a loving father, a celebrated car salesman. He's also a former assassin. And when his past catches up to his present, he's forced to take his unsuspecting family on a road trip unlike any other.",
    poster_path:
      "https://image.tmdb.org/t/p/original//jLLtx3nTRSLGPAKl4RoIv1FbEBr.jpg",
    release_date: "2023-12-14",
    title: "The Family Plan",
    vote_average: 7.294,
    movieId: 1029575,
    genres: "Action, Comedy",
  },
  {
    backdrop_path: "/3P52oz9HPQWxcwHOwxtyrVV1LKi.jpg",
    original_language: "en",
    overview:
      "Wisecracking mercenary Deadpool battles the evil and powerful Cable and other bad guys to save a boy's life.",
    poster_path:
      "https://image.tmdb.org/t/p/original//to0spRl1CMDvyUbOnbb4fTk3VAd.jpg",
    release_date: "2018-05-10",
    title: "Deadpool 2",
    vote_average: 7.489,
    movieId: 383498,
    genres: "Action, Comedy, Adventure",
  },
  {
    backdrop_path: "/w5IDXtifKntw0ajv2co7jFlTQDM.jpg",
    original_language: "en",
    overview:
      "Humanity finds a mysterious object buried beneath the lunar surface and sets off to find its origins with the help of HAL 9000, the world's most advanced super computer.",
    poster_path:
      "https://image.tmdb.org/t/p/original//ve72VxNqjGM69Uky4WTo2bK6rfq.jpg",
    release_date: "1968-04-02",
    title: "2001: A Space Odyssey",
    vote_average: 8.076,
    movieId: 62,
    genres: "Science Fiction, Mystery, Adventure",
  },
  {
    backdrop_path: "/j9eOeLlTGoHoM8BNUJVNyWmIvCi.jpg",
    original_language: "en",
    overview:
      "After an amazing first date, Bea and Ben’s fiery attraction turns ice cold — until they find themselves unexpectedly reunited at a destination wedding in Australia. So they do what any two mature adults would do: pretend to be a couple.",
    poster_path:
      "https://image.tmdb.org/t/p/original//5qHoazZiaLe7oFBok7XlUhg96f2.jpg",
    release_date: "2023-12-21",
    title: "Anyone But You",
    vote_average: 7.039,
    movieId: 1072790,
    genres: "Romance, Comedy",
  },
  {
    backdrop_path: "/csGprKcRxt7SDpsrKiwxpgLdEsx.jpg",
    original_language: "en",
    overview:
      "When the renegade crew of Serenity agrees to hide a fugitive on their ship, they find themselves in an action-packed battle between the relentless military might of a totalitarian regime who will destroy anything – or anyone – to get the girl back and the bloodthirsty creatures who roam the uncharted areas of space. But... the greatest danger of all may be on their ship.",
    poster_path:
      "https://image.tmdb.org/t/p/original//4sqUOaPFoP2W81mq1UYqZqf5WzA.jpg",
    release_date: "2005-09-25",
    title: "Serenity",
    vote_average: 7.379,
    movieId: 16320,
    genres: "Science Fiction, Action, Adventure, Thriller",
  },
  {
    backdrop_path: "/5mzr6JZbrqnqD8rCEvPhuCE5Fw2.jpg",
    original_language: "en",
    overview:
      "An exploratory dive into the deepest depths of the ocean of a daring research team spirals into chaos when a malevolent mining operation threatens their mission and forces them into a high-stakes battle for survival.",
    poster_path:
      "https://image.tmdb.org/t/p/original//4m1Au3YkjqsxF8iwQy0fPYSxE0h.jpg",
    release_date: "2023-08-02",
    title: "Meg 2: The Trench",
    vote_average: 6.545,
    movieId: 615656,
    genres: "Action, Science Fiction, Horror",
  },
  {
    backdrop_path: "/b6ZJZHUdMEFECvGiDpJjlfUWela.jpg",
    original_language: "en",
    overview:
      "King T'Challa returns home to the reclusive, technologically advanced African nation of Wakanda to serve as his country's new leader. However, T'Challa soon finds that he is challenged for the throne by factions within his own country as well as without. Using powers reserved to Wakandan kings, T'Challa assumes the Black Panther mantle to join with ex-girlfriend Nakia, the queen-mother, his princess-kid sister, members of the Dora Milaje (the Wakandan 'special forces') and an American secret agent, to prevent Wakanda from being dragged into a world war.",
    poster_path:
      "https://image.tmdb.org/t/p/original//uxzzxijgPIY7slzFvMotPv8wjKA.jpg",
    release_date: "2018-02-13",
    title: "Black Panther",
    vote_average: 7.386,
    movieId: 284054,
    genres: "Action, Adventure, Science Fiction",
  },
  {
    backdrop_path: "/uMSxXLfH7v30gRNBqsQaSP3yqX5.jpg",
    original_language: "en",
    overview:
      "A fanboy of a supervillain supergroup known as the Vicious 6, Gru hatches a plan to become evil enough to join them, with the backup of his followers, the Minions.",
    poster_path:
      "https://image.tmdb.org/t/p/original//wKiOkZTN9lUUUNZLmtnwubZYONg.jpg",
    release_date: "2022-06-29",
    title: "Minions: The Rise of Gru",
    vote_average: 7.3,
    movieId: 438148,
    genres: "Animation, Comedy, Family, Adventure, Crime, Science Fiction",
  },
  {
    backdrop_path: "/YL3GPOiDcNraIJOVDCZsoOBoDy.jpg",
    original_language: "en",
    overview:
      "A team of elite commandos on a secret mission in a Central American jungle come to find themselves hunted by an extraterrestrial warrior.",
    poster_path:
      "https://image.tmdb.org/t/p/original//k3mW4qfJo6SKqe6laRyNGnbB9n5.jpg",
    release_date: "1987-06-12",
    title: "Predator",
    vote_average: 7.531,
    movieId: 106,
    genres: "Science Fiction, Action, Adventure, Thriller",
  },
  {
    backdrop_path: "/rMvPXy8PUjj1o8o1pzgQbdNCsvj.jpg",
    original_language: "en",
    overview:
      "Armed with every weapon they can get their hands on and the skills to use them, The Expendables are the world’s last line of defense and the team that gets called when all other options are off the table. But new team members with new styles and tactics are going to give “new blood” a whole new meaning.",
    poster_path:
      "https://image.tmdb.org/t/p/original//iwsMu0ehRPbtaSxqiaUDQB9qMWT.jpg",
    release_date: "2023-09-15",
    title: "Expend4bles",
    vote_average: 6.258,
    movieId: 299054,
    genres: "Action, Adventure, Thriller",
  },
  {
    backdrop_path: "/7lmBufEG7P7Y1HClYK3gCxYrkgS.jpg",
    original_language: "en",
    overview:
      "With the world now aware of his dual life as the armored superhero Iron Man, billionaire inventor Tony Stark faces pressure from the government, the press and the public to share his technology with the military. Unwilling to let go of his invention, Stark, with Pepper Potts and James 'Rhodey' Rhodes at his side, must forge new alliances – and confront powerful enemies.",
    poster_path:
      "https://image.tmdb.org/t/p/original//6WBeq4fCfn7AN0o21W9qNcRF2l9.jpg",
    release_date: "2010-04-28",
    title: "Iron Man 2",
    vote_average: 6.841,
    movieId: 10138,
    genres: "Adventure, Action, Science Fiction",
  },
  {
    backdrop_path: "/sRvXNDItGlWCqtO3j6wks52FmbD.jpg",
    original_language: "en",
    overview:
      "It ain't easy bein' green -- especially if you're a likable (albeit smelly) ogre named Shrek. On a mission to retrieve a gorgeous princess from the clutches of a fire-breathing dragon, Shrek teams up with an unlikely compatriot -- a wisecracking donkey.",
    poster_path:
      "https://image.tmdb.org/t/p/original//iB64vpL3dIObOtMZgX3RqdVdQDc.jpg",
    release_date: "2001-05-18",
    title: "Shrek",
    vote_average: 7.744,
    movieId: 808,
    genres: "Animation, Comedy, Fantasy, Adventure, Family",
  },
  {
    backdrop_path: "/8rpDcsfLJypbO6vREc0547VKqEv.jpg",
    original_language: "en",
    overview:
      "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
    poster_path:
      "https://image.tmdb.org/t/p/original//t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
    release_date: "2022-12-14",
    title: "Avatar: The Way of Water",
    vote_average: 7.6,
    movieId: 76600,
    genres: "Science Fiction, Adventure, Action",
  },
  {
    backdrop_path: "/4MCKNAc6AbWjEsM2h9Xc29owo4z.jpg",
    original_language: "en",
    overview:
      "One man's campaign for vengeance takes on national stakes after he is revealed to be a former operative of a powerful and clandestine organization known as Beekeepers.",
    poster_path:
      "https://image.tmdb.org/t/p/original//A7EByudX0eOzlkQ2FIbogzyazm2.jpg",
    release_date: "2024-01-08",
    title: "The Beekeeper",
    vote_average: 7.393,
    movieId: 866398,
    genres: "Action, Crime, Thriller",
  },
  {
    backdrop_path: "/VuukZLgaCrho2Ar8Scl9HtV3yD.jpg",
    original_language: "en",
    overview:
      "Investigative journalist Eddie Brock attempts a comeback following a scandal, but accidentally becomes the host of Venom, a violent, super powerful alien symbiote. Soon, he must rely on his newfound powers to protect the world from a shadowy organization looking for a symbiote of their own.",
    poster_path:
      "https://image.tmdb.org/t/p/original//2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg",
    release_date: "2018-09-28",
    title: "Venom",
    vote_average: 6.829,
    movieId: 335983,
    genres: "Science Fiction, Action",
  },
  {
    backdrop_path: "/lxD5ak7BOoinRNehOCA85CQ8ubr.jpg",
    original_language: "en",
    overview:
      "Led by Woody, Andy's toys live happily in his room until Andy's birthday brings Buzz Lightyear onto the scene. Afraid of losing his place in Andy's heart, Woody plots against Buzz. But when circumstances separate Buzz and Woody from their owner, the duo eventually learns to put aside their differences.",
    poster_path:
      "https://image.tmdb.org/t/p/original//uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg",
    release_date: "1995-10-30",
    title: "Toy Story",
    vote_average: 7.972,
    movieId: 862,
    genres: "Animation, Adventure, Family, Comedy",
  },
  {
    backdrop_path: "/cgo3OmF84touDrrLkQ1DQ3MRFyO.jpg",
    original_language: "en",
    overview:
      "After stalking and saving the life of her favorite fiction author in a car accident, his  manic obsessor holds him captive in her remote Colorado home then forces him to write back to life the popular literary character he killed off.",
    poster_path:
      "https://image.tmdb.org/t/p/original//23Y65uWaVMpqfbZTN3CT0aei4D5.jpg",
    release_date: "1990-11-30",
    title: "Misery",
    vote_average: 7.761,
    movieId: 1700,
    genres: "Drama, Thriller",
  },
  {
    backdrop_path: "/msCHK5Kh1YbdZ0zPJ2nzPUhhSN9.jpg",
    original_language: "en",
    overview:
      "After narrowly escaping a bizarre accident, a troubled teenager is plagued by visions of a large bunny rabbit that manipulates him to commit a series of crimes.",
    poster_path:
      "https://image.tmdb.org/t/p/original//fhQoQfejY1hUcwyuLgpBrYs6uFt.jpg",
    release_date: "2001-01-19",
    title: "Donnie Darko",
    vote_average: 7.78,
    movieId: 141,
    genres: "Fantasy, Drama, Mystery",
  },
  {
    backdrop_path: "/hziiv14OpD73u9gAak4XDDfBKa2.jpg",
    original_language: "en",
    overview:
      "Harry Potter has lived under the stairs at his aunt and uncle's house his whole life. But on his 11th birthday, he learns he's a powerful wizard—with a place waiting for him at the Hogwarts School of Witchcraft and Wizardry. As he learns to harness his newfound powers with the help of the school's kindly headmaster, Harry uncovers the truth about his parents' deaths—and about the villain who's to blame.",
    poster_path:
      "https://image.tmdb.org/t/p/original//wuMc08IPKEatf9rnMNXvIDxqP4W.jpg",
    release_date: "2001-11-16",
    title: "Harry Potter and the Philosopher's Stone",
    vote_average: 7.913,
    movieId: 671,
    genres: "Adventure, Fantasy",
  },
  {
    backdrop_path: "/7NRGAtu8E4343NSKwhkgmVRDINw.jpg",
    original_language: "en",
    overview:
      "Recently fired and desperate for work, a troubled young man named Mike agrees to take a position as a night security guard at an abandoned theme restaurant: Freddy Fazbear's Pizzeria. But he soon discovers that nothing at Freddy's is what it seems.",
    poster_path:
      "https://image.tmdb.org/t/p/original//nuv2CzJsG605LMZaifUigDyuOEO.jpg",
    release_date: "2023-10-25",
    title: "Five Nights at Freddy's",
    vote_average: 7.631,
    movieId: 507089,
    genres: "Horror, Mystery",
  },
  {
    backdrop_path: "/2qluV8y79LnBBHaMpwewCjQ1Htk.jpg",
    original_language: "en",
    overview:
      "The crew of the colony ship Covenant, bound for a remote planet on the far side of the galaxy, discovers what they think is an uncharted paradise but is actually a dark, dangerous world.",
    poster_path:
      "https://image.tmdb.org/t/p/original//zecMELPbU5YMQpC81Z8ImaaXuf9.jpg",
    release_date: "2017-05-09",
    title: "Alien: Covenant",
    vote_average: 6.116,
    movieId: 126889,
    genres: "Science Fiction, Horror, Mystery",
  },
  {
    backdrop_path: "/3G1Q5xF40HkUBJXxt2DQgQzKTp5.jpg",
    original_language: "en",
    overview:
      "The tale of an extraordinary family, the Madrigals, who live hidden in the mountains of Colombia, in a magical house, in a vibrant town, in a wondrous, charmed place called an Encanto. The magic of the Encanto has blessed every child in the family—every child except one, Mirabel. But when she discovers that the magic surrounding the Encanto is in danger, Mirabel decides that she, the only ordinary Madrigal, might just be her exceptional family's last hope.",
    poster_path:
      "https://image.tmdb.org/t/p/original//4j0PNHkMr5ax3IA8tjtxcmPU3QT.jpg",
    release_date: "2021-10-13",
    title: "Encanto",
    vote_average: 7.604,
    movieId: 568124,
    genres: "Animation, Comedy, Family, Fantasy",
  },
  {
    backdrop_path: "/8lBViysvNJBPkl6zG1LVAaW3qhj.jpg",
    original_language: "en",
    overview:
      "A cryptic message from Bond’s past sends him on a trail to uncover a sinister organization. While M battles political forces to keep the secret service alive, Bond peels back the layers of deceit to reveal the terrible truth behind SPECTRE.",
    poster_path:
      "https://image.tmdb.org/t/p/original//zj8ongFhtWNsVlfjOGo8pSr7PQg.jpg",
    release_date: "2015-10-26",
    title: "Spectre",
    vote_average: 6.544,
    movieId: 206647,
    genres: "Action, Adventure, Thriller",
  },
  {
    backdrop_path: "/tq8COKsI99Bivjd4CZIYVGoKcIx.jpg",
    original_language: "en",
    overview:
      'Tennis player turned coach Tashi has taken her husband, Art, and transformed him into a world-famous Grand Slam champion. To jolt him out of his recent losing streak, she signs him up for a "Challenger" event — close to the lowest level of pro tournament — where he finds himself standing across the net from his former best friend and Tashi\'s former boyfriend.',
    poster_path:
      "https://image.tmdb.org/t/p/original//H6vke7zGiuLsz4v4RPeReb9rsv.jpg",
    release_date: "2024-04-18",
    title: "Challengers",
    vote_average: 7.196,
    movieId: 937287,
    genres: "Romance, Drama",
  },
  {
    backdrop_path: "/2Xe9lISpwXKhvKiHttbFfVRERQX.jpg",
    original_language: "en",
    overview:
      "Tony Lip, a bouncer in 1962, is hired to drive pianist Don Shirley on a tour through the Deep South in the days when African Americans, forced to find alternate accommodations and services due to segregation laws below the Mason-Dixon Line, relied on a guide called The Negro Motorist Green Book.",
    poster_path:
      "https://image.tmdb.org/t/p/original//7BsvSuDQuoqhWmU2fL7W2GOcZHU.jpg",
    release_date: "2018-11-16",
    title: "Green Book",
    vote_average: 8.242,
    movieId: 490132,
    genres: "Drama, History",
  },
  {
    backdrop_path: "/wW7Wt5bXzPy4VOEE4LTIUDyDgBo.jpg",
    original_language: "en",
    overview:
      "Jack Sparrow, a freewheeling 18th-century pirate, quarrels with a rival pirate bent on pillaging Port Royal. When the governor's daughter is kidnapped, Sparrow decides to help the girl's love save her.",
    poster_path:
      "https://image.tmdb.org/t/p/original//poHwCZeWzJCShH7tOjg8RIoyjcw.jpg",
    release_date: "2003-07-09",
    title: "Pirates of the Caribbean: The Curse of the Black Pearl",
    vote_average: 7.803,
    movieId: 22,
    genres: "Adventure, Fantasy, Action",
  },
  {
    backdrop_path: "/iwgl8zlrrfvfWp9k9Paj8lvFEvS.jpg",
    original_language: "en",
    overview:
      'Two homicide detectives are on a desperate hunt for a serial killer whose crimes are based on the "seven deadly sins" in this dark and haunting film that takes viewers from the tortured remains of one victim to the next. The seasoned Det. Sommerset researches each sin in an effort to get inside the killer\'s mind, while his novice partner, Mills, scoffs at his efforts to unravel the case.',
    poster_path:
      "https://image.tmdb.org/t/p/original//6yoghtyTpznpBik8EngEmJskVUO.jpg",
    release_date: "1995-09-22",
    title: "Se7en",
    vote_average: 8.374,
    movieId: 807,
    genres: "Crime, Mystery, Thriller",
  },
  {
    backdrop_path: "/fOipappvgVtUbbHOtmCkHzcwJjC.jpg",
    original_language: "en",
    overview:
      "Gru is recruited by the Anti-Villain League to help deal with a powerful new super criminal.",
    poster_path:
      "https://image.tmdb.org/t/p/original//5Fh4NdoEnCjCK9wLjdJ9DJNFl2b.jpg",
    release_date: "2013-06-26",
    title: "Despicable Me 2",
    vote_average: 6.927,
    movieId: 93456,
    genres: "Animation, Comedy, Family",
  },
  {
    backdrop_path: "/suaEOtk1N1sgg2MTM7oZd2cfVp3.jpg",
    original_language: "en",
    overview:
      "A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.",
    poster_path:
      "https://image.tmdb.org/t/p/original//d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
    release_date: "1994-09-10",
    title: "Pulp Fiction",
    vote_average: 8.488,
    movieId: 680,
    genres: "Thriller, Crime",
  },
  {
    backdrop_path: "/v6MVBFnQOscITvmAy5N5ras2JKZ.jpg",
    original_language: "en",
    overview:
      "Mild-mannered Clark Kent works as a reporter at the Daily Planet alongside his crush, Lois Lane. Clark must summon his superhero alter-ego when the nefarious Lex Luthor launches a plan to take over the world.",
    poster_path:
      "https://image.tmdb.org/t/p/original//d7px1FQxW4tngdACVRsCSaZq0Xl.jpg",
    release_date: "1978-12-14",
    title: "Superman",
    vote_average: 7.14,
    movieId: 1924,
    genres: "Science Fiction, Action, Adventure",
  },
  {
    backdrop_path: "/8ZTVqvKDQ8emSGUEMjsS4yHAwrp.jpg",
    original_language: "en",
    overview:
      "Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life as payment for a task considered to be impossible: \"inception\", the implantation of another person's idea into a target's subconscious.",
    poster_path:
      "https://image.tmdb.org/t/p/original//oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
    release_date: "2010-07-15",
    title: "Inception",
    vote_average: 8.368,
    movieId: 27205,
    genres: "Action, Science Fiction, Adventure",
  },
  {
    backdrop_path: "/vVMh8NK0IqxiRdiEztHfClyRnNw.jpg",
    original_language: "en",
    overview:
      "Newspaper magnate Charles Foster Kane is taken from his mother as a boy and made the ward of a rich industrialist. As a result, every well-meaning, tyrannical or self-destructive move he makes for the rest of his life appears in some way to be a reaction to that deeply wounding event.",
    poster_path:
      "https://image.tmdb.org/t/p/original//sav0jxhqiH0bPr2vZFU0Kjt2nZL.jpg",
    release_date: "1941-04-17",
    title: "Citizen Kane",
    vote_average: 8.009,
    movieId: 15,
    genres: "Mystery, Drama",
  },
  {
    backdrop_path: "/iTyh3hqTUjiRqQo8Uz1w1KtQti9.jpg",
    original_language: "en",
    overview:
      "Taking place after alien crafts land around the world, an expert linguist is recruited by the military to determine whether they come in peace or are a threat.",
    poster_path:
      "https://image.tmdb.org/t/p/original//pEzNVQfdzYDzVK0XqxERIw2x2se.jpg",
    release_date: "2016-11-10",
    title: "Arrival",
    vote_average: 7.604,
    movieId: 329865,
    genres: "Drama, Science Fiction, Mystery",
  },
  {
    backdrop_path: "/qjGrUmKW78MCFG8PTLDBp67S27p.jpg",
    original_language: "ja",
    overview:
      "Tanjiro Kamado, joined with Inosuke Hashibira, a boy raised by boars who wears a boar's head, and Zenitsu Agatsuma, a scared boy who reveals his true power when he sleeps, boards the Infinity Train on a new mission with the Fire Hashira, Kyojuro Rengoku, to defeat a demon who has been tormenting the people and killing the demon slayers who oppose it!",
    poster_path:
      "https://image.tmdb.org/t/p/original//h8Rb9gBr48ODIwYUttZNYeMWeUU.jpg",
    release_date: "2020-10-16",
    title: "Demon Slayer -Kimetsu no Yaiba- The Movie: Mugen Train",
    vote_average: 8.228,
    movieId: 635302,
    genres: "Action, Animation, Adventure, Fantasy, Thriller",
  },
  {
    backdrop_path: "/askg3SMvhqEl4OL52YuvdtY40Yb.jpg",
    original_language: "en",
    overview:
      "Despite his family’s baffling generations-old ban on music, Miguel dreams of becoming an accomplished musician like his idol, Ernesto de la Cruz. Desperate to prove his talent, Miguel finds himself in the stunning and colorful Land of the Dead following a mysterious chain of events. Along the way, he meets charming trickster Hector, and together, they set off on an extraordinary journey to unlock the real story behind Miguel's family history.",
    poster_path:
      "https://image.tmdb.org/t/p/original//gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg",
    release_date: "2017-10-27",
    title: "Coco",
    vote_average: 8.212,
    movieId: 354912,
    genres: "Family, Animation, Music, Adventure",
  },
  {
    backdrop_path: "/pLm9j7o5InoWaG2tlaQABYR2cAx.jpg",
    original_language: "en",
    overview:
      "In 1956 France, a priest is violently murdered, and Sister Irene begins to investigate. She once again comes face-to-face with a powerful evil.",
    poster_path:
      "https://image.tmdb.org/t/p/original//5gzzkR7y3hnY8AD1wXjCnVlHba5.jpg",
    release_date: "2023-09-06",
    title: "The Nun II",
    vote_average: 6.788,
    movieId: 968051,
    genres: "Horror",
  },
  {
    backdrop_path: "/b1L7qevxiVpkVFq4dmdQPGFPWH0.jpg",
    original_language: "en",
    overview:
      "An American priest working in Mexico is considered a saint by many local parishioners. However, due to a botched exorcism, he carries a secret that’s eating him alive until he gets an opportunity to face his demon one final time.",
    poster_path:
      "https://image.tmdb.org/t/p/original//hangTmbxpSV4gpHG7MgSlCWSSFa.jpg",
    release_date: "2022-03-11",
    title: "The Exorcism of God",
    vote_average: 7.104,
    movieId: 836225,
    genres: "Horror, Crime, Drama, Fantasy",
  },
  {
    backdrop_path: "/tC78Pck2YCsUAtEdZwuHYUFYtOj.jpg",
    original_language: "en",
    overview:
      "Robert McCall finds himself at home in Southern Italy but he discovers his friends are under the control of local crime bosses. As events turn deadly, McCall knows what he has to do: become his friends' protector by taking on the mafia.",
    poster_path:
      "https://image.tmdb.org/t/p/original//b0Ej6fnXAP8fK75hlyi2jKqdhHz.jpg",
    release_date: "2023-08-30",
    title: "The Equalizer 3",
    vote_average: 7.348,
    movieId: 926393,
    genres: "Action, Thriller, Crime",
  },
  {
    backdrop_path: "/AaV1YIdWKnjAIAOe8UUKBFm327v.jpg",
    original_language: "en",
    overview:
      "After more than thirty years of service as one of the Navy’s top aviators, and dodging the advancement in rank that would ground him, Pete “Maverick” Mitchell finds himself training a detachment of TOP GUN graduates for a specialized mission the likes of which no living pilot has ever seen.",
    poster_path:
      "https://image.tmdb.org/t/p/original//62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
    release_date: "2022-05-21",
    title: "Top Gun: Maverick",
    vote_average: 8.215,
    movieId: 361743,
    genres: "Action, Drama",
  },
  {
    backdrop_path: "/tmU7GeKVybMWFButWEGl2M4GeiP.jpg",
    original_language: "en",
    overview:
      "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
    poster_path:
      "https://image.tmdb.org/t/p/original//3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    release_date: "1972-03-14",
    title: "The Godfather",
    vote_average: 8.693,
    movieId: 238,
    genres: "Drama, Crime",
  },
  {
    backdrop_path: "/9pkZesKMnblFfKxEhQx45YQ2kIe.jpg",
    original_language: "en",
    overview:
      "Though Kevin has evidenced 23 personalities to his trusted psychiatrist, Dr. Fletcher, there remains one still submerged who is set to materialize and dominate all the others. Compelled to abduct three teenage girls led by the willful, observant Casey, Kevin reaches a war for survival among all of those contained within him — as well as everyone around him — as the walls between his compartments shatter apart.",
    poster_path:
      "https://image.tmdb.org/t/p/original//lli31lYTFpvxVBeFHWoe5PMfW5s.jpg",
    release_date: "2017-01-19",
    title: "Split",
    vote_average: 7.345,
    movieId: 381288,
    genres: "Horror, Thriller",
  },
  {
    backdrop_path: "/eTlcNXGv32zkVI7ZDHhfeaKHXKQ.jpg",
    original_language: "en",
    overview:
      "Set in a post-apocalyptic world, young Thomas is deposited in a community of boys after his memory is erased, soon learning they're all trapped in a maze that will require him to join forces with fellow “runners” for a shot at escape.",
    poster_path:
      "https://image.tmdb.org/t/p/original//ode14q7WtDugFDp78fo9lCsmay9.jpg",
    release_date: "2014-09-10",
    title: "The Maze Runner",
    vote_average: 7.183,
    movieId: 198663,
    genres: "Action, Mystery, Science Fiction, Thriller",
  },
  {
    backdrop_path: "/tfRyGlBlsfkCMXpRjMyxG53rbS9.jpg",
    original_language: "en",
    overview:
      "64 years before he becomes the tyrannical president of Panem, Coriolanus Snow sees a chance for a change in fortunes when he mentors Lucy Gray Baird, the female tribute from District 12.",
    poster_path:
      "https://image.tmdb.org/t/p/original//mBaXZ95R2OxueZhvQbcEWy2DqyO.jpg",
    release_date: "2023-11-15",
    title: "The Hunger Games: The Ballad of Songbirds & Snakes",
    vote_average: 7.139,
    movieId: 695721,
    genres: "Drama, Science Fiction, Action",
  },
  {
    backdrop_path: "/4TFCA5Lm5miseV3Wy02yxurEQL9.jpg",
    original_language: "en",
    overview:
      "A group of scientists in San Francisco struggle to stay alive in the aftermath of a plague that is wiping out humanity, while Caesar tries to maintain dominance over his community of intelligent apes.",
    poster_path:
      "https://image.tmdb.org/t/p/original//kScdQEwS9jPEdnO23XjGAtaoRcT.jpg",
    release_date: "2014-07-08",
    title: "Dawn of the Planet of the Apes",
    vote_average: 7.326,
    movieId: 119450,
    genres: "Science Fiction, Action, Drama, Thriller",
  },
  {
    backdrop_path: "/ufy3U0Kf9fvbgm6DEhJS68RERys.jpg",
    original_language: "en",
    overview:
      "A ruthless criminal operative has less than 24 hours to exact revenge on her enemies and in the process forms an unexpected bond with the daughter of one of her past victims.",
    poster_path:
      "https://image.tmdb.org/t/p/original//uJgdT1boTSP0dDIjdTgGleg71l4.jpg",
    release_date: "2021-09-10",
    title: "Kate",
    vote_average: 6.653,
    movieId: 597891,
    genres: "Action",
  },
  {
    backdrop_path: "/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg",
    original_language: "en",
    overview:
      "After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and restore order to the universe once and for all, no matter what consequences may be in store.",
    poster_path:
      "https://image.tmdb.org/t/p/original//or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    release_date: "2019-04-24",
    title: "Avengers: Endgame",
    vote_average: 8.253,
    movieId: 299534,
    genres: "Adventure, Science Fiction, Action",
  },
  {
    backdrop_path: "/P3GAbRjzVo9RKU4WxzvtgwlITc.jpg",
    original_language: "en",
    overview:
      "The story of Tim Ballard, a former US government agent, who quits his job in order to devote his life to rescuing children from global sex traffickers.",
    poster_path:
      "https://image.tmdb.org/t/p/original//kSf9svfL2WrKeuK8W08xeR5lTn8.jpg",
    release_date: "2023-07-03",
    title: "Sound of Freedom",
    vote_average: 8.022,
    movieId: 678512,
    genres: "Action, Drama",
  },
  {
    backdrop_path: "/x2RS3uTcsJJ9IfjNPcgDmukoEcQ.jpg",
    original_language: "en",
    overview:
      "Young hobbit Frodo Baggins, after inheriting a mysterious ring from his uncle Bilbo, must leave his home in order to keep it from falling into the hands of its evil creator. Along the way, a fellowship is formed to protect the ringbearer and make sure that the ring arrives at its final destination: Mt. Doom, the only place where it can be destroyed.",
    poster_path:
      "https://image.tmdb.org/t/p/original//6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
    release_date: "2001-12-18",
    title: "The Lord of the Rings: The Fellowship of the Ring",
    vote_average: 8.413,
    movieId: 120,
    genres: "Adventure, Fantasy, Action",
  },
  {
    backdrop_path: "/5YZbUmjbMa3ClvSW1Wj3D6XGolb.jpg",
    original_language: "en",
    overview:
      "Peter Quill, still reeling from the loss of Gamora, must rally his team around him to defend the universe along with protecting one of their own. A mission that, if not completed successfully, could quite possibly lead to the end of the Guardians as we know them.",
    poster_path:
      "https://image.tmdb.org/t/p/original//r2J02Z2OpNTctfOSN1Ydgii51I3.jpg",
    release_date: "2023-05-03",
    title: "Guardians of the Galaxy Vol. 3",
    vote_average: 7.976,
    movieId: 447365,
    genres: "Science Fiction, Adventure, Action",
  },
  {
    backdrop_path: "/fn4n6uOYcB6Uh89nbNPoU2w80RV.jpg",
    original_language: "en",
    overview:
      "Following the events of Captain America: Civil War, Peter Parker, with the help of his mentor Tony Stark, tries to balance his life as an ordinary high school student in Queens, New York City, with fighting crime as his superhero alter ego Spider-Man as a new threat, the Vulture, emerges.",
    poster_path:
      "https://image.tmdb.org/t/p/original//c24sv2weTHPsmDa7jEMN0m2P3RT.jpg",
    release_date: "2017-07-05",
    title: "Spider-Man: Homecoming",
    vote_average: 7.338,
    movieId: 315635,
    genres: "Action, Adventure, Science Fiction, Drama",
  },
  {
    backdrop_path: "/1fldJZ43ftMj3gKbhf8idjI7fWO.jpg",
    original_language: "en",
    overview:
      'Newly-paroled former US Army ranger Cameron Poe is headed back to his wife, but must fly home aboard a prison transport flight dubbed "Jailbird" taking the “worst of the worst” prisoners, a group described as “pure predators”, to a new super-prison. Poe faces impossible odds when the transport plane is skyjacked mid-flight by the most vicious criminals in the country led by the mastermind — genius serial killer Cyrus "The Virus" Grissom, and backed by black militant Diamond Dog and psychopath Billy Bedlam.',
    poster_path:
      "https://image.tmdb.org/t/p/original//kOKjgrEzGOP92rVQ6srA9jtp60l.jpg",
    release_date: "1997-06-05",
    title: "Con Air",
    vote_average: 6.752,
    movieId: 1701,
    genres: "Action, Thriller, Crime",
  },
  {
    backdrop_path: "/zBG5Mg29NH9xxpWMMG7BIvKwYhL.jpg",
    original_language: "pl",
    overview:
      "Laura and Massimo are back and hotter than ever. But the reunited couple's new beginning is complicated by Massimo’s family ties and a mysterious man who enters Laura’s life to win her heart and trust, at any cost.",
    poster_path:
      "https://image.tmdb.org/t/p/original//7qU0SOVcQ8BTJLodcAlulUAG16C.jpg",
    release_date: "2022-04-27",
    title: "365 Days: This Day",
    vote_average: 5.878,
    movieId: 829557,
    genres: "Romance, Drama",
  },
  {
    backdrop_path: "/vgatT6hiEf4EquZ1k0uU1Ft5XdI.jpg",
    original_language: "en",
    overview:
      "When danger threatens her camp, the fierce and highly skilled Comanche warrior Naru sets out to protect her people. But the prey she stalks turns out to be a highly evolved alien predator with a technically advanced arsenal.",
    poster_path:
      "https://image.tmdb.org/t/p/original//ujr5pztc1oitbe7ViMUOilFaJ7s.jpg",
    release_date: "2022-08-02",
    title: "Prey",
    vote_average: 7.718,
    movieId: 766507,
    genres: "Thriller, Action, Science Fiction",
  },
  {
    backdrop_path: "/t6TL7V9IsT4Ktx6YO8b1UYj3agd.jpg",
    original_language: "en",
    overview:
      "Devoted lifeguard Mitch Buchannon butts heads with a brash new recruit. Together, they uncover a local criminal plot that threatens the future of the Bay.",
    poster_path:
      "https://image.tmdb.org/t/p/original//6HE4xd8zloDqmjMZuhUCCw2UcY1.jpg",
    release_date: "2017-05-25",
    title: "Baywatch",
    vote_average: 6.094,
    movieId: 339846,
    genres: "Comedy, Action, Crime",
  },
  {
    backdrop_path: "/gsVC7HMf4VR2XFOyqjTSklY2Tms.jpg",
    original_language: "en",
    overview:
      "Brought back to life by an unorthodox scientist, a young woman runs off with a lawyer on a whirlwind adventure across the continents. Free from the prejudices of her times, she grows steadfast in her purpose to stand for equality and liberation.",
    poster_path:
      "https://image.tmdb.org/t/p/original//kCGlIMHnOm8JPXq3rXM6c5wMxcT.jpg",
    release_date: "2023-12-07",
    title: "Poor Things",
    vote_average: 7.782,
    movieId: 792307,
    genres: "Science Fiction, Romance, Comedy",
  },
  {
    backdrop_path: "/6aoyUbvu0419XLKLIMoH0TkEicH.jpg",
    original_language: "en",
    overview:
      "A mentally unstable Vietnam War veteran works as a night-time taxi driver in New York City where the perceived decadence and sleaze feed his urge for violent action.",
    poster_path:
      "https://image.tmdb.org/t/p/original//ekstpH614fwDX8DUln1a2Opz0N8.jpg",
    release_date: "1976-02-09",
    title: "Taxi Driver",
    vote_average: 8.15,
    movieId: 103,
    genres: "Crime, Drama",
  },
  {
    backdrop_path: "/3nYlM34QhzdtAvWRV5bN4nLtnTc.jpg",
    original_language: "en",
    overview:
      "When the seaside community of Amity finds itself under attack by a dangerous great white shark, the town's chief of police, a young marine biologist, and a grizzled hunter embark on a desperate quest to destroy the beast before it strikes again.",
    poster_path:
      "https://image.tmdb.org/t/p/original//lxM6kqilAdpdhqUl2biYp5frUxE.jpg",
    release_date: "1975-06-20",
    title: "Jaws",
    vote_average: 7.665,
    movieId: 578,
    genres: "Horror, Thriller, Adventure",
  },
  {
    backdrop_path: "/c6yfABGVKuB5cjoOwdX4AJMlzUz.jpg",
    original_language: "en",
    overview:
      'After losing their academic posts at a prestigious university, a team of parapsychologists goes into business as proton-pack-toting "ghostbusters" who exterminate ghouls, hobgoblins and supernatural pests of all stripes. An ad campaign pays off when a knockout cellist hires the squad to purge her swanky digs of demons that appear to be living in her refrigerator.',
    poster_path:
      "https://image.tmdb.org/t/p/original//7E8nLijS9AwwUEPu2oFYOVKhdFA.jpg",
    release_date: "1984-06-08",
    title: "Ghostbusters",
    vote_average: 7.487,
    movieId: 620,
    genres: "Comedy, Fantasy",
  },
  {
    backdrop_path: "/yc0jYCnnlh8qC39P5mXj5G67VWJ.jpg",
    original_language: "en",
    overview:
      "A down-and-out Brooklyn detective is hired to track down a singer on an odyssey that will take him through the desperate streets of Harlem, the smoke-filled jazz clubs of New Orleans, and the swamps of Louisiana and its seedy underworld of voodoo.",
    poster_path:
      "https://image.tmdb.org/t/p/original//h5v3wjJQNB7q2RntEnKDLhKtTFE.jpg",
    release_date: "1987-03-06",
    title: "Angel Heart",
    vote_average: 7.1,
    movieId: 635,
    genres: "Horror, Mystery",
  },
  {
    backdrop_path: "/uL5DoOuMho1QY7OK5IqacYH9QHK.jpg",
    original_language: "en",
    overview:
      "In the ravaged near-future, a savage motorcycle gang rules the road. Terrorizing innocent civilians while tearing up the streets, the ruthless gang laughs in the face of a police force hell-bent on stopping them.",
    poster_path:
      "https://image.tmdb.org/t/p/original//5LrI4GiCSrChgkdskVZiwv643Kg.jpg",
    release_date: "1979-04-12",
    title: "Mad Max",
    vote_average: 6.692,
    movieId: 9659,
    genres: "Adventure, Action, Thriller, Science Fiction",
  },
  {
    backdrop_path: "/aQCCpAIdWAp6wyFgjMry4okwrZo.jpg",
    original_language: "en",
    overview:
      "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse. Forced to confront a powerful entity, the Warrens find themselves caught in the most terrifying case of their lives.",
    poster_path:
      "https://image.tmdb.org/t/p/original//wVYREutTvI2tmxr6ujrHT704wGF.jpg",
    release_date: "2013-07-18",
    title: "The Conjuring",
    vote_average: 7.542,
    movieId: 138843,
    genres: "Horror, Thriller",
  },
  {
    backdrop_path: "/6MmYsaK6poR8f4R8jsBnJBU5tfd.jpg",
    original_language: "en",
    overview:
      "Frank, a single man raising his child prodigy niece Mary, is drawn into a custody battle with his mother.",
    poster_path:
      "https://image.tmdb.org/t/p/original//7YB2YrMwIm1g8FyZtlvmVDfRnAT.jpg",
    release_date: "2017-04-07",
    title: "Gifted",
    vote_average: 8.038,
    movieId: 400928,
    genres: "Drama, Comedy",
  },
  {
    backdrop_path: "/5YLNDnkO0cZZwog2StyR3YmmBPh.jpg",
    original_language: "en",
    overview:
      "101-year-old Rose DeWitt Bukater tells the story of her life aboard the Titanic, 84 years later. A young Rose boards the ship with her mother and fiancé. Meanwhile, Jack Dawson and Fabrizio De Rossi win third-class tickets aboard the ship. Rose tells the whole story from Titanic's departure through to its death—on its first and last voyage—on April 15, 1912.",
    poster_path:
      "https://image.tmdb.org/t/p/original//9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
    release_date: "1997-11-18",
    title: "Titanic",
    vote_average: 7.906,
    movieId: 597,
    genres: "Drama, Romance",
  },
  {
    backdrop_path: "/gG9fTyDL03fiKnOpf2tr01sncnt.jpg",
    original_language: "en",
    overview:
      "Dangerously ill with a rare blood disorder, and determined to save others suffering his same fate, Dr. Michael Morbius attempts a desperate gamble. What at first appears to be a radical success soon reveals itself to be a remedy potentially worse than the disease.",
    poster_path:
      "https://image.tmdb.org/t/p/original//6JjfSchsU6daXk2AKX8EEBjO3Fm.jpg",
    release_date: "2022-03-30",
    title: "Morbius",
    vote_average: 6.036,
    movieId: 526896,
    genres: "Action, Science Fiction, Fantasy",
  },
  {
    backdrop_path: "/2nyaeISu2xIxIgZYNpX4UayY8PN.jpg",
    original_language: "en",
    overview:
      "Fuelled by his restored faith in humanity and inspired by Superman's selfless act, Bruce Wayne and Diana Prince assemble a team of metahumans consisting of Barry Allen, Arthur Curry and Victor Stone to face the catastrophic threat of Steppenwolf and the Parademons who are on the hunt for three Mother Boxes on Earth.",
    poster_path:
      "https://image.tmdb.org/t/p/original//eifGNCSDuxJeS1loAXil5bIGgvC.jpg",
    release_date: "2017-11-15",
    title: "Justice League",
    vote_average: 6.086,
    movieId: 141052,
    genres: "Action, Adventure, Science Fiction",
  },
  {
    backdrop_path: "/iaNoLnnpQb5SNxGc4bkQmdCvEdG.jpg",
    original_language: "en",
    overview:
      "Shrek, Fiona, and Donkey set off to Far, Far Away to meet Fiona's mother and father, the Queen and King. But not everyone is happily ever after. Shrek and the King find it difficult to get along, and there's tension in the marriage. The Fairy Godmother discovers that Fiona has married Shrek instead of her son Prince Charming and plots to destroy their marriage.",
    poster_path:
      "https://image.tmdb.org/t/p/original//2yYP0PQjG8zVqturh1BAqu2Tixl.jpg",
    release_date: "2004-05-19",
    title: "Shrek 2",
    vote_average: 7.3,
    movieId: 809,
    genres: "Animation, Family, Comedy, Fantasy, Adventure",
  },
  {
    backdrop_path: "/3zvZ699gMW2RhWc0GisIukzq0Ls.jpg",
    original_language: "en",
    overview:
      "After his career is destroyed, a brilliant but arrogant surgeon gets a new lease on life when a sorcerer takes him under her wing and trains him to defend the world against evil.",
    poster_path:
      "https://image.tmdb.org/t/p/original//7WfK17BXE6szXlm4WOxfswgbdsL.jpg",
    release_date: "2016-10-25",
    title: "Doctor Strange",
    vote_average: 7.423,
    movieId: 284052,
    genres: "Action, Adventure, Fantasy",
  },
  {
    backdrop_path: "/9hRVHqT4zfdUgfri98TcqJPS2cf.jpg",
    original_language: "en",
    overview:
      "In a violent, near-apocalyptic Detroit, evil corporation Omni Consumer Products wins a contract from the city government to privatize the police force. To test their crime-eradicating cyborgs, the company leads street cop Alex Murphy into an armed confrontation with crime lord Boddicker so they can use his body to support their untested RoboCop prototype. But when RoboCop learns of the company's nefarious plans, he turns on his masters.",
    poster_path:
      "https://image.tmdb.org/t/p/original//hHtOgGb3NihlyRATHlKPaFApbrd.jpg",
    release_date: "1987-07-17",
    title: "RoboCop",
    vote_average: 7.321,
    movieId: 5548,
    genres: "Action, Thriller, Science Fiction",
  },
  {
    backdrop_path: "/7VEUOEfRzzrQfWddlIyLUKvh6Nf.jpg",
    original_language: "en",
    overview:
      "The youngest of King Triton’s daughters, and the most defiant, Ariel longs to find out more about the world beyond the sea, and while visiting the surface, falls for the dashing Prince Eric. With mermaids forbidden to interact with humans, Ariel makes a deal with the evil sea witch, Ursula, which gives her a chance to experience life on land, but ultimately places her life – and her father’s crown – in jeopardy.",
    poster_path:
      "https://image.tmdb.org/t/p/original//ym1dxyOk4jFcSl4Q2zmRrA5BEEN.jpg",
    release_date: "2023-05-18",
    title: "The Little Mermaid",
    vote_average: 6.373,
    movieId: 447277,
    genres: "Adventure, Family, Fantasy, Romance",
  },
  {
    backdrop_path: "/a2n6bKD7qhCPCAEALgsAhWOAQcc.jpg",
    original_language: "en",
    overview:
      "Dr. Ryan Stone, a brilliant medical engineer on her first Shuttle mission, with veteran astronaut Matt Kowalsky in command of his last flight before retiring. But on a seemingly routine spacewalk, disaster strikes. The Shuttle is destroyed, leaving Stone and Kowalsky completely alone-tethered to nothing but each other and spiraling out into the blackness of space. The deafening silence tells them they have lost any link to Earth and any chance for rescue. As fear turns to panic, every gulp of air eats away at what little oxygen is left. But the only way home may be to go further out into the terrifying expanse of space.",
    poster_path:
      "https://image.tmdb.org/t/p/original//kZ2nZw8D681aphje8NJi8EfbL1U.jpg",
    release_date: "2013-10-03",
    title: "Gravity",
    vote_average: 7.166,
    movieId: 49047,
    genres: "Science Fiction, Thriller, Drama",
  },
  {
    backdrop_path: "/cjRUhKyt2Jo3V1KNzc5tpPNfccG.jpg",
    original_language: "en",
    overview:
      "The X-Men face their most formidable and powerful foe when one of their own, Jean Grey, starts to spiral out of control. During a rescue mission in outer space, Jean is nearly killed when she's hit by a mysterious cosmic force. Once she returns home, this force not only makes her infinitely more powerful, but far more unstable. The X-Men must now band together to save her soul and battle aliens that want to use Grey's new abilities to rule the galaxy.",
    poster_path:
      "https://image.tmdb.org/t/p/original//cCTJPelKGLhALq3r51A9uMonxKj.jpg",
    release_date: "2019-06-05",
    title: "Dark Phoenix",
    vote_average: 6,
    movieId: 320288,
    genres: "Science Fiction, Action, Adventure",
  },
  {
    backdrop_path: "/hO1oTBGNxO5fBKVEuWnSpICJH7c.jpg",
    original_language: "en",
    overview:
      "Laurie Strode comes to her final confrontation with Michael Myers, the masked figure who has haunted her since she narrowly escaped his killing spree on Halloween night four decades ago.",
    poster_path:
      "https://image.tmdb.org/t/p/original//f7JAX5EGk4GgsEnus6OxyzwpFp7.jpg",
    release_date: "2018-10-18",
    title: "Halloween",
    vote_average: 6.553,
    movieId: 424139,
    genres: "Horror, Thriller",
  },
  {
    backdrop_path: "/6mJrgL7Mi13XjJeGYJFlD6UEVQw.jpg",
    original_language: "en",
    overview:
      "Buster and his new cast now have their sights set on debuting a new show at the Crystal Tower Theater in glamorous Redshore City. But with no connections, he and his singers must sneak into the Crystal Entertainment offices, run by the ruthless wolf mogul Jimmy Crystal, where the gang pitches the ridiculous idea of casting the lion rock legend Clay Calloway in their show. Buster must embark on a quest to find the now-isolated Clay and persuade him to return to the stage.",
    poster_path:
      "https://image.tmdb.org/t/p/original//aWeKITRFbbwY8txG5uCj4rMCfSP.jpg",
    release_date: "2021-12-01",
    title: "Sing 2",
    vote_average: 7.875,
    movieId: 438695,
    genres: "Animation, Family, Music, Comedy",
  },
  {
    backdrop_path: "/bmAzESah8IUNRQX5MqeyUrhE5Pr.jpg",
    original_language: "en",
    overview:
      "A man struggles with memories of his past, including a wife he cannot remember, in a nightmarish world with no sun and run by beings with telekinetic powers who seek the souls of humans.",
    poster_path:
      "https://image.tmdb.org/t/p/original//AdBe2ow8hdlT2aLBYuUjs0Xkqkw.jpg",
    release_date: "1998-02-27",
    title: "Dark City",
    vote_average: 7.3,
    movieId: 2666,
    genres: "Mystery, Science Fiction",
  },
  {
    backdrop_path: "/7bWxAsNPv9CXHOhZbJVlj2KxgfP.jpg",
    original_language: "en",
    overview:
      "A reunion between two estranged sisters gets cut short by the rise of flesh-possessing demons, thrusting them into a primal battle for survival as they face the most nightmarish version of family imaginable.",
    poster_path:
      "https://image.tmdb.org/t/p/original//5ik4ATKmNtmJU6AYD0bLm56BCVM.jpg",
    release_date: "2023-04-12",
    title: "Evil Dead Rise",
    vote_average: 6.955,
    movieId: 713704,
    genres: "Horror, Thriller",
  },
  {
    backdrop_path: "/ep1urICLqtwwV1sTPHP9WXV4Uto.jpg",
    original_language: "en",
    overview:
      "When Van Helsing's mysterious invention, the \"Monsterfication Ray,\" goes haywire, Drac and his monster pals are all transformed into humans, and Johnny becomes a monster. In their new mismatched bodies, Drac and Johnny must team up and race across the globe to find a cure before it's too late, and before they drive each other crazy.",
    poster_path:
      "https://image.tmdb.org/t/p/original//teCy1egGQa0y8ULJvlrDHQKnxBL.jpg",
    release_date: "2022-01-31",
    title: "Hotel Transylvania: Transformania",
    vote_average: 7.096,
    movieId: 585083,
    genres: "Animation, Comedy, Family, Adventure, Fantasy",
  },
  {
    backdrop_path: "/rQaHA74pevnGsxcKGaoZVGWe9TC.jpg",
    original_language: "en",
    overview:
      "Joe Gardner is a middle school teacher with a love for jazz music. After a successful audition at the Half Note Club, he suddenly gets into an accident that separates his soul from his body and is transported to the You Seminar, a center in which souls develop and gain passions before being transported to a newborn child. Joe must enlist help from the other souls-in-training, like 22, a soul who has spent eons in the You Seminar, in order to get back to Earth.",
    poster_path:
      "https://image.tmdb.org/t/p/original//hm58Jw4Lw8OIeECIq5qyPYhAeRJ.jpg",
    release_date: "2020-12-25",
    title: "Soul",
    vote_average: 8.132,
    movieId: 508442,
    genres: "Animation, Family, Comedy, Fantasy",
  },
  {
    backdrop_path: "/vIgyYkXkg6NC2whRbYjBD7eb3Er.jpg",
    original_language: "en",
    overview:
      "After finding a host body in investigative reporter Eddie Brock, the alien symbiote must face a new enemy, Carnage, the alter ego of serial killer Cletus Kasady.",
    poster_path:
      "https://image.tmdb.org/t/p/original//1MJNcPZy46hIy2CmSqOeru0yr5C.jpg",
    release_date: "2021-09-30",
    title: "Venom: Let There Be Carnage",
    vote_average: 6.802,
    movieId: 580489,
    genres: "Science Fiction, Action, Adventure",
  },
  {
    backdrop_path: "/puo6orN2BjQt1g4K0umVlooVff9.jpg",
    original_language: "en",
    overview:
      "Lovable Sulley and his wisecracking sidekick Mike Wazowski are the top scare team at Monsters, Inc., the scream-processing factory in Monstropolis. When a little girl named Boo wanders into their world, it's the monsters who are scared silly, and it's up to Sulley and Mike to keep her out of sight and get her back home.",
    poster_path:
      "https://image.tmdb.org/t/p/original//wFSpyMsp7H0ttERbxY7Trlv8xry.jpg",
    release_date: "2001-11-01",
    title: "Monsters, Inc.",
    vote_average: 7.844,
    movieId: 585,
    genres: "Animation, Comedy, Family",
  },
  {
    backdrop_path: "/9iRRfMZbnpgHDdKi2lczGGYZXDo.jpg",
    original_language: "en",
    overview:
      "Siblings Lucy, Edmund, Susan and Peter step through a magical wardrobe and find the land of Narnia. There, they discover a charming, once peaceful kingdom that has been plunged into eternal winter by the evil White Witch, Jadis. Aided by the wise and magnificent lion, Aslan, the children lead Narnia into a spectacular, climactic battle to be free of the Witch's glacial powers forever.",
    poster_path:
      "https://image.tmdb.org/t/p/original//iREd0rNCjYdf5Ar0vfaW32yrkm.jpg",
    release_date: "2005-12-07",
    title: "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
    vote_average: 7.136,
    movieId: 411,
    genres: "Adventure, Family, Fantasy",
  },
  {
    backdrop_path: "/kjQBrc00fB2RjHZB3PGR4w9ibpz.jpg",
    original_language: "en",
    overview:
      "Amid a future war between the human race and the forces of artificial intelligence, a hardened ex-special forces agent grieving the disappearance of his wife, is recruited to hunt down and kill the Creator, the elusive architect of advanced AI who has developed a mysterious weapon with the power to end the war—and mankind itself.",
    poster_path:
      "https://image.tmdb.org/t/p/original//vBZ0qvaRxqEhZwl6LWmruJqWE8Z.jpg",
    release_date: "2023-09-27",
    title: "The Creator",
    vote_average: 7.106,
    movieId: 670292,
    genres: "Action, Adventure, Science Fiction",
  },
  {
    backdrop_path: "/baJHUXBcoaHnMf2sjwegbuhIjEV.jpg",
    original_language: "en",
    overview:
      "In a dystopian future, Dredd, the most famous judge (a cop with instant field judiciary powers) is convicted for a crime he did not commit while his murderous counterpart escapes.",
    poster_path:
      "https://image.tmdb.org/t/p/original//cfSnKn8NDU3m8UxihjVcYprA0Aq.jpg",
    release_date: "1995-06-30",
    title: "Judge Dredd",
    vote_average: 5.801,
    movieId: 9482,
    genres: "Science Fiction",
  },
  {
    backdrop_path: "/obKmfNexgL4ZP5cAmzdL4KbHHYX.jpg",
    original_language: "en",
    overview:
      "Year three at Hogwarts means new fun and challenges as Harry learns the delicate art of approaching a Hippogriff, transforming shape-shifting Boggarts into hilarity and even turning back time. But the term also brings danger: soul-sucking Dementors hover over the school, an ally of the accursed He-Who-Cannot-Be-Named lurks within the castle walls, and fearsome wizard Sirius Black escapes Azkaban. And Harry will confront them all.",
    poster_path:
      "https://image.tmdb.org/t/p/original//aWxwnYoe8p2d2fcxOqtvAtJ72Rw.jpg",
    release_date: "2004-05-31",
    title: "Harry Potter and the Prisoner of Azkaban",
    vote_average: 8.019,
    movieId: 673,
    genres: "Adventure, Fantasy",
  },
  {
    backdrop_path: "/8wwXPG22aNMpPGuXnfm3galoxbI.jpg",
    original_language: "en",
    overview:
      "After settling in Green Hills, Sonic is eager to prove he has what it takes to be a true hero. His test comes when Dr. Robotnik returns, this time with a new partner, Knuckles, in search for an emerald that has the power to destroy civilizations. Sonic teams up with his own sidekick, Tails, and together they embark on a globe-trotting journey to find the emerald before it falls into the wrong hands.",
    poster_path:
      "https://image.tmdb.org/t/p/original//6DrHO1jr3qVrViUO6s6kFiAGM7.jpg",
    release_date: "2022-03-30",
    title: "Sonic the Hedgehog 2",
    vote_average: 7.522,
    movieId: 675353,
    genres: "Action, Adventure, Family, Comedy",
  },
  {
    backdrop_path: "/hGGC9gKo7CFE3fW07RA587e5kol.jpg",
    original_language: "en",
    overview:
      "Carl Fredricksen spent his entire life dreaming of exploring the globe and experiencing life to its fullest. But at age 78, life seems to have passed him by, until a twist of fate (and a persistent 8-year old Wilderness Explorer named Russell) gives him a new lease on life.",
    poster_path:
      "https://image.tmdb.org/t/p/original//vpbaStTMt8qqXaEgnOR2EE4DNJk.jpg",
    release_date: "2009-05-28",
    title: "Up",
    vote_average: 7.96,
    movieId: 14160,
    genres: "Animation, Comedy, Family, Adventure",
  },
  {
    backdrop_path: "/yQIBS8B9l2qXoPoPtxSXvH7CfoT.jpg",
    original_language: "en",
    overview:
      "WWII American Army Medic Desmond T. Doss, who served during the Battle of Okinawa, refuses to kill people and becomes the first Conscientious Objector in American history to receive the Congressional Medal of Honor.",
    poster_path:
      "https://image.tmdb.org/t/p/original//wuz8TjCIWR2EVVMuEfBnQ1vuGS3.jpg",
    release_date: "2016-10-07",
    title: "Hacksaw Ridge",
    vote_average: 8.196,
    movieId: 324786,
    genres: "Drama, History, War",
  },
  {
    backdrop_path: "/9BBTo63ANSmhC4e6r62OJFuK2GL.jpg",
    original_language: "en",
    overview:
      "When an unexpected enemy emerges and threatens global safety and security, Nick Fury, director of the international peacekeeping agency known as S.H.I.E.L.D., finds himself in need of a team to pull the world back from the brink of disaster. Spanning the globe, a daring recruitment effort begins!",
    poster_path:
      "https://image.tmdb.org/t/p/original//RYMX2wcKCBAr24UyPD7xwmjaTn.jpg",
    release_date: "2012-04-25",
    title: "The Avengers",
    vote_average: 7.715,
    movieId: 24428,
    genres: "Science Fiction, Action, Adventure",
  },
  {
    backdrop_path: "/cCvp5Sni75agCtyJkNOMapORUQV.jpg",
    original_language: "en",
    overview:
      "After getting a green card in exchange for assassinating a Cuban government official, Tony Montana stakes a claim on the drug trade in Miami. Viciously murdering anyone who stands in his way, Tony eventually becomes the biggest drug lord in the state, controlling nearly all the cocaine that comes through Miami. But increased pressure from the police, wars with Colombian drug cartels and his own drug-fueled paranoia serve to fuel the flames of his eventual downfall.",
    poster_path:
      "https://image.tmdb.org/t/p/original//iQ5ztdjvteGeboxtmRdXEChJOHh.jpg",
    release_date: "1983-12-09",
    title: "Scarface",
    vote_average: 8.17,
    movieId: 111,
    genres: "Action, Crime, Drama",
  },
  {
    backdrop_path: "/kK5OeulwVDniPgjNOGHvzcORzdG.jpg",
    original_language: "en",
    overview:
      "With the impending ice age almost upon them, a mismatched trio of prehistoric critters – Manny the woolly mammoth, Diego the saber-toothed tiger and Sid the giant sloth – find an orphaned infant and decide to return it to its human parents. Along the way, the unlikely allies become friends but, when enemies attack, their quest takes on far nobler aims.",
    poster_path:
      "https://image.tmdb.org/t/p/original//gLhHHZUzeseRXShoDyC4VqLgsNv.jpg",
    release_date: "2002-03-10",
    title: "Ice Age",
    vote_average: 7.362,
    movieId: 425,
    genres: "Animation, Comedy, Family, Adventure",
  },
  {
    backdrop_path: "/fI6X3Hd8KvtAuOKVdmxckdNzrx.jpg",
    original_language: "ko",
    overview:
      "After barely surviving a violent attack by an elusive serial killer, crime boss Jang Dong-su finds himself forming an unlikely partnership with local detective Jung Tae-seok to catch the sadistic killer simply known as K.",
    poster_path:
      "https://image.tmdb.org/t/p/original//oHlM4abRm6BzrRcz9Nup1uidw9H.jpg",
    release_date: "2019-05-15",
    title: "The Gangster, the Cop, the Devil",
    vote_average: 7.793,
    movieId: 581528,
    genres: "Crime, Action, Thriller",
  },
  {
    backdrop_path: "/auXrHU6O17n9Tz11SHReoorjrU6.jpg",
    original_language: "en",
    overview:
      "Jaded 74-year-old lizard Leo has been stuck in the same Florida classroom for decades with his terrarium-mate turtle. When he learns he only has one year left to live, he plans to escape to experience life on the outside but instead gets caught up in the problems of his anxious students — including an impossibly mean substitute teacher.",
    poster_path:
      "https://image.tmdb.org/t/p/original//pD6sL4vntUOXHmuvJPPZAgvyfd9.jpg",
    release_date: "2023-11-17",
    title: "Leo",
    vote_average: 7.483,
    movieId: 1075794,
    genres: "Animation, Comedy, Family",
  },
  {
    backdrop_path: "/cWczNud8Y8i8ab0Z4bxos4myWYO.jpg",
    original_language: "en",
    overview:
      "When the kingdom's most wanted-and most charming-bandit Flynn Rider hides out in a mysterious tower, he's taken hostage by Rapunzel, a beautiful and feisty tower-bound teen with 70 feet of magical, golden hair. Flynn's curious captor, who's looking for her ticket out of the tower where she's been locked away for years, strikes a deal with the handsome thief and the unlikely duo sets off on an action-packed escapade, complete with a super-cop horse, an over-protective chameleon and a gruff gang of pub thugs.",
    poster_path:
      "https://image.tmdb.org/t/p/original//ym7Kst6a4uodryxqbGOxmewF235.jpg",
    release_date: "2010-11-24",
    title: "Tangled",
    vote_average: 7.607,
    movieId: 38757,
    genres: "Animation, Family",
  },
  {
    backdrop_path: "/4f0Kj0QwPui5ydu1UavsnvP1m1o.jpg",
    original_language: "en",
    overview:
      "Charlie Kenton is a washed-up fighter who retired from the ring when robots took over the sport. After his robot is trashed, he reluctantly teams up with his estranged son to rebuild and train an unlikely contender.",
    poster_path:
      "https://image.tmdb.org/t/p/original//4GIeI5K5YdDUkR3mNQBoScpSFEf.jpg",
    release_date: "2011-09-28",
    title: "Real Steel",
    vote_average: 7.011,
    movieId: 39254,
    genres: "Action, Science Fiction, Drama",
  },
  {
    backdrop_path: "/70AV2Xx5FQYj20labp0EGdbjI6E.jpg",
    original_language: "en",
    overview:
      "A cold and mysterious new security guard for a Los Angeles cash truck company surprises his co-workers when he unleashes precision skills during a heist. The crew is left wondering who he is and where he came from. Soon, the marksman's ultimate motive becomes clear as he takes dramatic and irrevocable steps to settle a score.",
    poster_path:
      "https://image.tmdb.org/t/p/original//M7SUK85sKjaStg4TKhlAVyGlz3.jpg",
    release_date: "2021-04-22",
    title: "Wrath of Man",
    vote_average: 7.642,
    movieId: 637649,
    genres: "Action, Crime, Thriller",
  },
  {
    backdrop_path: "/fgsHxz21B27hOOqQBiw9L6yWcM7.jpg",
    original_language: "en",
    overview:
      "A priest with a haunted past and a novice on the threshold of her final vows are sent by the Vatican to investigate the death of a young nun in Romania and confront a malevolent force in the form of a demonic nun.",
    poster_path:
      "https://image.tmdb.org/t/p/original//sFC1ElvoKGdHJIWRpNB3xWJ9lJA.jpg",
    release_date: "2018-09-05",
    title: "The Nun",
    vote_average: 5.894,
    movieId: 439079,
    genres: "Horror",
  },
  {
    backdrop_path: "/hZkgoQYus5vegHoetLkCJzb17zJ.jpg",
    original_language: "en",
    overview:
      'A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground "fight clubs" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.',
    poster_path:
      "https://image.tmdb.org/t/p/original//pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
    release_date: "1999-10-15",
    title: "Fight Club",
    vote_average: 8.44,
    movieId: 550,
    genres: "Drama",
  },
  {
    backdrop_path: "/zNnjHLDtV8Ti3aworltaeaLMov4.jpg",
    original_language: "en",
    overview:
      "In the midst of trying to legitimize his business dealings in 1979 New York and Italy, aging mafia don, Michael Corleone seeks forgiveness for his sins while taking a young protege under his wing.",
    poster_path:
      "https://image.tmdb.org/t/p/original//lm3pQ2QoQ16pextRsmnUbG2onES.jpg",
    release_date: "1990-12-25",
    title: "The Godfather Part III",
    vote_average: 7.43,
    movieId: 242,
    genres: "Crime, Drama, Thriller",
  },
  {
    backdrop_path: "/5rrGVmRUuCKVbqUu41XIWTXJmNA.jpg",
    original_language: "en",
    overview:
      "When Harry Potter's name emerges from the Goblet of Fire, he becomes a competitor in a grueling battle for glory among three wizarding schools—the Triwizard Tournament. But since Harry never submitted his name for the Tournament, who did? Now Harry must confront a deadly dragon, fierce water demons and an enchanted maze only to find himself in the cruel grasp of He Who Must Not Be Named.",
    poster_path:
      "https://image.tmdb.org/t/p/original//fECBtHlr0RB3foNHDiCBXeg9Bv9.jpg",
    release_date: "2005-11-16",
    title: "Harry Potter and the Goblet of Fire",
    vote_average: 7.8,
    movieId: 674,
    genres: "Adventure, Fantasy",
  },
  {
    backdrop_path: "/yHzyPJrVqlTySQ9mc379yxrLBYQ.jpg",
    original_language: "en",
    overview:
      "Cars fly, trees fight back, and a mysterious house-elf comes to warn Harry Potter at the start of his second year at Hogwarts. Adventure and danger await when bloody writing on a wall announces: The Chamber Of Secrets Has Been Opened. To save Hogwarts will require all of Harry, Ron and Hermione’s magical abilities and courage.",
    poster_path:
      "https://image.tmdb.org/t/p/original//sdEOH0992YZ0QSxgXNIGLq1ToUi.jpg",
    release_date: "2002-11-13",
    title: "Harry Potter and the Chamber of Secrets",
    vote_average: 7.721,
    movieId: 672,
    genres: "Adventure, Fantasy",
  },
  {
    backdrop_path: "/zfbjgQE1uSd9wiPTX4VzsLi0rGG.jpg",
    original_language: "en",
    overview:
      "Imprisoned in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.",
    poster_path:
      "https://image.tmdb.org/t/p/original//9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg",
    release_date: "1994-09-23",
    title: "The Shawshank Redemption",
    vote_average: 8.705,
    movieId: 278,
    genres: "Drama, Crime",
  },
  {
    backdrop_path: "/8moTOzunF7p40oR5XhlDvJckOSW.jpg",
    original_language: "en",
    overview:
      "27 years after overcoming the malevolent supernatural entity Pennywise, the former members of the Losers' Club, who have grown up and moved away from Derry, are brought back together by a devastating phone call.",
    poster_path:
      "https://image.tmdb.org/t/p/original//zfE0R94v1E8cuKAerbskfD3VfUt.jpg",
    release_date: "2019-09-04",
    title: "It Chapter Two",
    vote_average: 6.845,
    movieId: 474350,
    genres: "Horror",
  },
  {
    backdrop_path: "/5fxTB08O7CW1hAcN2MWOKodp1h1.jpg",
    original_language: "en",
    overview:
      "A tale of outsized ambition and outrageous excess, tracing the rise and fall of multiple characters in an era of unbridled decadence and depravity during Hollywood's transition from silent films to sound films in the late 1920s.",
    poster_path:
      "https://image.tmdb.org/t/p/original//wjOHjWCUE0YzDiEzKv8AfqHj3ir.jpg",
    release_date: "2022-12-22",
    title: "Babylon",
    vote_average: 7.409,
    movieId: 615777,
    genres: "Drama, Comedy",
  },
  {
    backdrop_path: "/xzdOIL7261CWehsHOk3lnP0xqam.jpg",
    original_language: "en",
    overview:
      "Recent college grad Jaime Reyes returns home full of aspirations for his future, only to find that home is not quite as he left it. As he searches to find his purpose in the world, fate intervenes when Jaime unexpectedly finds himself in possession of an ancient relic of alien biotechnology: the Scarab.",
    poster_path:
      "https://image.tmdb.org/t/p/original//mXLOHHc1Zeuwsl4xYKjKh2280oL.jpg",
    release_date: "2023-08-16",
    title: "Blue Beetle",
    vote_average: 6.781,
    movieId: 565770,
    genres: "Action, Science Fiction, Adventure",
  },
  {
    backdrop_path: "/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg",
    original_language: "en",
    overview:
      "Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.",
    poster_path:
      "https://image.tmdb.org/t/p/original//sv1xJUazXeYqALzczSZ3O6nkH75.jpg",
    release_date: "2022-11-09",
    title: "Black Panther: Wakanda Forever",
    vote_average: 7.121,
    movieId: 505642,
    genres: "Action, Adventure, Science Fiction",
  },
  {
    backdrop_path: "/xGzoTqbOlCR4mAzeRs4PB53i8c7.jpg",
    original_language: "en",
    overview:
      "A small town girl is caught between dead-end jobs. A high-profile, successful man becomes wheelchair bound following an accident. The man decides his life is not worth living until the girl is hired for six months to be his new caretaker. Worlds apart and trapped together by circumstance, the two get off to a rocky start. But the girl becomes determined to prove to the man that life is worth living and as they embark on a series of adventures together, each finds their world changing in ways neither of them could begin to imagine.",
    poster_path:
      "https://image.tmdb.org/t/p/original//Ia3dzj5LnCj1ZBdlVeJrbKJQxG.jpg",
    release_date: "2016-06-01",
    title: "Me Before You",
    vote_average: 7.927,
    movieId: 296096,
    genres: "Drama, Romance",
  },
  {
    backdrop_path: "/eHMh7kChaNeD4VTdMCXLJbRTzcI.jpg",
    original_language: "en",
    overview:
      "An epic that details the checkered rise and fall of French Emperor Napoleon Bonaparte and his relentless journey to power through the prism of his addictive, volatile relationship with his wife, Josephine.",
    poster_path:
      "https://image.tmdb.org/t/p/original//vcZWJGvB5xydWuUO1vaTLI82tGi.jpg",
    release_date: "2023-11-22",
    title: "Napoleon",
    vote_average: 6.435,
    movieId: 753342,
    genres: "History, War, Romance",
  },
  {
    backdrop_path: "/4QLdZ2A8mkDWp2rpfgDrwmeCtUW.jpg",
    original_language: "en",
    overview:
      "Extreme athlete turned government operative Xander Cage comes out of self-imposed exile, thought to be long dead, and is set on a collision course with deadly alpha warrior Xiang and his team in a race to recover a sinister and seemingly unstoppable weapon known as Pandora's Box. Recruiting an all-new group of thrill-seeking cohorts, Xander finds himself enmeshed in a deadly conspiracy that points to collusion at the highest levels of world governments.",
    poster_path:
      "https://image.tmdb.org/t/p/original//hba8zREJpP1AYhaXgb2oJLQeO0K.jpg",
    release_date: "2017-01-13",
    title: "xXx: Return of Xander Cage",
    vote_average: 6.131,
    movieId: 47971,
    genres: "Action, Adventure, Crime",
  },
  {
    backdrop_path: "/tcheoA2nPATCm2vvXw2hVQoaEFD.jpg",
    original_language: "en",
    overview:
      "In a small town in Maine, seven children known as The Losers Club come face to face with life problems, bullies and a monster that takes the shape of a clown called Pennywise.",
    poster_path:
      "https://image.tmdb.org/t/p/original//9E2y5Q7WlCVNEhP5GiVTjhEhx1o.jpg",
    release_date: "2017-09-06",
    title: "It",
    vote_average: 7.239,
    movieId: 346364,
    genres: "Horror",
  },
  {
    backdrop_path: "/eCynaAOgYYiw5yN5lBwz3IxqvaW.jpg",
    original_language: "en",
    overview:
      "Nemo, an adventurous young clownfish, is unexpectedly taken from his Great Barrier Reef home to a dentist's office aquarium. It's up to his worrisome father Marlin and a friendly but forgetful fish Dory to bring Nemo home -- meeting vegetarian sharks, surfer dude turtles, hypnotic jellyfish, hungry seagulls, and more along the way.",
    poster_path:
      "https://image.tmdb.org/t/p/original//eHuGQ10FUzK1mdOY69wF5pGgEf5.jpg",
    release_date: "2003-05-30",
    title: "Finding Nemo",
    vote_average: 7.822,
    movieId: 12,
    genres: "Animation, Family",
  },
  {
    backdrop_path: "/698FjyzLdpgXmUSr63LaRwblTmx.jpg",
    original_language: "en",
    overview:
      "Four years after Isla Nublar was destroyed, dinosaurs now live—and hunt—alongside humans all over the world. This fragile balance will reshape the future and determine, once and for all, whether human beings are to remain the apex predators ona planet they now share with history's most fearsome creatures.",
    poster_path:
      "https://image.tmdb.org/t/p/original//kAVRgw7GgK1CfYEJq8ME6EvRIgU.jpg",
    release_date: "2022-06-01",
    title: "Jurassic World Dominion",
    vote_average: 6.714,
    movieId: 507086,
    genres: "Adventure, Action, Science Fiction",
  },
  {
    backdrop_path: "/ftRkFtAGuHngHnLiOxktq0aCVMF.jpg",
    original_language: "en",
    overview:
      "Gru and his wife Lucy must stop former '80s child star Balthazar Bratt from achieving world domination.",
    poster_path:
      "https://image.tmdb.org/t/p/original//6t3YWl7hrr88lCEFlGVqW5yV99R.jpg",
    release_date: "2017-06-15",
    title: "Despicable Me 3",
    vote_average: 6.463,
    movieId: 324852,
    genres: "Action, Animation, Comedy, Family, Adventure",
  },
  {
    backdrop_path: "/d6UxFCGQxpszcf8mwgGjQ3ynqGl.jpg",
    original_language: "en",
    overview:
      "The true story of Henry Hill, a half-Irish, half-Sicilian Brooklyn kid who is adopted by neighbourhood gangsters at an early age and climbs the ranks of a Mafia family under the guidance of Jimmy Conway.",
    poster_path:
      "https://image.tmdb.org/t/p/original//aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg",
    release_date: "1990-09-12",
    title: "GoodFellas",
    vote_average: 8.463,
    movieId: 769,
    genres: "Drama, Crime",
  },
  {
    backdrop_path: "/vv5a8u6e40kyH0Hp6HuamAgzRai.jpg",
    original_language: "en",
    overview:
      "Captain Jack Sparrow works his way out of a blood debt with the ghostly Davy Jones to avoid eternal damnation.",
    poster_path:
      "https://image.tmdb.org/t/p/original//uXEqmloGyP7UXAiphJUu2v2pcuE.jpg",
    release_date: "2006-07-06",
    title: "Pirates of the Caribbean: Dead Man's Chest",
    vote_average: 7.358,
    movieId: 58,
    genres: "Adventure, Fantasy, Action",
  },
  {
    backdrop_path: "/2tE0A6WjLowwQOUY8se1Xlf3O6U.jpg",
    original_language: "en",
    overview:
      "Two Jesuit priests travel to seventeenth century Japan which has, under the Tokugawa shogunate, banned Catholicism and almost all foreign contact.",
    poster_path:
      "https://image.tmdb.org/t/p/original//x5T0cQDYws0xRBVG4Q3wpcrcmax.jpg",
    release_date: "2016-12-22",
    title: "Silence",
    vote_average: 7.1,
    movieId: 68730,
    genres: "Drama, History",
  },
  {
    backdrop_path: "/xgDj56UWyeWQcxQ44f5A3RTWuSs.jpg",
    original_language: "en",
    overview:
      "Remy, a resident of Paris, appreciates good food and has quite a sophisticated palate. He would love to become a chef so he can create and enjoy culinary masterpieces to his heart's delight. The only problem is, Remy is a rat. When he winds up in the sewer beneath one of Paris' finest restaurants, the rodent gourmet finds himself ideally placed to realize his dream.",
    poster_path:
      "https://image.tmdb.org/t/p/original//t3vaWRPSf6WjDSamIkKDs1iQWna.jpg",
    release_date: "2007-06-21",
    title: "Ratatouille",
    vote_average: 7.8,
    movieId: 2062,
    genres: "Animation, Comedy, Family, Fantasy",
  },
  {
    backdrop_path: "/n5A7brJCjejceZmHyujwUTVgQNC.jpg",
    original_language: "en",
    overview:
      "Harry, Ron and Hermione continue their quest to vanquish the evil Voldemort once and for all. Just as things begin to look hopeless for the young wizards, Harry discovers a trio of magical objects that endow him with powers to rival Voldemort's formidable skills.",
    poster_path:
      "https://image.tmdb.org/t/p/original//c54HpQmuwXjHq2C9wmoACjxoom3.jpg",
    release_date: "2011-07-12",
    title: "Harry Potter and the Deathly Hallows: Part 2",
    vote_average: 8.1,
    movieId: 12445,
    genres: "Fantasy, Adventure",
  },
  {
    backdrop_path: "/jsoz1HlxczSuTx0mDl2h0lxy36l.jpg",
    original_language: "en",
    overview:
      "After his retirement is interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods, Thor Odinson enlists the help of King Valkyrie, Korg, and ex-girlfriend Jane Foster, who now wields Mjolnir as the Mighty Thor. Together they embark upon a harrowing cosmic adventure to uncover the mystery of the God Butcher’s vengeance and stop him before it’s too late.",
    poster_path:
      "https://image.tmdb.org/t/p/original//pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg",
    release_date: "2022-07-06",
    title: "Thor: Love and Thunder",
    vote_average: 6.462,
    movieId: 616037,
    genres: "Fantasy, Action, Comedy",
  },
  {
    backdrop_path: "/3RkYyseo8OduQpdndyPPCMiJfuC.jpg",
    original_language: "en",
    overview:
      "Immediately after their miscarriage, the US diplomat Robert Thorn adopts the newborn Damien without the knowledge of his wife. Yet what he doesn’t know is that their new son is the son of the devil.",
    poster_path:
      "https://image.tmdb.org/t/p/original//p0LcWxOIoBx0MEZMn8tFcrvDXR1.jpg",
    release_date: "1976-06-25",
    title: "The Omen",
    vote_average: 7.406,
    movieId: 794,
    genres: "Horror, Thriller",
  },
  {
    backdrop_path: "/bVmSXNgH1gpHYTDyF9Q826YwJT5.jpg",
    original_language: "en",
    overview:
      "Immediately after the events of The Desolation of Smaug, Bilbo and the dwarves try to defend Erebor's mountain of treasure from others who claim it: the men of the ruined Laketown and the elves of Mirkwood. Meanwhile an army of Orcs led by Azog the Defiler is marching on Erebor, fueled by the rise of the dark lord Sauron. Dwarves, elves and men must unite, and the hope for Middle-Earth falls into Bilbo's hands.",
    poster_path:
      "https://image.tmdb.org/t/p/original//xT98tLqatZPQApyRmlPL12LtiWp.jpg",
    release_date: "2014-12-10",
    title: "The Hobbit: The Battle of the Five Armies",
    vote_average: 7.319,
    movieId: 122917,
    genres: "Action, Adventure, Fantasy",
  },
  {
    backdrop_path: "/qi6Edc1OPcyENecGtz8TF0DUr9e.jpg",
    original_language: "en",
    overview:
      "Paranormal investigators Ed and Lorraine Warren encounter what would become one of the most sensational cases from their files. The fight for the soul of a young boy takes them beyond anything they'd ever seen before, to mark the first time in U.S. history that a murder suspect would claim demonic possession as a defense.",
    poster_path:
      "https://image.tmdb.org/t/p/original//xbSuFiJbbBWCkyCCKIMfuDCA4yV.jpg",
    release_date: "2021-05-25",
    title: "The Conjuring: The Devil Made Me Do It",
    vote_average: 7.447,
    movieId: 423108,
    genres: "Horror, Mystery, Thriller",
  },
  {
    backdrop_path: "/ulMscezy9YX0bhknvJbZoUgQxO5.jpg",
    original_language: "en",
    overview:
      "Caesar and his apes are forced into a deadly conflict with an army of humans led by a ruthless Colonel. After the apes suffer unimaginable losses, Caesar wrestles with his darker instincts and begins his own mythic quest to avenge his kind. As the journey finally brings them face to face, Caesar and the Colonel are pitted against each other in an epic battle that will determine the fate of both their species and the future of the planet.",
    poster_path:
      "https://image.tmdb.org/t/p/original//mMA1qhBFgZX8O36qPPTC016kQl1.jpg",
    release_date: "2017-07-11",
    title: "War for the Planet of the Apes",
    vote_average: 7.198,
    movieId: 281338,
    genres: "Drama, Science Fiction, War",
  },
  {
    backdrop_path: "/9vAoubhoZE8aSkUZoSfxs3UWZhO.jpg",
    original_language: "en",
    overview:
      "McCall believes he has put his mysterious past behind him and dedicated himself to beginning a new, quiet life. But when he meets Teri, a young girl under the control of ultra-violent Russian gangsters, he can’t stand idly by – he has to help her. Armed with hidden skills that allow him to serve vengeance against anyone who would brutalize the helpless, McCall comes out of his self-imposed retirement and finds his desire for justice reawakened. If someone has a problem, if the odds are stacked against them, if they have nowhere else to turn, McCall will help. He is The Equalizer.",
    poster_path:
      "https://image.tmdb.org/t/p/original//9u4yW7yPA0BQ2pv9XwiNzItwvp8.jpg",
    release_date: "2014-09-24",
    title: "The Equalizer",
    vote_average: 7.273,
    movieId: 156022,
    genres: "Thriller, Action, Crime",
  },
  {
    backdrop_path: "/uI22JkEMediWyiRqhllNqeeGtW0.jpg",
    original_language: "en",
    overview:
      "Obsessive master thief Neil McCauley leads a top-notch crew on various daring heists throughout Los Angeles while determined detective Vincent Hanna pursues him without rest. Each man recognizes and respects the ability and the dedication of the other even though they are aware their cat-and-mouse game may end in violence.",
    poster_path:
      "https://image.tmdb.org/t/p/original//umSVjVdbVwtx5ryCA2QXL44Durm.jpg",
    release_date: "1995-12-15",
    title: "Heat",
    vote_average: 7.9,
    movieId: 949,
    genres: "Action, Crime, Drama",
  },
  {
    backdrop_path: "/yir5430WblZSZuIMd9C6pIZerfA.jpg",
    original_language: "en",
    overview:
      "After being coerced into working for a crime boss, a young getaway driver finds himself taking part in a heist doomed to fail.",
    poster_path:
      "https://image.tmdb.org/t/p/original//rmnQ9jKW72bHu8uKlMjPIb2VLMI.jpg",
    release_date: "2017-06-28",
    title: "Baby Driver",
    vote_average: 7.452,
    movieId: 339403,
    genres: "Action, Crime",
  },
  {
    backdrop_path: "/xFYpUmB01nswPgbzi8EOCT1ZYFu.jpg",
    original_language: "en",
    overview:
      "The ultimate wish-fulfillment tale of a teenage Gran Turismo player whose gaming skills won him a series of Nissan competitions to become an actual professional racecar driver.",
    poster_path:
      "https://image.tmdb.org/t/p/original//51tqzRtKMMZEYUpSYkrUE7v9ehm.jpg",
    release_date: "2023-08-09",
    title: "Gran Turismo",
    vote_average: 7.845,
    movieId: 980489,
    genres: "Adventure, Action, Drama",
  },
  {
    backdrop_path: "/uQqQvmptJLPTcWDrZXn22p7j7s3.jpg",
    original_language: "en",
    overview:
      "A mild-mannered father is transformed into a killing machine after his family is torn apart by a violent act.",
    poster_path:
      "https://image.tmdb.org/t/p/original//g0eEEZAqMf98ULQnoiORuazjOpn.jpg",
    release_date: "2018-03-02",
    title: "Death Wish",
    vote_average: 6.165,
    movieId: 395990,
    genres: "Action, Crime, Drama, Thriller",
  },
  {
    backdrop_path: "/jEuwsmFS8JPzkDIhRL3B2BVYbU4.jpg",
    original_language: "en",
    overview:
      "Max Rockatansky returns as the heroic loner who drives the dusty roads of a postapocalyptic Australian Outback in an unending search for gasoline. Arrayed against him and the other scraggly defendants of a fuel-depot encampment are the bizarre warriors commanded by the charismatic Lord Humungus, a violent leader whose scruples are as barren as the surrounding landscape.",
    poster_path:
      "https://image.tmdb.org/t/p/original//dhVekfpaCW3QavAwGYbaQig87Xc.jpg",
    release_date: "1981-12-24",
    title: "Mad Max 2",
    vote_average: 7.391,
    movieId: 8810,
    genres: "Adventure, Action, Thriller, Science Fiction",
  },
  {
    backdrop_path: "/mSy1Ytpvuy05aTNJJ0pPRtdMG85.jpg",
    original_language: "en",
    overview:
      "Mad Max becomes a pawn in a decadent oasis of a technological society, and when exiled, becomes the deliverer of a colony of children.",
    poster_path:
      "https://image.tmdb.org/t/p/original//jJlxcEVVUHnrUeEkQ0077VeHQpb.jpg",
    release_date: "1985-06-29",
    title: "Mad Max Beyond Thunderdome",
    vote_average: 6.209,
    movieId: 9355,
    genres: "Action, Adventure, Science Fiction",
  },
  {
    backdrop_path: "/g4a5YLWwi6OCp8TcvxsUNrXMbN5.jpg",
    original_language: "en",
    overview:
      "The year is 2029. John Connor, leader of the resistance continues the war against the machines. At the Los Angeles offensive, John's fears of the unknown future begin to emerge when TECOM spies reveal a new plot by SkyNet that will attack him from both fronts; past and future, and will ultimately change warfare forever.",
    poster_path:
      "https://image.tmdb.org/t/p/original//oZRVDpNtmHk8M1VYy1aeOWUXgbC.jpg",
    release_date: "2015-06-23",
    title: "Terminator Genisys",
    vote_average: 5.941,
    movieId: 87101,
    genres: "Science Fiction, Action, Thriller, Adventure",
  },
  {
    backdrop_path: "/7jaNOECZG8uS1tlq69HsY5xY8P9.jpg",
    original_language: "en",
    overview:
      "When U.S. Rangers and an elite Delta Force team attempt to kidnap two underlings of a Somali warlord, their Black Hawk helicopters are shot down, and the Americans suffer heavy casualties, facing intense fighting from the militia on the ground.",
    poster_path:
      "https://image.tmdb.org/t/p/original//7fU5dSqKRL4XHeEUz62rCKBfYok.jpg",
    release_date: "2001-12-28",
    title: "Black Hawk Down",
    vote_average: 7.378,
    movieId: 855,
    genres: "Action, War, History",
  },
  {
    backdrop_path: "/zEddiBK6yZNUGVnmBJzmnYcEWiR.jpg",
    original_language: "fr",
    overview:
      "A woman with a metal plate in her head from a childhood car accident embarks on a bizarre journey, bringing her into contact with a firefighter who's reunited with his missing son after 10 years.",
    poster_path:
      "https://image.tmdb.org/t/p/original//9QuUN55NWufqC2jst0JSPQ2gla9.jpg",
    release_date: "2021-07-14",
    title: "Titane",
    vote_average: 6.405,
    movieId: 630240,
    genres: "Drama, Thriller, Horror",
  },
  {
    backdrop_path: "/d3Y9L11tgnYIKhAaRWfbaKGCjcM.jpg",
    original_language: "en",
    overview:
      "Trying to reverse a family curse, brothers Jimmy and Clyde Logan set out to execute an elaborate robbery during the legendary Coca-Cola 600 race at the Charlotte Motor Speedway.",
    poster_path:
      "https://image.tmdb.org/t/p/original//mQrhrBaaHvRfBQq0Px3HtVbH9iE.jpg",
    release_date: "2017-08-17",
    title: "Logan Lucky",
    vote_average: 6.727,
    movieId: 399170,
    genres: "Comedy, Crime, Action, Drama",
  },
  {
    backdrop_path: "/o8dPH0ZSIyyViP6rjRX1djwCUwI.jpg",
    original_language: "en",
    overview:
      "Chris and his girlfriend Rose go upstate to visit her parents for the weekend. At first, Chris reads the family's overly accommodating behavior as nervous attempts to deal with their daughter's interracial relationship, but as the weekend progresses, a series of increasingly disturbing discoveries lead him to a truth that he never could have imagined.",
    poster_path:
      "https://image.tmdb.org/t/p/original//mE24wUCfjK8AoBBjaMjho7Rczr7.jpg",
    release_date: "2017-02-24",
    title: "Get Out",
    vote_average: 7.622,
    movieId: 419430,
    genres: "Mystery, Thriller, Horror",
  },
  {
    backdrop_path: "/620hnMVLu6RSZW6a5rwO8gqpt0t.jpg",
    original_language: "en",
    overview:
      "Luca and his best friend Alberto experience an unforgettable summer on the Italian Riviera. But all the fun is threatened by a deeply-held secret: they are sea monsters from another world just below the water’s surface.",
    poster_path:
      "https://image.tmdb.org/t/p/original//jTswp6KyDYKtvC52GbHagrZbGvD.jpg",
    release_date: "2021-06-17",
    title: "Luca",
    vote_average: 7.829,
    movieId: 508943,
    genres: "Animation, Comedy, Fantasy, Adventure, Family",
  },
  {
    backdrop_path: "/bpV8wn48s82au37QyUJ51S7X2Vf.jpg",
    original_language: "en",
    overview:
      "When professors discover that an aimless janitor is also a math genius, a therapist helps the young man confront the demons that are holding him back.",
    poster_path:
      "https://image.tmdb.org/t/p/original//bABCBKYBK7A5G1x0FzoeoNfuj2.jpg",
    release_date: "1997-12-05",
    title: "Good Will Hunting",
    vote_average: 8.154,
    movieId: 489,
    genres: "Drama",
  },
  {
    backdrop_path: "/ruziOM4OlILvyrOdChvvFqy4Ggw.jpg",
    original_language: "en",
    overview:
      "In the 22nd century, a paraplegic Marine is dispatched to the moon Pandora on a unique mission, but becomes torn between following orders and protecting an alien civilization.",
    poster_path:
      "https://image.tmdb.org/t/p/original//kyeqWdyUXW608qlYkRqosgbbJyK.jpg",
    release_date: "2009-12-15",
    title: "Avatar",
    vote_average: 7.582,
    movieId: 19995,
    genres: "Action, Adventure, Fantasy, Science Fiction",
  },
  {
    backdrop_path: "/dqK9Hag1054tghRQSqLSfrkvQnA.jpg",
    original_language: "en",
    overview:
      "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.",
    poster_path:
      "https://image.tmdb.org/t/p/original//qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    release_date: "2008-07-16",
    title: "The Dark Knight",
    vote_average: 8.516,
    movieId: 155,
    genres: "Drama, Action, Crime, Thriller",
  },
  {
    backdrop_path: "/r5xT55Era1XrpAq6XNsrPpozNjM.jpg",
    original_language: "en",
    overview:
      "As Lord Voldemort tightens his grip on both the Muggle and wizarding worlds, Hogwarts is no longer a safe haven. Harry suspects perils may even lie within the castle, but Dumbledore is more intent upon preparing him for the final battle fast approaching. Together they work to find the key to unlock Voldemorts defenses and to this end, Dumbledore recruits his old friend and colleague Horace Slughorn, whom he believes holds crucial information. Even as the decisive showdown looms, romance blossoms for Harry, Ron, Hermione and their classmates. Love is in the air, but danger lies ahead and Hogwarts may never be the same again.",
    poster_path:
      "https://image.tmdb.org/t/p/original//z7uo9zmQdQwU5ZJHFpv2Upl30i1.jpg",
    release_date: "2009-07-15",
    title: "Harry Potter and the Half-Blood Prince",
    vote_average: 7.7,
    movieId: 767,
    genres: "Adventure, Fantasy",
  },
  {
    backdrop_path: "/iiXliCeykkzmJ0Eg9RYJ7F2CWSz.jpg",
    original_language: "en",
    overview:
      "When a mysterious caller puts a bomb under his car seat, Matt Turner begins a high-speed chase across the city to complete a specific series of tasks- all with his kids trapped in the back seat.",
    poster_path:
      "https://image.tmdb.org/t/p/original//oUmmY7QWWn7OhKlcPOnirHJpP1F.jpg",
    release_date: "2023-08-23",
    title: "Retribution",
    vote_average: 6.721,
    movieId: 762430,
    genres: "Thriller",
  },
  {
    backdrop_path: "/mgY8An5qVCgLh97KOWeJVJarskL.jpg",
    original_language: "en",
    overview:
      "When college senior Anastasia Steele steps in for her sick roommate to interview prominent businessman Christian Grey for their campus paper, little does she realize the path her life will take. Christian, as enigmatic as he is rich and powerful, finds himself strangely drawn to Ana, and she to him. Though sexually inexperienced, Ana plunges headlong into an affair -- and learns that Christian's true sexual proclivities push the boundaries of pain and pleasure.",
    poster_path:
      "https://image.tmdb.org/t/p/original//63kGofUkt1Mx0SIL4XI4Z5AoSgt.jpg",
    release_date: "2015-02-11",
    title: "Fifty Shades of Grey",
    vote_average: 5.884,
    movieId: 216015,
    genres: "Drama, Romance, Thriller",
  },
  {
    backdrop_path: "/3ZWii9hKDsiA5LLZ3fy1o6RwHnA.jpg",
    original_language: "en",
    overview:
      "Lorraine and Ed Warren travel to north London to help a single mother raising four children alone in a house plagued by malicious spirits.",
    poster_path:
      "https://image.tmdb.org/t/p/original//zEqyD0SBt6HL7W9JQoWwtd5Do1T.jpg",
    release_date: "2016-06-08",
    title: "The Conjuring 2",
    vote_average: 7.293,
    movieId: 259693,
    genres: "Horror",
  },
  {
    backdrop_path: "/m4vNXgy0EfvOSSXMWJC6FfMSyIR.jpg",
    original_language: "en",
    overview:
      "When an unsuspecting town newcomer is drawn to local blood fiends, the Frog brothers and other unlikely heroes gear up to rescue him.",
    poster_path:
      "https://image.tmdb.org/t/p/original//nH1lvyQvfbL5GKScTtT6zkIvDEn.jpg",
    release_date: "1987-07-31",
    title: "The Lost Boys",
    vote_average: 7.073,
    movieId: 1547,
    genres: "Horror, Comedy, Thriller",
  },
  {
    backdrop_path: "/luN8SoFuDxxXitmFItkL435BSzk.jpg",
    original_language: "pl",
    overview:
      "Laura and Massimo's relationship hangs in the balance as they try to overcome trust issues while a tenacious Nacho works to push them apart.",
    poster_path:
      "https://image.tmdb.org/t/p/original//6FsGeIp7heHm5eh4tIxTzHIRxmt.jpg",
    release_date: "2022-08-19",
    title: "The Next 365 Days",
    vote_average: 6.425,
    movieId: 829560,
    genres: "Romance, Drama",
  },
  {
    backdrop_path: "/AqLcLsGGTzAjm3pCCq0CZCQrp6m.jpg",
    original_language: "en",
    overview:
      "Harry, Ron and Hermione walk away from their last year at Hogwarts to find and destroy the remaining Horcruxes, putting an end to Voldemort's bid for immortality. But with Harry's beloved Dumbledore dead and Voldemort's unscrupulous Death Eaters on the loose, the world is more dangerous than ever.",
    poster_path:
      "https://image.tmdb.org/t/p/original//iGoXIpQb7Pot00EEdwpwPajheZ5.jpg",
    release_date: "2010-11-17",
    title: "Harry Potter and the Deathly Hallows: Part 1",
    vote_average: 7.8,
    movieId: 12444,
    genres: "Adventure, Fantasy",
  },
  {
    backdrop_path: "/1TUg5pO1VZ4B0Q1amk3OlXvlpXV.jpg",
    original_language: "en",
    overview:
      "Simba idolizes his father, King Mufasa, and takes to heart his own royal destiny. But not everyone in the kingdom celebrates the new cub's arrival. Scar, Mufasa's brother—and former heir to the throne—has plans of his own. The battle for Pride Rock is ravaged with betrayal, tragedy and drama, ultimately resulting in Simba's exile. With help from a curious pair of newfound friends, Simba will have to figure out how to grow up and take back what is rightfully his.",
    poster_path:
      "https://image.tmdb.org/t/p/original//dzBtMocZuJbjLOXvrl4zGYigDzh.jpg",
    release_date: "2019-07-12",
    title: "The Lion King",
    vote_average: 7.115,
    movieId: 420818,
    genres: "Adventure, Drama, Family",
  },
  {
    backdrop_path: "/uUJp5I4IbzuhdUiEx4R9OAoFpbz.jpg",
    original_language: "en",
    overview:
      "Between the events of 'Saw' and 'Saw II', a sick and desperate John Kramer travels to Mexico for a risky and experimental medical procedure in hopes of a miracle cure for his cancer, only to discover the entire operation is a scam to defraud the most vulnerable. Armed with a newfound purpose, the infamous serial killer returns to his work, turning the tables on the con artists in his signature visceral way through devious, deranged, and ingenious traps.",
    poster_path:
      "https://image.tmdb.org/t/p/original//aQPeznSu7XDTrrdCtT5eLiu52Yu.jpg",
    release_date: "2023-09-27",
    title: "Saw X",
    vote_average: 7.262,
    movieId: 951491,
    genres: "Horror, Thriller",
  },
  {
    backdrop_path: "/pyvkujOZ5qvY2NlQVC71flfgVWE.jpg",
    original_language: "en",
    overview:
      "Private eye Jake Gittes lives off of the murky moral climate of sunbaked, pre-World War II Southern California. Hired by a beautiful socialite to investigate her husband's extra-marital affair, Gittes is swept into a maelstrom of double dealings and deadly deceits, uncovering a web of personal and political scandals that come crashing together.",
    poster_path:
      "https://image.tmdb.org/t/p/original//2DQExgUEeNCD54ENMcc2DdAbejA.jpg",
    release_date: "1974-06-20",
    title: "Chinatown",
    vote_average: 7.917,
    movieId: 829,
    genres: "Crime, Drama, Mystery, Thriller",
  },
  {
    backdrop_path: "/xvk5AhfhgQcTuaCQyq3XqAnhEma.jpg",
    original_language: "en",
    overview:
      "When the plots of reclusive author Elly Conway's fictional espionage novels begin to mirror the covert actions of a real-life spy organization, quiet evenings at home become a thing of the past. Accompanied by her cat Alfie and Aiden, a cat-allergic spy, Elly races across the world to stay one step ahead of the killers as the line between Conway's fictional world and her real one begins to blur.",
    poster_path:
      "https://image.tmdb.org/t/p/original//iq1t8MxKDkKuV1WqyOr2RQM0hIA.jpg",
    release_date: "2024-01-31",
    title: "Argylle",
    vote_average: 6.146,
    movieId: 848538,
    genres: "Action, Adventure, Comedy",
  },
  {
    backdrop_path: "/2PDTWfuBWQKVC7aPAqJK5UCpz08.jpg",
    original_language: "en",
    overview:
      "After being bitten by a genetically altered spider at Oscorp, nerdy but endearing high school student Peter Parker is endowed with amazing powers to become the superhero known as Spider-Man.",
    poster_path:
      "https://image.tmdb.org/t/p/original//gh4cZbhZxyTbgxQPxD0dOudNPTn.jpg",
    release_date: "2002-05-01",
    title: "Spider-Man",
    vote_average: 7.299,
    movieId: 557,
    genres: "Action, Science Fiction",
  },
  {
    backdrop_path: "/kdbLf3aTQsEXqYlH9vA4fzmnSFz.jpg",
    original_language: "en",
    overview:
      "In the last months of World War II, as the Allies make their final push in the European theatre, a battle-hardened U.S. Army sergeant named 'Wardaddy' commands a Sherman tank called 'Fury' and its five-man crew on a deadly mission behind enemy lines. Outnumbered and outgunned, Wardaddy and his men face overwhelming odds in their heroic attempts to strike at the heart of Nazi Germany.",
    poster_path:
      "https://image.tmdb.org/t/p/original//pfte7wdMobMF4CVHuOxyu6oqeeA.jpg",
    release_date: "2014-10-15",
    title: "Fury",
    vote_average: 7.529,
    movieId: 228150,
    genres: "War, Drama, Action",
  },
  {
    backdrop_path: "/pdhDFmVQSA0f5i5IL0gpWROjgZ5.jpg",
    original_language: "en",
    overview:
      "Australian good girl Sandy and greaser Danny fell in love over the summer. But when they unexpectedly discover they're now in the same high school, will they be able to rekindle their romance despite their eccentric friends?",
    poster_path:
      "https://image.tmdb.org/t/p/original//czVhhAaSBFpakur7U8pOIDV9NUG.jpg",
    release_date: "1978-07-07",
    title: "Grease",
    vote_average: 7.393,
    movieId: 621,
    genres: "Romance, Comedy",
  },
  {
    backdrop_path: "/35z8hWuzfFUZQaYog8E9LsXW3iI.jpg",
    original_language: "en",
    overview:
      "Finding himself in a new era, and approaching retirement, Indy wrestles with fitting into a world that seems to have outgrown him. But as the tentacles of an all-too-familiar evil return in the form of an old rival, Indy must don his hat and pick up his whip once more to make sure an ancient and powerful artifact doesn't fall into the wrong hands.",
    poster_path:
      "https://image.tmdb.org/t/p/original//Af4bXE63pVsb2FtbW8uYIyPBadD.jpg",
    release_date: "2023-06-25",
    title: "Indiana Jones and the Dial of Destiny",
    vote_average: 6.594,
    movieId: 335977,
    genres: "Adventure, Action",
  },
  {
    backdrop_path: "/5i6SjyDbDWqyun8klUuCxrlFbyw.jpg",
    original_language: "en",
    overview:
      "After dominating the boxing world, Adonis Creed has thrived in his career and family life. When a childhood friend and former boxing prodigy, Damian Anderson, resurfaces after serving a long sentence in prison, he is eager to prove that he deserves his shot in the ring. The face-off between former friends is more than just a fight. To settle the score, Adonis must put his future on the line to battle Damian — a fighter with nothing to lose.",
    poster_path:
      "https://image.tmdb.org/t/p/original//cvsXj3I9Q2iyyIo95AecSd1tad7.jpg",
    release_date: "2023-03-01",
    title: "Creed III",
    vote_average: 7.131,
    movieId: 677179,
    genres: "Drama, Action",
  },
  {
    backdrop_path: "/jlGmlFOcfo8n5tURmhC7YVd4Iyy.jpg",
    original_language: "en",
    overview:
      "Supervillains Harley Quinn, Bloodsport, Peacemaker and a collection of nutty cons at Belle Reve prison join the super-secret, super-shady Task Force X as they are dropped off at the remote, enemy-infused island of Corto Maltese.",
    poster_path:
      "https://image.tmdb.org/t/p/original//kb4s0ML0iVZlG6wAKbbs9NAm6X.jpg",
    release_date: "2021-07-28",
    title: "The Suicide Squad",
    vote_average: 7.522,
    movieId: 436969,
    genres: "Action, Comedy, Adventure",
  },
  {
    backdrop_path: "/46Os8U0DEPmI0OnvKDxucl6SLVZ.jpg",
    original_language: "en",
    overview:
      "When a group of friends discover how to conjure spirits using an embalmed hand, they become hooked on the new thrill, until one of them goes too far and unleashes terrifying supernatural forces.",
    poster_path:
      "https://image.tmdb.org/t/p/original//kdPMUMJzyYAc4roD52qavX0nLIC.jpg",
    release_date: "2023-07-26",
    title: "Talk to Me",
    vote_average: 7.158,
    movieId: 1008042,
    genres: "Horror, Thriller",
  },
  {
    backdrop_path: "/gUNRlH66yNDH3NQblYMIwgZXJ2u.jpg",
    original_language: "en",
    overview:
      "Doctor Strange, with the help of mystical allies both old and new, traverses the mind-bending and dangerous alternate realities of the Multiverse to confront a mysterious new adversary.",
    poster_path:
      "https://image.tmdb.org/t/p/original//9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg",
    release_date: "2022-05-04",
    title: "Doctor Strange in the Multiverse of Madness",
    vote_average: 7.3,
    movieId: 453395,
    genres: "Fantasy, Action, Adventure",
  },
  {
    backdrop_path: "/epsz7OqjwmeK1ehItgz1OVzxOH9.jpg",
    original_language: "en",
    overview:
      "The world is stunned when a group of time travelers arrive from the year 2051 to deliver an urgent message: Thirty years in the future, mankind is losing a global war against a deadly alien species. The only hope for survival is for soldiers and civilians from the present to be transported to the future and join the fight. Among those recruited is high school teacher and family man Dan Forester. Determined to save the world for his young daughter, Dan teams up with a brilliant scientist and his estranged father in a desperate quest to rewrite the fate of the planet.",
    poster_path:
      "https://image.tmdb.org/t/p/original//34nDCQZwaEvsy4CFO5hkGRFDCVU.jpg",
    release_date: "2021-09-03",
    title: "The Tomorrow War",
    vote_average: 7.545,
    movieId: 588228,
    genres: "Action, Science Fiction, Adventure",
  },
  {
    backdrop_path: "/keIxh0wPr2Ymj0Btjh4gW7JJ89e.jpg",
    original_language: "en",
    overview:
      "Natasha Romanoff, also known as Black Widow, confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. Pursued by a force that will stop at nothing to bring her down, Natasha must deal with her history as a spy and the broken relationships left in her wake long before she became an Avenger.",
    poster_path:
      "https://image.tmdb.org/t/p/original//kwB7d51AIcyzPOBOHLCEZJkmPhQ.jpg",
    release_date: "2021-07-07",
    title: "Black Widow",
    vote_average: 7.254,
    movieId: 497698,
    genres: "Action, Adventure, Science Fiction",
  },
  {
    backdrop_path: "/t3DdoWhv8xvk6K1PabKjMJGTwwt.jpg",
    original_language: "en",
    overview:
      "A special bond develops between plus-sized inflatable robot Baymax, and prodigy Hiro Hamada, who team up with a group of friends to form a band of high-tech heroes.",
    poster_path:
      "https://image.tmdb.org/t/p/original//2mxS4wUimwlLmI1xp6QW6NSU361.jpg",
    release_date: "2014-10-24",
    title: "Big Hero 6",
    vote_average: 7.735,
    movieId: 177572,
    genres: "Adventure, Family, Animation, Action, Comedy",
  },
  {
    backdrop_path: "/eSGBbCOX7KM3Rf8HHwK8tglklyS.jpg",
    original_language: "en",
    overview:
      "The seemingly invincible Spider-Man goes up against an all-new crop of villains—including the shape-shifting Sandman. While Spider-Man’s superpowers are altered by an alien organism, his alter ego, Peter Parker, deals with nemesis Eddie Brock and also gets caught up in a love triangle.",
    poster_path:
      "https://image.tmdb.org/t/p/original//qFmwhVUoUSXjkKRmca5yGDEXBIj.jpg",
    release_date: "2007-05-01",
    title: "Spider-Man 3",
    vote_average: 6.423,
    movieId: 559,
    genres: "Action, Adventure, Science Fiction",
  },
  {
    backdrop_path: "/oZwwwezJFlHmQGBRJDLmENXwOIt.jpg",
    original_language: "en",
    overview:
      "In the middle of a routine patrol, officer Daniel Carter happens upon a blood-soaked figure limping down a deserted stretch of road. He rushes the young man to a nearby rural hospital staffed by a skeleton crew, only to discover that patients and personnel are transforming into something inhuman. As the horror intensifies, Carter leads the other survivors on a hellish voyage into the subterranean depths of the hospital in a desperate bid to end the nightmare before it's too late.",
    poster_path:
      "https://image.tmdb.org/t/p/original//c0WLRyT0AmUi41nVXBnqmJshIBn.jpg",
    release_date: "2016-09-22",
    title: "The Void",
    vote_average: 5.967,
    movieId: 378018,
    genres: "Mystery, Horror, Science Fiction",
  },
  {
    backdrop_path: "/eHz61dRrYZB16glXDttV0CnJf6j.jpg",
    original_language: "en",
    overview:
      'Woody has always been confident about his place in the world and that his priority is taking care of his kid, whether that\'s Andy or Bonnie. But when Bonnie adds a reluctant new toy called "Forky" to her room, a road trip adventure alongside old and new friends will show Woody how big the world can be for a toy.',
    poster_path:
      "https://image.tmdb.org/t/p/original//w9kR8qbmQ01HwnvK4alvnQ2ca0L.jpg",
    release_date: "2019-06-19",
    title: "Toy Story 4",
    vote_average: 7.5,
    movieId: 301528,
    genres: "Family, Adventure, Animation, Comedy, Fantasy",
  },
  {
    backdrop_path: "/hpgda6P9GutvdkDX5MUJ92QG9aj.jpg",
    original_language: "en",
    overview:
      "Ever since US Diplomatic Security Service Agent Hobbs and lawless outcast Shaw first faced off, they just have traded smack talk and body blows. But when cyber-genetically enhanced anarchist Brixton's ruthless actions threaten the future of humanity, they join forces to defeat him.",
    poster_path:
      "https://image.tmdb.org/t/p/original//qRyy2UmjC5ur9bDi3kpNNRCc5nc.jpg",
    release_date: "2019-08-01",
    title: "Fast & Furious Presents: Hobbs & Shaw",
    vote_average: 6.865,
    movieId: 384018,
    genres: "Action, Adventure, Comedy",
  },
  {
    backdrop_path: "/ktHEdqmMWC1wdfPRMRCTZe2OISL.jpg",
    original_language: "en",
    overview:
      "After a Black Friday riot ends in tragedy, a mysterious Thanksgiving-inspired killer terrorizes Plymouth, Massachusetts - the birthplace of the holiday. Picking off residents one by one, what begins as random revenge killings are soon revealed to be part of a larger, sinister holiday plan.",
    poster_path:
      "https://image.tmdb.org/t/p/original//f5f3TEVst1nHHyqgn7Z3tlwnBIH.jpg",
    release_date: "2023-11-16",
    title: "Thanksgiving",
    vote_average: 6.583,
    movieId: 1071215,
    genres: "Horror, Mystery, Thriller",
  },
  {
    backdrop_path: "/acvE3RWjDLgvbL2RtcyzkrsAyNV.jpg",
    original_language: "en",
    overview:
      "When oil is discovered in 1920s Oklahoma under Osage Nation land, the Osage people are murdered one by one—until the FBI steps in to unravel the mystery.",
    poster_path:
      "https://image.tmdb.org/t/p/original//dB6Krk806zeqd0YNp2ngQ9zXteH.jpg",
    release_date: "2023-10-18",
    title: "Killers of the Flower Moon",
    vote_average: 7.478,
    movieId: 466420,
    genres: "Crime, History, Drama",
  },
  {
    backdrop_path: "/di47xqYMCYpjqwnqNlO17X5qXMX.jpg",
    original_language: "en",
    overview:
      "Two FBI agent brothers, Marcus and Kevin Copeland, accidentally foil a drug bust. To avoid being fired they accept a mission escorting a pair of socialites to the Hamptons--but when the girls are disfigured in a car accident, they refuse to go. Left without options, Marcus and Kevin decide to pose as the sisters, transforming themselves from black men into rich white women.",
    poster_path:
      "https://image.tmdb.org/t/p/original//aHTUpo45qy9QYIOnVITGGqLoVcA.jpg",
    release_date: "2004-06-23",
    title: "White Chicks",
    vote_average: 6.954,
    movieId: 12153,
    genres: "Comedy, Crime",
  },
  {
    backdrop_path: "/i4ZougHEyBAboDpi6jsaTUDTjUl.jpg",
    original_language: "en",
    overview:
      "Though safely entombed in a crypt deep beneath the unforgiving desert, an ancient queen whose destiny was unjustly taken from her is awakened in our current day, bringing with her malevolence grown over millennia, and terrors that defy human comprehension.",
    poster_path:
      "https://image.tmdb.org/t/p/original//zxkY8byBnCsXodEYpK8tmwEGXBI.jpg",
    release_date: "2017-06-06",
    title: "The Mummy",
    vote_average: 5.509,
    movieId: 282035,
    genres: "Fantasy, Thriller, Action, Adventure, Horror",
  },
  {
    backdrop_path: "/91qfG6VaxRsCh1SbIi1w2vxknsL.jpg",
    original_language: "en",
    overview:
      "Andy heads off to Cowboy Camp, leaving his toys to their own devices. Things shift into high gear when an obsessive toy collector named Al McWhiggen, owner of Al's Toy Barn kidnaps Woody. Andy's toys mount a daring rescue mission, Buzz Lightyear meets his match and Woody has to decide where he and his heart truly belong.",
    poster_path:
      "https://image.tmdb.org/t/p/original//2MFIhZAW0CVlEQrFyqwa4U6zqJP.jpg",
    release_date: "1999-10-30",
    title: "Toy Story 2",
    vote_average: 7.596,
    movieId: 863,
    genres: "Animation, Comedy, Family",
  },
  {
    backdrop_path: "/kvRT3GwcnqGHzPjXIVrVPhUix7Z.jpg",
    original_language: "en",
    overview:
      "Following the events of Age of Ultron, the collective governments of the world pass an act designed to regulate all superhuman activity. This polarizes opinion amongst the Avengers, causing two factions to side with Iron Man or Captain America, which causes an epic battle between former allies.",
    poster_path:
      "https://image.tmdb.org/t/p/original//rAGiXaUfPzY7CDEyNKUofk3Kw2e.jpg",
    release_date: "2016-04-27",
    title: "Captain America: Civil War",
    vote_average: 7.442,
    movieId: 271110,
    genres: "Adventure, Action, Science Fiction",
  },
  {
    backdrop_path: "/uzIGtyS6bbnJzGsPL93WCF1FWm8.jpg",
    original_language: "en",
    overview:
      "Captain Jack Sparrow crosses paths with a woman from his past, and he's not sure if it's love -- or if she's a ruthless con artist who's using him to find the fabled Fountain of Youth. When she forces him aboard the Queen Anne's Revenge, the ship of the formidable pirate Blackbeard, Jack finds himself on an unexpected adventure in which he doesn't know who to fear more: Blackbeard or the woman from his past.",
    poster_path:
      "https://image.tmdb.org/t/p/original//keGfSvCmYj7CvdRx36OdVrAEibE.jpg",
    release_date: "2011-05-15",
    title: "Pirates of the Caribbean: On Stranger Tides",
    vote_average: 6.55,
    movieId: 1865,
    genres: "Adventure, Action, Fantasy",
  },
  {
    backdrop_path: "/6YwkGolwdOMNpbTOmLjoehlVWs5.jpg",
    original_language: "en",
    overview:
      "When Tony Stark tries to jumpstart a dormant peacekeeping program, things go awry and Earth’s Mightiest Heroes are put to the ultimate test as the fate of the planet hangs in the balance. As the villainous Ultron emerges, it is up to The Avengers to stop him from enacting his terrible plans, and soon uneasy alliances and unexpected action pave the way for an epic and unique global adventure.",
    poster_path:
      "https://image.tmdb.org/t/p/original//4ssDuvEDkSArWEdyBl2X5EHvYKU.jpg",
    release_date: "2015-04-22",
    title: "Avengers: Age of Ultron",
    vote_average: 7.273,
    movieId: 99861,
    genres: "Action, Adventure, Science Fiction",
  },
  {
    backdrop_path: "/bSvUW4JQ6g4QiKvwejcfcPRd4Ke.jpg",
    original_language: "en",
    overview:
      "A young boy wins a tour through the most magnificent chocolate factory in the world, led by the world's most unusual candy maker.",
    poster_path:
      "https://image.tmdb.org/t/p/original//wfGfxtBkhBzQfOZw4S8IQZgrH0a.jpg",
    release_date: "2005-07-13",
    title: "Charlie and the Chocolate Factory",
    vote_average: 7.051,
    movieId: 118,
    genres: "Adventure, Comedy, Family, Fantasy",
  },
  {
    backdrop_path: "/p2fRZzxla6NoRbIH2KOZq0gHb5S.jpg",
    original_language: "en",
    overview:
      "Determined to prove herself, Officer Judy Hopps, the first bunny on Zootopia's police force, jumps at the chance to crack her first case - even if it means partnering with scam-artist fox Nick Wilde to solve the mystery.",
    poster_path:
      "https://image.tmdb.org/t/p/original//hlK0e0wAQ3VLuJcsfIYPvb4JVud.jpg",
    release_date: "2016-02-11",
    title: "Zootopia",
    vote_average: 7.7,
    movieId: 269149,
    genres: "Animation, Adventure, Family, Comedy",
  },
  {
    backdrop_path: "/2u7zbn8EudG6kLlBzUYqP8RyFU4.jpg",
    original_language: "en",
    overview:
      "As armies mass for a final battle that will decide the fate of the world--and powerful, ancient forces of Light and Dark compete to determine the outcome--one member of the Fellowship of the Ring is revealed as the noble heir to the throne of the Kings of Men. Yet, the sole hope for triumph over evil lies with a brave hobbit, Frodo, who, accompanied by his loyal friend Sam and the hideous, wretched Gollum, ventures deep into the very dark heart of Mordor on his seemingly impossible quest to destroy the Ring of Power.​",
    poster_path:
      "https://image.tmdb.org/t/p/original//rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
    release_date: "2003-12-01",
    title: "The Lord of the Rings: The Return of the King",
    vote_average: 8.481,
    movieId: 122,
    genres: "Adventure, Fantasy, Action",
  },
  {
    backdrop_path: "/cinER0ESG0eJ49kXlExM0MEWGxW.jpg",
    original_language: "en",
    overview:
      "Shang-Chi must confront the past he thought he left behind when he is drawn into the web of the mysterious Ten Rings organization.",
    poster_path:
      "https://image.tmdb.org/t/p/original//1BIoJGKbXjdFDAqUEiA2VHqkK1Z.jpg",
    release_date: "2021-09-01",
    title: "Shang-Chi and the Legend of the Ten Rings",
    vote_average: 7.556,
    movieId: 566525,
    genres: "Action, Adventure, Fantasy",
  },
  {
    backdrop_path: "/6zbKgwgaaCyyBXE4Sun4oWQfQmi.jpg",
    original_language: "en",
    overview:
      'Hutch Mansell, a suburban dad, overlooked husband, nothing neighbor — a "nobody." When two thieves break into his home one night, Hutch\'s unknown long-simmering rage is ignited and propels him on a brutal path that will uncover dark secrets he fought to leave behind.',
    poster_path:
      "https://image.tmdb.org/t/p/original//oBgWY00bEFeZ9N25wWVyuQddbAo.jpg",
    release_date: "2021-03-18",
    title: "Nobody",
    vote_average: 7.967,
    movieId: 615457,
    genres: "Action, Thriller",
  },
  {
    backdrop_path: "/7eK8FJr4fqq3J5W2xvlr2GVaep2.jpg",
    original_language: "en",
    overview:
      "When Bella Swan moves to a small town in the Pacific Northwest, she falls in love with Edward Cullen, a mysterious classmate who reveals himself to be a 108-year-old vampire. Despite Edward's repeated cautions, Bella can't stay away from him, a fatal move that endangers her own life.",
    poster_path:
      "https://image.tmdb.org/t/p/original//3Gkb6jm6962ADUPaCBqzz9CTbn9.jpg",
    release_date: "2008-11-20",
    title: "Twilight",
    vote_average: 6.29,
    movieId: 8966,
    genres: "Fantasy, Drama, Romance",
  },
  {
    backdrop_path: "/b6w7gKLQLS2zw4JK0XmKgQ4gnzr.jpg",
    original_language: "en",
    overview:
      "In the continuing saga of the Corleone crime family, a young Vito Corleone grows up in Sicily and in 1910s New York. In the 1950s, Michael Corleone attempts to expand the family business into Las Vegas, Hollywood and Cuba.",
    poster_path:
      "https://image.tmdb.org/t/p/original//hek3koDUyRQk7FIhPXsa6mT2Zc3.jpg",
    release_date: "1974-12-20",
    title: "The Godfather Part II",
    vote_average: 8.577,
    movieId: 240,
    genres: "Drama, Crime",
  },
  {
    backdrop_path: "/rz8GGX5Id2hCW1KzAIY4xwbQw1w.jpg",
    original_language: "en",
    overview:
      "An international heist crew, led by Cyrus Whitaker, race to lift $500 million in gold from a passenger plane at 40,000 feet.",
    poster_path:
      "https://image.tmdb.org/t/p/original//h7wJI6mctrDJ9wMbFfgrBUTn1LT.jpg",
    release_date: "2024-01-10",
    title: "Lift",
    vote_average: 6.531,
    movieId: 955916,
    genres: "Action, Comedy, Crime",
  },
  {
    backdrop_path: "/r9leYNa8nTRCceZrZhP1DXkgKVb.jpg",
    original_language: "en",
    overview:
      "In the winter of 1982, a twelve-man research team at a remote Antarctic research station discovers an alien buried in the snow for over 100,000 years. Soon unfrozen, the form-changing creature wreaks havoc, creates terror... and becomes one of them.",
    poster_path:
      "https://image.tmdb.org/t/p/original//tzGY49kseSE9QAKk47uuDGwnSCu.jpg",
    release_date: "1982-06-25",
    title: "The Thing",
    vote_average: 8.1,
    movieId: 1091,
    genres: "Horror, Mystery, Science Fiction",
  },
  {
    backdrop_path: "/9bn8ApCTuqTb7rLoxzyGcyzjuFx.jpg",
    original_language: "en",
    overview:
      "Framed and on the run, a former FBI agent must save his family from a blazing fire in the world's tallest building.",
    poster_path:
      "https://image.tmdb.org/t/p/original//52ml62vClzrlqvXZq2FEW6UF6c1.jpg",
    release_date: "2018-07-11",
    title: "Skyscraper",
    vote_average: 6.3,
    movieId: 447200,
    genres: "Action, Thriller, Adventure",
  },
  {
    backdrop_path: "/h3KN24PrOheHVYs9ypuOIdFBEpX.jpg",
    original_language: "en",
    overview:
      "As Hiccup fulfills his dream of creating a peaceful dragon utopia, Toothless’ discovery of an untamed, elusive mate draws the Night Fury away. When danger mounts at home and Hiccup’s reign as village chief is tested, both dragon and rider must make impossible decisions to save their kind.",
    poster_path:
      "https://image.tmdb.org/t/p/original//xvx4Yhf0DVH8G4LzNISpMfFBDy2.jpg",
    release_date: "2019-01-03",
    title: "How to Train Your Dragon: The Hidden World",
    vote_average: 7.751,
    movieId: 166428,
    genres: "Animation, Family, Adventure",
  },
  {
    backdrop_path: "/kPcHuPYqzkSo4bmPHtH82GaeEgX.jpg",
    original_language: "en",
    overview:
      "Captain Barbossa, long believed to be dead, has come back to life and is headed to the edge of the Earth with Will Turner and Elizabeth Swann. But nothing is quite as it seems.",
    poster_path:
      "https://image.tmdb.org/t/p/original//jGWpG4YhpQwVmjyHEGkxEkeRf0S.jpg",
    release_date: "2007-05-19",
    title: "Pirates of the Caribbean: At World's End",
    vote_average: 7.254,
    movieId: 285,
    genres: "Adventure, Fantasy, Action",
  },
  {
    backdrop_path: "/bJFKGpUbSFSoXcIZcAgtAi3rtc7.jpg",
    original_language: "en",
    overview:
      "Father Gabriele Amorth, Chief Exorcist of the Vatican, investigates a young boy's terrifying possession and ends up uncovering a centuries-old conspiracy the Vatican has desperately tried to keep hidden.",
    poster_path:
      "https://image.tmdb.org/t/p/original//gNPqcv1tAifbN7PRNgqpzY8sEJZ.jpg",
    release_date: "2023-04-05",
    title: "The Pope's Exorcist",
    vote_average: 7.011,
    movieId: 758323,
    genres: "Horror, Thriller",
  },
  {
    backdrop_path: "/sRLC052ieEzkQs9dEtPMfFxYkej.jpg",
    original_language: "en",
    overview:
      "When the ruthless forces of the Motherworld threaten a quiet farming village on a distant moon, a mysterious outsider becomes its best hope for survival.",
    poster_path:
      "https://image.tmdb.org/t/p/original//ui4DrH1cKk2vkHshcUcGt2lKxCm.jpg",
    release_date: "2023-12-15",
    title: "Rebel Moon - Part One: A Child of Fire",
    vote_average: 6.35,
    movieId: 848326,
    genres: "Science Fiction, Drama, Action",
  },
  {
    backdrop_path: "/mSDsSDwaP3E7dEfUPWy4J0djt4O.jpg",
    original_language: "ja",
    overview:
      "A young girl, Chihiro, becomes trapped in a strange new world of spirits. When her parents undergo a mysterious transformation, she must call upon the courage she never knew she had to free her family.",
    poster_path:
      "https://image.tmdb.org/t/p/original//39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
    release_date: "2001-07-20",
    title: "Spirited Away",
    vote_average: 8.5,
    movieId: 129,
    genres: "Animation, Family, Fantasy",
  },
  {
    backdrop_path: "/dENLz9Np9EV5Ro8UIBhbKC8BmSS.jpg",
    original_language: "en",
    overview:
      "A highly intelligent chimpanzee named Caesar has been living a peaceful suburban life ever since he was born. But when he gets taken to a cruel primate facility, Caesar decides to revolt against those who have harmed him.",
    poster_path:
      "https://image.tmdb.org/t/p/original//cjLsuP75UDlRdJVMXzXg3TJ4umX.jpg",
    release_date: "2011-08-03",
    title: "Rise of the Planet of the Apes",
    vote_average: 7.322,
    movieId: 61791,
    genres: "Thriller, Action, Drama, Science Fiction",
  },
  {
    backdrop_path: "/34jW8LvjRplM8Pv06cBFDpLlenR.jpg",
    original_language: "en",
    overview:
      "Peter Parker and his friends go on a summer trip to Europe. However, they will hardly be able to rest - Peter will have to agree to help Nick Fury uncover the mystery of creatures that cause natural disasters and destruction throughout the continent.",
    poster_path:
      "https://image.tmdb.org/t/p/original//4q2NNj4S5dG2RLF9CpXsej7yXl.jpg",
    release_date: "2019-06-28",
    title: "Spider-Man: Far From Home",
    vote_average: 7.428,
    movieId: 429617,
    genres: "Action, Adventure, Science Fiction",
  },
  {
    backdrop_path: "/mXmvN6drkdU1PWFF92AGklEVIa3.jpg",
    original_language: "en",
    overview:
      "The modern world holds many secrets, but by far the most astounding is that witches still live among us; vicious supernatural creatures intent on unleashing the Black Death upon the world and putting an end to the human race once and for all. Armies of witch hunters have battled this unnatural enemy for centuries, including Kaulder, a valiant warrior who many years ago slayed the all-powerful Witch Queen, decimating her followers in the process. In the moments right before her death, the Queen cursed Kaulder with immortality, forever separating him from his beloved wife and daughter. Today, Kaulder is the last living hunter who has spent his immortal life tracking down rogue witches, all the while yearning for his long-lost family.",
    poster_path:
      "https://image.tmdb.org/t/p/original//qXvOpA2nhK5HQ6I95sN3nnMtfjH.jpg",
    release_date: "2015-10-21",
    title: "The Last Witch Hunter",
    vote_average: 5.964,
    movieId: 274854,
    genres: "Fantasy, Action, Adventure",
  },
  {
    backdrop_path: "/xBDE2d6HM1aBKQRu4IT7SfPD9fs.jpg",
    original_language: "en",
    overview:
      "A mysterious story of two magicians whose intense rivalry leads them on a life-long battle for supremacy -- full of obsession, deceit and jealousy with dangerous and deadly consequences.",
    poster_path:
      "https://image.tmdb.org/t/p/original//tRNlZbgNCNOpLpbPEz5L8G8A0JN.jpg",
    release_date: "2006-10-17",
    title: "The Prestige",
    vote_average: 8.203,
    movieId: 1124,
    genres: "Drama, Mystery, Science Fiction",
  },
  {
    backdrop_path: "/aRka9neADW1M0Zf9lF8kW2jEgXe.jpg",
    original_language: "en",
    overview:
      "Fifteen years after murdering his sister on Halloween Night 1963, Michael Myers escapes from a mental hospital and returns to the small town of Haddonfield, Illinois to kill again.",
    poster_path:
      "https://image.tmdb.org/t/p/original//wijlZ3HaYMvlDTPqJoTCWKFkCPU.jpg",
    release_date: "1978-10-24",
    title: "Halloween",
    vote_average: 7.557,
    movieId: 948,
    genres: "Horror, Thriller",
  },
  {
    backdrop_path: "/sra8XnL96OyLHENcglmZJg6HA8z.jpg",
    original_language: "en",
    overview:
      "When Ethan Hunt, the leader of a crack espionage team whose perilous operation has gone awry with no explanation, discovers that a mole has penetrated the CIA, he's surprised to learn that he's the No. 1 suspect. To clear his name, Hunt now must ferret out the real double agent and, in the process, even the score.",
    poster_path:
      "https://image.tmdb.org/t/p/original//l5uxY5m5OInWpcExIpKG6AR3rgL.jpg",
    release_date: "1996-05-22",
    title: "Mission: Impossible",
    vote_average: 6.984,
    movieId: 954,
    genres: "Adventure, Action, Thriller",
  },
  {
    backdrop_path: "/pkxPkHOPJjOvzfQOclANEBT8OfK.jpg",
    original_language: "en",
    overview:
      "Returning for his fifth year of study at Hogwarts, Harry is stunned to find that his warnings about the return of Lord Voldemort have been ignored. Left with no choice, Harry takes matters into his own hands, training a small group of students to defend themselves against the dark arts.",
    poster_path:
      "https://image.tmdb.org/t/p/original//5aOyriWkPec0zUDxmHFP9qMmBaj.jpg",
    release_date: "2007-07-08",
    title: "Harry Potter and the Order of the Phoenix",
    vote_average: 7.682,
    movieId: 675,
    genres: "Adventure, Fantasy",
  },
  {
    backdrop_path: "/ne1ivJv3lGGUvZ9F72P0r2xpksB.jpg",
    original_language: "en",
    overview:
      "A lifetime of taking shots has ended Rocky’s career, and a crooked accountant has left him broke. Inspired by the memory of his trainer, however, Rocky finds glory in training and takes on an up-and-coming boxer.",
    poster_path:
      "https://image.tmdb.org/t/p/original//o1nY37L6HC9hwlLSH5sHVzvXt1P.jpg",
    release_date: "1990-11-16",
    title: "Rocky V",
    vote_average: 5.776,
    movieId: 1375,
    genres: "Drama",
  },
  {
    backdrop_path: "/uBHeAB2Ug9ELBzkMyls8CUjzn4i.jpg",
    original_language: "en",
    overview:
      "Factory worker Doug Quaid takes a virtual mind-trip vacation with the Rekall company, opting for implanted memories of being a spy. When the procedure goes wrong, Quaid becomes a wanted man by the police and joins forces with a rebel fighter to stop the evil Chancellor Cohaagen.",
    poster_path:
      "https://image.tmdb.org/t/p/original//4M5urSlUyR2PtVBIoW9hLG9NQCQ.jpg",
    release_date: "2012-08-02",
    title: "Total Recall",
    vote_average: 6,
    movieId: 64635,
    genres: "Action, Science Fiction, Thriller",
  },
  {
    backdrop_path: "/bq9FpkTw9I3s1cSRuZxQibM2xOx.jpg",
    original_language: "en",
    overview:
      "The commandant of Auschwitz, Rudolf Höss, and his wife Hedwig, strive to build a dream life for their family in a house and garden next to the camp.",
    poster_path:
      "https://image.tmdb.org/t/p/original//hUu9zyZmDd8VZegKi1iK1Vk0RYS.jpg",
    release_date: "2023-12-15",
    title: "The Zone of Interest",
    vote_average: 7.179,
    movieId: 467244,
    genres: "History, Drama",
  },
  {
    backdrop_path: "/j6sAlNz354qtzvG01LLYF16Uufg.jpg",
    original_language: "en",
    overview:
      "For Lieutenant Pete 'Maverick' Mitchell and his friend and co-pilot Nick 'Goose' Bradshaw, being accepted into an elite training school for fighter pilots is a dream come true. But a tragedy, as well as personal demons, will threaten Pete's dreams of becoming an ace pilot.",
    poster_path:
      "https://image.tmdb.org/t/p/original//xUuHj3CgmZQ9P2cMaqQs4J0d4Zc.jpg",
    release_date: "1986-05-16",
    title: "Top Gun",
    vote_average: 7.058,
    movieId: 744,
    genres: "Drama, Action, Adventure",
  },
  {
    backdrop_path: "/cyecB7godJ6kNHGONFjUyVN9OX5.jpg",
    original_language: "en",
    overview:
      "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
    poster_path:
      "https://image.tmdb.org/t/p/original//78lPtwv72eTNqFW9COBYI0dWDJa.jpg",
    release_date: "2008-04-30",
    title: "Iron Man",
    vote_average: 7.644,
    movieId: 1726,
    genres: "Action, Science Fiction, Adventure",
  },
  {
    backdrop_path: "/mqcqAE8yefvezVJ78FINJCiV6n3.jpg",
    original_language: "en",
    overview:
      "William Thacker is a London bookstore owner whose humdrum existence is thrown into romantic turmoil when famous American actress Anna Scott appears in his shop. A chance encounter over spilled orange juice leads to a kiss that blossoms into a full-blown affair. As the average bloke and glamorous movie star draw closer and closer together, they struggle to reconcile their radically different lifestyles in the name of love.",
    poster_path:
      "https://image.tmdb.org/t/p/original//hHRIf2XHeQMbyRb3HUx19SF5Ujw.jpg",
    release_date: "1999-05-21",
    title: "Notting Hill",
    vote_average: 7.263,
    movieId: 509,
    genres: "Romance, Comedy",
  },
  {
    backdrop_path: "/9ywA15OAiwjSTvg3cBs9B7kOCBF.jpg",
    original_language: "en",
    overview:
      "Believing they have left behind shadowy figures from their past, newlyweds Christian and Ana fully embrace an inextricable connection and shared life of luxury. But just as she steps into her role as Mrs. Grey and he relaxes into an unfamiliar stability, new threats could jeopardize their happy ending before it even begins.",
    poster_path:
      "https://image.tmdb.org/t/p/original//vwFR5WI1RQ1RCxS0cdTbiSgaXJr.jpg",
    release_date: "2018-01-17",
    title: "Fifty Shades Freed",
    vote_average: 6.705,
    movieId: 337167,
    genres: "Drama, Romance",
  },
  {
    backdrop_path: "/rj58WQ9ImI0mYDptXdM7euX1Wjt.jpg",
    original_language: "en",
    overview:
      "Young princess Anna of Arendelle dreams about finding true love at her sister Elsa’s coronation. Fate takes her on a dangerous journey in an attempt to end the eternal winter that has fallen over the kingdom. She's accompanied by ice delivery man Kristoff, his reindeer Sven, and snowman Olaf. On an adventure where she will find out what friendship, courage, family, and true love really means.",
    poster_path:
      "https://image.tmdb.org/t/p/original//itAKcobTYGpYT8Phwjd8c9hleTo.jpg",
    release_date: "2013-11-20",
    title: "Frozen",
    vote_average: 7.248,
    movieId: 109445,
    genres: "Animation, Family, Adventure, Fantasy",
  },
  {
    backdrop_path: "/aFTYFqrWp4RS46Twm87l5e0ItYb.jpg",
    original_language: "en",
    overview:
      "When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution.",
    poster_path:
      "https://image.tmdb.org/t/p/original//qhPtAc1TKbMPqNvcdXSOn9Bn7hZ.jpg",
    release_date: "2013-04-18",
    title: "Iron Man 3",
    vote_average: 6.929,
    movieId: 68721,
    genres: "Action, Adventure, Science Fiction",
  },
  {
    backdrop_path: "/58082NwAWlM91iybyvxzl7PmFwZ.jpg",
    original_language: "en",
    overview:
      "When single mom Callie and her two kids Trevor and Phoebe arrive in a small Oklahoma town, they begin to discover their connection to the original Ghostbusters and the secret legacy their grandfather left behind.",
    poster_path:
      "https://image.tmdb.org/t/p/original//sg4xJaufDiQl7caFEskBtQXfD4x.jpg",
    release_date: "2021-11-18",
    title: "Ghostbusters: Afterlife",
    vote_average: 7.399,
    movieId: 425909,
    genres: "Fantasy, Comedy, Adventure, Science Fiction",
  },
  {
    backdrop_path: "/b9YkKJcW3pPaXgMZu9uoT7v9yRB.jpg",
    original_language: "en",
    overview:
      'Struggling to find his place in the world while juggling school and family, Brooklyn teenager Miles Morales is unexpectedly bitten by a radioactive spider and develops unfathomable powers just like the one and only Spider-Man. While wrestling with the implications of his new abilities, Miles discovers a super collider created by the madman Wilson "Kingpin" Fisk, causing others from across the Spider-Verse to be inadvertently transported to his dimension.',
    poster_path:
      "https://image.tmdb.org/t/p/original//iiZZdoQBEYBv6id8su7ImL0oCbD.jpg",
    release_date: "2018-12-06",
    title: "Spider-Man: Into the Spider-Verse",
    vote_average: 8.405,
    movieId: 324857,
    genres: "Animation, Action, Adventure, Science Fiction",
  },
  {
    backdrop_path: "/jks6QgJjsaDC5iT6bxLsSS0eo6L.jpg",
    original_language: "en",
    overview:
      "Explore the mysterious and dangerous home of the king of the apes as a team of explorers ventures deep inside the treacherous, primordial island.",
    poster_path:
      "https://image.tmdb.org/t/p/original//r2517Vz9EhDhj88qwbDVj8DCRZN.jpg",
    release_date: "2017-03-08",
    title: "Kong: Skull Island",
    vote_average: 6.5,
    movieId: 293167,
    genres: "Action, Adventure, Fantasy",
  },
  {
    backdrop_path: "/v5aFCLawM9oCygfGUzjJxRX4c6C.jpg",
    original_language: "en",
    overview:
      "Peter Parker is an outcast high schooler abandoned by his parents as a boy, leaving him to be raised by his Uncle Ben and Aunt May. Like most teenagers, Peter is trying to figure out who he is and how he got to be the person he is today. As Peter discovers a mysterious briefcase that belonged to his father, he begins a quest to understand his parents' disappearance – leading him directly to Oscorp and the lab of Dr. Curt Connors, his father's former partner. As Spider-Man is set on a collision course with Connors' alter ego, The Lizard, Peter will make life-altering choices to use his powers and shape his destiny to become a hero.",
    poster_path:
      "https://image.tmdb.org/t/p/original//BgcvtsVWLQfjHD6Dr3YYgeSLYk.jpg",
    release_date: "2012-06-23",
    title: "The Amazing Spider-Man",
    vote_average: 6.703,
    movieId: 1930,
    genres: "Action, Adventure, Science Fiction",
  },
  {
    backdrop_path: "/6WRrGYalXXveItfpnipYdayFkQB.jpg",
    original_language: "en",
    overview:
      "To take down South Boston's Irish Mafia, the police send in one of their own to infiltrate the underworld, not realizing the syndicate has done likewise. While an undercover cop curries favor with the mob kingpin, a career criminal rises through the police ranks. But both sides soon discover there's a mole among them.",
    poster_path:
      "https://image.tmdb.org/t/p/original//nT97ifVT2J1yMQmeq20Qblg61T.jpg",
    release_date: "2006-10-04",
    title: "The Departed",
    vote_average: 8.2,
    movieId: 1422,
    genres: "Drama, Thriller, Crime",
  },
  {
    backdrop_path: "/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg",
    original_language: "en",
    overview:
      "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.",
    poster_path:
      "https://image.tmdb.org/t/p/original//pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg",
    release_date: "2022-10-19",
    title: "Black Adam",
    vote_average: 6.936,
    movieId: 436270,
    genres: "Action, Adventure, Science Fiction",
  },
  {
    backdrop_path: "/jncviKGvFlxdeh6vYWe9g4LmG3j.jpg",
    original_language: "en",
    overview:
      "A group of people find themselves trapped in the backwoods of West Virginia, fighting for their lives against a group of vicious and horribly disfigured inbred cannibals.",
    poster_path:
      "https://image.tmdb.org/t/p/original//84s4LMWuGbm4xPWW5PSbHyQhh33.jpg",
    release_date: "2009-10-20",
    title: "Wrong Turn 3: Left for Dead",
    vote_average: 5.6,
    movieId: 23823,
    genres: "Horror, Thriller",
  },
  {
    backdrop_path: "/dlz8uzyl9mHPyHXbveXutzpx8jI.jpg",
    original_language: "en",
    overview:
      "Caleb, a coder at the world's largest internet company, wins a competition to spend a week at a private mountain retreat belonging to Nathan, the reclusive CEO of the company. But when Caleb arrives at the remote location he finds that he will have to participate in a strange and fascinating experiment in which he must interact with the world's first true artificial intelligence, housed in the body of a beautiful robot girl.",
    poster_path:
      "https://image.tmdb.org/t/p/original//aeJS3OXnp7d17QSoMdglZERwCkM.jpg",
    release_date: "2015-01-21",
    title: "Ex Machina",
    vote_average: 7.572,
    movieId: 264660,
    genres: "Drama, Science Fiction",
  },
  {
    backdrop_path: "/u7SeO6Y42P7VCTWLhpnL96cyOqd.jpg",
    original_language: "en",
    overview:
      "For Peter Parker, life is busy. Between taking out the bad guys as Spider-Man and spending time with the person he loves, Gwen Stacy, high school graduation cannot come quickly enough. Peter has not forgotten about the promise he made to Gwen’s father to protect her by staying away, but that is a promise he cannot keep. Things will change for Peter when a new villain, Electro, emerges, an old friend, Harry Osborn, returns, and Peter uncovers new clues about his past.",
    poster_path:
      "https://image.tmdb.org/t/p/original//kV61FAIsRWZP6JhgWFOKug9RbBx.jpg",
    release_date: "2014-04-16",
    title: "The Amazing Spider-Man 2",
    vote_average: 6.51,
    movieId: 102382,
    genres: "Action, Adventure, Science Fiction",
  },
  {
    backdrop_path: "/2o0PKGmnSgCGkzoSePNAqse8Ure.jpg",
    original_language: "en",
    overview:
      "When three friends finally come to after a raucous night of bachelor-party revelry, they find a baby in the closet and a tiger in the bathroom. But they can't seem to locate their best friend, Doug – who's supposed to be tying the knot. Launching a frantic search for Doug, the trio perseveres through a nasty hangover to try to make it to the church on time.",
    poster_path:
      "https://image.tmdb.org/t/p/original//uluhlXubGu1VxU63X9VHCLWDAYP.jpg",
    release_date: "2009-06-02",
    title: "The Hangover",
    vote_average: 7.322,
    movieId: 18785,
    genres: "Comedy",
  },
  {
    backdrop_path: "/xJWPZIYOEFIjZpBL7SVBGnzRYXp.jpg",
    original_language: "en",
    overview:
      "Elsa, Anna, Kristoff and Olaf head far into the forest to learn the truth about an ancient mystery of their kingdom.",
    poster_path:
      "https://image.tmdb.org/t/p/original//mINJaa34MtknCYl5AjtNJzWj8cD.jpg",
    release_date: "2019-11-20",
    title: "Frozen II",
    vote_average: 7.263,
    movieId: 330457,
    genres: "Family, Animation, Adventure, Comedy, Fantasy",
  },
  {
    backdrop_path: "/9il7qNbeYnPMYlutsVYDsj4hRyb.jpg",
    original_language: "en",
    overview:
      "Between personal obligations and training for his next big fight against an opponent with ties to his family's past, Adonis Creed is up against the challenge of his life.",
    poster_path:
      "https://image.tmdb.org/t/p/original//v3QyboWRoA4O9RbcsqH8tJMe8EB.jpg",
    release_date: "2018-11-21",
    title: "Creed II",
    vote_average: 7.03,
    movieId: 480530,
    genres: "Drama, Action",
  },
  {
    backdrop_path: "/5jhG1lTgV0MS6tDkBMQSSitttTT.jpg",
    original_language: "en",
    overview:
      "A struggling salesman takes custody of his son as he's poised to begin a life-changing professional career.",
    poster_path:
      "https://image.tmdb.org/t/p/original//lBYOKAMcxIvuk9s9hMuecB9dPBV.jpg",
    release_date: "2006-12-14",
    title: "The Pursuit of Happyness",
    vote_average: 7.902,
    movieId: 1402,
    genres: "Drama",
  },
  {
    backdrop_path: "/qom1SZSENdmHFNZBXbtJAU0WTlC.jpg",
    original_language: "en",
    overview:
      "An epic love story centered around an older man who reads aloud to a woman with Alzheimer's. From a faded notebook, the old man's words bring to life the story about a couple who is separated by World War II, and is then passionately reunited, seven years later, after they have taken different paths.",
    poster_path:
      "https://image.tmdb.org/t/p/original//rNzQyW4f8B8cQeg7Dgj3n6eT5k9.jpg",
    release_date: "2004-06-25",
    title: "The Notebook",
    vote_average: 7.888,
    movieId: 11036,
    genres: "Romance, Drama",
  },
  {
    backdrop_path: "/wxr4Z6E83h14CogsZOzDm1vuDX3.jpg",
    original_language: "en",
    overview:
      'As humanity picks up the pieces, following the conclusion of "Transformers: Dark of the Moon," Autobots and Decepticons have all but vanished from the face of the planet. However, a group of powerful, ingenious businessman and scientists attempt to learn from past Transformer incursions and push the boundaries of technology beyond what they can control - all while an ancient, powerful Transformer menace sets Earth in his cross-hairs.',
    poster_path:
      "https://image.tmdb.org/t/p/original//jyzrfx2WaeY60kYZpPYepSjGz4S.jpg",
    release_date: "2014-06-25",
    title: "Transformers: Age of Extinction",
    vote_average: 5.937,
    movieId: 91314,
    genres: "Science Fiction, Action, Adventure",
  },
  {
    backdrop_path: "/xZ2we4gdiwQmg6D1w9qHlAm5yIf.jpg",
    original_language: "en",
    overview:
      "A bored and domesticated Shrek pacts with deal-maker Rumpelstiltskin to get back to feeling like a real ogre again, but when he's duped and sent to a twisted version of Far Far Away—where Rumpelstiltskin is king, ogres are hunted, and he and Fiona have never met—he sets out to restore his world and reclaim his true love.",
    poster_path:
      "https://image.tmdb.org/t/p/original//6HrfPZtKcGmX2tUWW3cnciZTaSD.jpg",
    release_date: "2010-05-16",
    title: "Shrek Forever After",
    vote_average: 6.375,
    movieId: 10192,
    genres: "Comedy, Adventure, Fantasy, Animation, Family",
  },
  {
    backdrop_path: "/iFPpb2KIWKwBfyqSJivE4JegFPP.jpg",
    original_language: "en",
    overview:
      "When loving Geppetto creates a wooden puppet, his wish is granted when it comes to life as a little wooden boy named Pinocchio. With his faithful friend and conscience Jiminy Cricket by his side, Pinocchio, embarks on fantastic adventures that his bravery, loyalty and honesty until triumphs in his triumphs in his quest for his heart's desire: to become a real boy.",
    poster_path:
      "https://image.tmdb.org/t/p/original//bnZJrLRnoQHpzEJdka1KYfsAF3N.jpg",
    release_date: "1940-02-23",
    title: "Pinocchio",
    vote_average: 7.107,
    movieId: 10895,
    genres: "Animation, Family, Fantasy",
  },
  {
    backdrop_path: "/tgPFZxhDuxWd4VXYaz8eAUznGTF.jpg",
    original_language: "en",
    overview:
      "Batman and Robin deal with relationship issues while preventing Mr. Freeze and Poison Ivy from attacking Gotham City.",
    poster_path:
      "https://image.tmdb.org/t/p/original//cGRDufDDSrFrv7VI4YnmWnslne0.jpg",
    release_date: "1997-06-20",
    title: "Batman & Robin",
    vote_average: 4.359,
    movieId: 415,
    genres: "Action, Science Fiction, Adventure",
  },
  {
    backdrop_path: "/cRLeBlvfSttbsgOcQ0KG8Dorzqk.jpg",
    original_language: "en",
    overview:
      "Life for former United Nations investigator Gerry Lane and his family seems content. Suddenly, the world is plagued by a mysterious infection turning whole human populations into rampaging mindless zombies. After barely escaping the chaos, Lane is persuaded to go on a mission to investigate this disease. What follows is a perilous trek around the world where Lane must brave horrific dangers and long odds to find answers before human civilization falls.",
    poster_path:
      "https://image.tmdb.org/t/p/original//kocvIT68A1NoqxmQVXUqlGLAG3Q.jpg",
    release_date: "2013-06-19",
    title: "World War Z",
    vote_average: 6.814,
    movieId: 72190,
    genres: "Action, Drama, Horror, Science Fiction, Thriller",
  },
  {
    backdrop_path: "/ufUdEHvs31M8yw3HMFjhTaVJIVp.jpg",
    original_language: "en",
    overview:
      "Rocky Balboa proudly holds the world heavyweight boxing championship, but a new challenger has stepped forward: Ivan Drago, a six-foot-four, 261-pound fighter who has the backing of the Soviet Union.",
    poster_path:
      "https://image.tmdb.org/t/p/original//2MHUit4H6OK5adcOjnCN6suCKOl.jpg",
    release_date: "1985-11-21",
    title: "Rocky IV",
    vote_average: 7.086,
    movieId: 1374,
    genres: "Drama",
  },
  {
    backdrop_path: "/sKvQUSyqsFq8e1ts6oo3Xp3dPH2.jpg",
    original_language: "en",
    overview:
      "Suddenly finding herself in the never-before-seen Land of Luck, the unluckiest person in the world must unite with the magical creatures there to turn her luck around.",
    poster_path:
      "https://image.tmdb.org/t/p/original//1HOYvwGFioUFL58UVvDRG6beEDm.jpg",
    release_date: "2022-08-05",
    title: "Luck",
    vote_average: 7.784,
    movieId: 585511,
    genres: "Animation, Adventure, Comedy, Fantasy",
  },
  {
    backdrop_path: "/d1RHScaZc7I8j0lDke1c4AxI435.jpg",
    original_language: "en",
    overview:
      "When the Valley of Peace is threatened, lazy Po the panda discovers his destiny as the \"chosen one\" and trains to become a kung fu hero, but transforming the unsleek slacker into a brave warrior won't be easy. It's up to Master Shifu and the Furious Five -- Tigress, Crane, Mantis, Viper and Monkey -- to give it a try.",
    poster_path:
      "https://image.tmdb.org/t/p/original//wWt4JYXTg5Wr3xBW2phBrMKgp3x.jpg",
    release_date: "2008-06-04",
    title: "Kung Fu Panda",
    vote_average: 7.285,
    movieId: 9502,
    genres: "Action, Adventure, Animation, Family, Comedy",
  },
  {
    backdrop_path: "/4OTYefcAlaShn6TGVK33UxLW9R7.jpg",
    original_language: "en",
    overview:
      "As a collection of history's worst tyrants and criminal masterminds gather to plot a war to wipe out millions, one man must race against time to stop them.",
    poster_path:
      "https://image.tmdb.org/t/p/original//aq4Pwv5Xeuvj6HZKtxyd23e6bE9.jpg",
    release_date: "2021-12-22",
    title: "The King's Man",
    vote_average: 6.77,
    movieId: 476669,
    genres: "Action, Comedy, Adventure, Thriller",
  },
  {
    backdrop_path: "/pcWxKfFNCznTKYy0E8M9nG1cwL4.jpg",
    original_language: "en",
    overview:
      "Lady Bird McPherson, a strong willed, deeply opinionated, artistic 17 year old comes of age in Sacramento. Her relationship with her mother and her upbringing are questioned and tested as she plans to head off to college.",
    poster_path:
      "https://image.tmdb.org/t/p/original//gl66K7zRdtNYGrxyS2YDUP5ASZd.jpg",
    release_date: "2017-09-01",
    title: "Lady Bird",
    vote_average: 7.265,
    movieId: 391713,
    genres: "Drama, Comedy",
  },
  {
    backdrop_path: "/inJjDhCjfhh3RtrJWBmmDqeuSYC.jpg",
    original_language: "en",
    overview:
      "In a time when monsters walk the Earth, humanity’s fight for its future sets Godzilla and Kong on a collision course that will see the two most powerful forces of nature on the planet collide in a spectacular battle for the ages.",
    poster_path:
      "https://image.tmdb.org/t/p/original//pgqgaUx1cJb5oZQQ5v0tNARCeBp.jpg",
    release_date: "2021-03-24",
    title: "Godzilla vs. Kong",
    vote_average: 7.614,
    movieId: 399566,
    genres: "Action, Science Fiction, Adventure",
  },
  {
    backdrop_path: "/rRwD4MoBlkBXWQ6PDnbKRSU5dDu.jpg",
    original_language: "en",
    overview:
      "A wealthy New York investment banking executive hides his alternate psychopathic ego from his co-workers and friends as he escalates deeper into his illogical, gratuitous fantasies.",
    poster_path:
      "https://image.tmdb.org/t/p/original//9uGHEgsiUXjCNq8wdq4r49YL8A1.jpg",
    release_date: "2000-04-13",
    title: "American Psycho",
    vote_average: 7.402,
    movieId: 1359,
    genres: "Thriller, Drama, Crime",
  },
  {
    backdrop_path: "/naouVb8K0wOe0dhxnaZpVEDPwGW.jpg",
    original_language: "en",
    overview:
      "Determined to ensure Superman's ultimate sacrifice was not in vain, Bruce Wayne aligns forces with Diana Prince with plans to recruit a team of metahumans to protect the world from an approaching threat of catastrophic proportions.",
    poster_path:
      "https://image.tmdb.org/t/p/original//tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg",
    release_date: "2021-03-18",
    title: "Zack Snyder's Justice League",
    vote_average: 8.156,
    movieId: 791373,
    genres: "Action, Adventure, Fantasy",
  },
  {
    backdrop_path: "/x9jRnHZlmApkYFMz2mc1E0cfTz9.jpg",
    original_language: "en",
    overview:
      "Under the direction of a ruthless instructor, a talented young drummer begins to pursue perfection at any cost, even his humanity.",
    poster_path:
      "https://image.tmdb.org/t/p/original//7fn624j5lj3xTme2SgiLCeuedmO.jpg",
    release_date: "2014-10-10",
    title: "Whiplash",
    vote_average: 8.382,
    movieId: 244786,
    genres: "Drama, Music",
  },
  {
    backdrop_path: "/5wJ2tckpvwcxGCAgZiccodwEJpf.jpg",
    original_language: "en",
    overview:
      "In the year 10,191, the most precious substance in the universe is the spice Melange. The spice extends life. The spice expands consciousness. The spice is vital to space travel.  The spice exists on only one planet in the entire universe, the vast desert planet Arrakis, also known as Dune.  Its native inhabitants, the Fremen, have long held a prophecy that a man would come, a messiah who would lead them to true freedom.",
    poster_path:
      "https://image.tmdb.org/t/p/original//lyP3eKSEgZkChb77cKMIbydbPSq.jpg",
    release_date: "1984-12-14",
    title: "Dune",
    vote_average: 6.199,
    movieId: 841,
    genres: "Action, Science Fiction, Adventure",
  },
  {
    backdrop_path: "/y8Rmadbft60Cupx6SmSvy8rHENH.jpg",
    original_language: "en",
    overview:
      "Alice, now 19 years old, returns to the whimsical world she first entered as a child and embarks on a journey to discover her true destiny.",
    poster_path:
      "https://image.tmdb.org/t/p/original//o0kre9wRCZz3jjSjaru7QU0UtFz.jpg",
    release_date: "2010-03-03",
    title: "Alice in Wonderland",
    vote_average: 6.636,
    movieId: 12155,
    genres: "Family, Fantasy, Adventure",
  },
  {
    backdrop_path: "/o7JVhqMmrex1TPbmuxl8YXVlcfl.jpg",
    original_language: "en",
    overview:
      "A boy is given the ability to become an adult superhero in times of need with a single magic word.",
    poster_path:
      "https://image.tmdb.org/t/p/original//xnopI5Xtky18MPhK40cZAGAOVeV.jpg",
    release_date: "2019-03-29",
    title: "Shazam!",
    vote_average: 7.016,
    movieId: 287947,
    genres: "Action, Comedy, Fantasy",
  },
  {
    backdrop_path: "/r4OqScx7hVXsG1obaJjJKJNaxHT.jpg",
    original_language: "en",
    overview:
      "Bella once again finds herself surrounded by danger as Seattle is ravaged by a string of mysterious killings and a malicious vampire continues her quest for revenge. In the midst of it all, she is forced to choose between her love for Edward and her friendship with Jacob, knowing that her decision has the potential to ignite the ageless struggle between vampire and werewolf. With her graduation quickly approaching, Bella is confronted with the most important decision of her life.",
    poster_path:
      "https://image.tmdb.org/t/p/original//3mFM80dPzSqoXXuC2UMvLIRWX32.jpg",
    release_date: "2010-06-23",
    title: "The Twilight Saga: Eclipse",
    vote_average: 6.208,
    movieId: 24021,
    genres: "Adventure, Fantasy, Drama, Romance",
  },
  {
    backdrop_path: "/lUIAlOzNVKunMHo7lFDqH8eGsWK.jpg",
    original_language: "es",
    overview:
      "A young pregnant woman named Mia escapes from a country at war by hiding in a maritime container aboard a cargo ship. After a violent storm, Mia gives birth to the child while lost at sea, where she must fight to survive.",
    poster_path:
      "https://image.tmdb.org/t/p/original//8uvCXfpaU1VveV5w9h05OxN0zdN.jpg",
    release_date: "2023-09-29",
    title: "Nowhere",
    vote_average: 7.423,
    movieId: 1151534,
    genres: "Thriller, Drama",
  },
  {
    backdrop_path: "/79X8JkGxzc1tJMi0KxUSaPLooVg.jpg",
    original_language: "en",
    overview:
      "After an unprecedented series of natural disasters threatened the planet, the world's leaders came together to create an intricate network of satellites to control the global climate and keep everyone safe. But now, something has gone wrong: the system built to protect Earth is attacking it, and it becomes a race against the clock to uncover the real threat before a worldwide geostorm wipes out everything and everyone along with it.",
    poster_path:
      "https://image.tmdb.org/t/p/original//nrsx0jEaBgXq4PWo7SooSnYJTv.jpg",
    release_date: "2017-10-12",
    title: "Geostorm",
    vote_average: 6.121,
    movieId: 274855,
    genres: "Action, Science Fiction, Thriller",
  },
  {
    backdrop_path: "/ecvy2kMxsJ60ej52beZ0F8EOGkL.jpg",
    original_language: "en",
    overview:
      "World War II soldier-turned-U.S. Marshal Teddy Daniels investigates the disappearance of a patient from a hospital for the criminally insane, but his efforts are compromised by troubling visions and a mysterious doctor.",
    poster_path:
      "https://image.tmdb.org/t/p/original//4GDy0PHYX3VRXUtwK5ysFbg3kEx.jpg",
    release_date: "2010-02-14",
    title: "Shutter Island",
    vote_average: 8.203,
    movieId: 11324,
    genres: "Drama, Thriller, Mystery",
  },
  {
    backdrop_path: "/m8JTwHFwX7I7JY5fPe4SjqejWag.jpg",
    original_language: "en",
    overview:
      "Super-Hero partners Scott Lang and Hope van Dyne, along with with Hope's parents Janet van Dyne and Hank Pym, and Scott's daughter Cassie Lang, find themselves exploring the Quantum Realm, interacting with strange new creatures and embarking on an adventure that will push them beyond the limits of what they thought possible.",
    poster_path:
      "https://image.tmdb.org/t/p/original//qnqGbB22YJ7dSs4o6M7exTpNxPz.jpg",
    release_date: "2023-02-15",
    title: "Ant-Man and the Wasp: Quantumania",
    vote_average: 6.349,
    movieId: 640146,
    genres: "Action, Adventure, Science Fiction",
  },
  {
    backdrop_path: "/a4r8xcRwTgKIUKdWtxFXyxTZLeN.jpg",
    original_language: "en",
    overview:
      'Julia becomes worried about her boyfriend Holt when he explores the dark urban legend of a mysterious videotape said to kill the watcher seven days after viewing. She sacrifices herself to save her boyfriend and in doing so makes a horrifying discovery: there is a "movie within the movie" that no one has ever seen before.',
    poster_path:
      "https://image.tmdb.org/t/p/original//5FoczK6tDFzC9OyHiMMNIeNspek.jpg",
    release_date: "2017-02-01",
    title: "Rings",
    vote_average: 4.974,
    movieId: 14564,
    genres: "Horror",
  },
  {
    backdrop_path: "/rcUcYzGGicDvhDs58uM44tJKB9F.jpg",
    original_language: "en",
    overview:
      "Long ago, in the fantasy world of Kumandra, humans and dragons lived together in harmony. But when an evil force threatened the land, the dragons sacrificed themselves to save humanity. Now, 500 years later, that same evil has returned and it’s up to a lone warrior, Raya, to track down the legendary last dragon to restore the fractured land and its divided people.",
    poster_path:
      "https://image.tmdb.org/t/p/original//lPsD10PP4rgUGiGR4CCXA6iY0QQ.jpg",
    release_date: "2021-03-03",
    title: "Raya and the Last Dragon",
    vote_average: 7.858,
    movieId: 527774,
    genres: "Animation, Family, Fantasy, Action, Adventure",
  },
  {
    backdrop_path: "/qX5T5GVAcq2UKaaiAx5SZp1AtlY.jpg",
    original_language: "en",
    overview:
      "Every child comes into the world full of promise, and none more so than Chappie: he is gifted, special, a prodigy. Like any child, Chappie will come under the influence of his surroundings—some good, some bad—and he will rely on his heart and soul to find his way in the world and become his own man. But there's one thing that makes Chappie different from any one else: he is a robot.",
    poster_path:
      "https://image.tmdb.org/t/p/original//hpnuXlKKWznTgbheGe4iQXzkuwJ.jpg",
    release_date: "2015-03-04",
    title: "Chappie",
    vote_average: 6.784,
    movieId: 198184,
    genres: "Crime, Action, Science Fiction",
  },
  {
    backdrop_path: "/7Nwnmyzrtd0FkcRyPqmdzTPppQa.jpg",
    original_language: "en",
    overview:
      "A New York stockbroker refuses to cooperate in a large securities fraud case involving corruption on Wall Street, corporate banking world and mob infiltration. Based on Jordan Belfort's autobiography.",
    poster_path:
      "https://image.tmdb.org/t/p/original//34m2tygAYBGqA9MXKhRDtzYd4MR.jpg",
    release_date: "2013-12-25",
    title: "The Wolf of Wall Street",
    vote_average: 8.036,
    movieId: 106646,
    genres: "Crime, Drama, Comedy",
  },
  {
    backdrop_path: "/4PPC7fKClu0u7NTbo5xgV4vb5VD.jpg",
    original_language: "en",
    overview:
      "After a series of mysterious deaths befalls their small town, an offbeat group of friends led by Sidney Prescott become the target of a masked killer.",
    poster_path:
      "https://image.tmdb.org/t/p/original//3O3klyyYpAZBBE4n7IngzTomRDp.jpg",
    release_date: "1996-12-20",
    title: "Scream",
    vote_average: 7.422,
    movieId: 4232,
    genres: "Crime, Horror, Mystery",
  },
  {
    backdrop_path: "/qkl57wzSFrpi2sRpoc2mZJbMuLP.jpg",
    original_language: "en",
    overview:
      "After the birth of Renesmee, the Cullens gather other vampire clans in order to protect the child from a false allegation that puts the family in front of the Volturi.",
    poster_path:
      "https://image.tmdb.org/t/p/original//7IGdPaKujv0BjI0Zd0m0a4CzEjJ.jpg",
    release_date: "2012-11-13",
    title: "The Twilight Saga: Breaking Dawn - Part 2",
    vote_average: 6.466,
    movieId: 50620,
    genres: "Adventure, Fantasy, Drama, Romance",
  },
  {
    backdrop_path: "/kP8rK9dGS1pr0HrnmXfIi2heWjo.jpg",
    original_language: "en",
    overview:
      "After his wife dies, a blacksmith named Balian is thrust into royalty, political intrigue and bloody holy wars during the Crusades.",
    poster_path:
      "https://image.tmdb.org/t/p/original//uk55nBEFIQFveIiy9jvLGiVtk4h.jpg",
    release_date: "2005-05-03",
    title: "Kingdom of Heaven",
    vote_average: 6.958,
    movieId: 1495,
    genres: "Drama, Action, Adventure, History, War",
  },
  {
    backdrop_path: "/eTvN54pd83TrSEOz6wbsXEJktCV.jpg",
    original_language: "en",
    overview:
      "During the war in Afghanistan, a local interpreter risks his own life to carry an injured sergeant across miles of grueling terrain.",
    poster_path:
      "https://image.tmdb.org/t/p/original//kVG8zFFYrpyYLoHChuEeOGAd6Ru.jpg",
    release_date: "2023-04-19",
    title: "Guy Ritchie's The Covenant",
    vote_average: 7.779,
    movieId: 882569,
    genres: "War, Action, Thriller",
  },
  {
    backdrop_path: "/egg7KFi18TSQc1s24RMmR9i2zO6.jpg",
    original_language: "en",
    overview:
      "A botched store robbery places Wonder Woman in a global battle against a powerful and mysterious ancient force that puts her powers in jeopardy.",
    poster_path:
      "https://image.tmdb.org/t/p/original//8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg",
    release_date: "2020-12-16",
    title: "Wonder Woman 1984",
    vote_average: 6.441,
    movieId: 464052,
    genres: "Action, Adventure, Fantasy",
  },
  {
    backdrop_path: "/747dgDfL5d8esobk7h4odaOFhUq.jpg",
    original_language: "en",
    overview:
      "Jerry, a small-town Minnesota car salesman is bursting at the seams with debt... but he's got a plan. He's going to hire two thugs to kidnap his wife in a scheme to collect a hefty ransom from his wealthy father-in-law. It's going to be a snap and nobody's going to get hurt... until people start dying. Enter Police Chief Marge, a coffee-drinking, parka-wearing - and extremely pregnant - investigator who'll stop at nothing to get her man. And if you think her small-time investigative skills will give the crooks a run for their ransom... you betcha!",
    poster_path:
      "https://image.tmdb.org/t/p/original//rt7cpEr1uP6RTZykBFhBTcRaKvG.jpg",
    release_date: "1996-03-08",
    title: "Fargo",
    vote_average: 7.862,
    movieId: 275,
    genres: "Crime, Drama, Thriller",
  },
  {
    backdrop_path: "/wyvUmyzqGOBDyqLHRSukGDjI7bH.jpg",
    original_language: "en",
    overview:
      'Aibileen Clark is a middle-aged African-American maid who has spent her life raising white children and has recently lost her only son; Minny Jackson is an African-American maid who has often offended her employers despite her family\'s struggles with money and her desperate need for jobs; and Eugenia "Skeeter" Phelan is a young white woman who has recently moved back home after graduating college to find out her childhood maid has mysteriously disappeared. These three stories intertwine to explain how life in Jackson, Mississippi revolves around "the help"; yet they are always kept at a certain distance because of racial lines.',
    poster_path:
      "https://image.tmdb.org/t/p/original//7XLSwxpfpPoJyTdJVot6a42TS2V.jpg",
    release_date: "2011-08-09",
    title: "The Help",
    vote_average: 8.21,
    movieId: 50014,
    genres: "Drama",
  },
  {
    backdrop_path: "/rucPoqgtymaVuO8rkTegbnvnR8C.jpg",
    original_language: "en",
    overview:
      "Retired military commander Colonel Dale Murphy hosts the simulated post-apocalyptic reality show where participants are challenged to survive a remote West Virginia wasteland. But the show turns into a nightmarish showdown when each realizes they are being hunted by an inbred family of cannibals determined to make them all dinner!",
    poster_path:
      "https://image.tmdb.org/t/p/original//nptL3mMWNNssU78Lcfb3LaXQEqu.jpg",
    release_date: "2007-08-25",
    title: "Wrong Turn 2: Dead End",
    vote_average: 6.1,
    movieId: 13186,
    genres: "Horror, Thriller",
  },
  {
    backdrop_path: "/9J8dyrMfr0oK9awMjufLDY5L8v0.jpg",
    original_language: "en",
    overview:
      "Cal Weaver is living the American dream. He has a good job, a beautiful house, great children and a beautiful wife, named Emily. Cal's seemingly perfect life unravels, however, when he learns that Emily has been unfaithful and wants a divorce. Over 40 and suddenly single, Cal is adrift in the fickle world of dating. Enter, Jacob Palmer, a self-styled player who takes Cal under his wing and teaches him how to be a hit with the ladies.",
    poster_path:
      "https://image.tmdb.org/t/p/original//p4RafgAPk558muOjnBMHhMArjS2.jpg",
    release_date: "2011-07-29",
    title: "Crazy, Stupid, Love.",
    vote_average: 7.257,
    movieId: 50646,
    genres: "Comedy, Drama, Romance",
  },
  {
    backdrop_path: "/dIWwZW7dJJtqC6CgWzYkNVKIUm8.jpg",
    original_language: "ja",
    overview:
      "High schoolers Mitsuha and Taki are complete strangers living separate lives. But one night, they suddenly switch places. Mitsuha wakes up in Taki’s body, and he in hers. This bizarre occurrence continues to happen randomly, and the two must adjust their lives around each other.",
    poster_path:
      "https://image.tmdb.org/t/p/original//q719jXXEzOoYaps6babgKnONONX.jpg",
    release_date: "2016-08-26",
    title: "Your Name.",
    vote_average: 8.492,
    movieId: 372058,
    genres: "Animation, Romance, Drama",
  },
  {
    backdrop_path: "/hZnnUq0mrUQ3e54SJVca4mf2oAQ.jpg",
    original_language: "en",
    overview:
      'The Daywalker known as "Blade" - a half-vampire, half-mortal man - becomes the protector of humanity against an underground army of vampires.',
    poster_path:
      "https://image.tmdb.org/t/p/original//oWT70TvbsmQaqyphCZpsnQR7R32.jpg",
    release_date: "1998-08-21",
    title: "Blade",
    vote_average: 6.788,
    movieId: 36647,
    genres: "Horror, Action",
  },
  {
    backdrop_path: "/7JhsJxNmdW0y4IyNrHy10cECrAz.jpg",
    original_language: "en",
    overview:
      "Lenny has relocated his family back to the small town where he and his friends grew up. This time around, the grown ups are the ones learning lessons from their kids on a day notoriously full of surprises—the last day of school.",
    poster_path:
      "https://image.tmdb.org/t/p/original//hT6ijOtjtYrnyDhN7VA2QWyGFAm.jpg",
    release_date: "2013-07-11",
    title: "Grown Ups 2",
    vote_average: 6.13,
    movieId: 109418,
    genres: "Comedy",
  },
  {
    backdrop_path: "/2ex2beZ4ssMeOduLD0ILzXKCiep.jpg",
    original_language: "en",
    overview:
      "After the re-emergence of the world's first mutant, world-destroyer Apocalypse, the X-Men must unite to defeat his extinction level plan.",
    poster_path:
      "https://image.tmdb.org/t/p/original//2mtQwJKVKQrZgTz49Dizb25eOQQ.jpg",
    release_date: "2016-05-18",
    title: "X-Men: Apocalypse",
    vote_average: 6.514,
    movieId: 246655,
    genres: "Action, Adventure, Science Fiction, Fantasy",
  },
  {
    backdrop_path: "/cRdA9xjHBbobw4LJFsQ3j1CgpVq.jpg",
    original_language: "en",
    overview:
      "After being resurrected by a sinister entity, Art the Clown returns to Miles County where he must hunt down and destroy a teenage girl and her younger brother on Halloween night.  As the body count rises, the siblings fight to stay alive while uncovering the true nature of Art's evil intent.",
    poster_path:
      "https://image.tmdb.org/t/p/original//8gLhu8UFPZfH2Hv11JhTZkb9CVl.jpg",
    release_date: "2022-10-06",
    title: "Terrifier 2",
    vote_average: 6.767,
    movieId: 663712,
    genres: "Horror, Thriller",
  },
  {
    backdrop_path: "/zcc0My3G4SYR72VuEYHNcUWkkW0.jpg",
    original_language: "en",
    overview:
      "Frodo Baggins and the other members of the Fellowship continue on their sacred quest to destroy the One Ring--but on separate paths. Their destinies lie at two towers--Orthanc Tower in Isengard, where the corrupt wizard Saruman awaits, and Sauron's fortress at Barad-dur, deep within the dark lands of Mordor. Frodo and Sam are trekking to Mordor to destroy the One Ring of Power while Gimli, Legolas and Aragorn search for the orc-captured Merry and Pippin. All along, nefarious wizard Saruman awaits the Fellowship members at the Orthanc Tower in Isengard.",
    poster_path:
      "https://image.tmdb.org/t/p/original//5VTN0pR8gcqV3EPUHHfMGnJYN9L.jpg",
    release_date: "2002-12-18",
    title: "The Lord of the Rings: The Two Towers",
    vote_average: 8.395,
    movieId: 121,
    genres: "Adventure, Fantasy, Action",
  },
  {
    backdrop_path: "/q7vmCCmyiHnuKGMzHZlr0fD44b9.jpg",
    original_language: "en",
    overview:
      "When her father unexpectedly passes away, young Ella finds herself at the mercy of her cruel stepmother and her daughters. Never one to give up hope, Ella's fortunes begin to change after meeting a dashing stranger in the woods.",
    poster_path:
      "https://image.tmdb.org/t/p/original//j91LJmcWo16CArFOoapsz84bwxb.jpg",
    release_date: "2015-03-06",
    title: "Cinderella",
    vote_average: 6.815,
    movieId: 150689,
    genres: "Romance, Fantasy, Family, Drama",
  },
  {
    backdrop_path: "/hu4psJoKxDYezvvS4GlLF531fom.jpg",
    original_language: "en",
    overview:
      "In an alternate present-day where magical creatures live among us, two L.A. cops become embroiled in a prophesied turf battle.",
    poster_path:
      "https://image.tmdb.org/t/p/original//whkT53Sv2vKAUiknQ13pqcWaPXB.jpg",
    release_date: "2017-12-22",
    title: "Bright",
    vote_average: 6.155,
    movieId: 400106,
    genres: "Fantasy, Action, Thriller",
  },
  {
    backdrop_path: "/c9VuAhIVz51NJnQnkdj8TDwFcTz.jpg",
    original_language: "en",
    overview:
      "Following a grueling five-week shift at an Alaskan oil refinery, workers led by sharpshooter John Ottway are flying home for a much-needed vacation. But a brutal storm causes their plane to crash in the frozen wilderness, and only eight men, including Ottway, survive. As they trek southward toward civilization and safety, Ottway and his companions must battle mortal injuries, the icy elements, and a pack of hungry wolves.",
    poster_path:
      "https://image.tmdb.org/t/p/original//a0Vt3wx8ciKmPt4iXPx9sH4HBVU.jpg",
    release_date: "2012-01-26",
    title: "The Grey",
    vote_average: 6.567,
    movieId: 75174,
    genres: "Drama, Thriller, Action, Adventure",
  },
  {
    backdrop_path: "/xqaN2WYQclQlqvKvsOcNgOx2vRn.jpg",
    original_language: "ja",
    overview:
      "Sophie, a young milliner, is turned into an elderly woman by a witch who enters her shop and curses her. She encounters a wizard named Howl and gets caught up in his resistance to fighting for the king.",
    poster_path:
      "https://image.tmdb.org/t/p/original//6pZgH10jhpToPcf0uvyTCPFhWpI.jpg",
    release_date: "2004-09-09",
    title: "Howl's Moving Castle",
    vote_average: 8.407,
    movieId: 4935,
    genres: "Fantasy, Animation, Adventure",
  },
  {
    backdrop_path: "/yLpMWckfrzRiNZxB2tgBa5TkUKh.jpg",
    original_language: "en",
    overview:
      "The new found married bliss of Bella Swan and vampire Edward Cullen is cut short when a series of betrayals and misfortunes threatens to destroy their world.",
    poster_path:
      "https://image.tmdb.org/t/p/original//qs8LsHKYlVRmJbFUiSUhhRAygwj.jpg",
    release_date: "2011-11-16",
    title: "The Twilight Saga: Breaking Dawn - Part 1",
    vote_average: 6.2,
    movieId: 50619,
    genres: "Adventure, Fantasy, Romance",
  },
  {
    backdrop_path: "/tsku2v6q5fd5DOOF53Kmzetu322.jpg",
    original_language: "en",
    overview:
      "A 12-year-old boy searches for the one thing that will enable him to win the affection of the girl of his dreams. To find it he must discover the story of the Lorax, the grumpy yet charming creature who fights to protect his world.",
    poster_path:
      "https://image.tmdb.org/t/p/original//tePFnZFw5JvjwjQjaKkqDPNMLPU.jpg",
    release_date: "2012-03-01",
    title: "The Lorax",
    vote_average: 6.494,
    movieId: 73723,
    genres: "Animation, Family",
  },
  {
    backdrop_path: "/3IzR3VhZAyhxVnuRRUHFLkfK4hT.jpg",
    original_language: "en",
    overview:
      "When an IMF mission ends badly, the world is faced with dire consequences. As Ethan Hunt takes it upon himself to fulfill his original briefing, the CIA begin to question his loyalty and his motives. The IMF team find themselves in a race against time, hunted by assassins while trying to prevent a global catastrophe.",
    poster_path:
      "https://image.tmdb.org/t/p/original//AkJQpZp9WoNdj7pLYSj1L0RcMMN.jpg",
    release_date: "2018-07-13",
    title: "Mission: Impossible - Fallout",
    vote_average: 7.428,
    movieId: 353081,
    genres: "Action, Adventure",
  },
  {
    backdrop_path: "/mzfx54nfDPTUXZOG48u4LaEheDy.jpg",
    original_language: "en",
    overview:
      "A man with a low IQ has accomplished great things in his life and been present during significant historic events—in each case, far exceeding what anyone imagined he could do. But despite all he has achieved, his one true love eludes him.",
    poster_path:
      "https://image.tmdb.org/t/p/original//arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
    release_date: "1994-06-23",
    title: "Forrest Gump",
    vote_average: 8.475,
    movieId: 13,
    genres: "Comedy, Drama, Romance",
  },
  {
    backdrop_path: "/6MKr3KgOLmzOP6MSuZERO41Lpkt.jpg",
    original_language: "en",
    overview:
      "In 1970s London amidst the punk rock revolution, a young grifter named Estella is determined to make a name for herself with her designs. She befriends a pair of young thieves who appreciate her appetite for mischief, and together they are able to build a life for themselves on the London streets. One day, Estella’s flair for fashion catches the eye of the Baroness von Hellman, a fashion legend who is devastatingly chic and terrifyingly haute. But their relationship sets in motion a course of events and revelations that will cause Estella to embrace her wicked side and become the raucous, fashionable and revenge-bent Cruella.",
    poster_path:
      "https://image.tmdb.org/t/p/original//wToO8opxkGwKgSfJ1JK8tGvkG6U.jpg",
    release_date: "2021-05-26",
    title: "Cruella",
    vote_average: 8.019,
    movieId: 337404,
    genres: "Comedy, Crime",
  },
  {
    backdrop_path: "/rtr0l61RxLPkmZHbZj0WFlGx5G5.jpg",
    original_language: "en",
    overview:
      "A kindly occupational therapist undergoes a new procedure to be shrunken to four inches tall so that he and his wife can help save the planet and afford a nice lifestyle at the same time.",
    poster_path:
      "https://image.tmdb.org/t/p/original//5bNzInSSAXfr0MFlHfb4IoQePVx.jpg",
    release_date: "2017-12-22",
    title: "Downsizing",
    vote_average: 5.352,
    movieId: 301337,
    genres: "Drama, Science Fiction",
  },
  {
    backdrop_path: "/lh5lbisD4oDbEKgUxoRaZU8HVrk.jpg",
    original_language: "en",
    overview:
      "Driven by tragedy, billionaire Bruce Wayne dedicates his life to uncovering and defeating the corruption that plagues his home, Gotham City.  Unable to work within the system, he instead creates a new identity, a symbol of fear for the criminal underworld - The Batman.",
    poster_path:
      "https://image.tmdb.org/t/p/original//4MpN4kIEqUjW8OPtOQJXlTdHiJV.jpg",
    release_date: "2005-06-10",
    title: "Batman Begins",
    vote_average: 7.707,
    movieId: 272,
    genres: "Action, Crime, Drama",
  },
  {
    backdrop_path: "/se5Hxz7PArQZOG3Nx2bpfOhLhtV.jpg",
    original_language: "en",
    overview:
      "Bob Parr has given up his superhero days to log in time as an insurance adjuster and raise his three children with his formerly heroic wife in suburbia. But when he receives a mysterious assignment, it's time to get back into costume.",
    poster_path:
      "https://image.tmdb.org/t/p/original//2LqaLgk4Z226KkgPJuiOQ58wvrm.jpg",
    release_date: "2004-10-27",
    title: "The Incredibles",
    vote_average: 7.706,
    movieId: 9806,
    genres: "Action, Adventure, Animation, Family",
  },
  {
    backdrop_path: "/mVr0UiqyltcfqxbAUcLl9zWL8ah.jpg",
    original_language: "en",
    overview:
      "Thirty years after the events of the first film, a new blade runner, LAPD Officer K, unearths a long-buried secret that has the potential to plunge what's left of society into chaos. K's discovery leads him on a quest to find Rick Deckard, a former LAPD blade runner who has been missing for 30 years.",
    poster_path:
      "https://image.tmdb.org/t/p/original//gajva2L0rPYkEWjzgFlBXCAVBE5.jpg",
    release_date: "2017-10-04",
    title: "Blade Runner 2049",
    vote_average: 7.6,
    movieId: 335984,
    genres: "Science Fiction, Drama",
  },
  {
    backdrop_path: "/tHkujDqdPC9VQoFpEWU0QgWIZyM.jpg",
    original_language: "en",
    overview:
      "John Wick is forced out of retirement by a former associate looking to seize control of a shadowy international assassins’ guild. Bound by a blood oath to aid him, Wick travels to Rome and does battle against some of the world’s most dangerous killers.",
    poster_path:
      "https://image.tmdb.org/t/p/original//hXWBc0ioZP3cN4zCu6SN3YHXZVO.jpg",
    release_date: "2017-02-08",
    title: "John Wick: Chapter 2",
    vote_average: 7.328,
    movieId: 324552,
    genres: "Action, Thriller, Crime",
  },
  {
    backdrop_path: "/fK5ssgvtI43z19FoWigdlqgpLRE.jpg",
    original_language: "en",
    overview:
      "In the distant future, Earth has become a desolate wasteland, abandoned by humanity and overrun by mountains of trash. Amidst the rubble, a small, lovable robot named WALL-E spends his days tirelessly cleaning up the mess. But when a sleek, high-tech robot named EVE arrives on a mission to search for signs of life, WALL-E is immediately smitten. Together, they embark on a journey across the cosmos.",
    poster_path:
      "https://image.tmdb.org/t/p/original//hbhFnRzzg6ZDmm8YAmxBnQpQIPh.jpg",
    release_date: "2008-06-22",
    title: "WALL·E",
    vote_average: 8.09,
    movieId: 10681,
    genres: "Animation, Family, Science Fiction",
  },
  {
    backdrop_path: "/8MksSPtPvqcSDruLdpibPmTP7LY.jpg",
    original_language: "en",
    overview:
      "Set ten years after the events of the original, James Cameron’s classic sci-fi action flick tells the story of a second attempt to get the rid of rebellion leader John Connor, this time targeting the boy himself. However, the rebellion has sent a reprogrammed terminator to protect Connor.",
    poster_path:
      "https://image.tmdb.org/t/p/original//5M0j0B18abtBI5gi2RhfjjurTqb.jpg",
    release_date: "1991-07-03",
    title: "Terminator 2: Judgment Day",
    vote_average: 8.117,
    movieId: 280,
    genres: "Action, Thriller, Science Fiction",
  },
  {
    backdrop_path: "/2q75qMwDijJPVbTp6SDDojjEEXg.jpg",
    original_language: "en",
    overview:
      "After their high school basketball coach passes away, five good friends and former teammates reunite for a Fourth of July holiday weekend.",
    poster_path:
      "https://image.tmdb.org/t/p/original//cQGM5k1NtU85n4TUlrOrwijSCcm.jpg",
    release_date: "2010-06-24",
    title: "Grown Ups",
    vote_average: 6.38,
    movieId: 38365,
    genres: "Comedy",
  },
  {
    backdrop_path: "/Ivj0wsH0RU2IEGc8LdvCr97WL1.jpg",
    original_language: "en",
    overview:
      "Ex-government operative Bryan Mills finds his life is shattered when he's falsely accused of a murder that hits close to home. As he's pursued by a savvy police inspector, Mills employs his particular set of skills to track the real killer and exact his unique brand of justice.",
    poster_path:
      "https://image.tmdb.org/t/p/original//vzvMXMypMq7ieDofKThsxjHj9hn.jpg",
    release_date: "2014-12-16",
    title: "Taken 3",
    vote_average: 6.252,
    movieId: 260346,
    genres: "Thriller, Action",
  },
  {
    backdrop_path: "/qSNz1G1Ts8fFw6v4Vae4aMAjcY7.jpg",
    original_language: "en",
    overview:
      "The King of Far Far Away has died and Shrek and Fiona are to become King & Queen. However, Shrek wants to return to his cozy swamp and live in peace and quiet, so when he finds out there is another heir to the throne, they set off to bring him back to rule the kingdom.",
    poster_path:
      "https://image.tmdb.org/t/p/original//n4SexGGQzI26E269tfpa80MZaGV.jpg",
    release_date: "2007-05-17",
    title: "Shrek the Third",
    vote_average: 6.297,
    movieId: 810,
    genres: "Fantasy, Adventure, Animation, Comedy, Family",
  },
  {
    backdrop_path: "/1IWaKG7AWiYMhADxhGtnElDJAGI.jpg",
    original_language: "en",
    overview:
      "In the year 2035, convict James Cole reluctantly volunteers to be sent back in time to discover the origin of a deadly virus that wiped out nearly all of the earth's population and forced the survivors into underground communities. But when Cole is mistakenly sent to 1990 instead of 1996, he's arrested and locked up in a mental hospital. There he meets psychiatrist Dr. Kathryn Railly, and patient Jeffrey Goines, the son of a famous virus expert, who may hold the key to the mysterious rogue group, the Army of the 12 Monkeys, thought to be responsible for unleashing the killer disease.",
    poster_path:
      "https://image.tmdb.org/t/p/original//gt3iyguaCIw8DpQZI1LIN5TohM2.jpg",
    release_date: "1995-12-29",
    title: "Twelve Monkeys",
    vote_average: 7.604,
    movieId: 63,
    genres: "Science Fiction, Thriller, Mystery",
  },
  {
    backdrop_path: "/xyXmtuvsoM5J3yNad0nvcetpBdY.jpg",
    original_language: "en",
    overview:
      "Bilbo Baggins, a hobbit enjoying his quiet life, is swept into an epic quest by Gandalf the Grey and thirteen dwarves who seek to reclaim their mountain home from Smaug, the dragon.",
    poster_path:
      "https://image.tmdb.org/t/p/original//yHA9Fc37VmpUA5UncTxxo3rTGVA.jpg",
    release_date: "2012-12-12",
    title: "The Hobbit: An Unexpected Journey",
    vote_average: 7.354,
    movieId: 49051,
    genres: "Adventure, Fantasy, Action",
  },
  {
    backdrop_path: "/5QRRdnMWtAeu8Zgje2Gdwuo7gd6.jpg",
    original_language: "en",
    overview:
      "Away at college, Sidney Prescott thought she'd finally put the shocking murders that shattered her life behind her... until a copycat killer begins acting out a real-life sequel.",
    poster_path:
      "https://image.tmdb.org/t/p/original//dORlVasiaDkJXTqt9bdH7nFNs6C.jpg",
    release_date: "1997-12-12",
    title: "Scream 2",
    vote_average: 6.492,
    movieId: 4233,
    genres: "Horror, Mystery",
  },
  {
    backdrop_path: "/msnknPOg9dx86b0YozXOFP8PgBI.jpg",
    original_language: "en",
    overview:
      "Skipper, Kowalski, Rico and Private join forces with undercover organization The North Wind to stop the villainous Dr. Octavius Brine from destroying the world as we know it.",
    poster_path:
      "https://image.tmdb.org/t/p/original//dXbpNrPDZDMEbujFoOxmMNQVMHa.jpg",
    release_date: "2014-11-22",
    title: "Penguins of Madagascar",
    vote_average: 6.532,
    movieId: 270946,
    genres: "Family, Animation, Adventure, Comedy",
  },
  {
    backdrop_path: "/5ccklJJR9McV3nzAgurdbc5nAlz.jpg",
    original_language: "en",
    overview:
      "In 1993, the Search for Extra Terrestrial Intelligence Project receives a transmission detailing an alien DNA structure, along with instructions on how to splice it with human DNA. The result is Sil, a sensual but deadly creature who can change from a beautiful woman to an armour-plated killing machine in the blink of an eye.",
    poster_path:
      "https://image.tmdb.org/t/p/original//cT5wdyo8kT7dycqjrolJ2sHWkFx.jpg",
    release_date: "1995-07-07",
    title: "Species",
    vote_average: 6,
    movieId: 9348,
    genres: "Science Fiction, Horror, Action",
  },
  {
    backdrop_path: "/7py8kUCYaOdFn1TfVS87BDBySOz.jpg",
    original_language: "en",
    overview:
      "A bank teller discovers he is actually a background player in an open-world video game, and decides to become the hero of his own story. Now, in a world where there are no limits, he is determined to be the guy who saves his world his way before it's too late.",
    poster_path:
      "https://image.tmdb.org/t/p/original//xmbU4JTUm8rsdtn7Y3Fcm30GpeT.jpg",
    release_date: "2021-08-11",
    title: "Free Guy",
    vote_average: 7.507,
    movieId: 550988,
    genres: "Comedy, Adventure, Science Fiction",
  },
  {
    backdrop_path: "/7PoWlbQg7ZxgwofFRrkytvpLvJD.jpg",
    original_language: "en",
    overview:
      "A police chief in the war-torn streets of Los Angeles discovers that an extraterrestrial creature is hunting down residents - and that he is the next target.",
    poster_path:
      "https://image.tmdb.org/t/p/original//83X4VwY9sdSJykskmsplIVG0a4h.jpg",
    release_date: "1990-11-21",
    title: "Predator 2",
    vote_average: 6.282,
    movieId: 169,
    genres: "Science Fiction, Action, Thriller",
  },
  {
    backdrop_path: "/ytTQoYkdpsgtfDWrNFCei8Mfbxu.jpg",
    original_language: "en",
    overview:
      "Searching for a safer habitat, the prehistoric Crood family discovers an idyllic, walled-in paradise that meets all of its needs. Unfortunately, they must also learn to live with the Bettermans -- a family that's a couple of steps above the Croods on the evolutionary ladder. As tensions between the new neighbors start to rise, a new threat soon propels both clans on an epic adventure that forces them to embrace their differences, draw strength from one another, and survive together.",
    poster_path:
      "https://image.tmdb.org/t/p/original//tbVZ3Sq88dZaCANlUcewQuHQOaE.jpg",
    release_date: "2020-11-25",
    title: "The Croods: A New Age",
    vote_average: 7.49,
    movieId: 529203,
    genres: "Animation, Family, Adventure, Fantasy, Comedy",
  },
  {
    backdrop_path: "/7C921eWK06n12c1miRXnYoEu5Yv.jpg",
    original_language: "en",
    overview:
      "Thrust into an all-new adventure, a down-on-his-luck Capt. Jack Sparrow feels the winds of ill-fortune blowing even more strongly when deadly ghost sailors led by his old nemesis, the evil Capt. Salazar, escape from the Devil's Triangle. Jack's only hope of survival lies in seeking out the legendary Trident of Poseidon, but to find it, he must forge an uneasy alliance with a brilliant and beautiful astronomer and a headstrong young man in the British navy.",
    poster_path:
      "https://image.tmdb.org/t/p/original//qwoGfcg6YUS55nUweKGujHE54Wy.jpg",
    release_date: "2017-05-23",
    title: "Pirates of the Caribbean: Dead Men Tell No Tales",
    vote_average: 6.654,
    movieId: 166426,
    genres: "Adventure, Action, Fantasy",
  },
  {
    backdrop_path: "/3ZVEtQxVPpEp5LNpAULDcxadTU3.jpg",
    original_language: "en",
    overview:
      "In the year 180, the death of emperor Marcus Aurelius throws the Roman Empire into chaos.  Maximus is one of the Roman army's most capable and trusted generals and a key advisor to the emperor.  As Marcus' devious son Commodus ascends to the throne, Maximus is set to be executed.  He escapes, but is captured by slave traders.  Renamed Spaniard and forced to become a gladiator, Maximus must battle to the death with other men for the amusement of paying audiences.",
    poster_path:
      "https://image.tmdb.org/t/p/original//ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
    release_date: "2000-05-04",
    title: "Gladiator",
    vote_average: 8.2,
    movieId: 98,
    genres: "Action, Drama, Adventure",
  },
  {
    backdrop_path: "/5MnP0h7RcUCeX7gpxMYoMScmfq7.jpg",
    original_language: "en",
    overview:
      "Five years have passed since Hiccup and Toothless united the dragons and Vikings of Berk. Now, they spend their time charting unmapped territories. During one of their adventures, the pair discover a secret cave that houses hundreds of wild dragons -- and a mysterious dragon rider who turns out to be Hiccup's mother, Valka. Hiccup and Toothless then find themselves at the center of a battle to protect Berk from a power-hungry warrior named Drago.",
    poster_path:
      "https://image.tmdb.org/t/p/original//d13Uj86LdbDLrfDoHR5aDOFYyJC.jpg",
    release_date: "2014-06-05",
    title: "How to Train Your Dragon 2",
    vote_average: 7.674,
    movieId: 82702,
    genres: "Fantasy, Action, Adventure, Animation, Comedy, Family",
  },
  {
    backdrop_path: "/g38W2qmTlpFog1TAnT86FOOLBFT.jpg",
    original_language: "en",
    overview:
      "Follow the adventures of Belle, a bright young woman who finds herself in the castle of a prince who's been turned into a mysterious beast. With the help of the castle's enchanted staff, Belle soon learns the most important lesson of all -- that true beauty comes from within.",
    poster_path:
      "https://image.tmdb.org/t/p/original//hUJ0UvQ5tgE2Z9WpfuduVSdiCiU.jpg",
    release_date: "1991-10-22",
    title: "Beauty and the Beast",
    vote_average: 7.735,
    movieId: 10020,
    genres: "Romance, Family, Animation, Fantasy",
  },
  {
    backdrop_path: "/2Cpg8hUn60PK9CW9d5SWf605Ah8.jpg",
    original_language: "en",
    overview:
      "After years of being sheltered from the human world, the Turtle brothers set out to win the hearts of New Yorkers and be accepted as normal teenagers through heroic acts. Their new friend April O'Neil helps them take on a mysterious crime syndicate, but they soon get in over their heads when an army of mutants is unleashed upon them.",
    poster_path:
      "https://image.tmdb.org/t/p/original//4oLd3iipWYgX4HatkJ8Bi65Ck3P.jpg",
    release_date: "2023-07-31",
    title: "Teenage Mutant Ninja Turtles: Mutant Mayhem",
    vote_average: 7.247,
    movieId: 614930,
    genres: "Animation, Comedy, Action, Science Fiction",
  },
  {
    backdrop_path: "/x2wOlXuK4NzPDQ0OBZiJjNNOp6Y.jpg",
    original_language: "en",
    overview:
      "Construction worker Douglas Quaid's obsession with the planet Mars leads him to visit Recall, a company who manufacture memories. Something goes wrong during his memory implant turning Doug's life upside down and even to question what is reality and what isn't.",
    poster_path:
      "https://image.tmdb.org/t/p/original//wVbeL6fkbTKSmNfalj4VoAUUqJv.jpg",
    release_date: "1990-06-01",
    title: "Total Recall",
    vote_average: 7.303,
    movieId: 861,
    genres: "Action, Adventure, Science Fiction",
  },
  {
    backdrop_path: "/z62CBlBBBOoNUuuxZ1jMAcq5ARE.jpg",
    original_language: "en",
    overview:
      "A waitress, desperate to fulfill her dreams as a restaurant owner, is set on a journey to turn a frog prince back into a human being, but she has to face the same problem after she kisses him.",
    poster_path:
      "https://image.tmdb.org/t/p/original//v6nAUs62OJ4DXmnnmPFeVmMz8H9.jpg",
    release_date: "2009-12-08",
    title: "The Princess and the Frog",
    vote_average: 7.208,
    movieId: 10198,
    genres: "Animation, Romance, Fantasy, Family",
  },
  {
    backdrop_path: "/6XVqVAMOsKL5C26pHesiAawuGYW.jpg",
    original_language: "en",
    overview:
      "Jen and a group of friends set out to hike the Appalachian Trail. Despite warnings to stick to the trail, the hikers stray off course—and cross into land inhabited by The Foundation, a hidden community of mountain dwellers who use deadly means to protect their way of life.",
    poster_path:
      "https://image.tmdb.org/t/p/original//4U1SBHmwHkNA0eHZ2n1CuiC1K1g.jpg",
    release_date: "2021-01-26",
    title: "Wrong Turn",
    vote_average: 5.964,
    movieId: 630586,
    genres: "Horror, Thriller",
  },
  {
    backdrop_path: "/uT5G4fA7jKxlJNfwYPMm353f5AI.jpg",
    original_language: "en",
    overview:
      "While Po and his father are visiting a secret panda village, an evil spirit threatens all of China, forcing Po to form a ragtag army to fight back.",
    poster_path:
      "https://image.tmdb.org/t/p/original//oajNi4Su39WAByHI6EONu8G8HYn.jpg",
    release_date: "2016-01-23",
    title: "Kung Fu Panda 3",
    vote_average: 6.911,
    movieId: 140300,
    genres: "Action, Adventure, Animation, Comedy, Family",
  },
  {
    backdrop_path: "/rF0Y0fYVsNFEvGve8Nq0Ij9EDCM.jpg",
    original_language: "en",
    overview:
      "After a spectacular crash-landing on an uncharted planet, brash astronaut Leo Davidson finds himself trapped in a savage world where talking apes dominate the human race. Desperate to find a way home, Leo must evade the invincible gorilla army led by Ruthless General Thade.",
    poster_path:
      "https://image.tmdb.org/t/p/original//2IZcJHsTugOdyg0Y8ejj4CM2X3a.jpg",
    release_date: "2001-07-25",
    title: "Planet of the Apes",
    vote_average: 5.754,
    movieId: 869,
    genres: "Thriller, Science Fiction, Action, Adventure",
  },
  {
    backdrop_path: "/sIzZQdXY21sEks9lGkGuXzqdGSA.jpg",
    original_language: "en",
    overview:
      "A newly dead New England couple seek help from a deranged demon exorcist to scare an affluent New York family out of their home.",
    poster_path:
      "https://image.tmdb.org/t/p/original//nnl6OWkyPpuMm595hmAxNW3rZFn.jpg",
    release_date: "1988-03-30",
    title: "Beetlejuice",
    vote_average: 7.384,
    movieId: 4011,
    genres: "Fantasy, Comedy",
  },
  {
    backdrop_path: "/mabuNsGJgRuCTuGqjFkWe1xdu19.jpg",
    original_language: "en",
    overview:
      "Elastigirl springs into action to save the day, while Mr. Incredible faces his greatest challenge yet – taking care of the problems of his three children.",
    poster_path:
      "https://image.tmdb.org/t/p/original//9lFKBtaVIhP7E2Pk0IY1CwTKTMZ.jpg",
    release_date: "2018-06-14",
    title: "Incredibles 2",
    vote_average: 7.468,
    movieId: 260513,
    genres: "Action, Adventure, Animation, Family",
  },
  {
    backdrop_path: "/jTx4XlVsLJkDwbEQkFYwpApD556.jpg",
    original_language: "en",
    overview:
      "Star race car Lightning McQueen and his pal Mater head overseas to compete in the World Grand Prix race. But the road to the championship becomes rocky as Mater gets caught up in an intriguing adventure of his own: international espionage.",
    poster_path:
      "https://image.tmdb.org/t/p/original//okIz1HyxeVOMzYwwHUjH2pHi74I.jpg",
    release_date: "2011-06-11",
    title: "Cars 2",
    vote_average: 6.121,
    movieId: 49013,
    genres: "Animation, Family, Adventure, Comedy",
  },
  {
    backdrop_path: "/DztBnZaqmla2sGUW9s8AyOmskT.jpg",
    original_language: "en",
    overview:
      "Lester Burnham, a depressed suburban father in a mid-life crisis, decides to turn his hectic life around after developing an infatuation with his daughter's attractive friend.",
    poster_path:
      "https://image.tmdb.org/t/p/original//wby9315QzVKdW9BonAefg8jGTTb.jpg",
    release_date: "1999-09-15",
    title: "American Beauty",
    vote_average: 8.019,
    movieId: 14,
    genres: "Drama",
  },
  {
    backdrop_path: "/19Pghw34YdLbjeKpwfCRTNhaItr.jpg",
    original_language: "en",
    overview:
      "Newlywed couple Ted and Tami-Lynn want to have a baby, but in order to qualify to be a parent, Ted will have to prove he's a person in a court of law.",
    poster_path:
      "https://image.tmdb.org/t/p/original//qMOt0uy1x49OBW0jzodgRM9waW0.jpg",
    release_date: "2015-06-25",
    title: "Ted 2",
    vote_average: 6.303,
    movieId: 214756,
    genres: "Comedy, Fantasy",
  },
  {
    backdrop_path: "/uovH5k4BAEPqXqxgwVrTtqH169g.jpg",
    original_language: "en",
    overview:
      "Follows the heroic efforts of the crypto-zoological agency Monarch as its members face off against a battery of god-sized monsters, including the mighty Godzilla, who collides with Mothra, Rodan, and his ultimate nemesis, the three-headed King Ghidorah. When these ancient super-species, thought to be mere myths, rise again, they all vie for supremacy, leaving humanity's very existence hanging in the balance.",
    poster_path:
      "https://image.tmdb.org/t/p/original//fQ40gmFM4p03tXwMxQQKh2cCBW4.jpg",
    release_date: "2019-05-29",
    title: "Godzilla: King of the Monsters",
    vote_average: 6.704,
    movieId: 373571,
    genres: "Science Fiction, Action",
  },
  {
    backdrop_path: "/xLzkWj2C6zCWyFT8Z7tKKtfrwcR.jpg",
    original_language: "en",
    overview:
      "A civilian oil rig crew is recruited to conduct a search and rescue effort when a nuclear submarine mysteriously sinks. One diver soon finds himself on a spectacular odyssey 25,000 feet below the ocean's surface where he confronts a mysterious force that has the power to change the world or destroy it.",
    poster_path:
      "https://image.tmdb.org/t/p/original//2dCit3XAtv9KWCJvRKdPkJ0FAkH.jpg",
    release_date: "1989-08-09",
    title: "The Abyss",
    vote_average: 7.348,
    movieId: 2756,
    genres: "Adventure, Action, Thriller, Science Fiction",
  },
  {
    backdrop_path: "/4mcOCiR06dqQ5eoEJcG3zvonjOa.jpg",
    original_language: "en",
    overview:
      "Thomas and his fellow Gladers face their greatest challenge yet: searching for clues about the mysterious and powerful organization known as WCKD. Their journey takes them to the Scorch, a desolate landscape filled with unimaginable obstacles. Teaming up with resistance fighters, the Gladers take on WCKD’s vastly superior forces and uncover its shocking plans for them all.",
    poster_path:
      "https://image.tmdb.org/t/p/original//mYw7ZyejqSCPFlrT2jHZOESZDU3.jpg",
    release_date: "2015-09-09",
    title: "Maze Runner: The Scorch Trials",
    vote_average: 6.733,
    movieId: 294254,
    genres: "Science Fiction, Action, Thriller, Adventure",
  },
  {
    backdrop_path: "/wu1uilmhM4TdluKi2ytfz8gidHf.jpg",
    original_language: "en",
    overview:
      "When his best friend Gary is suddenly snatched away, SpongeBob takes Patrick on a madcap mission far beyond Bikini Bottom to save their pink-shelled pal.",
    poster_path:
      "https://image.tmdb.org/t/p/original//jlJ8nDhMhCYJuzOw3f52CP1W8MW.jpg",
    release_date: "2020-08-14",
    title: "The SpongeBob Movie: Sponge on the Run",
    vote_average: 7.486,
    movieId: 400160,
    genres: "Family, Animation, Fantasy, Adventure, Comedy",
  },
  {
    backdrop_path: "/yVSgw4UyXWg0Edl7KMehdhhgIwL.jpg",
    original_language: "en",
    overview:
      "A group of cold-blooded killers find themselves trapped on an alien planet to be hunted by extraterrestrial Predators.",
    poster_path:
      "https://image.tmdb.org/t/p/original//54LZIRznS0Zjn7ZDXrsGVe3HXei.jpg",
    release_date: "2010-07-03",
    title: "Predators",
    vote_average: 6.257,
    movieId: 34851,
    genres: "Science Fiction, Action, Thriller",
  },
  {
    backdrop_path: "/huC0x1don81NMreSGx4ITkrv9aG.jpg",
    original_language: "en",
    overview:
      "When a charming 12-year-old girl takes on the characteristics and voices of others, doctors say there is nothing they can do. As people begin to die, the girl's mother realizes her daughter has been possessed by the devil--and that her daughter's only possible hope lies with two priests and the ancient rite of demonic exorcism.",
    poster_path:
      "https://image.tmdb.org/t/p/original//5x0CeVHJI8tcDx8tUUwYHQSNILq.jpg",
    release_date: "1973-12-26",
    title: "The Exorcist",
    vote_average: 7.734,
    movieId: 9552,
    genres: "Horror, Thriller, Drama",
  },
  {
    backdrop_path: "/mmd1HnuvAzFc4iuVJcnBrhDNEKr.jpg",
    original_language: "en",
    overview:
      "Jack Torrance accepts a caretaker job at the Overlook Hotel, where he, along with his wife Wendy and their son Danny, must live isolated from the rest of the world for the winter. But they aren't prepared for the madness that lurks within.",
    poster_path:
      "https://image.tmdb.org/t/p/original//9PtPnOJSH6pewElRlJPGqC5Gd3W.jpg",
    release_date: "1980-05-23",
    title: "The Shining",
    vote_average: 8.216,
    movieId: 694,
    genres: "Horror, Thriller",
  },
  {
    backdrop_path: "/wjt1dwtabVm9vujAteDTnXnpHfZ.jpg",
    original_language: "en",
    overview:
      "As a young and naive recruit in Vietnam, Chris Taylor faces a moral crisis when confronted with the horrors of war and the duality of man.",
    poster_path:
      "https://image.tmdb.org/t/p/original//m3mmFkPQKvPZq5exmh0bDuXlD9T.jpg",
    release_date: "1986-12-19",
    title: "Platoon",
    vote_average: 7.746,
    movieId: 792,
    genres: "Drama, War, Action",
  },
  {
    backdrop_path: "/lHGuAt7mvup8effokwgX0Nc91yX.jpg",
    original_language: "en",
    overview:
      "Katniss Everdeen reluctantly becomes the symbol of a mass rebellion against the autocratic Capitol.",
    poster_path:
      "https://image.tmdb.org/t/p/original//4FAA18ZIja70d1Tu5hr5cj2q1sB.jpg",
    release_date: "2014-11-19",
    title: "The Hunger Games: Mockingjay - Part 1",
    vote_average: 6.809,
    movieId: 131631,
    genres: "Science Fiction, Adventure, Thriller",
  },
  {
    backdrop_path: "/yBov7O4eXDcBLDpZrOHZzFr8rIl.jpg",
    original_language: "en",
    overview:
      "The Templeton brothers — Tim and his Boss Baby little bro Ted — have become adults and drifted away from each other. But a new boss baby with a cutting-edge approach and a can-do attitude is about to bring them together again … and inspire a new family business.",
    poster_path:
      "https://image.tmdb.org/t/p/original//kv2Qk9MKFFQo4WQPaYta599HkJP.jpg",
    release_date: "2021-07-01",
    title: "The Boss Baby: Family Business",
    vote_average: 7.39,
    movieId: 459151,
    genres: "Animation, Comedy, Adventure, Family",
  },
  {
    backdrop_path: "/5oCAo7LFj2x0yByfi5JYirGnK8I.jpg",
    original_language: "en",
    overview:
      "An unprecedented series of violent tornadoes is sweeping across Oklahoma. Tornado chasers, headed by Dr. Jo Harding, attempt to release a groundbreaking device that will allow them to track them and create a more advanced warning system. They are joined by Jo's soon to be ex-husband Bill, a former tornado chaser himself, and his girlfriend Melissa.",
    poster_path:
      "https://image.tmdb.org/t/p/original//fZ0Y2qSDKQJolrQhIDpTwx3GlYB.jpg",
    release_date: "1996-05-10",
    title: "Twister",
    vote_average: 6.491,
    movieId: 664,
    genres: "Action, Adventure, Drama",
  },
  {
    backdrop_path: "/vMDdWQuvOjg9yUjMJrNunXq9cmw.jpg",
    original_language: "en",
    overview:
      "A team of explorers discover a clue to the origins of mankind on Earth, leading them on a journey to the darkest corners of the universe. There, they must fight a terrifying battle to save the future of the human race.",
    poster_path:
      "https://image.tmdb.org/t/p/original//m7nZCtHJyDLncBUarfM5h5mrppx.jpg",
    release_date: "2012-05-30",
    title: "Prometheus",
    vote_average: 6.552,
    movieId: 70981,
    genres: "Science Fiction, Adventure, Mystery",
  },
  {
    backdrop_path: "/3IJ1YlepPnmo9tUpphjsPyRWrAJ.jpg",
    original_language: "en",
    overview:
      "A group of friends take refuge in a deserted sanatorium after they are left stranded in a snowstorm. Later, the place becomes a death trap when man-eating cannibals surround them.",
    poster_path:
      "https://image.tmdb.org/t/p/original//r1JNXwJkKO696NlGTyqkw96yoT9.jpg",
    release_date: "2011-10-17",
    title: "Wrong Turn 4: Bloody Beginnings",
    vote_average: 5.704,
    movieId: 71672,
    genres: "Horror, Thriller",
  },
  {
    backdrop_path: "/xFxk4vnirOtUxpOEWgA1MCRfy6J.jpg",
    original_language: "en",
    overview:
      "In a suburban fantasy world, two teenage elf brothers embark on an extraordinary quest to discover if there is still a little magic left out there.",
    poster_path:
      "https://image.tmdb.org/t/p/original//f4aul3FyD3jv3v4bul1IrkWZvzq.jpg",
    release_date: "2020-02-29",
    title: "Onward",
    vote_average: 7.694,
    movieId: 508439,
    genres: "Family, Animation, Adventure, Comedy, Fantasy",
  },
  {
    backdrop_path: "/mMoG4nPSDupXIXOwVvpexZY2W0N.jpg",
    original_language: "en",
    overview:
      "In the aftermath of a massive earthquake in California, a rescue-chopper pilot makes a dangerous journey across the state in order to rescue his estranged daughter.",
    poster_path:
      "https://image.tmdb.org/t/p/original//2Gfjn962aaFSD6eST6QU3oLDZTo.jpg",
    release_date: "2015-05-27",
    title: "San Andreas",
    vote_average: 6.239,
    movieId: 254128,
    genres: "Action, Drama, Thriller",
  },
  {
    backdrop_path: "/997ToEZvF2Obp9zNZbY5ELVnmrW.jpg",
    original_language: "en",
    overview:
      "Tessa Young is a dedicated student, dutiful daughter and loyal girlfriend to her high school sweetheart. Entering her first semester of college, Tessa's guarded world opens up when she meets Hardin Scott, a mysterious and brooding rebel who makes her question all she thought she knew about herself -- and what she wants out of life.",
    poster_path:
      "https://image.tmdb.org/t/p/original//u3B2YKUjWABcxXZ6Nm9h10hLUbh.jpg",
    release_date: "2019-04-11",
    title: "After",
    vote_average: 7.129,
    movieId: 537915,
    genres: "Romance, Drama",
  },
  {
    backdrop_path: "/snlu32RmjldF9b068UURJg8sQtn.jpg",
    original_language: "en",
    overview:
      "Batman must battle a disfigured district attorney and a disgruntled former employee with help from an amorous psychologist and a young circus acrobat.",
    poster_path:
      "https://image.tmdb.org/t/p/original//mzzNBVwTiiY94xAXDMWJpNPW2US.jpg",
    release_date: "1995-06-16",
    title: "Batman Forever",
    vote_average: 5.429,
    movieId: 414,
    genres: "Action, Crime, Fantasy",
  },
  {
    backdrop_path: "/esIwzihCKlyqT6AjdI3q6WdSi5u.jpg",
    original_language: "en",
    overview:
      "Brave is set in the mystical Scottish Highlands, where Mérida is the princess of a kingdom ruled by King Fergus and Queen Elinor. An unruly daughter and an accomplished archer, Mérida one day defies a sacred custom of the land and inadvertently brings turmoil to the kingdom. In an attempt to set things right, Mérida seeks out an eccentric old Wise Woman and is granted an ill-fated wish. Also figuring into Mérida’s quest — and serving as comic relief — are the kingdom’s three lords: the enormous Lord MacGuffin, the surly Lord Macintosh, and the disagreeable Lord Dingwall.",
    poster_path:
      "https://image.tmdb.org/t/p/original//1XAuDtMWpL0sYSFK0R6EZate2Ux.jpg",
    release_date: "2012-06-21",
    title: "Brave",
    vote_average: 7.019,
    movieId: 62177,
    genres: "Animation, Adventure, Comedy, Family, Action, Fantasy",
  },
  {
    backdrop_path: "/xNNF4l1OVscJNchJc5xvejHzTDO.jpg",
    original_language: "en",
    overview:
      "An unexpected affair quickly escalates into a heart-stopping reality for two women whose passionate connection changes their lives forever.",
    poster_path:
      "https://image.tmdb.org/t/p/original//nTGbq37hYLuNy7YgMg0gVLma0NS.jpg",
    release_date: "2017-02-10",
    title: "Below Her Mouth",
    vote_average: 6.813,
    movieId: 370663,
    genres: "Drama, Romance",
  },
  {
    backdrop_path: "/rVqY0Bo4Npf6EIONUROxjYAJfmD.jpg",
    original_language: "en",
    overview:
      "A kindhearted street urchin named Aladdin embarks on a magical adventure after finding a lamp that releases a wisecracking genie while a power-hungry Grand Vizier vies for the same lamp that has the power to make their deepest wishes come true.",
    poster_path:
      "https://image.tmdb.org/t/p/original//ykUEbfpkf8d0w49pHh0AD2KrT52.jpg",
    release_date: "2019-05-22",
    title: "Aladdin",
    vote_average: 7.109,
    movieId: 420817,
    genres: "Adventure, Fantasy, Romance, Family",
  },
  {
    backdrop_path: "/1ZIeGwD2lMlLMr4u6IIR302jqhD.jpg",
    original_language: "en",
    overview:
      "The story of a super-secret spy organization that recruits an unrefined but promising street kid into the agency's ultra-competitive training program just as a global threat emerges from a twisted tech genius.",
    poster_path:
      "https://image.tmdb.org/t/p/original//r6q9wZK5a2K51KFj4LWVID6Ja1r.jpg",
    release_date: "2014-12-13",
    title: "Kingsman: The Secret Service",
    vote_average: 7.635,
    movieId: 207703,
    genres: "Crime, Comedy, Action, Adventure",
  },
  {
    backdrop_path: "/m3tdSyl11fhgXPDSEt3aBctTqGP.jpg",
    original_language: "en",
    overview:
      "A live-action adaptation of Disney's version of the classic tale of a cursed prince and a beautiful young woman who helps him break the spell.",
    poster_path:
      "https://image.tmdb.org/t/p/original//hKegSKIDep2ewJWPUQD7u0KqFIp.jpg",
    release_date: "2017-03-16",
    title: "Beauty and the Beast",
    vote_average: 6.968,
    movieId: 321612,
    genres: "Family, Fantasy, Romance",
  },
  {
    backdrop_path: "/udSev1YWgZv7KhaTV8HXnyNcFkD.jpg",
    original_language: "en",
    overview:
      "Hallie Parker and Annie James are identical twins separated at a young age because of their parents' divorce. Unknowingly to their parents, the girls are sent to the same summer camp where they meet, discover the truth about themselves, and then plot with each other to switch places.",
    poster_path:
      "https://image.tmdb.org/t/p/original//a3XOGrrAjl1wwiumtACWBufg6AL.jpg",
    release_date: "1998-07-28",
    title: "The Parent Trap",
    vote_average: 7.187,
    movieId: 9820,
    genres: "Comedy, Family, Romance",
  },
  {
    backdrop_path: "/zb6fM1CX41D9rF9hdgclu0peUmy.jpg",
    original_language: "en",
    overview:
      "The true story of how businessman Oskar Schindler saved over a thousand Jewish lives from the Nazis while they worked as slaves in his factory during World War II.",
    poster_path:
      "https://image.tmdb.org/t/p/original//sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg",
    release_date: "1993-12-15",
    title: "Schindler's List",
    vote_average: 8.567,
    movieId: 424,
    genres: "Drama, History, War",
  },
  {
    backdrop_path: "/m03jul0YdVEOFXEQVUv6pOVQYGL.jpg",
    original_language: "en",
    overview:
      "Dracula, Mavis, Johnny and the rest of the Drac Pack take a vacation on a luxury Monster Cruise Ship, where Dracula falls in love with the ship’s captain, Ericka, who’s secretly a descendant of Abraham Van Helsing, the notorious monster slayer.",
    poster_path:
      "https://image.tmdb.org/t/p/original//gjAFM4xhA5vyLxxKMz38ujlUfDL.jpg",
    release_date: "2018-06-28",
    title: "Hotel Transylvania 3: Summer Vacation",
    vote_average: 6.872,
    movieId: 400155,
    genres: "Animation, Comedy, Family, Fantasy",
  },
  {
    backdrop_path: "/9iQWsXwjOMGDvTDdvCnpiyR0UG3.jpg",
    original_language: "en",
    overview:
      "While vacationing with a friend in Paris, an American girl is kidnapped by a gang of human traffickers intent on selling her into forced prostitution. Working against the clock, her ex-spy father must pull out all the stops to save her. But with his best years possibly behind him, the job may be more than he can handle.",
    poster_path:
      "https://image.tmdb.org/t/p/original//y5Va1WXDX6nZElVirPrGxf6w99B.jpg",
    release_date: "2008-02-18",
    title: "Taken",
    vote_average: 7.392,
    movieId: 8681,
    genres: "Action, Thriller",
  },
  {
    backdrop_path: "/uUCij548JeREaZeWQ9HX4IlK8sE.jpg",
    original_language: "en",
    overview:
      "When vengeful General Francis X. Hummel seizes control of Alcatraz Island and threatens to launch missiles loaded with deadly chemical weapons into San Francisco, only a young FBI chemical weapons expert and notorious Federal prisoner have the stills to penetrate the impregnable island fortress and take him down.",
    poster_path:
      "https://image.tmdb.org/t/p/original//j5mxLNWjUlXUUk8weFBtnF4afIR.jpg",
    release_date: "1996-06-07",
    title: "The Rock",
    vote_average: 7.1,
    movieId: 9802,
    genres: "Action, Adventure, Thriller",
  },
  {
    backdrop_path: "/xUWf5xX0AnZgAnYXAMk03zTbsef.jpg",
    original_language: "en",
    overview:
      "Eight London couples try to deal with their relationships in different ways. Their tryst with love makes them discover how complicated relationships can be.",
    poster_path:
      "https://image.tmdb.org/t/p/original//1ODdWLpyOnIVl0l67GrdaFDlJGf.jpg",
    release_date: "2003-09-07",
    title: "Love Actually",
    vote_average: 7.116,
    movieId: 508,
    genres: "Comedy, Romance, Drama",
  },
  {
    backdrop_path: "/vVpEOvdxVBP2aV166j5Xlvb5Cdc.jpg",
    original_language: "en",
    overview:
      "Super-assassin John Wick returns with a $14 million price tag on his head and an army of bounty-hunting killers on his trail. After killing a member of the shadowy international assassin’s guild, the High Table, John Wick is excommunicado, but the world’s most ruthless hit men and women await his every turn.",
    poster_path:
      "https://image.tmdb.org/t/p/original//ziEuG1essDuWuC5lpWUaw1uXY2O.jpg",
    release_date: "2019-05-15",
    title: "John Wick: Chapter 3 - Parabellum",
    vote_average: 7.443,
    movieId: 458156,
    genres: "Action, Thriller, Crime",
  },
  {
    backdrop_path: "/a2tys4sD7xzVaogPntGsT1ypVoT.jpg",
    original_language: "en",
    overview:
      "Inspired by a true story, an oddball group of cops, criminals, tourists and teens converge in a Georgia forest where a 500-pound black bear goes on a murderous rampage after unintentionally ingesting cocaine.",
    poster_path:
      "https://image.tmdb.org/t/p/original//gOnmaxHo0412UVr1QM5Nekv1xPi.jpg",
    release_date: "2023-02-22",
    title: "Cocaine Bear",
    vote_average: 6.089,
    movieId: 804150,
    genres: "Thriller, Comedy, Crime",
  },
  {
    backdrop_path: "/xMjAkXpCb55FTAV7By31p3TQMxb.jpg",
    original_language: "en",
    overview:
      "Jamie returns to his hometown in search of answers to his wife's murder, which occurred after receiving a weird package containing a ventriloquist dummy named Billy, which may be linked to the legend of ventriloquist Mary Shaw. Destined to find out the truth, Jamie goes to the town of Raven's Fair, where Shaw used to perform and is buried. But Jamie is in for more than he expected.",
    poster_path:
      "https://image.tmdb.org/t/p/original//9CR1G9kVycsbYfnDO40JClrYEWr.jpg",
    release_date: "2007-03-16",
    title: "Dead Silence",
    vote_average: 6.424,
    movieId: 14001,
    genres: "Horror",
  },
  {
    backdrop_path: "/zzAErvRSasbEpe3biSLjhilvBlk.jpg",
    original_language: "en",
    overview:
      "In Thailand, ex-Green Beret John James Rambo joins a group of mercenaries to venture into war-torn neighboring Myanmar to rescue a group of Christian aid workers who have been kidnapped by a ruthless local infantry unit.",
    poster_path:
      "https://image.tmdb.org/t/p/original//r8LPeldxskHrGJTPfhICguCip2H.jpg",
    release_date: "2008-01-24",
    title: "Rambo",
    vote_average: 6.675,
    movieId: 7555,
    genres: "Action, Thriller, War",
  },
  {
    backdrop_path: "/8tqVlaXwF2vbMWMDa909IhdrTRc.jpg",
    original_language: "en",
    overview:
      'A teenage girl is raised underground by a robot "Mother", designed to repopulate the earth following an extinction event. But their unique bond is threatened when an inexplicable stranger arrives with alarming news.',
    poster_path:
      "https://image.tmdb.org/t/p/original//b3jWxwWRFqvNDJTvBcmKJVHnzKK.jpg",
    release_date: "2019-06-07",
    title: "I Am Mother",
    vote_average: 6.691,
    movieId: 505948,
    genres: "Science Fiction, Thriller",
  },
  {
    backdrop_path: "/tt79dbOPd9Z9ykEOpvckttgYXwH.jpg",
    original_language: "en",
    overview:
      "An aging Chinese immigrant is swept up in an insane adventure, where she alone can save what's important to her by connecting with the lives she could have led in other universes.",
    poster_path:
      "https://image.tmdb.org/t/p/original//w3LxiVYdWWRvEVdn5RYq6jIqkb1.jpg",
    release_date: "2022-03-24",
    title: "Everything Everywhere All at Once",
    vote_average: 7.8,
    movieId: 545611,
    genres: "Action, Adventure, Science Fiction",
  },
  {
    backdrop_path: "/j7eWbnyeTN0rFpNCkSzIl7HhQ2C.jpg",
    original_language: "en",
    overview:
      "An intelligence operative for a shadowy global peacekeeping agency races to stop a hacker from stealing its most valuable — and dangerous — weapon.",
    poster_path:
      "https://image.tmdb.org/t/p/original//vB8o2p4ETnrfiWEgVxHmHWP9yRl.jpg",
    release_date: "2023-08-09",
    title: "Heart of Stone",
    vote_average: 6.83,
    movieId: 724209,
    genres: "Thriller, Action",
  },
  {
    backdrop_path: "/krYelh3x8VdSeAqOSd81NTek1aw.jpg",
    original_language: "en",
    overview:
      "Set in the Bronx during the tumultuous 1960s, an adolescent boy is torn between his honest, working-class father and a violent yet charismatic crime boss. Complicating matters is the youngster's growing attraction - forbidden in his neighborhood - for a beautiful black girl.",
    poster_path:
      "https://image.tmdb.org/t/p/original//sDbO6LmLYtyqAoFTPpRcMgPSCEO.jpg",
    release_date: "1993-10-01",
    title: "A Bronx Tale",
    vote_average: 7.861,
    movieId: 1607,
    genres: "Drama, Crime",
  },
  {
    backdrop_path: "/a17F3zXnmuwqxfiDa46mtlosjrv.jpg",
    original_language: "en",
    overview:
      "Ryder and the pups are called to Adventure City to stop Mayor Humdinger from turning the bustling metropolis into a state of chaos.",
    poster_path:
      "https://image.tmdb.org/t/p/original//ic0intvXZSfBlYPIvWXpU1ivUCO.jpg",
    release_date: "2021-08-09",
    title: "PAW Patrol: The Movie",
    vote_average: 7.403,
    movieId: 675445,
    genres: "Animation, Family, Adventure, Comedy",
  },
  {
    backdrop_path: "/brnfCYyz8EMbBrHgmh8sCwBi5i1.jpg",
    original_language: "ko",
    overview:
      "When a zombie virus pushes Korea into a state of emergency, those trapped on an express train to Busan must fight for their own survival.",
    poster_path:
      "https://image.tmdb.org/t/p/original//vNVFt6dtcqnI7hqa6LFBUibuFiw.jpg",
    release_date: "2016-07-20",
    title: "Train to Busan",
    vote_average: 7.753,
    movieId: 396535,
    genres: "Horror, Thriller, Action, Adventure",
  },
  {
    backdrop_path: "/7fJAYM0rhzpEhCK6wxbQ412EoYW.jpg",
    original_language: "en",
    overview:
      "When his family moves from their home in Berlin to a strange new house in Poland, young Bruno befriends Shmuel, a boy who lives on the other side of the fence where everyone seems to be wearing striped pajamas. Unaware of Shmuel's fate as a Jewish prisoner or the role his own Nazi father plays in his imprisonment, Bruno embarks on a dangerous journey inside the camp's walls.",
    poster_path:
      "https://image.tmdb.org/t/p/original//sLwYSEVVV3r047cjrpRAbGgNsfL.jpg",
    release_date: "2008-05-07",
    title: "The Boy in the Striped Pyjamas",
    vote_average: 7.843,
    movieId: 14574,
    genres: "Drama, War, History",
  },
  {
    backdrop_path: "/jMBpJFRtrtIXymer93XLavPwI3P.jpg",
    original_language: "en",
    overview:
      "Ripley, the sole survivor of the Nostromo's deadly encounter with the monstrous Alien, returns to Earth after drifting through space in hypersleep for 57 years. Although her story is initially met with skepticism, she agrees to accompany a team of Colonial Marines back to LV-426.",
    poster_path:
      "https://image.tmdb.org/t/p/original//r1x5JGpyqZU8PYhbs4UcrO1Xb6x.jpg",
    release_date: "1986-07-18",
    title: "Aliens",
    vote_average: 7.94,
    movieId: 679,
    genres: "Action, Thriller, Science Fiction",
  },
  {
    backdrop_path: "/gkxSIlZPEwGPimQ8TEE8C52cOSO.jpg",
    original_language: "en",
    overview:
      "Times are changing for Manny the moody mammoth, Sid the motor mouthed sloth and Diego the crafty saber-toothed tiger. Life heats up for our heroes when they meet some new and none-too-friendly neighbors – the mighty dinosaurs.",
    poster_path:
      "https://image.tmdb.org/t/p/original//cXOLaxcNjNAYmEx1trZxOTKhK3Q.jpg",
    release_date: "2009-06-26",
    title: "Ice Age: Dawn of the Dinosaurs",
    vote_average: 6.754,
    movieId: 8355,
    genres: "Animation, Comedy, Family, Adventure",
  },
  {
    backdrop_path: "/uif5fUshJrXyyDzfpzp1DLw3N0S.jpg",
    original_language: "en",
    overview:
      "When larcenous real estate clerk Marion Crane goes on the lam with a wad of cash and hopes of starting a new life, she ends up at the notorious Bates Motel, where manager Norman Bates cares for his housebound mother.",
    poster_path:
      "https://image.tmdb.org/t/p/original//yz4QVqPx3h1hD1DfqqQkCq3rmxW.jpg",
    release_date: "1960-06-22",
    title: "Psycho",
    vote_average: 8.434,
    movieId: 539,
    genres: "Horror, Thriller, Mystery",
  },
  {
    backdrop_path: "/zRQITMLvVi8z2Xz12Bi6wvbZE82.jpg",
    original_language: "en",
    overview:
      'Billy Batson and his foster siblings, who transform into superheroes by saying "Shazam!", are forced to get back into action and fight the Daughters of Atlas, who they must stop from using a weapon that could destroy the world.',
    poster_path:
      "https://image.tmdb.org/t/p/original//A3ZbZsmsvNGdprRi2lKgGEeVLEH.jpg",
    release_date: "2023-03-15",
    title: "Shazam! Fury of the Gods",
    vote_average: 6.557,
    movieId: 594767,
    genres: "Comedy, Action, Fantasy",
  },
  {
    backdrop_path: "/vYA4qUPWY0EbjpcIXAL4h4pVmTC.jpg",
    original_language: "en",
    overview:
      "After Dr. Bill Harford's wife, Alice, admits to having sexual fantasies about a man she met, Bill becomes obsessed with having a sexual encounter. He discovers an underground sexual group and attends one of their meetings -- and quickly discovers that he is in over his head.",
    poster_path:
      "https://image.tmdb.org/t/p/original//knEIz1eNGl5MQDbrEAVWA7iRqF9.jpg",
    release_date: "1999-07-16",
    title: "Eyes Wide Shut",
    vote_average: 7.5,
    movieId: 345,
    genres: "Drama, Thriller, Mystery",
  },
  {
    backdrop_path: "/dBt0DoFfbhOI4ypUfRj1uTq623M.jpg",
    original_language: "en",
    overview:
      "Determined to keep Annabelle from wreaking more havoc, demonologists Ed and Lorraine Warren bring the possessed doll to the locked artifacts room in their home, placing her “safely” behind sacred glass and enlisting a priest’s holy blessing. But an unholy night of horror awaits as Annabelle awakens the evil spirits in the room, who all set their sights on a new target—the Warrens' ten-year-old daughter, Judy, and her friends.",
    poster_path:
      "https://image.tmdb.org/t/p/original//qWsHMrbg9DsBY3bCMk9jyYCRVRs.jpg",
    release_date: "2019-06-26",
    title: "Annabelle Comes Home",
    vote_average: 6.419,
    movieId: 521029,
    genres: "Horror",
  },
  {
    backdrop_path: "/hxSB02ksqnkXY4hPGAXqgO2fL01.jpg",
    original_language: "en",
    overview:
      "Eighties teenager Marty McFly is accidentally sent back in time to 1955, inadvertently disrupting his parents' first meeting and attracting his mother's romantic interest. Marty must repair the damage to history by rekindling his parents' romance and - with the help of his eccentric inventor friend Doc Brown - return to 1985.",
    poster_path:
      "https://image.tmdb.org/t/p/original//fNOH9f1aA7XRTzl1sAOx9iF553Q.jpg",
    release_date: "1985-07-03",
    title: "Back to the Future",
    vote_average: 8.318,
    movieId: 105,
    genres: "Adventure, Comedy, Science Fiction",
  },
  {
    backdrop_path: "/lV3UFPPxDIPelh46G9oySXN9Mcz.jpg",
    original_language: "en",
    overview:
      "Just as Tessa's life begins to become unglued, nothing is what she thought it would be. Not her friends nor her family. The only person that she should be able to rely on is Hardin, who is furious when he discovers the massive secret that she's been keeping. Before Tessa makes the biggest decision of her life, everything changes because of revelations about her family.",
    poster_path:
      "https://image.tmdb.org/t/p/original//dU4HfnTEJDf9KvxGS9hgO7BVeju.jpg",
    release_date: "2021-09-01",
    title: "After We Fell",
    vote_average: 7.1,
    movieId: 744275,
    genres: "Romance, Drama",
  },
  {
    backdrop_path: "/ygTSl89OtmXY4ESMpEF7qZcpGR8.jpg",
    original_language: "en",
    overview:
      "Dashing legionnaire Rick O'Connell stumbles upon the hidden ruins of Hamunaptra while in the midst of a battle to claim the area in 1920s Egypt. It has been over three thousand years since former High Priest Imhotep suffered a fate worse than death as a punishment for a forbidden love—along with a curse that guarantees eternal doom upon the world if he is ever awoken.",
    poster_path:
      "https://image.tmdb.org/t/p/original//yhIsVvcUm7QxzLfT6HW2wLf5ajY.jpg",
    release_date: "1999-04-16",
    title: "The Mummy",
    vote_average: 6.928,
    movieId: 564,
    genres: "Adventure, Action, Fantasy",
  },
  {
    backdrop_path: "/riDYJYk4g8YnDjEgYOSSKzWTldq.jpg",
    original_language: "en",
    overview:
      'Lloyd and Harry are two men whose stupidity is really indescribable. When Mary, a beautiful woman, loses an important suitcase with money before she leaves for Aspen, the two friends (who have found the suitcase) decide to return it to her. After some "adventures" they finally get to Aspen where, using the lost money they live it up and fight for Mary\'s heart.',
    poster_path:
      "https://image.tmdb.org/t/p/original//4LdpBXiCyGKkR8FGHgjKlphrfUc.jpg",
    release_date: "1994-12-16",
    title: "Dumb and Dumber",
    vote_average: 6.629,
    movieId: 8467,
    genres: "Comedy",
  },
  {
    backdrop_path: "/h2JaQWLKhapm7AuSViJwGiv8ngC.jpg",
    original_language: "en",
    overview:
      "With his wife's disappearance having become the focus of an intense media circus, a man sees the spotlight turned on him when it's suspected that he may not be innocent.",
    poster_path:
      "https://image.tmdb.org/t/p/original//lv5xShBIDPe7m4ufdlV0IAc7Avk.jpg",
    release_date: "2014-10-01",
    title: "Gone Girl",
    vote_average: 7.893,
    movieId: 210577,
    genres: "Mystery, Thriller, Drama",
  },
  {
    backdrop_path: "/pgEWI7yGYF0mM5Uf1YxSOHsBkJR.jpg",
    original_language: "en",
    overview:
      "A story of love and life among the landed English gentry during the Georgian era. Mr. Bennet is a gentleman living in Hertfordshire with his overbearing wife and five daughters, but if he dies their house will be inherited by a distant cousin whom they have never met, so the family's future happiness and security is dependent on the daughters making good marriages.",
    poster_path:
      "https://image.tmdb.org/t/p/original//sGjIvtVvTlWnia2zfJfHz81pZ9Q.jpg",
    release_date: "2005-09-16",
    title: "Pride & Prejudice",
    vote_average: 8.079,
    movieId: 4348,
    genres: "Drama, Romance",
  },
  {
    backdrop_path: "/gMssbddpo4thHGHMpQEZC00Sq9.jpg",
    original_language: "en",
    overview:
      "In 1942, an intelligence officer in North Africa encounters a female French Resistance fighter on a deadly mission behind enemy lines. When they reunite in London, their relationship is tested by the pressures of war.",
    poster_path:
      "https://image.tmdb.org/t/p/original//sV4lXM32quwminL3TP36nlNPp7Q.jpg",
    release_date: "2016-11-17",
    title: "Allied",
    vote_average: 6.793,
    movieId: 369885,
    genres: "Action, Drama, War, Romance, Thriller",
  },
  {
    backdrop_path: "/b8hPBW0NJmiIVzvQjT3CwIpAdzl.jpg",
    original_language: "en",
    overview:
      "As a wild stallion travels across the frontiers of the Old West, he befriends a young human and finds true love with a mare.",
    poster_path:
      "https://image.tmdb.org/t/p/original//cUgYrz4twiJ3QgVGpRfey984NIB.jpg",
    release_date: "2002-05-24",
    title: "Spirit: Stallion of the Cimarron",
    vote_average: 7.692,
    movieId: 9023,
    genres: "Animation, Adventure, Comedy, Family, Drama, Western, Romance",
  },
  {
    backdrop_path: "/fctQU5MoXgJ5pNMljFzlEFXwfSu.jpg",
    original_language: "en",
    overview:
      "The ultimate X-Men ensemble fights a war for the survival of the species across two time periods as they join forces with their younger selves in an epic battle that must change the past – to save our future.",
    poster_path:
      "https://image.tmdb.org/t/p/original//tYfijzolzgoMOtegh1Y7j2Enorg.jpg",
    release_date: "2014-05-15",
    title: "X-Men: Days of Future Past",
    vote_average: 7.528,
    movieId: 127585,
    genres: "Action, Adventure, Science Fiction",
  },
  {
    backdrop_path: "/Adrip2Jqzw56KeuV2nAxucKMNXA.jpg",
    original_language: "it",
    overview:
      "While the Civil War rages on between the Union and the Confederacy, three men – a quiet loner, a ruthless hitman, and a Mexican bandit – comb the American Southwest in search of a strongbox containing $200,000 in stolen gold.",
    poster_path:
      "https://image.tmdb.org/t/p/original//bX2xnavhMYjWDoZp1VM6VnU1xwe.jpg",
    release_date: "1966-12-22",
    title: "The Good, the Bad and the Ugly",
    vote_average: 8.465,
    movieId: 429,
    genres: "Western",
  },
  {
    backdrop_path: "/wE5JGzujfvDPMIfFjJyrhXFjZLc.jpg",
    original_language: "en",
    overview:
      "Woody, Buzz, and the rest of Andy's toys haven't been played with in years. With Andy about to go to college, the gang find themselves accidentally left at a nefarious day care center. The toys must band together to escape and return home to Andy.",
    poster_path:
      "https://image.tmdb.org/t/p/original//AbbXspMOwdvwWZgVN0nabZq03Ec.jpg",
    release_date: "2010-06-16",
    title: "Toy Story 3",
    vote_average: 7.798,
    movieId: 10193,
    genres: "Animation, Family, Comedy",
  },
  {
    backdrop_path: "/5fX1oSGuYdKgwWmUTAN5MNSQGzr.jpg",
    original_language: "en",
    overview:
      "Fearing the actions of a god-like Super Hero left unchecked, Gotham City’s own formidable, forceful vigilante takes on Metropolis’s most revered, modern-day savior, while the world wrestles with what sort of hero it really needs. And with Batman and Superman at war with one another, a new threat quickly arises, putting mankind in greater danger than it’s ever known before.",
    poster_path:
      "https://image.tmdb.org/t/p/original//5UsK3grJvtQrtzEgqNlDljJW96w.jpg",
    release_date: "2016-03-23",
    title: "Batman v Superman: Dawn of Justice",
    vote_average: 5.968,
    movieId: 209112,
    genres: "Action, Adventure, Fantasy",
  },
  {
    backdrop_path: "/6hgItrYQEG33y0I7yP2SRl2ei4w.jpg",
    original_language: "en",
    overview:
      "Tessa finds herself struggling with her complicated relationship with Hardin; she faces a dilemma that could change their lives forever.",
    poster_path:
      "https://image.tmdb.org/t/p/original//kiX7UYfOpYrMFSAGbI6j1pFkLzQ.jpg",
    release_date: "2020-09-02",
    title: "After We Collided",
    vote_average: 7.188,
    movieId: 613504,
    genres: "Romance, Drama",
  },
  {
    backdrop_path: "/waIZRQ9mw497jmN0mAQOS5b4oR3.jpg",
    original_language: "en",
    overview:
      'After Megamind, a highly intelligent alien supervillain, defeats his long-time nemesis Metro Man, Megamind creates a new hero to fight, but must act to save the city when his "creation" becomes an even worse villain than he was.',
    poster_path:
      "https://image.tmdb.org/t/p/original//uZ9ytt3sPTx62XTfN56ILSuYWRe.jpg",
    release_date: "2010-10-28",
    title: "Megamind",
    vote_average: 6.99,
    movieId: 38055,
    genres: "Animation, Action, Comedy, Family, Science Fiction",
  },
  {
    backdrop_path: "/wRxLAw4l17LqiFcPLkobriPTZAw.jpg",
    original_language: "en",
    overview:
      "Tasked with extracting a family who is at the mercy of a Georgian gangster, Tyler Rake infiltrates one of the world's deadliest prisons in order to save them. But when the extraction gets hot, and the gangster dies in the heat of battle, his equally ruthless brother tracks down Rake and his team to Vienna, in order to get revenge.",
    poster_path:
      "https://image.tmdb.org/t/p/original//7gKI9hpEMcZUQpNgKrkDzJpbnNS.jpg",
    release_date: "2023-06-09",
    title: "Extraction 2",
    vote_average: 7.461,
    movieId: 697843,
    genres: "Action, Thriller",
  },
  {
    backdrop_path: "/y2Ca1neKke2mGPMaHzlCNDVZqsK.jpg",
    original_language: "en",
    overview:
      "Unlucky assassin Ladybug is determined to do his job peacefully after one too many gigs gone off the rails. Fate, however, may have other plans, as Ladybug's latest mission puts him on a collision course with lethal adversaries from around the globe—all with connected, yet conflicting, objectives—on the world's fastest train.",
    poster_path:
      "https://image.tmdb.org/t/p/original//j8szC8OgrejDQjjMKSVXyaAjw3V.jpg",
    release_date: "2022-08-03",
    title: "Bullet Train",
    vote_average: 7.47,
    movieId: 718930,
    genres: "Action, Comedy, Thriller",
  },
  {
    backdrop_path: "/npCPnwDyWfQltGfIZKN6WqeUXGI.jpg",
    original_language: "en",
    overview:
      "The Dwarves, Bilbo and Gandalf have successfully escaped the Misty Mountains, and Bilbo has gained the One Ring. They all continue their journey to get their gold back from the Dragon, Smaug.",
    poster_path:
      "https://image.tmdb.org/t/p/original//xQYiXsheRCDBA39DOrmaw1aSpbk.jpg",
    release_date: "2013-12-11",
    title: "The Hobbit: The Desolation of Smaug",
    vote_average: 7.576,
    movieId: 57158,
    genres: "Fantasy, Adventure, Action",
  },
  {
    backdrop_path: "/lcITbesmy0IBO6TXTAgQHJE6Asx.jpg",
    original_language: "en",
    overview:
      "Vic and Melinda Van Allen are a couple in the small town of Little Wesley. Their loveless marriage is held together only by a precarious arrangement whereby, in order to avoid the messiness of divorce, Melinda is allowed to take any number of lovers as long as she does not desert her family.",
    poster_path:
      "https://image.tmdb.org/t/p/original//6yRMyWwjuhKg6IU66uiZIGhaSc8.jpg",
    release_date: "2022-03-18",
    title: "Deep Water",
    vote_average: 5.795,
    movieId: 619979,
    genres: "Drama, Mystery, Thriller",
  },
  {
    backdrop_path: "/4oYBCR2CWtKpfkOKCzpmlE5EdxY.jpg",
    original_language: "en",
    overview:
      "A young boy learns that he has extraordinary powers and is not of this earth. As a young man, he journeys to discover where he came from and what he was sent here to do. But the hero in him must emerge if he is to save the world from annihilation and become the symbol of hope for all mankind.",
    poster_path:
      "https://image.tmdb.org/t/p/original//dksTL9NXc3GqPBRHYHcy1aIwjS.jpg",
    release_date: "2013-06-12",
    title: "Man of Steel",
    vote_average: 6.624,
    movieId: 49521,
    genres: "Action, Adventure, Science Fiction",
  },
  {
    backdrop_path: "/zGLHX92Gk96O1DJvLil7ObJTbaL.jpg",
    original_language: "en",
    overview:
      "Professor Albus Dumbledore knows the powerful, dark wizard Gellert Grindelwald is moving to seize control of the wizarding world. Unable to stop him alone, he entrusts magizoologist Newt Scamander to lead an intrepid team of wizards and witches. They soon encounter an array of old and new beasts as they clash with Grindelwald's growing legion of followers.",
    poster_path:
      "https://image.tmdb.org/t/p/original//jrgifaYeUtTnaH7NF5Drkgjg2MB.jpg",
    release_date: "2022-04-06",
    title: "Fantastic Beasts: The Secrets of Dumbledore",
    vote_average: 6.666,
    movieId: 338953,
    genres: "Fantasy, Adventure",
  },
  {
    backdrop_path: "/qXG71lgBc7HAKd0JAfAUDwva6LO.jpg",
    original_language: "en",
    overview:
      "Plagued by strange memories, Neo's life takes an unexpected turn when he finds himself back inside the Matrix.",
    poster_path:
      "https://image.tmdb.org/t/p/original//8c4a8kE7PizaGQQnditMmI1xbRp.jpg",
    release_date: "2021-12-16",
    title: "The Matrix Resurrections",
    vote_average: 6.428,
    movieId: 624860,
    genres: "Science Fiction, Action, Adventure",
  },
  {
    backdrop_path: "/rI1u4JgtnAZC99wXX4gwro4yaxe.jpg",
    original_language: "en",
    overview:
      "Escaping death, a Hebrew infant is raised in a royal household to become a prince. Upon discovery of his true heritage, Moses embarks on a personal quest to reclaim his destiny as the leader and liberator of the Hebrew people.",
    poster_path:
      "https://image.tmdb.org/t/p/original//stSpFp2NUJMGhIyndqwBi9WE9y9.jpg",
    release_date: "1956-10-05",
    title: "The Ten Commandments",
    vote_average: 7.76,
    movieId: 6844,
    genres: "Drama, History",
  },
  {
    backdrop_path: "/8YURPHUqD2ODIffxPf8sG5l5UC7.jpg",
    original_language: "en",
    overview:
      "In year 1250 B.C. during the late Bronze age, two emerging nations begin to clash. Paris, the Trojan prince, convinces Helen, Queen of Sparta, to leave her husband Menelaus, and sail with him back to Troy. After Menelaus finds out that his wife was taken by the Trojans, he asks his brother Agamemnon to help him get her back. Agamemnon sees this as an opportunity for power. They set off with 1,000 ships holding 50,000 Greeks to Troy.",
    poster_path:
      "https://image.tmdb.org/t/p/original//a07wLy4ONfpsjnBqMwhlWTJTcm.jpg",
    release_date: "2004-05-13",
    title: "Troy",
    vote_average: 7.161,
    movieId: 652,
    genres: "Adventure, History, War, Action",
  },
  {
    backdrop_path: "/59vDC1BuEQvti24OMr0ZvtAK6R1.jpg",
    original_language: "en",
    overview:
      "As the son of a Viking leader on the cusp of manhood, shy Hiccup Horrendous Haddock III faces a rite of passage: he must kill a dragon to prove his warrior mettle. But after downing a feared dragon, he realizes that he no longer wants to destroy it, and instead befriends the beast – which he names Toothless – much to the chagrin of his warrior father.",
    poster_path:
      "https://image.tmdb.org/t/p/original//ygGmAO60t8GyqUo9xYeYxSZAR3b.jpg",
    release_date: "2010-03-18",
    title: "How to Train Your Dragon",
    vote_average: 7.826,
    movieId: 10191,
    genres: "Fantasy, Adventure, Animation, Family",
  },
  {
    backdrop_path: "/eezsbzYPbYKjjh6E1XHDBNlLynh.jpg",
    original_language: "en",
    overview:
      "When a kingpin threatens New York City, a group of mutated turtle warriors must emerge from the shadows to protect their home.",
    poster_path:
      "https://image.tmdb.org/t/p/original//azL2ThbJMIkts3ZMt3j1YgBUeDB.jpg",
    release_date: "2014-08-07",
    title: "Teenage Mutant Ninja Turtles",
    vote_average: 5.919,
    movieId: 98566,
    genres: "Science Fiction, Action, Adventure, Comedy",
  },
  {
    backdrop_path: "/uw4SnKFZ453Gxmj5XR5Susj8TNo.jpg",
    original_language: "en",
    overview:
      "On July 2, a giant alien mothership enters orbit around Earth and deploys several dozen saucer-shaped 'destroyer' spacecraft that quickly lay waste to major cities around the planet. On July 3, the United States conducts a coordinated counterattack that fails. On July 4, a plan is devised to gain access to the interior of the alien mothership in space, in order to plant a nuclear missile.",
    poster_path:
      "https://image.tmdb.org/t/p/original//p0BPQGSPoSa8Ml0DAf2mB2kCU0R.jpg",
    release_date: "1996-06-25",
    title: "Independence Day",
    vote_average: 6.884,
    movieId: 602,
    genres: "Action, Adventure, Science Fiction",
  },
  {
    backdrop_path: "/hmAOMwVeJfdWXgK1Ikyl2eYkE99.jpg",
    original_language: "en",
    overview:
      "A look at the relationship between Mike and Sulley during their days at Monsters University — when they weren't necessarily the best of friends.",
    poster_path:
      "https://image.tmdb.org/t/p/original//y7thwJ7z5Bplv6vwl6RI0yteaDD.jpg",
    release_date: "2013-06-19",
    title: "Monsters University",
    vote_average: 7.039,
    movieId: 62211,
    genres: "Animation, Family",
  },
  {
    backdrop_path: "/ig7qUy7drkEFZNCK7gi0hMn1WMN.jpg",
    original_language: "en",
    overview:
      "Using massive piloted robots to combat the alien threat, earth's survivors take the fight to the invading alien force lurking in the depths of the Pacific Ocean. Nearly defenseless in the face of the relentless enemy, the forces of mankind have no choice but to turn to two unlikely heroes who now stand as earth's final hope against the mounting apocalypse.",
    poster_path:
      "https://image.tmdb.org/t/p/original//8wo4eN8dWKaKlxhSvBz19uvj8gA.jpg",
    release_date: "2013-07-11",
    title: "Pacific Rim",
    vote_average: 6.895,
    movieId: 68726,
    genres: "Action, Science Fiction, Adventure",
  },
  {
    backdrop_path: "/o8u0NyEigCEaZHBdCYTRfXR8U4i.jpg",
    original_language: "en",
    overview:
      "Several years after the tragic death of their little girl, a doll maker and his wife welcome a nun and several girls from a shuttered orphanage into their home, soon becoming the target of the doll maker's possessed creation—Annabelle.",
    poster_path:
      "https://image.tmdb.org/t/p/original//tb86j8jVCVsdZnzf8I6cIi65IeM.jpg",
    release_date: "2017-08-03",
    title: "Annabelle: Creation",
    vote_average: 6.594,
    movieId: 396422,
    genres: "Horror",
  },
  {
    backdrop_path: "/36MQ5hJJW4K28urrJIYImz9MOfa.jpg",
    original_language: "en",
    overview:
      "Charley Brewster, a high school student, accidentally discovers the true and creepy nature of Jerry Dandrige, his dashing and enigmatic new neighbor; but no one seems willing to believe him.",
    poster_path:
      "https://image.tmdb.org/t/p/original//upVMb3s1RugX4J0O40zfERjPE5N.jpg",
    release_date: "1985-08-02",
    title: "Fright Night",
    vote_average: 7.031,
    movieId: 11797,
    genres: "Comedy, Horror",
  },
  {
    backdrop_path: "/z7noaCJ4KtmhwHw7QcNtnMMo4Qy.jpg",
    original_language: "en",
    overview:
      "Robert McCall, who serves an unflinching justice for the exploited and oppressed, embarks on a relentless, globe-trotting quest for vengeance when his former partner is murdered.",
    poster_path:
      "https://image.tmdb.org/t/p/original//cQvc9N6JiMVKqol3wcYrGshsIdZ.jpg",
    release_date: "2018-07-19",
    title: "The Equalizer 2",
    vote_average: 6.749,
    movieId: 345887,
    genres: "Action, Thriller, Crime",
  },
  {
    backdrop_path: "/oWg0GthfAmuTwZJBvNExpqtRhr8.jpg",
    original_language: "en",
    overview:
      "Catherine, a novelist with an insatiable sexual appetite, becomes a prime suspect when her boyfriend is brutally murdered -- a crime she had described in her latest story.",
    poster_path:
      "https://image.tmdb.org/t/p/original//76Ts0yoHk8kVQj9MMnoMixhRWoh.jpg",
    release_date: "1992-03-20",
    title: "Basic Instinct",
    vote_average: 6.9,
    movieId: 402,
    genres: "Thriller, Mystery",
  },
  {
    backdrop_path: "/guTNnSWS3CaH71jasY8W1FMptjG.jpg",
    original_language: "en",
    overview:
      "Veteran buttoned-down LAPD detective Roger Murtaugh is partnered with unhinged cop Martin Riggs, who -- distraught after his wife's death -- has a death wish and takes unnecessary risks with criminals at every turn. The odd couple embark on their first homicide investigation as partners, involving a young woman known to Murtaugh with ties to a drug and prostitution ring.",
    poster_path:
      "https://image.tmdb.org/t/p/original//fTq4ThIP3pQTYR9eDepsbDHqdcs.jpg",
    release_date: "1987-03-06",
    title: "Lethal Weapon",
    vote_average: 7.291,
    movieId: 941,
    genres: "Adventure, Action, Comedy, Thriller, Crime",
  },
  {
    backdrop_path: "/gmJOXle5QeOOVFEYOVBOkmIJUWV.jpg",
    original_language: "en",
    overview:
      "Astronaut Taylor crash lands on a distant planet ruled by apes who use a primitive race of humans for experimentation and sport. Soon Taylor finds himself among the hunted, his life in the hands of a benevolent chimpanzee scientist.",
    poster_path:
      "https://image.tmdb.org/t/p/original//2r9iKnlSYEk4daQadsXfcjHfIjQ.jpg",
    release_date: "1968-02-07",
    title: "Planet of the Apes",
    vote_average: 7.655,
    movieId: 871,
    genres: "Science Fiction, Adventure, Drama, Action",
  },
  {
    backdrop_path: "/gEFe2joIQUopBmMPXOHPxuX2f4u.jpg",
    original_language: "en",
    overview:
      "In 2257, a taxi driver is unintentionally given the task of saving a young girl who is part of the key that will ensure the survival of humanity.",
    poster_path:
      "https://image.tmdb.org/t/p/original//fPtlCO1yQtnoLHOwKtWz7db6RGU.jpg",
    release_date: "1997-05-02",
    title: "The Fifth Element",
    vote_average: 7.55,
    movieId: 18,
    genres: "Adventure, Fantasy, Action, Thriller, Science Fiction",
  },
  {
    backdrop_path: "/zGCfnZ3bCowMY9So9ZGpsyuOYl3.jpg",
    original_language: "en",
    overview:
      "Thomas leads his group of escaped Gladers on their final and most dangerous mission yet. To save their friends, they must break into the legendary Last City, a WCKD-controlled labyrinth that may turn out to be the deadliest maze of all. Anyone who makes it out alive will get answers to the questions the Gladers have been asking since they first arrived in the maze.",
    poster_path:
      "https://image.tmdb.org/t/p/original//2zYfzA3TBwrMC8tfFbpiTLODde0.jpg",
    release_date: "2018-01-10",
    title: "Maze Runner: The Death Cure",
    vote_average: 7.11,
    movieId: 336843,
    genres: "Science Fiction, Action, Adventure, Thriller",
  },
  {
    backdrop_path: "/fRnhnR2JfkGBT19z7EXEmIUcDSo.jpg",
    original_language: "en",
    overview:
      "Rick and Evelyn O’Connell, along with their 8-year-old son Alex, discover the key to the legendary Scorpion King’s might: the fabled Bracelet of Anubis. Unfortunately, a newly resurrected Imhotep has designs on the bracelet as well, and isn’t above kidnapping its new bearer, Alex, to gain control of Anubis’s otherworldly army.",
    poster_path:
      "https://image.tmdb.org/t/p/original//kdJsW7hcy1lrj7tdMPycTAQPAiR.jpg",
    release_date: "2001-05-04",
    title: "The Mummy Returns",
    vote_average: 6.373,
    movieId: 1734,
    genres: "Adventure, Action, Fantasy",
  },
  {
    backdrop_path: "/ngBFDOsx13sFXiMweDoL54XYknR.jpg",
    original_language: "en",
    overview:
      "In a series of escalating encounters, former security guard David Dunn uses his supernatural abilities to track Kevin Wendell Crumb, a disturbed man who has twenty-four personalities. Meanwhile, the shadowy presence of Elijah Price emerges as an orchestrator who holds secrets critical to both men.",
    poster_path:
      "https://image.tmdb.org/t/p/original//svIDTNUoajS8dLEo7EosxvyAsgJ.jpg",
    release_date: "2019-01-16",
    title: "Glass",
    vote_average: 6.678,
    movieId: 450465,
    genres: "Thriller, Drama, Science Fiction",
  },
  {
    backdrop_path: "/soxvAxlPTp3ATvvza4jSwzFUUEV.jpg",
    original_language: "en",
    overview:
      "A veteran pot dealer creates a fake family as part of his plan to move a huge shipment of weed into the U.S. from Mexico.",
    poster_path:
      "https://image.tmdb.org/t/p/original//qF2LJ0jwWrtXSuT4AFD5OS2IqaT.jpg",
    release_date: "2013-08-07",
    title: "We're the Millers",
    vote_average: 6.826,
    movieId: 138832,
    genres: "Comedy, Crime",
  },
  {
    backdrop_path: "/3WrR2rYX7nHWnBhWHLZptsJ2bEj.jpg",
    original_language: "en",
    overview:
      "After a violent storm, a dense cloud of mist envelops a small Maine town, trapping artist David Drayton and his five-year-old son in a local grocery store with other people. They soon discover that the mist conceals deadly horrors that threaten their lives, and worse, their sanity.",
    poster_path:
      "https://image.tmdb.org/t/p/original//1CvJ6diBACKPVGOpcWuY4XPQdqX.jpg",
    release_date: "2007-11-21",
    title: "The Mist",
    vote_average: 6.926,
    movieId: 5876,
    genres: "Horror, Science Fiction, Thriller",
  },
  {
    backdrop_path: "/4rsomWxlqnHt3muGYK06auhOib6.jpg",
    original_language: "es",
    overview:
      "Raquel's longtime crush on her next-door neighbor turns into something more when he starts developing feelings for her, despite his family's objections.",
    poster_path:
      "https://image.tmdb.org/t/p/original//jmkpZvMVIRrMFevxzOubSBfG0s0.jpg",
    release_date: "2022-02-04",
    title: "Through My Window",
    vote_average: 7.381,
    movieId: 818647,
    genres: "Romance, Drama, Comedy",
  },
  {
    backdrop_path: "/2Ci7ffA51O2Kub3aW4nztZIERlg.jpg",
    original_language: "es",
    overview:
      "Barcelona, Spain. Adrián Doria, a young and successful businessman accused of murder, meets one night with Virginia Goodman, an expert interrogation lawyer, in order to devise a defense strategy.",
    poster_path:
      "https://image.tmdb.org/t/p/original//fptnZJbLzKUHeNlYrAynbyoL5YJ.jpg",
    release_date: "2017-01-06",
    title: "The Invisible Guest",
    vote_average: 8.1,
    movieId: 411088,
    genres: "Drama, Mystery, Thriller",
  },
  {
    backdrop_path: "/k6EOrckWFuz7I4z4wiRwz8zsj4H.jpg",
    original_language: "en",
    overview:
      "Thirty years after defeating the Galactic Empire, Han Solo and his allies face a new threat from the evil Kylo Ren and his army of Stormtroopers.",
    poster_path:
      "https://image.tmdb.org/t/p/original//wqnLdwVXoBjKibFRR5U3y0aDUhs.jpg",
    release_date: "2015-12-15",
    title: "Star Wars: The Force Awakens",
    vote_average: 7.28,
    movieId: 140607,
    genres: "Adventure, Action, Science Fiction",
  },
  {
    backdrop_path: "/8aEe01VfGtYG2dFy9V5MqyyNPlh.jpg",
    original_language: "en",
    overview:
      "A wheelchair-bound photographer spies on his neighbors from his apartment window and becomes convinced one of them has committed murder.",
    poster_path:
      "https://image.tmdb.org/t/p/original//ILVF0eJxHMddjxeQhswFtpMtqx.jpg",
    release_date: "1954-08-01",
    title: "Rear Window",
    vote_average: 8.353,
    movieId: 567,
    genres: "Thriller, Mystery",
  },
  {
    backdrop_path: "/86TlYSntBzD4pxLNM6U3GoOfGdD.jpg",
    original_language: "en",
    overview:
      "Blindsided by a new generation of blazing-fast racers, the legendary Lightning McQueen is suddenly pushed out of the sport he loves. To get back in the game, he will need the help of an eager young race technician with her own plan to win, inspiration from the late Fabulous Hudson Hornet, and a few unexpected turns. Proving that #95 isn't through yet will test the heart of a champion on Piston Cup Racing’s biggest stage!",
    poster_path:
      "https://image.tmdb.org/t/p/original//jJ8TnHvWHaVadW5JJjGYsM07j9i.jpg",
    release_date: "2017-06-15",
    title: "Cars 3",
    vote_average: 6.854,
    movieId: 260514,
    genres: "Family, Animation, Adventure, Comedy",
  },
  {
    backdrop_path: "/j4irvwRLITgGr6vcP8NIKCUA67y.jpg",
    original_language: "en",
    overview:
      "Hedonist Frank Cotton finds a mysterious puzzle box that summons the Cenobites, who open the doors to a dominion where pain and pleasure are indivisible.",
    poster_path:
      "https://image.tmdb.org/t/p/original//3Z0oPHyLnk3Vx6ZMC1MiVwIrKhO.jpg",
    release_date: "1987-09-11",
    title: "Hellraiser",
    vote_average: 6.886,
    movieId: 9003,
    genres: "Horror, Thriller, Fantasy",
  },
  {
    backdrop_path: "/hUpHXyLRNvtt0AAwdPmUsSQQKB8.jpg",
    original_language: "en",
    overview:
      "Three scouts and lifelong friends join forces with one badass cocktail waitress to become the world’s most unlikely team of heroes.  When their peaceful town is ravaged by a zombie invasion, they’ll fight for the badge of a lifetime and put their scouting skills to the test to save mankind from the undead.",
    poster_path:
      "https://image.tmdb.org/t/p/original//lUKvvSnjFlazrdh6wyHxHrdMknD.jpg",
    release_date: "2015-10-23",
    title: "Scouts Guide to the Zombie Apocalypse",
    vote_average: 6.523,
    movieId: 273477,
    genres: "Comedy, Horror",
  },
  {
    backdrop_path: "/pz7bGOUNJXyPKJ2GcJN6nhwBnCs.jpg",
    original_language: "en",
    overview:
      "A recently widowed man and his two teenage daughters travel to a game reserve in South Africa. However, their journey of healing soon turns into a fight for survival when a bloodthirsty lion starts to stalk them.",
    poster_path:
      "https://image.tmdb.org/t/p/original//iRV0IB5xQeOymuGGUBarTecQVAl.jpg",
    release_date: "2022-08-11",
    title: "Beast",
    vote_average: 6.648,
    movieId: 760741,
    genres: "Thriller, Action, Horror",
  },
  {
    backdrop_path: "/ml8YBTJq7UkALfI022FWscCQuQW.jpg",
    original_language: "en",
    overview:
      "29 years since the Black Flame Candle was last lit, the 17th-century Sanderson sisters are resurrected, and they are looking for revenge. Now it's up to three high school students to stop the ravenous witches from wreaking a new kind of havoc on Salem before dawn on All Hallow's Eve.",
    poster_path:
      "https://image.tmdb.org/t/p/original//7ze7YNmUaX81ufctGqt0AgHxRtL.jpg",
    release_date: "2022-09-30",
    title: "Hocus Pocus 2",
    vote_average: 7.255,
    movieId: 642885,
    genres: "Fantasy, Comedy, Family",
  },
  {
    backdrop_path: "/tnwMCH4yLBY4qpe6Nr4n66u4U3f.jpg",
    original_language: "en",
    overview:
      "Agent Matt Graver teams up with operative Alejandro Gillick to prevent Mexican drug cartels from smuggling terrorists across the United States border.",
    poster_path:
      "https://image.tmdb.org/t/p/original//msqWSQkU403cQKjQHnWLnugv7EY.jpg",
    release_date: "2018-06-27",
    title: "Sicario: Day of the Soldado",
    vote_average: 6.917,
    movieId: 400535,
    genres: "Action, Crime, Thriller",
  },
  {
    backdrop_path: "/eVHVwP71el20fofkCHo78ebQv7Q.jpg",
    original_language: "en",
    overview:
      "When an attack on the Kingsman headquarters takes place and a new villain rises, Eggsy and Merlin are forced to work together with the American agency known as the Statesman to save the world.",
    poster_path:
      "https://image.tmdb.org/t/p/original//34xBL6BXNYFqtHO9zhcgoakS4aP.jpg",
    release_date: "2017-09-20",
    title: "Kingsman: The Golden Circle",
    vote_average: 6.967,
    movieId: 343668,
    genres: "Action, Adventure, Comedy",
  },
  {
    backdrop_path: "/yeIpgoZWzbNqkeSYPwhNZQ5xCRX.jpg",
    original_language: "en",
    overview:
      "In order to foil a terrorist plot, an FBI agent undergoes facial transplant surgery and assumes the identity of a criminal mastermind. The plan turns sour when the criminal wakes up prematurely and seeks revenge.",
    poster_path:
      "https://image.tmdb.org/t/p/original//69Xzn8UdPbVnmqSChKz2RTpoNfB.jpg",
    release_date: "1997-06-27",
    title: "Face/Off",
    vote_average: 7.033,
    movieId: 754,
    genres: "Action, Crime, Science Fiction",
  },
  {
    backdrop_path: "/ptcXbbxTyjHfEE4d4QocNP0YQct.jpg",
    original_language: "en",
    overview:
      "Agent 007 battles mysterious Dr. No, a scientific genius bent on destroying the U.S. space program. As the countdown to disaster begins, Bond must go to Jamaica, where he encounters beautiful Honey Ryder, to confront a megalomaniacal villain in his massive island headquarters.",
    poster_path:
      "https://image.tmdb.org/t/p/original//9zCOLJmLNst0sCPZlkW1IRoH65E.jpg",
    release_date: "1962-10-07",
    title: "Dr. No",
    vote_average: 7,
    movieId: 646,
    genres: "Adventure, Action, Thriller",
  },
  {
    backdrop_path: "/epVMXf10WqFkONzKR8V76Ypj5Y3.jpg",
    original_language: "en",
    overview:
      "Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.",
    poster_path:
      "https://image.tmdb.org/t/p/original//kOVEVeg59E0wsnXmF9nrh6OmWII.jpg",
    release_date: "2017-12-13",
    title: "Star Wars: The Last Jedi",
    vote_average: 6.802,
    movieId: 181808,
    genres: "Adventure, Action, Science Fiction",
  },
  {
    backdrop_path: "/r2GAjd4rNOHJh6i6Y0FntmYuPQW.jpg",
    original_language: "en",
    overview:
      "Bond has left active service and is enjoying a tranquil life in Jamaica. His peace is short-lived when his old friend Felix Leiter from the CIA turns up asking for help. The mission to rescue a kidnapped scientist turns out to be far more treacherous than expected, leading Bond onto the trail of a mysterious villain armed with dangerous new technology.",
    poster_path:
      "https://image.tmdb.org/t/p/original//iUgygt3fscRoKWCV1d0C7FbM9TP.jpg",
    release_date: "2021-09-29",
    title: "No Time to Die",
    vote_average: 7.379,
    movieId: 370172,
    genres: "Action, Adventure, Thriller",
  },
  {
    backdrop_path: "/1n00NlOGRFZVs8coBxyZLm5l4EC.jpg",
    original_language: "en",
    overview:
      "Autobots and Decepticons are at war, with humans on the sidelines. Optimus Prime is gone. The key to saving our future lies buried in the secrets of the past, in the hidden history of Transformers on Earth.",
    poster_path:
      "https://image.tmdb.org/t/p/original//s5HQf2Gb3lIO2cRcFwNL9sn1o1o.jpg",
    release_date: "2017-06-16",
    title: "Transformers: The Last Knight",
    vote_average: 6.058,
    movieId: 335988,
    genres: "Action, Adventure, Science Fiction",
  },
  {
    backdrop_path: "/87wqeMeUeMRLjsE1IWNKJcPlpuC.jpg",
    original_language: "en",
    overview:
      "In Casablanca, Morocco in December 1941, a cynical American expatriate meets a former lover, with unforeseen complications.",
    poster_path:
      "https://image.tmdb.org/t/p/original//5K7cOHoay2mZusSLezBOY0Qxh8a.jpg",
    release_date: "1943-01-15",
    title: "Casablanca",
    vote_average: 8.161,
    movieId: 289,
    genres: "Drama, Romance",
  },
  {
    backdrop_path: "/cRR7N8WzOkby776y6I4vW0GQXrJ.jpg",
    original_language: "en",
    overview:
      "Two sisters find their already strained relationship challenged as a mysterious new planet threatens to collide with Earth.",
    poster_path:
      "https://image.tmdb.org/t/p/original//fMneszMiQuTKY8JUXrGGB5vwqJf.jpg",
    release_date: "2011-05-26",
    title: "Melancholia",
    vote_average: 7.2,
    movieId: 62215,
    genres: "Drama, Science Fiction",
  },
  {
    backdrop_path: "/cDJ61O1STtbWNBwefuqVrRe3d7l.jpg",
    original_language: "en",
    overview:
      "Against his father Odin's will, The Mighty Thor - a powerful but arrogant warrior god - recklessly reignites an ancient war. Thor is cast down to Earth and forced to live among humans as punishment. Once here, Thor learns what it takes to be a true hero when the most dangerous villain of his world sends the darkest forces of Asgard to invade Earth.",
    poster_path:
      "https://image.tmdb.org/t/p/original//prSfAi1xGrhLQNxVSUFh61xQ4Qy.jpg",
    release_date: "2011-04-21",
    title: "Thor",
    vote_average: 6.769,
    movieId: 10195,
    genres: "Adventure, Fantasy, Action",
  },
  {
    backdrop_path: "/b9UCfDzwiWw7mIFsIQR9ZJUeh7q.jpg",
    original_language: "en",
    overview:
      "Salt-of-the-earth Cole falls head over heels for enigmatic Sadie—but then makes the shocking discovery that she's a secret agent. Before they can decide on a second date, Cole and Sadie are swept away on an international adventure to save the world.",
    poster_path:
      "https://image.tmdb.org/t/p/original//liLN69YgoovHVgmlHJ876PKi5Yi.jpg",
    release_date: "2023-04-18",
    title: "Ghosted",
    vote_average: 7,
    movieId: 868759,
    genres: "Action, Comedy, Romance",
  },
  {
    backdrop_path: "/ziC23LkMYj8gToQQYQGWSGJCLNF.jpg",
    original_language: "en",
    overview:
      "Wreck-It Ralph is the 9-foot-tall, 643-pound villain of an arcade video game named Fix-It Felix Jr., in which the game's titular hero fixes buildings that Ralph destroys. Wanting to prove he can be a good guy and not just a villain, Ralph escapes his game and lands in Hero's Duty, a first-person shooter where he helps the game's hero battle against alien invaders. He later enters Sugar Rush, a kart racing game set on tracks made of candies, cookies and other sweets. There, Ralph meets Vanellope von Schweetz who has learned that her game is faced with a dire threat that could affect the entire arcade, and one that Ralph may have inadvertently started.",
    poster_path:
      "https://image.tmdb.org/t/p/original//zWoIgZ7mgmPkaZjG0102BSKFIqQ.jpg",
    release_date: "2012-11-01",
    title: "Wreck-It Ralph",
    vote_average: 7.339,
    movieId: 82690,
    genres: "Family, Animation, Comedy, Adventure",
  },
  {
    backdrop_path: "/zYlgqIpqJ1VAbvFhRhktAzIybVs.jpg",
    original_language: "en",
    overview:
      "An exiled anxiety-ridden homebody must battle an alien who's found its way into her home.",
    poster_path:
      "https://image.tmdb.org/t/p/original//ehGIDAMaYy6Eg0o8ga0oqflDjqW.jpg",
    release_date: "2023-09-22",
    title: "No One Will Save You",
    vote_average: 6.692,
    movieId: 820609,
    genres: "Horror, Science Fiction, Thriller",
  },
  {
    backdrop_path: "/bk2fTuIhQIvdAA3RbnrnvLvuaTc.jpg",
    original_language: "en",
    overview:
      "Jake Blues, just released from prison, puts his old band back together to save the Catholic home where he and his brother Elwood were raised.",
    poster_path:
      "https://image.tmdb.org/t/p/original//rhYJKOt6UrQq7JQgLyQcSWW5R86.jpg",
    release_date: "1980-06-16",
    title: "The Blues Brothers",
    vote_average: 7.742,
    movieId: 525,
    genres: "Music, Comedy, Action, Crime",
  },
  {
    backdrop_path: "/qr7dUqleMRd0VgollazbmyP9XjI.jpg",
    original_language: "en",
    overview:
      "In the smog-choked dystopian Los Angeles of 2019, blade runner Rick Deckard is called out of retirement to terminate a quartet of replicants who have escaped to Earth seeking their creator for a way to extend their short life spans.",
    poster_path:
      "https://image.tmdb.org/t/p/original//63N9uy8nd9j7Eog2axPQ8lbr3Wj.jpg",
    release_date: "1982-06-25",
    title: "Blade Runner",
    vote_average: 7.9,
    movieId: 78,
    genres: "Science Fiction, Drama, Thriller",
  },
  {
    backdrop_path: "/o0IWa75BXyXryNDVqw0xoXZzy1J.jpg",
    original_language: "es",
    overview:
      "Living with her tyrannical stepfather in a new home with her pregnant mother, 10-year-old Ofelia feels alone until she explores a decaying labyrinth guarded by a mysterious faun who claims to know her destiny. If she wishes to return to her real father, Ofelia must complete three terrifying tasks.",
    poster_path:
      "https://image.tmdb.org/t/p/original//2VVhikIxoztAXEDQZLOdtBsu6vf.jpg",
    release_date: "2006-10-10",
    title: "Pan's Labyrinth",
    vote_average: 7.756,
    movieId: 1417,
    genres: "Fantasy, Drama, War",
  },
  {
    backdrop_path: "/hlxduUs8y9icWGMzYCDLcYHEQ2u.jpg",
    original_language: "en",
    overview:
      "For best friends Becky and Hunter, life is all about conquering fears and pushing limits. But after they climb 2,000 feet to the top of a remote, abandoned radio tower, they find themselves stranded with no way down. Now Becky and Hunter’s expert climbing skills will be put to the ultimate test as they desperately fight to survive the elements, a lack of supplies, and vertigo-inducing heights",
    poster_path:
      "https://image.tmdb.org/t/p/original//v28T5F1IygM8vXWZIycfNEm3xcL.jpg",
    release_date: "2022-08-11",
    title: "Fall",
    vote_average: 7.2,
    movieId: 985939,
    genres: "Thriller",
  },
  {
    backdrop_path: "/sGzuQYSTwJvLBc2PnuSVLHhuFeh.jpg",
    original_language: "en",
    overview:
      "Prima ballerina Dominika Egorova faces a bleak and uncertain future after she suffers an injury that ends her career. She soon turns to Sparrow School, a secret intelligence service that trains exceptional young people to use their minds and bodies as weapons. Dominika emerges as the most dangerous Sparrow after completing the sadistic training process. As she comes to terms with her new abilities, she meets a CIA agent who tries to convince her that he is the only person she can trust.",
    poster_path:
      "https://image.tmdb.org/t/p/original//vLCogyfQGxVLDC1gqUdNAIkc29L.jpg",
    release_date: "2018-02-28",
    title: "Red Sparrow",
    vote_average: 6.535,
    movieId: 401981,
    genres: "Thriller, Mystery",
  },
  {
    backdrop_path: "/xBwtP27cx8WfjHJVFkpuV6F1RES.jpg",
    original_language: "de",
    overview:
      "Paul Baumer and his friends Albert and Muller, egged on by romantic dreams of heroism, voluntarily enlist in the German army. Full of excitement and patriotic fervour, the boys enthusiastically march into a war they believe in. But once on the Western Front, they discover the soul-destroying horror of World War I.",
    poster_path:
      "https://image.tmdb.org/t/p/original//2IRjbi9cADuDMKmHdLK7LaqQDKA.jpg",
    release_date: "2022-10-07",
    title: "All Quiet on the Western Front",
    vote_average: 7.738,
    movieId: 49046,
    genres: "Drama, War, Action",
  },
  {
    backdrop_path: "/TU9NIjwzjoKPwQHoHshkFcQUCG.jpg",
    original_language: "ko",
    overview:
      "All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.",
    poster_path:
      "https://image.tmdb.org/t/p/original//7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    release_date: "2019-05-30",
    title: "Parasite",
    vote_average: 8.509,
    movieId: 496243,
    genres: "Comedy, Thriller, Drama",
  },
  {
    backdrop_path: "/pBdQ4iorzRV2G38mdS6rzrmUfMA.jpg",
    original_language: "fi",
    overview:
      "When an ex-soldier who discovers gold in the Lapland wilderness tries to take the loot into the city, German soldiers led by a brutal SS officer battle him.",
    poster_path:
      "https://image.tmdb.org/t/p/original//ygO9lowFMXWymATCrhoQXd6gCEh.jpg",
    release_date: "2022-09-09",
    title: "Sisu",
    vote_average: 7.482,
    movieId: 840326,
    genres: "Action, War, Adventure",
  },
  {
    backdrop_path: "/xcaSYLBhmDzJ6P14bcKe0KTh3QV.jpg",
    original_language: "en",
    overview:
      "Singer Freddie Mercury, guitarist Brian May, drummer Roger Taylor and bass guitarist John Deacon take the music world by storm when they form the rock 'n' roll band Queen in 1970. Hit songs become instant classics. When Mercury's increasingly wild lifestyle starts to spiral out of control, Queen soon faces its greatest challenge yet – finding a way to keep the band together amid the success and excess.",
    poster_path:
      "https://image.tmdb.org/t/p/original//lHu1wtNaczFPGFDTrjCSzeLPTKN.jpg",
    release_date: "2018-10-24",
    title: "Bohemian Rhapsody",
    vote_average: 7.987,
    movieId: 424694,
    genres: "Music, Drama",
  },
  {
    backdrop_path: "/dVr11o9or7AS8AMPfwjSpEU83iU.jpg",
    original_language: "en",
    overview:
      "The true story of pianist Władysław Szpilman's experiences in Warsaw during the Nazi occupation. When the Jews of the city find themselves forced into a ghetto, Szpilman finds work playing in a café; and when his family is deported in 1942, he stays behind, works for a while as a laborer, and eventually goes into hiding in the ruins of the war-torn city.",
    poster_path:
      "https://image.tmdb.org/t/p/original//2hFvxCCWrTmCYwfy7yum0GKRi3Y.jpg",
    release_date: "2002-09-17",
    title: "The Pianist",
    vote_average: 8.384,
    movieId: 423,
    genres: "Drama, War",
  },
  {
    backdrop_path: "/tIG8FwHRiHLOlWJdizp2oxdkSL2.jpg",
    original_language: "en",
    overview:
      "John Constantine has literally been to Hell and back. When he teams up with a policewoman to solve the mysterious suicide of her twin sister, their investigation takes them through the world of demons and angels that exists beneath the landscape of contemporary Los Angeles.",
    poster_path:
      "https://image.tmdb.org/t/p/original//vPYgvd2MwHlxTamAOjwVQp4qs1W.jpg",
    release_date: "2005-02-08",
    title: "Constantine",
    vote_average: 7.086,
    movieId: 561,
    genres: "Fantasy, Action, Horror",
  },
  {
    backdrop_path: "/8fnYJPoXxwAN4valDLgz2whMGTH.jpg",
    original_language: "en",
    overview:
      "Instead of flying to Florida with his folks, Kevin ends up alone in New York, where he gets a hotel room with his dad's credit card—despite problems from a clerk and meddling bellboy. But when Kevin runs into his old nemeses, the Wet Bandits, he's determined to foil their plans to rob a toy store on Christmas Eve.",
    poster_path:
      "https://image.tmdb.org/t/p/original//uuitWHpJwxD1wruFl2nZHIb4UGN.jpg",
    release_date: "1992-11-15",
    title: "Home Alone 2: Lost in New York",
    vote_average: 6.746,
    movieId: 772,
    genres: "Comedy, Family, Adventure",
  },
  {
    backdrop_path: "/cHkhb5A4gQRK6zs6Pv7zorHs8Nk.jpg",
    original_language: "en",
    overview:
      "Deckard Shaw seeks revenge against Dominic Toretto and his family for his comatose brother.",
    poster_path:
      "https://image.tmdb.org/t/p/original//ktofZ9Htrjiy0P6LEowsDaxd3Ri.jpg",
    release_date: "2015-04-01",
    title: "Furious 7",
    vote_average: 7.235,
    movieId: 168259,
    genres: "Action, Thriller, Crime",
  },
  {
    backdrop_path: "/55vfQqilh6KNCxym03v7cMMCTqs.jpg",
    original_language: "en",
    overview:
      "Cab driver Max picks up a man who offers him $600 to drive him around. But the promise of easy money sours when Max realizes his fare is an assassin.",
    poster_path:
      "https://image.tmdb.org/t/p/original//iOpi3ut5DhQIbrVVjlnmfy2U7dI.jpg",
    release_date: "2004-08-04",
    title: "Collateral",
    vote_average: 7.223,
    movieId: 1538,
    genres: "Drama, Crime, Thriller",
  },
  {
    backdrop_path: "/9FrpAtF87VKblKkDEiIZzYgO40K.jpg",
    original_language: "en",
    overview:
      "When Hong Kong Inspector Lee is summoned to Los Angeles to investigate a kidnapping, the FBI doesn't want any outside help and assigns cocky LAPD Detective James Carter to distract Lee from the case. Not content to watch the action from the sidelines, Lee and Carter form an unlikely partnership and investigate the case themselves.",
    poster_path:
      "https://image.tmdb.org/t/p/original//3WsLE6FtxEPRa6U9sbY1ckrn39s.jpg",
    release_date: "1998-09-18",
    title: "Rush Hour",
    vote_average: 7.047,
    movieId: 2109,
    genres: "Action, Comedy, Crime",
  },
  {
    backdrop_path: "/4tdV5AeojEdbvn6VpeQrbuDlmzs.jpg",
    original_language: "ja",
    overview:
      "Suzume, 17, lost her mother as a little girl. On her way to school, she meets a mysterious young man. But her curiosity unleashes a calamity that endangers the entire population of Japan, and so Suzume embarks on a journey to set things right.",
    poster_path:
      "https://image.tmdb.org/t/p/original//oNbCAM3UVJamxRFd5hUt686aqb2.jpg",
    release_date: "2022-11-11",
    title: "Suzume",
    vote_average: 7.971,
    movieId: 916224,
    genres: "Animation, Drama, Adventure, Fantasy",
  },
  {
    backdrop_path: "/9Cip74Gl1xOkRP0e4OAiPZp8C4k.jpg",
    original_language: "en",
    overview:
      "Twelve-year-old Dre Parker could have been the most popular kid in Detroit, but his mother's latest career move has landed him in China. Dre immediately falls for his classmate Mei Ying but the cultural differences make such a friendship impossible. Even worse, Dre's feelings make him an enemy of the class bully, Cheng. With no friends in a strange land, Dre has nowhere to turn but maintenance man Mr. Han, who is a kung fu master. As Han teaches Dre that kung fu is not about punches and parries, but maturity and calm, Dre realizes that facing down the bullies will be the fight of his life.",
    poster_path:
      "https://image.tmdb.org/t/p/original//bHjLC5GuBfeyW6ZE07x6TalKj19.jpg",
    release_date: "2010-06-10",
    title: "The Karate Kid",
    vote_average: 6.536,
    movieId: 38575,
    genres: "Action, Adventure, Drama, Family",
  },
  {
    backdrop_path: "/w9QfTrYmtoA96zJlVNvjS8eucf8.jpg",
    original_language: "en",
    overview:
      "Debbie Ocean, a criminal mastermind, gathers a crew of female thieves to pull off the heist of the century at New York's annual Met Gala.",
    poster_path:
      "https://image.tmdb.org/t/p/original//MvYpKlpFukTivnlBhizGbkAe3v.jpg",
    release_date: "2018-06-07",
    title: "Ocean's Eight",
    vote_average: 6.985,
    movieId: 402900,
    genres: "Crime, Comedy, Action",
  },
  {
    backdrop_path: "/oQEAWIr3thvSICvoQnFEqyuf0Oz.jpg",
    original_language: "en",
    overview:
      "The continuation of Joe's sexually dictated life delves into the darker aspects of her adult life and what led to her being in Seligman's care.",
    poster_path:
      "https://image.tmdb.org/t/p/original//fYLbO4UpumgNHVnsyDQkXG87Q1k.jpg",
    release_date: "2013-12-25",
    title: "Nymphomaniac: Vol. II",
    vote_average: 6.735,
    movieId: 249397,
    genres: "Drama, Mystery",
  },
  {
    backdrop_path: "/csz3oWxd04wgXUzenXgenIVwXGl.jpg",
    original_language: "en",
    overview:
      "After an altercation between Alex, the president's son, and Britain's Prince Henry at a royal event becomes tabloid fodder, their long-running feud now threatens to drive a wedge in U.S./British relations. When the rivals are forced into a staged truce, their icy relationship begins to thaw and the friction between them sparks something deeper than they ever expected.",
    poster_path:
      "https://image.tmdb.org/t/p/original//dD3vhyDRCCT90hf4rldHU6Wu3Va.jpg",
    release_date: "2023-07-27",
    title: "Red, White & Royal Blue",
    vote_average: 7.978,
    movieId: 930094,
    genres: "Comedy, Romance",
  },
  {
    backdrop_path: "/i2GVEvltEu3BXn5crBSxgKuTaca.jpg",
    original_language: "en",
    overview:
      "To put their demons to rest once and for all, Josh Lambert and a college-aged Dalton Lambert must go deeper into The Further than ever before, facing their family's dark past and a host of new and more horrifying terrors that lurk behind the red door.",
    poster_path:
      "https://image.tmdb.org/t/p/original//uS1AIL7I1Ycgs8PTfqUeN6jYNsQ.jpg",
    release_date: "2023-07-05",
    title: "Insidious: The Red Door",
    vote_average: 6.631,
    movieId: 614479,
    genres: "Horror, Thriller",
  },
  {
    backdrop_path: "/dJrYUXjgYAD95Ho67t7Utdqv8At.jpg",
    original_language: "en",
    overview:
      "When former Green Beret John Rambo is harassed by local law enforcement and arrested for vagrancy, he is forced to flee into the mountains and wage an escalating one-man war against his pursuers.",
    poster_path:
      "https://image.tmdb.org/t/p/original//a9sa6ERZCpplbPEO7OMWE763CLD.jpg",
    release_date: "1982-10-22",
    title: "First Blood",
    vote_average: 7.492,
    movieId: 1368,
    genres: "Action, Adventure, Thriller, War",
  },
  {
    backdrop_path: "/dmgFJdivUmV4vGLkbPD49KVjlHx.jpg",
    original_language: "en",
    overview:
      "In the quiet family town of Suburbicon during the 1950s, the best and worst of humanity is hilariously reflected through the deeds of seemingly ordinary people. When a home invasion turns deadly, a picture-perfect family turns to blackmail, revenge and murder.",
    poster_path:
      "https://image.tmdb.org/t/p/original//a3IHgSwO5jWPLcGjKqbQ7pxVGkq.jpg",
    release_date: "2017-10-26",
    title: "Suburbicon",
    vote_average: 5.883,
    movieId: 395458,
    genres: "Thriller, Crime, Drama, Mystery",
  },
  {
    backdrop_path: "/iSMUo3G248S8rwbTMkZXVKSPbY5.jpg",
    original_language: "en",
    overview:
      "After exorcising the demons of his ex-, Malcolm starts afresh with his new girlfriend and her two children. After moving into their dream home, Malcolm is once again plagued by bizarre paranormal events.",
    poster_path:
      "https://image.tmdb.org/t/p/original//oV7M00fPXy5P0nbdeMbSUjYv0vx.jpg",
    release_date: "2014-04-17",
    title: "A Haunted House 2",
    vote_average: 6.139,
    movieId: 184345,
    genres: "Comedy, Horror",
  },
  {
    backdrop_path: "/aCHn2TXYJfzPXQKA6r9mKPbMlUB.jpg",
    original_language: "en",
    overview:
      "Truman Burbank is the star of The Truman Show, a 24-hour-a-day reality TV show that broadcasts every aspect of his life without his knowledge. His entire life has been an unending soap opera for consumption by the rest of the world. And everyone he knows, including his wife and his best friend, is really an actor, paid to be part of his life.",
    poster_path:
      "https://image.tmdb.org/t/p/original//vuza0WqY239yBXOadKlGwJsZJFE.jpg",
    release_date: "1998-06-04",
    title: "The Truman Show",
    vote_average: 8.14,
    movieId: 37165,
    genres: "Comedy, Drama",
  },
  {
    backdrop_path: "/nLitXHcOD2jxwE6rq6sTi4ZMmo5.jpg",
    original_language: "en",
    overview:
      "Robert Neville is a scientist who was unable to stop the spread of the terrible virus that was incurable and man-made. Immune, Neville is now the last human survivor in what is left of New York City and perhaps the world. For three years, Neville has faithfully sent out daily radio messages, desperate to find any other survivors who might be out there. But he is not alone.",
    poster_path:
      "https://image.tmdb.org/t/p/original//iPDkaSdKk2jRLTM65UOEoKtsIZ8.jpg",
    release_date: "2007-12-12",
    title: "I Am Legend",
    vote_average: 7.206,
    movieId: 6479,
    genres: "Drama, Science Fiction, Thriller",
  },
  {
    backdrop_path: "/zZZ1FDl5FPClZ9OnMrlaPA4Iuxv.jpg",
    original_language: "en",
    overview:
      'In 2019, Lincoln Six-Echo is a resident of a seemingly "Utopian" but contained facility. Like all of the inhabitants of this carefully-controlled environment, Lincoln hopes to be chosen to go to The Island — reportedly the last uncontaminated location on the planet. But Lincoln soon discovers that everything about his existence is a lie.',
    poster_path:
      "https://image.tmdb.org/t/p/original//n4HyHxnKCJG8SbqeLEK1nU5JbIR.jpg",
    release_date: "2005-07-21",
    title: "The Island",
    vote_average: 6.674,
    movieId: 1635,
    genres: "Action, Thriller, Science Fiction, Adventure",
  },
  {
    backdrop_path: "/6RDgtEBzjuF7W25DVziXRABchpX.jpg",
    original_language: "en",
    overview:
      "Mia, a drug addict, is determined to kick the habit. To that end, she asks her brother, David, his girlfriend, Natalie and their friends Olivia and Eric to accompany her to their family's remote forest cabin to help her through withdrawal. Eric finds a mysterious Book of the Dead at the cabin and reads aloud from it, awakening an ancient demon. All hell breaks loose when the malevolent entity possesses Mia.",
    poster_path:
      "https://image.tmdb.org/t/p/original//1gDV0Lm9y8ufIKzyf0h0GBgb9Zj.jpg",
    release_date: "2013-04-05",
    title: "Evil Dead",
    vote_average: 6.543,
    movieId: 109428,
    genres: "Horror",
  },
  {
    backdrop_path: "/zGHdS1eLaU5wdYCJ6vY9QfQGCTo.jpg",
    original_language: "en",
    overview:
      "When a young boy accidentally triggers the universe's most lethal hunters' return to Earth, only a ragtag crew of ex-soldiers and a disgruntled scientist can prevent the end of the human race.",
    poster_path:
      "https://image.tmdb.org/t/p/original//a3eWGF6YPF7No5Rbtjc8QpDvz7l.jpg",
    release_date: "2018-09-05",
    title: "The Predator",
    vote_average: 5.629,
    movieId: 346910,
    genres: "Science Fiction, Action, Adventure",
  },
  {
    backdrop_path: "/rRcNmiH55Tz0ugUsDUGmj8Bsa4V.jpg",
    original_language: "en",
    overview:
      "On the brink of losing her childhood home, Maddie discovers an intriguing job listing: wealthy helicopter parents looking for someone to “date” their introverted 19-year-old son, Percy, before he leaves for college. To her surprise, Maddie soon discovers the awkward Percy is no sure thing.",
    poster_path:
      "https://image.tmdb.org/t/p/original//4K7gQjD19CDEPd7A9KZwr2D9Nco.jpg",
    release_date: "2023-06-15",
    title: "No Hard Feelings",
    vote_average: 6.818,
    movieId: 884605,
    genres: "Comedy, Romance",
  },
];
const displayedMovies = movies
  .sort(() => Math.random() - Math.random())
  .slice(0, 8);
export { movies, displayedMovies };
