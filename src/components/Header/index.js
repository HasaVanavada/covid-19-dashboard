import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <>
    <nav className="nav-container">
      <div className="nav-content">
        <Link to="/">
          <img
            src="https://res.cloudinary.com/praneeth34/image/upload/v1637069667/COVID19INDIA_tnweqh.png"
            alt="covid19 logo"
            className="logo"
          />
        </Link>
        <ul className="nav-menu">
          <li className="nav-menu-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-menu-item">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  </>
)

export default Header
