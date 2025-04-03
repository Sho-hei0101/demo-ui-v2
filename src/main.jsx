import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthProvider } from "./AuthContext";
import { AthlxPriceProvider } from "./AthlxPriceContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <AthlxPriceProvider>
        <App />
      </AthlxPriceProvider>
    </AuthProvider>
  </React.StrictMode>
);