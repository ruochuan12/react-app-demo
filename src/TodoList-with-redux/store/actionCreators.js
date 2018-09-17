import { 
    INIT_LIST,
    HANDLE_INPUT_CHANGE,
    HANDLE_SUBMIT,
    HANDLE_DEL_ITEM,
} from './constants';
import axios from 'axios';

export const initListAction = () => {
    return (dispatch) => {
        axios({
            url: '/api/todo-list.json',
            methods: 'get',
        })
        .then((res) => {
            console.log(res.data);
            dispatch({
                type: INIT_LIST,
                list: res.data.data,
            })
        })
        .catch(res => {
            console.log(res, 'catch');
        });
    };
};

export const handleInputChangeAction = (inputValue) => {
    return {
        type: HANDLE_INPUT_CHANGE,
        inputValue,
    };
};

export const handleSubmitAction = (inputValue) => {
    return {
        type: HANDLE_SUBMIT,
        inputValue,
    };
};

export const handleDelItemAction = (index) => {
    return {
        type: HANDLE_DEL_ITEM,
        index: index,
    };
};