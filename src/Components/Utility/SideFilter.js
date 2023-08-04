import React from 'react';
import { Row } from 'react-bootstrap';

const SideFilter = () => {
    return (
       <div className="mt-3">
      <Row>
        <div className="d-flex flex-column mt-2">
          <div className=" cat-text new-t1">Category</div>
          <div className="d-flex mt-3 mx-2">
            <input type="checkbox" value="0" />
            <div className="mx-2 cat-text2">All</div>
          </div>
          
          <div className="d-flex mt-3 mx-2">
            <input type="checkbox" />
            <div className="mx-2 cat-text2">Dark Chocolate</div>
        </div>
          <div className="d-flex mt-3 mx-2">
            <input type="checkbox" />
            <div className="mx-2 cat-text2">Chocolate Bars</div>
        </div>
         
           
         
        </div>

        <div className="d-flex flex-column mt-2">
         
          <div className="d-flex mt-3 mx-2">
            <input type="checkbox" value="0" />
            <div className="mx-2 cat-text2">Bonbons</div>
          </div>

         
    
          <div className="d-flex mt-3 mx-2">
            <input type="checkbox" />
            <div className="mx-2 cat-text2">Gift Box</div>
        </div>
          <div className="d-flex mt-3 mx-2">
            <input type="checkbox" />
            <div className="mx-2 cat-text2">Customized</div>
        </div>
      
           
        
        </div>

          <div className="cat-text new-t1 my-3 py-1 ">Price
            <div className="d-flex py-3 mx-2">
          <p className="mx-1 cat-text1">From:</p>
          <input
        
            className="m-2 text-center"
            type="number"
            style={{ width: "50px", height: "25px" }}
              />
              </div>
                   <div className="d-flex   mx-2">

            <p className="px-3 cat-text1">To:</p>
          <input

            className="m-2 text-center"
            type="number"
            style={{ width: "50px", height: "25px" }}
          />
        </div>
       </div>
      </Row >
    </div >
    );
   
}

export default SideFilter;
