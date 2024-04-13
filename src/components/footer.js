import '../styles/catalogue.css';
import livre from '../img/icon-livre.png';
import camion from '../img/icon-camion.png';
import cadenas from '../img/icon-camion.png';
import pouce from '../img/icon-pouce.png';
import facebook from '../img/icon-facebook.png';
import twitter from '../img/icon-twitter.png';
import linkedin from '../img/icon-linkedin.png';

function Footer() {
  return (
    <footer>
      <nav className="menu-adm">
        <div className="point"></div><a href="#qsn"> Qui sommes-nous ?</a>
        <div className="point"></div><a href="#contact"> Contact </a>
        <div className="point"></div><a href="#assistance"> Assistance </a>
        <div className="point"></div><a href="#cgv"> CGV </a>
      </nav>

      <div className="conteneur-footer">
        <div className="infos2">
          <div className="bloc-texte">
            <a href="#livre"> 
              <img 
              src= {livre} 
              alt="icon-livre"             
              /> 
            </a>
            <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit Quas consequuntur ducimus iste molestias nostrum
              animi laboriosam sapiente illo sed optio voluptate, recusandae sequi necessitatibus aut similique possimus
              minima mollitia dolor!</p>
          </div>
          <div className="bloc-texte">
            <a href="#camion"> 
              <img 
              src= {camion} 
              alt="icon-camion" 
              /> 
            </a>
            <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas consequuntur ducimus iste molestias nostrum
              animi laboriosam sapiente illo sed optio voluptate, recusandae sequi necessitatibus aut similique possimus
              minima mollitia dolor!</p>
          </div>
          <div className="bloc-texte">
            <a href="#cadenas"> 
              <img 
              src= {cadenas} 
              alt="icon-cadenas" 
              /> 
            </a>
            <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas consequuntur ducimus iste molestias nostrum
              animi laboriosam sapiente illo sed optio voluptate, recusandae sequi necessitatibus aut similique possimus
              minima mollitia dolor!</p>
          </div>
          <div className="bloc-texte">
            <a href="#pouce"> 
              <img 
              src= {pouce} 
              alt="icon-pouce" 
              /> 
            </a>
            <p> 
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas consequuntur ducimus iste molestias nostrum
              animi laboriosam sapiente illo sed optio voluptate, recusandae sequi necessitatibus aut similique possimus
              minima mollitia dolor!
            </p>
          </div>
        </div>

        <div className="reseaux-sociaux">
          <a href="#facebook"> 
            <img 
            src= {facebook} 
            alt="facebook" 
            />
          </a>
          <a href="#twitter"> 
            <img 
            src= {twitter} 
            alt="twitter" 
            />
          </a>
          <a href="#linkedin"> 
            <img src= {linkedin} alt="linkedin" />
          </a>
        </div>

        <p> &copy; 2023 Sport.com. Tous droits réservés </p>
      </div>
    </footer>
  );
}

export default Footer;