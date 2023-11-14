import './style.css'

import gmailIcon from './../../img/icons/gmail.png'
import viberIcon from './../../img/icons/viber.png'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-wrapper">
                    <p>© My rights are served</p>
                    <div className='footer-icons'>
                        <a href="!#"><img src={viberIcon} alt='viber'/></a>
                        <a href="!#"><img src={gmailIcon} alt='gmail'/></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;