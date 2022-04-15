import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import chateau from './chateau.jpg';
import chateau_2 from './chateau-2.jpg';
import jardin from './jardin.jpeg';
import burger_menu_icon from './burger-menu.svg';

import './App.css';

const toggleMobileMenu = () => {
  console.log('toggle menu')
  document.querySelector('.nav').classList.toggle('show-mobile-menu')
  document.body.classList.toggle('fixed-body')
}

  const closeMenu = () => {
    document.querySelector('.nav').classList.remove('show-mobile-menu')
    document.body.classList.remove('fixed-body')
  }

const Navbar = () => {
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

const Banner = () => {
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
      <svg onClick={toggleMobileMenu} fill="#fff" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px"><path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z"/></svg>
    </div>
    </>
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
      <main>
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
      <section className="col-even-2">
        <article>
          <h1>L'histoire</h1>
          <p>Le château de Villeconin a été construit à la fin du 14ème siècle par
          Jean de Montagu, surintendant des finances du roi Charles VI. Il est transformé
          à la Renaissance par les Cochefilet, belle-famille de Sully. A la Révolution,
          il est décrété bien national .Au début du 19ème siècle, il devient  une
          ferme inscrite  à l'inventaire des monuments historiques en 1926. Il est
          acquis par Henri de Jouvencel en 1932. Son petit fils Roland de Longevialle,
          propriétaire actuel,  et sa famille vous font découvrir cette demeure de
          charme.</p>
        </article>
        <img src={jardin} alt="le jardin" />
      </section>

      <section className="col-even-2">
      <img src={chateau_2} alt="le jardin" />
        <article>
          <h1>Expositions, accueil d'artistes, patrimoine</h1>
          <p> Le château organise regulièrement des expositions artistiques. Du 1er juillet au 10 juillet, venez découvrir Les Arts en Scène organisé par 101fluences : peinture, sculpture, installations à l'intérieur du château et dans le parc d'artistes renommés, les arts classiques et contemporains s'invitent au château. Une salle sera réservée aux artistes amateurs villeconinois.
              Particulièrement attaché à la nature et aux jardins, nous participons chaque années à la « Rendez Vous  au Jardin » début juin, et à « Jardins Secrets, Secrets de Jardins en Essonne », les 2 premiers weekend de juin.
              Nous participons chaque année à la journée des peintres de Villeconin. Nous sommes disposés à accueillir des groupes de peintres à la demande ou autres artistes comme les graveurs.
              Le château a invité régulièrement des artistes céramiques <a href="http://nathaliedomingo.com/" target="_blank">Nathalie Domingo</a>, Monique Le Goff, des graveurs Anne Le Men, Anne-Claire Gadenne.
              Le château organise aussi des expositions patrimoniales</p>
        </article>
      </section>
    </main>
  )
}

const Contact = () => {
  return(
    <main>
      <section>
        <article>
        <h1>Contact</h1>
        <a target="_blank" href="https://www.instagram.com/chateaudevilleconin/">Follow us on Instagram</a>
        <a className="mail-link" target="_blank" href="mailto:rlongevialle@wanadoo.fr">Contact par email</a>
        <p>06 07 88 14 77</p>
        </article>
      </section>
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
