import React from 'react';
import CategoryHeader from '../../Components/Category/CategoryHeader';
import SearchCountResult from '../../Components/Utility/SearchCountResult';
import { Col, Container, Row } from 'react-bootstrap';
import SideFilter from '../../Components/Utility/SideFilter';
import CardProductContainer from '../../Components/Products/CardProductContainer';
import Pagination from './../../Components/Utility/Pagination';

const ProductsPage = () => {
    return (
        <div style={{minHeight: '670px'}} className='log-bg '>
            <CategoryHeader />
            <Container className='cart-item-body4 py-5 '>
                <SearchCountResult title="40 product found"/>
                <Row className='d-flex flex-row'>
                    <Col sm='0' xs='0' md='4'lg='1' className='d-flex px-4 mx-5'>
                        <SideFilter />
                    </Col>
                    <Col sm='12' xs='12' md='8' className='d-flex justify-content-center'>
                        <CardProductContainer title="" btntitle="" pathText=""/>
                    </Col>
                </Row>
                <Pagination/>
            </Container>
        </div>
    );
}

export default ProductsPage;
