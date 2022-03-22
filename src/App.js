import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TimeLine from "./pages/TimeLine";
import { AuthProvider } from "./context/authContext";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/timeline" element={<TimeLine />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}