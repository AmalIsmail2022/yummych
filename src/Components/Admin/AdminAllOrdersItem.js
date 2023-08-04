import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import delete1 from '../../Images/delete1.png'
import edit from '../../Images/edit.png'
const AdminAllOrdersItem = ({img, price, orno}) => {
    return (
       <Col sm="12 cart-item-body my-2">
            <Link to="/admin/orders/23"
                className=" my-2 px-1 d-flex px-2 nohover"
                style={{ textDecoration: "none" }}>
                
                <div className="w-100 mx-2">
                                    <img width="180px"  src={img} className='mx-3' alt="" />

                    <Row className="justify-content-between">
                        <Col xs="12" sm="12" className=" d-flex flex-row justify-content-between">
                            <div className="d-inline pt-2 cat-text1 mx-2 my-2">Order no. #{orno} </div>
                            <div className="d-flex pt-2 cat-text1 mx-2 new-t1" style={{ cursor: "pointer" }}>
                                   <div className="cat-text d-inline me-2 ">Update</div>
                                 <img src={edit} alt="" className='me-3' width="25px" height="25px" />
                                 <div className="cat-text d-inline me-2">Delete</div>
                                <img src={delete1} alt="" width="30px" height="30px" />
                             
             
            </div>
                        </Col>
                    </Row>
                    <Row className="justify-content-center mt-2">
                        <Col sm="12" className="d-flex flex-row justify-content-start">
                            <div className="d-inline pt-2 cat-title"> Dark Chocolate </div>
                            {/* <div className="d-inline pt-2 cat-rate me-2">5.0</div> */}
                        </Col>
                    </Row>
          

                  
                    <Row className="justify-content-between">
                            <Col sm="12" className=" d-flex flex-row justify-content-between">
                            <div className="d-inline pt-2 d-flex">
                                <div className="cat-text1 mt-2  d-inline">QTY</div>
                                
                                <input
                                // value={itemCount}
                                // onChange={onChangeCount}
                                className="mx-2 text-center"
                                type="number"
                                style={{ width: "60px", height: "40px" }}
                                />
                                
                            </div>
                            <div className="d-inline pt-2 barnd-text">{price} $</div>
                            </Col>
                    </Row>
                </div>
            </Link>
        </Col >
    );
}

export default AdminAllOrdersItem;
