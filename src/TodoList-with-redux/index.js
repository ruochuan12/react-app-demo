import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import TodoItem from './item';

import { 
    handleInputChangeAction,
    handleSubmitAction,
    handleDelItemAction,
} from './store/actionCreators';

class TodoList extends Component{
    constructor(props){
        super(props);
    }
    

    // getTodoItem(){
    //     const { list } = this.props;
    //     return list.map((item, index) => {
    //         return (
    //             <TodoItem
    //                 key={index}
    //                 index={index}
    //                 handleDelItem={this.handleDelItem}
    //                 content={item}>
    //             </TodoItem>
    //         );
    //     });
    // }

    render(){
        const { list, inputValue, handleInputChange, handleSubmit } = this.props;
        console.log(list, 'list');
        return  (
            <Fragment>
                <input
                value={inputValue}
                onChange={handleInputChange}
                />
                <button onClick={handleSubmit}>提交</button>
                <ul>
                {
                    list
                    // list.map((item, index) => {
                    //     return (
                    //         <TodoItem
                    //             key={index}
                    //             index={index}
                    //             handleDelItem={this.handleDelItem}
                    //             content={item}>
                    //         </TodoItem>
                    //     );
                    // })
                }
                </ul>
            </Fragment>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputChange(e){
            const value = e.target.value;
            dispatch(handleInputChangeAction(value));
        },
        handleSubmit(){
            dispatch(handleSubmitAction());
            console.log('点击');
        },
        handleDelItem(index){
            dispatch(handleDelItemAction(index));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);