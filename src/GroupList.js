import React from "react";
import { Link } from "react-router-dom";
import Icon from "./Icon";

const GroupList = ({ groups, clickCount, setClickCount }) => {
  let activeGroup = window.location.pathname.split("/")[2];
  return (
    <div
    style={{marginTop:"12%"}}
    >
      {groups.map((group) => (
        <div
          key={group.groupName}
          style={{
            fontSize: "19px",
            display: "flex",
            alignItems: "center",
            margin: "3% 0 2% 3%",
            borderRadius: "20px 0 0 20px",
            padding: "14px",
            backgroundColor: activeGroup === group.groupName ? "#F7ECDC" : "white"
          }}
        >
          <Icon text={group.groupName.substring(0, 1)} color={group.color} />
          <Link
            to={`/group/${group.groupName}`}
            onClick={() => {
              setClickCount(clickCount + 1);
            }}
            style={{
              marginLeft: "13px",
              color: "black",
              textDecoration: "none",
            }}
          >
            {group.groupName}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default GroupList;
