import React from 'react'
import CardLibrairie from './CardLibrairie'

    const MapLibrairie = (props) => {
    return ( props.TransferProps.length > 0 &&
        <>
            <div className="container-fluid">
                <div className="row justify-content-md-center">
                    {props.TransferProps.slice(0).reverse().map(item => (
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