// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-container">
    <ul className="nav-list-container">
      <li className="nav-item wave-image-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
          alt="wave"
          className="wave-image"
        />
        Wave
      </li>
      <li className="nav-item">
        <Link to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link to="/about">About</Link>
      </li>
      <li className="nav-item">
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  </nav>
)

export default Header
