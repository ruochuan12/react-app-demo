import { combineReducers } from 'redux-immutable';
import { reducer as todoListReducer } from '../TodoList-with-redux/store';

const reducer = combineReducers({
	todoList: todoListReducer
});

export default reducer;
