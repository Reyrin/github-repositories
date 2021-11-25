import React from "react";
import "./main.scss";

import Search from './search/Search';
import Spinner from './spinner/Spinner';
import Pagination from './pagination/Pagination';

import { getRepos } from "./../actions/repos";
import { useDispatch, useSelector } from "react-redux";
import Repo from "./repo/Repo";
import { setCurrentPage } from "../../reducers/reposReducer";

const Main = () => {
    const dispatch = useDispatch();
    const repos = useSelector((state) => state.repos.items);
    const isFetching = useSelector((state) => state.repos.isFetching);
    const currentPage = useSelector((state) => state.repos.currentPage);
    const perPage = useSelector((state) => state.repos.perPage);

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
            <Search text={text} setText={setText} searchHandler={searchHandler}  />

            {isFetching ? (
                <Spinner />
            ) : (
                repos.map((repo, index) => <Repo repo={repo} key={index} />)
            )}

            <Pagination />
        </div>
    );
};

export default Main;
