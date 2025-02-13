import React from "react";
import { Outlet } from "react-router-dom";
import './style.css'

function DefaultLayOut(){
    return(
        <div className="default">
            <Outlet />
        </div>
    )
}

export default DefaultLayOut