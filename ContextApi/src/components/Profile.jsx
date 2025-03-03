import { useState } from "react";
import EditProfile from "./EditProfile";

function Profile() {
  const [isEditingProfile, setIsEditingProfile] = useState(false);

  const toggleEditProfile = () => setIsEditingProfile((prev) => !prev);

  return (
    <div >
      <button type="button" onClick={toggleEditProfile} >
        Edit Profile Username
      </button>
      {isEditingProfile && (
        <EditProfile setIsEditingProfile={setIsEditingProfile} />
      )}
    </div>
  );
}

export default Profile;
