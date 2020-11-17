import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Banner.css';
import { FaPlayCircle } from 'react-icons/fa';
import ReactPlayer from 'react-player'


const Banner = () => {
  const [player, setPlayer] = useState(false)
    return (
        <div className="background-image">
          
            <div  className="background-image-overlay">
                <Container>
                    <Row>
                        <Col md={6} className="text-white" style={{ zIndex: "10", paddingTop: "150px" }}>
                            <h1 className="font-weight-bold">THE BEST FITNESS STUDIO <br /> IN TOWN</h1>
                            <p className="pt-4 d-block">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aspernatur delectus, nam adipisci neque eum numquam. Itaque, alias facilis expedita dignissimos.</p>
                            <br />
                            <Link to="/pricing">
                                <button className="banner-btn">Join us</button>
                            </Link>
                        </Col>
                        <Col md={12} lg={6} className="text-white" style={{ zIndex: "10", paddingTop: "160px" }}>
                            <div className="text-center pt-3 w-100">
                            {
                                player&&<ReactPlayer url='https://youtu.be/aCi_iSDhV7Y'/>
                            }
                               {
                                   !player&& <span onClick={()=>setPlayer(true)} style={{ cursor: "pointer", fontSize: "80px", color: "gray" }}><FaPlayCircle /></span>
                               }
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Banner;