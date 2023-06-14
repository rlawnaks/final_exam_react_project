import { Link } from "react-router-dom"

function Home() {
    return (
        <div>
            <Link to="/board"><button>채용공고 확인</button></Link>
            <Link to="/write"><button>채용공고 작성</button></Link>
        </div>
    )
}

export default Home 