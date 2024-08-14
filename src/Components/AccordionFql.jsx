import React from "react";
import { Container } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

const AccordionFql = () => {
  return (
    <>
      <Container className=" faq_section mb-3">
        <h3 className="text-center mb-0 title">Faq</h3>
        <Accordion flush className=" w-75 m-auto">
          <Accordion.Item eventKey="0">
            <Accordion.Header>What is the NiftyTrader Prime Plan?</Accordion.Header>
            <Accordion.Body className="accordion_header">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>What are the premium features included with the prime plan?</Accordion.Header>
            <Accordion.Body className="accordion_header">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Can I try the premium features before I subscribe to the prime plan?</Accordion.Header>
            <Accordion.Body className="accordion_header">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>How do I subscribe to the prime plan?</Accordion.Header>
            <Accordion.Body className="accordion_header">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>Can I upgrade my subscription level?</Accordion.Header>
            <Accordion.Body className="accordion_header">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>What payment methods do you accept?</Accordion.Header>
            <Accordion.Body className="accordion_header">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header>Do you offer any discounts or promotions?</Accordion.Header>
            <Accordion.Body className="accordion_header">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </>
  );
};

export default AccordionFql;
