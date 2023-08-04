import React from 'react';
import { Container } from 'react-bootstrap';
import PayMethod from '../../Components/CheckOut/PayMethod';

const PayMethodPage = () => {
    return (
         <Container style={{minHeight:'670px'}}>
           <PayMethod />
        </Container>
    );
}

export default PayMethodPage;
