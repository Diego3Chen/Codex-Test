// script.js

// Interactive features JavaScript

// Function to display current date and time
function displayDateTime() {
    const now = new Date();
    const dateTimeString = now.toISOString().replace(/T/, ' ').replace(/\..+/, ''); // Format to YYYY-MM-DD HH:MM:SS
    console.log(`Current Date and Time (UTC): ${dateTimeString}`);
}

displayDateTime();