import { NavLink } from 'react-router-dom';
import '../Navbar.css';

const closeMenu = () => {
  document.querySelector('.nav').classList.remove('show-mobile-menu')
  document.body.classList.remove('fixed-body')
}

export default function Navbar() {
  return(
    <>
    <nav className="nav">
      <ul>
        <li>
          <NavLink
            onClick={closeMenu}
            to="/"
            className={({isActive}) => (isActive ? "nav-link nav-link-active" : "nav-link")}
          >
          Home
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={closeMenu}
            to="/about"
            className={({isActive}) => (isActive ? "nav-link nav-link-active" : "nav-link")}
          >
          About
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={closeMenu}
            to="/contact"
            className={({isActive}) => (isActive ? "nav-link nav-link-active" : "nav-link")}
          >
          Contact
          </NavLink>
        </li>
      </ul>
    </nav>
    </>
  )
}
