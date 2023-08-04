import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CartItem from '../../Components/Cart/CartItem';
import CartCheckout from '../../Components/Cart/CartCheckout';
import lux from '../../Images/lux.png'
import box from '../../Images/pngegg (7).png'
import prod2 from '../../Images/prod2.png'
const CartPage = () => {
    return (
        <div className='log-bg'>
         <Container className='crt-cont' style={{ minHeight: '670px' }}>
            <Row>
                <div className='cart-title mt-4'> </div>
            </Row>
            <Row className='d-flex align-items-center'>
                <Col  xs="12"
                        md="8"
                        sm="10"
                        lg="9">
                        <CartItem img={box} price="250" cat="Luxury Chocolate"/>
                    <CartItem img={lux} price="100" cat="Chocolate Bonbons"/>
                    <CartItem img={prod2} price="300" cat="Customized Chocolate"/>
                    

                </Col>

                <Col xs="12"
                         md="4"
                         sm="10"
                         lg="3">
                    <CartCheckout />
                </Col>
            </Row>
            </Container >
            </div>
    );
}

export default CartPage;
