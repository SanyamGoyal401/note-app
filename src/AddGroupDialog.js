import React, { useState, useEffect } from "react";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { DialogContent } from "@mui/material";
import "./AddGroupForm.css";
const AddGroupDialog = ({ addGroup }) => {
  const [newGroup, setNewGroup] = useState("");
  const [openDialog, handleDisplay] = useState(false);

  let color = "#B38BFA";
  const handleClose = () => {
    handleDisplay(false);
  };
  const setcolor = (colorname) => {
    console.log(`set color to ${colorname}`);
    color = colorname;
  };

  const openDialogBox = () => {
    handleDisplay(true);
  };

  const dialogStyle = {
    padding: "24px",
    fontSize: "24px",
    fontWeight: "bold",
  };

  const buttonStyle = {
    width: "10rem",
    fontsize: "2rem",
    height: "2.5rem",
    padding: "5px",
    borderRadius: "20px",
    backgroundColor: "black",
    color: "White",
    cursor: "pointer",
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addGroup(newGroup, color);
    setNewGroup("");
  };

  useEffect(() => {
    let colorBox = document.getElementsByClassName("color");
    for (let i = 0; i < colorBox.length; i++) {
      colorBox[i].addEventListener("click", () => {
          for (let j = 0; j < colorBox.length; j++) {
              if(colorBox[i].classList.contains("addBorder")){
                  colorBox[i].classList.remove("addBorder");
                }
            }
        colorBox[i].classList.add("addBorder");
      });
    }
  });

  return (
    <>
      <button style={buttonStyle} onClick={openDialogBox}>
        Create Notes
      </button>
      <Dialog
        onClose={handleClose}
        open={openDialog}
        fullWidth={true}
        maxWidth={"xs"}
      >
        <DialogTitle style={dialogStyle}>Create New Notes</DialogTitle>
        <DialogContent>
          <div className="addGroup">
            <div className="groupname">
              <div>Group Name</div>
              <div>
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    placeholder="Enter group name"
                    value={newGroup}
                    onChange={(event) => setNewGroup(event.target.value)}
                  />
                </form>
              </div>
            </div>
            <div className="groupColor">
              <div>Choose Color</div>
              <div className="colorPalette">
                <div
                  className="color violet"
                  onClick={() => setcolor("#B38BFA")}
                ></div>
                <div
                  className="color pink"
                  onClick={() => setcolor("#FF79F2")}
                ></div>
                <div
                  className="color blue"
                  onClick={() => setcolor("#43E6FC")}
                ></div>
                <div
                  className="color orange"
                  onClick={() => setcolor("#F19576")}
                ></div>
                <div
                  className="color darkblue"
                  onClick={() => setcolor("#0047FF")}
                ></div>
                <div
                  className="color seablue"
                  onClick={() => setcolor("#6691FF")}
                ></div>
              </div>
            </div>
            <div className="AddGroupbtn" type="submit" onClick={handleSubmit}>
              Add Group
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddGroupDialog;
