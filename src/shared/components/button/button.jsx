import React from "react";
import { Button } from "@mui/material";

export const CustomButton = ({handleClick, icon, text, direction}) => {
    return(
        <div className="btn-container">
            <Button
              variant="contained"
              id={`btn-cmp${direction? '-' + direction : ''}`}
              onClick={e => handleClick ? handleClick() : e.preventDefault}
              endIcon={<span className="material-icons md-24">{icon}</span>}
            >
                {text}
            </Button>
        </div>
    )
}