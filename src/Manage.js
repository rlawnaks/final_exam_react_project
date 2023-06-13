import { useEffect, useState } from "react"

function Manage(props) {

    const contents = []

    let name,age,tel,sex;

        let resume = props.resume
        contents.push(<p>이름 / 나이 / 전화번호 / 성별</p>)
        for(let i = 0; i < resume.length; i++) {
            name = resume[i].name
            age = resume[i].age
            tel = resume[i].tel
            sex = resume[i].sex == 'm' ? '남' : '여'
            contents.push(<li key={`k${i}`}>{`${name} / ${age} / ${tel} / ${sex}`}</li>)
        }

    return (

        <div>
            {contents}
        </div>
    )
}

export default Manage