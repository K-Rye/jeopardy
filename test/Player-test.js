const chai = require('chai');
const expect = chai.expect;
const Player = require('../js/Player.js');
const Question = require('../js/Question.js');
const data = require('../js/data.js');


describe('Player', function() {
  let player; 
  let question;
  let testQuestion =     {
      question: 'Scorecard Report" & "Peter Jacobsen Plugged In" are seen on the sports channel devoted to this',
      answer: 'golf',
      pointValue: 400,
      categoryId: 10
    }

  beforeEach(function() {
    player = new Player('name');
    question = new Question(testQuestion);
  })

  it('should increase player score', function() {

    expect(player.points).to.equal(0);
    player.submitAnswer('golf', question)

    expect(player.points).to.equal(400);
  })

    it('should decrease player score', function() {

    expect(player.points).to.equal(0);
    player.submitAnswer('pool', question)

    expect(player.points).to.equal(-400);
  })
})


