import React from "react";
import { Outlet } from "react-router-dom";
import './outlayout.css'
import Header from "../components/Header/Header";

function OutLayOut(){
    return(
        <div className="out">
            <Header />
            <Outlet />
        </div>
    )
}

export default OutLayOut