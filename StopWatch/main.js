window.onload = function () {
    let seconds = 00;
    let tens = 00;
    let hours = 00;
    let appendTens = document.getElementById("tens")
    let appendSeconds = document.getElementById("seconds")
    let appendHour = document.getElementById("hours")
    let buttonStart = document.getElementById('button-start');
    let buttonStop = document.getElementById('button-stop');
    let buttonReset = document.getElementById('button-reset');
    let Lap = document.getElementById('button-lap');
    let Laps = document.getElementById('laps');
    let Interval;

    buttonStart.onclick = function () {
        document.getElementById("button-lap").style.display = "block";
        document.getElementById("button-reset").style.display = "block";
        document.getElementById("button-stop").style.display = "block";
        document.getElementById("button-start").style.display = "none";

        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    }
    buttonStop.onclick = function () {
        document.getElementById("button-lap").style.display = "none";
        document.getElementById("button-reset").style.display = "none";
        document.getElementById("button-start").style.display = "block";
        document.getElementById("button-stop").style.display = "none";
        document.getElementById("button-lap").style.display = "block";

        clearInterval(Interval);
    }
    buttonReset.onclick = function () {
        tens = "00";
        seconds = "00";
        hours = "00";
        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
        appendHour.innerHTML = hours;
        clearInterval(Interval);
        document.getElementById("button-start").style.display = "block";
        document.getElementById("button-lap").style.display = "none";
        document.getElementById("button-reset").style.display = "none";
        document.getElementById("button-stop").style.display = "none";
        document.getElementById("button-lap").style.display = "block";
        Laps.innerHTML = '';

    }
    function startTimer() {
        tens++;
        if (tens <= 9) {
            appendTens.innerHTML = "0" + tens;
        }
        if (tens > 9) {
            appendTens.innerHTML = tens;
        }
        if (tens > 99) {
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            tens = 0;
            appendTens.innerHTML = "0" + 0;
        }
        if (seconds > 9) {
            appendSeconds.innerHTML = seconds;
        }
        if (seconds > 60) {
            hours++;
            appendHour.innerHTML = "0" + hours;
            tens = 0;
            seconds = 0;
            appendSeconds.innerHTML = "0" + 0;
        }
    }


    var lastLap = { tens: 0, seconds: 0, hours: 0 };

    Lap.onclick = function () {
        var lapSeconds = seconds - lastLap.seconds;
        var lapTens = tens - lastLap.tens;
        var lapHours = hours - lastLap.hours;
        lastLap = {
            tens: tens,
            seconds: seconds,
            hours: hours
        };

        Laps.innerHTML += "<li>" + leftPad(lapHours) + ":" + leftPad(lapSeconds) + ":" + leftPad(lapTens) + "</li>";
    }

    function leftPad(value) {
        return value < 10 ? ('0' + value) : value;
    }
}