import jardin from '../jardin.jpeg';
import statue_1 from '../statue_1.jpg';
import trees from '../trees.jpg'
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
            Le château organise aussi des expositions patrimoniales.
          </p>
        </article>
      <img src={statue_1} alt="statue" />
      </section>

      <section className="col-2">
        <img src={trees} alt="trees" />
        <article>
          <h1>Tournage - photos au château</h1>
          <p> 
            Le château a servi de lieux de tournages pour des sketches des Nuls, des fictions télévisée « Chèques en boite », « Rastignac ou les Ambitieux » transposition modernisée de l’œuvre de Balzac, de film avec » La Croix des Vivants» film franco-belge sorti en 1962. Une projection exceptionnelle a eu château, un moment d'émotion partagé.
          </p>  
          <p>  
            Le château a servi de cadre pour des photos de magazine : mode, décoration. Des photographes amateurs viennent organiser des évènements. Le château et son parc offre un cadre idéal pour vos photos de mariage ou des évènements familiaux. Le devis dépend du temps passé, du nombre de personnes, photographe+couple, avec famille, avec l'ensemble des invités pour un moment convivial, vin d'honneur ou goûter possible en extérieur. En revanche, nous ne sommes pas en mesure d'assurer un repas de noces à l'intérieur du château.
          </p>  
          <p>  
            Nous accueillons les sorties de clubs d'automobiles anciennes.
          </p>
        </article>
      </section>

      
    </main>
  )
}