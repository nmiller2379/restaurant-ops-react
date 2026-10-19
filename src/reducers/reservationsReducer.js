function reservationsReducer(state, action) {
  switch (action.type) {
    case "ADD_RESERVATION":
      return {
        ...state,
        reservations: [...state.reservations, action.payload],
      };
    case "REMOVE_RESERVATION":
      return {
        ...state,
        reservations: state.reservations.filter(
          (reservation) => reservation.id !== action.payload.id,
        ),
      };
    default:
      return state;
  }
}

export default reservationsReducer;