class Utilities {

  static generateRandomIndex(length) {
    return Math.floor(Math.random() * length)
  }

  static chooseQuestion(pointValue, categoryId, categoryIndex) {
    const possibleQuestions = data.clues.filter(clue => {
      return clue.pointValue === pointValue && clue.categoryId === categoryId
    })

    const randomQuestion = possibleQuestions[this.generateRandomIndex(possibleQuestions.length)]
    randomQuestion.pointValue *= (Math.floor((categoryIndex) / 4) + 1)
    return randomQuestion;
  }

  static shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  static camelToSentence(str) {
    str = str.replace(/([A-Z])/g, " $1");
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

}