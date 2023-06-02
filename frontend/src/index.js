import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Kommunicate from "@kommunicate/kommunicate-chatbot-plugin";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//Kommunicate plugin init
Kommunicate.init("9f08bf80ee62045baca9c9b8bbed2508", {
  automaticChatOpenOnNavigation: true,
  popupWidget: true,
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
