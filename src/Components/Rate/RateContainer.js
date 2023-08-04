import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import rate from '../../Images/star23.png'
import RatePost from './RatePost';
import RateItem from './RateItem';
import Pagination from '../Utility/Pagination';
const RateContainer = ({ rateAvg, rateQty }) => {
    return (
        <Container className=' cart-item-body3' style={{height:"600px"}}>
            <Row className=''>
                <Col className="d-flex ">
                    <div className="sub-tile d-inline px-1 py-3 ">Product Reviews</div>
                    <img className="mx-1" src={rate} alt="" height="60px" width="60px" />
                    <div className="cat-rate  d-inline  p-1 pt-2">{rateAvg}</div>
                    {/* <div className="rate-count d-inline p-1 pt-2">({`${rateQty}  تقيم`})</div> */}
                </Col>
            </Row>

            {/* <RatePost /> */}

            {/* {allReview.data ? (allReview.data.map((review, index) => {
                return (<RateItem key={index} review={review} />)
            })) : <h6>لا يوجد تقيمات الان</h6>}


            {
                allReview.paginationResult && allReview.paginationResult.numberOfPages >= 2 ? (<Pagination pageCount={allReview.paginationResult ? allReview.paginationResult.numberOfPages : 0} onPress={onPress} />) : null
            } */}
            <RatePost />
            <RateItem name="Karma Srour" no="5.0"/>
            <RateItem name="Nour Mahmoud" no="4.8"/>
            <RateItem name="Heba Ahmed" no="4.5"/>
            <Pagination/>
        </Container>
    );
}

export default RateContainer;
