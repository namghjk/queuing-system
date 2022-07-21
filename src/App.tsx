import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.less";
import Auth from "./Page/Auth/Login";
import Home from "./Page/Home/Home";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/auth/*" element={<Auth />} />
        <Route path="/" element={<Navigate to="/Dashboard" replace />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </Provider>
  );
}

export default App;
