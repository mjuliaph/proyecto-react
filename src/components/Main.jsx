import ItemCount from "./ItemCount"
import "./../css/index.css"
import teatro from "./../media/teatro.jpg"
import ballet from "./../media/ballet.jpg"
import opera from "./../media/opera.jpg"
import concierto from "./../media/concierto.jpg"


function Main() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="portada">
                    <img src={teatro} alt="" />
                    <ItemCount/>
                </div>
                <div className="portada">
                    <img src={ballet} alt="" />
                    <ItemCount/>
                </div>
                <div className="portada">
                    <img src={opera} alt="" />
                    <ItemCount/>
                </div>
                <div className="portada">
                    <img src={concierto} alt="" />
                    <ItemCount/>
                </div>
            </div>
        </div>

    )
};

export default Main;