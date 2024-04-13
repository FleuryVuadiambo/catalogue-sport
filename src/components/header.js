import logo from '../img/logo.png';
import compte from '../img/icon-mon-compte.png';
import panier from '../img/icon-mon-panier.png';
import '../styles/catalogue.css';

function Header() {

  return(

    <div className="conteneur">
      <header className="header0">
        <div className="header1">
          <a href="#home"> 
            <img 
            src= {logo} 
            alt="logo" /> 
          </a>
          <p> Lorem ipsum dolor 
          <span className="orange"> sit amet </span></p>
        </div>
        <div className="header2"> 
          <div className="haut-droit">
            <p className="icon"> 
            <img 
             src= {compte} 
             alt="Mon compte" /> 
             <span> 
                <a href="#compte"> 
                  Mon compte
                </a>
              </span> 
            </p>
            <p className="icon"> 
              <img 
              src= {panier} 
              alt="Mon panier" /> 
                <span> 
                  <a href="#panier"> 
                  Votre panier
                  est vide 
                  </a> 
                </span>
            </p>
          </div>
          <p className="nomCompte"> 
            Bonjour 
            <span className="client"> 
            &nbsp;Julien </span> 
            </p>
            <nav className="bas-droit">
              <a href="#contactez-nous"> Contactez-nous </a>
              <a href="#parrainage"> Parrainage </a>
              <a href="#deconnexion"> Déconnexion </a>
            </nav>
        </div>
      </header>
    </div>

  )

}




export default Header;