import React from "react";
import NoteList from "./NoteList";
import NoteInput from "./NoteInput";
import Icon from "./Icon";
import "./Group.css";
const Group = ({ group, color, notes, addNote }) => {
  let iconColor = "";
  let name = group.replaceAll("%20", " ");
  for(let i=0; i<color.length; i++){
    if(color[i].groupName === name){
      iconColor = color[i].color;
    }
  }
  return (
    <div className="notes-view">
      <div className="group-header">
        <Icon text= {group.substring(0, 1)}  color = {iconColor}/>
        <div className="title">{name}</div>
      </div>
      <NoteList notes={notes} />
      <NoteInput addNote={addNote} />
    </div>
  );
};

export default Group;
