
import DEFAULT from "../state/state";

function studiosReducer (state = DEFAULT, action) {
  switch (action.type) {

    case 'GET_STUDIOS':
      return action.payload;

    default:
      return state;
  }
}

export default studiosReducer;
