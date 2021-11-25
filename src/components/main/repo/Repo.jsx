import React from "react";
import { NavLink } from "react-router-dom";

import "./repo.scss";

const Repo = React.memo(function ({ repo }) {
    return (
        <div className="repo">
            <div className="repo__header">
                <div className="repo__name">
                    <NavLink to={`/card/${repo.owner.login}/${repo.name}`}>
                        {repo.name}
                    </NavLink>
                </div>
                <div className="repo__stars">
                    ⭐ {repo.stargazers_count}
                </div>
            </div>
            <div className="repo__last-commit">
                Последний коммит: {repo.updated_at}
            </div>
            <a href={repo.html_url} className="repo__link" target="_blank">
                Ссылка на репозиторий: {repo.html_url}
            </a>
        </div>
    );
});

export default Repo;
