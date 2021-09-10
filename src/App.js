// Importamos los componentes .JSX
import NavBar from "./components/NavBar.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";
import ItemListContainer from "./components/ItemListContainer.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer.jsx";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { cartContext } from "./context/cartContext";
import CardContainer from "./components/CardContainer";

// Esto es lo que se muestra en el navegador
function App() {
  return (
  <cartContext.Provider value={[]}>
    <BrowserRouter>
        <NavBar />
        <CardContainer/>
      <Main/>
      <Switch>
        <Route exact path="/">
          <ItemListContainer />
        </Route>
        <Route exact path="/item/:id">
          <ItemDetailContainer />
          </Route>
          <Route exact path = "/category/:category">
            <ItemListContainer/>
          </Route>
      </Switch>
      <Footer/>
    </BrowserRouter>
  </cartContext.Provider>   
  );
}

export default App;

