import { useState } from "react";
import Profile from "./Profile";
import "../App.css"
function NavBar() {

    const [flagProfile, setFlagProfile] = useState(false);

  return (
    <>
      <div>
        <li className="NavItems">
          <ul>
            <button onClick={() => setFlagProfile(!flagProfile)}>Home</button>
          </ul>
          <ul>
            <button>About</button>
          </ul>
          <ul>
            <button>Desk</button>
          </ul>
          <ul>
            <button>Computer</button>
          </ul>
        </li>
      </div>

      {flagProfile ?  <Profile/>: null }

      {console.log(flagProfile)}
    </>
  );
}

export default NavBar;
