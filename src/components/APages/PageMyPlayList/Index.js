import React from 'react'
import Nav from 'react-bootstrap/Nav'
import OnSaleComponent from './OnSale'

import imgPlaylist from '../../../assets/music.JPG'
import "./MyItems.css"
import ComponentLiked from './Liked'


const Index = () => {
    const [Liked, setLiked] = React.useState(true)
    const [Collection, setCollection] = React.useState(false)
    const [Explore, setExplore] = React.useState(false)
    const [Flow, setFlow] = React.useState(false)



    function dispatchNav(selectedKey) {

        if (selectedKey === "Liked") {
            setLiked(true)
            setCollection(false)
            setExplore(false)
            setFlow(false)
        }
        if (selectedKey === "Collection") {
            setLiked(false)
            setCollection(true)
            setExplore(false)
            setFlow(false)
        }
        if (selectedKey === "Explore") {
            setLiked(false)
            setCollection(false)
            setExplore(true)
            setFlow(false)
        }
        if (selectedKey === "Flow") {
            setLiked(false)
            setCollection(false)
            setExplore(false)
            setFlow(true)
        }

    }


    return (
        <div style={{minHeight: "80vh"}}>

            <div style={{backgroundImage: `url(${`https://source.unsplash.com/random/${Math.ceil(Math.random() * 1000 + 300)}x350/?nature`})`, height: 35+'vh', width: 100+'%',  backgroundRepeat: 'no-repeat', left: 0,backgroundSize: 'cover', backgroundPosition: "center" }}  />
            {/* <div className="img-fluid rounded-circle mx-auto mt-n5" style={{backgroundImage: `url(${`https://source.unsplash.com/random/${Math.ceil(Math.random() * 1000 + 300)}x350/?human`})`, height: 230+'px', width: 230+'px',  backgroundRepeat: 'no-repeat', left: 0,backgroundSize: 'cover', backgroundPosition: "center" }} />
            <div className="text-center h1">Nahman148</div>
            <div className="text-center h7">Wallet</div> */}

                <Nav activeKey="/home" className="justify-content-center mt-5"  onSelect={(selectedKey) => dispatchNav(selectedKey) }>

                    <Nav.Item>
                        <Nav.Link className="text-dark mx-4 " eventKey="Liked">Liked</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link className="text-dark mx-4" eventKey="Collection">Collection </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link className="text-dark mx-4" eventKey="Explore">Explore</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link className="text-dark mx-4" eventKey="Flow">Flow</Nav.Link>
                    </Nav.Item>

                </Nav>
                <hr />
                <div className="container-fluid">

                    {Flow && <OnSaleComponent  />}
                    {Liked && <ComponentLiked  />}
                    { Explore  && <OnSaleComponent />}
                    {Collection && <img src={imgPlaylist} alt="" /> }
            
                </div>

        </div>
    )
}

export default Index
