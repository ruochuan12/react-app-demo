import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
// import TodoItem from './item';
import { Input, List } from 'antd';
import { 
    handleInputChangeAction,
    handleSubmitAction,
    handleDelItemAction,
    initListAction,
} from './store/actionCreators';


const Search = Input.Search;

class TodoList extends PureComponent{
    constructor(props){
        super(props);
    }
    
    componentDidMount(){
        const { initList } = this.props;
        initList();
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
        const { 
            list,
            inputValue,
            handleInputChange,
            handleSubmit,
            handleDelItem,
        } = this.props;
        return  (
            <Fragment>
                <Search
                    placeholder="请输入内容"
                    enterButton="添加"
                    value={inputValue}
                    onChange={handleInputChange}
                    onSearch={handleSubmit.bind(this, inputValue)}
                    style={{width: '300px'}}
                    />
                <List
                    // header={<div>Header</div>}
                    // footer={<div>Footer</div>}
                    bordered
                    dataSource={list}
                    renderItem={(item, index) => (
                        <List.Item
                        actions={[<a onClick={handleDelItem.bind(this, index)}>删除</a>]}
                        >{item}
                        </List.Item>)
                    }
                    style={{width: '300px'}}
                    />
                {/* <input
                value={inputValue}
                ref={(input) => this.input = input}
                onChange={handleInputChange}
                />
                <button onClick={handleSubmit.bind(this)}>提交</button> */}
                {/* <ul>
                {
                    list.map((item, index) => {
                        return (
                            <TodoItem
                                key={index}
                                index={index}
                                handleDelItem={handleDelItem}
                                content={item}>
                            </TodoItem>
                        );
                    })
                }
                </ul> */}
            </Fragment>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        inputValue: state.getIn(['todoList', 'inputValue']),
        list: state.getIn(['todoList', 'list']),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        initList(){
            dispatch(initListAction());
        },
        handleInputChange(e){
            const value = e.target.value;
            dispatch(handleInputChangeAction(value));
        },
        handleSubmit(inputValue){
            console.log('点击', inputValue);
            if(!inputValue){
                alert('请输入内容');
                return;
            };
            dispatch(handleSubmitAction(inputValue));
        },
        handleDelItem(index){
            dispatch(handleDelItemAction(index));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);