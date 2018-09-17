// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import './index.css';

// ReactDOM.render(
//   <App author="lxchuan12"/>,
//   document.getElementById('root')
// );

// @name:'路由配置'
// @author:'轩辕Rowboat'
// @time:'2017.04.19'
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
// import TodoList from './TodoList/index';
import TodoList from './TodoList-with-redux/index';
import store from './TodoList-with-redux/store';
import { Provider } from 'react-redux';
import './index.css';
// react-router@2.8.1版本问题
// import {Router,Route,hashHistory} from 'react-router';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// console.log(Router);
// console.log(Route);
export default class Index extends Component{
	render(){
		return (
            <Provider store={store}>
				<Router>
					<Route component={TodoList} path="/"></Route>
					{/* <Route component={App} path="/">
						哈哈哈
					</Route> */}
				</Router>
			</Provider>
		);
	};
}
ReactDOM.render(
  <Index/>,
  document.getElementById('root')
);