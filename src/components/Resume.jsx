import { Link } from "react-router-dom";
import { experiences, studies } from "../data/resume";

function Resume () {
    return (
        <>
            <h1>Resume</h1>
            <Link to={'/'}>Home</Link>
            <h2>Studies</h2>
            <ul>
                {studies.map(study => (
                    <div key={study.id}>
                        <h2>{study.title}</h2>
                        <p>{study.date}</p>
                        <p>{study.institution}</p>
                    </div>
                ))}
            </ul>
            <h2>Experiences</h2>
            <ul>
                {experiences.map(exp => (
                    <div key={exp.id}>
                        <h2>{exp.title}</h2>
                        <p>{exp.date}</p>
                        <p>{exp.company}</p>
                    </div>
                ))}
            </ul>
        </>
    )
};

export default Resume;