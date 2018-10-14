const chai require('chai');
const expect = chai.expect;
const DailyDouble = require('../js/DailyDouble.js');
const Question = require('../js/Question.js');
const Player = require('../js/Player.js');

describe('DailyDouble', function() {
  let dailydouble;
  let player;
  let question;
  
  beforeEach (function() {  
    dailydouble = new DailyDouble('clue');
    player = new Player('name');
    question = new Question(data.clues[0]);
  })

  it('should return false', function() {
    expect(player.wager).to.be.above(0);
    player.validateWager(-100, dailydouble)
    
    expect(player.wager).to.equal('Enter valid wager')
  }) 

  it('should return false', function() {
    expect(player.wager).to.be.below(1000)
    player.validateWager(2000, dailydouble)

    expect(player.wager).to.equal('Enter valid wager')
  })

  it('should return true', function() {
    expect(player.wager).to.be.above(0)
    player.validateWager(300)

    expect(player.wager).to.equal(submitAnswer())
  })

    it('should return true', function() {
    expect(player.wager).to.be.above(0)
    player.validateWager(300)

    expect(player.wager).to.equal(submitAnswer())
  })
})