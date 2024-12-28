// A small list of Chinese characters:
const allCharacters = ["家", "学", "爱", "水", "火", "猫", "狗", "人", "天", "地"];

let targetChar = null;
let roundChars = [];

// Grab references to HTML elements
const targetTextEl = document.getElementById("target-text");
const feedbackEl = document.getElementById("feedback");
const cardsContainer = document.getElementById("cards-container");
const newRoundBtn = document.getElementById("new-round-btn");

// When the user clicks "Start New Round," begin a fresh puzzle
newRoundBtn.addEventListener("click", startNewRound);

function startNewRound() {
  // Clear any old feedback
  feedbackEl.textContent = "";
  feedbackEl.style.color = "green";

  // Remove old character buttons
  cardsContainer.innerHTML = "";

  // Pick 4 random characters
  roundChars = getRandomChars(allCharacters, 4);
  // Randomly pick one of them as the target
  targetChar = roundChars[Math.floor(Math.random() * roundChars.length)];

  // Show the target character to the player
  targetTextEl.textContent = `Find this character: ${targetChar}`;

  // Create new buttons for each selected character
  roundChars.forEach(char => {
    const btn = document.createElement("button");
    btn.className = "card-button";
    btn.textContent = char;
    btn.addEventListener("click", () => checkAnswer(char));
    cardsContainer.appendChild(btn);
  });
}

function checkAnswer(selectedChar) {
  if (selectedChar === targetChar) {
    feedbackEl.textContent = "Correct!";
    feedbackEl.style.color = "green";
    // Automatically start a new round after a short delay
    setTimeout(startNewRound, 1000);
  } else {
    feedbackEl.textContent = "Try again!";
    feedbackEl.style.color = "red";
  }
}

// Helper function to pick N unique random items from an array
function getRandomChars(arr, num) {
  const copy = [...arr];
  const result = [];
  for (let i = 0; i < num; i++) {
    const index = Math.floor(Math.random() * copy.length);
    result.push(copy[index]);
    copy.splice(index, 1);
  }
  return result;
}
