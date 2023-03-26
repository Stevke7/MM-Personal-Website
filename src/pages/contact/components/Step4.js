import {Form} from "react-bootstrap";

export function Step4({nextStep, data, inputHandler}) {
    return (
        <>
            <div className="d-flex flex-column align-items-center justify-content-center h-100">
                <h4 className="mb-3 w-50 text-center">About your company</h4>
                <Form className="my-5">
                    <Form.Group className="mb-3">
                        <Form.Label>Your Name <span className='text-gray'>(optional)</span></Form.Label>
                        <Form.Control onChange={inputHandler} defaultValue={data.name} name="name"/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Your Company Name <span className='text-gray'>(optional)</span></Form.Label>
                        <Form.Control onChange={inputHandler} defaultValue={data.companyName} name="companyName"/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Your Website/Instagram <span className='text-gray'></span></Form.Label>
                        <Form.Control onChange={inputHandler} defaultValue={data.website} name="website"/>
                    </Form.Group>
                </Form>
                <button onClick={nextStep} className="btn text-white mt-5">Next
                </button>
            </div>
        </>
    )
}