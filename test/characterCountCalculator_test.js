import calculator from '../src/characterCountCalculator';

describe('Character count calculator', () => {
  it('should return 0 for empty string', () => {
    const text = '';
    const characterCountLength = calculator.calculate(text);
    expect(characterCountLength).toEqual(0);
  });

  it('should return 1 for 1 character', () => {
    const text = 'A';
    const characterCountLength = calculator.calculate(text);
    expect(characterCountLength).toEqual(1);
  });

  it('should return 1 for a single space', () => {
    const text = ' ';
    const characterCountLength = calculator.calculate(text);
    expect(characterCountLength).toEqual(1);
  });

  it('should return 2 for 2 characters', () => {
    const text = 'It';
    const characterCountLength = calculator.calculate(text);
    expect(characterCountLength).toEqual(2);
  });

  it('should return 3 for for 1 character surrounded by 1 space', () => {
    const text = ' A ';
    const characterCountLength = calculator.calculate(text);
    expect(characterCountLength).toEqual(3);
  });

  it('should return 10 for for 10 characters', () => {
    const text = '0123456789';
    const characterCountLength = calculator.calculate(text);
    expect(characterCountLength).toEqual(10);
  });
});