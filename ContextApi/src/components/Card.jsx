// import { useState } from "react"/;
import { useContext } from "react";
import NavBar from "./NavBar";
import UserContext from "./Contexts";

function Card() {
  const { userName } = useContext(UserContext);
  return (
    <>
      <div>
        See my username here {" =>"}
        <span style={{ color: "red" }}>{userName}</span>
      </div>
      <div>
        <NavBar />
      </div>
    </>
  );
}

export default Card;
