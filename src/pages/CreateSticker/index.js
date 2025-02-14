import React, {useState} from "react";
import { useAddStickerByNameMutation } from "../../services/stickersApi";
import './style.css'

function CreateSticker (){
    const [title, setTitle] = useState('')
    const [info1, setInfo1] = useState('')
    const [info2, setInfo2] = useState('')
    const [info3, setInfo3] = useState('')
    const [info4, setInfo4] = useState('')
    const [color, setColor] = useState('') 
    const [addStickerByName] = useAddStickerByNameMutation()

    async function add(){
        await addStickerByName({title: title, info1: info1, info2: info2, info3: info3, info4: info4, color: color}).unwrap()
    }
    return(
        <div className="createSticker_conteiner">
            <input onChange={(e)=>setTitle(e.target.value)} placeholder="Sticker title" className="title_input"/>
            <input onChange={(e=>setInfo1(e.target.value))} placeholder="task1" className="info_input"/>
            <input onChange={(e=>setInfo2(e.target.value))} placeholder="task2" className="info_input"/>
            <input onChange={(e=>setInfo3(e.target.value))} placeholder="task3" className="info_input"/>
            <input onChange={(e=>setInfo4(e.target.value))} placeholder="task4" className="info_input"/>
            <input onChange={(e)=>setColor(e.target.value)} placeholder="color" className="color_input"/>
            <button onClick={add} className="done_btn">done</button>
        </div>
    )
}

export default CreateSticker