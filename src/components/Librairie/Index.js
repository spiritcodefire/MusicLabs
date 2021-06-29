import React, {useState} from 'react'
import "./Librairie.css"
import DataMusic from "../../utils/dataMusic" ;
import MapLibrairie from './MapLibrairie'


const Librairie = () => {

    const [data, setData] = useState(DataMusic)

    let newArray = [];

    const aspireClick = (e) => {
        console.log(e.target.value);
        
    }

    const FunctionModify = (e) => {
        console.log(e.target.value);
        let eTargetValue = e.target.value
        console.log(eTargetValue);

        // pour revenir a tous l'objet dans tout son ensemble
        if(eTargetValue == "Tous")
            setData(DataMusic)

        else{
            newArray = DataMusic.filter((item) => {
                return item.Category === eTargetValue}) 
            setData(newArray)
        }
    }

    // ne prend que les item ou AirDrop === TRUE et IsActive === TRUE
    // let SelectionLibrairie = DataMusic.filter((item) => {
    //     return item.Librairie === true && item.IsActive === true
    // });
    //     console.log(SelectionLibrairie);

    return (
        <div className="container-fluid">

            <div className=" px-4 mx-2 h1">Explore</div>
                <div  className="container p-4 text-white">
                    <div className="row justify-content-between">

                        <input onClick={aspireClick} type="button" value="Tous"         className="btnArt px-4 mx-1 bg-dark text-white"></input>
                        <input onClick={aspireClick} type="button" value="Pop"          className="btnArt px-4 mx-1 bg-white"></input>
                        <input onClick={aspireClick} type="button" value="Classique"    className="btnArt px-4 mx-1 bg-white"></input>
                        <input onClick={aspireClick} type="button" value="Rock"         className="btnArt px-4 mx-1 bg-white"></input>
                        <input onClick={aspireClick} type="button" value="Electro"       className="btnArt px-4 mx-1 bg-white"></input>
                        <input onClick={aspireClick} type="button" value="Latino"       className="btnArt px-4 mx-1 bg-white"></input>
                        <input onClick={aspireClick} type="button" value="Metal"        className="btnArt px-4 mx-1 bg-white"></input>
                        <input onClick={aspireClick} type="button" value="Film"         className="btnArt px-4 mx-1 bg-white"></input>
                        <input onClick={aspireClick} type="button" value="Jazz"         className="btnArt px-4 mx-1 bg-white"></input>
                        <input onClick={aspireClick} type="button" value="Autre"        className="btnArt px-4 mx-1 bg-white"></input>
                        
                    </div>	
            </div>

            <div className="row justify-content-center">
                <MapLibrairie TransferProps={data} />
            </div>
    
        </div>
    )
}

export default Librairie
