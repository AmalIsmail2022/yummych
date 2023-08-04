import React from 'react';
import { Col, Container, Row, ToastContainer } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
    return (
         <div className='log-bg'>
        <Container style={{ minHeight: "700px" }}>
      <Row className="py-5 d-flex justify-content-center hieght-search login-bg">
        <Col sm="12" className="d-flex flex-column ">
          <label className="mx-auto sub-tile">Create Account</label>
          <input
      
            placeholder="Name"
            type="text"
            className="user-input mt-3 text-center mx-auto"
          />
          <input
         
            placeholder="Email"
            type="email"
            className="user-input my-3 text-center mx-auto"
          />
          <input
       
            placeholder="Phone No."
            type="phone"
            className="user-input  text-center mx-auto"
          />
          <input
        
            placeholder="Password"
            type="password"
            className="user-input text-center mt-3 mx-auto"
          />
          <input
       
            placeholder="Confirm Password"
            type="password"
            className="user-input text-center mt-3 mx-auto"
          />
          <button className="btn-login mx-auto mt-4 btn-new1">Signup </button>
          <label className="mx-auto my-4">
            Already Have Account? {" "}
            <Link to="/login" style={{ textDecoration: "none" }}>
              <span style={{ cursor: "pointer" }} className="login-un">
               Login
              </span>
            </Link>
          </label>
        </Col>
      </Row>
      <ToastContainer />
            </Container>
            </div>
    );
}

export default RegisterPage;
