import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import classData from '../../fakeData/classData';
import Footer from '../Footer/Footer';
import NavBar from '../Home/NavBar/NavBar';
import OurClassesCard from '../OurClassesCard/OurClassesCard';
import './OurClasses.css'
const OurClasses = () => {
    const [ourClass, setOurClass] = useState([]);
    console.log(ourClass);
    useEffect(() => {
       setOurClass(classData);
    }, [])
    return (
        <div>
            <NavBar></NavBar>
            <div className="background-imageClass">

                <div className="background-image-overlayClass">
                    <Container >
                        <Row >
                            <Col md={12} style={{ zIndex: "10", paddingTop: "150px" }}>
                                <h1 className="text-white text-center font-weight-bold" style={{ fontSize: "55px" }}>OUR CLASSES</h1>
                            </Col>

                        </Row>
                    </Container>
                </div>
            </div>
            <div>
                <Container>
                    <Row className="d-flex justify-content-center">
                        
                            {
                              ourClass.length >0 && ourClass.map((clas,index)=><OurClassesCard clas={clas} key={index}></OurClassesCard>)
                            }
                           
                      
                    </Row>
                </Container>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default OurClasses;