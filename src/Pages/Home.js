import Hero from '../Components/Hero.js';
import chateau from '../chateau.jpg';
import chateau_2 from '../chateau-2.jpg';
import chateau_3 from '../chateau_3.jpg';

export default function Home() {
  return(
    <>
      <Hero image={chateau_2}/>
      <main className="home">
        <section className="col-2">
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

        <section className="col-2">
          <article>
            <h1>Histoire du château</h1>
            <p> Le château de Villeconin a été construit à la fin du 14ème siècle par
              Jean de Montagu, surintendant des finances du roi Charles VI. Il est transformé
              à la Renaissance par les Cochefilet, belle-famille de Sully. A la Révolution,
              il est décrété bien national .Au début du 19ème siècle, il devient  une
              ferme inscrite  à l'inventaire des monuments historiques en 1926. Il est
              acquis par Henri de Jouvencel en 1932. Son petit fils Roland de Longevialle,
              propriétaire actuel,  et sa famille vous font découvrir cette demeure de
              charme.
            </p>
            <p>
              Au cours de votre visite, vous admirerez la salle des gardes avec sa magnifique charpente, la bibliothèque et les souvenirs de famille, la tour du pont levis, le parc riche en essences choisies par la maitresse des lieux. Les guides, membres de la
              famille, vous plongeront dans l'Histoire de France et les anecdotes familiales
            </p>

            <p>
              Les guides, membres de la famille, vous plongeront dans l'Histoire de France et les anecdotes familiales.
            </p>
          </article>
          <img src={chateau_3} alt="" />
        </section>
      </main>
    </>
  )
}