import PropTypes from "prop-types";
import { useContext, useState } from "react";
import UserContext from "./Contexts";
function EditProfile({ setIsEditingProfile }) {
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
      <div onBlur={() => setIsEditingProfile(false)}>
        <form action="submit" onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={handleChange}
            value={newUserName}
            className="inputbox"
          />
          <button type="submit">Update UserName</button>
        </form>
      </div>
    </>
  );
}

EditProfile.propTypes = {
  setIsEditingProfile: PropTypes.func.isRequired,
};
export default EditProfile;
