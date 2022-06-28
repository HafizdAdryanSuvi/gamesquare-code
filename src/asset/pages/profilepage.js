import React from "react";
import {Card, Container, Carousel} from "react-bootstrap";
import Navbarcom from "../components/navbarcom";
import Userdata from "../components/profile/userdata";

const Profilepage=()=> {
    return (
        <div className="App bg-dark">
            <center>
                <Container className="pt-5 pb-5">
                    <Card className="bg-danger">
                        <Card.Header>
                            <Navbarcom/>
                        </Card.Header>
                        <Card.Body>
                            <Userdata/>
                        </Card.Body>
                    </Card>
                </Container>
            </center>
        </div>
    );
}
export default Profilepage;