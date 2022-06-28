import React, {Component} from "react";
import {Button, Card, Form} from "react-bootstrap";
import {Link} from "react-router-dom";
import Background from "../background";
import axios from "axios";


class Register extends Component{
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeRegion = this.onChangeRegion.bind(this);
        this.onChangePass = this.onChangePass.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state ={
            name:'',
            email:'',
            phone:'',
            region:'',
            pass:'',
        }
    }

    onChangeName(e){
        this.setState({
            name:e.target.value
        });
    }

    onChangeEmail(e){
        this.setState({
            email:e.target.value
        });
    }

    onChangePhone(e){
        this.setState({
            phone:e.target.value
        });
    }

    onChangeRegion(e){
        this.setState({
            region:e.target.value
        });
    }

    onChangePass(e){
        this.setState({
            pass:e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();

        const obj ={
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            region: this.state.region,
            pass: this.state.pass,
        };

        this.setState({
            name: '',
            email:'',
            phone:'',
            region:'',
            pass:'',

        })
    }

render()
    {
        return (
            <div className="App">
                <Background/>
                <center>
                    <Card bg="dark" border="danger" style={{width: "40rem", marginTop: "6rem"}}>
                        <Form>
                            <Card.Title>
                                <h3 className="text-white bg-danger p-2">Sign In</h3>
                            </Card.Title>

                            <Form.Group className="m-3 me-5 ms-5" controlId="formBasicName">
                                <Form.Label className="text-white">Full Name</Form.Label>
                                <Form.Control type="name" placeholder="Enter your name"
                                              value={this.state.name}
                                              onChange={this.onChangeName}/>
                            </Form.Group>

                            <Form.Group className="m-3 me-5 ms-5" controlId="formBasicEmail">
                                <Form.Label className="text-white">Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email"
                                              value={this.state.email}
                                              onChange={this.onChangeEmail}/>
                            </Form.Group>

                            <Form.Group className="m-3 me-5 ms-5" controlId="formBasicNumber">
                                <Form.Label className="text-white">Phone Number</Form.Label>
                                <Form.Control type="number" placeholder="Enter phone number"
                                              value={this.state.phone}
                                              onChange={this.onChangePhone}/>
                            </Form.Group>

                            <Form.Group className="m-3 me-5 ms-5" controlId="formBasicRegion">
                                <Form.Label className="text-white">Region</Form.Label>
                                <Form.Control type="text" placeholder="Enter region"
                                              value={this.state.region}
                                              onChange={this.onChangeRegion}/>
                            </Form.Group>

                            <Form.Group className="m-3 me-5 ms-5" controlId="formBasicPassword">
                                <Form.Label className="text-white">Password</Form.Label>
                                <Form.Control type="password" placeholder="Password"
                                              value={this.state.pass}
                                              onChange={this.onChangePass}/>
                            </Form.Group>

                            <Button className="m-3 d-grid mt-5" variant="danger" type="submit"
                                    onClick={this.onSubmit}>
                                Sign In
                            </Button>

                            <div className="m-3 mt-5">
                                <Link to="/" id="link">
                                    Already have an account?
                                </Link>
                            </div>
                        </Form>
                    </Card>
                </center>
            </div>
        );
    }
}
export default Register;