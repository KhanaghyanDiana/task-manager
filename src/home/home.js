import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTask, delateTask, editTask } from "../Redux/actions"
import { PopUp } from "../components/popup";
import "./home.css"
import { ERROR_MESSAGE } from "../Notifications/notifications";
import { TaskActions } from "../todoActions";
import { allTask } from "../Redux/selectors";
import { Tasks } from "../javascript/tasks";
import OneSignal from 'react-onesignal';
import { Mixpanel } from "../mixpanel";
import ButtonAppBar from "../components/header";
import { handleChangeStyles } from "./styleChangeHelper";

export const Home = (props) => {
    let handle_login = async () => {

        try {
            // Mixpanel.identify(user.id);
            Mixpanel.track('Successful login');
            Mixpanel.people.set({
                name: "Diana",
                lastName: "Khan",
            });

            // redirect to logged in page or something
        } catch (e) {
            Mixpanel.track('Unsuccessful login');
        }
    };
    const { title } = props
    const regName = /^[\w-_.]*$/
    const state = useSelector(allTask)
    const dispatch = useDispatch()
    const [taskName, setTaskName] = useState("")
    const [open, setOpen] = React.useState(false);
    const [idofTask, setIdOfTask] = useState("")
    const [task, setTask] = useState("")
    const [show, setShow] = useState(false)
    const [initialized, setInitialized] = useState(false);
    const [typeOfEvent, setTypeOfEvent] = useState("")
    const handleClickOpen = (idofCurrentTask) => {
        setOpen(true);
        setIdOfTask(idofCurrentTask)
    };


    useEffect(() => {
        window.OneSignal = window.OneSignal || []

        OneSignal.init({ appId: '414f934a-48ee-4167-99cc-5272dcc5f91c' }).then(() => {
            setInitialized(true);
            // OneSignal.showSlidedownPrompt().then(() => {
            //     // do other stuff
            //     console.log("kkkk")
            // });
            OneSignal.on('notificationDisplay', function (evt) {
                alert(evt.content)

            });
        })

    }, [])



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
        <>
            <ButtonAppBar />
            <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }} >
                <div>
                    <p className="title" onClick={(e) => handleChangeStyles(e, 45, "blue")}>{title}</p>
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
                {
                    state.length === 0 ?
                        <p className="notask-message" onClick={(e) => handleChangeStyles(e, 45, "red")}>
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
                {/* <form onSubmit={(e) => handle_login(e)}>
                <input type="email" name="email" />
                <input type="password" name="password" />
                <button type="submit">Login</button>
            </form> */}
                <Tasks />

            </div >
        </>
    )
}