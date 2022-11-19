import classes from "./Modal.module.css";
import Link from "next/link";

function Modal(props) {
  function cancelHandler() {
    props.onCancel();
  }

  function subscribeHandler() {
    props.onSubscribe();
  }

  return (
    <div className={classes.modal}>
      <p className={classes.para}>New Account Created!</p>
      <Link href="/setup">
        <button className={classes.button} onClick={subscribeHandler}>
          NEXT
        </button>
      </Link>
    </div>
  );
}

export default Modal;
