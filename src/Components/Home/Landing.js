import React from 'react';
import choco from '../../Images/choco.png'
import { Container } from 'react-bootstrap';
const Landing = () => {
    return (
        <div>
            <div className="slider-background">
                <div className="d-flex flex-row justify-content-center align-items-center">
                    
                    <div className="d-flex flex-column justify-content-center align-items-center landing-text">
                    <h2 className="slider-title"> Welcome to Our World </h2>
                    <img src={choco} className='logo1' />
                    {/* <span className='YUMMY'>YummY!</span> */}
                    <h1 className="slider-text"> Chocolate</h1>
                    {/* <p className="slider-p">Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br>
                        Quisquam, illum fugit deleniti, voluptatibus magnam officiis sit.</p> */}
                    </div>
                </div>
            </div>
            </div>
    );
}

export default Landing;
