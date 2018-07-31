import { connect } from 'react-redux';
import TodoList from './todo_list';
// import { allTodos } from '../reducers/selectors';
import * as todoActions from '../../actions/todo_actions';

const mapStateToProps = state => ({
  todos: allTodos(state)
});

const mapDispatchToProps = dispatch => ({
  receiveTodo: (todo) => dispatch(todoActions.receiveTodo(todo)),
  fetchTodos: () => dispatch(todoActions.fetchTodos()),
  createTodo: (todo) => dispatch(todoActions.createTodo(todo))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
