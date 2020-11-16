import React from 'react';
import bruc from '../../../Images/bruce-mars-gJtDg6WfMlQ-unsplash.png';
import arthur from '../../../Images/arthur-edelman-qfjuh4OLdxw-unsplash.jpg';
import { Col, Container, Row } from 'react-bootstrap';
import './Training.css'
const Training = () => {
    return (
        <div>
            <div>
                <h1 className="text-center">TRAINING <span style={{ color: "goldenrod", fontFamily: "Oswald" }}>PROGRAM</span></h1>
            </div>
            <Container className="py-3">
                <Row>
                    <Col md={6} className="py-2 fard">
                        <div className="main-image-div">
                            <img className="w-100" style={{height:"400px"}} src={bruc} alt="" />
                            <div class="text-block">
                                <p  className="p-3 pr-5 m-0" style={{fontFamily:"Oswald",fontWeight:"inherit"}}>YOGA TRAINING SESSION</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} className="py-2 fard">
                        <div className="main-image-div">
                            <img className="w-100" style={{height:"400px"}} src={arthur} alt="" />
                            <div class="text-block">
                                <p className="p-3 pr-5 m-0" style={{fontFamily:"Oswald",fontWeight:"inherit"}}>CARDIO TRAINING SESSION</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
export default Training;