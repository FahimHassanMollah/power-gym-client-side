import React from 'react';
import Footer from '../../Footer/Footer';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import ChooseUs from '../ChooseUs/ChooseUs';
import Dream from '../Dream/Dream';
import NavBar from '../NavBar/NavBar';
import Training from '../Training/Training';

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            <Category></Category>
            <Dream></Dream>
            <Training></Training>
            <ChooseUs></ChooseUs>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;