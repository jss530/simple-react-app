
const INITIAL = {
  studios: [{
    id: 1,
    "name": "ABC Yoga",
    "phone": "212-555-5555"
  }, {
    id: 2,
    "name": "Pure Yoga",
    "phone": "212-123-4567"
  }, {
    id: 3,
    "name": "Mindful Studio",
    "phone": "212-345-6724"
  }],
  activeStudio: {
    id: 4,
    "name": "Jewel Yoga",
    "phone": "347-374-0938"
  }
};

function studiosReducer (state = INITIAL, action) {
  switch (action.type) {

    case 'GET_STUDIOS':
      return action.payload;

    default:
      return state;
  }
}

export default studiosReducer;
