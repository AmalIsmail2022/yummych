import React, { useState } from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import slider1 from '../../Images/slider1.jpg'
import slider2 from '../../Images/slider2.jpg'
import slider3 from '../../Images/slider3.jpg'
import slider4 from '../../Images/slider4.jpg'
import slider5 from '../../Images/slider5.jpg'

const Slider = () => {
    const [index, setIndex] = useState(0)
    const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex)
    }
    return (  
        <Carousel
            className='cars' activeIndex={index} onSelect={handleSelect}> 
            
            <Carousel.Item className="slider-background2" interval={2000}>
                        <Row className="d-flex justify-content-center align-items-center ">
                        <Col
                            xs="10"
                            md="10"
                            lg="5"
                        >
                    <div className='slider-d'>
                        <h3 className="slider-text"><span className='new-t'>New</span> Chocolte Bonbons</h3>
                        <p className="slider-title">    “Anything is good if it's made of chocolate”</p>
                                </div>
                            </Col>
                        <Col
                            xs="10"
                            md="10"
                        lg="3"
                        className="sl-img d-flex"
                        >
                        <img
                        style={{ height: "400px", borderRadius:"20px"} }
                        src={slider1}
                        alt="First slide"
                        />      
                                </Col>
</Row>     
            </Carousel.Item>

            <Carousel.Item className="slider-background2" interval={2000}>
                <Row className="d-flex justify-content-center align-items-center ">
                    <Col
                            xs="10"
                            md="10"
                            lg="5"
                        >
                    <div className='slider-d'>
                        <h3 className="slider-text"><span className='new-t'>New</span> Chocolate Truffles</h3>
                        <p className="slider-title">“Chemically speaking, chocolate really is the world's perfect food”</p>
                        </div>
                        </Col>
                 <Col
                            xs="10"
                            md="10"
                        lg="3"
                        className="sl-img d-flex"
                        >
                        <img
                        style={{ height: "400px", borderRadius:"20px" } }
                        
                        src={slider2}
                        alt="second slide"
                        />
                   </Col>

              </Row>
            </Carousel.Item>

            <Carousel.Item className="slider-background2" interval={2000}>
           <Row className="d-flex justify-content-center align-items-center ">
                        <Col
                            xs="10"
                            md="10"
                            lg="5"
                        >
                    <div className='slider-d'>
                        <h3 className="slider-text"><span className='new-t'>New</span> Zero Sugar Chocolate</h3>
                        <p className="slider-title">“Chocolate is a perfect food”</p>
                    </div>
                            </Col>
                        <Col
                            xs="10"
                            md="10"
                        lg="3"
                        className="sl-img d-flex"
                        >
                        <img
                        style={{ height: "400px", borderRadius:"20px" } }
                        
                        src={slider3}
                        alt="third slide"
                        />
                   </Col>

              </Row>
            </Carousel.Item>

            <Carousel.Item className="slider-background2" interval={2000}>
                <Row className="d-flex justify-content-center align-items-center ">
                        <Col
                            xs="10"
                            md="10"
                            lg="5"
                        >
                    <div className='slider-d'>
                        <h3 className="slider-text"> <span className='new-t'>New</span> Chocolate Boxes & Trays</h3>
                        <p className="slider-title">    “I have a chocolate smile”</p>
                     </div>
                            </Col>
                        <Col
                            xs="10"
                            md="10"
                        lg="3"
                        className="sl-img d-flex"
                        >
                        <img
                        style={{ height: "400px", borderRadius:"20px" } }
                        
                        src={slider4}
                        alt="fourth slide"
                        />
                    </Col>
</Row>     
            </Carousel.Item>
            <Carousel.Item className="slider-background2" interval={2000}>
               <Row className="d-flex justify-content-center align-items-center ">
                        <Col
                            xs="10"
                            md="10"
                            lg="5"
                        >
                    <div className='slider-d'>
                        <h3 className="slider-text"><span className='new-t'>New</span> Luxury Chocolate Gifts  </h3>
                        <p className="slider-title">    “Love is like a box of chocolates”</p>
                   </div>
                            </Col>
                        <Col
                            xs="10"
                            md="10"
                        lg="3"
                        className="sl-img d-flex"
                        >
                        <img
                        style={{ height: "400px", borderRadius:"20px" } }
                        
                        src={slider5}
                        alt=""
                        />
                    </Col>
</Row>     
                 
                </Carousel.Item>
               
                </Carousel>
       
           
    
    );
}

export default Slider;
