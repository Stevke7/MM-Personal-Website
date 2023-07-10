import {Form} from "react-bootstrap";
import React from "react";

const Step5 = ({inputHandler, data}) => {
    return (
        <div className="d-flex flex-column align-items-center justify-content-center  max-height-385 ">
            <h4 className="mb-3 w-75 text-center">Anything you’d like to
                share about the project?</h4>
                <Form.Group className="mb-3">
                    <Form.Label>Project description</Form.Label>
                    <Form.Control style={{height: "250px"}} as="textarea" onChange={inputHandler} type="text"
                                  value={data.projectDescription} name="projectDescription" required/>
                </Form.Group>
        </div>
    );
};

export {Step5};