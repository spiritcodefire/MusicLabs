import React from 'react' ;
import './Lancement.css' ; 
import Cardlancement from './CardLancement' ;
import DataMusic from "../../utils/dataMusic" ;

const Lancement = () => {
        // sort all data and take that if item.launch === true
        let SelectionLaunch = DataMusic.filter((item) => {
        return item.Launch === true && item.IsActive === true
      });
   

    return (
        <div className="container-fluid">

          <div className="row justify-content-start mt-4">

            <div className="col-auto "> 
              <h2>Launch : buy the Hotest new single</h2>
            </div>

            <div className="col-1">
              <div className="feu mt-n3 ml-n4"></div>
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
