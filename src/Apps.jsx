import { useState } from 'react'
import Card from './componente/card.jsx'
import { fetchWather } from './api.jsx'
import './App.css'

function App() {
const [city, setCity] = useState("")
const[weather,setWhather] = useState(null)
const [error, setError] = useState("")

const handleChange = (event) => {
setCity(event.target.value);
}

const handleSubmit = async (event) => {
event.preventDefault();
try {
  const weather = await fetchWather(city,setError);
  setWhather(weather)
} catch (error) {
  setError("la ciudad no se enncontro")
}
}

  return (
    <>
<div className='App'>
<h1 className='app-heading'>Clima en tu Ciudad</h1>
<form onSubmit={handleSubmit}>
<input type="text" placeholder='Buscar Ciudad' value={city} onChange={handleChange} className='input'/>
<button className='buscar' type='submit'>Buscar</button>
</form>
{error ? (
  <p className='error'>{error}</p>
) : (
  <Card weather={weather} city={city}/>
)}
</div>
    </>
  )
}

export default App
