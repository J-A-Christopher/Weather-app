
  
    const time=document.getElementById('time');
    const temp=document.getElementById('temp');
    const image=document.getElementById('img');
    const weather=document.getElementById('weather');
    const wind=document.getElementById('wind');
    const rain=document.getElementById('rain');
    const humidity=document.getElementById('humidity');
    const pressure=document.getElementById('pressure');
    const dewPoint=document.getElementById('dewPoint');
    const feelsLike=document.getElementById('feelsLike');

    let options={
      weekday:'long',
      year:'numeric',
      month:'long',
      day:'numeric'

    };

    let today=new Date();
    

    function cTemp(value){
      let temp=value;
      temp=Math.round(temp-273.15);
      return temp;
    }

    // let date=new Date();
    // date.toUTCString()
    


   class UI{
     paint(weather) {
    time.textContent= today.toLocaleDateString('en-US',options);
    temp.textContent=`Temperature: ${cTemp(weather.temp)}C`;
    image.setAttribute('src',`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`)
    weather.textContent=weather.weather[0].description;
    wind.textContent=`Wind speed: ${weather.wind_speed}m/s`;
    humidity.textContent=`Relative humidity: ${weather.humidity}%`;
    pressure.textContent=`Pressure: ${weather.pressure}`;
    dewPoint.textContent=`Dew Point: ${weather.dew_point}`;
    feelsLike.textContent=`Feels Like: ${weather.feels_like}K`;
  }
}
  
