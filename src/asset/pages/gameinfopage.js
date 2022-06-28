import React from "react";
import {Card, Container, Carousel} from "react-bootstrap";
import Navbarcom from "../components/navbarcom";
import Slide from "../components/home/slide";
import Popular from "../components/home/popular";
import List from "../components/home/list";
import Ourpick from "../components/home/ourpick";
import Contact from "../components/home/contact";

const Gameinfopage=()=> {
    return (
        <div className="App bg-dark">
            <center>
                <Container className="bg-dark pt-5 pb-5">
                    <Card className="bg-danger">
                        <Card.Header>
                            <Navbarcom/>
                        </Card.Header>
                        <Card.Body>

                        </Card.Body>
                    </Card>
                </Container>
            </center>
        </div>
    );
}
export default Gameinfopage;