import classes from "./Discover.module.css";
import { useState } from "react";
import Card from "./Card";
import { Carousel } from "react-responsive-carousel";
import Modal from "./Modal";
import Backdrop from "./Backdrop";
import MusxHeader from "../navbar";
import React, { Component } from "react";
import ReactDOM from "react-dom";

function DiscoverNew() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  function deleteHandler() {
    setModalIsOpen(true);
  }

  function closeMortalHandler() {
    setModalIsOpen(false);
  }

  const [isShowing, setIsShowing] = useState(false);
  return (
    <>
      <section className={classes.discover}>
        <div className={classes.globalflex}>
          <div className={classes.flex}>
            <span>
              <h1 className={classes.heading}>LISTEN</h1>
            </span>
            <span>
              <h1 className={classes.heading2}>ANYTIME</h1>
              <h1 className={classes.heading2}>ANYWHERE</h1>
            </span>
          </div>
          <button className={classes.button} onClick={deleteHandler}>
            <div>START FREE TRIAL</div>
          </button>
          {modalIsOpen && (
            <Modal
              onSubscribe={closeMortalHandler}
              onCancel={closeMortalHandler}
            />
          )}
          {modalIsOpen && <Backdrop onCancel={closeMortalHandler} />}
        </div>
        {/* <Carousel>
          <div>
            <img src="assets/1.jpeg" />
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img src="assets/2.jpeg" />
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img src="assets/3.jpeg" />
            <p className="legend">Legend 3</p>
          </div>
        </Carousel>
        ReactDOM.render(
        <DiscoverNew />, document.querySelector('.demo-carousel')); */}
      </section>
    </>
  );
}

export default DiscoverNew;
