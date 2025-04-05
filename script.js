
function showMessage() {
    const output = document.getElementById('output');
    output.textContent = "Hello! You clicked the button.";
}

function changeBackground() {
    document.body.style.backgroundColor = '#d1f7c4';
    document.body.style.backgroundColor = '#ffcccb';
    const output = document.getElementById('output');
    output.textContent = "Background color changed!";

}

function resetBackground() {
    document.body.style.backgroundColor = '#f4f4f9';
    const output = document.getElementById('output');
    output.textContent = "Background color reset!";
}

function showDate() {
    const output = document.getElementById('output');
    const currentDate = new Date();
    output.textContent = `Current date and time: ${currentDate.toLocaleString()}`;
}

function showRandomNumber() {
    const output = document.getElementById('output');
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    output.textContent = `Random number: ${randomNumber}`;
}

function showRandomQuote() {
    const output = document.getElementById('output');
    const quotes = [
        "The only limit to our realization of tomorrow is our doubts of today.",
        "The future belongs to those who believe in the beauty of their dreams.",
        "Do not wait to strike till the iron is hot, but make it hot by striking.",
        "Success is not how high you have climbed, but how you make a positive difference to the world."
    ];
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    output.textContent = `Random quote: "${randomQuote}"`;
}
function showRandomColor() {
    const output = document.getElementById('output');
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    output.textContent = `Random color: ${randomColor}`;
    document.body.style.backgroundColor = randomColor;
}    function showMessage() {
    document.getElementById('output').innerText = 'Hello! Welcome to JavaScript Practice!';
}

function changeBackground() {
    document.body.style.backgroundColor = '#ffeb3b';
}

function resetBackground() {
    document.body.style.backgroundColor = '#f4f4f9';
}

function displayDate() {
    const date = new Date();
    document.getElementById('output').innerText = `Today's date is: ${date.toDateString()}`;
}

// Popup Blast Game
function createPopup() {
    const popup = document.createElement('div');
    popup.style.position = 'fixed';
    popup.style.top = `${Math.random() * 80}vh`;
    popup.style.left = `${Math.random() * 80}vw`;
    popup.style.padding = '20px';
    popup.style.backgroundColor = '#2575fc';
    popup.style.color = 'white';
    popup.style.borderRadius = '5px';
    popup.style.cursor = 'pointer';
    popup.innerText = 'Click to close!';
    popup.onclick = () => popup.remove();
    document.body.appendChild(popup);
}