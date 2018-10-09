// const data = require('./questions');

$('.submit-game-options').on('click', createGame);

function createGame(e) {
  e.preventDefault();
  const numPlayers = $('.num-players');
  const players = [];
  for (let i = 0; i < numPlayers; i++){
    
  }
}

class Game {
  constructor(players) {
    this.players = players;
  }
}

class Player {
  constructor(name) {
    this.name = name;
    this.points = 0;
  }
}

class GameBoard extends Game {
  constructor(players) {
    super(players);
    // this.board = this.generateBoard(data);
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