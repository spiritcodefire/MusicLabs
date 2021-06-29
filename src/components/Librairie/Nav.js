import React from 'react'
import "./Librairie.css"


const NavSort = (props) => {
    console.log(props);
    const aspireClick = (e) => {
        // console.log(e.target.value);
        if(props.OnClick)
            props.OnClick(e);  
    }
    return (
        <>
            <div className=" px-4 mx-2 h1">Explore</div>
                <div  className="container p-4 text-white">
                    <div className="row justify-content-between">

                        <input onClick={aspireClick} type="button" value="Tous"         className="btnArt px-4 mx-1 bg-dark text-white"></input>
                        <input onClick={aspireClick} type="button" value="Pop"          className="btnArt px-4 mx-1 bg-white"></input>
                        <input onClick={aspireClick} type="button" value="Classique"    className="btnArt px-4 mx-1 bg-white"></input>
                        <input onClick={aspireClick} type="button" value="Rock"         className="btnArt px-4 mx-1 bg-white"></input>
                        <input onClick={aspireClick} type="button" value="Eletro"       className="btnArt px-4 mx-1 bg-white"></input>
                       
                        <input onClick={aspireClick} type="button" value="Latino"       className="btnArt px-4 mx-1 bg-white"></input>
                        <input onClick={aspireClick} type="button" value="Metal"        className="btnArt px-4 mx-1 bg-white"></input>
                        <input onClick={aspireClick} type="button" value="Film"         className="btnArt px-4 mx-1 bg-white"></input>
                        <input onClick={aspireClick} type="button" value="Jazz"         className="btnArt px-4 mx-1 bg-white"></input>
                        <input onClick={aspireClick} type="button" value="Autre"        className="btnArt px-4 mx-1 bg-white"></input>
                        
                    </div>	
            </div>
        </>
    )
}

export default NavSort
