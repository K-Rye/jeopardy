  class Gameboard {
    constructor() {
      this.possibleCategories = this.generateCategories();
    }

  
    const generateRandomIndex = (length) => {    
      return Math.floor(Math.random() * length)
    }

    const chooseQuestion = (pointValue, categoryId, categoryIndex) => {
    
      const possibleQuestions = data.clues.filter(clue => {
        return clue.pointValue === pointValue && clue.categoryId === categoryId
      })

      const randomQuestion = possibleQuestions[generateRandomIndex(possibleQuestions.length)]

      randomQuestion.pointValue *= (Math.floor((categoryIndex) / 4) + 1)

      return randomQuestion;
    }

    // copied from stack overflow
    const shuffle = (a) => {
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    }

    // shuffle through the categories and choose randomly when invoked
    let categories = Object.keys(data.categories)
    categories = shuffle(categories)

    let gameBoard = categories.map((category, categoryIndex) => {
      let gb_categoryObj = {}
      gb_categoryObj.category = category

      let categoryId = data.categories[category] 

        // 4. we are looping over 5 times to polulate our category and increase the key value by 100 each time  
        for (let i = 1; i < 6; i++) {
          // 3. we set the value of our key which is a point value to the question that was randomly choosen in our chooseQuestion function
          gb_categoryObj[i * 100] = chooseQuestion(i * 100, categoryId, categoryIndex);
        }

      return gb_categoryObj
    })

  return gameBoard; 

}