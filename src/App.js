import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import TimeLine from "./pages/TimeLine";
import HashtagTimeLine from "./pages/Hashtag";

import { AuthProvider } from "./context/authContext";
import { UserProvider } from "./context/userContext";
import UserTimeLine from "./pages/UserTimeline";

export default function App() {
  const [user, setUser] = useState();
  return (
    <AuthProvider>
      <UserProvider user={user} setUser={setUser}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/timeline" element={<TimeLine />} />
            <Route path="/user/:id" element={<UserTimeLine />} />
            <Route path="/hashtag/:name" element={<HashtagTimeLine />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </AuthProvider>
  );
}
