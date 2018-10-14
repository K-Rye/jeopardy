class Gameboard {
  constructor() {
    this.possibleCategories = this.generateCategories();
  }

    generateCategories(){
      let questionCategories = Object.keys(data.categories);
      return questionCategories
  }

    generateQuestions(currentRound) {
      const gameboard = {
        //need to iterate over clues array and radomly choose clues that have the same categoryId as the category in the questionCategories array and push into category 1-4.
        category1: [],
        category2: [],
        category3: [],
        category4: [],
      //will generate categories and will generate questions from those categories.

    }
    //return gameboard;
  }
  

    generateBoard(data) {
    const board = {};
    
    //grab all 10 categories
    const categories = Object.keys(data.categories);

    //remove one at random until 5 are left
    while (categories.length > 5) {
      const randomCategory = categories.random();
      categories.splice(categories.findIndexOf(randomCategory), 1);
    }

    categories.forEach((category) => {
      const categoryId = data.categories[category];
      board[category] = [];

      for (let i = 0; i < data.clues.length; i++) {
        if (data.clues[i].categoryId === categoryId) {
          board[category].push(data.clues[i]);
        }
        if (board[category].length === 4) {
          break;
        }
      }
    })

    return board;
  }


}