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
      <p className={classes.para}>PLEASE LOGIN TO USE THIS FEATURE</p>
      <Link href="/subscribe">
        <button className={classes.button} onClick={subscribeHandler}>
          LogIN
        </button>
      </Link>
      <button className={classes.button} onClick={cancelHandler}>
        Cancel
      </button>
      {/* <p className={classes.para2}>
        Don't have an account?{" "}
        <Link href="/">
          <a className={classes.a} href="#">
            SIGN IN
          </a>
        </Link>
      </p> */}
    </div>
  );
}

export default Modal;
