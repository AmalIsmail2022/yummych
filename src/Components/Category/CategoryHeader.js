import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const CategoryHeader = () => {
    return (
       <div className="cat-header" >
      <Container>
        <Row>
            <Col className="d-flex justify-content-center py-2 flex-wrap ">
                <div className='cat-text-header'>All</div>
                <div className='cat-text-header'>Dark Chocolate</div>  
                <div className='cat-text-header'>Chocolate Bars</div>  
                <div className='cat-text-header'>Bonbons</div>  
                <div className='cat-text-header'>Luxury Chocolate</div>  
                <div className='cat-text-header'>Gift Box</div>  
                <div className='cat-text-header'>Customized Chocolate</div>  
           
            </Col>   
        </Row>
      </Container>
    </div>
    );
}

export default CategoryHeader;
