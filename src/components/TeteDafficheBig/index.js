import React from 'react'
import Accordion from './Accordion'
import "./TeteDafficheBig.css"
import dataMusic from '../../utils/dataMusic'

const index = (props) => {
    
    let IdSelected = props.match.params.id
    const MusicById = dataMusic.find(data=> data.id == IdSelected)  // récupère ce qui suit mon url
    console.log(MusicById);

    return (
        <div>
            <div className="container-fluid bg-warning">
                <div className="row justify-content-center">

                    <div className="col-8 " style={{height: "800px"}}>
                        <div className="row justify-content-center">
                            <div className="img-fluid mt-3" style={{backgroundImage: `url(${`https://source.unsplash.com/random/${Math.ceil(Math.random() * 1000 + 300)}x350/?singer`})`, height: 80+'vh', width: 60+'%',  backgroundRepeat: 'no-repeat', left: 0,backgroundSize: 'cover', backgroundPosition: "center" }} />
                        </div>
                    </div>

                    <div className="col-4  text-white">
                        <div className="mt-5">
                            <div className="container-fluid ">
                                <div className="row">
                                    <div className="col-8 "><h1>{MusicById.NameMusic}</h1></div>
                                    <div className="col-4 ">bouton coeur, btn....</div>
                                </div>
                            </div>
                            <p>ARTISTE QUE NOUS VOULONS PROMOUVOIR ET QUI NOUS PROMEUT </p>
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
                                        <div className="col-9">{props.NameAlbumOrCollection}</div>
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
                                    Listen Music
                                </div>
                                
                            </div>

                            <div className="col-6">

                                <div className="font-weight-bold text-center p-3 btnBids" style={{
                                    borderRadius: '48px',
                                    backgroundColor: 'rgba(0, 102, 255, 0.15)',
                                    color: 'rgb(0, 102, 255)'
                                    }}>Get my Nft
                                </div>

                            </div>
                            <p className='text-white'>quand je click sur Listen : sois je suis connecté et ça fonctionne, soit je ne suis pas connecter à mon wallet et ça demande la connexion </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index
