import React from "react";
import {Button, Card, Form} from "react-bootstrap";
import {Link} from "react-router-dom";

const Signin=()=> {
    return (
        <div className="App">
            <center>
                <Card bg="dark" border="danger" style={{width:"40rem", marginTop:"10rem"}}>
                    <Form>
                        <Card.Title>
                            <h3 className="text-white bg-danger p-2">Sign In</h3>
                        </Card.Title>

                        <Form.Group className="m-3 me-5 ms-5" controlId="formBasicName">
                            <Form.Label className="text-white">Username</Form.Label>
                            <Form.Control type="name" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="m-3 me-5 ms-5" controlId="formBasicEmail">
                            <Form.Label className="text-white">Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="m-3 me-5 ms-5" controlId="formBasicPassword">
                            <Form.Label className="text-white">Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Button className="m-3 d-grid mt-5" variant="danger" type="submit">
                            Sign In
                        </Button>

                        <div className="m-3 mt-5">
                            <Link to="/" >
                                Already have an account?
                            </Link>
                        </div>
                    </Form>
                </Card>
            </center>
        </div>
    );
}
export default Signin;