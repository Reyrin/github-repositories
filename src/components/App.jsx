import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCount } from "../reducers/reposReducer";

function App() {
  const dispatch = useDispatch()
  const count = useSelector((state) => state.repos.count)

  function onCountClick() {
    dispatch(setCount(5));
  }

  return (
    <div>
      <h1 className={"title"}>REEEEEEACT</h1>
      <button onClick={() => onCountClick()}>COUNT</button>
      <div>{count}</div>
    </div>
  );
}

export default App;
