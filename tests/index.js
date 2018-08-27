const chai = require('chai');
const randomTextParser = require('../src/index');

describe('Random Text Parser', () => {
  it('should return same text if has no pipe inside parenthesis', () => {
    const text = "I don't mind if you do this (even if it hurts me)";
    const randomized = randomTextParser(text);

    chai.expect(randomized).to.be.equal(text);
  });

  it('should return random text', () => {
    const text = "I (don't|do|really) mind if you do this ((even if it hurts|bacause it may hurt) me)";
    const randomized = randomTextParser(text);

    const match = /I (don't|do|really) mind if you do this \((even if it hurts|bacause it may hurt) me\)/;

    chai.expect(randomized).to.match(match);
  });

  it('should return random nested text', () => {
    const text = "(I|You|We) ((don't|do|really) mind|will kill you|make you mine) if you do this ((even if it hurts|bacause it may hurt) me)";
    const randomized = randomTextParser(text);

    const match = /(I|You|We) ((don't|do|really) mind|will kill you|make you mine) if you do this \((even if it hurts|bacause it may hurt) me\)/;

    chai.expect(randomized).to.match(match);
  });
});
