import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const FooterComp = () => {
   return (
      <div className="footer pb-3 pt-4">
         <Container>
            <Row>
               <Col>
                  <h3 className="fw-bold text-white"> Elevasi</h3>
               </Col>
               <Col className="text-end">
                  <a href="https://www.instagram.com/elevasi.kontraktor/"><i class="fa-brands fa-instagram text-white fs-1 mx-lg-3 mx-2"></i></a>
                  <a href="https://www.instagram.com/elevasi.kontraktor/"><i class="fa-brands fa-facebook text-white fs-1 mx-lg-3 mx-2"></i></a>
                  <a href="https://wa.link/i8ydaa"><i class="fa-brands fa-whatsapp text-white fs-1 mx-lg-3 mx-2"></i></a>
               </Col>
            </Row>
            <Row>
               <Col>
                  <p className="text-center text-white-50">
                     &copy; Copyright by Elevasi Kontraktor 2023, All Right Reserved.
                  </p>
               </Col>
            </Row>
         </Container>
      </div>
   );
};

export default FooterComp;
