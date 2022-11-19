import Link from "next/link";
import classes from "./Header.module.css";

function MusxHeader() {
  return (
    <header className={classes.header}>
      <div className={classes.h1}>MusX</div>
      <div className={classes.headerflex}>
        <Link href="/" className={classes.h2}>
          Home
        </Link>
        <Link href="/favorite" className={classes.h2}>
          Favorite
        </Link>
        <Link href="/library" className={classes.h2}>
          Your Library
        </Link>
        <Link href="/premium" className={classes.h2}>
          Premium
        </Link>
        <Link href="/login" className={classes.h2}>
          LogIN
        </Link>
      </div>
    </header>
  );
}
export default MusxHeader;
