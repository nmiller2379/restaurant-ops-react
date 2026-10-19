import reservationsReducer from "./reservationsReducer";
import menuItemsReducer from "./menuItemsReducer";
import tablesReducer from "./tablesReducer";

export default function restaurantReducer(state, action) {
  switch (action.type) {
    case "ADD_RESERVATION":
    case "REMOVE_RESERVATION":
      return {
        ...state,
        ...reservationsReducer({ reservations: state.reservations }, action),
      };
    case "ADD_MENU_ITEM":
    case "TOGGLE_MENU_ITEM":
    case "REMOVE_MENU_ITEM":
      return {
        ...state,
        ...menuItemsReducer({ menuItems: state.menuItems }, action),
      };
    case "ADD_TABLE":
    case "REMOVE_TABLE":
    case "EDIT_TABLE":
    case "SEAT_TABLE":
    case "CLEAR_TABLE":
      return {
        ...state,
        ...tablesReducer({ tables: state.tables }, action),
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}
