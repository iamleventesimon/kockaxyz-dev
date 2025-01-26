import Link from 'next/link';
import React from 'react';
import { Col, Row } from 'reactstrap';

const About = () => (
  <>

    <h1 className="text-center" data-testid="hero-title">
      Kik vagyunk?
    </h1>
    <br/>

    <Row data-testid="content-about">

      <Col key={1} md={1} className="mb-6">
      </Col>
      <Col key={2} md={4} className="mb-6">
        <img src="kockaSL.png" height="300px" alt="image" />

        <h5>

          Simon Levente
        </h5>
        <p>
          szoftverfejlesztő, matematikus
        </p>
      </Col>
      
      <Col key={3} md={2} className="mb-6">
      </Col>
      <Col key={4} md={4} className="float-md-left mb-6">

        <img src="kockaKM.jpeg" height="300px" alt="image" />
        <h5 >
          Kristály Marót
        </h5>
        <p>
          matematikus egyetemi hallgató
      
        </p>
      </Col>

      <Col key={5} md={1} className="mb-6">
      </Col>
    </Row>


  </>
);

export default About;
