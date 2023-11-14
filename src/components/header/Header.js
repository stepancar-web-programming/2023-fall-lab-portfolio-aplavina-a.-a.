import './style.css';

import photo from '../../img/photo.png';

import {NavLink} from "react-router-dom"

const Header = () => {
    return (
        <header className='header'>
            <div className='container'>
                <div className='nav-row'>
                    <div className='personal-info'>
                        <img src={photo} width="150" height="103" alt="developer photo" className="photo"/>
                        <div className='name-title'>
                            <h1 className='title-1'>Anna Aplavina</h1>
                            <h2 className='title-2'>Backend Developer</h2>
                        </div>
                    </div>
                    <ul className='header-menu'>
                        {/* <li><a className='header-menu-link' href="!#">Home</a></li> */}
                        <li><NavLink to="/" className='header-menu-link'>Home</NavLink></li>
                        <li><NavLink to="/skills" className='header-menu-link'>Skills</NavLink></li>
                        {/* <li><a className='header-menu-link' href="!#">Skills</a></li> */}
                    </ul>
                </div>
            </div>
        </header>
     );
}
 
export default Header;