import React from "react";
import './search.scss';

import Btn from './../../UI/Btn';

function Search({text, setText, searchHandler}) {
    return (
        <div className="search">
            <input
                className="search__input"
                type="text"
                placeholder="Find a repository..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <Btn onClick={searchHandler}> Search </Btn>
        </div>
    );
}

export default Search;
