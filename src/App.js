import React from "react";
import { Routes, Route } from "react-router-dom";
import LogInScreen from "./pages/LogInScreen/LogInScreen";
import Dashboard from "./pages/Dashboard/Dashboard";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LogInScreen />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}
