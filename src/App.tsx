import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.less";
import Auth from "./Page/Auth/Login";
import Home from "./Page/Home/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/auth/*" element={<Auth />} />
        <Route path="/" element={<Navigate to="/Dashboard" replace />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
