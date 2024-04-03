import React, { useEffect } from "react";
import { fetchPr } from "../api";
import { useDispatch, useSelector } from 'react-redux';
import { setDetailsWeather } from "../redux/actions";
import { useNavigate } from "react-router-dom";
import "./card.css"

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
}

const Card = ({weather,city})=> {
	const detailsWeather = useSelector(state => state.detailsWeather);
	const dispatch = useDispatch();
	const navigate = useNavigate()
	

	const detalles =async ()=>{
		
		  const weatherPR = await fetchPr(city);
		  console.log(weatherPR)
	   dispatch(setDetailsWeather(weatherPR));
	   navigate("/detalle")
	}


	return (
	<div className="wather-card">
		<div className="card-wather">
		</div>
		<p className="wather-city">
			{weather ? (weather.name + " " + weather.sys.country) : "-"}
		</p>
		<p className="wather-description">
		{weather ? (translation[weather.weather[0].description] || weather.weather[0].description) : "-"}
			</p>
     <img className={`weater-icon`} alt={`clima`} src={`icons/${weather ? (weather.weather[0].icon) : "unknown"}.png`}  />
			
<div className="card-body">
<h1 className="weather-temp">
{weather ? Math.round(weather.main?.temp - 273) : ""}c°</h1>
<div className="weater-details">
<div className="parameters">
{/* <span className="param-label">Pronostico Extendido</span> */}

<button className="boton" onClick={detalles}>
  <div class="svg-wrapper-1">
    <div class="svg-wrapper">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="30"
        height="30"
        class="icon"
      >
        <path
          d="M22,15.04C22,17.23 20.24,19 18.07,19H5.93C3.76,19 2,17.23 2,15.04C2,13.07 3.43,11.44 5.31,11.14C5.28,11 5.27,10.86 5.27,10.71C5.27,9.33 6.38,8.2 7.76,8.2C8.37,8.2 8.94,8.43 9.37,8.8C10.14,7.05 11.13,5.44 13.91,5.44C17.28,5.44 18.87,8.06 18.87,10.83C18.87,10.94 18.87,11.06 18.86,11.17C20.65,11.54 22,13.13 22,15.04Z"
        ></path>
      </svg>
    </div>
  </div>
  <span>Pronostico</span>
</button>


</div>
</div>
</div>

</div>
		)
}

export default Card