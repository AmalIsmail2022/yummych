import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Footer = () => {
    return (
     
    <div class="footer">
            <div class="container d-flex justify-content-between align-items-center">
                <Row className='d-flex justify-content-between'> 
                  <Col xs="12" sm="12" md="7" lg="9" >
            <div class="box">
                <div class="logo">
                    <img src="/img/healthy-low-resolution-logo-color-on-transparent-background.png" alt=""/>
                </div>
                <div class="social ">
                    <a class="facebook" href=""><i class="fab fa-facebook-f"></i></a>
                    <a class="instagram" href=""><i class="fab fa-instagram-square"></i></a>
                    <a class="twitter" href=""><i class="fab fa-twitter "></i></a>
                    <a class="youtube" href=""><i class="fab fa-youtube "></i></a>
                    
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br></br>Quibusdam laborum voluptate saepe sint cumque ad quaerat nobis, molestiae consectetur, consectetur adipisicing elit.<br></br> Laborum voluptate saepe sint cumque ad quaerat nobis, molestiae consectetur.<br></br> consectetur adipisicing elit.<br></br>Quibusdam laborum voluptate saepe sint cumque ad quaerat nobis, molestiae consectetur.Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                    </Col>
            
        <Col xs="12" sm="12" md="5" lg="3" >
            <div class="box pt-5 mx-5">
                <div class="line">
                    <i class="fas fa-map-marker-alt fa-fw"></i>
                    <div class="info">
                        <span>Dubi</span>
                        <span>United Arab Emirates</span>
                    </div>
                </div>
                <div class="line">
                    <i class="fas fa-clock fa-fw"></i>
                    <div class="info">
                        <span>Business Hours:</span>
                        <span>from 10:00 to 18:00</span>
                    </div>
                </div>
                <div class="line">
                    <i class="fas fa-phone-volume fa-fw"></i>
                    <div class="info">
                        <span>(+971) 75 43 308</span>
                        <span>(+971) 75 42 309</span>
                    </div>
                </div>
                </div>
                    </Col>
              
            <div class="box">
                <div class="image">
                    <img src="/img/istockphoto-1435872966-612x612.jpg" alt=""/>
                </div>
                    </div>
                    </Row>
        </div>
        <p class="copyright"> <span className='YUMMY1'>YummY!</span> &copy; 2023 <img src="/img/healthy-low-resolution-logo-color-on-transparent-background.png" alt=""/> All Right Reserved</p>
    </div>
   
    );
}

export default Footer;
