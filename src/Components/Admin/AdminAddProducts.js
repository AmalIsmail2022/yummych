import React from 'react';
import Multiselect from 'multiselect-react-dropdown';
import { Col, Row, ToastContainer } from 'react-bootstrap';
import prod4 from '../../Images/prod4.png'
const AdminAddProducts = () => {
   
    const onSelect = () => {
        
    }
    const onRemove = () => {
        
    }
    const options = [{name: ' First Category', id: 1},
        
    {name: ' Second Category', id: 1}]

    return (
        <div >
             <div className="admin-content-text sub-tile d-flex justify-content-center  cart-item-body1">  Add New Product </div>
            <Row className="justify-content-start py-2 ">
               
                <Col style={{ height:"700px"}}>
                  <div className=' justify-content-start '>

                                               <img
                                src={prod4}
                                alt="fzx"
                                className='px-3 mx-3'
                                 width="250px"
                                style={{ cursor: "pointer" }}
                    />
                        <div className="slider-text1 new-t1 py-1 my-1 px-5 ">Add Product Images </div>
                        </div>
                    <input
                        // value={prodName}
                        // onChange={onChangeProdName}
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder="Product Name"
                    />
                    <textarea
                        className="input-form-area p-2 mt-3"
                        rows="3"
                        cols="50"
                        placeholder="Product Descreption"
                        // value={prodDescription}
                        // onChange={onChangeDesName}
                    />
                    <input
                        type="number"
                        className="input-form d-block mt-3 px-3"
                        placeholder="Price"
                        // value={priceBefore}
                        // onChange={onChangePriceBefor}
                    />
                    {/* <input
                        type="number"
                        className="input-form d-block mt-3 px-3"
                        placeholder="Price after Discount"
                        // value={priceAftr}
                        // onChange={onChangePriceAfter}
                    /> */}
                    <input
                        type="number"
                        className="input-form d-block mt-3 px-3"
                        placeholder="Qty"
                        // value={qty}
                        // onChange={onChangeQty}
                    />
                    <select
                        name="languages"
                        id="lang"
                        className="select input-form-area mt-3 px-2 ">
                        <option value="val">Chocolate Bonbon</option>
                        <option value="val"> Chocolate Bars & Blocks</option>
                        <option value="val2"> Customized Chocolate</option>
                        <option value="val2">Luxury Chocolate</option>
                        <option value="val2">Chocolate Gift Box </option>
                        <option value="val2">Dark Chocolate Bars </option>
                        
                    
                    </select>

                    <Multiselect
                        className="mt-2 text-end multi"
                        placeholder="Sub Category "
                        options={options}
                        onSelect={onSelect}
                        onRemove={onRemove}
                        displayValue="name"
                        style={{ color: "red" }}
                    />
                                <Col  className="d-flex justify-content-end ">
                    <button className="btn-save d-inline btn-new my-3"> Save</button>
                    </Col>
       
                </Col>
            </Row>
            <Row>
           
            </Row>
            <ToastContainer />
        </div>
    );
}

export default AdminAddProducts;
