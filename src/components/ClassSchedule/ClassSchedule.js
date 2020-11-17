import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row, Spinner } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import CommonBanner from '../CommonBanner/CommonBanner';
import Banner from '../Home/Banner/Banner';
import checkMark from '../../Images/checkmark-square-2.png';
import './ClassSchedule.css'
const ClassSchedule = () => {
    const { id } = useParams();
    const [currentClass, setCurrentClass] = useState({});
    useEffect(() => {
        fetch('https://murmuring-refuge-17049.herokuapp.com/class/' + id)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCurrentClass(data);
            })
    }, [])
    return (
        <div>
            <CommonBanner></CommonBanner>
            {currentClass.id ?

                <Container className="py-5 mt-5">
                    <Row>
                        <Col md={6}>
                            <div className="fardss">
                                <img className="w-100 h-100" src={currentClass.bgImg} alt="" />
                            </div>
                            <div className="pt-5">
                                <p>{currentClass.summary}</p>
                            </div>
                            <div className="py-3">
                                {
                                    currentClass.features.map((feature, index) => <p className="font-weight-bold"><img className="pr-2" src={checkMark} alt="" />{feature}</p>)
                                }
                            </div>
                        </Col>
                        <Col md={6}>
                            <div>
                                <h1 className="mb-4 text-center"><span className="" style={{ color: "#ffa500" }}>CLASS</span> SCHEDULE</h1>
                            </div>
                            <div>
                                <div className="row classSchedule">
                                   {
                                    currentClass.schedule.map((single,index)=> <div className="card">
                                    <h4>{single.day}</h4>
                                    <p>{single.time}</p>
                                </div>)
                                   }
                                    
                                </div>
                            </div>
                            <div className="pt-5 text-center">
                               <Link to="/pricing"> <Button style={{border:'none',fontSize:"25px"}} className="bg-warning px-4 py-2 ">Join Us</Button></Link>
                            </div>
                        </Col>
                    </Row>
                </Container>:
                <div className="d-flex justify-content-center pt-5 mt-3">
                <div className="spinner-border text-primary" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            }
        </div>
    );
};

export default ClassSchedule;