import { useSelector, useDispatch } from "react-redux";
import { closeAddModal } from "../redux/modalSlice";

const AddModal = () => {
  const { newModal } = useSelector((state) => state.modal);

  const dispatch = useDispatch();

  return (
    <div className={newModal ? "modal active" : "modal"}>
      <div className="wrapper">
        <div className="topbar">
          <h3 className="mark">Todo App</h3>

          <button
            className="closeButton"
            onClick={() => {
              dispatch(closeAddModal());
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
              type="button"
              onClick={() => {
                dispatch(closeAddModal());
              }}
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
