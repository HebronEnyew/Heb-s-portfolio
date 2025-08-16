import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import tanaMed from "../../Assets/Projects/tanaMed.jpg";
import valerie from "../../Assets/Projects/Valerie-Reads.png";
import foodie from "../../Assets/Projects/Foodie-Finderr.png";
import darkjokes from "../../Assets/Projects/darkjokes.png";

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
              imgPath={valerie}
              isBlog={false}
              title="Valerie-Reads"
              description="Search, browse, and save your favorite books effortlessly."
              demoLink="https://book-verse-website.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tanaMed}
              isBlog={false}
              title="TanaMed"
              description="Connects patients with doctors and manages appointments easily."
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foodie}
              isBlog={false}
              title="Foodie-Finder"
              description="Discover recipes tailored to your taste."
              demoLink="https://valerie-food-finderr.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={darkjokes}
              isBlog={false}
              title="Dark Jokes"
              description="Daily dose of dark humor to explore and share."
              demoLink="https://valeriehumorr.netlify.app/"
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
