import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view h-100">
      <div className="project-img-container" style={{ overflow: "hidden", height: "200px" }}>
        <Card.Img
          variant="top"
          src={props.imgPath}
          alt="card-img"
          loading="lazy"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <Card.Body className="d-flex flex-column justify-content-between">
        <div>
          <Card.Title style={{ fontSize: "1.2rem", fontWeight: "600", marginBottom: "10px" }}>
            {props.title}
          </Card.Title>
          <Card.Text style={{ textAlign: "justify", fontSize: "0.92rem", lineHeight: "1.5" }}>
            {props.description}
          </Card.Text>
        </div>

        <div className="card-buttons-wrapper pt-3 d-flex justify-content-center align-items-center" style={{ gap: "10px" }}>
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>

          {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
            >
              <CgWebsite /> &nbsp;
              {"Demo"}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
