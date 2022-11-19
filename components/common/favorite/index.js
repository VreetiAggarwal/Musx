import react from "react";
import classes from "./Fav.module.css";

function Favlist() {
  return (
    <div>
      <section>
        <div className={classes.bg}>
          <h1 className={classes.h1}>YOUR FAVORITES</h1>
        </div>
        <div className={classes.flex}>
          <svg
            className={classes.icon}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
              clip-rule="evenodd"
            ></path>
          </svg>

          <svg
            className={classes.icon}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clip-rule="evenodd"
            ></path>
          </svg>

          <svg
            className={classes.icon}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
          </svg>
        </div>
        <div className={classes.title}>
          <span className={classes.t}>#TITLE</span>
          <span className={classes.t}>ALBUM</span>
          <span className={classes.t}>DATE</span>
          <span className={classes.t}>TIME</span>
        </div>
        <div></div>
      </section>
    </div>
  );
}

export default Favlist;
