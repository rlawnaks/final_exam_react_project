import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "./App";

function Write() {
    
    const context = useContext(Context)
    const navigate = useNavigate(); 
    let title = '';
    let content = '';
    let id;
    let pw;
    if(context.board.length == 0) {
        id = 1;
    } else {
        id = context.board[context.board.length-1].id+1;
    }

    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
                title = e.target.title.value;
                content = e.target.content.value;
                pw = e.target.pw.value;
                console.log(title, content)
                
                context.board.push({id: id, title:  title, content: content, pw: pw})
                navigate("/board")
            }}>
                <textarea style={{resize: "none"}} rows="1" cols="30" name="title" />  
                <br />
                <textarea style={{resize: "none"}} rows="20" cols="30" name="content" />
                <br />
                <input type="password" placeholder="글 비밀번호 입력" name="pw"/>
                <input type="submit" value="등록" />
                <br />
                <Link to="/"><input type="submit" value="돌아가기" /></Link>
            </form>
        </div>
    )
}

export default Write