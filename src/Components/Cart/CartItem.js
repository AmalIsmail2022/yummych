import React from 'react';
import { Button, Col, Modal, Row } from 'react-bootstrap';

import delete1 from '../../Images/delete1.png'
const CartItem = ({ img, cat, price }) => {
  return (
      <div>
      <Col xs="12"  className="cart-item-body my-2 d-flex px-2">
        

     <Modal >
        <Modal.Header >
          <Modal.Title> <div className='font'></div></Modal.Title>
        </Modal.Header>
        <Modal.Body><div className='font'>Are you sure you want to delete this product from your cart?</div></Modal.Body>
        <Modal.Footer>
          <Button className='font' variant="success" >
            Cancel
          </Button>
          <Button className='font' variant="dark" >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
 
      <img width="160px" height="197px" className='mx-3' src={img}  alt="" />
      <div className="w-100 mx-3 my-3">
          <Row className="justify-content-between">
               
          <Col lg="6" sm="12" className=" d-flex flex-row justify-content-between">
            <div className="d-inline pt-2 cat-text1">Dark</div>
            </Col>
              <div className="d-inline pt-2 barnd-text">{price}$</div>
            
        </Row>
        <Row className="justify-content-center mt-2">
          <Col sm="12" className=" d-flex flex-row justify-content-start">
            <div className="d-inline pt-2 cat-title">
        {cat}

            </div>
            <div className="d-inline pt-2 cat-rate me-2 mx-2"></div>
          </Col>
        </Row>
        
  

        <Row className="justify-content-between d-flex flex-row my-2">
          <Col className=" justify-content-between">
              <div className="cat-text1 mt-2 ">Qty
              <input
                // value={itemCount}
                // onChange={onChangeCount}
                className="mx-2 text-center"
                type="number"
                style={{ width: "60px", height: "40px" }}
              />
           
                <Button className='btn btn-dark btn-new my-1' >Order Now</Button></div>
      
               

            </Col>
          
            <Col lg="3"  className='my-3 d-flex flex-row justify-items-end'>
                <div   className="d-flex d-inline " style={{ cursor: "pointer"}}>
                <div className="cat-text my-1">Delete
                <img src={delete1} alt="" width="30px" height="30px" className='mx-1' /></div>
                </div>       
           </Col>
          </Row>
          
        </div>
          
      </Col>
     
      </div>
      
    );




   
}

export default CartItem;

