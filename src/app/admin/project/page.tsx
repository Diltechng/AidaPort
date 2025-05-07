import React from 'react';

const ProjectPage = () => {
    const projects = [
        { id: 1, name: 'Project Alpha', description: 'Description for Project Alpha' },
        { id: 2, name: 'Project Beta', description: 'Description for Project Beta' },
        { id: 3, name: 'Project Gamma', description: 'Description for Project Gamma' },
    ];

    return (
        <div>
            <h1>All Projects</h1>
            <ul>
                {projects.map((project) => (
                    <li key={project.id}>
                        <h2>{project.name}</h2>
                        <p>{project.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProjectPage;