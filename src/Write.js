import { Link, useNavigate } from "react-router-dom";

function Write() {
    
    const navigate = useNavigate(); 
    let title = '';
    let content = '';

    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
                title = e.target.title.value;
                content = e.target.content.value;
                console.log(title, content)
                navigate("/board", {state:{title: title, content: content}})
            }}>
                <textarea style={{resize: "none"}} rows="1" cols="30" name="title" />  
                <br />
                <textarea style={{resize: "none"}} rows="20" cols="30" name="content" />
                <br />
                <input type="submit" value="등록" />
                <br />
                <Link to="/"><input type="submit" value="돌아가기" /></Link>
            </form>
        </div>
    )
}

export default Write