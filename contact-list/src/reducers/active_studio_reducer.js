import DEFAULT from "../state/state";

function activeStudioReducer (state = DEFAULT, action) {
  switch (action.type) {

    case 'STUDIO_SELECTED':
      return action.payload;

    default:
      return state;
  }
}

export default activeStudioReducer;
