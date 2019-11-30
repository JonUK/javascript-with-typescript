class LongestWordCalculator {
  static calculate(text) {
    const stringArray = text.split(' ');
    const longestWord = stringArray.reduce((a, b) => {
      return (b.length > a.length) ? b : a;
    });
    return longestWord.length;
  }
}

export default LongestWordCalculator;