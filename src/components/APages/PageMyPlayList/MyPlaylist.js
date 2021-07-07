import React from 'react'
import imgPlaylist from '../../../assets/music.JPG'
import Table from 'react-bootstrap/Table'

const MyPlaylist = () => {


    const array = [ 1,2,3,4,5,6,7,8,9,10 ]

    return (
        <div>
            <div className="container-fluid">
                <div className=" row justify-content-center ">
                    <div className="col-9">
                        <div className="row justify-content-start">

                            <div className="col-2">
                                <div className="img-fluid" style={{backgroundImage: `url(${`https://source.unsplash.com/random/${Math.ceil(Math.random() * 1000 + 300)}x350/?singer`})`, height: 250+'px', width: 100+'%',  backgroundRepeat: 'no-repeat', left: 0 ,backgroundSize: 'cover', backgroundPosition: "center", borderRadius: '5px 5px 5px 5px' }} />
                            </div>

                            <div className="col-3">
                                <h2>Happy Hits</h2>
                                <p>Notre sélection de hits feel-good pour vous donner un coup de boost!</p>
                            </div>

                        </div>

                        <div className="row justify-content-between">

                            <div className="col-4 ">
                                <div className="row justify-content-start">
                                    <div className="col-5 ">
                                        <div className="p-2 text-white h6 pl-3" style={{backgroundColor: "rgb(239, 84, 102)", borderRadius: "20px 20px 20px 20px"}}>REPRENDRE</div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-3 border rounded-lg">Rechercher</div>

                        </div>

                        <Table responsive>
                            <thead>
                                <tr>
                                <th>#</th>
                                {Array.from({ length: 10 }).map((_, index) => (
                                    <th key={index}>Table heading</th>
                                ))}
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>1</td>
                                {Array.from({ length: 10 }).map((_, index) => (
                                    <td key={index}>Table cell {index}</td>
                                ))}
                                </tr>
                                <tr>
                                <td>2</td>
                                {Array.from({ length: 10 }).map((_, index) => (
                                    <td key={index}>Table cell {index}</td>
                                ))}
                                </tr>
                                <tr>
                                <td>3</td>
                                {Array.from({ length: 10 }).map((_, index) => (
                                    <td key={index}>Table cell {index}</td>
                                ))}
                                </tr>
                            </tbody>
                        </Table>

                    </div>

                    <img src={imgPlaylist} alt="" />
                </div>
            </div>
        </div>
    )
}

export default MyPlaylist
