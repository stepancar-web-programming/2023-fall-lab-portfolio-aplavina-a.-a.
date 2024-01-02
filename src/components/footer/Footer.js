import './footer.css';

import gmailIcon from './../../img/icons/gmail.png';
import viberIcon from './../../img/icons/viber.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-wrapper">
          <p>© All rights blah blah</p>
          <div className="footer-icons">
            <a href="mailto:ffa@somemail.com">
              <img src={viberIcon} alt="viber" />
            </a>
            <a href="mailto:ffa@somemail.com">
              <img src={gmailIcon} alt="gmail" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
