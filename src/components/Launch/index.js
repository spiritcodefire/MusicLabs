import React from 'react' ;
import './Lancement.css' ; 
import Cardlancement from './CardLancement' ;
import DataMusic from "../../utils/dataMusic" ;
import fusee from '../../assets/fusee.png'

const Lancement = () => {
        // sort all data and take that if item.launch === true
        let SelectionLaunch = DataMusic.filter((item) => {
        return item.Launch === true && item.IsActive === true
      });
   

    return (
        <div className="container-fluid">

          <div className="container-fluid">
            <div className="row justify-content-center  mt-4">
            
              <div className="col-11 "> 
              <h2>Launch <img height="40px" src={fusee} alt="" /> </h2>
     
            </div>
          </div>

          </div>

          <div className="row justify-content-center">

            {SelectionLaunch.slice(0).reverse().map(item => { 
              return (   
                <Cardlancement
                    key={item.id}
                    id={item.id}
                    NameMusic={item.NameMusic}
                    DescriptionNft={item.DescriptionNft}
                    NameAlbumOrCollection={item.NameAlbumOrCollection} 
                    NameCreator={item.NameCreator} 
                    Price={item.Price}
                    Date={item.Date}
                />
              )}
              )
            }
          
          </div>

        </div>
    )
}

export default Lancement
