
import NavBar from "./components/NavBar.jsx";
import Main from "./components/main.js";
import Footer from "./components/footer.js";


function App() {
  return (
    <div className="">
      <header className="">
        <NavBar/>
      </header>
      <main>
        <Main/>
      </main>
      <footer>
        <Footer/> 
      </footer>
    </div>
  );
}

export default App;
