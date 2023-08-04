import React from 'react';
import { Container, Row } from 'react-bootstrap';
import CategoryCard from '../Category/CategoryCard';
import bonbon from '../../Images/bonbon.png'
import bars from '../../Images/bars.png'
import img2 from '../../Images/img2.png'
import lux from '../../Images/lux.png'
import dark from '../../Images/dark.png'
import gift from '../../Images/gift.png'

const HomeCategory = () => {
    return (
        <Container>
      
            <Row className='my-2 d-flex justify-content-between'>
            <CategoryCard title="Chocolate Bonbon" img={bonbon} background="#552e27" />
            <CategoryCard title="Chocolate Bars & Blocks" img={bars} background="#f5ecd6" />
            <CategoryCard title="Customized Chocolate" img={img2} background="#fd7d5e" />
            <CategoryCard title="Luxury Chocolate" img={lux} background="#f7f0de" />
            <CategoryCard title="Chocolate Gift Box" img={gift} background="#a84c2b" />
            <CategoryCard title="Dark Chocolate" img={dark} background="#f7f0de" />
          
            </Row>
          
        </Container>
    );
}

export default HomeCategory;
