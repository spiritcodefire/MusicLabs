import React, { useEffect, useState } from 'react'
import "./AirDrop.css"
import CardAirDrop from './CardAirDrop'
import DataMusic from "../../utils/dataMusic" ;

const Index = () => {
    // ne prend que les item ou AirDrop === TRUE et IsActive === TRUE
    let SelectionAirDrop = DataMusic.filter((item) => {
        return item.AirDrop === true && item.IsActive === true
    });
    //   console.log(SelectionAirDrop);


    return (
        <div className="">
            <span className="h2 span-inline"> WIN YOUR MUSICAL NFT AIR-DROP</span><span style={{ color: "transparent"}}  className="win h2 span-inline">na nah</span>

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

        </div>
    )
}

export default Index
