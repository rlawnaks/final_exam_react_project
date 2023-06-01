import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"

function Board() {

    const [list , setList] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();

    let state = location.state;
    list.push(state);
    useEffect(() => {
        setList(list);
        console.log(list);
    })

    let content = [];
    let tmp;
    for(let i = 0; i < list.length; i++) {
        tmp = <li id={`post${i}`}>{list[i].title}</li>
        content.push(tmp);
    }

    return (
        <div>
            <ul>
                {content}
            </ul>
            <button onClick={(e) => {
                e.preventDefault();
                navigate("/", {state: {list: list}})
            }}>Home</button>
        </div>
    )
}

export default Board