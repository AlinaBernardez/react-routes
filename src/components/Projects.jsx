import { Link } from "react-router-dom";
import projects from "../data/projects";

function Projects () {
    return (
        <>
            <h1>Projects</h1>
            <Link to={'/'}>Home</Link>
            <ul>
                {projects.map(project => (
                    <div key={project.id}>
                        <h2>{project.name}</h2>
                        <img src={project.image} alt={`project: ${project.name}`}/>
                        <p>{project.description}</p>
                        <a href={project.url} target="_blank">Go to project</a>
                    </div>
                ))}
            </ul>
        </>
    )
};

export default Projects;