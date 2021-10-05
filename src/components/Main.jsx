
import "./../style/index.css";
import Categories from "./Categories";
import jean from "./../media/jean.jpg";
import jeans from "./../media/jeans.jpeg";
import media from "./../media/media.jpg";
import remera from "./../media/remera.jpg";


function Main() {
  return (
    <div className="container-fluid categoriasMain">
      <h1 style={{marginTop:"2em", marginBottom:"1em", textAlign:"center", color:"var(--colorVioleta)", textShadow: "1px 1px 1px #000, 3px 3px 5px #fff"}}>Vestite con nosotros!</h1>
      <div className="col-md-12 contenedoresCategorias">
        <Categories style={{ width: "300px" }} name="remeras" img={remera}></Categories>
        <Categories name="Jeans de Mujer" img={jean}></Categories>
        <Categories name="Jeans de Hombre" img={jeans}></Categories>
        <Categories name="Medias" img={media}></Categories>        
      </div>
    </div>
  );
}

export default Main;
