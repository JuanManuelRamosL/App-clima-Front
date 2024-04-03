const initialState = {
    detailsWeather: []
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_DETAILS_WEATHER':
        return {
          ...state,
          detailsWeather: action.payload
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  