import React from 'react';
import { Link } from 'react-router-dom';
import youtube from '../../Images/bxl-youtube.png';
import facebook from '../../Images/facebook.png';
import instagram from '../../Images/bxl-instagram.png';
import twitter from '../../Images/twitter.png';
import whatsapp from '../../Images/bxl-whatsapp.png';
import { Container } from 'react-bootstrap';
import './Footer.css'
const Footer = () => {
    return (

        <div className="py-5 footer" style={{ backgroundColor: "#343a40" }} >
            <Container>
                <div className="row pt-4" >
                    <div className="col-3">
                        <h4 className="text-white">POWER <strong className="" style={{color:"yellow"}}>X</strong></h4>
                    </div>
                    <div className="col-2 text-white">
                        <Link className="font-weight-bold text-white" href='/'>Need Help?</Link><br />
                        <Link className="text-white" href='/'>Help Center</Link><br />
                        <Link className="text-white" href='/signup'>Email Support</Link><br />
                        <Link className="text-white" href='/'>Live Chat</Link><br />
                        <Link className="text-white" href='/'>Gift Certificates</Link><br />
                        <Link className="text-white" href='/'>Send Us Feedback</Link><br />
                    </div>
                    <div className="col-2">
                        <Link className="font-weight-bold text-white" href='/'>Digital Resources</Link><br />
                        <Link className="text-white" href='/'>Articles</Link><br />
                        <Link className="text-white" href='/'>E-books</Link><br />
                    </div>
                    <div className="col-2">
                        <Link className="font-weight-bold text-white" href='/'>Contact With Us</Link>
                        <br/>
                        {/* <Link href='/' className="text-white"><img src={facebook} alt="" /></Link> */}
                    
                        <Link href='/' className="text-white "><img src={instagram} alt="" /></Link>
                        <Link href='/' className="text-white px-1"><img src={youtube} alt="" /></Link>
                        {/* <Link href='/' className="text-white"><img src={twitter} alt="" /></Link> */}
                        <Link href='/' className="text-white"><img src={whatsapp} alt="" /></Link><br />
                        <Link href='/' className="text-white px-1">Forum</Link><br />
                    </div>
                    <div className="col-2">
                        <Link className="font-weight-bold text-white" href='/'>Join Our Newsletter</Link><br />
                        <p className="text-white">Get exclusive news,features, and updates from The Shredder Weight Loss Academy.</p>
                    </div>
                </div>
            </Container>
            <p className="text-center text-secondary p-2 m-0"><small> © All rights reserved 2020 POWER-X-GYM</small></p>
        </div>

    );
};

export default Footer;