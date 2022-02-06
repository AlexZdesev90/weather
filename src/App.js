import React, {useState} from 'react'

import './App.css';

const api = {
  key: "95dcccab70174fc2926a2e3be7f6a95a",
  base: "http://api.openweathermap.org/data/2.5/"
}

function App() {

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = async (event) => {
    if (event.key === "Enter") {
       
      let res = await fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`);
      let json = await res.json();
      setWeather(json);
      setQuery('');
      console.log(json);
    }
  }

  const dateBuilder = (d) => {
    let months = ["Jan", "Fev", "Mar", "Fev", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednsday", "Thursday", "Friday", "Saturday"];
    let day = days[d.getDay()];//0-6
    let date = d.getDate();//1-31
    let month = months[d.getMonth()];//0-11
    let year = d.getFullYear();//2022
    return `${day} ${date} ${month} ${year}`
  }

  return (
    <div className="App">
      <input type="text" placeholder="city" onKeyPress={search} onChange={(e) => setQuery(e.target.value)} value={query} />
      {(typeof weather.main !== 'undefined') ? (<div><div>{weather.name}, {weather.sys.country}</div>
      <div>{dateBuilder(new Date())}</div>
        <div>{Math.round(weather.main.temp)}{'\xB0'}</div>
      <div>{weather.weather[0].main}</div></div>) : null}
     
    </div>
  );
}

export default App;
