// Importamos los componentes .JSX
import NavBar from "./components/NavBar.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";
import ItemListContainer from "./components/ItemListContainer.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer.jsx";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Esto es lo que se muestra en el navegador
function App() {
  return (
    <div className="">
      <header className="">
        <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <ItemListContainer />
          </Route>
          <Route exact path="/item/:id">
            <ItemDetailContainer />
          </Route>
        </Switch>
        </BrowserRouter>
      </header>

      <Main />
      <ItemListContainer/>

      <Footer />
    </div>
  );
}

export default App;

