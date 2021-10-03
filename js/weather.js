const API_KEY = "fe784481cfbbdbd6c54ed55f22359d75";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;    
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    //console.log(url);
    fetch(url)
        .then(response => response.json())
        .then((data) => {
            const country = document.querySelector("#weather span:first-child");
            const weather = document.querySelector("#weather span:last-child");
            country.innerText = data.sys.country;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp} `;
        }); 
    //fetch는 시간이 걸리므로 response로 기다릴 필요가 있음
}

function onGeoError(){
    alert("Can't find you. No weather for you.");
}

//navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
