import React from 'react';
import ReactPaginate from 'react-paginate';
const Pagination = () => {
  const handlePageClick = () => {

   }
    return (
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next"
        onPageChange={handlePageClick}
        marginPageDisplayed={1}
        pageRangeDisplayed={1}
        pageCount={10}
        previousLabel="Prev"
        containerClassName={'pagination justify-content-center p-3'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-item'}
        previousLinkClassName={'page-link'}
        nextClassName={'page-item'}
        nextLinkClassName={'page-link'}
        breakClassName={'page-link'}
        activeClassName={'active'}
        
      />
    );
  }

export default Pagination;
