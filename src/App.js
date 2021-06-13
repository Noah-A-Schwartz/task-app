/* eslint-disable no-useless-constructor */
import React from 'react';
import { Component } from 'react';
import Overview from './Components/Overview';
import uniqid from "uniqid";
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      task: {
        text: '',
        id: uniqid(),
        
      },
      tasks: [],
    }
    this.buttonSubmit = this.buttonSubmit.bind(this);
    this.onChangeInput = this.onChangeInput.bind(this);

  }

  buttonSubmit() {
    let input = document.getElementById("task-input").value;
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task:{
        text: '',
        id: uniqid()
      }
      
    });
  }
  onChangeInput(){
    let input = document.getElementById("task-input").value;
    this.setState({
      task: {
        text: input,
        id: this.state.task.id
      },
    })
  }




  render() {
    const {tasks, task} = this.state;
    return (
      <div className="App">
        <input onChange = {this.onChangeInput} id="task-input" value= {task.text}></input>
        <button type="button" onClick={this.buttonSubmit}>Submit Task</button>
        <Overview tasks={tasks} />
      </div>
    );
  }
}


export default App;
