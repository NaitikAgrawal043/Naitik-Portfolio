import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import portfolioImage from "../../Assets/tripwise.jpg";
import notesAppImage from "../../Assets/Projects/notesTaking.png";
import tripwiseImage from "../../Assets/Projects/tripwise.png";
// import studyHub from "../../Assets/Projects/studyHub.png";
// import collab from "../../Assets/Projects/collab.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
  <ProjectCard
    imgPath={tripwiseImage} // replace with actual image import
    isBlog={false}
    title="TripWise - Travel Website"
    description="A fully responsive travel website showcasing global destinations with interactive UI, animated cards, and dynamic travel quotes."
    ghLink="https://github.com/NaitikAgrawal043"
  />
</Col>

<Col md={4} className="project-card">
  <ProjectCard
    imgPath={notesAppImage} // replace with actual image import
    isBlog={false}
    title="Notes Taking Web App"
    description="A responsive to-do & note-taking app with multi-list support, CRUD operations, deadline tracking, and mobile-friendly UI."
    ghLink="https://github.com/NaitikAgrawal043"
  />
</Col>

<Col md={4} className="project-card">
  <ProjectCard
    imgPath={portfolioImage} // replace with actual image import
    isBlog={false}
    title="Portfolio Website"
    description="A fully responsive portfolio website showcasing skills and projects, featuring smooth navigation and dynamic contact section."
    ghLink="https://github.com/NaitikAgrawal043"
    demoLink="https://naitikagrawal043.github.io/Portfolio-website/"
  />
</Col>


          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={studyHub}
              isBlog={false}
              title="StudyHub"
              description="Study Hub is an interactive platform for students to share knowledge and resources. Built with HTML, CSS, and JavaScript, and powered by Firebase, it allows users to ask questions, engage with peers, and access a repository of study materials. This project marks the beginning of my development journey, showcasing my dedication to enhancing academic collaboration."
              ghLink="https://github.com/NaitikAgrawal043"
             // demoLink="https://dhruv27005.github.io/study-hub-/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={collab}
              isBlog={false}
              title="project-Collab"
              description="Project Collab is a MERN-based platform that connects creators and innovators to collaborate on projects. It offers tools for project management, networking, and resource sharing, enabling users to showcase their work and access learning opportunities. Our mission is to foster creativity through meaningful partnerships, empowering users to turn ideas into impactful solutions."
             // ghLink="https://github.com/Dhruv460/project-collab-"
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={f}
              isBlog={false}
              title=""
              description=""
              ghLink=""
               demoLink=""   
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
