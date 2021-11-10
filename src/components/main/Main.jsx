import React from "react";
import "./main.scss";
import { getRepos } from "./../actions/repos";
import { useDispatch, useSelector } from "react-redux";
import Repo from "./repo/Repo";

const Main = () => {
  const dispatch = useDispatch();
  const repos = useSelector((state) => state.repos.items);
  const isFetching = useSelector((state) => state.repos.isFetching);

  const [text, setText] = React.useState('');

  React.useEffect(() => {
    dispatch(getRepos());
  }, []);

  function searchHandler() {
    dispatch(getRepos(text));
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
        <button className="search-btn" onClick={() => searchHandler()}>Search</button>
      </div>
      {isFetching ? (
        <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      ) : (
        repos.map((repo, index) => <Repo repo={repo} key={index} />)
      )}
    </div>
  );
};

export default Main;
