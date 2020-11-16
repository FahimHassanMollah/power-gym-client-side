import React from 'react';
import eighty from '../../../Images/Group 80.png';
import eightyOne from '../../../Images/Group 81.png';
import eightyTwo from '../../../Images/Group 82.png';
import './Categories.css';
const Category = () => {
    return (
        <div className="category py-5">
            <div className="container">
                <div className="row text-center">
                    <div className="card div_one py-2 px-1 pb-1">
                        <img src={eighty} alt="" />
                        <h3 className="text-white">PROGRESSION</h3>
                        <p className="text-white mt-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, suscipit numquam amet consectetur .</p>
                    </div>
                    <div className="card div_two p-1">
                        <img src={eightyOne} alt="" />
                        <h3 className="text">WORKOUT</h3>
                        <p className="text-white mt-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, suscipit numquam amet consectetur .</p>
                    </div>
                    <div className="card div_three p-1">
                        <img src={eightyTwo} alt="" />
                        <h3 className="text-white">NUTRITION</h3>
                        <p className="text-white mt-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, suscipit numquam amet consectetur .</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;