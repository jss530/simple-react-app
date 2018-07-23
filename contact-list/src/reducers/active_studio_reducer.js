function activeStudioReducer (state = null, action) {
  switch (action.type) {

    case 'STUDIO_SELECTED':
      return action.payload;

    default:
      return state;
  }
}

export default activeStudioReducer;
