import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UserAddressCard from './UserAddressCard';

const UserAllAddres = () => {
    return (
        <div >
            <div className="admin-content-text sub-tile d-flex justify-content-center  cart-item-body1" style={{textTransform: 'capitalize'}}>Amal Ismail Adresses</div>
            <UserAddressCard add1="PO Box 123456, Jumeirah, Dubai, UAE" phone="(+971) 75 43 308"/>

            <UserAddressCard add1="Box No. 80606, Dubai,Emirates" phone="(+971) 74 66 502"/>
            <UserAddressCard add1="Box No. 70704, Dubai, UAE" phone="(+971) 73 43 643"/>
            

            <Row className="justify-content-center">
                <Col sm="5" className="d-flex justify-content-center">
                    <Link to="/user/add-address" style={{ textDecoration: "none" }}>
                        <button className="btn-add-address btn-new">Add New Address</button>
                    </Link>
                </Col>
            </Row>
        </div >
    );
}

export default UserAllAddres;
