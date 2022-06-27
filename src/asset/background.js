import React from 'react';
import {Card, Container} from "react-bootstrap";
import bgvideo from '../video/bgvideo.mp4'
import Login from "./components/login";


const Homepage=()=> {
    return (
        <Container style={{marginTop:"2rem"}} fluid>
            <video className='videoTag' autoPlay loop muted>
                <source src={bgvideo} type='video/mp4' />
            </video>
            <Login/>
        </Container>
    );
}

export default Homepage;