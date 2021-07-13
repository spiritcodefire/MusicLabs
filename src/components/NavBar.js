import React from 'react';
import { Link } from 'react-router-dom'
import {Context} from '../hooks/ContextProvider'

import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Nav from 'react-bootstrap/Nav'

import Torus from '../assets/logoTorus.svg'
import portis from '../assets/logoPortis.svg'
import arcEnCiel from '../assets/arc-en-ciel.png'
import Coinbase from '../assets/coinBase.svg'
import fortMatic from '../assets/fortmatic.svg'
import logoMusicLabs from '../assets/logo/musiclabs-horigontal.png'

function MyVerticallyCenteredModal(props) {
    return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>

        <Modal.Body className="show-grid">
            <Container>
                <Row>
                    <h1>Connect your wallet</h1>
                    <p className="font-bolder">Connect with one of available wallet providers or create an ew wallet. What is a wallet ?</p>
                
                    <Col xs={12} md={4}>
                        
                        <div className="border border-secondary shadow-lg rounded-lg m-1 p-3 cursor" style={{height: "200px", width: "200px"}}>
                            <img height="150px"  src={Torus} alt="img Torus" />
                        <p>Torus</p> 
                        </div>
                    </Col>
                    <Col xs={12} md={4}>
                        <div className="border border-secondary shadow-lg rounded-lg m-1 p-3 cursor" style={{height: "200px", width: "200px"}}>
                            <img   height="150px"  src={portis} alt="portis" />
                            <p>Portis</p>
                        </div>
                    </Col>

                    <Col xs={12} md={4}>
                        <div className="border border-secondary shadow-lg rounded-lg m-1 p-3 cursor" style={{height: "200px", width: "200px"}}>
                            <img  height="150px"  src={arcEnCiel} alt="WalletConnect" />
                            <p>WalletConnect</p>
                        </div>
                    </Col>
        
                    <Col xs={12} md={4}>
                        <div className="border border-secondary shadow-lg rounded-lg m-1 p-3 cursor" style={{height: "200px", width: "200px"}}>
                            <img  height="150px"  src={Coinbase} alt="Coinbase" />
                            <p>Coinbase</p>
                        </div>
                    </Col>

                    <Col xs={12} md={4}>
                        <div className="border border-secondary shadow-lg rounded-lg m-1 p-3 cursor" style={{height: "200px", width: "200px"}}>
                            <img src={fortMatic}  height="150px"  alt="Fortmatic" />
                            <p>Fortmatic</p>
                        </div>
                    </Col>

                    <Col xs={12} md={4}>
                        <div className="border border-secondary shadow-lg rounded-lg m-1 p-3 cursor" style={{height: "200px", width: "200px"}}>
                            Autre
                        </div>
                    </Col>
                </Row>    
            </Container>     
        </Modal.Body>
            
        <Modal.Footer>
            <Button variant="info" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
    </Modal>
    );
  }

const NavBar = () => {
    const [modalShow, setModalShow] = React.useState(false);
    const context = React.useContext(Context)
    
    return (
        <>

    {!context.NavBar &&

        <div className="sticky-top">
            <Navbar bg="dark" expand="lg">

                <Navbar.Brand > 
                    <div className="row">
                        <Link to="/">
                            <div style={{fill: 'white'}} className="col-3">
                                <img height="45px" src={logoMusicLabs} alt="logo music labs the new music economy" />
                            </div>
                        </Link>
                    </div>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
               
                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className="mr-auto mx-5">

                        <Nav.Link className="mx-3" as={Link} to="/playlist">My PlayList</Nav.Link>

                        {/* <Nav.Link className="mx-3" as={Link} to="/Launch">Launch</Nav.Link> */}

                        {/* <Nav.Link className="mx-3" as={Link} to="/library">library</Nav.Link> */}

                        <Nav.Link className="mx-3" onClick={() => setModalShow(true)}  >Connect Your Wallet</Nav.Link>

                        <Nav.Link className="mx-3" as={Link} to="/items" >My items</Nav.Link>

                        <Nav.Link className="mx-3" as={Link} to="/artist" >Artist Interface</Nav.Link>

                        <Nav.Link className="mx-3" as={Link} to="/metamask" >Connect Metamask</Nav.Link>

                    </Nav>

                    <Form inline>
                        <FormControl type="text" placeholder="Search by Artist" className="mr-sm-2" />
                        <Button variant="outline-danger">Search</Button>
                    </Form>
                    
                </Navbar.Collapse>
                
            </Navbar>

        </div>
    }
          
        <MyVerticallyCenteredModal  show={modalShow} onHide={() => setModalShow(false)} />
            
        </>
    )
}
export default NavBar