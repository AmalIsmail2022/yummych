import React from 'react';
import { Container, Row } from 'react-bootstrap';
import ProductCard from './ProductCard';
import SubTitle from '../Utility/SubTitle';
import prod1 from '../../Images/prod1.png'
import prod2 from '../../Images/prod2.png'
import prod3 from '../../Images/prod3.png'
import prod4 from '../../Images/prod4.png'
import { Zoom  } from "react-reveal";
const CardProductContainer = ({title, btntitle, pathText, price}) => {
    return (
        <Container >
            <SubTitle title={title} />
                  <Zoom >
            <Row className='my-2 d-flex justify-content-between'>
               
                   <ProductCard title="Chocolate Bonbons" img={prod1} price="200"/>
   
                    <ProductCard title="Customized Chocolate" img={prod2} price="150"/>

                    <ProductCard title="Chocolate Bars" img={prod3} price="300"/>

                    <ProductCard title="Gift Box" img={prod4} price="400"/>

                </Row>
               </Zoom>
            <SubTitle btntitle={btntitle} pathText={pathText} />
        </Container>
    );
}

export default CardProductContainer;
