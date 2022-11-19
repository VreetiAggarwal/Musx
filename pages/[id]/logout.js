import { useRouter } from "next/router";
import MusxHeader from "../../components/common/navbar";
import Link from "next/link";
import classes from "./User.module.css";
import fetch from "isomorphic-fetch";
import LogOut from "../../components/common/logout";

function Logoutprofile({ user }) {
  const router = useRouter();

  return (
    <>
      <>
        <header className={classes.header}>
          <div className={classes.h1}>MusX</div>
          <div className={classes.headerflex}>
            <Link
              href={{
                pathname: "/[id]/",
                query: { id: `${user._id}` },
              }}
              className={classes.h2}
            >
              Home
            </Link>
            <Link
              href={{
                pathname: "/[id]/favorite",
                query: { id: `${user._id}` },
              }}
              className={classes.h2}
            >
              Favorite
            </Link>
            <Link
              href={{ pathname: "/[id]/library", query: { id: `${user._id}` } }}
              className={classes.h2}
            >
              Your Library
            </Link>
            <Link
              href={{ pathname: "/[id]/premium", query: { id: `${user._id}` } }}
              className={classes.h2}
            >
              Premium
            </Link>
            <Link
              href={{
                pathname: "/[id]/logout",
                query: { id: `${user._id}` },
              }}
              className={classes.h2}
            >
              LogOut
            </Link>
          </div>
        </header>
      </>
      <div>
        <LogOut />
      </div>
    </>
  );
}

Logoutprofile.getInitialProps = async ({ query: { id } }) => {
  const res = await fetch(`http://localhost:3000/api/creator/${id}`);
  const { data } = await res.json();

  return { user: data };
};

export default Logoutprofile;
