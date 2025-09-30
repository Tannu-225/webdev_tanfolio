import React, { useState } from "react";
import { projects } from "../data/mock";

function Projects() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (img) => setSelectedImage(img);
  const closeImage = () => setSelectedImage(null);

  return (
    <section id="projects" className="bg-light py-5">
      <div className="container">
        <h2 className="text-center mb-5 display-4 fw-bold" style={{color: "#6a1b9a"}}>
          Projects
        </h2>

        <div className="row">
          {projects.map((project) => (
            <div className="col-md-6 mb-4" key={project.id}>
              <div className="card shadow-lg border-0 h-100 rounded-4 overflow-hidden project-card bg-glass">
                {/* Project Image */}
                <div
                  className="img-container"
                  onClick={() => openImage(project.image)}
                >
                  <img
                    src={project.image}
                    alt={project.name}
                    className="card-img-top project-img"
                  />
                  <div className="overlay d-flex align-items-center justify-content-center fw-bold">
                    Click to View
                  </div>
                </div>

                {/* Project Content */}
                <div className="card-body text-center">
                  <h5 className="card-title fw-bold text-dark">
                    {project.name}
                  </h5>
                  <p className="card-text text-muted">{project.description}</p>

                  {/* Tech Stack */}
                  <div className="mb-3">
                    {project.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="badge rounded-pill bg-purple-subtle text-purple fw-semibold me-2 mb-2"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="d-flex justify-content-center gap-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-purple rounded-pill px-3"
                    >
                      <i className="fas fa-external-link-alt me-2"></i> Live Demo
                    </a>
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-purple rounded-pill px-3"
                    >
                      <i className="fab fa-github me-2"></i> Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-5">
          <p className="text-muted fs-5 mb-3">
            More projects are coming soon! Check my GitHub for additional work.
          </p>
          <a
            href="https://github.com/yourgithub"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-purple btn-lg rounded-pill px-4"
          >
            <i className="fab fa-github me-2"></i> View All Projects
          </a>
        </div>
      </div>

      {/* Fullscreen Modal */}
      {selectedImage && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          onClick={closeImage}
        >
          <div className="modal-dialog modal-fullscreen">
            <div className="modal-content bg-dark">
              <div className="modal-header border-0">
                <button
                  type="button"
                  className="btn-close btn-close-white ms-auto"
                  onClick={closeImage}
                ></button>
              </div>
              <div className="modal-body d-flex justify-content-center align-items-center">
                <img
                  src={selectedImage}
                  alt="Project Fullscreen"
                  className="img-fluid rounded"
                  style={{ maxHeight: "90vh" }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
