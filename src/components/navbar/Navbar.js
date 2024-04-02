import { ArrowDropDown, Notifications, Search } from "@mui/icons-material";
import "./navbar.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => window.onscroll == null;
  };
  console.log(isScrolled);
  return (
    <div className={isScrolled ? "navbar scrolled " : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
            alt="LOGO"
          />
          <Link to='/' className="link" > 
          <span> Homepage </span>
          </Link>
          <Link to='/series'  className="link">
          <span> Series </span>
          </Link>
          <Link to='/movies'  className="link">

          <span> Movies </span>
          </Link>
          <span> New and Popular </span>
          <span> My List </span>
        </div>
        <div className="right">
          <Search className="icons" />
          <span>KID </span>
          <Notifications className="icons" />
          <img
            src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png"
            alt="avatar"
          />
          <div className="profile">
            <ArrowDropDown className="icons" />
            <div className="option">
              <span>Setting </span>
              <span>Logout </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
