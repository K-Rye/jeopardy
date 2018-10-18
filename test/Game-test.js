const chai = require('chai');
const expect = chai.expect;
const Game = require('../js/Game');

describe('Game', function() {
  it('should return true', function() {
    expect(true).to.equal(true);
  });
  
  it('should exist', function() {
    expect(new Game).to.exist()
  })
  
})