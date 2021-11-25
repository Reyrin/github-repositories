import React from "react";
import './pagination.scss';
import { useDispatch, useSelector } from "react-redux";

import { setCurrentPage } from "./../../../reducers/reposReducer";
import { createPages } from "./../../../utils/pagesCreator";


function Pagination() {
    const dispatch = useDispatch();
    const currentPage = useSelector((state) => state.repos.currentPage);
    const totalCount = useSelector((state) => state.repos.totalCount);
    const perPage = useSelector((state) => state.repos.perPage);
    const pagesCount = Math.ceil(totalCount / perPage);
    const pages = [];
    createPages(pages, pagesCount, currentPage);

    return (
        <div className="pagination">
            {pages.map((page, index) => (
                <span
                    key={index}
                    className={currentPage == page ? "current-page" : "page"}
                    onClick={() => dispatch(setCurrentPage(page))}
                >
                    {page}
                </span>
            ))}
        </div>
    );
}

export default Pagination;
