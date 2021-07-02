import React from 'react'
import imgPlaylist from '../../assets/music.JPG'

const MyPlaylist = () => {
    return (
        <div>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <img src={imgPlaylist} alt="" />
                  
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyPlaylist
