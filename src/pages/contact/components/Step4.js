import { Col, Form, Row } from "react-bootstrap";
import React from "react";

const Step4 = ({ inputHandler, data }) => {
    return (
        <Row className="flex-column align-items-center justify-content-center  max-height-385 w-100 ">
            <Col xs={12} md={6}>
                <h4 className="mb-3  text-center">About your company</h4>
                <Form.Group className="mb-3 form-container">
                    <Form.Label>Your Name <span className="text-gray">(optional)</span></Form.Label>
                    <Form.Control onChange={inputHandler} type="text" value={data.name} name="name" />
                </Form.Group>
                <Form.Group className="mb-3 form-container">
                    <Form.Label>Your Company Name <span className="text-gray">(optional)</span></Form.Label>
                    <Form.Control onChange={inputHandler} type="text" value={data.companyName} name="companyName" />
                </Form.Group>
                <Form.Group className="mb-3 form-container" >
                    <Form.Label>Your Website/Instagram </Form.Label>
                    <Form.Control onChange={inputHandler} required type="link" value={data.website} name="website" />
                </Form.Group>
            </Col>
        </Row>
    );
};

export { Step4 };