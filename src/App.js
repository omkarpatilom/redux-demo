import React from "react";
import "./App.css";
import { UseSelector, useDispatch, useSelector } from "react-redux";
import { decNumber, incNumber } from "./actions";

function App() {
  const myState = useSelector((state) => state.ChangeTheNumber);
  const Dispatch = useDispatch();
  return (
    <>
      <div className="Container">
        <h1>Hii</h1>
        <h1>Increament/Decreament Counter</h1>
        <h4>Using React and Redux</h4>
        <div className="quantity">
          <a
            className="quantity_minus"
            title="Decrement"
            onClick={() => Dispatch(decNumber())}
          >
            <span>-</span>
          </a>
          <input
            name="quantity"
            type="text"
            className="quantity_input"
            value={myState}
          />
          <a
            className="quantity_plus"
            title="Increment"
            onClick={() => Dispatch(incNumber())}
          >
            <span>+</span>
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
