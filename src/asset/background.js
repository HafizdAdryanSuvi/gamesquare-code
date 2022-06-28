import React from 'react';
import {Container} from "react-bootstrap";
import bgvideo from '../video/bgvideo.mp4'


const Background=()=> {
    return (
        <Container style={{marginTop:"2rem"}} fluid>
            <video className='videoTag' autoPlay loop muted>
                <source src={bgvideo} type='video/mp4' />
            </video>
        </Container>
    );
}

export default Background;