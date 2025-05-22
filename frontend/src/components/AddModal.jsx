import React, { useState } from "react";

const AddModal = () => {
  const [addModal, setAddModal] = useState(true);

  return (
    <div className={addModal ? "modal active" : "modal"}>
      <div className="wrapper">
        <div className="topbar">
          <h3 className="mark">Todo App</h3>

          <button
            className="closeButton"
            onClick={() => {
              setAddModal(false);
            }}
          >
            X
          </button>
        </div>

        <form>
          <div className="content">
            <div className="area">
              <textarea type="text" required id=""></textarea>
              <span>Add New List</span>
            </div>
          </div>

          <div className="buttons">
            <button
              onClick={() => {
                setAddModal(false);
              }}
              type="button"
            >
              Cancel
            </button>
            <button type="submit">ADD</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddModal;
