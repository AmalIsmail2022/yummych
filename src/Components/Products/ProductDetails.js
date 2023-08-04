import React from 'react';
import { Col, Row } from 'react-bootstrap';
import ProductGallery from './ProductGallery';
import ProductText from './ProductText';



const ProductDetails = () => {
    return (
        <div className='cart-item-body1 my-4'  >
            <Row className='py-3 d-flex row'>
                <Col lg="5" md="6" className='py-2 d-flex justify-content-center'>
                    <ProductGallery/>
                </Col>
                <Col lg="7" md="12"  className='py-2 ' >
                    <ProductText/>
                </Col>
            </Row>
        </div>
    );
}

export default ProductDetails;
