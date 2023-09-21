import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";

const FaqComp = () => {
   return (
      <div className="faq" id="faq">
         <Container>
            <Row className="mb-5">
               <Col>
                  <h2 className="text-center fw-bold">
                     Frequently Ask Question
                  </h2>
                  <p className="text-center">
                     Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </p>
               </Col>
            </Row>
            <Row className="row-cols-lg-2 row-cols-1 g-4">
               <Col>
                  <Accordion>
                     <Accordion.Item eventKey="0">
                        <Accordion.Header>Bagaimana Cara Menghubunginya ?</Accordion.Header>
                        <Accordion.Body>
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quidem.
                        </Accordion.Body>
                     </Accordion.Item>
                  </Accordion>
               </Col>
               <Col>
                  <Accordion>
                     <Accordion.Item eventKey="1">
                        <Accordion.Header>Apakah Bisa Sekalian Desain ?</Accordion.Header>
                        <Accordion.Body>
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quidem.
                        </Accordion.Body>
                     </Accordion.Item>
                  </Accordion>
               </Col>
               <Col>
                  <Accordion>
                     <Accordion.Item eventKey="2">
                        <Accordion.Header>Apakah Ada Paketnya ?</Accordion.Header>
                        <Accordion.Body>
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quidem.
                        </Accordion.Body>
                     </Accordion.Item>
                  </Accordion>
               </Col>
               <Col>
                  <Accordion>
                     <Accordion.Item eventKey="3">
                        <Accordion.Header>Bagaimana Rulesnya ?</Accordion.Header>
                        <Accordion.Body>
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quidem.
                        </Accordion.Body>
                     </Accordion.Item>
                  </Accordion>
               </Col>
               <Col>
                  <Accordion>
                     <Accordion.Item eventKey="4">
                        <Accordion.Header>Apakah Ada Maksimal Revisi Konsep ?</Accordion.Header>
                        <Accordion.Body>
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quidem.
                        </Accordion.Body>
                     </Accordion.Item>
                  </Accordion>
               </Col>
               <Col>
                  <Accordion>
                     <Accordion.Item eventKey="5">
                        <Accordion.Header>Apakah Bisa Untuk Bekerjasama ?</Accordion.Header>
                        <Accordion.Body>
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quidem.
                        </Accordion.Body>
                     </Accordion.Item>
                  </Accordion>
               </Col>
               <Col>
                  <Accordion>
                     <Accordion.Item eventKey="6">
                        <Accordion.Header>Apakah Bisa Konsultasi Dahulu ?</Accordion.Header>
                        <Accordion.Body>
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quidem.
                        </Accordion.Body>
                     </Accordion.Item>
                  </Accordion>
               </Col>
               <Col>
                  <Accordion>
                     <Accordion.Item eventKey="7">
                        <Accordion.Header>Berapa Lama Pengerjaannya ?</Accordion.Header>
                        <Accordion.Body>
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quidem.
                        </Accordion.Body>
                     </Accordion.Item>
                  </Accordion>
               </Col>
            </Row>
         </Container>
      </div>
   );
};

export default FaqComp;
