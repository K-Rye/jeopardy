class Gameboard {

  constructor() {
    this.possibleCategories = this.generateCategories();
  }

  generateQuestions(currentRound) {
    const gameboard = {
      category1: [],
      category2: []
    //will generate categories and will generate questions from those categories.

    }
    //return gameboard;
    }
  }

  generateCategories(){
    return Object.keys(data.categories);
  }


}