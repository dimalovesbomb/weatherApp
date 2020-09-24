const ADD_PLACE = 'ADD_PLACE';
const REMOVE_PLACE = 'REMOVE_PLACE'

export function getPlace(city) {
  return async (dispatch) => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=09e9879c47b2100b6e33141332699804`;

    return fetch(URL)
            .then(res => res.json())
            .then(payload => dispatch(addPlace(payload)))
            .catch(error => console.error(error));
  }
}

function addPlace(payload) {
  return {
    type: ADD_PLACE,
    payload
  }
}

export function removePlace(id) {
  return {
    type: REMOVE_PLACE,
    id
  }
}
