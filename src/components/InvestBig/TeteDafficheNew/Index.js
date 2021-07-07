import React from 'react'
import Nav from 'react-bootstrap/Nav'
import OnSaleComponent from './OnSale'
import OwnedComponent from './Owned'
import LikedComponent from './Liked'
import ActivityComponent from './Activity'
import FolowingComponent from './Folowing'
import RentaComponent from './Renta'
import "./MyItems.css"

const Index = () => {
    const [renta, setRenta] = React.useState(true)
    const [onSale, setOnSale] = React.useState(false)
    const [owned, setOwned] = React.useState(false)
    const [liked, setLiked] = React.useState(false)
    const [activity, setActivity] = React.useState(false)
    const [folowing, setFolowing] = React.useState(false)


    function dispatchNav(selectedKey) {

        if (selectedKey === "Renta") {
            setRenta(true)
            setOwned(false)
            setOnSale(false)
            setLiked(false)
            setActivity(false)
            setFolowing(false)
        }

        if (selectedKey === "OnSale") {
            setOwned(false)
            setOnSale(true)
            setLiked(false)
            setActivity(false)
            setFolowing(false)
            setRenta(false)
        }

        if (selectedKey === "Owned") {
            setOwned(true)
            setOnSale(false)
            setLiked(false)
            setActivity(false)
            setFolowing(false)
            setRenta(false)
        }

        if (selectedKey === "Liked") {
            setOwned(false)
            setOnSale(false)
            setLiked(true)
            setActivity(false)
            setFolowing(false)
            setRenta(false)
        }

        if (selectedKey === "Activity") {
            setOwned(false)
            setOnSale(false)
            setLiked(false)
            setActivity(true)
            setFolowing(false)
            setRenta(false)
        }

        if (selectedKey === "Folowing") {
            setOwned(false)
            setOnSale(false)
            setLiked(false)
            setActivity(false)
            setFolowing(true)
            setRenta(false)
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
                        <Nav.Link className="text-dark mx-4 " eventKey="Renta">Rentability</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link className="text-dark mx-4 " eventKey="OnSale">Listen Creation</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link className="text-dark mx-4" eventKey="Owned">Top Vente</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link className="text-dark mx-4" eventKey="Liked">Folow this artist</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link className="text-dark mx-4" eventKey="Activity">Artist's MarketPlace</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link className="text-dark mx-4" eventKey="Folowing">History</Nav.Link>
                    </Nav.Item>

                </Nav>
                <hr />
                <div className="container-fluid">

                    {renta && <RentaComponent  />}
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
