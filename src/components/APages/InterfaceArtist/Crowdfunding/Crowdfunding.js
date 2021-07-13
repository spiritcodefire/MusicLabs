import React from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Cardlancement from '../../../Launch/CardLancement' ;
import DataMusic from "../../../../utils/dataMusic" ;

const Crowdfunding = () => {
            // sort all data and take that if item.launch === true
            let SelectionLaunch = DataMusic.filter((item) => {
                return item.Launch === true && item.IsActive === true
              });
    return (
        
            <div className="container-fluid">

                <div className="row justify-content-center">
                    <div className="col-12 m-2">
                        <div className="container">
                        <h2>what is this ?</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos harum, veniam voluptatibus in eligendi ullam nostrum eius, corporis soluta vel maxime, mollitia esse cumque quisquam amet quaerat assumenda? Ut, accusantium!</p>
                        <h2 className="text-center mt-3">How much percentage you offer ?</h2>
                        <InputGroup size="lg">
                            <InputGroup.Prepend>
                                <InputGroup.Text >%</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
                        </InputGroup>
                        <h2 className="text-center mt-3">How much is this percentage worth of money ?</h2>
                        <InputGroup size="lg">
                            <InputGroup.Prepend>
                                <InputGroup.Text >$</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
                        </InputGroup>
                      

                        <p>look at examples </p>
                        <h1>Get CrownFunding</h1>
                    </div>
                        
                            <div className="row justify-content-center">
                                {SelectionLaunch.slice(0,3).reverse().map(item => { 
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
                </div>
            </div>
        
    )
}

export default Crowdfunding
