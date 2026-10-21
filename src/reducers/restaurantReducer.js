import reservationsReducer from "./reservationsReducer";
import menuItemsReducer from "./menuItemsReducer";
import tablesReducer from "./tablesReducer";

const applyReservations = (state, action) => ({
  ...state,
  ...reservationsReducer({ reservations: state.reservations }, action),
});

const applyTables = (state, action) => ({
  ...state,
  ...tablesReducer({ tables: state.tables }, action),
});

// The form stores the table id as a string, so compare loosely by string.
const findTable = (state, tableId) =>
  state.tables.find((table) => String(table.id) === String(tableId));

export default function restaurantReducer(state, action) {
  switch (action.type) {
    case "ADD_RESERVATION": {
      const next = applyReservations(state, action);
      const { table: tableId, reservationStatus, partySize } = action.payload;
      const table = findTable(next, tableId);
      if (reservationStatus !== "seated" || !table) return next;
      return applyTables(next, {
        type: "SEAT_TABLE",
        payload: { id: table.id, guests: Number.parseInt(partySize, 10) || 0 },
      });
    }
    case "EDIT_RESERVATION": {
      const existing = state.reservations.find(
        (reservation) => reservation.id === action.payload.id,
      );
      const next = applyReservations(state, action);
      const updated = next.reservations.find(
        (reservation) => reservation.id === action.payload.id,
      );
      const table = updated && findTable(next, updated.table);
      if (
        !existing ||
        !table ||
        updated.reservationStatus !== "completed" ||
        existing.reservationStatus === "completed"
      ) {
        return next;
      }
      return applyTables(next, {
        type: "CLEAR_TABLE",
        payload: { id: table.id },
      });
    }
    case "REMOVE_RESERVATION": {
      // Look up the reservation before it is removed.
      const existing = state.reservations.find(
        (reservation) => reservation.id === action.payload.id,
      );
      const next = applyReservations(state, action);
      const table = existing && findTable(next, existing.table);
      if (!table || existing.reservationStatus !== "seated") return next;
      return applyTables(next, {
        type: "CLEAR_TABLE",
        payload: { id: table.id },
      });
    }
    case "ADD_MENU_ITEM":
    case "TOGGLE_MENU_ITEM":
    case "REMOVE_MENU_ITEM":
    case "EDIT_MENU_ITEM":
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
