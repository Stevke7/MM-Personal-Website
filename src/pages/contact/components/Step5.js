import {Form} from "react-bootstrap";
import React from "react";

const Step5 = ({ inputHandler, data }) => {
    return (
        <div className="d-flex flex-column align-items-center justify-content-center h-100">
            <h4 className="mb-3 w-50 text-center">Anything you’d like to
                share about the project?</h4>
            <Form className="my-5">
                <Form.Group className="mb-3">
                    <Form.Label>Your Name </Form.Label>
                    <Form.Control style={{height:"250px"}} as="textarea"  onChange={inputHandler} type="text" value={data.projectDescription} name="projectDescription" required/>
                </Form.Group>
            </Form>
        </div>
    );
};

export { Step5 };