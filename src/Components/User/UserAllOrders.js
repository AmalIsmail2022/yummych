import React from 'react';
import { Row } from 'react-bootstrap';
import UserAllOrderItem from './UserAllOrderItem';

const UserAllOrders = () => {
    return (
         <div >
            <div className="admin-content-text sub-tile d-flex justify-content-center  cart-item-body1"> Amal Ismail Orders</div>
            <Row className='justify-content-center py-1 my-1 mx-1 ' style={{ height:"100%"}}>
                <UserAllOrderItem orderno='Order No. #45 Date: 5/5/2023 'prices="2000"/>
                <UserAllOrderItem orderno='Order No. #50 Date: 12/5/2023 'prices="1400"/>
            </Row>
        </div >
    );
}

export default UserAllOrders;
