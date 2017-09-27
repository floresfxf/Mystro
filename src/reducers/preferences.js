
const initialState = {
  distance: 0,
  rating: 5,
  service: 'uber',
  add_service: 5,
  carpool: false,
}
const prefReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_DISTANCE':
        const newStater = Object.assign({}, state);
        newStater.distance = action.distance;
        return newStater;
      case 'ADD_RATING':
        const newStatez = Object.assign({}, state);
        newStatez.rating = action.rating
        return newStatez;
      case 'ADD_SERVICE':
        const newState = Object.assign({}, state)
        newState.service = action.name
        return newState
      case 'ADD_SERVICE_TIME':
        const newStates = Object.assign({}, state)
        newStates.add_service = action.time
        return newStates
      case 'ADD_CARPOOL':
        const newStated = Object.assign({}, state);
        newStated.carpool = action.carpool
        return newStated;
      default:
        return state;
    }
  }
export default prefReducer;
