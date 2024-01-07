import './header.css';

import photo from '../../img/photo.png';

import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="nav-row">
          <div className="personal-info">
            <img
              src={photo}
              width="150"
              height="103"
              alt="developer"
              className="photo"
            />
            <div className="name-title">
              <h1 className="title-1">Anna Aplavina</h1>
              <h2 className="title-2">Backend Developer</h2>
            </div>
          </div>
          <ul className="header-menu">
            <li>
              <NavLink to="/" className="header-menu-link" tabIndex={0}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/skills" className="header-menu-link" tabIndex={0}>
                Skills
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
