class Player {
  
  constructor(name) {
    this.name = name;
    this.points = 0
  }

  // $('.submit-answer-button').on('click', submitAnswer);
  
  submitAnswer(userGuess, clue) {
    if (userGuess === clue.answer) {
      this.points += clue.pointValue
    } else {
      this.points -= clue.pointValue
    }
    //will check if answer equals answer in data set associate with question
    //if answer is correct invoke update score to increase
    //if answer is incorrect invoke update score to decrease 
  }
}


if (module !== undefined) {
  module.exports = Player;
};







