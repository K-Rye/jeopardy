class Player {
  
  constructor(name) {
    this.name = name;
    this.points = 0;
  }
  
  submitAnswer(userGuess, clue) {
    if (userGuess === clue.answer) {
      this.points += clue.pointValue;
      $(`.score-p${game.playerTurn + 1}`).text(this.points);
    
    } else {
      this.points -= clue.pointValue;
      $(`.score-p${game.playerTurn + 1}`).text(this.points);
      game.nextTurn();
    }

    //hide question popup
    $('.question-popup').addClass('hide');
  }
}

if (typeof module !== 'undefined') {
  module.exports = Player;
}







