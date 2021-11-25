import React from "react";
import "./main.scss";
import { getRepos } from "./../actions/repos";
import { useDispatch, useSelector } from "react-redux";
import Repo from "./repo/Repo";
import { setCurrentPage } from "../../reducers/reposReducer";
import { createPages } from "../../utils/pagesCreator";

const Main = () => {
    const dispatch = useDispatch();
    const repos = useSelector((state) => state.repos.items);
    const isFetching = useSelector((state) => state.repos.isFetching);
    const currentPage = useSelector((state) => state.repos.currentPage);
    const totalCount = useSelector((state) => state.repos.totalCount);
    const perPage = useSelector((state) => state.repos.perPage);
    const pagesCount = Math.ceil(totalCount / perPage);
    const pages = [];
    createPages(pages, pagesCount, currentPage);

    const [text, setText] = React.useState("");

    React.useEffect(() => {
        dispatch(getRepos(text, currentPage, perPage));
    }, [currentPage]);

    function searchHandler() {
        dispatch(setCurrentPage(1));
        dispatch(getRepos(text, currentPage, perPage));
    }

    return (
        <div>
            <div className="search">
                <input
                    className="search-input"
                    type="text"
                    placeholder="Input repo name"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <button className="search-btn" onClick={() => searchHandler()}>
                    Search
                </button>
            </div>

            {isFetching ? (
                <div className="lds-roller">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            ) : (
                repos.map((repo, index) => <Repo repo={repo} key={index} />)
            )}

            <div className="pages">
                {pages.map((page, index) => (
                    <span
                        key={index}
                        className={
                            currentPage == page ? "current-page" : "page"
                        }
                        onClick={() => dispatch(setCurrentPage(page))}
                    >
                        {page}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Main;
