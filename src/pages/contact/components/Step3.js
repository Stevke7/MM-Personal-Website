import {Form} from "react-bootstrap";

export function Step3({radioHandler, data, nextStep,}) {


    return (
        <>
            <div className="d-flex flex-column align-items-center justify-content-center  max-height-385 ">
                <h4 className="mb-3 text-center">What’s the budget
                    for your project?</h4>
                {/*<Form className="mt-5">*/}
                    <Form.Check
                        onClick={radioHandler}
                        checked={data.minBudget}
                        id='Web / UI Design'
                        name="minBudget"
                        type="radio"
                        label="€0 - €5,000"
                        className="cursor-pointer"
                    />
                    <Form.Check
                        onChange={radioHandler}
                        checked={data.middleBudget}
                        id='Logo Design / Branding'
                        name="middleBudget"
                        type="radio"
                        label="€5,000 - €10,000"
                        className="cursor-pointer my-3"
                    />
                    <Form.Check
                        onChange={radioHandler}
                        checked={data.maxBudget}
                        id='Graphic Design'
                        name="maxBudget"
                        type="radio"
                        label="€10,000 >"
                        className="cursor-pointer"
                    />
                {/*</Form>*/}
            </div>

        </>

    )
}