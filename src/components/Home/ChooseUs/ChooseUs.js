import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import eightySeven from '../../../Images/Group 87.png';
import eightyEight from '../../../Images/Group 88.png';
import gift from '../../../Images/gift-2.png'
import './ChooseUs.css'
const ChooseUs = () => {
    return (
        <div>
            <div>
                <h1 className="text-center" style={{ fontFamily: "Oswald!important",paddingBottom:"60px",paddingTop:"50px" }}><span style={{ color: "#f9d94d" }}>WHY</span>  YOU CHOOSE US</h1>
            </div>
            <Container>
                <Row>
                    <Col md={4} className="mb-5 text-muted">

                        <div className="fard h-100">
                            <div style={{ height: '80px' }} className="text-center mb-4">

                                <img className="rounded-circle" style={{ height: '80px', width: '80px' }} src={eightyEight} alt="ima" />
                            </div>
                            <div className="text-center mt-2">
                                <h5 className="font-weight-bold">FREE FITNESS TRAINING</h5>
                                <p className="mt-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, suscipit numquam amet consectetur .</p>
                            </div>
                        </div>

                    </Col>
                    <Col md={4} className="mb-5 text-muted">

                        <div className="fard">
                            <div style={{ height: '80px' }} className="text-center mb-4">

                                <img className="rounded-circle" style={{ height: '80px', width: '80px' }} src={gift} alt="ima" />
                            </div>
                            <div className="text-center mt-2">
                                <h5 className="font-weight-bold">TONS OF CARDIO & STRENGTH</h5>
                                <p className="mt-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, suscipit numquam amet consectetur .</p>
                            </div>
                        </div>

                    </Col>
                    <Col md={4} className="mb-5 text-muted">

                        <div className="fard">
                            <div style={{ height: '80px' }} className="text-center mb-4">

                                <img className="rounded-circle" style={{ height: '80px', width: '80px' }} src={eightySeven} alt="ima" />
                            </div>
                            <div className="text-center mt-2">
                                <h5 className="font-weight-bold">NO COMMITMENT MEMBERSHIPS</h5>
                                <p className="mt-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, suscipit numquam amet consectetur .</p>
                            </div>
                        </div>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ChooseUs;