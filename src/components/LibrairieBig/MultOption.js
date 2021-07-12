import React from 'react' ;
import  Nav from 'react-bootstrap/Nav' ;
import OwnersPage from "./Owners" ;
import BidsComponent from './Bids' ;
import HistoryComponent from './History'

const MultOption = () => {
    const [Owners, setOwners] = React.useState(true)
    const [Bids, setBids] = React.useState(false)
    const [History, setHistory] = React.useState(false)


    function dispatchNav(selectedKey) {

        if (selectedKey === "Owners") {
            setOwners(true)
            setBids(false)
            setHistory(false)
        }

        if (selectedKey === "Bids") {
            setOwners(false)
            setBids(true)
            setHistory(false)
        }

        if (selectedKey === "History") {
            setOwners(false)
            setBids(false)
            setHistory(true)
        }

    }


    return (
        <div style={{minHeight: "30vh"}}>


                <Nav activeKey="/home" className="justify-content-center mt-5"  onSelect={(selectedKey) => dispatchNav(selectedKey) }>

                    <Nav.Item>
                        <Nav.Link className="text-dark mx-4 " eventKey="Owners">Owners</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link className="text-dark mx-4" eventKey="Bids">Bids </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link className="text-dark mx-4" eventKey="History">History</Nav.Link>
                    </Nav.Item>

                </Nav>
                <hr />
                <div className="container-fluid">

                    {Owners   && <OwnersPage /> }
                    {Bids     && <BidsComponent /> }
                    {History  && <HistoryComponent /> }

                </div>

        </div>
    )
}


export default MultOption





