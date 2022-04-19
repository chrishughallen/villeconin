import Banner from './Banner.js';
import Navbar from './Navbar.js';
import '../Header.css';

export default function Header () {
  return(
    <header>
      <Banner />
      <Navbar />
    </header>
  )
}