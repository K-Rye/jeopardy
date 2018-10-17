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
      //move to next players turn if incorrect
      $(`.score-p${game.playerTurn + 1}`).text(this.points);
      game.playerTurn = (game.playerTurn + 1) % 3;
    }

    //hide question popup
    $('.question-popup').addClass('hide');
  }

}


if (typeof module !== 'undefined') {
  module.exports = Player;
}







