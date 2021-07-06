import React from 'react'
import Nav from 'react-bootstrap/Nav'
import OnSaleComponent from './OnSale'
import OwnedComponent from './Owned'
import LikedComponent from './Liked'
import ActivityComponent from './Activity'
import FolowingComponent from './Folowing'
import "./MyItems.css"

const Index = () => {
    const [onSale, setOnSale] = React.useState(true)
    const [owned, setOwned] = React.useState(false)
    const [liked, setLiked] = React.useState(false)
    const [activity, setActivity] = React.useState(false)
    const [folowing, setFolowing] = React.useState(false)


    function dispatchNav(selectedKey) {

        if (selectedKey === "OnSale") {
            setOwned(false)
            setOnSale(true)
            setLiked(false)
            setActivity(false)
            setFolowing(false)
        }

        if (selectedKey === "Owned") {
            setOwned(true)
            setOnSale(false)
            setLiked(false)
            setActivity(false)
            setFolowing(false)
        }

        if (selectedKey === "Liked") {
            setOwned(false)
            setOnSale(false)
            setLiked(true)
            setActivity(false)
            setFolowing(false)
        }

        if (selectedKey === "Activity") {
            setOwned(false)
            setOnSale(false)
            setLiked(false)
            setActivity(true)
            setFolowing(false)
        }

        if (selectedKey === "Folowing") {
            setOwned(false)
            setOnSale(false)
            setLiked(false)
            setActivity(false)
            setFolowing(true)
        }

        
    }


    return (
        <div style={{minHeight: "80vh"}}>
            <div style={{backgroundImage: `url(${`https://source.unsplash.com/random/${Math.ceil(Math.random() * 1000 + 300)}x350/?nature`})`, height: 35+'vh', width: 100+'%',  backgroundRepeat: 'no-repeat', left: 0,backgroundSize: 'cover', backgroundPosition: "center" }}  />
            <div className="img-fluid rounded-circle mx-auto mt-n5" style={{backgroundImage: `url(${`https://source.unsplash.com/random/${Math.ceil(Math.random() * 1000 + 300)}x350/?human`})`, height: 230+'px', width: 230+'px',  backgroundRepeat: 'no-repeat', left: 0,backgroundSize: 'cover', backgroundPosition: "center" }} />
            <div className="text-center h1">Nahman148</div>
            <div className="text-center h7">Wallet</div>

                <Nav activeKey="/home" className="justify-content-center mt-5"  onSelect={(selectedKey) => dispatchNav(selectedKey) }>

                    <Nav.Item>
                        <Nav.Link className="text-dark mx-4 " style={{borderBottom: "2px solid back"}} eventKey="OnSale">On Sale</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link className="text-dark mx-4" eventKey="Owned">Owned</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link className="text-dark mx-4" eventKey="Liked">Liked</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link className="text-dark mx-4" eventKey="Activity">Activity</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link className="text-dark mx-4" eventKey="Folowing">Folowing</Nav.Link>
                    </Nav.Item>

                </Nav>
                <hr />
                <div className="container-fluid">

                    {onSale && <OnSaleComponent  />}
                    {owned && <OwnedComponent/>}
                    {liked && <LikedComponent />}
                    {activity && <ActivityComponent />}
                    {folowing && <FolowingComponent />}

                </div>

        </div>
    )
}

export default Index
