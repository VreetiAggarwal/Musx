import Acc from "../../components/common/account";
import fetch from "isomorphic-fetch";
import MusxHeader from "../../components/common/navbar";
import { useRouter } from "next/router";

function Accountpage() {
  return (
    <div>
      <MusxHeader />
      <Acc />
    </div>
  );
}

Accountpage.getInitialProps = async ({ query: { id } }) => {
  const res = await fetch(`http://localhost:3000/api/creator/${id}`);
  const { data } = await res.json();

  return { user: data };
};

export default Accountpage;
