import "./../css/index.css"
import CartWidget from "./CartWidget"
import logo from "./../media/logo.png"

function NavBar() {

    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="./../../public/index.html"><img src={logo} alt="logo teatro" /></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarColor02">
                        <ul class="navbar-nav me-auto w-100 d-flex justify-content-around">
                            <li class="nav-item">
                                <a class="nav-link" href="./">Teatro</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="./">Ballet</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="./">Opera</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="./">Conciertos</a>
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