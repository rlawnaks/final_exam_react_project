function UpdateBoard(props) {
    let contents = [], title, content

    const board = props.board;
        const update = props.updateBoard;
        contents.push(
        <form onSubmit={(e) => {
            e.preventDefault()
            title = e.target.title.value
            content = e.target.content.value
            console.log(props)
            update(title, content)
        }}>
            <textarea style={{resize: "none"}} rows="1" cols="30" name="title">{board.title}</textarea>  
            <br />
            <textarea style={{resize: "none"}} rows="20" cols="30" name="content">{board.content}</textarea>
            <br />
            <input type="submit" value="수정" />
            <br />
        </form>)
    return (
        <div>
            {contents}
        </div>
    )
}

export default UpdateBoard