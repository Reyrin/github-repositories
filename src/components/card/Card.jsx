import React from "react";
import { useParams } from "react-router-dom";
import "./card.scss";

import Spinner from "./../../components/main/spinner/Spinner";
import Btn from "./../UI/Btn";

import { getCurrentRepo, getCotributors } from "./../actions/repos";

function Card(props) {
    const { username, reponame } = useParams();
    const [repo, setRepo] = React.useState({ owner: {} });
    const [contributors, setContributors] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        getCurrentRepo(username, reponame, setRepo);
        getCotributors(username, reponame, setContributors);
        setIsLoading(false);
    }, []);

    return (
        <>
            {isLoading ? (
                <Spinner />
            ) : (
                <div className="card">
                    <div className="card__repo">
                        <img
                            src={repo.owner.avatar_url}
                            alt={repo.name}
                            className="card__img"
                        />
                        <div className="card__info">
                            <h1 className="card__name">{repo.name}</h1>
                            <p className="card__owner-name">
                                <span>Owner:</span> {repo.owner.login}
                            </p>
                            <p className="card__desc">{repo.description}</p>
                            {repo.language && (
                                <p className="card__language">
                                    <span>Language:</span> {repo.language}
                                </p>
                            )}
                            <div className="card__stars">
                                ⭐ {repo.stargazers_count}
                            </div>
                        </div>
                    </div>
                    <div className="card__contributors">
                        <h2 className="card__contributors-title">
                            Contributors:
                        </h2>
                        <ul className="card__contributors-list">
                            {contributors.map((name, index) => (
                                <li key={index}>{name.login}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}

            <Btn onClick={() => props.history.goBack()}> Back </Btn>
        </>
    );
}

export default Card;
