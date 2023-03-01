import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "./components/Context/ThemeContext";
import { SwitchProvider } from "./components/Context/SwitchContext";
import { BrowserRouter } from "react-router-dom";
// eslint-disable-next-line
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import userReducer from './features/Users';
import contactReducer from "./features/Contacts";
export const store = configureStore({
  reducer: {
    users: userReducer,
    contacts: contactReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <SwitchProvider>
          <Provider store={store}>
            <App />
          </Provider>
        </SwitchProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
