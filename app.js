// Initialize the Telegram WebApp
const tg = window.Telegram.WebApp;

console.log(tg.initData)
console.log(tg.initDataUnsafe)

// Display Telegram user's first name
document.body.insertAdjacentHTML('beforeend', `<p>Hello, ${tg.initDataUnsafe.user.first_name}!</p>`);
document.body.insertAdjacentHTML('beforeend', `<p>Platform, ${tg.platform}!</p>`);
document.body.insertAdjacentHTML('beforeend', `<p>Version, ${tg.version()}!</p>`);

// Send data to the bot when the button is clicked
document.getElementById('send-data').addEventListener('click', () => {
    tg.sendData(JSON.stringify({ message: "Hello from the Web App!" }));
});

// Optionally close the Web App
tg.onEvent('mainButtonClicked', () => {
    tg.close();
});
