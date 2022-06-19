import React, { useState } from 'react';
import {connect} from "react-redux";

import {add_todo, remove_todo, check_todo} from "../../store/todos/actions";
import {selectTodosLength, selectTodos} from "../../store/todos/selectors";

import TodosComponent from "./component";

import './styles.scss';

const Todos = ({add_todo, remove_todo, check_todo, todosLength, todos}) => {
  const [enterTodo, setEnterTodo] = useState('');

  const handleEnterTodo = e => {
    setEnterTodo(e.target.value);
  }

  const handleAddTodo = () => {
    const newTodo = {
      id: Math.round(Math.random() * 100),
      value: enterTodo,
      checked: false,
    }

    setEnterTodo('');
    add_todo(newTodo);
  }

  const handleRemoveTodo = todoId => {
    remove_todo(todoId);
  }

  const handleCheckTodo = todoId => {
    check_todo(todoId);
  }

  const isTodosEmpty = todosLength === 0;

  return (
      <TodosComponent
          enterTodo={enterTodo}
          todos={todos}
          isTodosEmpty={isTodosEmpty}
          onEnterTodo={handleEnterTodo}
          onAddTodo={handleAddTodo}
          onRemoveTodo={handleRemoveTodo}
          onCheckTodo={handleCheckTodo}
      />
  )
}

const mapStateToProps = state => ({
  todosLength: selectTodosLength(state),
  todos: selectTodos(state),
});

const mapDispatchToProps = {
  add_todo,
  remove_todo,
  check_todo,
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
