import React from 'react';
import { Button, Card, Col, Modal, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import lux from '../../Images/lux.png'
const AdminAllProductsCard = () => {
    return (
          <Col xs="12" sm="6" md="4" lg="3" className="d-flex " >

            <Modal >
                <Modal.Header >
                    <Modal.Title> <div className='font'>تاكيد الحذف</div></Modal.Title>
                </Modal.Header>
                <Modal.Body><div className='font'>هل انتا متاكد من عملية الحذف للمنتج</div></Modal.Body>
                <Modal.Footer>
                    <Button className='font' variant="success" >
                        تراجع
                    </Button>
                    <Button className='font' variant="dark">
                        حذف
                    </Button>
                </Modal.Footer>
            </Modal>

            <div
                className="px-3 py-2 my-5 cart-item-body3"
                style={{
                    width: "90%",
                    height: "350px",
                    borderRadius: "8px",
                    border: "none",
                    backgroundColor: "",
                }}>
                <Row className="d-flex justify-content-center px-2">
                    <Col className=" d-flex justify-content-between">
                        <div className="d-inline item-delete-edit new-t1"style={{color:'#f6edd8'}}>Delete</div>
                        <Link style={{ textDecoration: "none" }}>
                            <div className="d-inline item-delete-edit new-t1" style={{color:'#f6edd8'}}>Update</div>
                        </Link>
                    </Col>
                </Row>
                <Link style={{ textDecoration: "none" }}>
                    <Card.Img style={{ height: "228px", width: "100%" }} src={lux} />
                    <Card.Body>
                        <Card.Title>
                            <div className="card-title new-t1" style={{color:'#552e27', fontWeight:'bold'}}>
                              luxury chocolate
                            </div>
                        </Card.Title>
                        <Card.Text>
                            <div className="d-flex justify-content-between">
                                <div className="card-rate">4.5</div>
                                <div className="d-flex">

                                    <div className="card-price new-t1" style={{color:'#552e27', fontWeight:'bold'}}>800</div>
                                    <div className="card-currency mx-1  new-t1" style={{color:'#552e27', fontWeight:'bold'}}>$</div>
                                </div>
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Link>
            </div>
        </Col>
    );
}

export default AdminAllProductsCard;
