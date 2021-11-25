import React, { useState } from "react";
import { useParams } from 'react-router-dom';

import { getCurrentRepo, getCotributors } from './../actions/repos';

function Card(props) {
    const { username, reponame } = useParams();
    const [repo, setRepo] = useState({owner: {}});
    const [contributors, setContributors] = useState([]);

    React.useEffect(() => {
        getCurrentRepo(username, reponame, setRepo);
        getCotributors(username, reponame, setContributors);
    }, [])

    return (
        <div>
            <div className="card">
                <img src={repo.owner.avatar_url} alt=""/>
                <div className="name">{repo.name}</div>
                <div className="stars">{repo.stargazers_count}</div>
            </div>

            {contributors.map((c, index) =>
                <div key={index}>{index+1}. {c.login}</div>
            )}

            <button className="back-btn" onClick={() => props.history.goBack()}>
                Back
            </button>
        </div>
    );
}

export default Card;
