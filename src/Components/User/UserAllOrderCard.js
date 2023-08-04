import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const UserAllOrderCard = ({img,title}) => {
    return (
        <div >


            <Row className="d-flex mb-2 " style={{height:"127px"}}>
                <Col xs="6" md="6" className="d-flex justify-content-start ">
                    <Link to="">
                        <img width="150px"  src={img} alt="" className='p-2'/>
                    </Link>
                </Col>
                <Col xs="6" md="6" className='d-flex flex-column'>
                    <div className="d-inline pt-2 cat-text ">
                  {title}
                    </div>
                  
                    {/* <div className="d-inline pt-2 cat-rate me-2">5.0</div> */}
                    {/* <div className="rate-count d-inline p-1 pt-2">(rate 150)</div> */}
              
                
                    <div className="mt-3 d-flex">
                        <div className="cat-text1 mt-1  d-inline">QTY</div>
                        <input
                            // value={item.count}
                            className="mx-2 "
                            type="number"
                            style={{ width: "40px", height: "30px" }}
                        />
                        <div
                            className="color  d-inline"
                            style={{ backgroundColor: "" }}></div>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default UserAllOrderCard;
