import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Increment } from '../Redux/Action/index';
import {Decrement} from  '../Redux/Action/index';

function Navbar() {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const displaytext = useSelector(state => state.displayTest);

  return (
    <div>
      Counter: {counter} 
      <h1>{displaytext}</h1>
      <button onClick={() => dispatch(Increment(10))}>add</button>
      <button onClick={() => dispatch(Decrement(10))}>add</button>
    </div>
  );
}

export default Navbar;
