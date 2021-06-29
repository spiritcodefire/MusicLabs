import React from 'react'

import ReactAudioPlayer from "react-audio-player";
import Accordion from './Accordion'
import "./product.css"

import dataMusic from '../../utils/dataMusic'
import music from '../../assets/songMjackson.mp3'


import ReactPlayer from 'react-player'

const index = (props) => {
    
    let IdSelected = props.match.params.id
    const MusicById = dataMusic.find(data=> data.id == IdSelected)  // récupère ce qui suit mon url
    console.log(MusicById);
    return (
        <div>
            <div className="container-fluid">
                <div className="row justify-content-center">

                    <div className="col-8 border" style={{height: "800px"}}>
                        <div className="row justify-content-center">
                            
                            <div className="img-fluid " style={{backgroundImage: `url(${`https://source.unsplash.com/random/${Math.ceil(Math.random() * 1000 + 300)}x350/?singer`})`, height: 80+'vh', width: 60+'%',  backgroundRepeat: 'no-repeat', left: 0,backgroundSize: 'cover', backgroundPosition: "center" }}>
                                <div className="row justify-content-center align-items-center">
                                    <div className="col-3 align-self-center">
                                        <ReactAudioPlayer
                                            src={music}
                                            // autoPlay
                                            controls
                                        />
                                        <ReactPlayer file={music} />
                                    </div>
                                </div>
                                

                            </div>
                            
                        </div>

                        <h6 className="text-center bg-danger">integrer player audio ou player video</h6>
                    </div>

                    <div className="col-4">
                        <div className="mt-5">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-8 border border-white"><h1>{MusicById.NameMusic}</h1></div>
                                    <div className="col-4 border border-white">bouton coeur, btn....</div>
                                </div>
                            </div>
                            <p>Le launch c'est toutes les nft's music ou toutes les unités ne sont pas encore vendu </p>
                           <p> Highest bid PRIX </p> 
                           <p> DESCRIPTION </p> 
                            <div className="row">

                                <div className="col-6">
                                    <p className="text-secondary font-weight-bold ">Creator</p>
                                    <div className="row">
                                        <div className="col-3"><div className="img-fluid rounded-circle m-4 ml-n2 mt-n1" style={{backgroundImage: `url(${`https://source.unsplash.com/random/${Math.ceil(Math.random() * 1000 + 300)}x350/?crypto`})`, height: 50+'px', width: 50+'px',  backgroundRepeat: 'no-repeat', left: 0,backgroundSize: 'cover', backgroundPosition: "center" }} /></div>
                                        <div className="col-9">{MusicById.NameCreator}</div>
                                    </div>
                                </div>

                                <div className="col-6">
                                    <p className="text-secondary font-weight-bold">Collection</p>
                                    <div className="row">
                                        <div className="col-3"><div className="img-fluid rounded-circle m-4 ml-n2 mt-n1" style={{backgroundImage: `url(${`https://source.unsplash.com/random/${Math.ceil(Math.random() * 1000 + 300)}x350/?crypto`})`, height: 50+'px', width: 50+'px',  backgroundRepeat: 'no-repeat', left: 0,backgroundSize: 'cover', backgroundPosition: "center" }} /></div>
                                        <div className="col-9">NOM DU CONTACT</div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <Accordion />
                        <hr/>
                        <div className="row" style={{height: '15vh'}}>

                            <div className="col-6"  >

                                <div  className="font-weight-bold text-white text-center p-3" style={{
                                    borderRight: "1px #ececec solid",
                                    border: 'grey 1px solid',
                                    borderRadius: '48px',
                                    backgroundColor: 'rgb(0, 102, 255)',}}
                                >
                                    Buy for XXX ETH
                                </div>

                            </div>

                            <div className="col-6">

                                <div  className="font-weight-bold text-white text-center p-3" style={{
                                        borderRight: "1px #ececec solid",
                                        border: 'grey 1px solid',
                                        borderRadius: '48px',
                                        backgroundColor: 'black',}}
                                    >
                                        Depuis 2H 24 Min 365 Sec
                                    </div>
                            </div>  

                            <div className="col-12 mt-3">

                                <div className="font-weight-bold text-center p-3 btnBids" style={{
                                    borderRadius: '48px',
                                    backgroundColor: 'rgba(0, 102, 255, 0.15)',
                                    color: 'rgb(0, 102, 255)'
                                    }}>
                                     <h6>il reste <span className="text-danger">28</span>  particule disponible</h6>   
                                </div>
                                
                            </div>

                          

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index
