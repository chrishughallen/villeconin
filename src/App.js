import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import chateau from './chateau.jpg';
import chateau_2 from './chateau-2.jpg';

import './App.css';

const Navbar = () => {
  return(
    <nav>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({isActive}) => (isActive ? "nav-link nav-link-active" : "nav-link")}
          >
          Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({isActive}) => (isActive ? "nav-link nav-link-active" : "nav-link")}
          >
          About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({isActive}) => (isActive ? "nav-link nav-link-active" : "nav-link")}
          >
          Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

const Banner = () => {
  return(
    <div className="banner">
      <h1>Chateau de Villeconin</h1>
      <p>Un château médiéval en Essonne</p>
    </div>
  )
}

const Header = () => {
  return(
    <header>
      <Banner />
      <Navbar />
    </header>
  )
}

const Hero = ({image}) => {
  return (
    <div className="hero">
      <img src={image} alt="" />
    </div>
  )
}

const Home = () => {
  return(
    <>
      <Hero image={chateau_2}/>
      <main className="main-top-spacing">
        <section className="col-even-2">
          <img src={chateau} alt="" />
          <article>
            <h1>Bienvenue</h1>
            <p>
            Nous sommes heureux de votre visite sur notre site qui vous permet de découvrir cette demeure historique  située au cœur d'un village fleuri dans la vallée de la Renarde. 
            </p>

            <p>
              <i>
              Le château est ouvert au public,  tous les jours du 1er juin au 10 juillet de 14:30 à 18:00. Aux groupes toute l'année sur RDV
              </i>
            </p>

            <ul>
              <li>Nos tarifs sont de de 5 euros par personne pour une visite guidée du parc et du château par les propriétaires, 2 euros pour une visite libre du parc</li>
              <li>Tarif réduit 3 euros  : les étudiants, villeconinois et  demandeurs d'emploi.</li>
              <li>Gratuit pour les moins de 14 ans.</li>
            </ul>

            <p><strong>Pour 2 €, une brochure chronologique sur le château et l'Histoire de France, 3 € un magnet original</strong></p>
          </article>
        </section>

        <section className="col-big-right-2">
          <article>
            <h1>Contact</h1>
            <a className="mail-link" href="mailto:rlongevialle@wanadoo.fr">Contact par email</a>
            <p>06 07 88 14 77</p>
          </article>
          <img src={chateau} alt="" />
        </section>
      </main>
    </>
  )
}

const About = () => {
  return(
    <main>
      <h1>About</h1>
    </main>
  )
}



const Contact = () => {
  return(
    <main>
      <h1>Contact</h1>
    </main>
  )
}

function App() {
  return (
    <Router>
       <Header />
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
