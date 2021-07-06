import React, { useEffect, useState } from 'react'
import "./AirDrop.css"
import CardAirDrop from './CardAirDrop'
import DataMusic from "../../utils/dataMusic" ;
import cadeaux from '../../assets/png/Invest.png';

const Index = () => {
    // ne prend que les item ou AirDrop === TRUE et IsActive === TRUE
    let SelectionAirDrop = DataMusic.filter((item) => {
        return item.AirDrop === true && item.IsActive === true
    });
    //   console.log(SelectionAirDrop);


    return (
        <>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-11 h2">Invest in an Artist <img src={cadeaux} alt="cadeaux" height="50px" /> </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row justify-content-md-center">

                { SelectionAirDrop.slice(0).reverse().map(item => { 
                    return(
                    <CardAirDrop 
                        key={item.id}
                        id={item.id}
                        NameMusic={item.NameMusic}
                        DescriptionNft={item.DescriptionNft}
                        NameAlbumOrCollection={item.NameAlbumOrCollection} 
                        NameCreator={item.NameCreator} 
                        Price={item.Price}
                        NameAlbumOrCollection={item.NameAlbumOrCollection}
                    />
                    )}
                    )
                }

                </div>
            </div>

        </>
    )
}

export default Index
