const chai = require('chai');
const expect = chai.expect;
const Question = require('../js/Question.js');
const DailyDouble = require('../js/DailyDouble.js');
const Player = require('../js/Player.js');

describe('DailyDouble', function() {
  let dailydouble;
  let player;
  let question;
  let clue = {
      question: 'Scorecard Report" & "Peter Jacobsen Plugged In" are seen on the sports channel devoted to this',
      answer: 'golf',
      pointValue: 400,
      categoryId: 10
      }
  
  beforeEach (function() {  
    dailydouble = new DailyDouble(clue);
    player = new Player('name');
  })

    it('should return false when wager is not a number', function() {
      player.points = 1000
      let isValid = dailydouble.validateWager(NaN, player)
      expect(isValid).to.equal(false)
  })

    it('should return false when wager is greater than players points', function() {
      player.points = 1000
      let isValid = dailydouble.validateWager(2000, player)
      expect(isValid).to.equal(false)
  })

    it('should return false when wager is less than 5', function() {
      player.points = 1000
      let isValid = dailydouble.validateWager(2, player)
      expect(isValid).to.equal(false)
  }) 

    it('should return true if wager is equal to players points', function() {
      player.points = 2000
      let isValid = dailydouble.validateWager(2000, player)
      expect(isValid).to.equal(true)
  })
})