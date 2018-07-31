import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

// module.exports = () => <h3>Todo List goes here!</h3>;
class TodoList extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchTodos();
  }

  render () {
    const {todos, receiveTodo, createTodo} = this.props;
    return (
      <div>
        <ul>
          {todos.map((el, idx) => <TodoListItem key={idx} title={el.title} />)}
        </ul>
        <TodoForm todos={todos} receiveTodo={receiveTodo} createTodo={createTodo}/>
      </div>
    );
  }
}

export default TodoList;
