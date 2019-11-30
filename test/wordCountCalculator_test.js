import calculator from '../src/wordCountCalculator';

describe('Character count calculator', () => {
  it('should return 0 for empty string', () => {
    const text = '';
    const wordCount = calculator.calculate(text);
    expect(wordCount).toEqual(0);
  });

  it('should return 1 for 1 character', () => {
    const text = 'A';
    const wordCount = calculator.calculate(text);
    expect(wordCount).toEqual(1);
  });

  it('should return 0 for a single space', () => {
    const text = ' ';
    const wordCount = calculator.calculate(text);
    expect(wordCount).toEqual(0);
  });

  it('should return 1 for 2 simultaneous characters', () => {
    const text = 'It';
    const wordCount = calculator.calculate(text);
    expect(wordCount).toEqual(1);
  });

  it('should return 1 for for 1 character surrounded by 1 space', () => {
    const text = ' A ';
    const wordCount = calculator.calculate(text);
    expect(wordCount).toEqual(1);
  });

  it('should return 2 for 2 words', () => {
    const text = 'I am';
    const wordCount = calculator.calculate(text);
    expect(wordCount).toEqual(2);
  });

  it('should return 4 for 4 words', () => {
    const text = 'Do the funky chicken';
    const wordCount = calculator.calculate(text);
    expect(wordCount).toEqual(4);
  });
});