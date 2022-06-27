import React from "react";
import {Carousel} from "react-bootstrap";
import valo from "../image/valorant.png";
import odes from "../image/odyssey.png";
import apex from "../image/apex.png";


const Slide=()=> {
    return (
        <div className="App bg-dark rounded-3">
            <center>
                <Carousel variant="dark">
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-75"
                            src={odes}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                            className="d-block w-75"
                            src={valo}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-75"
                            src={apex}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </center>
        </div>
    );
}
export default Slide;