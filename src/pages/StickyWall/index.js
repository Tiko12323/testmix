import React from "react";
import { useGetStickersByNameQuery } from "../../services/stickersApi";
import plus from '../../assets/png/plus.png'
import { useNavigate } from "react-router-dom";
import './style.css'

function StickyWall() {
    const { data: stickers } = useGetStickersByNameQuery()
    const navigate = useNavigate()
    return (
        <div className="stickyWall_conteiner">
            <h1>Sticky wall</h1>
            <div className="all_stickers">
                {
                    stickers?.map((item) => (
                        <div key={item.id} className="sticker" style={{ background: item.color }}>
                            <div className="date_title">
                                <h2>{item.title}</h2>
                                {item.data}
                            </div>
                            {item.info}
                        </div>
                    ))
                }
                <div onClick={() => navigate('/createSticker')} className="add_sticker">
                    <img src={plus} alt="dsad" width={'50px'} height={'50px'} />
                </div>
            </div>
        </div>
    )
}

export default StickyWall