const weatherBalloon = (cityID) => {
    // var key = config.KEY;
    var key = '515f703ea93059030f11dcf032198993';
    fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID + '&appid=' + key)
        .then((resp) => { return resp.json(); })
        .then((data) => { drawWeather(data); })
        .catch(() => {});
}

const drawWeather = (d) => {
    var celsius = Math.round(parseFloat(d.main.temp)-273.15);
    var fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32);
    document.getElementById('description').innerHTML = capitalize(d.weather[0].description);
    document.getElementById('temp').innerHTML = fahrenheit + '&deg;';
    document.getElementById('location').innerHTML = d.name;
}

const capitalize = (s) => {
    var words = s.toLowerCase().split(' ');
    for (var i = 0; i < words.length; i++) {
       words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1);
    }
    return words.join(' ');
}

const playBGMusic = () => {
    var audio = new Audio('music/cloudnine.mp3');
    audio.play();
}