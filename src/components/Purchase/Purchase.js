import React, { useEffect, useState } from 'react';
import CommonBanner from '../CommonBanner/CommonBanner';
import { Steps } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css'
import { Col, Container, Row } from 'react-bootstrap';
import PersonalDetails from '../PersonalDetails/PersonalDetails';
import ProcessPayment from '../ProcessPayment/ProcessPayment';
import Footer from '../Footer/Footer'

const Purchase = () => {
    const [stepCounter, setStepCounter] = useState(0);
    const [allData, setAlldData] = useState({});
    const stepHandlerFunction = (data) => {
        const newData = { ...allData, ...data };
        setAlldData(newData);
        setStepCounter(stepCounter + 1);
    }
    useEffect(() => {
        if (stepCounter === 2) {
            fetch('https://murmuring-refuge-17049.herokuapp.com/insertPaymentInformation', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(allData),
            })
                // .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }
    }, [stepCounter===2])
   
    console.log(allData, 'all data');

    return (
        <div>
            <CommonBanner text={"Your Gym Membership"}></CommonBanner>
            <Container>
                <Row className="text-center d-flex justify-content-center pt-5">
                    <Col md={7} sm={12}>


                        <Steps current={stepCounter}>
                            <Steps.Item title="Personal Details" />
                            <Steps.Item title="Bank Payment" />
                            <Steps.Item title="Membership Create" />

                        </Steps>


                    </Col>
                </Row>
            </Container>
            {
                stepCounter === 0 && <PersonalDetails stepHandlerFunction={stepHandlerFunction} key={setStepCounter} ></PersonalDetails>
            }
            <Container>
                <Row className="d-flex justify-content-center pt-5  mb-5">
                    <Col md={12}>
                        {
                            stepCounter === 1 && <ProcessPayment stepHandlerFunction={stepHandlerFunction} ></ProcessPayment>

                        }
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row className="d-flex justify-content-center pb-3 mb-2">
                    <Col md={12}>
                        {
                            stepCounter === 2 && <div className="container text-center">
                                <h1 className="text-success">
                                    Thank you for Registration
                    </h1>
                                <p className="text-danger">Your Order id  is : {allData.paymentIdNumber}  </p>
                            </div>
                        }
                    </Col>
                </Row>

            </Container>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Purchase;