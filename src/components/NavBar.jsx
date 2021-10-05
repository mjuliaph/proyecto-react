import "./../style/index.css";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import logo from "./../media/logo.png"

function NavBar() {
  return (
    <div className="estiloNavBar">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          {/* Aca va el logo */}
          <img src={logo} style={{ width: "100px", borderRadius:"90%", border:"1px solid grey" }} alt="logo" />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto estiloMenu">
              <li className="nav-item"><Link to ="/">HOME</Link></li>
              <li className="nav-item"><Link to="/category/remeras">REMERAS</Link></li>
              <li className="nav-item dropdown">
                <a className="dropdown-toggle" data-bs-toggle="dropdown" href="" role="button" aria-haspopup="true" aria-expanded="false">PANTALONES</a>
                <div className="dropdown-menu">
                  <li className="dropdown-item"><Link to="/category/pantalones mujer">MUJER</Link></li>
                  <li className="dropdown-item"><Link to ="/category/pantalones hombre">HOMBRE</Link></li>
                </div>
              </li>
              <li className="nav-item"><Link to="/category/medias">MEDIAS</Link></li>
            </ul>
          </div>
          <CartWidget />
        </div>
      </nav>
    </div>
  );
}

export default NavBar;

