import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

// module.exports = () => <h3>Todo List goes here!</h3>;
const TodoList = ({todos, receiveTodo}) => {
  return (
  <div>
    <ul>
      {todos.map((el, idx) => <TodoListItem key={idx} title={el.title} />)}
    </ul>
    <TodoForm todos={todos} receiveTodo={receiveTodo}/>
  </div>
  )
};

export default TodoList;
