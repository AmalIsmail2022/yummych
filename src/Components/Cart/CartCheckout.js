import React from 'react';
import { Col, Row, ToastContainer } from 'react-bootstrap';

const CartCheckout = () => {
    return (
        <Row className="my-1 d-flex justify-content-center cart-checkout pt-3">
            <Col xs="12" className="d-flex  flex-column  ">
                {/* <div className="d-flex  ">
                    <input
                        // value={couponName}
                        // onChange={(e) => onChangeCoupon(e.target.value)}
                        className="copon-input d-inline text-center "
                        placeholder="discount copon"
                    />
                    <button className="copon-btn d-inline btn-new1">Confirm</button>
                </div> */}
                <div className="product-price d-inline w-100 my-3  border">
                   Total Price: 1000$
                </div>

                <button className="product-cart-add  d-inline btn-new1 " > Buy Now</button>

                <button className="product-cart-add w-100 px-2 my-1 btn-new1"> Delete items </button>
            </Col>
            <ToastContainer />
        </Row>
    );
}

export default CartCheckout;