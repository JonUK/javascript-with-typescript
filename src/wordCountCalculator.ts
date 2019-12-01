class WordCountCalculator {
  static calculate(text: string): number {
    const localText = text.trim();

    if (localText.length === 0) {
      return 0;
    }

    const whitespaceRegex = /\s+/gi;
    return localText.replace(whitespaceRegex, ' ').split(' ').length;
  }
}

export default WordCountCalculator;