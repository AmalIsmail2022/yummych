import React, { useRef } from 'react'
import { Row, Col, Spinner } from 'react-bootstrap'


const AdminAddCoupon = () => {
    
    return (
        <div >
       
           
            <Row className="justify-content-start py-2 cart-item-body12">
                 <div className="admin-content-text sub-tile d-flex justify-content-center  cart-item-body1">Add New Coupon  </div>
                <Col className='py-4'>
                    <input
                        // value={coupnName}
                        // onChange={onChangeName}
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder="Coupon Name"

                    />
                    <input
                        // ref={dateRef}
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder="Exp. Date "
                        // onChange={onChangeDate}
                        // value={couponDate}
                        // onFocus={() => dateRef.current.type = "date"}
                        // onBlur={() => dateRef.current.type = "text"}
                    />
                    <input
                        // value={couponValue}
                        // onChange={onChangeValue}
                        type="number"
                        className="input-form d-block mt-3 px-3"
                        placeholder="Discount %"

                    />
    <Col  className="d-flex justify-content-end py-5">
                                   <button className="btn-save d-inline btn-new "> Save</button>
                    </Col>

                <Col className=" justify-content-start py-2 ">
                    {/* {
                        coupons ? (coupons.map((item, index) => {
                            return  <AdminCoupnCard key={index} coupon={item} /> 
                        })) : <h6>No Discount Coupons </h6>
                    } */}

                </Col>

                </Col>
              
        </Row>
           

            

      
        </div>
    )
}

export default AdminAddCoupon