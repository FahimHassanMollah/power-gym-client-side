import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from '../CheckOutForm/CheckOutForm';
import { Col, Container, Row } from 'react-bootstrap';
import visa from '../../Images/credit-cards_visa.png';
import masterCard from '../../Images/credit-cards_mastercard.png';
import amex from '../../Images/credit-cards_amex.png';
const stripePromise = loadStripe('pk_test_JJ1eMdKN0Hp4UFJ6kWXWO4ix00jtXzq5XG');
const ProcessPayment = () => {
    return (
        <div  className="p-5 shadow p-3 mb-5 bg-white rounded">
            <Container>
                <Row>
                    <Col md={6}>
                        <h2>Credit Card</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    </Col>
                    <Col md={6} className="text-right">
                        <img className="px-2" src={visa} alt="" />
                        <img className="px-2" src={masterCard} alt="" />
                        <img className="px-2" src={amex} alt="" />
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col md={12} className="pt-5">
                        <Elements stripe={stripePromise}>
                            <CheckoutForm></CheckoutForm>
                        </Elements>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ProcessPayment;