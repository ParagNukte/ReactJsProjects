import { useState } from "react";
import "./styles.css";
function LoginFrom() {
  /*   const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleChange = (arg, e) => {
    switch (arg) {
      case "username":
        setUserName(e.target.value);
        break;

      case "email":
        setEmail(e.target.value);
        break;

      case "password":
        setPassword(e.target.value);
        break;

      case "confirm-password":
        setConfirmPassword(e.target.value);
        break;
      default:
        break;
    }
  }; */

  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData((...prev) => {
      return {prev, [e.target.name] : e.target.value}
    });
  };

  return (
    <>
      <div className="container">
        <span>
          <label htmlFor="userName">Username</label>
        </span>
        <span>
          <input
            type="text"
            id="userName"
            name="userName"
            placeholder="username"
            value={formData.userName}
            onChange={handleChange}
          />
        </span>

        <span>
          <label htmlFor="email">Email</label>
        </span>
        <span>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="email"
            value={formData.email}
            onChange={handleChange}
          />
        </span>

        <span>
          <label htmlFor="password">Password</label>
        </span>
        <span>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="password"
            value={formData.password}
            onChange={handleChange}
          />
        </span>

        <span>
          <label htmlFor="confirmPassword">confirm-password</label>
        </span>
        <span>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="confirm-password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </span>
        <br />
        <button type="submit">Submit</button>
      </div>
    </>
  );
}

export default LoginFrom;
