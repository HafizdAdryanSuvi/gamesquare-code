import React from "react";
import {Col, Image, Row} from "react-bootstrap";
import pp from "../icon/logo.svg";

const Userdata=()=> {
    return (
        <div className="App text-white">
            <center>
                <Row className="pt-5 pe-5">
                    <Col xs md lg ="4">
                        <Image roundedCircle src={pp} className="w-50"/>
                        <h4 className="pt-3">username</h4>
                    </Col>
                    <Col xs md lg="8" className="p-4 bg-dark rounded-3">
                        <Row className="border-bottom p-2">
                            information
                        </Row>
                        <Row className="text-start p-2 pt-4">
                            <Col>
                                email
                            </Col>
                            <Col>
                                : mail
                            </Col>
                        </Row>
                        <Row className="text-start p-2">
                            <Col>
                                phone
                            </Col>
                            <Col>
                                : number
                            </Col>
                        </Row>
                        <Row className="text-start p-2">
                            <Col>
                                region
                            </Col>
                            <Col>
                                : indo
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </center>
        </div>
    );
}
export default Userdata;