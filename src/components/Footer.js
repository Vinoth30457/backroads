import { pageLinks, socialLinks } from "../constants";

import { Pagelinks } from "../components";
import { SocialLink } from "../components";

const Footer = () => {
  return (
    <footer className="footer section">
      <Pagelinks
        parentClass="footer-links"
        itemClass="footer-link"
        pageLinks={pageLinks}
      />
      <ul className="footer-icons">
        {socialLinks.map((link) => {
          return <SocialLink key={link.id} {...link} itemClass="footer-icon" />;
        })}
      </ul>
      <p className="copyright">
        Copy &copy; Backroads Travel Tours Company{" "}
        <span id="date">{new Date().getFullYear()}</span>. All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
