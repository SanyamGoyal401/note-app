import React, { useState } from "react";

const AddGroupForm = ({ addGroup }) => {
  const [newGroup, setNewGroup] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    addGroup(newGroup);
    setNewGroup("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter group name"
        value={newGroup}
        onChange={(event) => setNewGroup(event.target.value)}
      />
      <button type="submit">Add Group</button>
    </form>
  );
};

export default AddGroupForm;
