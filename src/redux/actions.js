export const SET_DETAILS_WEATHER = 'SET_DETAILS_WEATHER';

// Crear una acción para establecer los detalles del clima
export const setDetailsWeather = (detailsWeather) => ({
  type: SET_DETAILS_WEATHER,
  payload: detailsWeather
});