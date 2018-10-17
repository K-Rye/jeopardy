class Game  {
  
  constructor() {
    this.round = 1;
    this.players = [];
    this.playerTurn = 0;
    this.board = null;
    this.currentQuestion;
    this.dailydouble = {
      category: "2",
      pointValue: "200"
    }
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

    if (questionLevel === this.dailydouble.pointValue &&
      categoryNumber === this.dailydouble.category) {
      this.currentQuestion = new DailyDouble(this.currentQuestion);
      DomUtilities.promptForWager();
    }

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

