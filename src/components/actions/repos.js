import axios from "axios";
import {
    setRepos,
    setIsFetching,
    setFetchError,
} from "../../reducers/reposReducer";

export const getRepos = (searchQuery = "stars:%3E1", currentPage, perPage) => {
    if (searchQuery.trim() === "") searchQuery = "stars:%3E1";

    return async (dispatch) => {
        try {
            dispatch(setIsFetching(true));
            const response = await axios.get(
                `https://api.github.com/search/repositories?q=${searchQuery}&sort=stars&per_page=${perPage}&page=${currentPage}`
            );
            dispatch(setRepos(response.data));
        } catch (error) {
            dispatch(setFetchError(true));
            dispatch(setIsFetching(false));
            setTimeout(() => {
                dispatch(setFetchError(false));
            }, 5000);
        }
    };
};

export const getCurrentRepo = async (username, repoName, setRepo) => {
    try {
        const response = await axios.get(
            `https://api.github.com/repos/${username}/${repoName}`
        );
        setRepo(response.data);
    } catch (error) {
        alert("Попробуйте перезагрузить страницу!");
    }
};

export const getCotributors = async (username, repoName, setContributors) => {
    try {
        const response = await axios.get(
            `https://api.github.com/repos/${username}/${repoName}/contributors?page=1&per_page=10`
        );
        setContributors(response.data);
    } catch (error) {
        alert("Попробуйте перезагрузить страницу!");
    }
};
