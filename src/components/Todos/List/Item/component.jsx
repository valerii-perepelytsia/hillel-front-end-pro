import React from "react";

import './styles.scss';

const Item = ({ id, value, checked, onRemoveTodo, onCheckTodo }) => (
  <li className="item">
    <div className={checked ? "complete" : "value"}>
      <input
        className="check"
        type="checkbox"
        checked={checked}
        onChange={() => onCheckTodo(id)}
      />
      {value}
    </div>
    <button onClick={() => onRemoveTodo(id)}>
      x
    </button>
  </li>
)

export default Item;
