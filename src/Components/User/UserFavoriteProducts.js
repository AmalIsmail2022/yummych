import React from 'react';
import { Row } from 'react-bootstrap';
import Pagination from '../Utility/Pagination';
import ProductCard from '../Products/ProductCard';
import prod1 from '../../Images/prod1.png'
import prod2 from '../../Images/prod2.png'
import prod3 from '../../Images/prod3.png'
import prod4 from '../../Images/prod4.png'
import fill from '../../Images/pngegg (13).png'
import fruit from '../../Images/fruit-choco.png'
import luxchoco from '../../Images/pngegg (9).png'
import zero from '../../Images/zero.png'
const UserFavoriteProducts = () => {
    return (
        <div>
            <div className="admin-content-text sub-tile d-flex justify-content-center  cart-item-body1 "> Amal Ismail Favorites</div>
            <Row className='justify-content-center cart-item-body3 py-2 my-3 mx-1 ' style={{ height:"100%"}}>
                <ProductCard title="Chocolate Bonbons" img={prod1} price='200'/>
                <ProductCard title="Customized Chocolate" img={prod2} price='150'/>
                <ProductCard title="Chocolate Bars" img={prod3} price='300'/>
                <ProductCard title="Gift Box" img={prod4} price='400'/>
                <ProductCard title="Chocolate Truffles" img={fill}price='250'/>
                <ProductCard title="Luxury Chocolate" img={luxchoco} price='350' />
                <ProductCard title="Fresh Fruit Chocolate" img={fruit} price='450'/>
                <ProductCard title="Zero Sugar Chocolate" img={zero} price='450'/>
            </Row>
            <Pagination/>
        </div>
    );
}

export default UserFavoriteProducts;
