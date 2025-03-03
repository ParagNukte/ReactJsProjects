import { useState } from "react";
import Profile from "./Profile";
import "../App.css";

function NavBar() {
  const [flagProfile, setFlagProfile] = useState(false);

  const menuItems = ["Home", "About", "Desk", "Computer"];

  const toggleProfile = () => setFlagProfile((prevFlag) => !prevFlag);

  return (
    <>
      <nav>
        <ul className="NavItems">
          {menuItems.map((item, index) => (
            <li key={index}>
              <button onClick={item === "Home" ? toggleProfile : null}>
                {item}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      {flagProfile && <Profile />}
    </>
  );
}

export default NavBar;
