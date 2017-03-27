const expect = require('chai').expect,
      randomTextParser = require('./index');

describe('Random Text Parser', function () {
  it('should return same text if has no pipe inside parenthesis', function () {
    var text = "I don't mind if you do this (even if it hurts me)";
    var randomized = randomTextParser(text);

    expect(randomized).to.be.equal(text);
  });
  it('should return random text', function () {
    var text = "I (don't|do|really) mind if you do this ((even if it hurts|bacause it may hurt) me)";
    var randomized = randomTextParser(text);

    expect(randomized).to.match(/I (don't|do|really) mind if you do this \((even if it hurts|bacause it may hurt) me\)/);
  });
  it('should return random nested text', function () {
    var text = "(I|You|We) ((don't|do|really) mind|will kill you|make you mine) if you do this ((even if it hurts|bacause it may hurt) me)";
    var randomized = randomTextParser(text);

    expect(randomized).to.match(/(I|You|We) ((don't|do|really) mind|will kill you|make you mine) if you do this \((even if it hurts|bacause it may hurt) me\)/);
  });
});
