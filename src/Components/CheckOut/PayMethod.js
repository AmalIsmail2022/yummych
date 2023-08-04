import React from 'react';
import { Col, Row, ToastContainer } from 'react-bootstrap';

const PayMethod = () => {
    return (
       <div>
            <div className="admin-content-text pt-5">choose paymethod  </div>
            <div className="user-address-card my-3 px-3">
                <Row className="d-flex justify-content-between ">
                    <Col xs="12" className="my-2">
                        <input
                            // onChange={changeMathoud}
                            style={{ cursor: 'pointer' }}
                            name="group"
                            id="group1"
                            type="radio"
                            value="CARD"
                            className="mt-2"
                        />
                        <label style={{ cursor: 'pointer' }} className="mx-2" for="group1">
                            pay with visa card
                        </label>
                    </Col>
                </Row>

                <Row className="mt-2">
                    <Col xs="12" className="d-flex">
                        <input style={{ cursor: 'pointer' }}
                            // onChange={changeMathoud}
                            name="group"
                            id="group2"
                            type="radio"
                            value="CASH"
                            className="mt-2"
                        />
                        <label style={{ cursor: 'pointer' }} className="mx-2" for="group2">
                       Cash on delivery </label>
                    </Col>
                </Row>


                <Row className="mt-2">
                    <Col xs="4" className="d-flex">
                        <select name="address" id="address" className="select mt-1 px-2 " >
                            <option value="0">choose an address  </option>
                            {/* {
                                res.data ? (res.data.map((item, index) => {
                                    return <option key={item._id} value={item._id}>{item.alias}</option>
                                })) : <option key={0} value={0}>لا يوجد عنوانين مسجلة</option>
                            } */}

                        </select>
                    </Col>
                </Row>



            </div>

            <Row>
                <Col xs="12" className="d-flex justify-content-end">
                    <div className="product-price d-inline   border">3400 $</div>


                    
                    
                    <div className="product-cart-add px-3 pt-2 d-inline me-2">  Confirm and Pay</div>
               
                </Col>
            </Row>
            <ToastContainer />
        </div>
    );
}

export default PayMethod;
