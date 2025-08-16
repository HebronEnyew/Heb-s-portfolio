import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello there <span className="purple">Hebron  </span> here.
            Born and raised in <span className="purple"> Bahir Dar, Ethiopia.</span>
            <br />I'm a software engineering 4th year student at Bahir Dar University.
            <br />
            <br />
            Apart from coding, what do I enjoy?
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
            <li className="about-activity">
              <ImPointRight /> A beautiful sky
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "The best way to predict the future is to invent it."{" "}
          </p>
          <footer className="blockquote-footer">Alan Kay</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
