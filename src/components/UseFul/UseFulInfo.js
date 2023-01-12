import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { ImPointRight } from "react-icons/im";
import Notes from "./Notes"


function USeFulInfo() {
 
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={12} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
             Useful Information
            </h1>
            <p className="home-about-body">
              <Notes/>
            JAVASCRIPT
            Array methods
            String methods
            </p>
            <p className="home-about-body">
            CSS3
            Position
            Flexbox
            Grid
            </p>
            <p>
              
            </p>
            <p className="home-about-body">
            REACT JS
            Redux
            <br/>
            <ul>
            <li className="about-activity">
              <ImPointRight /> 
              <a
                href="https://www.edureka.co/blog/interview-questions/react-interview-questions/"
                style={{ color: "white",marginLeft:'10px'  }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Edureka Link
              </a>
            </li>
            <li className="about-activity">
              <ImPointRight /> 
              <a
                href="https://www.youtube.com/hashtag/react_interview_questions"
                style={{ color: "white",marginLeft:'10px' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Youtube Link
              </a>
            </li>
           
          </ul>
            <li className="social-icons">
            
              <br/>
             
              </li>
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default USeFulInfo;
