class Game  {
  
  constructor() {
    this.round = 1;
    this.players = [];
    this.playerTurn = 0;
    this.board = null;
    this.currentQuestion;
    this.dailydouble = this.generateDailyDoubleLocation(this.round);
    this.visibleCategories = {
      1: false,
      2: false,
      3: false,
      4: false
    }
    this.questionsLeft = 20;
  }

  init() {
    DomUtilities.displayCategoryCards(1);
    DomUtilities.displayQuestionCards(1);
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

    this.hideCard(questionLevel, categoryNumber);
    this.showCategory(categoryNumber);

    $('.question-popup').removeClass('hide');
    $('.playernum').text(game.players[game.playerTurn].name)
    $('.question-popup-question').text(this.currentQuestion.question);
  }

  promptForPlayerNames() {
    $('.player-name-popup').removeClass('hide');
  }
  
  
  generateDailyDoubleLocation(round) {
    const dailydoubleLocation = {}
    dailydoubleLocation.category = Math.floor(Math.random() * 4) + 1;
    dailydoubleLocation.pointValue = ((Math.floor(Math.random() * 5) + 1) * 100);
    return dailydoubleLocation;
  }

  hideCard(questionLevel, categoryNumber) {
    $(`.cat-${categoryNumber}.q-${questionLevel}`).find('p').remove();
    $(`.cat-${categoryNumber}.q-${questionLevel}`).removeClass(`.cat-${categoryNumber} .p-${questionLevel}`);
  }

  showCategory(categoryNumber) {
    if (!this.visibleCategories[categoryNumber]) {
      
      let category = this.board[categoryNumber].category;
      category = Utilities.camelToSentence(category);

      $(`.category-card-container.cat${categoryNumber}`).text(category)
      this.visibleCategories[categoryNumber] = true;
    }
  }

  nextTurn() {
    this.questionsLeft--;
    
    $(`.name-p${this.playerTurn + 1}`).removeClass('current-player-indicator');
    this.playerTurn = (this.playerTurn + 1) % 3;
    $(`.name-p${this.playerTurn + 1}`).addClass('current-player-indicator');
    
    if (this.questionsLeft === 0) {
      this.nextRound();
    }
  }

  nextRound() {
    this.questionsLeft = 20;
    this.round++;

    if (this.round > 3) {
      this.declareWinner();
    }

    $('.gameboard').children().remove();
    DomUtilities.displayCategoryCards();
    DomUtilities.displayQuestionCards();
  }

  declareWinner() {
    const winner = this.players.reduce((winner, player) => {
      if (player.points > winner.points) {
        winner = player;
      }
      return winner;
    }, { points: -Infinity }).name;

    $('.winner').text(winner);
    $('.winner-popup').removeClass('hide');
    
  }

}

