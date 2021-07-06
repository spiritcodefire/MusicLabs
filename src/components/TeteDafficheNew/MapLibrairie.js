import React from 'react'
import CardLibrairie from '../../components/Librairie/CardLibrairie'
import DataMusic from '../../utils/dataMusic'

    const MapLibrairie = () => {
    return ( 
        <>
            <div className="container-fluid">
                <div className="row justify-content-md-center">
                    {DataMusic.slice(0,2).reverse().map(item => (
                        <CardLibrairie className="col-xs-12 col-md-6"
                            key={item.id}
                            id={item.id}
                            NameMusic={item.NameMusic}
                            DescriptionNft={item.DescriptionNft}
                            NameAlbumOrCollection={item.NameAlbumOrCollection} 
                            NameCreator={item.NameCreator} 
                            Price={item.Price}
                        />
                    ))}
                </div>
            </div>
               
        </>
    )
}

export default MapLibrairie