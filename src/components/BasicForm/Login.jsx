import { useState } from "react";

function Login() {
  const [nameErrorFlag, setNameErrorFlag] = useState(false);
  const [emailErrorFlag, setEmailErrorFlag] = useState(false);
  const [numberErrorFlag, setNumberErrorFlag] = useState(false);
  const [emailId, setEmailId] = useState("");

  const handleSubmitForm = (e) => {
    e.preventDefault();
  };

  const handleNameChange = (event) => {
    if (event.target.value.length <= 10) {
      setNameErrorFlag(false);
    } else {
      setNameErrorFlag(true);
    //   event.target.value = "";
    }
  };

  const handleEmailChange = (e) => {
    const id = e.target.value;
    const regex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    regex.test(id) == true
      ? (setEmailErrorFlag(false), setEmailId(id))
      : (setEmailErrorFlag(true), setEmailId(id));
  };

  const handleChange = (event) => {
    let inputValue = event.target.value;

    const regex = new RegExp(/[^0-9]/g);
    inputValue = inputValue.replace(regex, "");

    const validRegex = /^(?:\+91)?[6789]\d{9}$/;
    // const regex = new RegExp(`^[0-9]{${10},${10}}$`);

    if (validRegex.test(inputValue)) {
      setNumberErrorFlag(false);
    } else {
      event.preventDefault();
      setNumberErrorFlag(true);
    }
    return inputValue;
  };

  return (
    <>
      <h1>Lets get Started</h1>
      <span>
        Join my e-learning platform for your benifit in the industry to
        withstand ion the todays ongoing competition. Our courses are famous
        WorldWide. Pehle istemaal kare fir vishwas kre is our policy as we
        provide 1 month of trial fromt he date of registraition a nominal fees
        of registration.{" "}
      </span>
      <form action="submit">
        <div>
          <label htmlFor="name" required>
            Name
          </label>
          <input type="text" onChange={handleNameChange} />
          <br />
          {nameErrorFlag
            ? "ERROR: Name should be Lesser than 10 characters"
            : null}
        </div>
        {/* email */}
        <div>
          <label htmlFor="email" required>
            Email
          </label>
          <input type="email" onBlur={handleEmailChange} />
          <br />
          {emailErrorFlag && emailId !== ""
            ? "Please enter correct email"
            : emailId === ""
            ? ""
            : "Correct"}
        </div>

        {/* MobileNumber */}

        <div>
          <label htmlFor="mobileNumber" required>
            Contact No.
          </label>
          <input type="number" onBlur={handleChange} />
          <br />
          {numberErrorFlag ? "Worng Number " : "Correct "}
        </div>

        <div>
          <label htmlFor="coutry">Country</label>
          <select name="country" defaultValue="India" required>
            <option value="USA">USA</option>
            <option value="India">India</option>
            <option value="China">China</option>
            <option value="SriLanka">SriLanka</option>
            <option value="Turkey">Turkey</option>
          </select>
        </div>

        <div>
          <button type="submit" onSubmit={handleSubmitForm}>
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default Login;
