import React from "react";

export const ColorTitle = ({label}) => {
    return (
        <div className="color-title">
            <div className="color"/>
            <div className="title">{label}</div>
        </div>
    )
}