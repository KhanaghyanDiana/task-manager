import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTask, delateTask, editTask } from "../Redux/actions"
import { PopUp } from "../components/popup";
import "./home.css"
import { ERROR_MESSAGE } from "../Notifications/notifications";
import { TaskActions } from "../todoActions";
import { ALL_TASK } from "../Redux/selectors";
export const Home = (props) => {

    const { title } = props
    const regName = /^[\w-_.]*$/
    const state = useSelector(ALL_TASK)
    const dispatch = useDispatch()
    const [taskName, setTaskName] = useState("")
    const [open, setOpen] = React.useState(false);
    const [idofTask, setIdOfTask] = useState("")
    const [task, setTask] = useState("")
    const [show, setShow] = useState(false)

    const handleClickOpen = (idofCurrentTask) => {
        setOpen(true);
        setIdOfTask(idofCurrentTask)

    };

    useEffect(() => {
        const selectedUser = state.find(item => item.id === Number(idofTask))
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
                <p className="title">{title}</p>
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
                    {show && <p className="error-message">{ERROR_MESSAGE}</p>}
                </div>
                {
                    state.map(item => {
                        return (
                            <div key={item && item.id}>
                                <TaskActions
                                    item={item}
                                    handleClickOpen={handleClickOpen}
                                    handleDelate={handleDelate}
                                />
                            </div>
                        )
                    })
                }

            </div>
            {state.length === 0 ?
                <p className="notask-message">
                    ! There Is No Task</p>
                : ""
            }
            <PopUp
                handleClose={handleClose}
                content={
                    <input className="popup-input" value={task && task.todo} onChange={handleChange} />
                }
                open={open}
                labelClose={"Close"}
                label={"Save"}
            />
        </div >
    )
}