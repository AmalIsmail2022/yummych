import React from 'react';
import CategoryHeader from './../../Components/Category/CategoryHeader';
import { Container } from 'react-bootstrap';
import ProductDetails from '../../Components/Products/ProductDetails';
import RateContainer from '../../Components/Rate/RateContainer';
import CardProductContainer from '../../Components/Products/CardProductContainer';

const ProductDetailsPage = () => {
    return (
        <div className='log-bg '>
            
            <CategoryHeader />
            <Container className='py-3'>
              
                <ProductDetails />
                <RateContainer />
                {/* <div >
                    <CardProductContainer title="New" btntitle="" pathText="" />
                    </div> */}
            </Container>
        </div>
    );
}

export default ProductDetailsPage;
