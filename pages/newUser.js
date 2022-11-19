import Sign from "../components/common/sign";

const NewUser = () => {
  const userForm = {
    username: "",
    email: "",
    pw: "",
  };

  return <Sign formId="add-user-form" userForm={userForm} />;
};

export default NewUser;
