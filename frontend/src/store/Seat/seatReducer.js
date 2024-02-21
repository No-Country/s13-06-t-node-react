const initialState = {
  seatQuantity: 1,
  seatSelected: [] // Default value
};

const seatReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SEAT_QUANTITY':
      return {
        ...state,
        seatQuantity: action.payload
      };
    // TODO: se repite dos veces debido al componente con el useEffect
    // agregue un atado con alambre mientras tanto
    case 'ADD_SEAT_SELECTED':
      if (
        state.seatSelected.some(
          (seat) =>
            seat.id === action.payload.id &&
            seat.section === action.payload.section
        )
      ) {
        // If the seat is already selected, ignore the action
        return state;
      }
      return {
        ...state,
        seatSelected: [...state.seatSelected, action.payload]
      };
    case 'REMOVE_SEAT_SELECTED':
      return {
        ...state,
        seatSelected: state.seatSelected.filter(
          (seat) =>
            !(
              seat.id === action.payload.id &&
              seat.section === action.payload.section
            )
        )
      };
    default:
      return state;
  }
};

export default seatReducer;
