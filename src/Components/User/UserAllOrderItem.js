import React from 'react';
import { Col, Row } from 'react-bootstrap';
import UserAllOrderCard from './UserAllOrderCard';
import prod3 from '../../Images/prod3.png'
import prod1 from '../../Images/pngegg (9).png'
const UserAllOrderItem = ({orderno, prices}) => {
    return (
        <div className="user-order mt-2 cat-text cart-item-body3 ">
            <Row>
                <div className="py-2 order-title new-t1"> { orderno}</div>
            </Row>
            <UserAllOrderCard img={ prod3} title="Chocolate Bars" />
            <UserAllOrderCard img={prod1} title="Chocolate Box" />
                        <div className=" justify-content-between mt-2 py-2">

            <Row className="d-flex ">
                    <Col xs="12" md="6" className="">
                    <div className="d-inline new-t1">Situation</div>
                      <div className="d-inline mx-3 stat cat-text1 py-4 ms-3 new-t1">Pending </div>
                    
                </Col >
                 <Col xs="12" md="6" lg="6" className="">
                    <div className="d-inline mx-3 stat cat-text1 py-4 ms-3 new-t1">{prices} $</div>
                </Col>
                
                </Row>
                </div>
        </div>
    );
}

export default UserAllOrderItem;
