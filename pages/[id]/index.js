import fetch from "isomorphic-fetch";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Confirm, Button, Lodader } from "semantic-ui-react";
import classes from "./User.module.css";
import MusxHeader from "../../components/common/navbar";
import Link from "next/link";

const UserPage = ({ user }) => {
  const [confirm, setConfirm] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();

  return (
    <>
      <>
        <header className={classes.header}>
          <div className={classes.h1}>MusX</div>
          <div className={classes.headerflex}>
            <Link href={`${user._id}/`} className={classes.h2}>
              Home
            </Link>
            <Link href={`${user._id}/favorite`} className={classes.h2}>
              Favorite
            </Link>
            <Link href={`${user._id}/library`} className={classes.h2}>
              Your Library
            </Link>
            <Link href={`${user._id}/premium`} className={classes.h2}>
              Premium
            </Link>
            <Link href={`${user._id}/logout`} className={classes.h2}>
              LogOut
            </Link>
          </div>
        </header>
      </>
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
              <Link href={`/${user._id}/edit`}>
                <button className={classes.button}>Edit Profile</button>
              </Link>
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

UserPage.getInitialProps = async ({ query: { id } }) => {
  const res = await fetch(`http://localhost:3000/api/creator/${id}`);
  const { data } = await res.json();

  return { user: data };
};

export default UserPage;
