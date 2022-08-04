import React, { useState } from "react";
import "./App.css";
import { useTheme } from "../../use-theme";

const api = {
  key: "95dcccab70174fc2926a2e3be7f6a95a",
  baseURL: "https://api.openweathermap.org/data/2.5/"
};

const App = () => {

  const { theme, setTheme } = useTheme();
  const [query, setQuery] = useState("");
  const [prediction, setPrediction] = useState({});

  const getWeather = async (e) => {
    if (e.key === "Enter") {
      const data = await fetch(
        `${api.baseURL}weather?q=${query}&units=metric&appid=${api.key}`
      );
      const res = await data.json();
      setPrediction(res);
      setQuery("");
      console.log(res);
    }
  };

  let setThemeLight = () => {
    setTheme("light")
  }

  let setThemeDark = () => {
    setTheme("dark")
  }

  const Month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "November",
    "December"
  ];

  const Day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturay"
  ];

  const returnDate = (date) => {
    const year = date.getFullYear();
    const month = Month[date.getMonth()];
    const day = date.getDate();
    const digit = Day[date.getDay()];
    return `${digit} : ${month} ${day} ${year}`;
  };

  return (
    <>
      <div className="AppContent">
        <div className="input">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={getWeather}
          />
          <div className="buttons"><button onClick={setThemeLight}>Light</button><button onClick={setThemeDark}>Dark</button><div className="theme_name">{theme === "light" ? "LIGHT" : "DARK"}</div></div>
        </div>
        <div className="app">
          {typeof prediction.main !== "undefined" ? (
            <div className="content">
              <div className="city_name">
                {prediction.name}, {prediction.sys.country}
              </div>
              <div className="date">{returnDate(new Date())}</div>
              <div className="prediction_image">
                {typeof prediction.main !== "undefined" ? (
                  prediction.main.temp > 0 ? (
                    <div className="image_temp">
                      <div className="image"></div>
                      
                    </div>
                  ) : (
                    <div className="image_temp">
                      <div className="image2"></div>
                    </div>
                  )
                ) : null}
              </div>
              <div className="temp">{Math.round(prediction.main.temp) + '\xB0'}</div>
              <div className="temp_min">
                <div>
                  Min: {Math.round(prediction.main.temp_min) + '\xB0'} 
                </div>
              </div>
              <div className="temp_max">
                <div>
                  Max: {Math.round(prediction.main.temp_max) + '\xB0'} 
                </div>
              </div>
            </div>
          ) : null}
        </div>
        <div className="info_container">
          <div className="inner">
            <div className="sp">
              <span>i</span>
            </div>
            <h6>Add city and click ENTER</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
