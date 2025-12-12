document.addEventListener("DOMContentLoaded", () => {

    let targetNum;    // Number-ka sirta ah
    let attempt;      // Attempts tirada uu user-ku sameeyay
    let maxAttempt = 10;  // Attempts limit-ga ah

    // Waxaan soo qaadaneynaa elements-ka HTML-ka
    const gameInput = document.querySelector(".guess-input");
    const submitBtn = document.querySelector(".gues-submit");
    const newGame = document.querySelector(".new-game");
    const feedback = document.querySelector(".feedback");
    const attemptsDisplay = document.querySelector(".attempts");

    // 🔵 Game initialization (marka bilaaw ama New Game la dhaho)
    function initGame() {
        targetNum = Math.floor(Math.random() * 100) + 1; // Samee number 1-100
        attempt = 0;                                     // Reset attempts
        attemptsDisplay.textContent = `Attempts is: ${attempt}`;
        feedback.textContent = "";                       // Clear message
        feedback.style.color = "black";                  // Reset color
        gameInput.value = "";                            // Clear input
        submitBtn.disabled = false;                      // Enable guess button
    }

    // 🔵 Function-ka check-gareynaya guess-ka user-ka
    function checkGame() {
        const userGues = parseInt(gameInput.value); // Qaado number-ka user-ka

        // ❗ Hubi in user-ku geliyay number sax ah
        if (isNaN(userGues) || userGues < 1 || userGues > 100) {
            feedback.textContent = "Please enter a valid number between 1 and 100!";
            feedback.style.color = "#e88e8cff";
            return;
        }

        attempt++; // kordhi attempts-ka
        attemptsDisplay.textContent = `Attempts is: ${attempt}`;

        // 🟢 Haddii user-ku ku guuleysto
        if (userGues === targetNum) {
            feedback.textContent = `🎉 Correct! You guessed in ${attempt} attempts!`;
            feedback.style.color = "#22d442";
            submitBtn.disabled = true; // Disable button-ka
        }

        // 🔴 Haddii attempts-ku dhammaadaan
        else if (attempt >= maxAttempt) {
            feedback.textContent = `❌ Game Over! The number was ${targetNum}`;
            feedback.style.color = "#e62825";
            submitBtn.disabled = true;
        }

        // 🟡 Haddii aanu sax ahayn → bixiya hint
        else {
            const hint = userGues < targetNum ? "Too Low" : "Too High";
            feedback.textContent = `${hint} — Try again`;
            feedback.style.color = "#fcba03";
        }

        // ❗ Nadiifi input-ka kadib guess-ka
        gameInput.value = "";
    }

    // 🔵 Event listeners
    submitBtn.addEventListener("click", checkGame);
    newGame.addEventListener("click", initGame);

    // Bilow game-ka marka page-ku load gareeyo
    initGame();

});
