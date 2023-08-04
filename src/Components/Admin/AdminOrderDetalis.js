import React from 'react';
import CartItem from '../Cart/CartItem';
import { Col, Row, ToastContainer } from 'react-bootstrap';

const AdminOrderDetalis = () => {
    return (
        <div>

             <div className="admin-content-text">Order No. #23 Details</div>
                    <CartItem />
                    <CartItem />
                    <CartItem/>
            <Row className="justify-content-center mt-4 user-data">
                <Col xs="12" className=" d-flex">
                    <div className="admin-content-text py-2">Client Information </div>
                </Col>
                <Col xs="12" className="d-flex">
                    <div
                        style={{
                            color: "#555550",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}>
                       Name: Amal Ismail
                    </div>

                    <div
                        style={{
                            color: "#979797",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}
                        className="mx-2">
                      
                    </div>
                </Col>

                <Col xs="12" className="d-flex">
                    <div
                        style={{
                            color: "#555550",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}>
                         Phone No.:01223381653</div>

                    <div
                        style={{
                            color: "#979797",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}
                        className="mx-2">
                       
                    </div>
                </Col>
                <Col xs="12" className="d-flex">
                    <div
                        style={{
                            color: "#555550",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}>
                        الايميل:ism_amal@hotmail.com
                    </div>

                </Col>
                
                    <div className="d-inline px-4 border text-center pt-2">
                        
                       Total: 4000 $
                    </div>
                <div className="d-flex mt-2 justify-content-center">
                    
                        <select
                            name="languages"
                            id="lang"
                            
                            className="select input-form-area mt-1  text-center px-2 w-50">
                            <option value="val">Order Situation </option>
                            <option value="val2">Pending </option>
                        <option value="val2"> Finished </option>
                        <option value="val2"> Canceled</option>
                        </select>
                        <button className="btn-a px-3 d-inline mx-2 ">Save </button>
                    
                   
                </div>
            </Row>
            <ToastContainer />
        </div>
    );
}

export default AdminOrderDetalis;
