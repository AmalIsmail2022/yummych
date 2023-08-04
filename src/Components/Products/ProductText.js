import React from 'react';
import { Col, Row, ToastContainer } from 'react-bootstrap';

const ProductText = () => {
  return (
      
    <div className='low2'>
      <div className="admin-content-text sub-tile d-flex justify-content-center  cart-item-body1 low5 ">Product Details  </div>
      <Row className='d-flex'>

        
        <div className="cat-text new-t1 my-4" style={{fontSize:"24px"}}>Chocolate Bars</div>
   

  
      
  
        
                    

          <div className="cat-text d-inline my-2">Available Qty  :<span className='cat-text1' style={{fontSize:"18px"}} > 200 pieces</span> </div>

      
      

   
          <div className="cat-text  py-4">Description :<span className='cat-text1' style={{fontSize:"18px"}} > Chocolate Bars made of dark chocolate, milk chocolate, and white chocolate.   </span>
             </div>
  

        
   
     
        <Col md="12">
          
            <div className="product-price d-inline px-3 py-3 border">
              <span style={{ textDecorationLine: 'line-through' }}> </span> 300 $
            </div> 
     
          <div className="product-cart-add px-3 py-3 d-inline mx-3 btn-new">Add to Cart </div>
        </Col>

        <ToastContainer />
          </Row>
      </div>
  
    );
}

export default ProductText;
