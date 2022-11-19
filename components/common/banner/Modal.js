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
      <p className={classes.para}>START FREE TRIAL?</p>
      <Link href="/subscribe">
        <button className={classes.button} onClick={subscribeHandler}>
          Subscribe
        </button>
      </Link>
      <button className={classes.button} onClick={cancelHandler}>
        Cancel
      </button>
      <p className={classes.para2}>
        Already a member?{" "}
        <Link href="/login">
          <a className={classes.a} href="#">
            Log IN
          </a>
        </Link>
      </p>
    </div>
  );
}

export default Modal;
