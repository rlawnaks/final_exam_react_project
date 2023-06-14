import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"
import { Context } from "./App";

function Board() {

    const context = useContext(Context)
    const navigate = useNavigate()
    console.log(context)

    let board = context.board

    let content = [];
    let tmp;
    for(let i = 0; i < board.length; i++) {
        tmp = <li key={`${board[i].id}`} id={`post${board[i].id}`} onClick={(e) => {
            e.preventDefault()
            navigate("/detail", {state: {board: board[i], index: i}})
        }}>{board[i].title}</li>
        content.push(tmp);
    }

    return (
        <div>
            <ul>
                {content}
            </ul>
            <button onClick={(e) => {
                e.preventDefault();
                navigate("/")
            }}>Home</button>
        </div>
    )
}

export default Board