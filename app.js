// Initialize the Telegram WebApp
const tg = window.Telegram.WebApp;

console.log(tg)

// Display Telegram user's first name
document.body.insertAdjacentHTML('beforeend', `<p>Hello, ${tg.initDataUnsafe.user.first_name}!</p>`);

// Send data to the bot when the button is clicked
document.getElementById('send-data').addEventListener('click', () => {
    tg.sendData(JSON.stringify({ message: "Hello from the Web App!" }));
});

// Optionally close the Web App
tg.onEvent('mainButtonClicked', () => {
    tg.close();
});
