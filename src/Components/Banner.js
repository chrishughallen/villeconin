import { NavLink } from 'react-router-dom';

const toggleMobileMenu = () => {
  console.log('toggle menu')
  document.querySelector('.nav').classList.toggle('show-mobile-menu')
  document.body.classList.toggle('fixed-body')
}
const closeMenu = () => {
  document.querySelector('.nav').classList.remove('show-mobile-menu')
  document.body.classList.remove('fixed-body')
}

export default function Banner() {
  return(
    <>
    <div className="banner">
      <NavLink
        onClick={closeMenu}
        to="/"
      >
        <h1>Chateau de Villeconin</h1>
        <p>Un château médiéval en Essonne</p>
      </NavLink>
      <svg onClick={toggleMobileMenu} fill="000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px"><path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z"/></svg>
    </div>
    </>
  )
}