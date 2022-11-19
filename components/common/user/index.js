import fetch from "isomorphic-fetch";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Confirm, Button, Lodader } from "semantic-ui-react";
import classes from "./User.module.css";

const Userpg = ({ user }) => {
  const [confirm, setConfirm] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();

  return (
    <>
      <div>
        <div className={classes.fullheight}>
          <div className={classes.userinfo}>
            <img
              className={classes.userimage}
              src="https://tse1.mm.bing.net/th?id=OIP.zsaaVp0tIiSnOK-1rYpBnwAAAA&pid=Api&P=0"
              alt="userPic"
            />
            <h1 className={classes.h1}>{user.username}</h1>
            <h3 className={classes.h3}>{user.email}</h3>
            <div className={classes.user}>
              <a href="#" className={classes.button}>
                Edit Profile
              </a>
            </div>
          </div>
          <div className={classes.playlist}>
            <h1>Your Playlist</h1>
          </div>
        </div>
      </div>
    </>
  );
};

Userpg.getInitialProps = async ({ query: { id } }) => {
  const res = await fetch(`http://localhost:3000/api/creator/${id}`);
  const { data } = await res.json();

  return { user: data };
};

export default Userpg;
