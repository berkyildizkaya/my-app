import React from "react";
import {Container} from "react-bootstrap";
import Slider from "./Slider";

class Content extends React.Component{
    render() {
        return (
            <Container className="mt-3">
                <Slider></Slider>
                
            </Container>
        );
    }
}

export default Content;