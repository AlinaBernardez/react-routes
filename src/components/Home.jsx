import { Link } from "react-router-dom";

function Home () {
    return (
        <>
            <h1>Home</h1>
            <div style={{display: 'flex', gap: 15}}>
                <Link to={'/resume'}>Resume</Link>
                <Link to={'/projects'}>Projects</Link>
            </div>
        </>
    )
};

export default Home;