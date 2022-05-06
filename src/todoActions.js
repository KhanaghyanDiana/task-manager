import { Button } from "./components/button"
import React from "react"
import { handleChangeStyles } from "./home/styleChangeHelper"
const TodoActions = (props) => {
    const { item, handleClickOpen, handleDelate } = props

    return (
        <div className="todo-list" >
            <p className="todo-task" onClick={e => handleChangeStyles(e, 45, "blue")} >
                {item.todo.toUpperCase()}
            </p>
            <div className="todo-btns">
                <Button
                    item={item.id}
                    className="delate-btn"
                    onClick={handleDelate}
                    label={"Delate"}
                />
                <Button
                    item={item.id}
                    className="edit-btn"
                    onClick={handleClickOpen}
                    label={"Click to Edit"}
                />
            </div>
        </div>
    )
}
export const TaskActions = TodoActions