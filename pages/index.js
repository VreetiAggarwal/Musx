import Head from "next/head";
import DiscoverNew from "../components/common/banner";
import fetch from "isomorphic-fetch";
import dbConnect from "../util/dbConnect";
import { useState } from "react";
import Link from "next/link";
import classes from "../components/common/navbar/Header.module.css";
import MusxHeader from "../components/common/navbar";
import Modal from "../components/common/navbar/Modal";

function Home({ user }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  function deleteHandler() {
    setModalIsOpen(true);
  }

  function closeMortalHandler() {
    setModalIsOpen(false);
  }

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@200,300,400;500;700&family=Montserrat:wght@100;200;300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>
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
              {user.map((user) => {
                return (
                  <div key={user._id}>
                    <Link href={`/${user._id}`} className={classes.h2}>
                      Profile
                    </Link>
                  </div>
                );
              })}
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
          <DiscoverNew />
        </>
      </div>
    </>
  );
}

Home.getInitialProps = async (user) => {
  const res = await fetch("http://localhost:3000/api/creator");
  const { data } = await res.json();
  return { user: data };
};

export default Home;
