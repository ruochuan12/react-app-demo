import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InputNumber from './InputNumber';

class Author extends Component{
    constructor(props){
        super(props);
        this.state = {
          author:this.props.author || '轩辕Rowboat'
        };
    }
    handleClick(){
        console.log('Author handleClick',this);
    }
    render () {
        console.log('Author render',this);
      return (
          <span onClick={() => this.handleClick()}>
              hello {this.state.author}!
          </span>
      );
    }
};
class App extends Component {
  render() {
      let value = this.props.author;
    return (
      <div className="App">
        <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
        </div>

        <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
            <br/>
            <Author author={value}></Author>
        </p>
          <div>
            <h3>数字输入框</h3>
            <InputNumber></InputNumber>
          </div>
      </div>
    );
  }
};

export default App;
