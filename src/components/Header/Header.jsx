import "./Header.css";
import Logo from "../../images/logo.png";
import Button from "@material-ui/core/Button";

const Header = () => {
  return (
    <div className="header-cont">
      <div>
        <img src={Logo} alt="logo" />
      </div>
      <div className="nav-link">
        <Button variant="">HOW TO USE</Button>
        <Button variant="">ABOUT US</Button>
        <Button variant="">Contact Us</Button>
      </div>
      <div className="login-link">
        <Button variant="">Login</Button>
        <Button variant="contained" color="primary">
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default Header;
