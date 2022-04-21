import React from "react";

export const Button = (props) => {
    const { label, className, onClick, item } = props

    return (
        <button
            className={className}
            onClick={() => onClick(item)}>
            {label}
        </button>
    )
}
