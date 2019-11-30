import 'bootstrap/dist/css/bootstrap.min.css';

// Import the different calculators
import characterCountCalculator from './characterCountCalculator';
import wordCountCalculator from './wordCountCalculator';
import longestWordCalculator from './longestWordCalculator';

// Get a reference to all the DOM elements
const textInput = document.getElementById('text-input');
const characterCountElement = document.getElementById('character-count');
const wordCountElement = document.getElementById('word-count');
const longestWordElement = document.getElementById('longest-word');

textInput.focus(); // Set the textarea to have focus onload

// Register the function calculateCounts to be called when textarea events fire
const eventsNames = ['change', 'keyup'];

eventsNames.forEach((eventName) => {
  textInput.addEventListener(eventName, calculateCounts);
});

function calculateCounts() {
  const text = textInput.value;

  characterCountElement.textContent = characterCountCalculator.calculate(text);
  wordCountElement.textContent = wordCountCalculator.calculate(text);
  longestWordElement.textContent = longestWordCalculator.calculate(text);
}