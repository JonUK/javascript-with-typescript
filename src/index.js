import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const whitespaceRegex = /\s+/gi;

const textInput = document.getElementById('text-input');
const characterCountElement = document.getElementById('character-count');
const wordCountElement = document.getElementById('word-count');
const maxWordLengthElement = document.getElementById('max-word-length');

const eventsNames = ['change', 'keyup'];

eventsNames.forEach(eventName => {
  textInput.addEventListener(eventName, calculateCounts);
});

function calculateCounts() {

  const text = textInput.value;

  let wordCount = 0;

  if (text.length > 0) {
    wordCount = text.trim().replace(whitespaceRegex, ' ').split(' ').length;
  }

  characterCountElement.textContent = text.length;
  wordCountElement.textContent = wordCount;
  maxWordLengthElement.textContent = findLongestWord(text);
}

function findLongestWord(str) {
  const stringArray = str.split(" ");
  const longestWord = stringArray.reduce((a, b) => {
    return (b.length > a.length) ? b : a;
  });
  return longestWord.length;
}
