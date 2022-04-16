import React from "react";

export const ColorTitle = ({label, shadow}) => {
    return (
        <div className='color-title'>
            <div className="color"/>
            <div className={`title${shadow? ' shadowed' : ''}`}>{label}</div>
        </div>
    )
}