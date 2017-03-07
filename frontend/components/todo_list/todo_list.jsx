import React from 'react';
import { buildTodosArray } from '../../reducers/selectors';
import TodoListItem from './todo_list_item';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.todos = props.todos;
    this.receiveTodo = props.receiveTodo;
  }

  render() {
    const todoItems = buildTodosArray(this.todos);
    const liItems = todoItems.map((todoItem, idx) =>
      <TodoListItem todo={todoItem} key={idx} />
    );
    return <ul>{liItems}</ul>;
  }
}

export default TodoList;
