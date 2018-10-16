class Player {
  
  constructor(name) {
    this.name = name;
    this.points = 0;
  }
  
  submitAnswer(userGuess, clue) {
    

    if (userGuess === clue.answer) {
      this.points += clue.pointValue;
    } else {
      this.points -= clue.pointValue;
      //move to next players turn if incorrect
      game.playerTurn = (game.playerTurn + 1) % 3;
    }

    //updating points on dom
    $(`.score-p${game.playerTurn + 1}`).text(this.points);

    //hide question popup
    $('.question-popup').addClass('hide');
  }

}


if (typeof module !== 'undefined') {
  module.exports = Player;
}







