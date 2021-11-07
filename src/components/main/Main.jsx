import React from "react";
import "./main.scss";
import { getRepos } from "./../actions/repos";
import {useDispatch, useSelector} from "react-redux";
import Repo from "./repo/Repo";

const Main = () => {
  const dispatch = useDispatch();
  const repos = useSelector((state) => state.repos.items);

  React.useEffect(() => {
    dispatch(getRepos());
  }, []);

  return (
    <div>
      {repos.map((repo, index) => (
        <Repo repo={repo} key={index} />
      ))}
    </div>
  );
};

export default Main;
