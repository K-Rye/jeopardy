class DailyDouble extends Question {
  constructor(clue) {
    super(clue)
  }

  validateWager(wager) {
    if (wager.wager > this.points || wager.value < this.points) {
      return "Enter valid wager"
    } else if (wager.value === NaN) {
      return "Enter valid wager"
    } else {
      submitAnswer();
    };
  };
  
    //will return boolean 
};


if (module !== undefined) {
  module.exports = DailyDouble;
};