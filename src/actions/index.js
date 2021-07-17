// TODO: add and export your own actions
export function getCars() {
  const promise = fetch('https://wagon-garage-api.herokuapp.com/my-awesome-garage/cars')
    .then(response => response.json());
  return {
    type: "GET_CARS",
    payload: promise
  };
}

export function createCar(body, callback) {
  const promise = fetch("https://wagon-garage-api.herokuapp.com/my-awesome-garage/cars", {
    method: 'Post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
    .then(response => response.json())
    .then(callback);

  return {
    type: "CAR_CREATED",
    payload: promise
  };
}

export function fetchCar(id) {
  const promise = fetch(`https://wagon-garage-api.herokuapp.com/cars/${id}`)
    .then(response => response.json());
  console.log(promise);
  return {
    type: "FETCH_CAR",
    payload: promise
  };
}
