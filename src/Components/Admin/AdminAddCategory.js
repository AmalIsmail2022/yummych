import React from 'react';
import { Col, Row, ToastContainer } from 'react-bootstrap';
import yum from '../../Images/yum.png'
const AdminAddCategory = () => {
    return (
        <div className='d-flex justify-content-center '>
              
            <Row className="justify-content-start  cart-item-body1 d-flex ">
                <div className="admin-content-text sub-tile d-flex justify-content-center  cart-item-body1 ">Add New Category  </div>
                <Col style={{ height: "400px" }}> 
                                    <Row className='d-flex justify-content-between'>

                    <div>
                    
                        <label for="upload-photo">
                            <img
                                className='ct-img'
                                src={yum}
                                alt="fzx"
                                width="250px"
                                style={{ cursor: "pointer" }}
                            />
                        
                            </label>
                 
                   
                     <span className='slider-text1 new-t mx-3' >Add Category Image</span>
                        <input
                            type="file"
                            name="photo"
                            // onChange={onImageChange}
                            id="upload-photo"
                        />
             
                        </div>
                        </Row>
                    <input
                        // onChange={onChangeName}
                        // value={name}
                        type="text"
                        className="input-form d-block px-3 my-3"
                        placeholder=" Category Name"
                    />
                    
                      <Col  className="d-flex justify-content-end ">
                    <button  className="btn-save d-inline btn-new"> Save</button>
                    </Col>
                    
                </Col>
            </Row>
           {/* {
                isPress ? loading? <Spinner animation='border' variant='warning'/>:<h4>تم الانتهاء</h4>:null
            } */}
            <ToastContainer
                position="top-center"
                className="toast-container"
                toastClassName="dark-toast"
                toastStyle={{ backgroundColor: "#f6edd8" }}
            />
        </div>
    );
}

export default AdminAddCategory;
