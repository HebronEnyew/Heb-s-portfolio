import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiPostman,
} from "react-icons/si";
import {FaCode} from  "react-icons/fa"
function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaCode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
    </Row>
  );
}

export default Toolstack;
