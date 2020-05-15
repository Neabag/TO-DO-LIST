import React, { Component } from 'react';
import './App.css';
import Tasks from './Tasks/Tasks';

class App extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    tasks: [],
  };

  inputHandler = (event) => {
    let textEntered = event.target.value
    if (event.key === 'Enter' && textEntered.length > 0) {
      const newTask = [...this.state.tasks];
      newTask.push({ desc: textEntered });
      console.log(newTask);
      this.setState({ tasks: newTask })
      event.target.value = '';
      this.textInput.blur();
    };
  };
  addTaskHandler = () => {
    this.textInput.focus();
  };
  removeTaskHandler = (index) => {
    const tasks = [...this.state.tasks];
    tasks.splice(index, 1);
    this.setState({ tasks: tasks });
  }

  render() {
    return (
      <div className="App">
        <div className="header">TO DO LIST</div>
        <div className="btn" onClick={this.addTaskHandler}>+</div>
        <Tasks tasks={this.state.tasks}
          clicked={this.removeTaskHandler} />
        <input
          type="text"
          className="inputText"
          ref={(input) => { this.textInput = input }}
          onKeyPress={(newTask) => this.inputHandler(newTask)} />
      </div>
    )
  };
}

export default App;

