import React, {useState} from 'react';
import './AppTest.css';

const api = {
    key: "95dcccab70174fc2926a2e3be7f6a95a",
    baseURL: "https://api.openweathermap.org/data/2.5/"
}

const AppTest = () => {

    const [query, setQuery] = useState("");
    const [prediction, setPrediction] = useState({});

    const getWeather = async (e) => {
        if (e.key === "Enter") {
            const data = await fetch(
                `${api.baseURL}weather?q=${query}&units=metric&appid=${api.key}`);
            const res = await data.json();
            setPrediction(res);
            setQuery("");
            console.log(res);
        }
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
    ]

    const Day = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturay"
    ]

    const returnDate = (date) => {
        const year = date.getFullYear();
        const month = Month[date.getMonth()];
        const day = date.getDate();
        const digit = Day[date.getDay()];
        return `${digit} ${month} ${day} ${year}`
    }
    
    return (
        <>
            <div>
                <div className="input">
                    <input type="text"
                        placeholder="City"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyPress={getWeather} />
                </div>
                <div className="app">
                {typeof prediction.main !== "undefined" ? 
                (
                <div className="content">
                                <div>{prediction.name}, {prediction.sys.country}
                                </div>
                                <div>{returnDate(new Date())}
                                </div>
                                <div className="image">
                                </div>
                                <div className="image2">
                                </div>
                                <div className="image3">
                                </div>
                    <div>Min: {Math.round(prediction.main.temp_min)}</div><div>Max: {Math.round(prediction.main.temp_max)}</div>
                </div>
                        ) : (null)}
                    </div>
            </div>
        </>
    )
}

export default AppTest;