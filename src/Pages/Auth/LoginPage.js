import React from 'react';
import { Col, Container, Row, ToastContainer } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import bg61 from '../../Images/bg61.png'
const LoginPage = () => {
    return (
      
                        
        <div className='log-bg'>
              
            <Container style={{ minHeight: "700px" }}  className=''>
            <Row className="py-5 d-flex justify-content-center login-bg">
                <Col sm="12" className="d-flex flex-column ">
                    <label className="mx-auto title-login"> <span className='login-tx sub-tile'>Login</span> </label>
                    <input
                  
                        placeholder="Email"
                        type="email"
                        className="user-input my-3 text-center mx-auto"
                    />
                    <input
                       
                        placeholder="Password"
                        type="password"
                        className="user-input text-center mx-auto"
                    />
                    <button className="btn-login mx-auto mt-4 my-2 btn-new1">Login</button>
                    <label className="mx-auto my-1">
                        Dont Have Account?{" "}
                        <Link to="/signup" style={{ textDecoration: "none"}}>
                            <span style={{ cursor: "pointer" }} className="login-un">
                                 Signup
                            </span>
                       </Link>
                    </label>

                     <label className="mx-auto my-1">
                        {" "} 
                       <Link to="/admin/allproducts" style={{ textDecoration: "none"}}> 
                             <span style={{ cursor: "pointer" }} className="login-un">
                                Login As Admin
                            </span>
                       </Link>
                        </label>
                        <label className="mx-auto my-1">
                      {" "}
                        <Link to="/user/allorders" style={{ textDecoration: "none"}}>
                            <span style={{ cursor: "pointer" }} className="login-un">
                                Login As User 
                            </span>
                       </Link>
                    </label>
                    <label className="mx-auto my-4">

                   
                    </label>



                </Col>
                    {/* <label className="mx-auto my-4">
                       
                        <Link to="/admin/allproducts" style={{ textDecoration: "none"}}>
                            <span style={{ cursor: "pointer" }} className="text-danger">
                                admin login
                            </span>
                       </Link>
                    </label>
                    <label className="mx-auto my-4">
                       
                        <Link to="/user/allorders" style={{ textDecoration: "none"}}>
                            <span style={{ cursor: "pointer" }} className="text-danger">
                               user login
                            </span>
                       </Link>
                    </label>
 */}

            </Row>
            <ToastContainer />
            </Container>
      
     </div>
    );
}

export default LoginPage;
