import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import './OurClassesCard.css';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const OurClassesCard = (props) => {
    console.log(props.clas);
    return (
        <div>
            <Link to={`/classSchedule/${props.clas.id}`}>

                <Col md={4} className="py-1 ">
                    <Card className="cards fards h-100" style={{ width: '350px' }}>
                        <Card.Img style={{height:"300px"}} variant="top" src={props.clas.bgImg} />
                        <Card.Body>
                            
                            <Button className="card-text">{props.clas.name} <span className="ml-2" style={{ fontSize: "20px" }}> <FaLongArrowAltRight /></span></Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Link>
        </div>
    );
};

export default OurClassesCard;