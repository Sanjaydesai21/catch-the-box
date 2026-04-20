let score = 0;
let timeLeft = 30;
let gameInterval;

const box = document.getElementById("box");
const scoreDisplay = document.getElementById("score");
const timeDisplay = document.getElementById("time");
const gameArea = document.getElementById("game-area");

function startGame() {
    score = 0;
    timeLeft = 30;
    scoreDisplay.textContent = score;
    timeDisplay.textContent = timeLeft;

    box.style.display = "block";

    moveBox();

    gameInterval = setInterval(() => {
        timeLeft--;
        timeDisplay.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(gameInterval);
            box.style.display = "none";
            alert("Game Over! Your Score: " + score);
        }
    }, 1000);
}

function moveBox() {
    const x = Math.random() * (gameArea.clientWidth - 40);
    const y = Math.random() * (gameArea.clientHeight - 40);

    box.style.left = x + "px";
    box.style.top = y + "px";
}

box.addEventListener("click", () => {
    score++;
    scoreDisplay.textContent = score;
    moveBox();
});
