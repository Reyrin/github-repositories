import axios from "axios";
import { setRepos, setIsFetching } from "../../reducers/reposReducer";

export const getRepos = (searchQuery = "stars:%3E1", currentPage, perPage) => {
    if (searchQuery.trim() === "") searchQuery = "stars:%3E1";

    return async (dispatch) => {
        dispatch(setIsFetching(true));
        const response = await axios.get(
            `https://api.github.com/search/repositories?q=${searchQuery}&sort=stars&per_page=${perPage}&page=${currentPage}`
        );
        console.log(response.data);
        dispatch(setRepos(response.data));
    };
};

export const getCurrentRepo = async (username, repoName, setRepo) => {
    const response = await axios.get(
        `https://api.github.com/repos/${username}/${repoName}`
    );
    setRepo(response.data);
};

export const getCotributors = async (username, repoName, setContributors) => {
    const response = await axios.get(
        `https://api.github.com/repos/${username}/${repoName}/contributors?page=1&per_page=10`
    );
    setContributors(response.data);
};
