import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './PricingCard.css'
const PricingCard = (props) => {
    // console.log(props);
    const { bgImg, features, price, heading,id } = props.pricing;
    return (

        <Col md={6} lg={4} >

            <Card className="cardss h-100" style={{ width: '350px'}}>
                <Card.Img style={{ height: "300px" }} variant="top" src={bgImg} />
                <Card.Body className="">
                    <h4 className="text-warning headerOne text-center">BILLED MONTHLY</h4>
                    <h2 className="header text-center pt-1">{heading} <br /><span className="text-warning">{`${price}$`}</span></h2>
                    <Link to={`/purchase/${id}`}><Button className="cardss-text text-center">{'Purchase'}</Button></Link>
                </Card.Body>
            </Card>

        </Col>

    );
};

export default PricingCard;