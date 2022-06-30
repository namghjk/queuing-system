import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Auth from "./Page/Auth";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/auth/*" element={<Auth />} />
      </Routes>
    </div>
  );
}

export default App;
