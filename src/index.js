import React, { Component } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";

import { createStore } from "redux";
import { Provider } from "react-redux";
//import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "./reducers";
import { addCharacterById } from "./actions";

// const store = configureStore({
//   reducer: {},
// });

const store = createStore(rootReducer);
//console.log("store.getState()", store.getState());
//store.subscribe(() => console.log("store", store.getState()));
//store.dispatch(addCharacterById(2));

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
