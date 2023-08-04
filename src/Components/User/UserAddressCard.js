import React from 'react';
import { Button, Col, Modal, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import delete1 from '../../Images/delete1.png'
import edit from '../../Images/edit.png'
const UserAddressCard = ({add1,phone}) => {
    return (
        <div className="user-address-card my-2 px-3 mb-3 ">

            <Modal >
                <Modal.Header >
                    <Modal.Title> <div className='font'>تاكيد الحذف</div></Modal.Title>
                </Modal.Header>
                <Modal.Body><div className='font'>هل انتا متاكد من عملية الحذف العنوان</div></Modal.Body>
                <Modal.Footer>
                    <Button className='font' variant="success" >
                        تراجع
                    </Button>
                    <Button className='font' variant="dark" >
                        حذف
                    </Button>
                </Modal.Footer>
            </Modal>
<div className="">
            <Row className="d-flex justify-content-between  ">
                
                <Col xs="6" >
                    <div className="p-1 cat-text">Home</div>
                </Col>
                <Col xs="6" className="d-flex d-flex justify-content-end">
                    <div className="d-flex p-2">
                        <Link to="/user/edit-address" style={{ textDecoration: 'none' }}>
                            <div className="d-flex mx-2">
                                <img
                                    alt=""
                                    className="ms-1 mx-2"
                                    src={edit}
                                    height="25px"
                                  
                                />
                                <p className="cat-text me-3"> Edit</p>

                            </div>
                        </Link>
                        <div className="d-flex ">
                            <img
                                alt=""
                                className="ms-1 mx-2"
                                src={delete1}
                                    height="30px"
                                    
                                
                            />
                            <p className="cat-text"> Delete</p>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col xs="12">
                    <div className=" cat-text1"
                        style={{
                         
                      
                          
                            }}>
                            
                        {add1}
                    </div>
                </Col>
            </Row>

            <Row className="mt-3">
                <Col xs="12" className="d-flex ">
                    <div className='cat-text'
                        style={{
                           
                         
                          
                        }}>
                         Phone No. : 
                    </div>

                    <div
                        style={{
                          
                           
                            fontSize: "16px",
                        }}
                        className="mx-2 cat-text1">
                     {phone}
                    </div>
                </Col>
                </Row>
                </div>
        </div>
    );
}

export default UserAddressCard;
