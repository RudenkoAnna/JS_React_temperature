import React, { useState } from "react";
import axios from "axios";

export default function Weather(props) {
  const [temperature, setTemperature] = useState(null);

  function showTemperature(response) {
    setTemperature(response.data.main.temp);
  }

  if (temperature) {
    return (
      <h4>
        The temperature in {props.city} is {Math.round(temperature)}°C
      </h4>
    );
  } else {
    let apiKey = "39d0e5ab9f18d4b08648c0969ea4cd9f";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(showTemperature);
    return <h4>Loading temperature for {props.city}...</h4>;
  }
}
