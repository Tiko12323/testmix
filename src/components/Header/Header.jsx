import React from "react";
import calendar from '../../assets/svg/calendar-days.svg'
import sticker from '../../assets/svg/sticker.svg'
import arrows from '../../assets/svg/arrows.svg'
import list from '../../assets/svg/list.svg'
import { useNavigate, useLocation } from "react-router-dom";
import { useGetPagesByNameQuery } from "../../services/pagesApi";
import './header.css'

function Header() {
    const navigate = useNavigate()
    const location = useLocation()
    const { data: pages } = useGetPagesByNameQuery()
    return (
        <div className="conteiner">
            <div onClick={() => navigate('/')}>
                <h2>Menu</h2>
            </div>
            <input onChange={(e) => e.target.value} placeholder="search" />
            <h3>Tasks</h3>
            <div className="pages_btns">
                {
                    pages?.map((item) => (
                        <div onClick={() => navigate(item.path)} key={item.id} className={location.pathname !== item.path ? "btn": "active_btn"} >
                            {item.id === '1' ? <img src={arrows} alt="asd" width={'20px'} height={'20px'} /> : <></>}
                            {item.id === '2' ? <img src={list} alt="asd" width={'20px'} height={'20px'} /> : <></>}
                            {item.id === '3' ? <img src={calendar} alt="asd" width={'20px'} height={'20px'} /> : <></>}
                            {item.id === '4' ? <img src={sticker} alt="asd" width={'20px'} height={'20px'} /> : <></>}
                            <h4>{item.title}</h4>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Header