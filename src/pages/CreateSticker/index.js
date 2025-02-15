import React, { useState, useEffect, useRef } from "react";
import { useAddStickerByNameMutation } from "../../services/stickersApi";
import Quill from "quill";
import DatePicker from "react-datepicker";
import "quill/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";
import "./style.css";

function CreateSticker() {
    const [startDate, setStartDate] = useState(new Date());
    const [title, setTitle] = useState('');
    const [info, setInfo] = useState('');
    const [color, setColor] = useState('');
    const [addStickerByName] = useAddStickerByNameMutation();
    const editorRef = useRef(null);
    const quillRef = useRef(null);

    useEffect(() => {
        if (editorRef.current && !quillRef.current) {
            quillRef.current = new Quill(editorRef.current, {
                theme: "snow",
                placeholder: "Write something...",
            });

            quillRef.current.on("text-change", () => {
                setInfo(quillRef.current.root.innerHTML);
            });
        }
    }, []);

    async function add() {
        await addStickerByName({
            title: title,
            info: info,
            color: color,
            data: startDate
        }).unwrap();
    }

    return (
        <div className="createSticker_container">
            <div className="title_date">
                <input onChange={(e) => setTitle(e.target.value)} placeholder="Sticker title" className="title_input" />
                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />;
            </div>
            <div ref={editorRef} className="quill-editor" style={{ height: "200px" }}></div>
            <input onChange={(e) => setColor(e.target.value)} placeholder="Color" className="color_input" />
            <button onClick={add} className="done_btn">Done</button>
        </div>
    );
}

export default CreateSticker;
