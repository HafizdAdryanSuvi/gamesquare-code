import React from "react";
import {Card, CardGroup, Carousel, Col, Container, Row} from "react-bootstrap";
import dying from "../image/dying_light_2.jpg";
import elden from "../image/elden_ring.jpg";
import mh from "../image/mh_rise.jpg";
import rdr from "../image/rdr2.jpg";
import terra from "../image/terra.png";
import witch from "../image/thewitcher3.jpg"


const List=()=> {
    return (
        <div className="App">
            <center>
                <Container fluid className="bg-dark rounded-3">
                    <Row xs={1} xl={3}>
                        <Col>
                            <h5 className="text-white m-2">New Releases</h5>
                            <Row>
                                <Col>
                                    <Card className="m-2 w-75 bg-dark">
                                        <Card.Img variant="top" src={dying} />
                                    </Card>
                                </Col>
                                <Col>
                                    <Card className="m-2 bg-dark text-white border-dark">
                                        hao
                                    </Card>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Card className="m-2 w-75 bg-dark">
                                        <Card.Img variant="top" src={elden} />
                                    </Card>
                                </Col>
                                <Col>
                                    <Card className="m-2 bg-dark text-white border-dark">
                                        hao
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <h5 className="text-white m-2">Top Seller</h5>
                            <Row>
                                <Col>
                                    <Card className="m-2 w-75 bg-dark">
                                        <Card.Img variant="top" src={mh} />
                                    </Card>
                                </Col>
                                <Col>
                                    <Card className="m-2 bg-dark text-white border-dark">
                                        hao
                                    </Card>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Card className="m-2 w-75 bg-dark">
                                        <Card.Img variant="top" src={rdr} />
                                    </Card>
                                </Col>
                                <Col>
                                    <Card className="m-2 bg-dark text-white border-dark">
                                        hao
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <h5 className="text-white m-2">Best Review</h5>
                            <Row>
                                <Col>
                                    <Card className="m-2 w-75 bg-dark">
                                        <Card.Img variant="top" src={witch} />
                                    </Card>
                                </Col>
                                <Col>
                                    <Card className="m-2 bg-dark text-white border-dark">
                                        hao
                                    </Card>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Card className="m-2 w-75 bg-dark">
                                        <Card.Img variant="top" src={terra} />
                                    </Card>
                                </Col>
                                <Col>
                                    <Card className="m-2 bg-dark text-white border-dark">
                                        hao
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </center>
        </div>
    );
}
export default List;