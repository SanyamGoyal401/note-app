import React from "react";
const Icon = ({ text, color }) => {
  return (
    <div
      className="icon"
      style={{
        borderRadius: "50%",
        width: "34px",
        height: "34px",
        padding: "10px",
        color: "#fff",
        textAlign: "center",
        fontSize: "32px",
        backgroundColor: color,
      }}
    >
      {text}
    </div>
  );
};

export default Icon;
