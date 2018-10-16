class Question {
  constructor(clue) {
    this.categoryId = clue.categoryId;
    this.question = clue.question;
    this.answer = clue.answer;
    this.pointValue = clue.pointValue
  }
}

if (typeof module !== undefined) {
  module.exports = Question;
}