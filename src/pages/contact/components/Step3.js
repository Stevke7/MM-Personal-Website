import {Form, Modal} from "react-bootstrap";

export function Step3({checkboxHandler, data, nextStep,}) {

    return (
        <>


            <div className="d-flex flex-column align-items-center justify-content-center h-100">
                <h4 className="mb-3 w-50 text-center">What’s the budget
                    for your project?</h4>
                <Form className="my-5">
                    <Form.Check
                        onChange={checkboxHandler}
                        defaultChecked={data.min}
                        id='Web / UI Design'
                        name="min"
                        type="checkbox"
                        label="€0 - €5,000"
                        className="cursor-pointer"
                    />
                    <Form.Check
                        onChange={checkboxHandler}
                        defaultChecked={data.middle}
                        id='Logo Design / Branding'
                        name="middle"
                        type="checkbox"
                        label="€5,000 - €10,000"
                        className="cursor-pointer my-3"
                    />
                    <Form.Check
                        onChange={checkboxHandler}
                        defaultChecked={data.max}
                        id='Graphic Design'
                        name="max"
                        type="checkbox"
                        label="€10,000 >"
                        className="cursor-pointer"
                    />
                </Form>
                <button onClick={nextStep} className="btn text-white mt-5">Next
                </button>
            </div>

        </>

    )
}