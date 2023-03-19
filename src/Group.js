import React from "react";
import NoteList from "./NoteList";
import NoteInput from "./NoteInput";
import Icon from "./Icon";
import "./Group.css";
const Group = ({ group, color, notes, addNote }) => {
  let name = group.replaceAll("%20", " ");
  return (
    <div className="notes-view">
      <div className="group-header">
        <Icon text= {group.substring(0, 1)}  color = {color}/>
        <div className="title">{name}</div>
      </div>
      <NoteList notes={notes} />
      <NoteInput addNote={addNote} />
    </div>
  );
};

export default Group;
