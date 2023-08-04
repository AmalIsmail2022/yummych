import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import UserSideBar from '../../Components/User/UserSideBar';
import UserAllOrders from '../../Components/User/UserAllOrders';

const UserAllOrdersPage = () => {
    return (
         <div className='log-bg'>
        <Container >
            <Row className='py-3 d-flex justify-content-center'>
                <Col  xs="8" sm="5"  md="3" lg="2">
                    <UserSideBar />
                </Col>

                <Col  xs="12" sm="7" md="9" lg="10">
                  <UserAllOrders />
                </Col>
            </Row>
            </Container>
            </div>
    );
}

export default UserAllOrdersPage;
