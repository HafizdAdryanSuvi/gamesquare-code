import React from "react";
import {Button, Card, Form} from "react-bootstrap";
import {Link} from "react-router-dom";
import Background from "../background";
import logo from "./icon/logo.svg"

const Login=()=> {
    return (
        <div className="App">
            <Background/>
            <center>
                <Card className="bg-transparent align-items-center">
                    <img src={logo} style={{width:"8rem", marginTop:"2rem"}}/>
                </Card>
                <Card bg="dark" border="danger" style={{width:"40rem", marginTop:"5rem"}}>
                    <Form>
                        <Card.Title>
                            <h3 className="text-white bg-danger p-2">Login</h3>
                        </Card.Title>
                        <Form.Group className="m-3 me-5 ms-5" controlId="formBasicEmail">
                            <Form.Label className="text-white">Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="m-3 me-5 ms-5" controlId="formBasicPassword">
                            <Form.Label className="text-white">Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Link to="/home" id="link">
                            <Button className="m-3 d-grid mt-5" variant="danger" type="submit">
                                Login
                            </Button>
                        </Link>

                        <div className="m-3 mt-5 text-danger" >
                            <Link to="/register" id="link">
                                Don't have account?
                            </Link>
                        </div>
                    </Form>

                    <Link to="/home" id="link">
                        <Button className="mb-3 d-grid" variant="outline-danger" type="submit">
                            Enter as guest
                        </Button>
                    </Link>
                </Card>
            </center>
        </div>
    );
}
export default Login;