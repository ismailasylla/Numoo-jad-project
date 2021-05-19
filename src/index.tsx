import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AppProvider } from "./context/AppContext";
import { AuthProvider } from "./context/AuthContext";

ReactDOM.render(
  <AppProvider>
    <AuthProvider>
      <React.StrictMode>
        <App />,
      </React.StrictMode>
    </AuthProvider>
  </AppProvider>,
  document.getElementById("root")
);

reportWebVitals();
