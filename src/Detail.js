import { useContext, useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { Context } from "./App"
import Manage from "./Manage"
import UpdateBoard from "./UpdateBoard"

function Detail() {
    const [mode, setMode] = useState('Read')

    let location = useLocation().state
    let navigate = useNavigate()
    let board = location.board
    let context = useContext(Context)

    const [title, setTitle] = useState(board.title)
    const [content, setContent] = useState(board.content)
    const [manage, setManage] = useState('')

    const contents = []
    const resume = []
    console.log(context.resume)

    if(context.resume.length != 0) {
        for(let i = 0; i < context.resume.length; i++) {
            if(context.resume[i].boardId == board.id) {
                resume.push(context.resume[i])
            }
        }
    }

    const [cnt, setCnt] = useState(resume.length)
    let name, age, tel, sex;
    let boardId = board.id

    if(mode == 'Resume') {
        contents.push(<p>이력서</p>)
        contents.push(
            <form onSubmit={(e) => {
                e.preventDefault()
                name = e.target.name.value;
                age = e.target.age.value;
                tel = e.target.tel.value;
                sex = e.target.sex.value;
                context.resume.push({boardId: boardId, name: name, age:age, tel:tel, sex:sex})
                resume.push({boardId: boardId, name: name, age:age, tel:tel, sex:sex})
                alert("이력서가 제출 되었습니다.")
                console.log(context.resume)
                setCnt(resume.length)
                setMode('Read')
            }}>
                <p>이름 <input type="text" placeholder="name" name="name"/></p>
                <p>나이 <input type="text" placeholder="age" name="age"/></p>
                <p>전화번호 <input type="text" placeholder="tel" name="tel"/></p>
                <p>남 <input type="radio" value='m' name="sex"/> <br /> 여 <input type="radio" value='w' name="sex"/></p>
                <input type="submit" value={'제출'}/>
            </form>
        )
    } else if(mode == 'Input') {
        contents.push(
            <form onSubmit={(e) => {
                e.preventDefault()
                if(e.target.pw.value == board.pw) {
                    setMode('Manage')
                } else {
                    alert('비밀번호가 틀렸습니다.')
                }
            }}>
                <p>글 비밀번호 <input type="password" placeholder="password" name="pw"/></p>
                <input type="submit" value={'확인'}/>
            </form>
        )
    } else if(mode == 'Manage') {
        contents.push(
            <div>
                <button onClick={(e) => {
                    e.preventDefault()
                    setManage(<Manage resume={resume} />)
                }}>이력서 확인</button>
                <button onClick={(e) => {
                    e.preventDefault()
                    setManage(<UpdateBoard board={{title: title, content:content}}
                            updateBoard={(title, content) => {
                            context.board[location.index].title = title
                            context.board[location.index].content = content
                            setTitle(title)
                            setContent(content)
                            console.log(context.board)
                            setManage()
                        }} />)
                }}>글 수정</button>
                <button onClick={(e) => {
                    e.preventDefault()
                    let tmp = []
                    context.board = context.board.splice(location.index, 1)
                    for(let i = 0; i < context.resume.length; i++) {
                        if(context.resume[i].boardId != boardId)
                            tmp.push(context.resume[i])
                    }
                    context.resume = tmp;
                    navigate("/board")
                }}>글 삭제</button>
            </div>
        )
    }


    return (
        <div>
            <div>{title}</div>
            <div>{content}</div>
            <button onClick={(e) => {
                e.preventDefault()
                setMode('Input')
                setManage()
            }}>글 관리</button>
            <button onClick={(e) => {
                e.preventDefault()
                setMode('Resume')
                setManage()
            }}>이력서 작성</button>
            <button onClick={(e) => {
                    e.preventDefault()
                    navigate("/Board")
                }}>글 목록</button>
            <p>{`제출된 이력서: ${cnt}개`}</p>
            {contents}
            {manage}
        </div>
    )
}

export default Detail