import React from 'react'
import './Lancement.css'
import Cardlancement from './CardLancement'

const Lancement = () => {
    return (
        <div className="container-fluid">

            <div className="row justify-content-start mt-4">
                <div className="col-auto "> <h2>Launch by the Hotest new single</h2></div>
                <div className="col-1 "><div className="feu mt-n3 ml-n4"></div></div>
            </div>

            <div className="row justify-content-center">

               

                <Cardlancement />
                <Cardlancement />
                <Cardlancement />
                <Cardlancement />
                <Cardlancement />


               




               
            </div>

         
            

        </div>
    )
}

export default Lancement
