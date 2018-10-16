class Game  {
  
  constructor() {
    this.round = 1;
    this.players = [];
    this.playerTurn = 0;
    this.board = null;
    this.currentQuestion;
  }

  init() {
    DomUtilities.displayCategoryCards();
    DomUtilities.displayQuestionCards();
    DomUtilities.initializeListeners();
  }

  start(gameboard) {
    this.board = gameboard;

  }
  
  reset() {
    // create prompt for players
    // create new gameboard

  }

  askQuestion(questionLevel, categoryNumber) {
    this.currentQuestion = this.board[categoryNumber - 1][questionLevel];

    $('.question-popup').removeClass('hide');
    $('.question-popup-question').text(this.currentQuestion.question);
  }

  promptForPlayerNames() {
    $('.player-name-popup').removeClass('hide');
  }

  declareWinner() {
    //
    
  }

}

