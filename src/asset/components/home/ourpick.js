import React from "react";
import {Card, CardGroup, Col, Container, Row} from "react-bootstrap";
import dota from "../image/dota.png";
import phasmo from "../image/phasmo.png";
import heat from "../image/heat.jpg";
import skyrim from "../image/skyrim.jpg";

const Ourpick=()=> {
    return (
        <div className="App">
            <center>
                <h3 className="bg-dark text-white p-2 rounded-3">Our Pick</h3>
                <Row xs={2} xl={4}>
                    <Col>
                        <Card className="m-2 bg-danger">
                            <Card.Img variant="top" src={dota} />
                        </Card>
                    </Col>
                    <Col>
                        <Card className="m-2 bg-danger">
                            <Card.Img variant="top" src={phasmo} />
                        </Card>
                    </Col>
                    <Col>
                        <Card className="m-2 bg-danger">
                            <Card.Img variant="top" src={heat} />
                        </Card>
                    </Col>
                    <Col>
                        <Card className="m-2 bg-danger">
                            <Card.Img variant="top" src={skyrim} />
                        </Card>
                    </Col>
                </Row>
            </center>
        </div>
    );
}
export default Ourpick;