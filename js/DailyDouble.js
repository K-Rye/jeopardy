if (typeof require !== 'undefined') { 
  const Question = require('./Question.js');
};

class DailyDouble extends Question {
  constructor(clue) {
    super(clue)
  }

  validateWager(wager, currentPlayer) {
    if (isNaN(wager) || wager > currentPlayer.points || wager < 5) {
      return false;
    } else {
      return true;
    };
  };
};


if (typeof module !== 'undefined') {
  module.exports = DailyDouble;
};