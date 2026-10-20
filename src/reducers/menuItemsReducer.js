function menuItemsReducer(state, action) {
  switch (action.type) {
    case "ADD_MENU_ITEM":
      console.log("Adding menu item:", action.payload);
      return {
        ...state,
        menuItems: [...state.menuItems, action.payload],
      };
    case "TOGGLE_MENU_ITEM":
      console.log("Toggling menu item:", action.payload);
      return {
        ...state,
        menuItems: state.menuItems.map((item) =>
          item.id === action.payload.id
            ? { ...item, available: !item.available }
            : item,
        ),
      };
    case "REMOVE_MENU_ITEM":
      return {
        ...state,
        menuItems: state.menuItems.filter(
          (item) => item.id !== action.payload.id,
        ),
      };
    default:
      return state;
  }
}

export default menuItemsReducer;
