import React, { Component } from 'react';
class Comment extends Component {
  render() {
    return (
      <div>
        <div className="comment-body">
          {this.props.children}
        </div>
        <div className="comment-author">
          - {this.props.author}
        </div>
      </div>
    );
  }
};
class AuthorList extends Component{
	render () {
		console.log(this.props.authorList);
		let authorNodeList = this.props.authorList.map((value,index)=>{
			return <Comment key={'comment-' + index} author={value.author}>{value.info}</Comment>;
		});
		console.log(this.state);
		return (
			<div>
				{authorNodeList}
			</div>
		);
	}
};
class FormSubmit extends Component {
	constructor(){
		super();
		this.state = {
			authorArr:[]
		};
	}
	handleSubmit(ev){
		// 阻止默认事件
		ev.preventDefault();
		let author = this.refs.author.value.trim();
		let info = this.refs.info.value.trim();
		let form = this.refs.form;
		// 清空输入框
		form.reset();
		this.state.authorArr.push({
			author:author,
			info:info
		});
		console.log(this.state.authorArr);
		console.log(author,info);
	}
	render(){
		console.log(this.state.authorArr);
		return (
			<div>
				<form ref="form" onSubmit={ev => {this.handleSubmit(ev)} }>
					<input placeholder="请输入作者姓名" ref="author"/>
					<input placeholder="请输入作者简介" ref="info"/>
					{/* <input type="submit" value="添加"/> */}
					<button>添加</button>
					{/*同样有效*/}
				</form>
				<AuthorList authorList={this.state.authorArr}></AuthorList>
			</div>
		);
	}
};
export default FormSubmit;