import React from 'react';
import { Button, Col, Modal, Row, ToastContainer } from 'react-bootstrap';
import rate from '../../Images/star23.png'
const RateItem = ({name,no}) => {
    return (
         <div>


            <Modal>
                <Modal.Header >
                    <Modal.Title> <div className='font'>Delete </div></Modal.Title>
                </Modal.Header>
                <Modal.Body><div className='font'>are you sure you want to delete your review</div></Modal.Body>
                <Modal.Footer>
                    <Button className='font' variant="success" >
                        تراجع
                    </Button>
                    <Button className='font' variant="dark" >
                        حذف
                    </Button>
                </Modal.Footer>
            </Modal>


            <Modal >
                <Modal.Header >
                    <Modal.Title> <div className='font'>update your review </div></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* <ReactStars {...setting} />
                    <input
                        onChange={onChangeRateText}
                        value={newRateText}
                        type="text"
                        className='font w-100'
                        style={{ border: 'none' }}
                    /> */}
                </Modal.Body>
                <Modal.Footer>
                    <Button className='font' variant="success" >
                        undo
                    </Button>
                    <Button className='font' variant="dark" >
                        update
                    </Button>
                </Modal.Footer>
            </Modal>

            <Row className="mt-3">
                <Col className="d-felx me-5">
                    <div className="cat-text d-inline ms-2">{name} </div>
                    <img className="" src={rate} alt="" height="30px" width="30px" />
                    <div className="cat-rate  d-inline  p-1 ">{no}</div>
                </Col>
            </Row>
            <Row className="border-bottom mx-2">
                <Col className="d-felx me-4 pb-2">
                    <div className=" cat-text1 d-inline ms-2">
                        very good product
                    </div>
                    

                </Col>
            </Row>
            <ToastContainer />
        </div>
    );
}

export default RateItem;
