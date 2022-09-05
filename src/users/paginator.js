import React from 'react';
import ReactPaginate from 'react-paginate';
export default function Pagenator({setPageNumber,setLimit,limit,totalCount, totalPages}) {

    return(
        <div className='pagination'>
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={setPageNumber}
                pageRangeDisplayed={5}
                pageCount={ parseInt(totalCount/limit)}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
            />
        </div>
    )
}