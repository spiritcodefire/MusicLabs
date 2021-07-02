import React from 'react' ;
import ImgTravaux from '../../../../assets/Travaux.jpg'


const MyFans = () => {
    return (
        <div>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <img src={ImgTravaux}  alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyFans
