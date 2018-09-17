import { fromJS } from 'immutable';
import { 
    HANDLE_INPUT_CHANGE,
    HANDLE_SUBMIT,
    HANDLE_DEL_ITEM,
    INIT_LIST,
} from './constants';

const defaultState = fromJS({
    inputValue: '',
    list: [],
});

export default (state = defaultState, action) => {
    switch(action.type){
        case INIT_LIST:
            return state.merge({
                list: fromJS(action.list)
            });
        case HANDLE_INPUT_CHANGE:
            return state.merge({
                inputValue: fromJS(action.inputValue)
            });
        case HANDLE_SUBMIT:
            return state.merge({
                list: state.get('list').concat(action.inputValue),
                inputValue: '',
            });
        case HANDLE_DEL_ITEM:
            const list = state.get('list').toJS();
            // 这里可以toJS() 再用splice formJS remove 无效
            // list.remove(action.index);
            list.splice(action.index, 1);
            console.log(list);
            return state.set('list', fromJS(list));
        default: 
            return state;
    };
};