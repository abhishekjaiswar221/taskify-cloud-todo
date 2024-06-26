import { Route, Routes } from "react-router-dom";
import Home from "@/pages/Home";
import SignUp from "@/pages/SignUp";
import SignIn from "@/pages/SignIn";
import UserDashboard from "@/pages/UserDashboard";
import NoteItem from "./components/NoteItem";
import AddNote from "./components/AddNote";

const App = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user-dashboard" element={<UserDashboard />} />
          <Route path="/note-item" element={<NoteItem />} />
          <Route path="/add-note" element={<AddNote />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
      </div>
    </>
  );
};
export default App;
