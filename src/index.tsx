import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AppProvider } from "./context/AppContext";
import { AuthProvider } from "./context/AuthContext";
import { ApolloProvider } from "@apollo/client/react";
import apiClient from "apollo/apiClient";

ReactDOM.render(
  <AppProvider>
    <ApolloProvider client={apiClient}>
      <AuthProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </AuthProvider>
    </ApolloProvider>
  </AppProvider>,
  document.getElementById("root")
);

reportWebVitals();
