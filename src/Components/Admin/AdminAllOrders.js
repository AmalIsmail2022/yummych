import React from 'react';
import { Row } from 'react-bootstrap';
import AdminAllOrdersItem from './AdminAllOrdersItem';
import bar from '../../Images/pngegg (6).png'
import fruitchoco from '../../Images/fruit-choco.png'
import box1 from '../../Images/pngegg (7).png'
const AdminAllOrders = () => {
    return (
        <div >
                        <Row className='justify-content-start mx-1'>

            <div className='admin-content-text sub-tile d-flex justify-content-center cart-item-body1'> Orders Management </div>

                <AdminAllOrdersItem img={bar} price="150" orno="25"/>
                <AdminAllOrdersItem img={fruitchoco} price="170" orno="56"/>
                <AdminAllOrdersItem img={box1} price="220" orno="66"/>

                
            </Row>
        </div>
    );
}

export default AdminAllOrders;
