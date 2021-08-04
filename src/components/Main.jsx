import "../css/Index.css";
import teatro from "../media/teatro.jpg"
import ballet from "../media/ballet.jpg"
import opera from "../media/opera.jpg"
import concierto from "../media/concierto.jpg"


function Main() {
    return (
        <div className="container-fluid no-gutters">
            <div className="row">
                <div className="portada">
                    <img src={teatro} alt="" />
                </div>
                <div className="portada">
                    <img src={ballet} alt="" />  
                </div>
                <div className="portada">
                    <img src={opera} alt="" />  
                </div>
                <div className="portada">
                    <img src={concierto} alt="" />  
                </div>
            </div>
        </div>

    )
};

export default Main;