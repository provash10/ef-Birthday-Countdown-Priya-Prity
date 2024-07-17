const birthday = "10 septembar 2024";

function countdown() {
    const birthdayDate = new Date(birthday);
    const currentDate = new Date ();

    const totalSeconds = (birthdayDate - currentDate)/1000;

    const days = Math.floor(totalSeconds / (3600*24));
    const hours = Math.floor(totalSeconds % (3600*24)/(3600));
    const minutes = Math.floor((totalSeconds % (60 * 60)) / (60));
    const seconds = Math.floor((totalSeconds % (60)) );



    document.getElementById("days") .innerText = formatTime(days);
    document.getElementById("hours") .innerText = formatTime(hours);
    document.getElementById("minutes") .innerText = formatTime(minutes);
    document.getElementById("seconds") .innerText = formatTime(seconds);
}

function formatTime(time){
    return time < 0? ('0${time}') : time;
    const interval = setInterval(updateCountdown, 1000);
            updateCountdown(); // Initial call to display the countdown immediately
}
setInterval(countdown, 1000);
countdown();
    