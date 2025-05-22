import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";

const ListItem = () => {
  return (
    <div className="listItem">
      <input type="text" placeholder="Your List Item..." />
      <div className="buttons">
        <button className="editButton">
          <FaRegEdit />
        </button>
        <button className="deleteButton">
          <FaRegTrashAlt />
        </button>
      </div>
    </div>
  );
};

export default ListItem;
