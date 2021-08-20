import "./../style/index.css";
import CartWidget from "./CartWidget";
import logo from "./../media/logo.png";

function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="./../../public/index.html">
            <img src={logo} alt="logo teatro" />
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
            <ul className="navbar-nav me-auto w-100 d-flex justify-content-around">
              <li className="nav-item">
                <a className="nav-link" href="./">
                  Teatro
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./">
                  Ballet
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./">
                  Opera
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./">
                  Conciertos
                </a>
              </li>
            </ul>
          </div>
        </div>
        <CartWidget />
      </nav>
    </div>
  );
}

export default NavBar;
