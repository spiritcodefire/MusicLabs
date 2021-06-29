import React from 'react'
import CardTest from './CardLibrairie'
import "./Librairie.css"
import DataMusic from "../../utils/dataMusic" ;

import NavSort from './Nav' ;

const Librairie = () => {

    // ne prend que les item ou AirDrop === TRUE et IsActive === TRUE
    let SelectionLibrairie = DataMusic.filter((item) => {
        return item.Librairie === true && item.IsActive === true
    });
        console.log(SelectionLibrairie);

    return (
        <div className="container-fluid">
            <NavSort />
            <div className="row justify-content-center">

            { SelectionLibrairie.slice(0).reverse().map(item => { 
                return(
                < CardTest
                    key={item.id}
                    id={item.id}
                    NameMusic={item.NameMusic}
                    DescriptionNft={item.DescriptionNft}
                    NameAlbumOrCollection={item.NameAlbumOrCollection} 
                    NameCreator={item.NameCreator} 
                    Price={item.Price}
                    NameAlbumOrCollection={item.NameAlbumOrCollection}
                />
                )
            })
            }
         

            </div>
           


        </div>
    )
}

export default Librairie
