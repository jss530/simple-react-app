
function studiosReducer (state = null, action) {
  switch (action.type) {

    case 'GET_STUDIOS':
      return action.payload;

    default:
      return state;
  }
}

export default studiosReducer;
