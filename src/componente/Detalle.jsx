import React, { useEffect } from "react";
import "./detalle.css"
import { useDispatch, useSelector } from 'react-redux';

const translation = {
    "clear sky": "cielo despejado",
    "few clouds": "pocas nubes",
    "scattered clouds": "nubes dispersas",
    "broken clouds": "nublado",
    "shower rain": "lluvia intensa",
    "rain": "lluvia",
    "thunderstorm": "tormenta",
    "snow": "nieve",
    "mist": "niebla",
    "Rain, Partially cloudy":"lluvia y parcialmente nublado",
    "Clear":"Despejado",
    
}

const Detalles = ()=> {
	const detail = useSelector(state => state.detailsWeather);
	
	

	return (
        <>
       <div>
    <h1>Detalles del Clima</h1>
    <div className="details-container">
      {detail.days.slice(0, 4).map((day, index) => {
        const date = new Date(day.datetime);
        const dayOfWeek = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'][date.getDay()];
        
        return (
          <div key={day.datetime} className="day-card">
            <h2>{dayOfWeek}</h2>
            <h3>{day.datetime}</h3>
            <p>Temperatura máxima: {day.tempmax}°C</p>
            <p>Temperatura mínima: {day.tempmin}°C</p>
            <p>Descripción: {translation[day.conditions]}</p>
            {/* <img src={`icons/${day.icon}.png`} alt={day.conditions} /> */}
          </div>
        );
      })}
    </div>
  </div>
        </>
	
		)
}

export default Detalles