import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import TimeLine from "./pages/TimeLine";
import Post from "./components/PostComponent";

import { AuthProvider } from "./context/authContext";

import Header from "./components/Header";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
<<<<<<< HEAD
          <Route path="/signup" element={<SignUp />} />
=======
          <Route path="/signup" element={<SignUp />} />    
>>>>>>> f2717976e09209ad7d80b1244e05334ce1130308
          <Route path="/timeline" element={<TimeLine />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
