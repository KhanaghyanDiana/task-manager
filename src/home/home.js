import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTask, delateTask, editTask } from "../Redux/actions"
import { PopUp } from "../components/popup";
import "./home.css"
export const Home = () => {

    const regName = /^[\w-_.]*$/
    const allTasks = state => state.taskManagmentReducer.tasks
    const [error, setError] = useState("")
    const state = useSelector(allTasks)
    const dispatch = useDispatch()
    const [taskName, setTaskName] = useState("")
    const [open, setOpen] = React.useState(false);
    const [idofTask, setIdOfTask] = useState("")
    const [task, setTask] = useState("")
    const [show, setShow] = useState(true)
    const handleClickOpen = (idofCurrentTask) => {
        setOpen(true);
        setIdOfTask(idofCurrentTask)

    };

    useEffect(() => {
        const selectedUser = state.find(id => id.id === Number(idofTask))
        setTask(selectedUser)
    }, [idofTask])

    const handleClose = () => {
        setOpen(false);

        task && dispatch(editTask(task))
    };
    const handleAdduser = (e) => {
        setTaskName(e.target.value)
    }

    const handleAddTask = () => {
        if (taskName.match(regName)) {
            const values = {
                todo: taskName,
                id: Math.floor(Math.random() * 15)
            }
            dispatch(addTask(values))

        } else {
            setError('Please Use Only Letters And Numbers')
            setTimeout(() => {
                setShow(!show)
            }, 2000)
        }
    }

    const handleDelate = (id) => {
        dispatch(delateTask(id))
    }

    const handleChange = (e) => {
        setTask({
            ...task,
            todo: e.target.value,

        })
    }

    return (
        <div>
            <div>
                <p className="title">Task Manager</p>
            </div>
            <div className="todo-wrapper">
                <div className="input-section">
                    <input
                        onChange={handleAdduser}
                        placeholder="Create a New Todo"
                        className="todo-input"
                    />
                    <button className="createTodo-btn" onClick={handleAddTask}>Create</button>
                </div>
                <div >
                    {show && <p className="error-message">{error}</p>}
                </div>
                {
                    state.map(item => {
                        return (
                            <div className="todo-list" key={item && item.id}>
                                <p className="todo-task">
                                    {item.todo.toUpperCase()}
                                </p>
                                <div className="todo-btns">
                                    <button className="delate-btn" onClick={() => handleDelate(item.id)}>Delate</button>
                                    <button className="edit-btn" variant="outlined" onClick={() => handleClickOpen(item.id)}>Click to Edit</button>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
            {state.length === 0 ? <p className="notask-message">! There Is No Task</p> : ""}
            <PopUp
                handleClose={handleClose}
                content={
                    <input className="popup-input" value={task && task.todo} onChange={handleChange} />
                }
                open={open}
            />
        </div >
    )
}