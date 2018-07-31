import React from 'react';
import uniqueId from '../../util/generate_id';

class TodoForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: "",
      body: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitMethod = this.submitMethod.bind(this);
  }

  handleChange(string) {
    // debugger
    // this.setState({title: event.currentTarget.value});
    return e => this.setState({[string]: e.target.value});
  }

  submitMethod(event) {
    // console.log(uniqueId());
    event.preventDefault();
    const {title, body} = this.state;
    debugger
    const todo = {
      title,
      body
    };
    debugger
    this.props.createTodo(todo);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitMethod}>
          <label>Title:
            <input onChange={this.handleChange('title')} type="text" value={this.state.title}>
            </input>
          </label>
          <label>Body:
            <input onChange={this.handleChange('body')} type="text" value={this.state.body}>
            </input>
          </label>
          <input type="submit" value="new todo!"></input>
        </form>
      </div>
    );
  }
}

export default TodoForm;
