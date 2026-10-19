const STORAGE_KEY = "restaurant_app_storage";

function loadState() {
  try {
    const savedState = localStorage.getItem(STORAGE_KEY);
    return savedState
      ? JSON.parse(savedState)
      : {
          menuItems: [],
          tables: [],
          reservations: [],
        };
  } catch (error) {
    console.error("Failed to load state from localStorage:", error);
    return {
      menuItems: [],
      tables: [],
      reservations: [],
    };
  }
}

function saveState(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (error) {
    console.error("Failed to save state to localStorage:", error);
  }
}

export { loadState, saveState };
