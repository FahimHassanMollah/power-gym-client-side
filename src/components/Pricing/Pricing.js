import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CommonBanner from '../CommonBanner/CommonBanner';
import Footer from '../Footer/Footer';
import PricingCard from '../PricingCard/PricingCard';

const Pricing = () => {
    const [pricing, setPricing] = useState([]);

    useEffect(() => {
        fetch('https://murmuring-refuge-17049.herokuapp.com/getAllPlan')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setPricing(data)
            })
    }, [])
    return (
        <div>
            <CommonBanner text={"PRICING"}></CommonBanner>
            <div className="py-4 mt-4">
                <h2 className="text-center font-weight-light"> <span className="text-warning">CHOOSE THE OFFER</span> THAT SUITS YOU</h2>
                <p className="text-center font-weight-light">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, deserunt <br /> fugit veniam iusto.</p>
            </div>
            <Container>
                {

                    pricing.length > 0 ? <Row className="d-flex justify-content-center">
                        {
                            pricing.map((p, index) => <PricingCard key={index} pricing={p}></PricingCard>)
                        }
                    </Row>
                        :
                        <div className="d-flex justify-content-center">
                            <div className="spinner-border" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                }
            </Container>
           <div className="pt-5 mt-5">
           <Footer></Footer>
           </div>
        </div>
    );
};

export default Pricing;