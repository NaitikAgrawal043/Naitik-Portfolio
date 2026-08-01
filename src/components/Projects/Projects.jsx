import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import puneAuthorsImage from "../../assets/Projects/puneAuthors.png";
import portfolioImage from "../../assets/tripwise.jpg";
import notesAppImage from "../../assets/Projects/notesTaking.png";
import tripwiseImage from "../../assets/Projects/tripwise.png";
import quizAppImage from "../../assets/Projects/image.png";

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
              imgPath={puneAuthorsImage}
              isBlog={false}
              title="Pune Authors Association"
              description="A full-stack e-commerce platform for authors to list and sell books, event management with automated PDF catalogue generation, live Point-of-Sale (POS) system, and role-based admin dashboard with real-time sales analytics."
              ghLink="https://github.com/NaitikAgrawal043/pune-authors-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tripwiseImage}
              isBlog={false}
              title="TripWise - Travel Website"
              description="A fully responsive travel website showcasing global destinations with interactive UI, animated cards, and dynamic travel quotes."
              ghLink="https://github.com/NaitikAgrawal043"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quizAppImage}
              isBlog={false}
              title="Quiz Web App"
              description="A full-stack quiz application with real-time test synchronization, admin control panel, student interface, result tracking, and live instructor-led assessments built with React and Node.js."
              ghLink="https://github.com/NaitikAgrawal043/Quizz"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolioImage}
              isBlog={false}
              title="Portfolio Website"
              description="A fully responsive portfolio website showcasing skills and projects, featuring smooth navigation and dynamic contact section."
              ghLink="https://github.com/NaitikAgrawal043"
              demoLink="https://naitikagrawalprofile.netlify.app/#/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={notesAppImage}
              isBlog={false}
              title="Notes Taking Web App"
              description="A responsive to-do & note-taking app with multi-list support, CRUD operations, deadline tracking, and mobile-friendly UI."
              ghLink="https://github.com/NaitikAgrawal043"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
