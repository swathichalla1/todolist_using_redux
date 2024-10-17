
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ADD } from './Actions.jsx';
import Showtodo from './Showtodo';
import './index.css'

const App = () => {
  const dispatch = useDispatch();
  const [inputvalue, setinputvalue] = useState("");

  const handleTodo = () => {
    if (inputvalue.trim()) {
      const newtodo = {
        title: inputvalue,
      };
      dispatch(ADD(newtodo));
      setinputvalue("");
    }
  };

  return (
    <div className="d-flex flex-column align-items-center vh-100 p-4">
      <h1 className="text-primary text-center mb-4">TODO app using react-redux</h1>

      <div className="input-group mb-3">
        <input
          type="text"
          value={inputvalue}
          className="form-control"
          onChange={(e) => setinputvalue(e.target.value)}
          placeholder="Add a new task"
        />
        <button className="btn btn-primary" onClick={handleTodo}>ADD</button>
      </div>

      <Showtodo />
    </div>
  );
};

export default App;
