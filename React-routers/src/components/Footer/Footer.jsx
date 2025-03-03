import "./footer_styles.css";

function Footer() {
  return (
    <>
      <div className="parent_container">
        <div className="image">
          <img src={"src/assets/npm_logo.webp"} alt="NOPE" />
        </div>

        <div className="links">
          <div className="link">
            <div>Home</div>
            <div>About</div>
            <div>Contact Us</div>
          </div>

          <div className="link">
            <div>Staff</div>
            <div>School</div>
            <div>Locations</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
