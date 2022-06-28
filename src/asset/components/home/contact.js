import React from "react";
import {Col, Container, Dropdown, Row} from "react-bootstrap";
import ig from "../icon/instagram.png";
import fb from "../icon/facebook.png";
import gh from "../icon/github.png";
import dc from "../icon/discord.png";

const Contact=()=> {
    return (
        <div className="App">
            <Container>
                <footer className="text-center text-lg-start bg-danger text-black mt-5">
                    <section
                        className="d-flex justify-content-center justify-content-lg-between p-4">
                        <div className="me-5 d-none d-lg-block">
                            <span>Contact us on social networks:</span>
                        </div>
                        <div>
                            <Row>
                                <Col>
                                    <Dropdown variant="danger">
                                        <Dropdown.Toggle variant="danger" type="button">
                                            <img src={ig}/>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                                <Dropdown.Item href="https://www.instagram.com/hfzd.a/" id="contact">Hafizd Adryan Suvi</Dropdown.Item>
                                                <Dropdown.Item href="https://www.instagram.com/fiikrisultony_/" id="contact">M. Fikri Sulthoni</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Col>
                                <Col>
                                    <Dropdown variant="danger">
                                        <Dropdown.Toggle variant="danger" type="button">
                                            <img src={fb}/>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item href="https://www.facebook.com/profile.php?id=100015075125677" id="contact">Hafizd Adryan Suvi</Dropdown.Item>
                                            <Dropdown.Item href="https://www.facebook.com/fikri.sulthony.9" id="contact">M. Fikri Sulthoni</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Col>
                                <Col>
                                    <Dropdown variant="danger">
                                        <Dropdown.Toggle variant="danger" type="button">
                                            <img src={gh}/>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item href="https://github.com/HafizdAdryanSuvi">Hafizd Adryan Suvi</Dropdown.Item>
                                            <Dropdown.Item href="https://github.com/FikriSulthoni">M. Fikri Sulthoni</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Col>
                                <Col>
                                    <Dropdown variant="danger">
                                        <Dropdown.Toggle variant="danger" type="button">
                                            <img src={dc}/>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item>Hafizd Adryan Suvi</Dropdown.Item>
                                            <Dropdown.Item>M. Fikri Sulthoni</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Col>
                            </Row>
                        </div>
                    </section>
                    <center>
                        <div className="p-4">
                            <p>
                                Made with <a target="_blank"  href="https://reactjs.org/" className="text-white">React </a>and styled with <a target="_blank" href="https://getbootstrap.com/" className="text-white">Bootstrap</a>
                            </p>
                        </div>
                    </center>
                </footer>
            </Container>
        </div>
    );
}
export default Contact;