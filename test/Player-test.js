const chai = require('chai');
const expect = chai.expect;
const Player = require('../js/Player.js');
const Question = require('../js/Question.js');
const data = require('../js/data.js');


describe('Player', function() {
  let player; 
  let question;

  beforeEach(function() {
    player = new Player('name');
    question = new Question(data.clues[0]);
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


