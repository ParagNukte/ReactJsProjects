// import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  // const [data, setData] = useState();
  const data = useLoaderData();
  console.log(data)
  /*  useEffect(() => {
    fetch("https://api.github.com/users/hiteshchoudhary")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      // .catch((error) => {
      //   console.error(error);
      // });
  }, []);
 */
  return (
    <>
      {data ? (
        <>
          <div>
            <strong>User Name:</strong> {data.name}
          </div>
          <div>
            <strong>Login:</strong> {data.login}
          </div>
          <div>
            <strong>Public Repos:</strong> {data.public_repos}
          </div>
          <div>
            <strong>Public Bio:</strong> {data.bio}
          </div>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}

export default Github;

export const getUserInfo = async () => {
  const response = await fetch("https://api.github.com/users/hiteshchoudhary");

  return response.json();
};
