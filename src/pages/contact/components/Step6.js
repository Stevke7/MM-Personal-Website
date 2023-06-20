import {Form} from "react-bootstrap";
import React from "react";

const Step6 = ({ inputHandler, data }) => {
    return (
        <div className="d-flex flex-column align-items-center justify-content-center h-100">
            <h4 className="mb-3 w-50 text-center">About your company</h4>
            <Form className="my-5">
                <Form.Group className="mb-3">
                    <Form.Label>First name <span className="text-gray">(optional)</span></Form.Label>
                    <Form.Control onChange={inputHandler} type="text" value={data.firstName} name="firstName"/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Last Name <span className="text-gray">(optional)</span></Form.Label>
                    <Form.Control onChange={inputHandler} type="text" value={data.lastName} name="lastName"/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label> Your Email </Form.Label>
                    <Form.Control onChange={inputHandler} type="text" value={data.email} name="email"/>
                </Form.Group>
            </Form>
        </div>
    );
};

export { Step6 };