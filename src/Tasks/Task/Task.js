import React from 'react';
import './Task.css';
function Task(props) {
    return (
        <div className="Task" onClick={props.delete} >{props.KeyIndex}: {props.desc}</div >
    );
};
export default Task;