import logo from "../images/logo.svg";

import { pageLinks, socialLinks } from "../constants";

import Pagelinks from "./Pagelinks";
import SocialLink from "./SocialLink";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" className="nav-logo" />
          <button type="button" id="nav-toggle" className="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/*pagelinks*/}
        <Pagelinks
          parentClass="nav-links"
          itemClass="nav-link"
          pageLinks={pageLinks}
        />
        <ul className="nav-icons">
          {socialLinks.map((link) => {
            return <SocialLink key={link.id} {...link} itemClass="nav-icon" />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
