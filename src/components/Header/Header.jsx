import React from "react";
import calendar from '../../assets/svg/calendar-days.svg'
import sticker from '../../assets/svg/sticker.svg'
import arrows from '../../assets/svg/arrows.svg'
import list from '../../assets/svg/list.svg'
import { useNavigate, useLocation } from "react-router-dom";
import './header.css'

function Header() {
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location)
    return (
        <div className="conteiner">
            <h2>Menu</h2>
            <input onChange={(e) => e.target.value} placeholder="search" />
            <h3>Tasks</h3>
            <div className="pages_btns">
                <div onClick={()=>navigate('/upcoming')} className="btn">
                    <img src={arrows} alt="asdds" width={'20px'} height={'20px'} />
                    <h4>Upcoming</h4>
                </div>
                <div onClick={()=>navigate('/today')} className="btn">
                    <img src={list} alt="asdds" width={'20px'} height={'20px'} />
                    <h4>Today</h4>
                </div>
                <div onClick={()=>navigate('/calendary')} className="btn">
                    <img src={calendar} alt="asda" width={'20px'} height={'20px'} />
                    <h4>Calendary</h4>
                </div>
                <div onClick={()=>navigate('/stickyWall')} className="btn">
                    <img src={sticker} alt="asdds" width={'20px'} height={'20px'} />
                    <h4>Sticky wall</h4>
                </div>
            </div>

        </div>
    )
}

export default Header