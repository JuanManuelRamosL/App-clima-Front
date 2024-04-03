import axios from "axios"

export async function fetchWather(city, setError) {
	const apiKey = "0e6c5765f0d4918426a525dd5e23fb62";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
	
	try {
		const response = await axios.get(url);
		setError("")
		return response.data;
	} catch (error) {
		setError("no se encontro la ciudad") 
		return error
	}
}

export async function fetchPr(city) {
	const url = 'http://localhost:3111/days';
	const urlD = "https://app-clima-nuxr.onrender.com/days"
	const data = { city };
  console.log(city)
	try {
	  const response = await axios.post(urlD,  { city: city } 
	  );
	  
	  return response.data;
	} catch (error) {
	
	  return error;
	}
  }
//lo mismo pero con fetch

// export async function fetchWather(city, setError) {
//     const apiKey = "0e6c5765f0d4918426a525dd5e23fb62";
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    
//     try {
//         const response = await fetch(url);
//         if (response.ok) {
//             const data = await response.json();
//             setError("");
//             return data;
//         } else {
//             setError("no se encontro la ciudad");
//             return null;
//         }
//     } catch (error) {
//         setError("ocurrió un error en la solicitud");
//         return null;
//     }
// }