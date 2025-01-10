import React, { useState } from 'react';

function Task() {
    let [data, setData] = useState({
        task: "",
        date: "",
        isComplete: false,
    });
    let [list, setList] = useState([]);

    const handleInput = (e) => {
        let { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (data.task && data.date) { // Validate required fields
            setList([...list, { ...data, id: Date.now() }]);
            setData({ task: "", date: "", isComplete: false }); // Clear the form
        } else {
            alert("Please fill in all fields");
        }
    };

    const toggleComplete = (id) => {
        setList(
            list.map((item) =>
                item.id === id ? { ...item, isComplete: !item.isComplete } : item
            )
        );
    };

    return (
        <>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    name="task"
                    value={data.task}
                    placeholder="Enter task"
                    onChange={handleInput}
                />
                <input
                    type="date"
                    name="date"
                    value={data.date}
                    onChange={handleInput}
                />
                <button type="submit">Add Task</button>
            </form>

            {list.map(({ task, date, isComplete, id }) => (
                <div key={id}>
                    <h3>{task}</h3>
                    <p>Due date: {date}</p>
                    <button onClick={() => toggleComplete(id)}>
                        {isComplete ? "Complete" : "Pending"}
                    </button>
                </div>
            ))}
        </>
    );
}

export default Task;
