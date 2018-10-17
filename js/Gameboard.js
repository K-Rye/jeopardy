class Gameboard {


  static generateGameboard() {

    let categories = Object.keys(data.categories);
    categories = Utilities.shuffle(categories);

    let gameBoard = categories.map((category, categoryIndex) => {
      let gb_categoryObj = {};
      let categoryId = data.categories[category];

      gb_categoryObj.category = category;
    
      for (let i = 1; i < 6; i++) {
        gb_categoryObj[i * 100] = Utilities.chooseQuestion(i * 100, categoryId, categoryIndex);
      }

      return gb_categoryObj
    })

    return gameBoard;
  }

}