import { useState } from "react";
import "./style.css";
// import RadhaKrishna from "../../assets/RadhaKrishna"

function Login() {
  const [nameErrorFlag, setNameErrorFlag] = useState(false);
  const [emailErrorFlag, setEmailErrorFlag] = useState(false);
  // const [numberErrorFlag, setNumberErrorFlag] = useState(false);
  const [emailId, setEmailId] = useState("");

  const [mobileNumber, setMobileNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

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

  // const handleChange = (event) => {
  //   let inputValue = event.target.value;

  //   const regex = new RegExp(/[^0-9]/g);
  //   inputValue = inputValue.replace(regex, "");

  //   const validRegex = /^(?:\+91)?[6789]\d{9}$/;
  //   // const regex = new RegExp(`^[0-9]{${10},${10}}$`);

  //   if (validRegex.test(inputValue)) {
  //     setNumberErrorFlag(false);
  //   } else {
  //     event.preventDefault();
  //     setNumberErrorFlag(true);
  //   }
  //   return inputValue;
  // };

  const handleChange = (event) => {
    const trimmedValue = event.target.value.trim(); // Trim whitespace
    setMobileNumber(trimmedValue);
    setErrorMessage(""); // Clear error message on input change
  };

  // Combined validation and error message handling
  const validateMobileNumber = () => {
    const isValid = validateMobileNumberLogic(mobileNumber);
    setErrorMessage(isValid ? "" : "Invalid mobile number"); // Generic error message
    return isValid;
  };

  const validateMobileNumberLogic = (mobileNumber) => {
    // Early return for empty input
    if (!mobileNumber) {
      return true;
    }

    // Combined length and digit check
    if (mobileNumber.length !== 10 || !mobileNumber.match(/^\d+$/)) {
      return false;
    }

    const firstTwoDigits = parseInt(mobileNumber.slice(0, 2));

    // Combined range check
    return firstTwoDigits >= 60 && firstTwoDigits <= 99;
  };

  return (
    <>
      <div className="parentContainer">
        <h1>Lets get Started</h1>
        <div className="container">
          <div>
            Join my e-learning platform for your benifit in the industry to
            withstand ion the todays ongoing competition. Our courses are famous
            WorldWide. Pehle istemaal kare fir vishwas kre is our policy as we
            provide 1 month of trial fromt he date of registraition a nominal
            fees of registration.{" "}
          </div>
          <div className="sectionContanier">
            
            <aside>
              <form action="submit" className="formContanier">
                <label htmlFor="name" required className="firstname">
                  First Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter name"
                  onChange={handleNameChange}
                />
                {nameErrorFlag
                  ? "ERROR: Name should be Lesser than 10 characters"
                  : null}
                {/* email */}
                <label htmlFor="email" required>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter email"
                  onBlur={handleEmailChange}
                />
                {emailErrorFlag && emailId !== ""
                  ? "Please enter correct email"
                  : emailId === ""
                  ? ""
                  : "Correct"}
                <label htmlFor="mobilenumber">Mobile Number</label>
                <input
                  id="mobilenumber"
                  type="text"
                  value={mobileNumber}
                  onChange={handleChange}
                  placeholder="Enter mobile number"
                  onBlur={validateMobileNumber}
                />
                {errorMessage && <p className="error">{errorMessage}</p>}
                <label htmlFor="country">Country</label>
                <select name="country" defaultValue="India" required>
                  <option value="USA">USA</option>
                  <option value="India">India</option>
                  <option value="China">China</option>
                  <option value="SriLanka">SriLanka</option>
                  <option value="Turkey">Turkey</option>
                </select>
                <button type="submit" onSubmit={handleSubmitForm}>
                  Submit
                </button>
              </form>
            </aside>
            <aside className="imageSection">
              <img src="../../../public/RadhaKrishna.jpg" alt="" />
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
