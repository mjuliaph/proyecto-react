// Importamos los componentes .JSX
import NavBar from "./components/NavBar.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";

// Esto es lo que se muestra en el navegador
function App() {
  return (
    <div className="">
      <header className="">
        <NavBar />
      </header>

      <Main />

      <Footer />
    </div>
  );
}

export default App;
