const initialState = {
  travelSelected: {} // Default value
};

const travelReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TRAVEL_SELECTED':
      return {
        ...state,
        travelSelected: action.payload
      };
    default:
      return state;
  }
};

export default travelReducer;
