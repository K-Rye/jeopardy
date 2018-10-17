if (typeof require !== 'undefined') { 
  const Question = require('./Question.js');
}

class DailyDouble extends Question {
  constructor(clue) {
    super(clue)
  }

  isValidWager(wager) {
    if (isNaN(wager) || wager > game.players[game.playerTurn].points || wager < 5) {
      return false;
    } else {
      return true;
    }
  }
}


if (typeof module !== 'undefined') {
  module.exports = DailyDouble;
}