import { 
    HANDLE_INPUT_CHANGE,
    HANDLE_SUBMIT,
    HANDLE_DEL_ITEM,
} from './constants';
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