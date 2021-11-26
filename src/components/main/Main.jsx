import React from "react";
import "./main.scss";

import Repo from "./repo/Repo";
import Search from './search/Search';
import Spinner from './spinner/Spinner';
import Pagination from './pagination/Pagination';
import Error from './../error/Error';

import { getRepos } from "./../actions/repos";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../../reducers/reposReducer";

const Main = () => {
    const dispatch = useDispatch();
    const repos = useSelector((state) => state.repos.items);
    const isFetching = useSelector((state) => state.repos.isFetching);
    const currentPage = useSelector((state) => state.repos.currentPage);
    const perPage = useSelector((state) => state.repos.perPage);
    const isFetchError = useSelector((state) => state.repos.isFetchError);


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
            {isFetchError && <Error />}
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
