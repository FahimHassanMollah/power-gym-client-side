import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import NavBar from '../Home/NavBar/NavBar';
import './CommonBanner.css'
const CommonBanner = (props) => {
    return (
        <div>
             <NavBar></NavBar>
            <div className="background-imageClass">

                <div className="background-image-overlayClass">
                    <Container >
                        <Row >
                            <Col md={12} style={{ zIndex: "10", paddingTop: "150px" }}>
    <h1 className="text-white text-center font-weight-bold" style={{ fontSize: "55px" }}>{props.text}</h1>
                            </Col>

                        </Row>
                    </Container>
                </div>
            </div>
            <div></div>
        </div>
    );
};

export default CommonBanner;