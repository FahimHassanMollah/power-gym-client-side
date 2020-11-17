import React, { useState } from 'react';
import CommonBanner from '../CommonBanner/CommonBanner';
import { Steps } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css'
import { Col, Container, Row } from 'react-bootstrap';
import PersonalDetails from '../PersonalDetails/PersonalDetails';

const Purchase = () => {
    const [stepCounter, setStepCounter] = useState(0);
    const [allData, setAlldData] = useState({});
    const stepHandlerFunction = (data) => {
        setStepCounter(stepCounter + 1);
        const newData = { ...allData, ...data };
        setAlldData(newData);
    }
    console.log(allData);

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
               stepCounter===0&& <PersonalDetails stepHandlerFunction={stepHandlerFunction} key={setStepCounter} ></PersonalDetails>
           }
        </div>
    );
};

export default Purchase;