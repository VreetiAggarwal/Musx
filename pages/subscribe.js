import MusxHeader from "../components/common/navbar";
import SubPage from "../components/common/subscribe";
import classes from "../components/common/navbar/Header.module.css";
import Modal from "../components/common/navbar/Modal";
import Link from "next/link";
import { useState } from "react";

function Sub() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  function deleteHandler() {
    setModalIsOpen(true);
  }

  function closeMortalHandler() {
    setModalIsOpen(false);
  }
  return (
    <div>
      <>
        <header className={classes.header}>
          <div className={classes.h1}>MusX</div>
          <div className={classes.headerflex}>
            <Link href="/" className={classes.h2}>
              Home
            </Link>
            <button
              // href="/favorite"
              className={classes.h2}
              onClick={deleteHandler}
            >
              Favorite
            </button>
            <button
              // href="/library"
              className={classes.h2}
              onClick={deleteHandler}
            >
              Your Library
            </button>
            <Link href="/premium" className={classes.h2}>
              Premium
            </Link>
            <Link href="/login" className={classes.h2}>
              LogIN
            </Link>
            {modalIsOpen && (
              <Modal
                onSubscribe={closeMortalHandler}
                onCancel={closeMortalHandler}
              />
            )}
            {/* {modalIsOpen && <Backdrop onCancel={closeMortalHandler} />} */}
          </div>
        </header>
        {modalIsOpen && (
          <Modal
            onSubscribe={closeMortalHandler}
            onCancel={closeMortalHandler}
          />
        )}
      </>
      <SubPage />
    </div>
  );
}

export default Sub;
