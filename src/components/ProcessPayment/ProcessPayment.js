import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from '../CheckOutForm/CheckOutForm';
import { Col, Container, Row } from 'react-bootstrap';
import visa from '../../Images/credit-cards_visa.png';
import masterCard from '../../Images/credit-cards_mastercard.png';
import amex from '../../Images/credit-cards_amex.png';
import { Footer } from 'rsuite';
const stripePromise = loadStripe('pk_test_51HZwIqBGNwSGV3yrF0z3UedhECP7CzgnNfxzKphCDumUmA07a21Z3eCRP6h6BzYlmXtmQf4Vr0StqPbqvfXgsxWt004AkCzQU5');
const ProcessPayment = (props) => {
    return (
        <div  className="p-5 shadow p-3 mb-5 bg-white rounded">
            <Container>
                <Row>
                    <Col md={6}>
                        <h2> <span className="text-warning">Credit</span> Card</h2>
                        <p className="text-muted">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
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
                            <CheckoutForm stepHandlerFunction={props.stepHandlerFunction}></CheckoutForm>
                        </Elements>
                    </Col>
                </Row>
            </Container>
           
        </div>
    );
};

export default ProcessPayment;