import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const ServiceComp = () => {
  return (
    <div className="services min-vh-100 d-flex align-items-center" id="service">
      <Container>
        <Row className="mb-5">
          <Col>
            <h1 className="text-center fw-bold" data-aos="fade-up">
              Services
            </h1>
            <p className="text-center" data-aos="fade-up" data-aos-delay="200">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque,
              magni.
            </p>
          </Col>
        </Row>
        <Row className="row-cols-lg-4 row-cols-md-2 row-cols-1 justify-content-center">
          <Col
            className="text-center py-5 px-3"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <i class="fa-solid fa-person-digging fs-2 mb-3 px-3 "></i>
            <h5 className="fw-bold">Contractor</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </Col>
          <Col
            className="text-center py-5 px-3"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <i class="fa-solid fa-house-chimney-window fs-2 mb-3 px-3 "></i>
            <h5 className="fw-bold">Design 3D</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </Col>
          <Col
            className="text-center py-5 px-3"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            <i class="fa-solid fa-paint-roller fs-2 mb-3 px-3"></i>
            <h5 className="fw-bold">Interior</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </Col>
          <Col
            className="text-center py-5 px-3"
            data-aos="fade-up"
            data-aos-delay="1000"
          >
            <i class="fa-solid fa-couch fs-2 mb-3 px-3"></i>
            <h5 className="fw-bold">Furniture</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ServiceComp;
