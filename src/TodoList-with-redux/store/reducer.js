import { fromJS } from 'immutable';
import { 
    HANDLE_INPUT_CHANGE,
    HANDLE_SUBMIT,
    HANDLE_DEL_ITEM,
} from './constants';

const defaultState = fromJS({
    inputValue: '',
    list: [],
});

export default (state = defaultState, action) => {
    switch(action.type){
        case HANDLE_INPUT_CHANGE:
            console.log(state);
            // return state.merge({
            //     inputValue: action.inputValue
            // });
            return state;
        case HANDLE_SUBMIT:
            const list = [...state.get('list')];
            list.push(action.inputValue);
            return state.set('list', list).set('inputValue', '');
        case HANDLE_DEL_ITEM:
            // const list = [...state.list];
            // list.splice(action.index, 1);
            return state.set('list', list);
        default: 
            return state;
    };
};