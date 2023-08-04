import React from 'react';
import { Row } from 'react-bootstrap';
import AdminAllProductsCard from './AdminAllProductsCard';

const AdminAllProducts = () => {
    return (
        <div >
             <div className='admin-content-text sub-tile d-flex justify-content-center cart-item-body1' > Products Management </div>
            <Row className='justify-content-start py-2 '>
                <AdminAllProductsCard />
                <AdminAllProductsCard />
                <AdminAllProductsCard />
                <AdminAllProductsCard />
                <AdminAllProductsCard />
                <AdminAllProductsCard/>

            </Row>
        </div>
    );
}

export default AdminAllProducts;
