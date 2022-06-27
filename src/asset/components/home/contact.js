import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import ig from "../icon/instagram.png";
import fb from "../icon/facebook.png";
import wa from "../icon/whatsapp.png";
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
                            <img src={ig} className="m-2"/>
                            <img src={fb} className="m-2"/>
                            <img src={wa} className="m-2"/>
                            <img src={dc} className="m-2"/>
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