// Importamos los componentes .JSX
import NavBar from "./components/NavBar.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";
import ItemListContainer from "./components/ItemListContainer.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer.jsx";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import CardContainer from "./components/CardContainer";
import { CartProvider } from "./context/CartContext.jsx";
import Cart from "./components/Cart.jsx";

// //Firebase
// import { collection, getDocs } from 'firebase/firestore';
// import { getData } from './firebase';

// Esto es lo que se muestra en el navegador
function App() {
  return (
  <CartProvider>
      <BrowserRouter>
        <header>
          <NavBar />
        </header>
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
          <Route exact path="/cart">
            <section>
              <Cart />
            </section>
          </Route>
        </Switch>
      <Footer/>
    </BrowserRouter>
  </CartProvider>   
  );
}

export default App;

