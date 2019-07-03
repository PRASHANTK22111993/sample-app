import React from 'react';

const Input = (props) => {
    const { id, onChangeHandler, ...rest } = props;
    const onChangeCallback = (e) => {
        const value = e.target.value || '';
        onChangeHandler && onChangeHandler(value, id);
    }
    return (<input className="app-input-comp" onChange={onChangeCallback} {...rest} />)
}

export default Input;