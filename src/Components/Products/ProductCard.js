import React from 'react';
import { Card, Col, ToastContainer } from 'react-bootstrap';

// import rate from '../../Images/rate.png'
import star22 from '../../Images/star22.png'
// import img1 from '../../Images/img1.png'
import fav10 from '../../Images/fav10.png'
import { Link } from 'react-router-dom';

const ProductCard = ({img, title, price}) => {
    return (
          
        <Col xs="12" sm="6" md="4" lg="3" className="d-flex">
          

            <Card
                className="my-2 card"
                style={{
                    width: "100%",
                    height: "345px",
                    borderRadius: "8px",
                    border: "none",
                    backgroundColor: "#FFFFFF",
                    boxShadow: "0 2px 2px 0 rgba(151,151,151,0.5)",
                }}>
          <Link to="/products/:id" style={{textDecoration:'none'}}>
                    <Card.Img style={{ height: "228px", width: "100%" }} src={img} />
           </Link>
                <div className="d-flex justify-content-end mx-2 py-1">
                    <img
                        src={fav10}
                        alt=""
                        onClick='{handelFav}'
                        className="text-center"
                        style={{
                            height: "30px",
                            cursor: 'pointer'
                        }}
                    />
                </div>
                <Card.Body>
                    <Card.Title>
                        <div className="card-title">
                           {title}
                        </div>
                    </Card.Title>
                    <Card.Text>
                        <div className="d-flex justify-content-between ">
                            <div className="d-flex justify-content-center align-items-center">
                                <img
                                    className="star"
                                    src={star22}
                                    alt=""
                                    height="20px"
                                    width="20px"
                                />
                                <div className="card-rate mx-2">5.0</div>
                            </div>
                            <div className="d-flex my-1">
                                <div className="card-price">
                                    {price}
                                </div>
                                <div className="card-currency mx-1" style={{ fontWeight: 'bold' }}>$</div>
                            </div>
                        </div>
                    </Card.Text>
                </Card.Body>
                </Card>
             
                <ToastContainer />
          
            </Col>
               
    );
}

export default ProductCard;
