import React from 'react';
import { Link } from 'react-router-dom';

const SubTitle = ({title,btntitle, pathText}) => {
    return (
        <div className="d-flex justify-content-center pt-4">
            <div className="sub-tile">{title}</div>
            {btntitle ? (
               <Link to={`${pathText}`} style={{textDecoration:"none"}}>
                    <div className="shopping-now btn-new1 d-flex justify-content-center">{btntitle}</div>
               </Link>
            ) : null}
        </div>
    );
}

export default SubTitle;
