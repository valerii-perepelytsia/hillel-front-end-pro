import React from "react";

import './styles.scss';

const Item = ({ id, value, onRemoveTodo, onCheckTodo }) => (
  <li className="item">
    <div className="value">
      <input
        className="check"
        type="checkbox"
        onClick={(event) => onCheckTodo(event, id)}
      />
      {value}
    </div>
    <button onClick={() => onRemoveTodo(id)}>
      x
    </button>
  </li>
)

export default Item;
