import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import RestaurantProvider from "./context/RestaurantProvider.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RestaurantProvider>
      <App />
    </RestaurantProvider>
  </StrictMode>,
);
