import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import CarDetails from "./modules/Homepage/CarDetails";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CarDetails />
  </StrictMode>
);
