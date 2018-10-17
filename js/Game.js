class Game  {
  
  constructor() {
    this.round = 1;
    this.players = [];
    this.playerTurn = 0;
    this.board = null;
    this.currentQuestion;
    this.dailydouble = this.generateDailyDoubleLocation();
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

  dailyDoubleWager() {
    //this needs to pop up when the daily double is clicked
    //it will display the wager window which will have an input and submit button
    //when the wager is entered and validated, the question will display with an input
    //and submit button 

    this.currentQuestion = this.board[categoryNumber - 1][questionLevel];

    $('.dailyDouble-popup-wager').removeClass('hide');
    $('.dailyDouble-popup-wager-submission').text(this.currentQuestion.question);
    }

  dailyDoubleWagerWindow() {
    $('.dailyDouble-popup-wager').removeClass('hide');
  }
  
  
  generateDailyDoubleLocation() {
    const dailydoubleLocation = {}
    dailydoubleLocation.category = Math.floor(Math.random() * 4) + 1 
    dailydoubleLocation.pointValue = (Math.floor(Math.random() * 5) + 1) *100

    return dailydoubleLocation
  }





  declareWinner() {
    //
    
  }

}

