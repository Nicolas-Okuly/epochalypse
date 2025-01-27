// Convert the max epoch to a date
const maxEpoch = 2147508847000;
const epochalypse = new Date(maxEpoch);

/*
    Calculate the remaining time, if it is 0 or less, update the timer to say that the epoochalypse is here.
    Calculate the amount of days, hours, minutes, and seconds then update the timer to show them.
    Calculate the binary of the current time and add that to the page.
*/
function updateCountdown() {
    const now = Date.now();
    const timeRemaining = epochalypse - now;
    const timer = document.getElementById("time");

    if (timeRemaining <= 0) {
        timer.innerHTML = "The Epochalypse has arrived."
        return clearInterval(interval);
    }

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    timer.innerHTML = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds.`;

    const unixTimestamp = Math.floor(new Date().getTime() / 1000);
    const binary = (unixTimestamp).toString(2).padStart(32, '0');

    let string = "";
    for(i = 0; i < binary.toString().length; i++) {
        if (i%8 == 0) string += " ";
        string += binary.toString()[i];
    }

    document.getElementById("binary").innerHTML = string;

    const audio = new Audio("./click.mp3");
    audio.play();
}

// Set an interval to update the page every second (1000 milliseconds)
const interval = setInterval(updateCountdown, 1000);