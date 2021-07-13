import React from 'react'
import {Context} from '../../../hooks/ContextProvider'

import { Link } from 'react-router-dom' ;
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import logoMusicLabs from '../../../assets/logo/musiclabs--472.png'


const NavBarArtist = () => {
    const context = React.useContext(Context)



    return (
        <>
            { context.NavBar && 
            <Navbar bg="dark" expand="lg">

                <Link to="/interfaceArtist">
                    <Navbar.Brand > 
                        <div className="row justify-content-center">

                            <div style={{fill: 'white'}} className="col-3">
                               <img src={logoMusicLabs} height="50px" alt="logo music labs" />
                            </div>
                          
                           
                        </div>
                        
                       
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                </Link>

                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className="mr-auto mx-5">

                        <Nav.Link  className="mx-3 " as={Link} to="/interfaceArtist">Create</Nav.Link>

                        <Nav.Link className="mx-3" as={Link} to="/Royalties">Royalties</Nav.Link>

                        <Nav.Link className="mx-3" as={Link} to="/MyFans">My Fans</Nav.Link>

                        <Nav.Link className="mx-3" as={Link} to="/verified">Get Verified</Nav.Link>

                        <Nav.Link className="mx-3" as={Link} onClick={()=> context.setNavBar(false) } to="/">Deconnexion</Nav.Link>

                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search by Elie" className="mr-sm-2" />
                        <Button variant="outline-danger">Search</Button>
                    </Form>
                    
                </Navbar.Collapse>
                
            </Navbar>
            }
        </>
    )
}

export default NavBarArtist
