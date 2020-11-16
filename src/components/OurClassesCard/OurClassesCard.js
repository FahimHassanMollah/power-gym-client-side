import React from 'react';
import { Card, Col } from 'react-bootstrap';

const OurClassesCard = (props) => {
    console.log(props.clas);
    return (
        <div>
            <Col md={4}>
                <Card style={{ width: '350px' }}>
                    <Card.Img variant="top" src={props.clas.bgImg} />
                    <Card.Body>
    <Card.Title>{props.clas.name}</Card.Title>
                        
                    </Card.Body>


                </Card>
            </Col>
        </div>
    );
};

export default OurClassesCard;