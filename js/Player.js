class Player {
  
  constructor(name) {
    this.name = name;
    this.points = 0;
  }
  
  submitAnswer(userGuess, clue) {
    if (userGuess === clue.answer) {
      this.points += clue.pointValue
    } else {
      this.points -= clue.pointValue
    }
  }
}


if (typeof module !== 'undefined') {
  module.exports = Player;
}







