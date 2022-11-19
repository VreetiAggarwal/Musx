import Link from "next/link";

export default function Status() {
  return (
    <div>
      <div>PLEASE CHOOSE ANY ONE OF THE FOLLOWING!</div>
      <Link href="/creator/creator">
        <button>CONTENT-CREATOR</button>
      </Link>
      <Link href="/user/user">
        <button>USER</button>
      </Link>
    </div>
  );
}
