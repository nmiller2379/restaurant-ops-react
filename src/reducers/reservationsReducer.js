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
    case "EDIT_RESERVATION":
      return {
        ...state,
        reservations: state.reservations.map((reservation) =>
          reservation.id === action.payload.id
            ? { ...reservation, ...action.payload }
            : reservation,
        ),
      };
    default:
      return state;
  }
}

export default reservationsReducer;