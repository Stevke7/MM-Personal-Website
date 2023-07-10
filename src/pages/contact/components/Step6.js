import {Form} from "react-bootstrap";
import React from "react";

const Step6 = ({inputHandler, data}) => {
    return (
        <div className="d-flex flex-column align-items-center justify-content-center  max-height-385 ">
            <h4 className="mb-4  text-center">How can I contact you?</h4>
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
                    <Form.Control onChange={inputHandler} type="email" value={data.email} name="email" required/>
                </Form.Group>
        </div>
    );
};

export {Step6};