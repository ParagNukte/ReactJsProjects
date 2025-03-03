import { useState } from "react";
import Card from "./components/Card";
import UserContext from "./components/Contexts";
function App() {
  const [userName, setUserName] = useState("Parag");
  return (
    <>
      <UserContext.Provider value={{ userName, setUserName }}>
        <Card />
      </UserContext.Provider>
    </>
  );
}

export default App;
