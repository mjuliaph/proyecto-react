import NavBar from "./components/NavBar.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";
import ItemListContainer from "./components/ItemListContainer.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer.jsx";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { CartProvider } from "./context/CartContext.jsx";
import Cart from "./components/Cart";
import CartForm from "./components/CartForm";

// Esto es lo que se muestra en el navegador
function App() {
  return (
    <div className="indexGeneral">
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
              <Route exact path="/cartForm">
                <section>
                  <CartForm/>
                </section>
              </Route>
            </Switch>
          <Footer/>
        </BrowserRouter>
      </CartProvider>
    </div>
   
  );
}

export default App;

