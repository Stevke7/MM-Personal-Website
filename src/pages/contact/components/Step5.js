import { Col, Form, Row } from "react-bootstrap";
import React from "react";

const Step5 = ({ inputHandler, data }) => {
    return (
        <Row className="flex-column align-items-center justify-content-center  max-height-385 ">
            <Col xs={12} md={6}>
                <h4 className="mb-3  text-center">Anything you’d like to
                    share about the project?</h4>
                <Form.Group className="mb-3 form-container">
                    <Form.Label>Project description</Form.Label>
                    <Form.Control style={{ height: "250px" }} as="textarea" onChange={inputHandler} type="text"
                        value={data.projectDescription} name="projectDescription" required />
                </Form.Group>
            </Col>
        </Row>
    );
};

export { Step5 };