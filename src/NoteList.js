import React from "react";
import Note from "./Note";
import "./NoteList.css";
const NoteList = ({ notes }) => {
  return (
    <div className="note-list">
      {notes.map((note) => (
        <Note key={note.id} note={note} />
      ))}
    </div>
  );
};

export default NoteList;
