import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/lib/integration/react';
import { store, persistor } from "./redux/store";
import { CircularProgress } from "@material-ui/core";

ReactDOM.render(
    <Provider store={store}>
    <PersistGate loading={<CircularProgress />} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>,
  document.getElementById("root")
);
