import React from 'react';
import { Button, Col, Modal, Row, ToastContainer } from 'react-bootstrap';
import edit from '../../Images/edit.png'
const UserProfile = () => {
    return (
       <div >
            <div className="admin-content-text sub-tile d-flex justify-content-center  cart-item-body1">Amal Ismail Profile </div>

            <Modal>
                <Modal.Header >
                    <Modal.Title> <div className='font'>تعديل البيانات الشخصية</div></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input
                        // value={name}
                        // onChange={onChangeName}
                        type="text"
                        className="input-form font d-block mt-3 px-3"
                        placeholder="User Name"
                    />
                    <input
                        // value={email}
                        // onChange={onChangeEmail}
                        type="email"
                        className="input-form font d-block mt-3 px-3"
                        placeholder="الايميل"
                    />
                    <input
                        // value={phone}
                        // onChange={onChangePhone}
                        type="phone"
                        className="input-form font d-block mt-3 px-3"
                        placeholder="الهاتف"
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button className='font' variant="success">
                        تراجع
                    </Button>
                    <Button className='font' variant="dark">
                        حفظ التعديل
                    </Button>
                </Modal.Footer>
            </Modal>

            <div className="user-address-card my-3 px-2"style={{ height:"100%"}}>
                <Row className="d-flex justify-content-between pt-1">
                    <Col xs="7" className="d-flex">
                        <div className="p-2 cat-text1">User Name:</div>
                        <div className="p-2 cat-text">Amal Ismail</div>
                    </Col>
                    <Col xs="5" className="d-flex justify-content-end">
                        <div className="d-flex mx-2">
                            <img
                                alt=""
                                className="ms-1 mx-2"
                                src={edit}
                                height="25px"
                                width="25px"
                            />
                            <p className=" cat-text me-3"> Edit</p>
                        </div>
                    </Col>
                </Row>

                <Row className="">
                    <Col xs="12" className="d-flex">
                        <div className="p-2 cat-text1">Phone No. :</div>
                        <div className="p-2 cat-text">(+971) 75 43 308</div>
                    </Col>
                </Row>
                <Row className="">
                    <Col xs="12" className="d-flex">
                        <div className="p-2 cat-text1">Email :</div>
                        <div className="p-2 cat-text">amal@hotmail.com</div>
                    </Col>
                </Row>
                
         
                    <div className="admin-content-text sub-tile justify-content-center my-5 cart-item-body1 low" >Change Password</div>
                <Row className="  d-flex py-1 " >
                    <Col xs="12" className="">
                        <input 
                            // value={oldPassword}
                            // onChange={onChangeOldPass}
                            type="password"
                            className="input-form d-block mt-3 px-3"
                            placeholder="Enter Old Password"
                        />
                        <input
                            // value={newPassword}
                            // onChange={onChangeNewPass}
                            type="password"
                            className="input-form d-block mt-3 px-3"
                            placeholder="Enter New Password"
                        />
                        <input
                            // value={confirmNewPassword}
                            // onChange={onChangeConfirmPass}
                            type="password"
                            className="input-form d-block mt-3 px-3"
                            placeholder="Confirm New Password"
                        />
                    </Col>
                        <div className='d-flex justify-content-end py-2 '>
                        <button className="btn-save d-inline btn-new my-4">Save</button>
                    </div>
                </Row>

                <Row>
           
                </Row>
            </div>
            <ToastContainer />
        </div>
    );
}

export default UserProfile;
