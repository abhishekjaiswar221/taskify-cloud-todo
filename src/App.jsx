import { Route, Routes } from "react-router-dom";
import Home from "@/pages/Home";
import About from "./pages/About";
import SignUp from "@/pages/SignUp";
import SignIn from "@/pages/SignIn";

const App = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
      </div>
    </>
  );
};
export default App;
