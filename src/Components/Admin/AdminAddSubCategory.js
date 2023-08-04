import React from 'react';
import { Col, Row, ToastContainer } from 'react-bootstrap';

const AdminAddSubCategory = () => {
    return (
        <div >
            
            <Row className="justify-content-start  cart-item-body12 ">
               <div className="admin-content-text sub-tile d-flex justify-content-center cart-item-body1">Add New Sub Category </div>
                <Col  className='py-3' >
                    <input
                        // value={name}
                        // onChange={onChangeName}
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder="Sub Category Name"
                        style={{ backgroundColor:'#f5ecd6' }}
                    />
                    <select name="category" id="cat" className="select mt-3 px-2 " style={{ backgroundColor:'#f5ecd6'}}>
                        <option value="0">Chocolate Bonbon  </option>
                        <option value="0">Chocolate Bars & Blocks  </option>
                        <option value="0">Customized Chocolate  </option>
                        <option value="0">Luxury Chocolate  </option>
                        <option value="0">Chocolate Gift Box </option>
                        <option value="0">Dark Chocolate Bars</option>
                        
                    </select>
                           <Col  className="d-flex justify-content-end mt-5">
                    <button className="btn-save d-inline btn-new mt-5 "> Save</button>
                    </Col>
                   
                </Col>
             <Row>
          
            </Row>
            </Row>
            
            <ToastContainer />
        </div>
    );
}

export default AdminAddSubCategory;
