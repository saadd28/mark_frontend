import "./Navbar.css";
import NavbarLogo from "../../img/navbar_logo.png";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar_left_box">
          <img src={NavbarLogo} alt="Logo" style={{cursor:"pointer"}}/>
          <div className="navbar_links_style">Business</div>
          <div className="navbar_links_style">Consumer</div>
          <div className="navbar_links_style">Investments</div>
        </div>

        <div className="navbar_right_box">
          <div className="navbar_links_style">About Us</div>
          <div className="navbar_links_style">Developer</div>
          <div className="navbar_links_style">Login</div>

          <select name="language_name" className="navbar_language_dropdown navbar_links_style">
            <option
              value="english"
              className="navbar_language_dropdown_content"
            >
              English
            </option>
            <option
              value="urdu"
              className="navbar_language_dropdown_content"
            >
              Urdu
            </option>
          </select>
        </div>
      </div>
    </>
  );
};

export default Navbar;
