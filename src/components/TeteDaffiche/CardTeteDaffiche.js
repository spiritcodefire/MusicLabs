import React from 'react'
import "./TeteDaffiche.css" ;
import DataMusic from "../../utils/dataMusic" ;
import { Link } from 'react-router-dom' ;

const CardTeteDaffiche = (props) => {

    let SelectionCardTeteDaffiche = DataMusic.filter((item) => {
        return item.TeteDaffiche === true && item.IsActive === true
    });
    

    return (
            <div className="col-sm-12 col-md-2" >
                <Link to={`/tetedaffiche/` + props.id}>
                    <div className="m-2 Card" style={{
                        backgroundImage: `url(${props.Picture})` ,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover"}} 
                        >
                            
                        <h5 className="text-white mt-3">{props.NameCreator}</h5>
                    </div>
                </Link>
            </div>
    )
}

export default CardTeteDaffiche
// className={`col-2 m-2 Card ${props.Picture}`}