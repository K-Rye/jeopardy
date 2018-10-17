class DomUtilities {

  static initializeListeners() {
    $('.submit-player-names').on('click', DomUtilities.submitPlayerNames);
    $('.gameboard').on('click', DomUtilities.clickedOnGameboard);
    $('.submit-answer-button').on('click', DomUtilities.submitAnswer);
    $('.submit-wager-button').on('click', DomUtilities.submitWager);
  }

  static clickedOnGameboard(event) {
    let target = event.target;

    // Traverse up parent Elements until card's outer container is reached or
    // we reach the gameboard
    while (!target.classList.contains('question-card-container' ||
      !target.classList.contains('gameboard'))) {
      target = target.parentElement;
    }

    //Extract relevant classes from classlist
    if (target.classList.contains('question-card-container')) {

      //Turn classlist into an array with 2 items, just our q-### class and cat-# class
      const gbLocation = [...target.classList].filter(className => {
        return className.slice(0, 2) === 'q-' ||
          className.slice(0, 4) === 'cat-';
      })

      //Extract category and question level
      const questionLevel = gbLocation[0].slice(2, 5);
      const questionCategory = gbLocation[1].slice(4, 5);

      game.askQuestion(questionLevel, questionCategory);
    }
  }

  static promptForWager() {
    $('.wager-popup').removeClass('hide');
  }

  static displayQuestionCards() {
    for (let i = 1; i < 21; i++) {

      const qLevel = 100 * (Math.ceil(i / 4));
      const categ = i % 4 || 4;

      $('.gameboard').append(
        `<div class='question-card-container q-${qLevel} cat-${categ}'>
          <div class='container-style question-card'>
            <p class='question-value'>${qLevel}</p>
        </div>
      </div>`);
    }
  }

  static displayCategoryCards() {
    for (let i = 1; i < 5; i++) {
      $('.gameboard').append(
        `<div class='category-card-container cat${i}'>
          <div class='container-style category-card>
            <p class='question-category>Category ${i}</p>
          </div>
        </div>`);
    }
  }

  static submitPlayerNames(e) {
    e.preventDefault();

    const pOneName = $('#player1-name')[0].value;
    const pTwoName = $('#player2-name')[0].value;
    const pThreeName = $('#player3-name')[0].value;

    $('.name-p1').text(pOneName);
    $('.name-p2').text(pTwoName);
    $('.name-p3').text(pThreeName);

    game.players.push(new Player(pOneName));
    game.players.push(new Player(pTwoName));
    game.players.push(new Player(pThreeName));

    $('.player-name-popup').addClass('hide');
  }

  static submitAnswer(e) {
    e.preventDefault();

    const userGuess = $('.question-popup-answer').val();
    const currentQuestion = game.currentQuestion;
    const currentPlayer = game.players[game.playerTurn];

    currentPlayer.submitAnswer(userGuess, currentQuestion);

  }

  static submitWager(e) {
    e.preventDefault();
    
    const userWager = parseInt($('.wager-popup-answer').val());

    if (!game.currentQuestion.isValidWager(userWager)) {
      $('.wager-popup-invalid').removeClass('displaynone');
    } else {
      $('.wager-popup-invalid').addClass('displaynone');
      game.currentQuestion.pointValue = userWager;
      $('.wager-popup').addClass('hide');
    }
    
  }

}