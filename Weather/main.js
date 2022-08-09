// var loc = document.getElementById("location");
// if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(getPos);
// }
// function getPos(position) {
//     let lat = position.coords.latitude;
//     let longi = position.coords.longitude;
//     console.log(lat + ' ' + longi);
// }


if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getPos);
}
function getPos(position) {
    document.getElementById("loader").style.display = "none";
    document.getElementById("maincontent").style.display = "block";

    const lati = + position.coords.latitude;
    const longi = + position.coords.longitude;
    console.log("Latitude: " + lati + ' ' + "Longitude: " + longi);

    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${longi}&appid=82005d27a116c2880c8f0fcb866998a0`)
        .then((data) => {
            return data.json();
        })
        .then((data) => {
            temprature = document.getElementById('txt1').innerHTML = data.main.temp;
            output = temprature - 273;
            decimal = Math.trunc(output);
            document.getElementById('txt1').innerHTML = decimal;
            document.getElementById('txt3').innerHTML = data.name;
            document.getElementById('img').src = `img/icons/${data.weather[0].icon}.png`;
            document.getElementById('txt2').innerHTML = data.weather[0].description;
        })
}


