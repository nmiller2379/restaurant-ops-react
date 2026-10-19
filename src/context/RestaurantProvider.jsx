import { useReducer, useContext, useEffect } from "react";
import RestaurantContext from "./RestaurantContext";
import restaurantReducer from "../reducers/restaurantReducer";
import { loadState, saveState } from "../utils/storage";

export default function RestaurantProvider({ children }) {
  const [state, dispatch] = useReducer(restaurantReducer, loadState());

  useEffect(() => {
    saveState(state);
  }, [state]);

  return (
    <RestaurantContext.Provider value={{ state, dispatch }}>
      {children}
    </RestaurantContext.Provider>
  );
}
