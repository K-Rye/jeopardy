class Game  {
  
  constructor() {
    this.round = 1;
    this.players = [];
    this.playerTurn = 0;
    this.board = null;
    this.currentQuestion;
    this.dailydouble = this.generateDailyDoubleLocation();
    this.visibleCategories = {
      1: false,
      2: false,
      3: false,
      4: false
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

    if (parseInt(questionLevel) === this.dailydouble.pointValue &&
      parseInt(categoryNumber) === this.dailydouble.category) {
      
      this.currentQuestion = new DailyDouble(this.currentQuestion);
      DomUtilities.promptForWager();
    }

    $('.question-popup').removeClass('hide');
    $('.question-popup-question').text(this.currentQuestion.question);
  }

  promptForPlayerNames() {
    $('.player-name-popup').removeClass('hide');
  }
  
  
  generateDailyDoubleLocation() {
    const dailydoubleLocation = {}
    dailydoubleLocation.category = Math.floor(Math.random() * 4) + 1 
    dailydoubleLocation.pointValue = (Math.floor(Math.random() * 5) + 1) *100

    return dailydoubleLocation
  }

  nextTurn() {
    $(`.name-p${this.playerTurn + 1}`).removeClass('current-player-indicator')
    this.playerTurn = (this.playerTurn + 1) % 3;
    $(`.name-p${this.playerTurn + 1}`).addClass('current-player-indicator')


  }

  declareWinner() {
    //
    
  }

}

