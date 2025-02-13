import React from "react";
import { Outlet } from "react-router-dom";

function OutLayOut(){
    return(
        <div>
            <Outlet />
        </div>
    )
}

export default OutLayOut