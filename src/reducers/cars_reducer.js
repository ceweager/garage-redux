export default function (state = {}, action) {
  switch (action.type) {
    case 'GET_CARS':
      return action.payload;
    case 'FETCH_CAR':
      return [action.payload];
    case 'DELETE_CAR':
      return [action.payload];
    default:
      return state;
  }
}
