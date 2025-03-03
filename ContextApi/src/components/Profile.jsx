import { useContext, useState } from "react";
import UserContext from "./Contexts";
import EditProfile from "./EditProfile";

function Profile() {
  const { userName } = useContext(UserContext);
  const [editProfileUseNameFlag, setEditProfileUseNameFlag] = useState(false);
  return (
    <>
      <div>My Username Is {userName}</div>
      <button
        type="button"
        onClick={() => setEditProfileUseNameFlag(!editProfileUseNameFlag)}
      >
        Edit Profile userName
      </button>
      <div>
        {editProfileUseNameFlag ? <EditProfile/>:""}
      </div>
    </>
  );
}

export default Profile;
