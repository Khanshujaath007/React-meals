import "./Modal.css";
import ReactDOM from "react-dom";
const Cart = (props) => {
  return (
    <div className="modal">
      {/* <button className="modal-close" onClick={props.onConfirm}>
        close
      </button> */}
      <div className="modal-content"> {props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Cart onConfirm={props.onConfirm} children={props.children} />,
        document.getElementById("modal")
      )}
    </>
  );
};

export default Modal;
