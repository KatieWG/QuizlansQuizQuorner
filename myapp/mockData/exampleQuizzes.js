const exampleQuizTemplate = {
  quizId: 1,
  quizName: 'General one',
  quizQuestions: [
    {
      question: '',
      correctAnswer: '',
      incorrectAnswers: [],
    },
  ],
  timesTaken: 12,
  category: 'general',
  quizDescription: 'General knowledge quiz number 1',
  quizBanner: 'photo url',
  quizUpvotes: 5,
  quizDownvotes: 1,
  reported: false,
  reportedTimes: 0,
  createdBy: 'PatrickTheAssistant',
  aggregateScore: 84,
};

let exampleQuizzes = [
  {
    quizId: 1,
    quizName: 'General one',
    quizQuestions: [
      {
        question: 'What does DNA stand for?',
        correctAnswer: 'Deoxyribonucleic Acid',
        incorrectAnswers: [
          'Deoxyribogenetic Acid',
          'Deoxyribogenetic Atoms',
          'Detoxic Acid',
        ],
      },
      {
        question:
          'Which game did &quot;Sonic The Hedgehog&quot; make his first appearance in?',
        correctAnswer: 'Rad Mobile',
        incorrectAnswers: ['Sonic The Hedgehog', 'Super Mario 64', 'Mega Man'],
      },
      {
        question:
          'Which animal features on the logo for Abarth, the motorsport division of Fiat?',
        correctAnswer: 'Scorpion',
        incorrectAnswers: ['Snake', 'Bull', 'Horse'],
      },
      {
        question:
          'Who had a 1976 hit with the song You Make Me Feel Like Dancing?',
        correctAnswer: 'Leo Sayer',
        incorrectAnswers: ['Elton John', 'Billy Joel', 'Andy Gibb'],
      },
      {
        question:
          'What does AD stand for in relation to Windows Operating Systems? ',
        correctAnswer: 'Active Directory',
        incorrectAnswers: [
          'Alternative Drive',
          'Automated Database',
          'Active Department',
        ],
      },
      {
        question: 'On which continent is the country of Angola located?',
        correctAnswer: 'Africa',
        incorrectAnswers: ['South America', 'Europe', 'Asia'],
      },
      {
        question: 'Who is the true moon princess in Sailor Moon?',
        correctAnswer: 'Sailor Moon',
        incorrectAnswers: ['Sailor Venus', 'Sailor Mars', 'Sailor Jupiter'],
      },
      {
        question: 'What is the nickname of the US state of California?',
        correctAnswer: 'Golden State',
        incorrectAnswers: ['Sunshine State', 'Bay State', 'Treasure State'],
      },
      {
        question: 'In which Mario game did the Mega Mushroom make its debut?',
        correctAnswer: 'Mario Party 4',
        incorrectAnswers: [
          'New Super Mario Bros.',
          'Mario Kart Wii',
          'Super Mario 3D World',
        ],
      },
      {
        question:
          'Gordon Freeman is said to have burnt and destroyed what food in the break room microwave?',
        correctAnswer: 'Casserole',
        incorrectAnswers: ['Sub Sandwich', 'Chicken Soup', 'Pepperoni Pizza'],
      },
    ],
    timesTaken: 12,
    category: 'general',
    quizDescription: 'General knowledge quiz number 1',
    quizBanner:
      'https://pgcpsmess.files.wordpress.com/2013/08/imagescae8o2el.jpg',
    quizUpvotes: 5,
    quizDownvotes: 1,
    reported: false,
    reportedTimes: 0,
    createdBy: 'PatrickTheAssistant',
    aggregateScore: 84,
  },
  {
    quizId: 2,
    quizName: 'General Two',
    quizQuestions: [
      {
        question:
          'Which of these was the name of a bug found in April 2014 in the publicly available OpenSSL cryptography library',
        correctAnswer: 'Heartbleed',
        incorrectAnswers: ['Shellshock', 'Corrupted Blood', 'Shellscript'],
      },
      {
        question:
          'What is the name of the formerly rich fishing grounds off the island of Newfoundland, Canada?',
        correctAnswer: 'Grand Banks',
        incorrectAnswers: [
          'Great Barrier Reef',
          'Mariana Trench',
          'Hudson Bay',
        ],
      },
      {
        question:
          'Which one of these cartoon characters is NOT voiced by Rob Paulsen?',
        correctAnswer: 'Max Tennyson (Ben 10)',
        incorrectAnswers: [
          'Carl Wheezer (Jimmy Neutron)',
          'Yakko Warner (Animaniacs)',
          'The Mask (The Mask, TV Series)',
        ],
      },
      {
        question:
          'African-American performer Sammy Davis Jr. was known for losing which part of his body in a car accident?',
        correctAnswer: 'Left Eye',
        incorrectAnswers: ['Right Ear', 'Right Middle Finger', 'Nose'],
      },
      {
        question: 'Who out of these actresses is the youngest?',
        correctAnswer: 'Kiernan Shipka',
        incorrectAnswers: ['Ariel Winter', 'Emma Watson', 'Bonnie Wright'],
      },
      {
        question:
          'What is former United States President Bill Clinton full name?',
        correctAnswer: 'William Jefferson Clinton',
        incorrectAnswers: [
          'William Roosevelt Clinton',
          'William Truman Clinton',
          'William Lincoln Clinton',
        ],
      },
      {
        question:
          'In Battlestar Galactica (2004), what is the name of the President of the Twelve Colonies?',
        correctAnswer: 'Laura Roslin',
        incorrectAnswers: ['William Adama', 'Tricia Helfer', 'Harry Stills'],
      },
      {
        question: 'In which year was League of Legends released?',
        correctAnswer: '2009',
        incorrectAnswers: ['2010', '2003', '2001'],
      },
      {
        question: 'Which of the following is the longest river in Europe?',
        correctAnswer: 'Volga',
        incorrectAnswers: ['Danube', 'Ural', 'Dnieper'],
      },
      {
        question: 'Which country drives on the left side of the road?',
        correctAnswer: 'Japan',
        incorrectAnswers: ['Germany', 'Russia', 'China'],
      },
    ],
    timesTaken: 22,
    category: 'general',
    quizDescription: 'General knowledge quiz number 2',
    quizBanner:
      'https://image.shutterstock.com/image-vector/illustration-cartoon-military-general-saluting-260nw-260686511.jpg',
    quizUpvotes: 12,
    quizDownvotes: 8,
    reported: false,
    reportedTimes: 0,
    createdBy: 'PatrickTheAssistant',
    aggregateScore: 132,
  },
  {
    quizId: 3,
    quizName: 'Science and Nature quiz one',
    quizQuestions: [
      {
        question: 'Which of these bones is hardest to break?',
        correctAnswer: 'Femur',
        incorrectAnswers: ['Cranium', 'Humerus', 'Tibia'],
      },
      {
        question:
          'Rhinoplasty is a surgical procedure on what part of the human body?',
        correctAnswer: 'Nose',
        incorrectAnswers: ['Ears', 'Chin', 'Neck'],
      },
      {
        question:
          'To the nearest minute, how long does it take for light to travel from the Sun to the Earth?',
        correctAnswer: '8 Minutes',
        incorrectAnswers: ['6 Minutes', '2 Minutes', '12 Minutes'],
      },
      {
        question: 'Which chemical element has the lowest boiling point?',
        correctAnswer: 'Helium',
        incorrectAnswers: ['Hydrogen', 'Neon', 'Nitrogen'],
      },
      {
        question:
          'An organic compound is considered an alcohol if it has what functional group?',
        correctAnswer: 'Hydroxyl',
        incorrectAnswers: ['Carbonyl', 'Alkyl', 'Aldehyde'],
      },
      {
        question: 'Au on the Periodic Table refers to which element?',
        correctAnswer: 'Gold',
        incorrectAnswers: ['Silver', 'Oxygen', 'Nickel'],
      },
      {
        question:
          'All the following metal elements are liquids at or near room temperature EXCEPT:',
        correctAnswer: 'Beryllium',
        incorrectAnswers: ['Gallium', 'Caesium', 'Mercury'],
      },
      {
        question:
          'How many officially recognized dwarf planets in the solar system are named after Polynesian deities?',
        correctAnswer: '2',
        incorrectAnswers: ['0', '1', '5'],
      },
      {
        question: 'Folic acid is the synthetic form of which vitamin?',
        correctAnswer: 'Vitamin B',
        incorrectAnswers: ['Vitamin A', 'Vitamin C', 'Vitamin D'],
      },
      {
        question: 'What term is best associated with Sigmund Freud?',
        correctAnswer: 'Psychoanalysis',
        incorrectAnswers: [
          'Cognitive-Behavioral Therapy',
          'Theory of Gravity',
          'Dialectical Behavior Therapy',
        ],
      },
    ],
    timesTaken: 10,
    category: 'Science&Nature',
    quizDescription: 'Science and Nature quiz number 1',
    quizBanner:
      'https://epi-rsc.rsc-cdn.org/globalassets/05-journals-books-databases/our-journals/00-journal-pages-heros/Biomaterials-Science-HERO.jpg?version=9e7110e4',
    quizUpvotes: 9,
    quizDownvotes: 1,
    reported: false,
    reportedTimes: 0,
    createdBy: 'SteveTheQwizard',
    aggregateScore: 50,
  },
  {
    quizId: 4,
    quizName: 'Science and Nature quiz two',
    quizQuestions: [
      {
        question: 'The human heart has how many chambers?',
        correctAnswer: '4',
        incorrectAnswers: ['2', '6', '3'],
      },
      {
        question: 'The human right lung has how many lobes?',
        correctAnswer: '3',
        incorrectAnswers: ['4', '2', '1'],
      },
      {
        question: 'Human cells typically have how many copies of each gene?',
        correctAnswer: '2',
        incorrectAnswers: ['1', '4', '3'],
      },
      {
        question: 'Who made the discovery of X-rays?',
        correctAnswer: 'Wilhelm Conrad Roentgen',
        incorrectAnswers: [
          'Thomas Alva Edison',
          'James Watt',
          'Albert Einstein',
        ],
      },
      {
        question: 'Botanically speaking, which of these fruits is NOT a berry?',
        correctAnswer: 'Strawberry',
        incorrectAnswers: ['Blueberry', 'Banana', 'Concord Grape'],
      },
      {
        question: 'An average human can go how many weeks without water.',
        correctAnswer: '2',
        incorrectAnswers: ['1', '4', '3'],
      },
      {
        question:
          'Burning which of these metals will produce a bright white flame?',
        correctAnswer: 'Magnesium',
        incorrectAnswers: ['Copper', 'Lithium', 'Lead'],
      },
      {
        question: 'Which chemical element was originally known as Alabamine?',
        correctAnswer: 'Astatine',
        incorrectAnswers: ['Selenium', 'Antimony', 'Molybdenum'],
      },
      {
        question:
          'Which of the following men does not have a chemical element named after him?',
        correctAnswer: 'Sir Isaac Newton',
        incorrectAnswers: ['Albert Einstein', 'Niels Bohr', 'Enrico Fermi'],
      },
      {
        question: 'What is the half-life of Uranium-235?',
        correctAnswer: '703,800,000 years',
        incorrectAnswers: [
          '4,300,400,000 years',
          '1,260,900,000 years',
          'Uranium-235 is a stable isotope',
        ],
      },
    ],
    timesTaken: 50,
    category: 'general',
    quizDescription: 'Science and Nature quiz number 2',
    quizBanner:
      'https://ccweb.imgix.net/https%3A%2F%2Fwww.classcentral.com%2Fimages%2Fsubjects%2Fscience.svg?auto=format&blur=200&h=60&ixlib=php-3.3.1&px=16&s=5fee1b02e6968787222f2efe752bb399',
    quizUpvotes: 26,
    quizDownvotes: 8,
    reported: false,
    reportedTimes: 0,
    createdBy: 'SteveTheQwizard',
    aggregateScore: 375,
  },
  {
    quizId: 5,
    quizName: 'Animal quiz one',
    quizQuestions: [
      {
        question:
          'What was the name of the Ethiopian Wolf before they knew it was related to wolves?',
        correctAnswer: 'Simien Jackel',
        incorrectAnswers: [
          'Ethiopian Coyote',
          'Amharic Fox',
          'Canis Simiensis',
        ],
      },
      {
        question:
          'A carnivorous animal eats flesh, what does a nucivorous animal eat?',
        correctAnswer: 'Nuts',
        incorrectAnswers: ['Nothing', 'Fruit', 'Seaweed'],
      },
      {
        question: 'What is the fastest land animal?',
        correctAnswer: 'Cheetah',
        incorrectAnswers: [
          'Lion',
          'Thomson&rsquo;s Gazelle',
          'Pronghorn Antelope',
        ],
      },
      {
        question: 'What is the scientific name for modern day humans?',
        correctAnswer: 'Homo Sapiens',
        incorrectAnswers: [
          'Homo Ergaster',
          'Homo Erectus',
          'Homo Neanderthalensis',
        ],
      },
      {
        question:
          'The Kākāpō is a large, flightless, nocturnal parrot native to which country?',
        correctAnswer: 'New Zealand',
        incorrectAnswers: ['South Africa', 'Australia', 'Madagascar'],
      },
      {
        question: 'Hippocampus is the Latin name for which marine creature?',
        correctAnswer: 'Seahorse',
        incorrectAnswers: ['Dolphin', 'Whale', 'Octopus'],
      },
      {
        question: 'Cashmere is the wool from which kind of animal?',
        correctAnswer: 'Goat',
        incorrectAnswers: ['Sheep', 'Camel', 'Llama'],
      },
      {
        question:
          'What scientific suborder does the family Hyaenidae belong to?',
        correctAnswer: 'Feliformia',
        incorrectAnswers: ['Haplorhini', 'Caniformia', 'Ciconiiformes'],
      },
      {
        question: 'What is the scientific name of the cheetah?',
        correctAnswer: 'Acinonyx jubatus',
        incorrectAnswers: ['Panthera onca', 'Lynx rufus', 'Felis catus'],
      },
      {
        question: 'What is the scientific name of the Budgerigar?',
        correctAnswer: 'Melopsittacus undulatus',
        incorrectAnswers: [
          'Nymphicus hollandicus',
          'Pyrrhura molinae',
          'Ara macao',
        ],
      },
    ],
    timesTaken: 19,
    category: 'Animals',
    quizDescription: 'Animal quiz number 1',
    quizBanner:
      'https://www.iata.org/contentassets/d7c512eb9a704ba2a8056e3186a31921/cargo_live_animals_parrot.jpg?w=330&h=200&mode=crop&scale=both&v=20191213012337',
    quizUpvotes: 12,
    quizDownvotes: 4,
    reported: false,
    reportedTimes: 0,
    createdBy: 'LizTheQuizWiz',
    aggregateScore: 130,
  },
  {
    quizId: 6,
    quizName: 'Animal quiz number two',
    quizQuestions: [
      {
        question: 'Which of these animals is NOT a lizard?',
        correctAnswer: 'Tuatara',
        incorrectAnswers: ['Komodo Dragon', 'Gila Monster', 'Green Iguana'],
      },
      {
        question: 'Unlike on most salamanders, this part of a newt is flat?',
        correctAnswer: 'Tail',
        incorrectAnswers: ['Head', 'Teeth', 'Feet'],
      },
      {
        question:
          'What is the name of the family that the domestic cat is a member of?',
        correctAnswer: 'Felidae',
        incorrectAnswers: ['Felinae', 'Felis', 'Cat'],
      },
      {
        question:
          'What dog bread is one of the oldest breeds of dog and has flourished since before 400 BCE.',
        correctAnswer: 'Pugs',
        incorrectAnswers: ['Bulldogs', 'Boxers', 'Chihuahua'],
      },
      {
        question:
          'What is the name of the copper-rich protein that creates the blue blood in the Antarctic octopus?',
        correctAnswer: 'Hemocyanin',
        incorrectAnswers: ['Cytochrome', 'Iron', 'Methionine'],
      },
      {
        question: 'The dish Fugu, is made from what family of fish?',
        correctAnswer: 'Pufferfish',
        incorrectAnswers: ['Bass', 'Salmon', 'Mackerel'],
      },
      {
        question: 'What is the collective noun for a group of crows?',
        correctAnswer: 'Murder',
        incorrectAnswers: ['Pack', 'Gaggle', 'Herd'],
      },
      {
        question: 'What is the scientific name of the Common Chimpanzee?',
        correctAnswer: 'Pan troglodytes',
        incorrectAnswers: ['Gorilla gorilla', 'Pan paniscus', 'Panthera leo'],
      },
      {
        question: 'Which of these is a colony of polyps and not a jellyfish?',
        correctAnswer: 'Portuguese Man-of-War',
        incorrectAnswers: ['Sea Wasp', 'Irukandji', 'Sea Nettle'],
      },
      {
        question: 'What colour is the female blackbird?',
        correctAnswer: 'Brown',
        incorrectAnswers: ['Black', 'White', 'Yellow'],
      },
    ],
    timesTaken: 3,
    category: 'Animals',
    quizDescription: 'Animal quiz number 2',
    quizBanner:
      'https://www.rd.com/wp-content/uploads/2020/05/GettyImages-109433950-scaled.jpg',
    quizUpvotes: 0,
    quizDownvotes: 3,
    reported: true,
    reportedTimes: 3,
    createdBy: 'ZeroOutOfTen',
    aggregateScore: 15,
  },
  {
    quizId: 7,
    quizName: 'Animal Quiz Number 3',
    quizQuestions: [
      {
        question:
          'To which biological phylum do all mammals, birds and reptiles belong?',
        correctAnswer: 'Chordata',
        incorrectAnswers: ['Echinodermata', 'Annelida', 'Placazoa'],
      },
      {
        question: 'What bird is born with claws on its wing digits?',
        correctAnswer: 'Hoatzin',
        incorrectAnswers: ['Cormorant', 'Cassowary', 'Secretary bird'],
      },
      {
        question: 'What is the collective noun for rats?',
        correctAnswer: 'Mischief',
        incorrectAnswers: ['Pack', 'Race', 'Drift'],
      },
      {
        question: 'What is the collective noun for bears?',
        correctAnswer: 'Sloth',
        incorrectAnswers: ['Drove', 'Tribe', 'Husk'],
      },
      {
        question:
          'What is the name for a male bee that comes from an unfertilized egg?',
        correctAnswer: 'Drone',
        incorrectAnswers: ['Soldier', 'Worker', 'Male'],
      },
      {
        question: 'How many teeth does an adult rabbit have?',
        correctAnswer: '28',
        incorrectAnswers: ['30', '26', '24'],
      },
      {
        question:
          'What is the common term for bovine spongiform encephalopathy (BSE)?',
        correctAnswer: 'Mad Cow disease',
        incorrectAnswers: [
          'Weils disease',
          'Milk fever',
          'Foot-and-mouth disease',
        ],
      },
      {
        question: 'What is the worlds longest venomous snake?',
        correctAnswer: 'King Cobra',
        incorrectAnswers: [
          'Green Anaconda',
          'Inland Taipan',
          'Yellow Bellied Sea Snake',
        ],
      },
      {
        question:
          'To which biological phylum do all mammals, birds and reptiles belong?',
        correctAnswer: 'Chordata',
        incorrectAnswers: ['Echinodermata', 'Annelida', 'Placazoa'],
      },
      {
        question:
          'Decapods are an order of ten-footed crustaceans.  Which of these are NOT decapods?',
        correctAnswer: 'Krill',
        incorrectAnswers: ['Lobsters', 'Shrimp', 'Crabs'],
      },
    ],
    timesTaken: 17,
    category: 'Animals',
    quizDescription: 'Animal quiz number 3',
    quizBanner:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hippopotamus-extreme-animals-social-1642555668.jpg',
    quizUpvotes: 16,
    quizDownvotes: 0,
    reported: false,
    reportedTimes: 0,
    createdBy: 'KenJennings',
    aggregateScore: 136,
  },
];

module.exports = {
  exampleQuizzes: exampleQuizzes,
};
