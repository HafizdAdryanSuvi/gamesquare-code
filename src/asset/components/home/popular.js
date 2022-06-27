import React from "react";
import {Card, CardGroup, Col, Container, Row} from "react-bootstrap";
import lol from "../image/lol.png";
import gta from "../image/gta5.jpg";
import mine from "../image/minecraft.png";
import csgo from "../image/csgo.jpg";
import {Link} from "react-router-dom";

const Popular=()=> {
    return (
        <div className="App">
            <center>
                <h3 className="bg-dark text-white p-2 rounded-3">Popular Games</h3>
                <Row xs={2} xl={4}>
                    <Col>
                        <Link to="/info">
                            <Card className="m-2 bg-danger">
                                <Card.Img variant="top" src={lol} />
                            </Card>
                        </Link>
                    </Col>
                    <Col>
                        <Card className="m-2 bg-danger">
                            <Card.Img variant="top" src={gta} />
                        </Card>
                    </Col>
                    <Col>
                        <Card className="m-2 bg-danger">
                            <Card.Img variant="top" src={mine} />
                        </Card>
                    </Col>
                    <Col>
                        <Card className="m-2 bg-danger">
                            <Card.Img variant="top" src={csgo} />
                        </Card>
                    </Col>
                </Row>
            </center>
        </div>
    );
}
export default Popular;