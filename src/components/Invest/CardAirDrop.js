import React from 'react' ;
import { Link } from 'react-router-dom' ;
import ReactAudioPlayer from "react-audio-player";
import music from '../../assets/songMjackson.mp3' ;

const CardAirDrop = (props) => {
    // console.log(props);

    // const [randomNumber, setRandomNumber ] = useState({ random: 0 })
    // const min = 1;
    // const max = 100;
    // const rand = min + Math.random() * (max - min);
    // useEffect(() => {
    //   setRandomNumber({ random: randomNumber.random + rand })
        
    // }, [])

    return (
       
            <div className="col-md-3 border cardAirDrop p-0 shadow">
                <Link to={'/airdrop/' + props.id}>
                    {/* HEADER */}
                    <div className="img-fluid imgBorderRadius" style={{backgroundImage: `url(${`https://source.unsplash.com/random/${Math.ceil(Math.random() * 1000 + 300)}x350/?singer`})`, height: 35+'vh', width: 100+'%',  backgroundRepeat: 'no-repeat', left: 0,backgroundSize: 'cover', backgroundPosition: "center" }} />
                    
                     {/* BODY */}
                    <div className="bodyCardAirDrop">
                        <h5 className="mx-3">{props.NameCreator}</h5>
                        <div className="row justify-content-start mx-1">
                            <div className="col-2 ">
                                <div className="img-fluid rounded-circle" style={{backgroundImage: `url(${`https://source.unsplash.com/random/${Math.ceil(Math.random() * 1000 + 300)}x350/?person`})`, height: 40+'px', width: 40+'px',  backgroundRepeat: 'no-repeat', left: 0,backgroundSize: 'cover', backgroundPosition: "center" }} />
                            </div>
                            
                            <div className="col-5 text-secondary mt-2 h6 ">
                                {props.NameMusic}
                            </div>

                            
                            <button className="font-weight-bold text-center p-3 mt-n2 btnBids" style={{
                                    borderRadius: '48px',
                                    backgroundColor: 'rgba(0, 102, 255, 0.15)',
                                    color: 'rgb(0, 102, 255)'
                                    }}>Be invest-in
                            </button>
                        </div>
                        <div className="text-center" style={{backgroundColor: "#F1F3F4"}}>
                                <ReactAudioPlayer
                                src={music}
                                // autoPlay
                                controls
                                />
                        </div>
                  

                                    
                    </div>

                    {/* FOOTER */}    
                    <div className="footerCardAirDrop2">

                        <div className="row justify-content-start mx-2">

                            <div className="col-6">
                                <h5 className="text-secondary">Since</h5>
                                <h5 className="text-white">10M 24Sec</h5>
                            </div>
                            <div className="col-6">
                                <h5 className="text-secondary">remains to be won</h5>
                                <h5 className="text-white">4888 </h5>
                            </div>

                        </div>
                        
                    </div>
                </Link>                
            </div>
       
    )
}

export default CardAirDrop
