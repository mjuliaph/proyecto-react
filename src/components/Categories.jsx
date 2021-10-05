
function Categories(props) {
    return (
        <>
            <div className="card bg-secondary mb-3" style={{maxWidth: "20rem;"}}>
                <div className="card-body">
                    <h5 className="card-title" style={{marginTop:"1em", marginBottom:"-1em"}}>{props.name}</h5>                        
                </div>
                <img src={props.img} className="card-img-top" style={{width:"200px", borderRadius:"100%", margin:"3em", border:"2px solid var(--colorVioleta)"}} alt="categoria"/>
            </div>
        </>
    )
}

export default Categories;