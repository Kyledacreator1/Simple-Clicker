// Get the button elements and score display
const clickButton = document.getElementById('clickButton');
const resetButton = document.getElementById('resetButton');
const scoreDisplay = document.getElementById('score');
const upgradeButton = document.getElementById('upgradeButton');
const upgradeInfo = document.getElementById('upgradeInfo');

let score = 0;
let pointsPerClick = 1;
let upgradeCost = 10;

// Update the score on the screen
function updateScore() {
    scoreDisplay.textContent = 'Score: ' + score;
}

// Handle upgrade logic
function upgrade() {
    if (score >= upgradeCost) {
        score -= upgradeCost;
        pointsPerClick += 1;
        upgradeCost = Math.floor(upgradeCost * 1.5);
        upgradeInfo.textContent = `You need ${upgradeCost} points to upgrade.`;
        updateScore();
    } else {
        alert("Not enough points for upgrade!");
    }
}

// Click button action
clickButton.addEventListener('click', () => {
    score += pointsPerClick;
    updateScore();
});

// Upgrade button action
upgradeButton.addEventListener('click', upgrade);

// Reset button action
resetButton.addEventListener('click', () => {
    score = 0;
    pointsPerClick = 1;
    upgradeCost = 10;
    upgradeInfo.textContent = `You need 10 points to upgrade.`;
    updateScore();
});

