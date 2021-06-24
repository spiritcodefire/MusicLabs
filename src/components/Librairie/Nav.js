import React from 'react'
import "./Librairie.css"
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

const NavSort = () => {
    return (
        <>
            <Nav variant="pills" activeKey="1" >

                <div className=" px-4 mx-2 h1">Explore</div>

                <Nav.Item>
                    <div className="btnArt px-4 mx-2 bg-dark text-white">Pop</div>
                </Nav.Item>

                <Nav.Item>
                    <div className="btnArt px-4  mx-2">Rap</div>
                </Nav.Item>

                <Nav.Item>
                    <div className="btnArt px-4  mx-2">Classique</div>
                </Nav.Item>

                <Nav.Item>
                    <div className="btnArt px-4  mx-2">Rock</div>
                </Nav.Item>

                <Nav.Item>
                    <div className="btnArt px-4  mx-2">Electro</div>
                </Nav.Item>

                <Nav.Item>
                    <div className="btnArt px-4  mx-2">R&B</div>
                </Nav.Item>

                <Nav.Item>
                    <div className="btnArt px-4  mx-2">Latino</div>
                </Nav.Item>

                <Nav.Item>
                    <div className="btnArt px-4  mx-2">Métal</div>
                </Nav.Item>

                <Nav.Item>
                    <div className="btnArt px-4  mx-2">Musique de Film</div>
                </Nav.Item>

                <Nav.Item>
                    <div className="btnArt px-4  mx-2">Jazz</div>
                </Nav.Item>

                <Nav.Item>
                    <div className="btnArt px-4  mx-2">Autre type</div>
                </Nav.Item>

                <Nav.Item>
                    <div className="btnArt px-4  mx-2">Filter & Sort</div>
                </Nav.Item>

            </Nav>
        </>
    )
}

export default NavSort
