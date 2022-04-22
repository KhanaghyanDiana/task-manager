import React from "react";

export const Button = (props) => {
    const { label, className, onClick, item } = props

    const handleClick = () => {
        onClick && onClick(item)
    }


    return (
        <button
            className={className}
            onClick={handleClick}>
            {label}
        </button>
    )
}
