import { useReducer } from "react";
import { useState } from "react";

const ACTIONS_TYPE = {
  COIUNTER_PLUS: "counter_plus",
  VALUE: "value",
  DROPDOWN: "dropdown",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS_TYPE.COIUNTER_PLUS: {
      return {
        ...state,
        counter: state.counter + 1,
      };
    }
    case ACTIONS_TYPE.VALUE: {
      console.log(state.value);
      return {
        ...state,
        value: action.payload,
      };
    }
    case ACTIONS_TYPE.DROPDOWN: {
      return {
        ...state,
        dropdown: !state.dropdown,
      };
    }
  }
};

const initialState = {
  counter: 0,
  value: "",
  dropdown: false,
};

export const Product = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const counterHandler = () => {
    dispatch({
      type: ACTIONS_TYPE.COIUNTER_PLUS,
    });
  };

  const onChangeHandler = (value) => {
    dispatch({
      type: ACTIONS_TYPE.VALUE,
      payload: value,
    });
  };

  const dropdownToggler = () => dispatch({ type: ACTIONS_TYPE.DROPDOWN });

  return (
    <div>
      <button onClick={counterHandler}>Counter {state.counter}</button>
      <input
        type="text"
        value={state.value}
        onChange={(e) => onChangeHandler(e.target.value)}
      />
      value = {state.value}
      <button onClick={dropdownToggler}>dropdown</button>
      {state.dropdown && (
        <ul>
          <li>item</li>
          <li>item</li>
        </ul>
      )}
    </div>
  );
};
