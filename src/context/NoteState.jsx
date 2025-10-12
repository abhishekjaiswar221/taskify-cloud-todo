import React, { useState } from "react";
import NoteContext from "@/context/noteContext.js";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const NoteState = ({ children }) => {
  const [notes, setNotes] = useState([]);

  // Add Notes
  const addNote = async ({ title, description, tag }) => {
    const response = await fetch(`${API_BASE_URL}/api/notes/add-note`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("authToken"),
      },
      body: JSON.stringify({ title, description, tag }),
    });

    const note = await response.json();
    setNotes(notes.concat(note));
    console.log(note);
  };

  return (
    <NoteContext.Provider value={{ addNote }}>{children}</NoteContext.Provider>
  );
};

NoteState.propTypes = {
  // children: PropTypes.node.isRequired,
};

export default NoteState;
