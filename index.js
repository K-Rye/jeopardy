
const game = new Game();
game.promptForPlayerNames();
game.start(Gameboard.generateGameboard());
game.init();


DomUtilities.clickedOnGameboard();

const domUtilities = new DomUtilities();
domUtilities.clickedOnGameboard();