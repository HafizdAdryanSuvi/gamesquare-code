import React from "react";
import {NavbarBrand, Navbar, Container, Nav, Form, Button, FormControl} from "react-bootstrap";
import {Link} from "react-router-dom";
import Logo from "./icon/logo.svg"

const Navbarcom=()=> {

    return (
        <div className="App">
            <Navbar collapseOnSelect expand="lg" bg="danger" variant="dark">
                <Container>
                    <Link to="/home">
                        <NavbarBrand>
                            <img src={Logo} style={{width:"3rem"}} alt={"Logo"}/>
                        </NavbarBrand>
                    </Link>
                    <Link to="/home" className="text-decoration-none">
                        <NavbarBrand className="text-white" style={{fontWeight:"bold"}}>
                            Game Square
                        </NavbarBrand>
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link>
                                <Link to="/cart" id="navlink">
                                    cart
                                </Link>
                            </Nav.Link>

                            <Nav.Link>
                                <Link to="/profile" id="navlink">
                                    profile
                                </Link>
                            </Nav.Link>
                            <Form className="d-inline-flex align-items-end">
                                <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-light">Search</Button>
                            </Form>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}
export default Navbarcom;