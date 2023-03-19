import React from "react";
import "./Note.css";
const Note = ({ note }) => {
  var hours = note.date.substring(15,17);
  return (
    <div className="note-tile">
      <div className="date-tile">{note.date.substring(15, 21)}{hours >= 12 ? ' pm' : ' am'}<br/>{note.date.substring(0,15)}</div>
      <div className="text-tile">{note.text}</div>
    </div>
  );
};

export default Note;
