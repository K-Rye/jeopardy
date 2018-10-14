  class Gameboard {
    constructor() {
      this.possibleCategories = this.generateCategories();
    }

    generateCategories(){
      let questionCategories = Object.keys(data.categories);
      return questionCategories
    }

    generateBoard(currentRound) {

      const generateRandomIndex = (length) => {    
        return Math.floor(Math.random() * length)
      }

      let categories = Object.keys(data.categories)
      let gameBoard = categories.map((category) => {
        let myObject = {}
        myObject.category = category


        let categoryId = data.categories[category] 


        for (let i = 1; i < 6; i++) {

          const possibleQuestions = data.clues.filter(clue => {
            return clue.pointValue === i * 100 && clue.categoryId === categoryId
          })

          let question = possibleQuestions[generateRandomIndex(possibleQuestions.length)]
          myObject[i * 100] = question
        }

        return myObject

      })

     return gameBoard; 


    }