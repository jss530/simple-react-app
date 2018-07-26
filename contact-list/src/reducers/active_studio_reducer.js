const INITIAL = {
  studios: [{
    "name": "ABC Yoga",
    "phone": "212-555-5555"
  }, {
    "name": "Pure Yoga",
    "phone": "212-123-4567"
  }, {
    "name": "Mindful Studio",
    "phone": "212-345-6724"
  }],
  activeStudio: {
    "name": "Jewel Yoga",
    "phone": "347-374-0938"
  }
};

function activeStudioReducer (state = INITIAL, action) {
  switch (action.type) {

    case 'STUDIO_SELECTED':
      return action.payload;

    default:
      return state;
  }
}

export default activeStudioReducer;
