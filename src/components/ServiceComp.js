import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const ServiceComp = () => {
   return (
      <div className="services min-vh-100 d-flex align-items-center" id="service">
         <Container>
            <Row className="mb-5">
               <Col>
                  <h1 className="text-center fw-bold">Services</h1>
                  <p className="text-center">
                     Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                     Cumque, magni.
                  </p>
               </Col>
            </Row>
            <Row className="row-cols-lg-3 row-cols-md-2 row-cols-1 justify-content-center">
               <Col className="text-center py-5 px-3 ">
                  <i class="fa-solid fa-coins fs-2 mb-3"></i>
                  <h5 className="fw-bold">Harga Terjangkau</h5>
                  <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
               </Col>
               <Col className="text-center">
                  <i class="fa-solid fa-coins fs-2 mb-3 px-3 "></i>
                  <h5 className="fw-bold">Harga Terjangkau</h5>
                  <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
               </Col>
               <Col className="text-center">
                  <i class="fa-solid fa-coins fs-2 mb-3 px-3 "></i>
                  <h5 className="fw-bold">Harga Terjangkau</h5>
                  <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
               </Col>
            </Row>
         </Container>
      </div>
   );
};

export default ServiceComp;
