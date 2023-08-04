import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import AdminAddCoupon from '../../Components/Admin/AdminAddCoupon'
import AdminSideBar from '../../Components/Admin/AdminSideBar'
const AdminAddCouponPage = () => {
    return (
       <div className='log-bg'>
        <Container >
             <Row className='py-3 d-flex justify-content-center'>
             <Col xs="8" sm="4" md="3" lg="2">
                    <AdminSideBar />
                </Col>

                      <Col  xs="12" sm="7" md="8" lg="9">
                   <AdminAddCoupon />
                </Col>
            </Row>
            </Container>
                   </div>
    )
}

export default AdminAddCouponPage