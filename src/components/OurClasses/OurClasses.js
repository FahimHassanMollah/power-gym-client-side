import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import classData from '../../fakeData/classData';
import CommonBanner from '../CommonBanner/CommonBanner';
import Footer from '../Footer/Footer';
import NavBar from '../Home/NavBar/NavBar';
import OurClassesCard from '../OurClassesCard/OurClassesCard';
import './OurClasses.css'
const OurClasses = () => {
    const [ourClass, setOurClass] = useState([]);
    // console.log(ourClass);
    useEffect(() => {
        //    setOurClass(classData);
        fetch('https://murmuring-refuge-17049.herokuapp.com/getAllClass')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setOurClass(data);
            })
    }, [])
    return (
        <div>
            <CommonBanner text={"OUR CLASSES"}></CommonBanner>
            <div>
                <Container>
                    <Row className="d-flex justify-content-center py-4">

                        {
                            ourClass.length > 0 ? ourClass.map((clas, index) => <OurClassesCard clas={clas} key={index}></OurClassesCard>) :
                                <Spinner size="" animation="border" variant="primary"  role="status">
                                    <span style={{fontSize:"120px"}} className="sr-only">Loading...</span>
                                </Spinner>
                        }


                    </Row>
                </Container>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default OurClasses;