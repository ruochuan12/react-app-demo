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
import App from './App';
import './index.css';
import {Router,Route,hashHistory} from 'react-router-dom';
console.log(Router);
console.log(Route);
console.log(hashHistory);
export default class Index extends Component{
	render(){
		return (
			<Router history={hashHistory}>
				<Route component={App} path="/"></Route>
			</Router>
		);
	};
}
ReactDOM.render(
  <Index/>,
  document.getElementById('root')
);