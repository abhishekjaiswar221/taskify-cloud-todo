import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "@/pages/Home";
import SignUp from "@/pages/SignUp";
import SignIn from "@/pages/SignIn";
import AddNote from "./components/AddNote";
import NextTopLoader from "nextjs-toploader";
import NoteItem from "./components/NoteItem";
import UserDashboard from "@/pages/UserDashboard";
import ErrorPage from "./components/ErrorPage";

const App = () => {
  return (
    <>
      <div>
        <NextTopLoader
          color="#3b5d22"
          initialPosition={0.08}
          crawlSpeed={200}
          height={2.5}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px #2299DD,0 0 5px #2299DD"
          template='<div class="bar" role="bar"><div class="peg"></div></div> 
          <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
          zIndex={1600}
          showAtBottom={false}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user-dashboard" element={<UserDashboard />} />
          <Route path="/note-item" element={<NoteItem />} />
          <Route path="/add-note" element={<AddNote />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </>
  );
};
export default App;
