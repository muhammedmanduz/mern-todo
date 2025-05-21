import React from "react";

const Topbar = () => {
  return (
    <div className="topbar">
      <h3 className="mark">Todo App</h3>
      <div className="searchEngine">
        <input type="text" placeholder="Search in your list" />
        <button className="addButton">+</button>
      </div>
    </div>
  );
};

export default Topbar;
