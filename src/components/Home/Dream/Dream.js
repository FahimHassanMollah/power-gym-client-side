import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import well from  '../../../Images/wells-chan-H-vAxuWxmi8-unsplash.jpg';
import './Dream.css'
const Dream = () => {
    return (
        <div className="py-5 my-5">
            <Container>
                <Row>
                    <Col md={5} className="fard">
                        <div>
                            <img className="w-100" src={well} alt=""/>
                        </div>
                    </Col>
                    <Col md={7} className="pl-5" style={{backgroundImage:"../../../Images/"}}>
                        <div className="">
                            <h1 style={{fontFamily:"Oswald"}} className="text-muted">About Us</h1>
                            <h1 style={{color:"goldenrod",fontFamily:"Oswald"}} className="">WE HERE TO DREAM!</h1>
                            <h2 style={{fontFamily:"Oswald"}}>OUR TEAM IS HERE SURVE YOU</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt enim soluta nam eligendi necessitatibus, quis ex cupiditate nihil quos, laborum exercitationem debitis earum quas maxime deleniti delectus reprehenderit incidunt minima.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Dream;