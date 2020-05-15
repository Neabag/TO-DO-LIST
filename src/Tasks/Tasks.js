import React from 'react';
import Task from './Task/Task';

function Tasks(props) {
    return props.tasks.map((task, index) => {
        return (
            <Task
                desc={task.desc}
                KeyIndex={index + 1}
                key={index}
                delete={() => { props.clicked(index) }}
            />
        );
    });
}
export default Tasks;
