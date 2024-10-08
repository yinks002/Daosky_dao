import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { InternetIdentityProvider } from "ic-use-internet-identity";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Theme } from "@radix-ui/themes";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
      <InternetIdentityProvider>
    <Theme>
      <App />
    </Theme>
    </InternetIdentityProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
