import "./../style/index.css";
import CartWidget from "./CartWidget";
import {Link} from "react-router-dom";

function NavBar() {
  return (
    <div className="estiloNavBar">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="./../../public/index.html">
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor02"
            aria-controls="navbarColor02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor02">
          <ul className="estiloMenu">
               <li><Link to ="/">Tienda de Ropa</Link></li>
            </ul>
          </div>
        </div>
        <CartWidget />
      </nav>
    </div>
  );
}

export default NavBar;
