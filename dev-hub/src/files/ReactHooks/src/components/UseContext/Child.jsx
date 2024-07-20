import { useContext } from "react";
import { AppContext } from "./useContextHook";

function Child() {
  const userData = useContext(AppContext);
  console.log("userContext Data. I am from Child");
  return (
    <div>
      <div>I M in child and Receiving data from Parent.</div>
      <span>
        Child Age= {userData.age} and Name = {userData.name};
      </span>
    </div>
  );
}

export default Child;
