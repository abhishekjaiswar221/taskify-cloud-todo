import React from "react";
import "./main.css";
import App from "./App.jsx";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import NoteState from "@/context/NoteState.jsx";
import { Toaster } from "@/components/ui/toaster";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NoteState>
      <Router>
        <Toaster />
        <App />
      </Router>
    </NoteState>
  </React.StrictMode>
);
