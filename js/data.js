const data = {
  response_code: {
    version: '1.5',
    termsofService: 'http://frontend.turing.io/projects/jeopardy.html',
    features: {
      categories: 1,
      clues: 1
    },
  },
  categories: {
    'unitedStatesHistory': 1,
    'lifeSciences': 2,
    'publicHealth': 3,
    'educationJargon': 4,
    'nameThatBoardGame': 5,
    'americanLiterature': 6,
    'biographies': 7,
    'americanCities': 8,
    'food': 9,
    'cableTV': 10
  },
  clues: [
    {
      question: 'Scorecard Report" & "Peter Jacobsen Plugged In" are seen on the sports channel devoted to this',
      answer: 'golf',
      pointValue: 400,
      categoryId: 10
    },
    {
      question: 'An energetic person is full of these, maybe the fava type',
      answer: 'beans',
      pointValue: 400,
      categoryId: 9
    },
    {
      question: 'One of the most popular shows on the Food Network is "The Essence of" him',
      answer: 'Emeril',
      pointValue: 800,
      categoryId: 10
    },
    {
      question: 'Government money that a congressman steers toward his home district',
      answer: 'pork',
      pointValue: 800,
      categoryId: 9
    },
    {
      question: 'The Eulogy" is HBO\'s e-mail newsletter devoted to this series',
      answer: 'Six Feet Under',
      pointValue: undefined,
      categoryId: 10
    },
    {
      question: 'To mean a quarrel, vegetarians can use "rhubarb" & carnivores can use this',
      answer: 'beef',
      pointValue: 200,
      categoryId: 9
    },
    {
      question: '(Hi, I\'m Billy Ray Cyrus.)  In 2001 I began practicing medicine in the Big Apple on this Pax TV drama',
      answer: 'Doc',
      pointValue: 400,
      categoryId: 10
    },
    {
      question: 'Diana Prince occasionally has to take her hair out of this to become Wonder Woman',
      answer: 'a bun',
      pointValue: 400,
      categoryId: 9
    },
    {
      question: 'What Sonya Fitzpatrick is, or the Animal Planet series on which she communicates with animals telepathically',
      answer: 'The Pet Psychic',
      pointValue: 600,
      categoryId: 10
    },
    {
      question: 'A story or joke that\'s been repeated often, maybe too often',
      answer: 'a chestnut',
      pointValue: 600,
      categoryId: 9
    },
    {
      question: 'About this city\'s 1906 earthquake, Jack London wrote, "Day was trying to dawn through the smoke pall',
      answer: 'San Francisco',
      pointValue: 200,
      categoryId: 8
    },
    {
      question: 'This state capital lies on both banks of the Mississippi River at the confluence of the Minnesota River',
      answer: 'St. Paul',
      pointValue: 400,
      categoryId: 8
    },
    {
      question: 'This city on Lake Michigan is "The Beer Capital of America',
      answer: 'Milwaukee',
      pointValue: 600,
      categoryId: 8
    },
    {
      question: 'This city near Disney World was given its present name in 1857 to honor a soldier killed in the Seminole Wars',
      answer: 'Orlando',
      pointValue: 800,
      categoryId: 8
    },
    {
      question: 'Juarez, Mexico & this Texas city make up the largest metropolitan center on the U.S.-Mexico border',
      answer: 'El Paso',
      pointValue: undefined,
      categoryId: 8
    },
    {
      question: 'La Femme Peta" calls itself this type of "biography" of actress Peta Wilson',
      answer: 'unauthorized',
      pointValue: 400,
      categoryId: 7
    },
    {
      question: 'Title of Sylvia Nasar\'s tale of "The Life of Mathematical Genius and Nobel Laureate John Nash',
      answer: 'A Beautiful Mind',
      pointValue: 800,
      categoryId: 7
    },
    {
      question: 'This pioneer was a man, yes, a big man, & his bio won a Newbery Medal for James Daugherty',
      answer: 'Daniel Boone',
      pointValue: 200,
      categoryId: 7
    },
    {
      question: 'Virginia Spencer Carr\'s "The Lonely Hunter" chronicles the life of this author',
      answer: 'Carson McCullers',
      pointValue: 100,
      categoryId: 7
    },
    {
      question: 'This "Lady"like biographer of Mary, Queen of Scots came out with "Marie Antoinette: The Journey" in 2001',
      answer: 'Antonia Fraser',
      pointValue: 600,
      categoryId: 7
    },
    {
      question: 'This Mark Twain character\'s father "Pap" briefly held him prisoner in a cabin on the Illinois side of the Mississippi',
      answer: 'Huckleberry Finn',
      pointValue: 400,
      categoryId: 6
    },
    {
      question: 'Go directly to jail',
      answer: 'Monopoly',
      pointValue: 100,
      categoryId: 5
    },
    {
      question: '65 out of 100 students did the same as or worse than you if your grade is in the 65th of these',
      answer: 'percentile',
      pointValue: 400,
      categoryId: 4
    },
    {
      question: 'King me!',
      answer: 'Checkers',
      pointValue: 200,
      categoryId: 5
    },
    {
      question: 'Miss Scarlet in the library with the wrench',
      answer: 'Clue',
      pointValue: 300,
      categoryId: 5
    },
    {
      question: 'You sank my aircraft carrier!',
      answer: 'Battleship',
      pointValue: 400,
      categoryId: 5
    },
    {
      question: 'My wink is nearest the pot.  I\'ve won the squidge-off!',
      answer: 'tiddlywinks',
      pointValue: 500,
      categoryId: 5
    },
    {
      question: 'In this Hemingway WWI novel, ambulance driver Frederic Henry falls in love with British nurse Catherine Barkley',
      answer: 'A Farewell to Arms',
      pointValue: 800,
      categoryId: 6
    },
    {
      question: 'A 1992 law introduced by Sen. Cranston aimed to reduce the use of paint containing too much of this element',
      answer: 'lead',
      pointValue: 200,
      categoryId: 3
    },
    {
      question: 'An effort lasting from 1985 to 1991 eliminated this paralytic illness from Latin America',
      answer: 'polio',
      pointValue: 400,
      categoryId: 3
    },
    {
      question: 'IDEA is the Individuals with these Education Act, formerly the Education For All Handicapped Children Act',
      answer: 'Disabilities',
      pointValue: 800,
      categoryId: 4
    },
    {
      question: '(<a href="http://www.j-archive.com/media/2005-12-21_J_25.jpg" target="_blank">Hi!  I\'m CNN senior medical correspondent Dr. Sanjay Gupta.</a>)  I joined CNN in 2001 & reported on the biological attacks of this bacillus in the news that October',
      answer: 'anthrax',
      pointValue: 600,
      categoryId: 3
    },
    {
      question: 'Stanford\'s med school has a division of this, the study & control of disease in populations',
      answer: 'epidemiology',
      pointValue: 800,
      categoryId: 3
    },
    {
      question: 'Also a type of mathematical quantity, it\'s a term for disease-carrying critters like ticks',
      answer: 'a vector',
      pointValue: undefined,
      categoryId: 3
    },
    {
      question: 'In this Steinbeck novel, a few buddies get drunk & make a shambles of the Western Biological Lab in Monterey',
      answer: 'Cannery Row',
      pointValue: undefined,
      categoryId: 6
    },
    {
      question: 'It\'s the rhyming term for the technique of teaching with only a blackboard to help you',
      answer: 'chalk talk/chalk and talk',
      pointValue: 200,
      categoryId: 4
    },
    {
      question: 'Organic chemistry focuses specifically on this element\'s compounds & their reactions',
      answer: 'carbon',
      pointValue: 400,
      categoryId: 2
    },
    {
      question: 'If you\'re a steak & veggies creature, you\'re an omnivore, a combination of these other 2 basic "-vores',
      answer: 'carnivore and herbivore',
      pointValue: 800,
      categoryId: 2
    },
    {
      question: 'In humans this collection of nerves extends from the base of the skull to the second lumbar vertebra',
      answer: 'spinal cord',
      pointValue: 200,
      categoryId: 2
    },
    {
      question: '(<a href="http://www.j-archive.com/media/2009-04-28_DJ_22.wmv">Jimmy of the Clue Crew gets in his workout.</a>)  Physical activity increases both body temperature & this process in which food is converted to protein, carbs & fat & then used for energy',
      answer: 'metabolism',
      pointValue: 400,
      categoryId: 2
    },
    {
      question: 'Alimentary, my dear! waves of contractions moving swallowed food through the esophagus are called this',
      answer: 'peristalsis',
      pointValue: 600,
      categoryId: 2
    },
    {
      question: 'It\'s the nickname of William Lonigan, the 15-year-old hero of a 1930s trilogy written by James T. Farrell',
      answer: 'Studs',
      pointValue: 400,
      categoryId: 6
    },
    {
      question: 'From the Latin for "to heal", it\'s the type of education that brings deficient students up to standard levels',
      answer: 'remedial',
      pointValue: 400,
      categoryId: 4
    },
    {
      question: 'This captain of the Ghost rescues literary critic Humphrey Van Weyden & poet Maude Brewster from a shipwreck',
      answer: 'Wolf Larsen',
      pointValue: 600,
      categoryId: 6
    },
    {
      question: 'Demonstrators were kicked out of this city\'s Lincoln Park August 27, 1968',
      answer: 'Chicago',
      pointValue: 100,
      categoryId: 1
    },
    {
      question: 'Though he left the service after WWII as a captain, today he holds the highest rank possible',
      answer: 'Ronald Reagan',
      pointValue: 200,
      categoryId: 1
    },
    {
      question: 'These 2 words, denoting socioeconomically challenged, followed "A Nation" in a 1983 report\'s title',
      answer: 'At Risk',
      pointValue: 600,
      categoryId: 4
    },
    {
      question: 'Country to which the U.S. began beaming Radio Marti in May 1985',
      answer: 'Cuba',
      pointValue: 300,
      categoryId: 1
    },
    {
      question: 'Though popular in early 1800s this Tennessee congressman was even more popular in the 1950s',
      answer: 'Davy Crockett',
      pointValue: 400,
      categoryId: 1
    },
    {
      question: 'This president vetoed more legislation than any other',
      answer: 'Franklin Delano Roosevelt',
      pointValue: 500,
      categoryId: 1
    }
  ]
};

if (module !== undefined) {
  module.exports = data;
};