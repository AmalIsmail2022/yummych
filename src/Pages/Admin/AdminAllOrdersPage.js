import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AdminSideBar from '../../Components/Admin/AdminSideBar';
import Pagination from '../../Components/Utility/Pagination';
import AdminAllOrders from '../../Components/Admin/AdminAllOrders';

const AdminAllOrdersPage = () => {
    return (
        <div className='log-bg'>
        <Container  >
                  <Row className='py-3 d-flex justify-content-center'>
               <Col xs="8" sm="4" md="3" lg="2">  
                    <AdminSideBar />
                </Col>

            <Col  xs="12" sm="7" md="8" lg="9">
                    <AdminAllOrders />
                    <Pagination/>
                </Col>
            </Row>
            </Container>
            </div>
    );
}

export default AdminAllOrdersPage;
