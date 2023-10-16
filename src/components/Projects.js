import React from 'react';
import projImg3 from "../assets/img/project-img3.jpg";

const projectData = [
  {
    name: 'Project 1',
    image: projImg3
  },
  {
    name: 'Project 2',
    image: projImg3,
  },
  {
    name: 'Project 3',
    image: projImg3,
  },
];

export const Projects = () => {
  return (
    <section className="project" id="projects">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2>Projects</h2>
            <p>
            a project is a series of tasks that need to be completed to reach a specific outcome. A project can also be defined as a set of inputs and outputs required to achieve a particular goal.
            </p>
          </div>
        </div>
        <div className="row">
          {projectData.map((project, index) => (
            <div key={index} className="col-4">
              <div className="card">
                <div className="card-img-container">
                  <img
                    src={project.image}
                    className="card-img-top"
                    alt={`Project ${index + 1}`}
                  />
                  <div className="card-title-overlay">
                    <h5 className="card-title">{project.name}</h5>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
