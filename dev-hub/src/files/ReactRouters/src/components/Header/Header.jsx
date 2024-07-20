/* eslint-disable no-unused-vars */
import { Link, NavLink, useParams } from "react-router-dom";
import "./header_styles.css";

function Header() {
  // const {userId} = useParams();
  return (
    <>
      <nav className="parent_header_container">
        <Link
          className="image"
          to={"https://reactrouter.com/en/main/start/tutorial"}
        >
          <img src="src/assets/npm_logo.webp" alt="" />
        </Link>
        <div className="navLinks">
          <NavLink
            className={({isActive})=> isActive?"activeTabs":""}
            to={"/"}
          >
            Home
          </NavLink>
          <NavLink
            className={({isActive})=> isActive?"activeTabs":""}
            to={"about"}
          >
            About
          </NavLink>
          <NavLink
            className={({isActive})=> isActive?"activeTabs":""}
            to={"contact"}
          >
            Contact
          </NavLink>
          <NavLink
            className={({isActive})=> isActive?"activeTabs":""}
            to={"github"}
          >
            Github
          </NavLink>
          <NavLink
            className={({isActive})=> isActive?"activeTabs":""}
            to={"user/userId"}
          >
            Users
          </NavLink>
          
        </div>
        <div className="buttons">
          <div>
            <button type="button">Login</button>
          </div>

          <button type="button">Get Started</button>
        </div>
      </nav>
    </>
  );
}

export default Header;
