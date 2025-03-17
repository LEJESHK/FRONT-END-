import { useState,useEffect } from 'react'
import './App.css'
import searchIcon from "./assets/search.png";
import clearIcon from "./assets/clear.jpg";
import cloudIcon from "./assets/cloud.webp";
import drizzleIcon from "./assets/drizzle.webp";
import rainIcon from "./assets/rain.webp";
import windIcon from "./assets/wind.jpg";
import snowIcon from "./assets/snow.jpg";
import humidityIcon from "./assets/humidity.webp";
const WeatherDetails=({icon,temp,city,country,lat,log,humidity,wind})=>{
return (<>
<div className='image'>
  <img src={icon} alt="image" height={150}></img>
</div>
<div className='temp'>{temp}℃</div>
<div className='location'>{city}</div>
<div className='country'>{country}</div>
<div className="cord">
  <div>
  <span className="lat">latitude</span>
  <span>{lat}</span>
  </div>
  <div>
  <span className="log">longitude</span>
  <span>{log}</span>
  </div>
</div>
<div className="data-container">
  <div className="element">
<img src={humidityIcon} alt="humidity" height={30} className='icon'/>
<div className="data">
<div className="humidity-percent">{humidity}%</div>
<div className="text">Humidity</div>

</div>
</div>
<div className="element">
<img src={windIcon} alt="wind" height={30} className='icon'/>
<div className="data">
<div className="wind-percent">{wind} km/h</div>
<div className="text">Wind Speed</div>

</div>
</div>
</div>
</>);


}
function App() {
  let api_key="d005bf392f4cfc4154defc0b25158a8a";
  const [icon,setIcon]=useState(snowIcon);
  const [temp,setTemp]=useState(0);
  const [city,setCity]=useState("Chennai");
  const [country,setCountry]=useState("IN");
  const [lat,setLat]=useState(0);
  const [log,setLog]=useState(0);
  const [humidity,setHumidity]=useState(0);
  const [wind,setWind]=useState(0);
  const [text,setText]=useState("Chennai")
  const [cityNotFound,setcityNotFound]=useState(false);
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState(null);
  const weatherIconMap={
"01d":clearIcon,
"01n":clearIcon,
"02d":cloudIcon,
"02n":cloudIcon,
"03d":clearIcon,
"03n":clearIcon,
"04d":drizzleIcon,
"04n":drizzleIcon,
"09d":rainIcon,
"09n":rainIcon,
"10d":rainIcon,
"10n":rainIcon,
"13d":snowIcon,
"13n":snowIcon
  }
  const search=async()=>{
    setLoading(true);
   let url=`https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${api_key}&units=Metric` ;
   try{
let res=await fetch(url);
let data=await res.json();
if(data.cod==="404")
{
  console.error("city not found");
  setcityNotFound(true);
  setLoading(false);
  return;
}
setHumidity(data.main.humidity);
setWind(data.wind.speed);
setTemp(Math.floor(data.main.temp));
setCity(data.name);
setCountry(data.sys.country);
setLat(data.coord.lat);
setLog(data.coord.lon);
const weatherIconCode=data.weather[0].icon;
setIcon(weatherIconMap[weatherIconCode]||clearIcon);
setcityNotFound(false);
   }
   catch(error){
console.error("an error occured:",error.message);
setError("An error occured while fetching weather data.")
   }
   finally{
    setLoading(false);
   }
   
  }
  const handlecity=(e)=>{
setText(e.target.value);

  }
  const handleKeyDown=(e)=>{
if(e.key === "Enter")
{
  search();
}

  
  }
  useEffect(function(){
  search();
  },[]) 
  return (
    <>
      <div className="container">
      <div className="input-container">
        <input type="text" className="cityInput" placeholder="Search City" onChange={handlecity} value={text} onKeyDown={handleKeyDown}></input>
     <div className='Search-icon'>
     <img 
  src={searchIcon} 
  alt="search" 
  height={30} 
  style={{ marginRight: "5px" }} 
  onClick={() => search()}
/>
      </div></div>
      
{loading && <div className="loading-message">Loading...</div>}
{error && <div className="error-message">{error}</div>}
{cityNotFound && <div className="city-not-found">City not found</div>}
<p className="copyright">
{!loading && !cityNotFound && <WeatherDetails icon={icon} temp={temp} city={city} country={country} lat={lat} log={log} humidity={humidity} wind={wind}/>}
  Designed by <span>Lejesh</span>
</p>
      </div>
    </>
  )
}

export default App
