window.onload = function () {
    let seconds = 00;
    let tens = 00;
    let mins = 00;
    let hrs = 00;
    let appendTens = document.getElementById("tens")
    let appendSeconds = document.getElementById("seconds")
    let appendMins = document.getElementById("mins")
    let appendHrs = document.getElementById("hrs")
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
        Interval = setInterval(startTimer, 1);
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
        mins = "00";
        hrs = "00";
        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
        appendMins.innerHTML = mins;
        appendHrs.innerHTML = hrs;
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
        if (seconds <= 9) {
            appendSeconds.innerHTML = "0" + seconds;
        }
        if (seconds > 9) {
            appendSeconds.innerHTML = seconds;
        }
        if (mins <= 9) {
            appendMins.innerHTML = "0" + mins;
        }
        if (mins > 9) {
            appendMins.innerHTML = mins;
        }
        if (hrs <= 9) {
            appendHrs.innerHTML = "0" + hrs;
        }
        if (hrs > 9) {
            appendHrs.innerHTML = hrs;
        }
        if (tens > 99) {
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            tens = 0;
            appendTens.innerHTML = "0" + 0;
        }
        if (seconds > 60) {
            mins++;
            appendMins.innerHTML = "0" + mins;
            seconds = 0;
            appendSeconds.innerHTML = "0" + 0;
        }
        if (mins > 59) {
            hrs++;
            appendHrs.innerHTML = "0" + hrs;
            hrs = 0;
            appendMins.innerHTML = "0" + 0;
        }
    }


    var lastLap = { seconds: 0, mins: 0, hrs: 0 };

    Lap.onclick = function () {
        var lapSeconds = seconds - lastLap.seconds;
        var lapHrs = hrs - lastLap.hrs;
        var lapMins = mins - lastLap.mins;
        lastLap = {
            tens: tens,
            seconds: seconds,
            mins: mins,
            hrs: hrs
        };

        document.getElementById("seconds").innerHTML = text.replace("-", " ");
        Laps.innerHTML += "<li>" + leftPad(lapHrs) + ":" + leftPad(lapMins) + ":" + leftPad(lapSeconds) + "</li>";
    }

    function leftPad(value) {
        return value < 10 ? ('0' + value) : value;
    }
}