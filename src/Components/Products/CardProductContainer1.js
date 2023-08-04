import React from 'react';
import { Container, Row } from 'react-bootstrap';
import ProductCard from './ProductCard';
import SubTitle from '../Utility/SubTitle';
import fill from '../../Images/pngegg (14).png'
import fruit from '../../Images/fruit-choco.png'
import luxchoco from '../../Images/lux-choco1.png'
import zero from '../../Images/zero.png'
import { Zoom  } from "react-reveal";
const CardProductContainer = ({title, btntitle, pathText, price}) => {
    return (
        <Container >
            <SubTitle title={title} />
                  <Zoom >
            <Row className='my-2 d-flex justify-content-between'>
               
                   <ProductCard title="Chocolate Truffles " img={fill} price="250"/>
   
                    <ProductCard title="Luxury Chocolate" img={luxchoco} price="450"/>

                    <ProductCard title="Fresh Fruit Chocolate" img={fruit} price="350"/>

                    <ProductCard title="Zero Sugar Chocolate" img={zero} price="450"/>

                </Row>
               </Zoom>
            <SubTitle btntitle={btntitle} pathText={pathText} />
        </Container>
    );
}

export default CardProductContainer;
