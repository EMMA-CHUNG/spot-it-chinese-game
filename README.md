# Chinese Spot It

A **Spot It**–style game for learning or practicing Chinese characters. This simple web-based game challenges players to find the correct character among several options, helping reinforce character recognition in a fun, interactive way.

## Table of Contents
1. [Overview](#overview)  
2. [Features](#features)  
3. [Getting Started](#getting-started)  
4. [Usage](#usage)  
5. [Customization](#customization)  
6. [Deployment](#deployment)  
7. [Contributing](#contributing)  
8. [License](#license)

---

## Overview
**Chinese Spot It** displays a set of characters (e.g., four) and asks the player to click the **target character**. If the player chooses correctly, the game automatically refreshes with new characters. Otherwise, the player must **try again**.

---

## Features
- **Random Characters**: A small pool of Chinese characters is sampled and shuffled every round.  
- **Instant Feedback**: The game immediately shows whether you’re correct or need another attempt.  
- **Simple Interface**: Built with plain HTML, CSS, and JavaScript for quick loading and easy customization.  
- **Lightweight & Portable**: No external libraries required; just open in a modern browser.

---

## Getting Started

1. **Clone or Download** this repository:
   ```bash
   git clone https://github.com/your-username/chinese-spot-it.git
   ```
   Or simply click **Code** > **Download ZIP** and extract the files.

2. **Locate the Files**:
   - **index.html**
   - **styles.css**
   - **app.js**

3. **Open index.html** in a web browser (Chrome, Firefox, Safari, etc.).

---

## Usage
1. **Start New Round**: Click the **“Start New Round”** button.  
2. **Find the Character**: Read the instruction (e.g., “Find this character: 家”).  
3. **Click the Correct Button**: Among the 4 displayed characters, click the one matching the target.  
4. **Feedback**: 
   - **Correct!** — Wait a moment and a new round begins automatically.  
   - **Try again!** — Keep clicking until you find the right one.

---

## Customization
1. **Add or Change Characters**: In `app.js`, modify the `allCharacters` array with new Chinese characters.  
2. **Adjust the Difficulty**:  
   - Increase the number in `getRandomChars(allCharacters, 4)` to show more than 4 characters.  
   - Use a larger character pool for more variety.  
3. **Styling**: Modify `styles.css` to change button colors, layout, font sizes, etc.  
4. **Timing**: Change the `setTimeout(startNewRound, 1000)` delay if you want more or less time before the next round starts.

---

## Deployment

### GitHub Pages
1. Create a [GitHub Pages](https://docs.github.com/en/pages) repository (public is free).  
2. Push your **index.html**, **styles.css**, and **app.js** files to the `main` branch (or `gh-pages` branch, depending on your setup).  
3. Enable GitHub Pages under **Settings** > **Pages**, and choose your branch.  
4. Access your site at: `https://<username>.github.io/<repo-name>/`.

### Other Platforms
- **Netlify**, **Vercel**, or **Glitch** can also host static sites (HTML/CSS/JS) for free.

---

## Contributing
Contributions are welcome! Feel free to **fork** the repository, create a **feature branch**, and submit a **pull request**. Whether you want to add more characters, refine the UI, or improve the game logic, all suggestions are appreciated.

---

## License
This project is offered under the **MIT License**. See [LICENSE](LICENSE) for details.  

Enjoy practicing Chinese characters with **Chinese Spot It**! If you have any questions or improvements, please open an issue or submit a pull request.  
