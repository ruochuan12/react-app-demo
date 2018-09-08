import React, {Component, Fragment} from 'react';
import TodoItem from './item';
class TodoList extends Component{
    constructor(props){
        super(props);
        this.state = {
            inputValue: '',
            list: [],
        };
        this.handerChange = this.handerChange.bind(this);
        this.handerSubmit = this.handerSubmit.bind(this);
        this.handerDelItem = this.handerDelItem.bind(this);
    }
    handerChange(e){
        const value = e.target.value;
        console.log(value, 'value');
        this.setState(() => {
            return {
                inputValue: value
            }
        });
    }
    handerSubmit(){
        console.log('点击');
        if(!this.state.inputValue){
            return;
        }
        this.setState((preState) => {
            console.log(preState, 'preState');
            return {
                list: [...preState.list, preState.inputValue],
                inputValue: '',
            }
        });
    }

    handerDelItem(index){
        this.setState((preState) => {
            const list = [...preState.list];
            list.splice(index, 1);
            return {
                list,
            };
        });
    }

    getTodoItem(){
        return this.state.list.map((item, index) => {
            return (
                <TodoItem
                key={index}
                index={index}
                handerDelItem={this.handerDelItem}
                content={item}>
                </TodoItem>
            );
        });
    }

    render(){
        return  (
            <Fragment>
                <input
                value={this.state.inputValue}
                onChange={this.handerChange}
                />
                <button onClick={this.handerSubmit}>提交</button>
                <ul>{this.getTodoItem()}</ul>
            </Fragment>
        );
    };
}
export default TodoList;