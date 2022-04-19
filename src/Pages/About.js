import jardin from '../jardin.jpeg';
import statue_1 from '../statue_1.jpg';
import '../Hero.css';
export default function About() {
  return(
    <main className="about">
      <section className="col-2">
      <article>
          <h1>Expositions, accueil d'artistes, patrimoine</h1>
          <p> 
            Le château organise regulièrement des expositions artistiques. Du 1er juillet au 10 juillet, venez découvrir Les Arts en Scène organisé par 101fluences : peinture, sculpture, installations à l'intérieur du château et dans le parc d'artistes renommés, les arts classiques et contemporains s'invitent au château. Une salle sera réservée aux artistes amateurs villeconinois.
          </p>  
          <p>  
            Particulièrement attaché à la nature et aux jardins, nous participons chaque années à la « Rendez Vous  au Jardin » début juin, et à « Jardins Secrets, Secrets de Jardins en Essonne », les 2 premiers weekend de juin.
          </p>  
          <p>  
            Nous participons chaque année à la journée des peintres de Villeconin. Nous sommes disposés à accueillir des groupes de peintres à la demande ou autres artistes comme les graveurs.
          </p>
          <p>
            Le château a invité régulièrement des artistes céramiques <a href="http://nathaliedomingo.com/" target="_blank" rel="noreferrer">Nathalie Domingo</a>, Monique Le Goff, des graveurs Anne Le Men, Anne-Claire Gadenne.
          </p> 
          <p>   
            Le château organise aussi des expositions patrimoniales
          </p>
        </article>
        <img src={statue_1} alt="statue" />
      </section>
    </main>
  )
}