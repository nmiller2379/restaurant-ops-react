function tablesReducer(state, action) {
  switch (action.type) {
    case "ADD_TABLE":
      return {
        ...state,
        tables: [...state.tables, action.payload],
      };
    case "REMOVE_TABLE":
      return {
        ...state,
        tables: state.tables.filter((table) => table.id !== action.payload.id),
      };
    case "EDIT_TABLE":
      return {
        ...state,
        tables: state.tables.map((table) =>
          table.id === action.payload.id
            ? { ...table, ...action.payload }
            : table,
        ),
      };
    case "SEAT_TABLE":
      return {
        ...state,
        tables: state.tables.map((table) =>
          table.id === action.payload.id
            ? { ...table, status: "seated", guests: action.payload.guests }
            : table,
        ),
      };
    case "CLEAR_TABLE":
      return {
        ...state,
        tables: state.tables.map((table) =>
          table.id === action.payload.id
            ? { ...table, status: "available", guests: 0 }
            : table,
        ),
      };
    default:
      return state;
  }
}
export default tablesReducer;
