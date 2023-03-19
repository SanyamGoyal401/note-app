import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GroupList from "./GroupList";
import Group from "./Group";
import AddGroupDialog from "./AddGroupDialog";
import "./App.css";
const App = () => {
  const [groups, setGroups] = useState([]);
  const [notes, setNotes] = useState([]);
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    const storedGroups = JSON.parse(localStorage.getItem("groups")) || [];
    setGroups(storedGroups);
    const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(storedNotes);
  },[]);

  const addGroup = (groupName, color) => {
     const group = {groupName, color};
     if(groupName === "")return;
    const updatedGroups = [...groups, group];
    setGroups(updatedGroups);
    localStorage.setItem("groups", JSON.stringify(updatedGroups));
  };
  
  const addNote = (text) => {
    const id = Date.now().toString();
    const group = window.location.pathname.split("/")[2];
    const note = { id, text, group, date: new Date().toString(), lastUpdated: new Date()};
    const updatedNotes = [...notes, note];
    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  };

  const getNotesByGroup = (group) => {
    return notes.filter((note) => note.group === group);
  };

  const groupColor = (groupName) => {
    let name = groupName.replace("%20", " ");
    for(let i=0; i<groups.length; i++){
      if(groups[i].groupName === name){
        return groups[i].color;
      }
    }
  }
  return (
    <Router>
      <div className="app-container">
        <div className="group-list-container">
          <div className="group-title">Pocket Notes</div>
          <AddGroupDialog addGroup={addGroup} />
          <GroupList groups={groups} clickCount = {clickCount} setClickCount = {setClickCount} />
        </div>
        <div className="group-container">
          <Routes>
            <Route path="/" element={<p>Welcome to Notes App</p>} />
            <Route
              exact path="/group/:group"
              element={
                <Group
                  group={window.location.pathname.split("/")[2]}
                  color={groupColor("")}
                  notes={getNotesByGroup(
                    window.location.pathname.split("/")[2]
                  )}
                  addNote={addNote}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
