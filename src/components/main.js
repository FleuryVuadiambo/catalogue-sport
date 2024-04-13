import boxe1 from '../img/gant-boxe-1.png';
import boxe2 from '../img/gant-boxe-2.png';
import '../styles/catalogue.css';


function Main() {
  return(
    <main>
      <div className="conteneur">
        <div className="banniere"> </div>
        <section>
          <div className="produit">
            <div className="cadre-produit">
              <img 
              src= {boxe1} 
              alt="gant-boxe2"             
              />
              {/* <!-- <div className="pourcentage"> - 45% </div> --> */}
              <p 
                className="indication"> 
                Lorem ipsum dolor ip ememet 
              </p>
            </div>
            <div className="infos">
              <button type="button"> 
              <a href="#vente"> 
                Voir la vente 
                </a>
              </button>
              <p> 
                <span className="ancien-prix"> 
                129 € 
                </span> 
              </p>
              <p> 
                <span className="prix-actuel"> 
                65 € 
                </span>
              </p>
            </div>
          </div>

          <div className="produit">
            <div className="cadre-produit">
              <img 
              src={boxe2} 
              alt="gant-boxe1" />

              {/* <!-- <div className="pourcentage2"> - 60% </div> --> */}
              <p className="indication"> 
              Lorem ipsum dolor ip ememet 
              </p>
            </div>
            <div className="infos">
              <button type="button"> 
                <a href="#vente"> 
                Voir la vente 
                </a>
              </button>
              <p> 
                <span className="ancien-prix"> 129 € </span> 
              </p>
              <p> 
                <span className="prix-actuel"> 65 € </span>
              </p>
            </div>
          </div>

          <div className="produit">
            <div className="cadre-produit">
              <img 
              src= {boxe2} 
              alt="gant-boxe2" />
              {/* <!-- <div className="pourcentage3"> - 30% </div> --> */}
              <p className="indication"> 
                Lorem ipsum dolor ip ememet 
              </p>
            </div>
            <div className="infos">
              <button type="button"> 
                <a href="#vente"> 
                Voir la vente 
                </a>
              </button>
              <p> 
                <span className="ancien-prix"> 129 € </span> 
              </p>
              <p> 
                <span className="prix-actuel"> 65 € </span>
              </p>
            </div>
          </div>

          <div className="produit">
            <div className="cadre-produit">
              <img src= {boxe1} alt="gant-boxe-1" />
              {/* <!-- <div className="pourcentage4"> - 70% </div> --> */}
              <p className="indication"> Lorem ipsum dolor ip ememet </p>
            </div>
            <div className="infos">
              <button type="button"> 
                <a href="#vente"> Voir la vente </a>
              </button>
              <p> 
                <span className="ancien-prix"> 129 € </span> 
              </p>
              <p> 
                <span className="prix-actuel"> 65 € </span>
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className="petite-barre"></div>

    </main>
  );
}

export default Main;


