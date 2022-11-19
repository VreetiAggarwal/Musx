import MusxHeader from "../components/common/navbar";
import UserPage from "./[id]";

function profile() {
  return (
    <div>
      <MusxHeader />
      <UserPage />
    </div>
  );
}

profile.getInitialProps = async ({ query: { id } }) => {
  const res = await fetch(`http://localhost:3000/api/creator/${id}`);
  const { data } = await res.json();

  return { user: data };
};

export default profile;
