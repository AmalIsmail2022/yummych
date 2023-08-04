import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AdminSideBar from '../../Components/Admin/AdminSideBar';
import AdminAllProducts from '../../Components/Admin/AdminAllProducts';
import Pagination from '../../Components/Utility/Pagination';

const AdminAllProductPage = () => {
    return (
         <div className='log-bg'>
        <Container >
             <Row className='py-3 d-flex justify-content-center'>
                <Col xs="8" sm="4" md="3" lg="2">
                    <AdminSideBar/>
                </Col>
                <Col  xs="12" sm="7" md="8" lg="9" className='cart-item-body11'>
                    <AdminAllProducts />
                    <Pagination/>
                </Col>

            </Row>
            
            </Container>
            </div>
    );
}

export default AdminAllProductPage;
