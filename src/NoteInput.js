import React, { useState } from "react";
import "./NoteInput.css";
const NoteInput = ({ addNote }) => {
  const [note, setNote] = useState("");

  const handleSubmit = (e) => {
    console.log("button clicked");
    e.preventDefault();
    if (note.trim()) {
      addNote(note.trim());
      setNote("");
    }
  };

  return (
    <div className="note-input">
      <div className="note-input-form">
        <div className="form-input">
          <form onSubmit={handleSubmit}>
            <textarea
              type="text"
              placeholder="Type your note here..."
              value={note}
              className="note-input-text"
              onChange={(e) => setNote(e.target.value)}
            ></textarea>
          </form>
        </div>
        <div className="submit-btn" onClick={handleSubmit}>
          <img src={process.env.PUBLIC_URL + "/Vector.png"} alt="" />
        </div>
        {/* <button type="submit" onClick={handleSubmit}>
            Enter
          </button> */}
      </div>
    </div>
  );
};

export default NoteInput;
