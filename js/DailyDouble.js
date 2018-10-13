class DailyDouble extends Question {
  constructor(clue) {
    super(clue)
  }

  validateWager(wager) {
    if (wager > this.points || wager < this.points) {
      return "Enter valid wager."
    } else {
      submitAnswer();
    }
    //will return boolean 
  }
}



if (module !== undefined) {
  module.exports = DailyDouble;
};