import { useContext, useState } from "react";
import UserContext from "./Contexts";

function EditProfile() {
  const { setUserName } = useContext(UserContext);

  const [newUserName, setNewUserName] = useState("");

  const handleChange = (e) => {
    setNewUserName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserName(newUserName);
  };
  return (
    <>
      <div>
        <form action="submit" onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={newUserName} />
        <button type="submit" >
          Update UserName
        </button></form>
      </div>
    </>
  );
}

export default EditProfile;
