function Card(props){
    return(
        <div className="card">
            <img src={props.img} alt="img"></img>
            <div className="info">
            <h2>{props.name}</h2>
            <p>{props.info}</p>
            <p><strong>Role : {props.role}</strong></p>
            </div>
        </div>

        

    );
}

export default Card;