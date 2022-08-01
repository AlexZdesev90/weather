import React, { useState } from "react";
import "./App.css";

const api = {
  key: "95dcccab70174fc2926a2e3be7f6a95a",
  baseURL: "https://api.openweathermap.org/data/2.5/"
};

const App = () => {
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
      <div>
        <div className="input">
          <input
            type="text"
            placeholder="City"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={getWeather}
          />
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
                      <div>{Math.round(prediction.main.temp)}</div>
                    </div>
                  ) : (
                    <div className="image_temp">
                      <div className="image2"></div>
                      <div>{Math.round(prediction.main.temp)}</div>
                    </div>
                  )
                ) : null}
              </div>
              <div className="temp_maxmin">
                <div>
                  Min: {Math.round(prediction.main.temp_min)} Max:{" "}
                  {Math.round(prediction.main.temp_max)}{" "}
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
