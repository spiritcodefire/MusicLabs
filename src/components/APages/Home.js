import React, {useContext, useEffect} from 'react';
import { Context } from '../../hooks/ContextProvider'
// import { ReactVideo } from "reactjs-media";
// import Video from "../../assets/video.mp4"
import Tetedaffiche from "../TeteDaffiche/Tetedaffiche"
import Lancement from '../Launch'
import AirDrop from '../AirDrop/Index'
import Librairie from '../Librairie/Index'
import Invest from '../Invest/Index'

const Home = () => {
    const context = useContext(Context)

    useEffect(() => {
        context.setNavBar(true)
    }, [])

    return (
        <>
            {/* <div className="">
                <ReactVideo
                    src={Video}
                    playing={true}
                    poster="https://www.example.com/poster.png"
                    primaryColor="red"
                    allow='autoplay; encrypted-media'
                />
            </div> */}

            <Tetedaffiche />

            <Lancement />

            <div className="container-fluid">
                <hr />   
            </div>
            
            <AirDrop />
            
            <Librairie />

            <Invest />

        </>
    )
}
export default Home


