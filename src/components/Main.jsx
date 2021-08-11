import ItemList from "./ItemList";
// import teatro from "./../media/teatro.jpg";
// import ballet from "./../media/ballet.jpg";
// import opera from "./../media/opera.jpg";
// import concierto from "./../media/concierto.jpg";
import "./../css/index.css";

function Main() {
  return (
    <div className="container-fluid">
      <div className="row portadas">
        <div className="portadaTeatro">{/* <img src={teatro} alt="" /> */}</div>
        <div className="portadaBallet">{/* <img src={ballet} alt="" /> */}</div>
        <div className="portadaOpera">{/* <img src={opera} alt="" /> */}</div>
        <div className="portadaConcierto">
          {/* <img src={concierto} alt="" /> */}
        </div>
      </div>
      <ItemList />
    </div>
  );
}

export default Main;
