import React from "react";
import {Card, Container, Carousel} from "react-bootstrap";
import Navbarcom from "../components/navbarcom";
import Slide from "../components/home/slide";
import Popular from "../components/home/popular";
import List from "../components/home/list";
import Ourpick from "../components/home/ourpick";
import Contact from "../components/home/contact";

const Homepage=()=> {
    return (
        <div className="App bg-dark">
            <center>
                <Container className="bg-dark pt-5 pb-5">
                    <Card className="bg-danger">
                        <Card.Header>
                            <Navbarcom/>
                        </Card.Header>
                        <Card.Body>
                            <Slide/>
                        </Card.Body>
                        <Card.Body>
                            <Popular/>
                        </Card.Body>
                        <Card.Body>
                            <List/>
                        </Card.Body>
                        <Card.Body>
                            <Ourpick/>
                        </Card.Body>
                        <Card.Footer>
                            <Contact/>
                        </Card.Footer>
                    </Card>
                </Container>
            </center>
        </div>
    );
}
export default Homepage;