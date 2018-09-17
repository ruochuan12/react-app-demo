import React, { Component } from 'react';
class TodoItem extends Component{
    constructor(props){
        super(props);
        this.handleDel = this.handleDel.bind(this);
    }
    handleDel(){
        const { content, index, handleDelItem} = this.props;
        console.log(index, content);
        handleDelItem(index);
    }
    render(){
        const { content } = this.props;
        return  (
            <div onClick={this.handleDel}>{content}</div>
        );
    };
}
export default TodoItem;