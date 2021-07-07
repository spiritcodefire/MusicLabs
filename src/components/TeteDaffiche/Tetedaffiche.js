import React from 'react' ;
import "./TeteDaffiche.css" ;
import CardTeteDaffiche from './CardTeteDaffiche'
// import MickaelJacksonPicture from '../../assets/TeteDaffiche/mickaelJackson.jpg'
import DataMusic from "../../utils/dataMusic" ;

const Tetedaffiche = () => {

       // ne prend que les item ou AirDrop === TRUE et IsActive === TRUE
       let SelectionTeteDaffiche = DataMusic.filter((item) => {
         return item.TeteDaffiche === true && item.IsActive === true
      });
      
    return (
        <div className="bg-light" >
           <div className="container-fluid border border-light">
               <div className="row justify-content-center">

                  { SelectionTeteDaffiche.slice(0).reverse().map(item => { 
                     return(   
                     
                        <CardTeteDaffiche
                           key={item.id}
                           id={item.id}
                           NameCreator={item.NameCreator} 
                           Picture={item.Picture}
                        />                  
                     )})
                  }


               </div>
           </div>



        </div>
    )
}

export default Tetedaffiche
