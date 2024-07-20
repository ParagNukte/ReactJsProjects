// import { useState } from "react"/;
import { useContext } from "react";
import NavBar from "./NavBar";
import UserContext from "./Contexts";

function Card() {
  const {userName} = useContext(UserContext) 
  return (
    <>
      <div>
        <span>Logo</span>
        <button  >
          {userName}
        </button>
      </div>
      <div>
        <NavBar />
      </div>
      
    </>
  );
}

export default Card;
