// A pool of Chinese characters (feel free to add more)
const allCharacters = [
  "家", "學", "愛", "水", "火", "猫", "狗", "人", "天", "地",
  "書", "車", "門", "山", "月", "日", "木", "花", "草", "雨"
];

let set1 = [];
let set2 = [];
let commonChar = null;

// Track the user's picks
let firstPick = null;  // The character clicked in Set 1
let secondPick = null; // The character clicked in Set 2

// DOM elements
const newRoundBtn = document.getElementById("new-round-btn");
const feedbackEl = document.getElementById("feedback");
const cardsContainer1 = document.getElementById("cards-container-1");
const cardsContainer2 = document.getElementById("cards-container-2");

newRoundBtn.addEventListener("click", startNewRound);

function startNewRound() {
  feedbackEl.textContent = "";
  feedbackEl.style.color = "green";

  // Clear any old buttons
  cardsContainer1.innerHTML = "";
  cardsContainer2.innerHTML = "";

  // Reset picks
  firstPick = null;
  secondPick = null;

  // Generate sets
  generateSets();

  // Render sets on screen
  renderSet(cardsContainer1, set1, "set1");
  renderSet(cardsContainer2, set2, "set2");
}

/**
 * Generates two sets of 6 characters each.
 * Exactly one is common between them.
 */
function generateSets() {
  // Copy the array so we don’t mutate the original
  const pool = [...allCharacters];

  // 1) Pick 1 random character as the common
  commonChar = removeRandomItem(pool);

  // 2) Pick 5 random distinct characters for set1
  const set1Chars = [];
  for (let i = 0; i < 5; i++) {
    set1Chars.push(removeRandomItem(pool));
  }
  // 3) Pick 5 random distinct characters for set2
  const set2Chars = [];
  for (let i = 0; i < 5; i++) {
    set2Chars.push(removeRandomItem(pool));
  }

  // 4) Insert the common char into each set
  set1 = shuffle([...set1Chars, commonChar]);
  set2 = shuffle([...set2Chars, commonChar]);
}

/**
 * Renders a set of characters as buttons inside a container.
 * setIdentifier is "set1" or "set2" so we know where the click came from.
 */
function renderSet(container, charArray, setIdentifier) {
  charArray.forEach(char => {
    const btn = document.createElement("button");
    btn.className = "card-button";
    btn.textContent = char;

    btn.addEventListener("click", () => {
      handleClick(char, setIdentifier);
    });

    container.appendChild(btn);
  });
}

/**
 * Handles the click for either Set 1 or Set 2.
 */
function handleClick(char, setIdentifier) {
  if (setIdentifier === "set1") {
    firstPick = char;
  } else if (setIdentifier === "set2") {
    secondPick = char;
  }

  // If the user has made a pick in both sets, check
  if (firstPick && secondPick) {
    checkMatch();
  }
}

/**
 * Checks if the picks from Set 1 and Set 2 match the common character.
 */
function checkMatch() {
  if (firstPick === commonChar && secondPick === commonChar) {
    feedbackEl.textContent = "Correct!";
    feedbackEl.style.color = "green";
    // Automatically start a new round after a short delay
    setTimeout(startNewRound, 1500);
  } else {
    feedbackEl.textContent = "Try again!";
    feedbackEl.style.color = "red";
  }
  // Reset picks
  firstPick = null;
  secondPick = null;
}

/**
 * Utility function: remove a random item from an array and return it.
 */
function removeRandomItem(arr) {
  const idx = Math.floor(Math.random() * arr.length);
  const item = arr[idx];
  arr.splice(idx, 1);
  return item;
}

/**
 * Utility function: shuffle an array (Fisher-Yates).
 */
function shuffle(array) {
  let currentIndex = array.length, randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]
    ];
  }
  return array;
}
