import calculator from '../src/longestWordCalculator';

describe('Longest word calculator', () => {
  it('should return 0 for empty string', () => {
    const text = '';
    const longestWordLength = calculator.calculate(text);
    expect(longestWordLength).toEqual(0);
  });

  it('should return 1 for 1 character', () => {
    const text = 'A';
    const longestWordLength = calculator.calculate(text);
    expect(longestWordLength).toEqual(1);
  });

  it('should return 2 for 2 characters', () => {
    const text = 'It';
    const longestWordLength = calculator.calculate(text);
    expect(longestWordLength).toEqual(2);
  });

  it('should return the length of second word when longest', () => {
    const text = 'Keep vigilant';
    const longestWordLength = calculator.calculate(text);
    expect(longestWordLength).toEqual(8);
  });

  it('should return the length of last word when longest', () => {
    const text = 'I love sandwiches';
    const longestWordLength = calculator.calculate(text);
    expect(longestWordLength).toEqual(10);
  });
});