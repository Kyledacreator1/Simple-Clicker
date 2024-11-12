// Get the button elements and score display
const clickButton = document.getElementById('clickButton');
const resetButton = document.getElementById('resetButton');
const scoreDisplay = document.getElementById('score');
const upgradeButton = document.getElementById('upgradeButton');
const upgradeInfo = document.getElementById('upgradeInfo');

let score = 0;
let pointsPerClick = 1; // Points per click, starts at 1
let upgradeCost = 10; // Cost of first upgrade

// Update the score on the screen
function updateScore() {
    scoreDisplay.textContent = 'Score: ' + score;
}

// Function to handle the upgrade
function upgrade() {
    if (score >= upgradeCost) {
        score -= upgradeCost; // Deduct points for the upgrade
        pointsPerClick += 1; // Increase points per click
        upgradeCost = Math.floor(upgradeCost * 1.5); // Increase cost for next upgrade
        upgradeInfo.textContent = `You need ${upgradeCost} points to upgrade.`;
        updateScore();
    } else {
        alert("Not enough points for upgrade!");
    }
}

// Event listener for the "Click Me!" button
clickButton.addEventListener('click', () => {
    score += pointsPerClick; // Earn points based on pointsPerClick
    updateScore();
});

// Event listener for the "Upgrade" button
upgradeButton.addEventListener('click', upgrade);

// Event listener for the "Reset Game" button
resetButton.addEventListener('click', () => {
    score = 0;
    pointsPerClick = 1; // Reset points per click to 1
    upgradeCost = 10; // Reset upgrade cost
    upgradeInfo.textContent = `You need 10 points to upgrade.`;
    updateScore();
});
