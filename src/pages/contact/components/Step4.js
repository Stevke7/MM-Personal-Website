import {Form} from "react-bootstrap";
import React from "react";

const Step4 = ({ inputHandler, data }) => {
    return (
        <div className="d-flex flex-column align-items-center justify-content-center h-100">
            <h4 className="mb-3 w-50 text-center">About your company</h4>
            <Form className="my-5">
                <Form.Group className="mb-3">
                    <Form.Label>Your Name <span className="text-gray">(optional)</span></Form.Label>
                    <Form.Control onChange={inputHandler} type="text" value={data.name} name="name"/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Your Company Name <span className="text-gray">(optional)</span></Form.Label>
                    <Form.Control onChange={inputHandler} type="text" value={data.companyName} name="companyName"/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Your Website/Instagram </Form.Label>
                    <Form.Control onChange={inputHandler} type="text" value={data.website} name="website"/>
                </Form.Group>
            </Form>
        </div>
    );
};

export { Step4 };