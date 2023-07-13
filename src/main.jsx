import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./app.css";
import { Provider } from "react-redux";

import DataProvider from "./context/dataprovider";
import store from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DataProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </DataProvider>
  </React.StrictMode>
);
