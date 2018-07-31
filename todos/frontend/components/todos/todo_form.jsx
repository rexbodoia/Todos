import React from 'react';
import uniqueId from '../../util/generate_id';

class TodoForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: "",
      body: ""
    };
    // this.handleChange = this.handleChange.bind(this);
  }

  handleChange(string, e) {
    debugger
    this.setState({title: event.currentTarget.value});
  }

  render() {
    return (
      <div>
        <form>
          <label>Title:
            <input onChange={() => this.handleChange('title')} type="text" value={this.state.title}>
            </input>
          </label>
          <label>Body:
            <input onChange={() => this.handleChange('body')} type="text" value={this.state.body}>
            </input>
          </label>
        </form>
      </div>
    );
  }
}

export default TodoForm;
