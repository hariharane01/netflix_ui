import { ArrowDropDown, Notifications, Search } from "@mui/icons-material";
import "./navbar.scss";
export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
            alt="LOGO"
          />
          <span> Homepage </span>
          <span> Series </span>
          <span> Movies </span>
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
              <span>Logout  </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
